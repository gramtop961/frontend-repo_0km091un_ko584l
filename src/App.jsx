import { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function buildMenu() {
  return [
    {
      category: "Starters",
      items: [
        { name: "Veg Manchuria", price: 90 },
        { name: "Gobi Manchuria", price: 100 },
        { name: "Crispy Corn", price: 90 },
        { name: "Baby Corn Manchuria", price: 110 },
        { name: "Paneer Manchuria", price: 130 },
        { name: "Chilli Panner", price: 130 },
        { name: "Gobi 65", price: 130 },
        { name: "Chicken Manchuria", price: 130 },
        { name: "Chilli Chicken", price: 130 },
        { name: "Kaju Chicken", price: 150 },
        { name: "Ginger Chicken", price: 130 },
        { name: "Chicken 65", price: 130 },
        { name: "Chilli Paneer", price: 130 },
        { name: "Egg 65", price: 110 },
        { name: "Egg Manchuria", price: 110 },
        { name: "Egg Chilli", price: 110 },
        { name: "Mushroom Manchuria", price: 129 },
        { name: "Chicken Drum Sticks", price: 180 },
        { name: "Chicken Wings", price: 200 },
        { name: "Garlic Chicken", price: 130 },
        { name: "Butter Garlic Chicken", price: 140 },
        { name: "Schezwan Prawns", price: 210 },
        { name: "Chilly Prawns", price: 180 },
        { name: "Crispy Prawns", price: 200 },
        { name: "Maggi Pakora", price: 120 },
      ],
    },
    {
      category: "Rolls",
      items: [
        { name: "Veg Roll", price: 90 },
        { name: "Veg Cheese Roll", price: 120 },
        { name: "Egg Roll", price: 100 },
        { name: "Paneer Roll", price: 120 },
        { name: "Paneer Cheese Roll", price: 140 },
        { name: "Chicken Roll", price: 130 },
        { name: "Chicken Cheese Roll", price: 150 },
        { name: "Egg Chicken Roll", price: 150 },
        { name: "Mutton Keema Roll", price: 160 },
        { name: "Double Chicken Cheese Roll", price: 160 },
      ],
    },
    {
      category: "Breads & Puffs",
      items: [
        { name: "Garlic Bread", price: 70 },
        { name: "Aloo Samosa (2 pieces)", price: 30 },
        { name: "Veg Puff", price: 35 },
        { name: "Egg Puff", price: 50 },
        { name: "Chicken Puff", price: 50 },
        { name: "Paneer Puff", price: 50 },
        { name: "Potato Wedges", price: 80 },
        { name: "French Fries", price: 80 },
      ],
    },
    {
      category: "Dosa",
      items: [
        { name: "Rava Dosa", price: 55 },
        { name: "Onion Rava Dosa", price: 65 },
        { name: "Plain Dosa", price: 35 },
        { name: "Masala Dosa", price: 50 },
        { name: "Onion Dosa", price: 50 },
        { name: "Onion Rava Masala Dosa", price: 65 },
        { name: "Pizza Dosa", price: 130 },
        { name: "Upma Dosa", price: 80 },
        { name: "Jeera Dosa", price: 75 },
        { name: "Butter Dosa", price: 60 },
        { name: "Butter Masala Dosa", price: 75 },
        { name: "Butter Cheese Dosa", price: 100 },
        { name: "Butter Corn Dosa", price: 85 },
        { name: "Butter Karam Dosa", price: 85 },
        { name: "Double Butter Dosa", price: 70 },
        { name: "Paneer Dosa", price: 95 },
        { name: "Paneer Masala Dosa", price: 110 },
        { name: "Chilli Paneer Dosa", price: 100 },
        { name: "Paneer Schezwan Dosa", price: 110 },
        { name: "Paneer Corn Dosa", price: 110 },
        { name: "Masala Uttapam", price: 110 },
        { name: "Onion Uttapam", price: 80 },
        { name: "Kaju Dosa", price: 135 },
        { name: "Butter Babycorn Dosa", price: 90 },
        { name: "Spicy Babycorn Dosa", price: 90 },
        { name: "Paneer Babycorn Dosa", price: 110 },
        { name: "Cheese Babycorn Dosa", price: 100 },
        { name: "Cheese Dosa", price: 100 },
        { name: "Cheese Masala Dosa", price: 100 },
        { name: "Double Cheese Dosa", price: 120 },
        { name: "Cheese Schezwan Dosa", price: 130 },
        { name: "Chilli Cheese Dosa", price: 90 },
        { name: "Cheese Corn Dosa", price: 105 },
        { name: "Spl Ghee Masala Dosa", price: 80 },
        { name: "Ghee Karam Dosa", price: 75 },
        { name: "Plain Ghee Dosa", price: 65 },
        { name: "Plain Uttapam", price: 65 },
        { name: "Butter Uttapam", price: 85 },
        { name: "Cheese Uttapam", price: 110 },
        { name: "Kaju Cheese Uttapam", price: 140 },
        { name: "Panner Uttapam", price: 110 },
        { name: "Paneer Cheese Uttapam", price: 130 },
      ],
    },
    {
      category: "Idli",
      items: [
        { name: "Plain Idli (4 pieces)", price: 40 },
        { name: "Butter Idli", price: 50 },
        { name: "Plain Ghee Idli", price: 55 },
        { name: "Karam Podi Idli", price: 55 },
        { name: "Guntur Ghee Idli", price: 65 },
        { name: "Sambhar Idli", price: 60 },
        { name: "Paneer Schezwan Idli", price: 85 },
        { name: "Cheese Schezwan Idli", price: 100 },
        { name: "Idli 65", price: 80 },
      ],
    },
    {
      category: "Fried Rice",
      items: [
        { name: "Veg Fried Rice", price: 90 },
        { name: "Veg Manchurian Fried Rice", price: 110 },
        { name: "Gobi Fried Rice", price: 110 },
        { name: "Egg Fried Rice", price: 110 },
        { name: "Double Egg Fried Rice", price: 120 },
        { name: "Double Egg Dble Chicken Fried Rice", price: 150 },
        { name: "Paneer Fried Rice", price: 120 },
        { name: "Mixed Non Veg Fried Rice", price: 180 },
        { name: "Babycorn Fried Rice", price: 120 },
        { name: "Mushroom Fried Rice", price: 120 },
        { name: "Chicken Fried Rice", price: 130 },
        { name: "Double chicken fried rice", price: 140 },
        { name: "Chicken Schezwan Fried Rice", price: 140 },
      ],
    },
    {
      category: "Noodles",
      items: [
        { name: "Veg Noodles", price: 90 },
        { name: "Veg Manchurian Noodles", price: 100 },
        { name: "Gobi Noodles", price: 110 },
        { name: "Egg Noodles", price: 110 },
        { name: "Double Egg Noodles", price: 120 },
        { name: "Chicken Noodles", price: 120 },
        { name: "Double Chicken Noodles", price: 140 },
        { name: "Paneer Noodles", price: 120 },
        { name: "Mushroom Noodles", price: 120 },
        { name: "Babycorn Noodles", price: 110 },
        { name: "Double Egg Dble Chicken Noodles", price: 150 },
        { name: "Veg Schezwan Noodles", price: 110 },
        { name: "Chicken Schezwan Noodles", price: 130 },
      ],
    },
    {
      category: "Tea & Coffee",
      items: [
        { name: "Tea", price: 20 },
        { name: "Filter Coffee", price: 25 },
        { name: "Milk", price: 20 },
        { name: "Black Coffee", price: 25 },
      ],
    },
  ];
}

export default function App() {
  const menuData = useMemo(() => buildMenu(), []);
  const [cart, setCart] = useState({});
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [customerName, setCustomerName] = useState("");
  const [customerMobile, setCustomerMobile] = useState("");
  const cartRef = useRef(null);

  useEffect(() => {
    // Prefill from previous checkout if available
    const savedName = localStorage.getItem("bb_customer_name");
    const savedMobile = localStorage.getItem("bb_customer_mobile");
    if (savedName) setCustomerName(savedName);
    if (savedMobile) setCustomerMobile(savedMobile);
  }, []);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev[item.name] || { ...item, qty: 0 };
      return { ...prev, [item.name]: { ...existing, qty: existing.qty + 1 } };
    });
  };

  const removeFromCart = (name) => {
    setCart((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const increment = (name) => {
    setCart((prev) => ({ ...prev, [name]: { ...prev[name], qty: prev[name].qty + 1 } }));
  };

  const decrement = (name) => {
    setCart((prev) => {
      const item = prev[name];
      if (!item) return prev;
      const newQty = item.qty - 1;
      if (newQty <= 0) {
        const next = { ...prev };
        delete next[name];
        return next;
      }
      return { ...prev, [name]: { ...item, qty: newQty } };
    });
  };

  const items = Object.values(cart);
  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);

  const applyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    if (!code) {
      setDiscount(0);
      return;
    }
    if (code === "DEMO10") {
      const d = Math.round(subtotal * 0.1);
      setDiscount(d);
    } else {
      setDiscount(0);
      alert("Invalid or inactive coupon. Try DEMO10.");
    }
  };

  const total = Math.max(subtotal - discount, 0);

  const placeOrder = () => {
    if (items.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const name = customerName.trim();
    const mobile = customerMobile.trim();

    if (!name) {
      alert("Please enter your name.");
      return;
    }

    if (!mobile || !/^\d{10}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Save customer details on successful confirmation
    localStorage.setItem("bb_customer_name", name);
    localStorage.setItem("bb_customer_mobile", mobile);

    const summary = `Order placed!\nName: ${name}\nMobile: ${mobile}\nItems: ${items
      .map((i) => `${i.name} x${i.qty}`)
      .join(", ")}\nSubtotal: ₹${subtotal}\nDiscount: ₹${discount}\nTotal: ₹${total}\nPayment: ${paymentMethod.toUpperCase()}`;
    alert(summary);

    // Reset cart (keep name & mobile for convenience)
    setCart({});
    setCouponCode("");
    setDiscount(0);
    setPaymentMethod("cod");
  };

  const goToCart = () => {
    const el = document.getElementById("cart");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white">
      <Navbar cartCount={items.reduce((n, it) => n + it.qty, 0)} onGoToCart={goToCart} />

      <main className="max-w-6xl mx-auto px-4 py-8 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-2">
              Our Menu
            </h2>
            <p className="text-gray-600">Add items to your cart and checkout with your preferred payment method.</p>
          </div>
          <Menu data={menuData} onAddToCart={addToCart} />
        </div>

        <div className="space-y-6">
          <Cart
            ref={cartRef}
            items={items}
            onIncrement={increment}
            onDecrement={decrement}
            onRemove={removeFromCart}
            couponCode={couponCode}
            setCouponCode={setCouponCode}
            discount={discount}
            onApplyCoupon={applyCoupon}
            subtotal={subtotal}
          />

          <Checkout
            total={total}
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            onPlaceOrder={placeOrder}
            disabled={items.length === 0}
            customerName={customerName}
            setCustomerName={setCustomerName}
            customerMobile={customerMobile}
            setCustomerMobile={setCustomerMobile}
          />
        </div>
      </main>

      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Bits & Bites. All rights reserved.</p>
          <p>Made with love for great food.</p>
        </div>
      </footer>
    </div>
  );
}
