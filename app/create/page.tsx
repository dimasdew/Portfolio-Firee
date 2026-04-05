"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

export default function CreatePage() {
  const router = useRouter();
  const [showPwd, setShowPwd] = useState(false);
  const [showRetype, setShowRetype] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", retype: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (form.password !== form.retype) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(135deg, #E2E2B6 0%, #6EACDA 40%, #03346E 80%, #021526 100%)" }}>
      <Navbar variant="landing" />

      <div className="flex-1 flex items-center justify-start px-8 md:px-20 py-12">
        <div
          className="w-full max-w-md rounded-3xl p-10 shadow-2xl fade-in"
          style={{ background: "var(--sand)", border: "1px solid rgba(3,52,110,0.1)" }}
        >
          <h1 className="text-3xl font-extrabold mb-1" style={{ fontFamily: "Syne, sans-serif", color: "var(--midnight)" }}>
            Create
          </h1>
          <p className="text-sm mb-8 opacity-60" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--midnight)" }}>
            Join the decentralized marketplace
          </p>

          <div className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ fontFamily: "Syne, sans-serif", color: "var(--navy)" }}>
                Email
              </label>
              <div className="relative">
                <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50" style={{ color: "var(--navy)" }} />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input-field pl-9"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ fontFamily: "Syne, sans-serif", color: "var(--navy)" }}>
                Password
              </label>
              <div className="relative">
                <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50" style={{ color: "var(--navy)" }} />
                <input
                  type={showPwd ? "text" : "password"}
                  placeholder="••••••••"
                  className="input-field pl-9 pr-10"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-80" style={{ color: "var(--navy)" }}>
                  {showPwd ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* Re-type Password */}
            <div>
              <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ fontFamily: "Syne, sans-serif", color: "var(--navy)" }}>
                Re-type Password
              </label>
              <div className="relative">
                <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50" style={{ color: "var(--navy)" }} />
                <input
                  type={showRetype ? "text" : "password"}
                  placeholder="••••••••"
                  className="input-field pl-9 pr-10"
                  value={form.retype}
                  onChange={(e) => setForm({ ...form, retype: e.target.value })}
                />
                <button type="button" onClick={() => setShowRetype(!showRetype)} className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-80" style={{ color: "var(--navy)" }}>
                  {showRetype ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-xs text-red-500" style={{ fontFamily: "DM Sans, sans-serif" }}>{error}</p>
            )}

            <button onClick={handleSubmit} className="btn-primary w-full py-3 rounded-xl mt-2">
              Submit
            </button>

            <p className="text-center text-xs opacity-60" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Already have an account?{" "}
              <Link href="/login" className="font-semibold underline underline-offset-2 opacity-100" style={{ color: "var(--navy)" }}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
