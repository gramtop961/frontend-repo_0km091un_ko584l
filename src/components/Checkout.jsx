import { CreditCard, Wallet, Banknote } from "lucide-react";

const methods = [
  { id: "cod", label: "Cash on Delivery", icon: Banknote },
  { id: "card", label: "Card", icon: CreditCard },
  { id: "upi", label: "UPI", icon: Wallet },
];

export default function Checkout({ total, paymentMethod, setPaymentMethod, onPlaceOrder, disabled }) {
  return (
    <section id="checkout" className="bg-white rounded-2xl border p-5">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Checkout</h2>

      <div className="grid sm:grid-cols-3 gap-3 mb-6">
        {methods.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setPaymentMethod(id)}
            className={`flex items-center gap-3 p-4 rounded-xl border transition-colors text-left ${
              paymentMethod === id ? "border-emerald-600 bg-emerald-50" : "hover:bg-gray-50"
            }`}
          >
            <Icon className={paymentMethod === id ? "text-emerald-600" : "text-gray-600"} size={20} />
            <div>
              <p className="font-medium text-gray-800">{label}</p>
              <p className="text-xs text-gray-500">{id === "cod" ? "Pay when you receive your order" : id === "card" ? "All major cards supported" : "Pay with UPI apps"}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between mb-4">
        <p className="text-gray-700">Amount to Pay</p>
        <p className="text-2xl font-bold">₹{total}</p>
      </div>

      <button
        onClick={onPlaceOrder}
        disabled={disabled}
        className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-base font-semibold px-4 py-3 rounded-xl"
      >
        Place Order
      </button>
    </section>
  );
}
