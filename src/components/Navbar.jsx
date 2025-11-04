import { ShoppingCart } from "lucide-react";

export default function Navbar({ cartCount, onGoToCart }) {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600" />
          <div>
            <h1 className="text-xl font-bold tracking-tight">SpiceHub Restaurant</h1>
            <p className="text-xs text-gray-500 -mt-0.5">Tastes that feel like home</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#menu" className="hover:text-gray-900">Menu</a>
          <a href="#cart" className="hover:text-gray-900">Cart</a>
          <a href="#checkout" className="hover:text-gray-900">Checkout</a>
        </nav>
        <button
          onClick={onGoToCart}
          className="relative inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors"
          aria-label="Open cart"
        >
          <ShoppingCart size={18} />
          <span className="hidden sm:inline">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 h-5 min-w-[1.25rem] px-1.5 rounded-full bg-red-500 text-[10px] font-semibold grid place-items-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
