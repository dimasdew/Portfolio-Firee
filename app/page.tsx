import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  const stats = [
    { value: "12,400+", label: "Products" },
    { value: "3,800+", label: "Active Users" },
    { value: "892 ETH", label: "Volume" },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--midnight)" }}>
      <Navbar variant="landing" />

      {/* Hero */}
      <section className="grid-bg" style={{ flex: 1, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", minHeight: "calc(100vh - 60px)" }}>

        {/* Radial glow center */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(3,52,110,0.6) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Top glow */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent 0%, var(--sky) 30%, rgba(226,226,182,0.6) 50%, var(--sky) 70%, transparent 100%)", opacity: 0.5 }} />

        {/* Corner marks */}
        {[["top-8 left-8", "border-t border-l"], ["top-8 right-8", "border-t border-r"], ["bottom-8 left-8", "border-b border-l"], ["bottom-8 right-8", "border-b border-r"]].map(([pos, border], i) => (
          <div key={i} className={`absolute ${pos} ${border}`} style={{ width: 20, height: 20, borderColor: "rgba(110,172,218,0.3)" }} />
        ))}

        {/* ETH floating icons */}
        {[
          { top: "15%", left: "8%", size: 32, delay: "0s" },
          { top: "60%", left: "5%", size: 20, delay: "1.5s" },
          { top: "25%", right: "10%", size: 24, delay: "0.8s" },
          { top: "70%", right: "7%", size: 36, delay: "2s" },
        ].map((pos, i) => (
          <div key={i} style={{
            position: "absolute", ...pos,
            width: pos.size, height: pos.size,
            border: "1px solid rgba(110,172,218,0.2)",
            borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            animation: `float 4s ease-in-out ${pos.delay} infinite`,
            opacity: 0.5,
          }}>
            <span style={{ fontSize: pos.size * 0.4, color: "var(--sky)", fontFamily: "Space Mono" }}>⬡</span>
          </div>
        ))}

        {/* Content */}
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px", maxWidth: 680 }}>

          <div className="badge badge-sky fade-up d1" style={{ marginBottom: 28 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--sky)", animation: "pulse-slow 2s infinite" }} />
            Decentralized Marketplace
          </div>

          <h1 className="fade-up d2" style={{
            fontFamily: "Space Grotesk",
            fontWeight: 700,
            fontSize: "clamp(36px, 6vw, 72px)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "white",
            marginBottom: 20,
          }}>
            The Era of{" "}
            <span style={{ color: "var(--sand)" }}>Decentralized</span>
            {" "}Marketplace
          </h1>

          <p className="fade-up d3" style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(200,216,232,0.6)", maxWidth: 480, margin: "0 auto 36px" }}>
            Trade freely. Own truly. A peer-to-peer marketplace built on transparency, trust, and blockchain technology.
          </p>

          <div className="fade-up d4" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <Link href="/dashboard" className="btn-sand">Start Journey →</Link>
            <Link href="/create" className="btn-ghost">Create Account</Link>
          </div>

          {/* Stats */}
          <div className="fade-up d5" style={{ marginTop: 64, display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div className="mono" style={{ fontSize: 22, fontWeight: 700, color: "var(--sand)", letterSpacing: "-0.02em" }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "rgba(110,172,218,0.5)", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to top, var(--midnight), transparent)" }} />
      </section>

      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes pulse-slow { 0%,100%{opacity:0.4} 50%{opacity:1} }
      `}</style>
    </div>
  );
}
