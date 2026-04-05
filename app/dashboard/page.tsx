"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";

const ALL_PRODUCTS = [
  { id: 1, name: "Mineral Water", price: "0.02", category: "Beverage" },
  { id: 2, name: "Sparkling Water", price: "0.03", category: "Beverage" },
  { id: 3, name: "Wireless Earbuds", price: "0.15", category: "Electronics" },
  { id: 4, name: "Smart Watch", price: "0.40", category: "Electronics" },
  { id: 5, name: "Cotton T-Shirt", price: "0.05", category: "Fashion" },
  { id: 6, name: "Denim Jacket", price: "0.12", category: "Fashion" },
  { id: 7, name: "Granola Bar", price: "0.01", category: "Food" },
  { id: 8, name: "Instant Noodles", price: "0.01", category: "Food" },
];

const CATS = ["All", "Beverage", "Electronics", "Fashion", "Food"];

export default function DashboardPage() {
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("All");

  const filtered = ALL_PRODUCTS.filter((p) => {
    const matchCat = activeCat === "All" || p.category === activeCat;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div style={{ minHeight: "100vh", background: "var(--midnight)" }}>
      <Navbar variant="dashboard" onSearch={setSearch} />

      <main style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 24px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
          <div>
            <p style={{ fontSize: 11, color: "rgba(110,172,218,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Marketplace</p>
            <h1 style={{ fontFamily: "Space Grotesk", fontWeight: 700, fontSize: 24, color: "white", letterSpacing: "-0.02em" }}>
              Browse Products
              {search && <span style={{ fontSize: 14, fontWeight: 400, color: "rgba(110,172,218,0.5)", marginLeft: 10 }}>"{search}"</span>}
            </h1>
          </div>

          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {CATS.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                style={{
                  padding: "6px 14px", borderRadius: 6, fontSize: 12, fontWeight: 500,
                  background: activeCat === cat ? "var(--sky)" : "transparent",
                  color: activeCat === cat ? "var(--midnight)" : "rgba(110,172,218,0.5)",
                  border: activeCat === cat ? "none" : "1px solid var(--border)",
                  cursor: "pointer", fontFamily: "Space Grotesk", transition: "all 0.15s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="glow-line" style={{ marginBottom: 28 }} />

        <p style={{ fontSize: 12, color: "rgba(110,172,218,0.4)", marginBottom: 16 }}>
          {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
        </p>

        {filtered.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
            {filtered.map((p, i) => (
              <div key={p.id} className="fade-up" style={{ animationDelay: `${i * 0.06}s`, opacity: 0 }}>
                <ProductCard {...p} />
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <p style={{ fontSize: 32, marginBottom: 12, opacity: 0.2 }}>🔍</p>
            <p style={{ fontSize: 15, color: "rgba(110,172,218,0.4)", fontWeight: 500 }}>No products found</p>
            <p style={{ fontSize: 13, color: "rgba(110,172,218,0.25)", marginTop: 4 }}>Try a different search or category</p>
          </div>
        )}
      </main>
    </div>
  );
}