"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [showPwd, setShowPwd] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  return (
    <div style={{ minHeight: "100vh", background: "var(--midnight)" }}>
      <Navbar variant="landing" />
      <div className="grid-bg" style={{ minHeight: "calc(100vh - 60px)", display: "flex", alignItems: "center", padding: "40px 24px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 60% at 30% 50%, rgba(3,52,110,0.4) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: 420 }}>
          {/* Tag */}
          <div className="badge badge-sky fade-up" style={{ marginBottom: 20 }}>Auth</div>

          <h1 className="fade-up d1" style={{ fontFamily: "Space Grotesk", fontWeight: 700, fontSize: 32, letterSpacing: "-0.02em", color: "white", marginBottom: 6 }}>
            Welcome back
          </h1>
          <p className="fade-up d2" style={{ fontSize: 14, color: "rgba(200,216,232,0.5)", marginBottom: 32 }}>
            Sign in to your Firee account
          </p>

          <div className="card fade-up d2" style={{ padding: 28 }}>
            <div style={{ marginBottom: 18 }}>
              <label className="label">Email</label>
              <div style={{ position: "relative" }}>
                <Mail size={14} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "rgba(110,172,218,0.4)", pointerEvents: "none" }} />
                <input className="input" type="email" placeholder="you@example.com" style={{ paddingLeft: 36 }}
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
            </div>

            <div style={{ marginBottom: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                <label className="label" style={{ marginBottom: 0 }}>Password</label>
                <Link href="#" style={{ fontSize: 11, color: "rgba(110,172,218,0.5)", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--sky)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(110,172,218,0.5)")}>
                  Forgot password?
                </Link>
              </div>
              <div style={{ position: "relative" }}>
                <Lock size={14} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "rgba(110,172,218,0.4)", pointerEvents: "none" }} />
                <input className="input" type={showPwd ? "text" : "password"} placeholder="••••••••" style={{ paddingLeft: 36, paddingRight: 36 }}
                  value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
                <button onClick={() => setShowPwd(!showPwd)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "rgba(110,172,218,0.4)", display: "flex" }}>
                  {showPwd ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>

            <button className="btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 20 }}
              onClick={() => router.push("/dashboard")}>
              Sign In <ArrowRight size={14} />
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "20px 0" }}>
              <div className="divider" style={{ flex: 1 }} />
              <span style={{ fontSize: 11, color: "rgba(110,172,218,0.3)" }}>or</span>
              <div className="divider" style={{ flex: 1 }} />
            </div>

            <button className="btn-ghost" style={{ width: "100%", justifyContent: "center" }}>
              <svg width="14" height="14" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M5.26 9.77A7.23 7.23 0 0 1 12 4.82c1.73 0 3.3.6 4.54 1.6L19.82 3.2A11.92 11.92 0 0 0 12 .5C8.27.5 5.01 2.67 3.27 5.85l2 1.6-.01 2.32Z" />
                <path fill="#34A853" d="M16.04 19.02A7.22 7.22 0 0 1 12 20.18c-2.9 0-5.4-1.71-6.66-4.2l-2.05 1.57C5.02 20.48 8.27 22.5 12 22.5c2.94 0 5.64-1.03 7.72-2.73l-3.68-2.75Z" />
                <path fill="#FBBC05" d="M19.72 19.77A11.88 11.88 0 0 0 23.5 12c0-.72-.06-1.42-.17-2.09H12v4.32h6.46a5.78 5.78 0 0 1-2.42 3.7l3.68 2.84Z" />
                <path fill="#4285F4" d="M5.34 14.02A7.22 7.22 0 0 1 4.82 12c0-.7.1-1.38.28-2.02l-2-1.6A11.93 11.93 0 0 0 .5 12c0 1.93.46 3.75 1.27 5.36l3.57-3.34Z" />
              </svg>
              Continue with Google
            </button>
          </div>

          <p style={{ textAlign: "center", marginTop: 20, fontSize: 13, color: "rgba(200,216,232,0.4)" }}>
            No account?{" "}
            <Link href="/create" style={{ color: "var(--sky)", textDecoration: "none", fontWeight: 500 }}>Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
