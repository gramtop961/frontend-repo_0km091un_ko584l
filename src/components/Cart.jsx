import { Minus, Plus, Trash2, Percent } from "lucide-react";

export default function Cart({
  items,
  onIncrement,
  onDecrement,
  onRemove,
  couponCode,
  setCouponCode,
  discount,
  onApplyCoupon,
  subtotal,
}) {
  const hasItems = items.length > 0;

  return (
    <section id="cart" className="bg-white rounded-2xl border p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Your Cart</h2>
        <span className="text-sm text-gray-500">{items.length} item(s)</span>
      </div>

      {!hasItems ? (
        <p className="text-gray-500">Your cart is empty. Add some tasty dishes from the menu.</p>
      ) : (
        <div className="space-y-4">
          <ul className="divide-y">
            {items.map((it) => (
              <li key={it.name} className="py-3 flex items-center justify-between gap-4">
                <div>
                  <p className="font-medium text-gray-800">{it.name}</p>
                  <p className="text-sm text-gray-500">₹{it.price} each</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center gap-2 border rounded-lg">
                    <button
                      className="px-2 py-1 text-gray-700 hover:bg-gray-50"
                      onClick={() => onDecrement(it.name)}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="min-w-[2ch] text-center">{it.qty}</span>
                    <button
                      className="px-2 py-1 text-gray-700 hover:bg-gray-50"
                      onClick={() => onIncrement(it.name)}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <p className="w-16 text-right font-semibold">₹{it.qty * it.price}</p>
                  <button
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                    onClick={() => onRemove(it.name)}
                    aria-label={`Remove ${it.name}`}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="p-4 bg-gray-50 rounded-xl border flex flex-col gap-3">
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <Percent size={18} />
              <span>Coupon / Offer</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Enter coupon code (e.g., DEMO10)"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                className="flex-1 px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                onClick={onApplyCoupon}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg"
              >
                Apply
              </button>
            </div>
            {discount > 0 ? (
              <p className="text-sm text-emerald-700">Coupon applied! You saved ₹{discount}.</p>
            ) : (
              <p className="text-sm text-gray-500">No active coupons applied yet. This section is ready for future offers.</p>
            )}
          </div>

          <div className="flex items-center justify-between text-gray-700">
            <span>Subtotal</span>
            <span className="font-semibold">₹{subtotal}</span>
          </div>
          <div className="flex items-center justify-between text-gray-700">
            <span>Discount</span>
            <span className="font-semibold text-emerald-700">- ₹{discount}</span>
          </div>
          <div className="flex items-center justify-between text-gray-900 text-lg font-bold">
            <span>Total</span>
            <span>₹{Math.max(subtotal - discount, 0)}</span>
          </div>
        </div>
      )}
    </section>
  );
}
