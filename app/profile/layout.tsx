"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "../../components/Navbar";
import { ClipboardList, UserCircle } from "lucide-react";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  return (
    <div style={{ minHeight: "100vh", background: "var(--midnight)" }}>
      <Navbar variant="dashboard" />

      {/* Banner */}
      <div style={{ height: 120, background: "linear-gradient(135deg, var(--navy) 0%, #0a4a96 50%, rgba(110,172,218,0.3) 100%)", position: "relative", overflow: "hidden" }}>
        <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent, rgba(2,21,38,0.5))" }} />
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {/* Avatar + info */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: 16, marginTop: -32, marginBottom: 24 }}>
          <div style={{ width: 72, height: 72, borderRadius: "50%", background: "var(--sky)", border: "3px solid var(--midnight)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Space Grotesk", fontWeight: 700, fontSize: 20, color: "var(--midnight)", flexShrink: 0, zIndex: 10 }}>
            D
          </div>
          <div style={{ paddingBottom: 4 }}>
            <p style={{ fontFamily: "Space Grotesk", fontWeight: 700, fontSize: 18, color: "white", letterSpacing: "-0.01em" }}>@dimasdew</p>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 2 }}>
              <span className="mono" style={{ fontSize: 11, color: "rgba(110,172,218,0.45)" }}>0xaB2...4de3</span>
              <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(110,172,218,0.3)" }} />
              <span style={{ fontSize: 11, color: "rgba(110,172,218,0.45)" }}>Joined Sept 2024</span>
            </div>
          </div>
        </div>

        <div className="divider" style={{ marginBottom: 28 }} />

        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(110,172,218,0.4)", marginBottom: 16 }}>My Profile</p>

        <div style={{ display: "flex", gap: 20, alignItems: "flex-start", paddingBottom: 48 }}>
          {/* Sidebar */}
          <div style={{ width: 160, flexShrink: 0, display: "flex", flexDirection: "column", gap: 4 }}>
            {[
              { href: "/profile/order", label: "Order", icon: <ClipboardList size={14} /> },
              { href: "/profile", label: "Profile", icon: <UserCircle size={14} /> },
            ].map(item => (
              <Link key={item.href} href={item.href} className={`sidebar-link ${path === item.href ? "active" : ""}`}>
                {item.icon} {item.label}
              </Link>
            ))}
          </div>

          {/* Content */}
          <div style={{ flex: 1, minWidth: 0 }}>{children}</div>
        </div>
      </div>
    </div>
  );
}
