import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar variant="landing" />

      <section className="relative flex-1 flex items-center justify-center hero-gradient overflow-hidden" style={{ minHeight: "calc(100vh - 64px)" }}>
        <div className="absolute inset-0 dot-grid opacity-40" />

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-10"
              style={{
                top: `${10 + i * 11}%`,
                left: `${5 + i * 12}%`,
                fontSize: "40px",
                animation: `float${i % 3} ${4 + i}s ease-in-out infinite`,
              }}
            >
              ⬡
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase fade-in"
            style={{ background: "rgba(226,226,182,0.2)", color: "var(--sand)", border: "1px solid rgba(226,226,182,0.3)", fontFamily: "Syne, sans-serif" }}
          >
            ⬡ Powered by Blockchain
          </div>

          <h1
            className="font-heading text-5xl md:text-7xl font-extrabold uppercase leading-tight mb-8 fade-in fade-in-delay-1"
            style={{ color: "var(--navy)", fontFamily: "Syne, sans-serif", textShadow: "0 2px 24px rgba(226,226,182,0.3)" }}
          >
            The Era of<br />
            <span style={{ color: "var(--sand)" }}>Decentralized</span><br />
            Marketplace
          </h1>

          <p
            className="text-base md:text-lg mb-10 max-w-lg mx-auto fade-in fade-in-delay-2"
            style={{ color: "rgba(226,226,182,0.8)", fontFamily: "DM Sans, sans-serif", lineHeight: 1.7 }}
          >
            Trade freely. Own truly. A peer-to-peer marketplace built on transparency, trust, and blockchain technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in fade-in-delay-3">
            <Link href="/dashboard" className="btn-sand text-sm px-8 py-3 rounded-xl">
              START JOURNEY
            </Link>
            <Link href="/create" className="text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-60" style={{ color: "var(--sand)", fontFamily: "DM Sans, sans-serif" }}>
              Create Account →
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 fade-in fade-in-delay-3">
            {[
              { label: "Products Listed", value: "12,400+" },
              { label: "Active Users", value: "3,800+" },
              { label: "ETH Volume", value: "892 ETH" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-extrabold" style={{ color: "var(--sand)", fontFamily: "Syne, sans-serif" }}>{stat.value}</div>
                <div className="text-xs mt-1 opacity-60" style={{ color: "var(--sand)", fontFamily: "DM Sans, sans-serif" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to top, rgba(2,21,38,0.4), transparent)" }} />
      </section>
    </div>
  );
}
