import { Plus } from "lucide-react";

function Section({ title, children }) {
  return (
    <section className="mb-8" id="menu">
      <h2 className="text-xl font-semibold mb-3 text-gray-800">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {children}
      </div>
    </section>
  );
}

function ItemCard({ name, price, onAdd }) {
  return (
    <div className="p-4 rounded-xl border bg-white hover:shadow-md transition-shadow flex items-center justify-between gap-3">
      <div>
        <p className="font-medium text-gray-800">{name}</p>
        <p className="text-emerald-700 font-semibold">₹{price}</p>
      </div>
      <button
        onClick={onAdd}
        className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-lg text-sm"
      >
        <Plus size={16} /> Add
      </button>
    </div>
  );
}

export default function Menu({ data, onAddToCart }) {
  return (
    <div>
      {data.map((section) => (
        <Section key={section.category} title={section.category}>
          {section.items.map((item) => (
            <ItemCard
              key={`${section.category}-${item.name}`}
              name={item.name}
              price={item.price}
              onAdd={() => onAddToCart({ name: item.name, price: item.price })}
            />
          ))}
        </Section>
      ))}
    </div>
  );
}
