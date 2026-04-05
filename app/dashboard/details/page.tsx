"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowLeft, ShoppingBag } from "lucide-react";

const PRODUCT = {
  id: 1,
  name: "Mineral Water",
  company: "PT. Mineral Water Indonesia",
  tagline: "Pure Mineral Water 500ml - Natural Freshness Anytime",
  description: `Experience unmatched freshness with Pure Mineral Water. Sourced from clean and protected natural springs, this mineral water contains essential minerals that help maintain the body's balance and support your daily health.

Through careful filtration processes, Pure Mineral Water delivers high-quality water free from contaminants, ensuring it's safe to consume anytime. Packaged in a convenient 500ml bottle, this water is ready to accompany you wherever you go, whether at home, in the office, or during workouts.`,
  benefits: [
    "A natural source of beneficial minerals",
    "Supports optimal hydration",
    "Clean, crisp taste",
    "Safe for the whole family",
  ],
  cta: "Discover true refreshment in every sip of Pure Mineral Water!",
  price: "0.02",
};

export default function DashboardDetailsPage() {
  const [qty, setQty] = useState(1);
  const [redeemed, setRedeemed] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "var(--snow)" }}>
      <Navbar variant="dashboard" isLoggedIn />

      <main className="max-w-screen-xl mx-auto px-6 py-8">
        {/* Back link */}
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-sm mb-6 hover:opacity-70 transition-opacity"
          style={{ color: "var(--navy)", fontFamily: "DM Sans, sans-serif" }}
        >
          <ArrowLeft size={16} /> Back to Marketplace
        </Link>

        <div className="rounded-3xl overflow-hidden shadow-lg" style={{ border: "1px solid rgba(110,172,218,0.25)", background: "white" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Product Image */}
            <div className="p-8 flex flex-col" style={{ background: "rgba(110,172,218,0.12)" }}>
              <div
                className="rounded-2xl overflow-hidden flex-1 flex flex-col"
                style={{ background: "rgba(110,172,218,0.22)", border: "1px solid rgba(110,172,218,0.3)" }}
              >
                {/* card top */}
                <div className="px-4 pt-3 pb-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs" style={{ background: "var(--midnight)", color: "var(--sand)" }}>
                    ⬡
                  </div>
                  <div className="flex-1 h-px" style={{ background: "rgba(3,52,110,0.2)" }} />
                </div>

                <div className="flex-1 flex flex-col items-center justify-center p-8">
                  <p className="font-bold text-lg mb-6 text-center" style={{ fontFamily: "Syne, sans-serif", color: "var(--midnight)" }}>
                    {PRODUCT.name}
                  </p>
                  {/* Placeholder product visual */}
                  <div className="w-32 h-44 flex items-center justify-center rounded-2xl mb-6" style={{ background: "rgba(255,255,255,0.5)" }}>
                    <div className="text-6xl opacity-25">💧</div>
                  </div>

                  {/* Qty + Redeem */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 rounded-xl overflow-hidden" style={{ border: "1px solid rgba(3,52,110,0.2)" }}>
                      <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-8 h-8 flex items-center justify-center hover:bg-white/40 transition-colors text-lg" style={{ color: "var(--navy)" }}>−</button>
                      <span className="w-8 text-center text-sm font-bold" style={{ fontFamily: "Syne, sans-serif", color: "var(--midnight)" }}>{qty}</span>
                      <button onClick={() => setQty(qty + 1)} className="w-8 h-8 flex items-center justify-center hover:bg-white/40 transition-colors text-lg" style={{ color: "var(--navy)" }}>+</button>
                    </div>
                    <button
                      onClick={() => setRedeemed(true)}
                      className={`btn-sand flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm ${redeemed ? "opacity-60 cursor-default" : ""}`}
                      disabled={redeemed}
                    >
                      <ShoppingBag size={14} />
                      {redeemed ? "Redeemed!" : "Redeem"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 mt-4">
                {[1, 2].map((i) => (
                  <div key={i} className="w-20 h-20 rounded-xl flex items-center justify-center cursor-pointer transition-all hover:scale-105" style={{ background: "rgba(110,172,218,0.22)", border: "1px solid rgba(110,172,218,0.3)" }}>
                    <div className="text-2xl opacity-25">💧</div>
                  </div>
                ))}
                <div
                  className="flex-1 h-20 rounded-xl flex items-center justify-center cursor-pointer text-sm font-semibold transition-all hover:scale-105"
                  style={{ background: "var(--sand)", color: "var(--navy)", fontFamily: "Syne, sans-serif" }}
                >
                  More
                </div>
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="p-8" style={{ background: "var(--sand)" }}>
              <h2 className="text-2xl font-extrabold mb-1" style={{ fontFamily: "Syne, sans-serif", color: "var(--midnight)" }}>
                {PRODUCT.name}
              </h2>
              <p className="text-sm font-medium mb-1 opacity-70" style={{ fontFamily: "DM Sans, sans-serif" }}>
                This product made by {PRODUCT.company}.
              </p>
              <p className="text-sm font-semibold mb-4" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--navy)" }}>
                {PRODUCT.tagline}
              </p>

              <div className="h-px mb-4" style={{ background: "rgba(3,52,110,0.15)" }} />

              {PRODUCT.description.split("\n\n").map((para, i) => (
                <p key={i} className="text-sm leading-relaxed mb-4 opacity-80" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  {para}
                </p>
              ))}

              <div className="h-px mb-4" style={{ background: "rgba(3,52,110,0.15)" }} />

              <p className="text-sm font-semibold mb-2" style={{ fontFamily: "Syne, sans-serif", color: "var(--midnight)" }}>Benefits:</p>
              <ul className="mb-4">
                {PRODUCT.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm mb-1.5 opacity-80" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--navy)" }} />
                    {b}
                  </li>
                ))}
              </ul>

              <p className="text-sm font-bold italic" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--navy)" }}>
                {PRODUCT.cta}
              </p>

              {/* Price */}
              <div className="mt-6 flex items-center justify-between rounded-2xl px-5 py-3" style={{ background: "rgba(3,52,110,0.08)" }}>
                <span className="text-xs uppercase tracking-widest opacity-60" style={{ fontFamily: "Syne, sans-serif" }}>Price per item</span>
                <span className="text-lg font-extrabold" style={{ fontFamily: "Syne, sans-serif", color: "var(--navy)" }}>⬡ {PRODUCT.price} ETH</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
