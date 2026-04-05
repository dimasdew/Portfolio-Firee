"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Bell, User, Settings, HelpCircle, Wallet, LogOut, Flame, ChevronDown, Package, CheckCircle2, Sun, Moon } from "lucide-react";

interface NavbarProps {
  variant?: "landing" | "dashboard";
  onSearch?: (val: string) => void;
}

const NOTIFICATIONS = [
  { id: 1, icon: <CheckCircle2 size={13} color="#4ade80" />, title: "Order Completed", desc: "Mineral Water x2 has been delivered", time: "2m ago", unread: true },
  { id: 2, icon: <Package size={13} color="var(--sky)" />, title: "Order Shipped", desc: "Mineral Water x4 is on its way", time: "1h ago", unread: true },
  { id: 3, icon: <Bell size={13} color="rgba(110,172,218,0.5)" />, title: "Welcome to Firee", desc: "Start exploring the marketplace", time: "2d ago", unread: false },
];

export default function Navbar({ variant = "landing", onSearch }: NavbarProps) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("firee-theme") as "dark" | "light" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("firee-theme", next);
  };

  const unreadCount = NOTIFICATIONS.filter(n => n.unread).length;
  const isDark = theme === "dark";

  const navTextColor = isDark ? "rgba(200,216,232,0.7)" : "rgba(2,21,38,0.6)";

  return (
    <nav className="nav sticky top-0 z-50">
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: 60, display: "flex", alignItems: "center", gap: 24 }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", flexShrink: 0 }}>
          <div style={{ width: 28, height: 28, borderRadius: 6, background: "var(--sky)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Flame size={14} color="var(--midnight)" />
          </div>
          <span style={{ fontFamily: "Space Grotesk", fontWeight: 700, fontSize: 15, color: isDark ? "white" : "var(--midnight)", letterSpacing: "-0.01em" }}>Firee</span>
        </Link>

        {variant === "landing" ? (
          <>
            <Link href="/dashboard" style={{ fontSize: 13, color: navTextColor, textDecoration: "none" }}>Dashboard</Link>
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
              {/* Theme toggle */}
              <button onClick={toggleTheme} style={{ width: 34, height: 34, borderRadius: 8, border: "1px solid var(--border)", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                {isDark ? <Sun size={14} color="rgba(110,172,218,0.7)" /> : <Moon size={14} color="rgba(3,52,110,0.6)" />}
              </button>
              <Link href="/login" style={{ fontSize: 13, color: navTextColor, textDecoration: "none" }}>Login</Link>
              <Link href="/create" className="btn-ghost" style={{ fontSize: 12 }}>Create Account</Link>
            </div>
          </>
        ) : (
          <>
            <Link href="/dashboard" style={{ fontSize: 13, color: navTextColor, textDecoration: "none", flexShrink: 0 }}>Dashboard</Link>

            {/* Search */}
            <div className="search-wrap" style={{ margin: "0 auto" }}>
              <Search size={14} className="search-icon" />
              <input type="text" placeholder="Search products..." onChange={(e) => onSearch?.(e.target.value)} />
            </div>

            {/* Icons */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>

              {/* Theme toggle */}
              <button onClick={toggleTheme} style={{ width: 34, height: 34, borderRadius: 8, border: "1px solid var(--border)", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                {isDark ? <Sun size={14} color="rgba(110,172,218,0.7)" /> : <Moon size={14} color="rgba(3,52,110,0.6)" />}
              </button>

              {/* Notif */}
              <div style={{ position: "relative" }}>
                <button
                  onClick={() => { setNotifOpen(!notifOpen); setProfileOpen(false); }}
                  style={{ width: 34, height: 34, borderRadius: 8, border: "1px solid var(--border)", background: notifOpen ? "rgba(110,172,218,0.08)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", position: "relative" }}
                >
                  <Bell size={14} color="rgba(110,172,218,0.7)" />
                  {unreadCount > 0 && (
                    <span style={{ position: "absolute", top: 5, right: 5, width: 8, height: 8, borderRadius: "50%", background: "#f87171", border: "1.5px solid var(--midnight)" }} />
                  )}
                </button>

                {notifOpen && (
                  <div style={{ position: "absolute", right: 0, top: "calc(100% + 8px)", width: 300, background: "#03346E", border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden", zIndex: 100 }}>
                    <div style={{ padding: "12px 14px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <p style={{ fontSize: 13, fontWeight: 600, color: isDark ? "white" : "var(--midnight)" }}>Notifications</p>
                      {unreadCount > 0 && (
                        <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 4, background: "rgba(248,113,113,0.12)", color: "#f87171", border: "1px solid rgba(248,113,113,0.2)", fontWeight: 600 }}>
                          {unreadCount} new
                        </span>
                      )}
                    </div>
                    {NOTIFICATIONS.map((n, i) => (
                      <div key={n.id} style={{
                        display: "flex", alignItems: "flex-start", gap: 10, padding: "12px 14px",
                        background: n.unread ? "rgba(110,172,218,0.04)" : "transparent",
                        borderBottom: i < NOTIFICATIONS.length - 1 ? "1px solid var(--border)" : "none",
                        cursor: "pointer",
                      }}>
                        <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(110,172,218,0.08)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                          {n.icon}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 2 }}>
                            <p style={{ fontSize: 12, fontWeight: 600, color: n.unread ? (isDark ? "white" : "var(--midnight)") : "var(--text-muted)" }}>{n.title}</p>
                            <span style={{ fontSize: 10, color: "rgba(110,172,218,0.35)", flexShrink: 0 }}>{n.time}</span>
                          </div>
                          <p style={{ fontSize: 11, color: "var(--text-muted)", lineHeight: 1.4 }}>{n.desc}</p>
                        </div>
                        {n.unread && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--sky)", flexShrink: 0, marginTop: 4 }} />}
                      </div>
                    ))}
                    <div style={{ padding: "10px 14px", borderTop: "1px solid var(--border)" }}>
                      <button style={{ width: "100%", fontSize: 12, color: "rgba(110,172,218,0.5)", background: "none", border: "none", cursor: "pointer", fontFamily: "Space Grotesk" }}>
                        Mark all as read
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Profile */}
              <div style={{ position: "relative" }}>
                <button
                  onClick={() => { setProfileOpen(!profileOpen); setNotifOpen(false); }}
                  style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 10px", borderRadius: 8, border: "1px solid var(--border)", background: "transparent", cursor: "pointer" }}
                >
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: "var(--sky)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "var(--midnight)" }}>D</div>
                  <ChevronDown size={12} color="rgba(110,172,218,0.6)" />
                </button>

                {profileOpen && (
                  <div style={{ position: "absolute", right: 0, top: "calc(100% + 8px)", width: 200, background: "#03346E", border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden", zIndex: 100 }}>
                    <div style={{ padding: "12px 14px 8px", borderBottom: "1px solid var(--border)" }}>
                      <p style={{ fontSize: 13, fontWeight: 600, color: isDark ? "white" : "var(--midnight)" }}>dimasdew</p>
                      <p className="mono" style={{ fontSize: 10, color: "rgba(110,172,218,0.5)", marginTop: 2 }}>0xaB2...4de3</p>
                    </div>
                    <div style={{ padding: "6px" }}>
                      {[
                        { icon: <User size={13} />, label: "Profile", href: "/profile" },
                        { icon: <Settings size={13} />, label: "Settings", href: "/profile" },
                        { icon: <HelpCircle size={13} />, label: "Support", href: "#" },
                      ].map(item => (
                        <Link key={item.label} href={item.href} onClick={() => setProfileOpen(false)}
                          style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 10px", borderRadius: 6, fontSize: 13, color: navTextColor, textDecoration: "none" }}>
                          {item.icon}{item.label}
                        </Link>
                      ))}
                      <div className="divider" style={{ margin: "6px 0" }} />
                      <button className="btn-ghost" style={{ width: "100%", justifyContent: "center", fontSize: 12, marginBottom: 4 }}>
                        <Wallet size={13} /> Connect Wallet
                      </button>
                      <button style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "7px", borderRadius: 6, fontSize: 12, background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.2)", color: "#f87171", cursor: "pointer", fontFamily: "Space Grotesk" }}>
                        <LogOut size={13} /> Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}