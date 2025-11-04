import { useEffect, useState } from "react";
import { History } from "lucide-react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

export default function Orders({ customerMobile }) {
  const [mobile, setMobile] = useState(customerMobile || "");
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (customerMobile && customerMobile !== mobile) {
      setMobile(customerMobile);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customerMobile]);

  async function fetchWithRetry(url, retries = 2) {
    try {
      const res = await fetch(url);
      if (res.status === 429 && retries > 0) {
        const wait = 400 * Math.pow(2, 2 - retries);
        await new Promise((r) => setTimeout(r, wait));
        return await fetchWithRetry(url, retries - 1);
      }
      return res;
    } catch (e) {
      if (retries > 0) {
        await new Promise((r) => setTimeout(r, 400));
        return await fetchWithRetry(url, retries - 1);
      }
      throw e;
    }
  }

  const fetchOrders = async () => {
    setError("");
    const digits = (mobile || "").replace(/\D/g, "");
    if (!digits || digits.length !== 10) {
      setError("Enter a valid 10-digit mobile to load orders.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetchWithRetry(`${API_BASE}/orders?mobile=${digits}`);
      if (!res.ok) {
        const txt = await res.text();
        if (res.status === 429) {
          throw new Error("We’re experiencing high demand. Please try again shortly.");
        }
        throw new Error(txt || "Failed to fetch orders");
      }
      const data = await res.json();
      setOrders(Array.isArray(data) ? data : []);
    } catch (e) {
      setError(e.message || "Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="orders" className="bg-white rounded-2xl border p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <History size={18} /> Order History
        </h2>
        <div className="flex items-center gap-2">
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="10-digit mobile"
            className="w-44 px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            onClick={fetchOrders}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Loading..." : "Load"}
          </button>
        </div>
      </div>

      {error && <p className="text-sm text-red-600 mb-3">{error}</p>}

      {orders.length === 0 ? (
        <p className="text-gray-500">No orders found. Use your mobile number to fetch your past orders.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map((o) => (
            <li key={o.id} className="p-4 rounded-xl border bg-gray-50">
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-gray-800">Order #{o.id?.slice(-6)}</p>
                <p className="text-sm text-gray-600">{o.created_at ? new Date(o.created_at).toLocaleString() : ""}</p>
              </div>
              <ul className="text-sm text-gray-700 list-disc pl-5 mb-2">
                {o.items?.map((it, idx) => (
                  <li key={idx}>{it.name} x{it.qty} — ₹{it.price * it.qty}</li>
                ))}
              </ul>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Payment: {String(o.payment_method || "").toUpperCase()}</span>
                <span className="font-semibold">Total: ₹{o.total}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
