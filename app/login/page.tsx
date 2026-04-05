"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // Simulate login → redirect to dashboard
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
            Login
          </h1>
          <p className="text-sm mb-8 opacity-60" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--midnight)" }}>
            Welcome back to Firee
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
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "Syne, sans-serif", color: "var(--navy)" }}>
                  Password
                </label>
                <Link href="#" className="text-xs opacity-60 hover:opacity-100 transition-opacity" style={{ color: "var(--navy)", fontFamily: "DM Sans, sans-serif" }}>
                  Forget Password?
                </Link>
              </div>
              <div className="relative">
                <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50" style={{ color: "var(--navy)" }} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="input-field pl-9 pr-10"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-80 transition-opacity"
                  style={{ color: "var(--navy)" }}
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button onClick={handleSubmit} className="btn-primary w-full py-3 rounded-xl mt-2">
              Submit
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-1">
              <div className="flex-1 h-px" style={{ background: "rgba(3,52,110,0.2)" }} />
              <span className="text-xs opacity-40" style={{ fontFamily: "DM Sans, sans-serif" }}>or</span>
              <div className="flex-1 h-px" style={{ background: "rgba(3,52,110,0.2)" }} />
            </div>

            {/* Google Login */}
            <button
              className="w-full flex items-center justify-center gap-3 py-2.5 rounded-xl font-medium text-sm transition-all hover:shadow-md"
              style={{ background: "var(--navy)", color: "var(--sand)", fontFamily: "DM Sans, sans-serif", border: "none" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M5.26 9.77A7.23 7.23 0 0 1 12 4.82c1.73 0 3.3.6 4.54 1.6L19.82 3.2A11.92 11.92 0 0 0 12 .5C8.27.5 5.01 2.67 3.27 5.85l2 1.6-.01 2.32Z" />
                <path fill="#34A853" d="M16.04 19.02A7.22 7.22 0 0 1 12 20.18c-2.9 0-5.4-1.71-6.66-4.2l-2.05 1.57C5.02 20.48 8.27 22.5 12 22.5c2.94 0 5.64-1.03 7.72-2.73l-3.68-2.75Z" />
                <path fill="#FBBC05" d="M19.72 19.77A11.88 11.88 0 0 0 23.5 12c0-.72-.06-1.42-.17-2.09H12v4.32h6.46a5.78 5.78 0 0 1-2.42 3.7l3.68 2.84Z" />
                <path fill="#4285F4" d="M5.34 14.02A7.22 7.22 0 0 1 4.82 12c0-.7.1-1.38.28-2.02l-2-1.6A11.93 11.93 0 0 0 .5 12c0 1.93.46 3.75 1.27 5.36l3.57-3.34Z" />
              </svg>
              Login with Google
            </button>

            {/* Register Link */}
            <p className="text-center text-xs opacity-60" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Don't have an account?{" "}
              <Link href="/create" className="font-semibold underline underline-offset-2 opacity-100" style={{ color: "var(--navy)" }}>
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
