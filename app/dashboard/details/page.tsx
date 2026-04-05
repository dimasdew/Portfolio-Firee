"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import { ArrowLeft, Minus, Plus, ShoppingBag, CheckCircle } from "lucide-react";

const PRODUCT = {
  name: "Mineral Water",
  company: "PT. Mineral Water Indonesia",
  tagline: "Pure Mineral Water 500ml — Natural Freshness Anytime",
  price: "0.02",
  description: "Experience unmatched freshness with Pure Mineral Water. Sourced from clean and protected natural springs, this mineral water contains essential minerals that help maintain the body's balance and support your daily health.",
  description2: "Through careful filtration processes, Pure Mineral Water delivers high-quality water free from contaminants, ensuring it's safe to consume anytime.",
  benefits: ["Natural source of beneficial minerals", "Supports optimal hydration", "Clean, crisp taste", "Safe for the whole family"],
};

export default function DetailsPage() {
  const [qty, setQty] = useState(1);
  const [redeemed, setRedeemed] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: "var(--midnight)" }}>
      <Navbar variant="dashboard" />
      <main style={{ maxWidth: 1280, margin: "0 auto", padding: "28px 24px" }}>

        <Link href="/dashboard" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "rgba(110,172,218,0.5)", textDecoration: "none", marginBottom: 24 }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--sky)")}
          onMouseLeave={e => (e.currentTarget.style.color = "rgba(110,172,218,0.5)")}>
          <ArrowLeft size={14} /> Back to Marketplace
        </Link>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 20, alignItems: "start" }}>

          {/* Left: Product visual */}
          <div>
            <div className="card" style={{ padding: 0, overflow: "hidden" }}>
              <div style={{ padding: "14px 16px 12px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(110,172,218,0.1)", border: "1px solid rgba(110,172,218,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "var(--sky)" }}>⬡</div>
                <span className="mono" style={{ fontSize: 11, color: "rgba(110,172,218,0.4)" }}>ETH · Verified</span>
                <div className="badge badge-green" style={{ marginLeft: "auto", fontSize: 9, padding: "2px 7px" }}>
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#4ade80" }} /> Live
                </div>
              </div>

              <div style={{ padding: "32px 24px", textAlign: "center" }}>
                <p style={{ fontWeight: 600, fontSize: 16, color: "white", marginBottom: 24 }}>{PRODUCT.name}</p>
                <div style={{ width: 100, height: 136, margin: "0 auto 24px", borderRadius: 10, background: "rgba(110,172,218,0.05)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 48, opacity: 0.2 }}>💧</span>
                </div>

                {/* Price */}
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 8, background: "rgba(226,226,182,0.06)", border: "1px solid rgba(226,226,182,0.15)", marginBottom: 20 }}>
                  <span className="mono" style={{ color: "var(--sky)", fontSize: 13 }}>⬡</span>
                  <span className="mono" style={{ fontSize: 18, fontWeight: 700, color: "var(--sand)" }}>{PRODUCT.price}</span>
                  <span style={{ fontSize: 11, color: "rgba(200,216,232,0.4)" }}>ETH / item</span>
                </div>

                {/* Qty + Redeem */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>
                    <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ width: 32, height: 36, background: "transparent", border: "none", cursor: "pointer", color: "rgba(110,172,218,0.6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Minus size={13} />
                    </button>
                    <span className="mono" style={{ width: 32, textAlign: "center", fontSize: 14, fontWeight: 600, color: "white" }}>{qty}</span>
                    <button onClick={() => setQty(qty + 1)} style={{ width: 32, height: 36, background: "transparent", border: "none", cursor: "pointer", color: "rgba(110,172,218,0.6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Plus size={13} />
                    </button>
                  </div>
                  <button className={redeemed ? "btn-ghost" : "btn-sand"} onClick={() => setRedeemed(true)} style={{ gap: 6 }}>
                    {redeemed ? <><CheckCircle size={13} /> Redeemed</> : <><ShoppingBag size={13} /> Redeem</>}
                  </button>
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
              {[1, 2].map(i => (
                <div key={i} className="card" style={{ flex: 1, height: 64, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <span style={{ fontSize: 24, opacity: 0.2 }}>💧</span>
                </div>
              ))}
              <Link href="/dashboard" className="card" style={{ flex: 1, height: 64, display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontSize: 12, fontWeight: 600, color: "var(--sky)" }}>
                More →
              </Link>
            </div>
          </div>

          {/* Right: Info */}
          <div className="card" style={{ padding: 28 }}>
            <div className="badge badge-sky" style={{ marginBottom: 16, fontSize: 9 }}>Product Info</div>
            <h2 style={{ fontFamily: "Space Grotesk", fontWeight: 700, fontSize: 22, color: "white", letterSpacing: "-0.02em", marginBottom: 4 }}>{PRODUCT.name}</h2>
            <p style={{ fontSize: 12, color: "rgba(110,172,218,0.5)", marginBottom: 4 }}>By {PRODUCT.company}</p>
            <p style={{ fontSize: 13, fontWeight: 500, color: "var(--sky)", marginBottom: 20 }}>{PRODUCT.tagline}</p>

            <div className="divider" style={{ marginBottom: 20 }} />

            <p style={{ fontSize: 14, lineHeight: 1.75, color: "rgba(200,216,232,0.6)", marginBottom: 12 }}>{PRODUCT.description}</p>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: "rgba(200,216,232,0.6)", marginBottom: 24 }}>{PRODUCT.description2}</p>

            <div className="divider" style={{ marginBottom: 20 }} />

            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(110,172,218,0.5)", marginBottom: 12 }}>Benefits</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {PRODUCT.benefits.map(b => (
                <div key={b} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <CheckCircle size={10} color="#4ade80" />
                  </div>
                  <span style={{ fontSize: 13, color: "rgba(200,216,232,0.7)" }}>{b}</span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div style={{ marginTop: 28, padding: "14px 16px", borderRadius: 10, background: "rgba(110,172,218,0.05)", border: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <p style={{ fontSize: 11, color: "rgba(110,172,218,0.4)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 2 }}>Total ({qty} item{qty > 1 ? "s" : ""})</p>
                <p className="mono" style={{ fontSize: 20, fontWeight: 700, color: "var(--sand)" }}>⬡ {(parseFloat(PRODUCT.price) * qty).toFixed(3)} ETH</p>
              </div>
              <button className="btn-sand" onClick={() => setRedeemed(true)}>
                {redeemed ? "Redeemed ✓" : "Redeem Now"}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
