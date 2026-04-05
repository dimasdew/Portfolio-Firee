import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

const PRODUCTS = [
  { id: 1, name: "Mineral Water", price: "0.02" },
  { id: 2, name: "Mineral Water", price: "0.02" },
  { id: 3, name: "Mineral Water", price: "0.02" },
  { id: 4, name: "Mineral Water", price: "0.02" },
  { id: 5, name: "Mineral Water", price: "0.02" },
  { id: 6, name: "Mineral Water", price: "0.02" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--snow)" }}>
      <Navbar variant="dashboard" isLoggedIn />

      <main className="max-w-screen-xl mx-auto px-6 py-8">
        {/* Top info bar */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-extrabold" style={{ fontFamily: "Syne, sans-serif", color: "var(--midnight)" }}>
              Marketplace
            </h1>
            <p className="text-sm opacity-50 mt-0.5" style={{ fontFamily: "DM Sans, sans-serif" }}>
              {PRODUCTS.length} products available
            </p>
          </div>

          {/* Filter chips */}
          <div className="hidden md:flex gap-2">
            {["All", "Food & Drink", "Electronics", "Fashion"].map((cat, i) => (
              <button
                key={cat}
                className="text-xs px-4 py-1.5 rounded-full font-medium transition-all"
                style={i === 0
                  ? { background: "var(--navy)", color: "var(--sand)", fontFamily: "DM Sans, sans-serif" }
                  : { background: "rgba(110,172,218,0.2)", color: "var(--midnight)", fontFamily: "DM Sans, sans-serif", border: "1px solid rgba(110,172,218,0.3)" }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCTS.map((p, idx) => (
            <div key={p.id} className="fade-in" style={{ animationDelay: `${idx * 0.07}s`, opacity: 0 }}>
              <ProductCard {...p} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
