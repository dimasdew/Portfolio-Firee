"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";

export default function CreatePage() {
  const router = useRouter();
  const [show, setShow] = useState({ pwd: false, re: false });
  const [form, setForm] = useState({ email: "", password: "", retype: "" });
  const [error, setError] = useState("");

  const submit = () => {
    if (form.password !== form.retype) { setError("Passwords don't match."); return; }
    if (form.password.length < 6) { setError("Password must be at least 6 characters."); return; }
    router.push("/dashboard");
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--midnight)" }}>
      <Navbar variant="landing" />
      <div className="grid-bg" style={{ minHeight: "calc(100vh - 60px)", display: "flex", alignItems: "center", padding: "40px 24px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 60% at 30% 50%, rgba(3,52,110,0.4) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: 420 }}>
          <div className="badge badge-sky fade-up" style={{ marginBottom: 20 }}>New Account</div>
          <h1 className="fade-up d1" style={{ fontFamily: "Space Grotesk", fontWeight: 700, fontSize: 32, letterSpacing: "-0.02em", color: "white", marginBottom: 6 }}>
            Create account
          </h1>
          <p className="fade-up d2" style={{ fontSize: 14, color: "rgba(200,216,232,0.5)", marginBottom: 32 }}>
            Join the decentralized marketplace
          </p>

          <div className="card fade-up d2" style={{ padding: 28 }}>
            {[
              { key: "email", label: "Email", icon: <Mail size={14} />, type: "email", placeholder: "you@example.com" },
            ].map(f => (
              <div key={f.key} style={{ marginBottom: 16 }}>
                <label className="label">{f.label}</label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "rgba(110,172,218,0.4)", display: "flex" }}>{f.icon}</span>
                  <input className="input" type={f.type} placeholder={f.placeholder} style={{ paddingLeft: 36 }}
                    value={form[f.key as keyof typeof form]}
                    onChange={e => setForm({ ...form, [f.key]: e.target.value })} />
                </div>
              </div>
            ))}

            {[
              { key: "password", label: "Password", showKey: "pwd" as const },
              { key: "retype", label: "Re-type Password", showKey: "re" as const },
            ].map(f => (
              <div key={f.key} style={{ marginBottom: 16 }}>
                <label className="label">{f.label}</label>
                <div style={{ position: "relative" }}>
                  <Lock size={14} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "rgba(110,172,218,0.4)", pointerEvents: "none" }} />
                  <input className="input" type={show[f.showKey] ? "text" : "password"} placeholder="••••••••" style={{ paddingLeft: 36, paddingRight: 36 }}
                    value={form[f.key as keyof typeof form]}
                    onChange={e => setForm({ ...form, [f.key]: e.target.value })} />
                  <button onClick={() => setShow({ ...show, [f.showKey]: !show[f.showKey] })} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "rgba(110,172,218,0.4)", display: "flex" }}>
                    {show[f.showKey] ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
              </div>
            ))}

            {error && <p style={{ fontSize: 12, color: "#f87171", marginBottom: 12 }}>{error}</p>}

            <button className="btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 4 }} onClick={submit}>
              Create Account <ArrowRight size={14} />
            </button>
          </div>

          <p style={{ textAlign: "center", marginTop: 20, fontSize: 13, color: "rgba(200,216,232,0.4)" }}>
            Already have an account?{" "}
            <Link href="/login" style={{ color: "var(--sky)", textDecoration: "none", fontWeight: 500 }}>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
