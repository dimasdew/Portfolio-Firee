"use client";

import Link from "next/link";

interface Props { id: number; name: string; price: string; category?: string; }

export default function ProductCard({ id, name, price, category = "Consumer" }: Props) {
  return (
    <div className="card card-lift" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
      {/* Top bar */}
      <div style={{ padding: "12px 14px 10px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(110,172,218,0.12)", border: "1px solid rgba(110,172,218,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "var(--sky)" }}>⬡</div>
          <span style={{ fontSize: 10, color: "rgba(110,172,218,0.4)", fontFamily: "Space Mono", letterSpacing: "0.04em" }}>ETH</span>
        </div>
        <span className="badge badge-sky" style={{ fontSize: 9, padding: "2px 7px" }}>{category}</span>
      </div>

      {/* Image area */}
      <div style={{ padding: "20px 14px 14px", flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p style={{ fontWeight: 600, fontSize: 13, color: "white", marginBottom: 16, textAlign: "center" }}>{name}</p>

        {/* Product placeholder */}
        <div style={{ width: 80, height: 104, borderRadius: 8, background: "rgba(110,172,218,0.06)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
          <span style={{ fontSize: 36, opacity: 0.2 }}>💧</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 2 }}>
          <span style={{ fontSize: 10, color: "var(--sky)", fontFamily: "Space Mono" }}>⬡</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: "var(--sand)", fontFamily: "Space Mono" }}>{price}</span>
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: "10px 14px", borderTop: "1px solid var(--border)" }}>
        <Link href={`/dashboard/details?id=${id}`}
          style={{ display: "block", textAlign: "center", padding: "8px", borderRadius: 6, background: "rgba(226,226,182,0.08)", border: "1px solid rgba(226,226,182,0.15)", color: "var(--sand)", fontSize: 12, fontWeight: 600, textDecoration: "none", letterSpacing: "0.02em", transition: "all 0.15s" }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(226,226,182,0.15)"; e.currentTarget.style.borderColor = "rgba(226,226,182,0.3)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(226,226,182,0.08)"; e.currentTarget.style.borderColor = "rgba(226,226,182,0.15)"; }}>
          View Details
        </Link>
      </div>
    </div>
  );
}
