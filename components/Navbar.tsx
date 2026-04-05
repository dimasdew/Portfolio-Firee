"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flame, Search, Bell, ChevronDown, User, Settings, HelpCircle, Wallet, LogOut } from "lucide-react";

type NavbarVariant = "landing" | "dashboard";

interface NavbarProps {
  variant?: NavbarVariant;
  isLoggedIn?: boolean;
}

export default function Navbar({ variant = "landing", isLoggedIn = false }: NavbarProps) {
  const [profileOpen, setProfileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full" style={{ background: "var(--navy)" }}>
      <div className="max-w-screen-xl mx-auto px-6 h-[64px] flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "var(--sand)" }}>
            <Flame size={16} style={{ color: "var(--navy)" }} />
          </div>
          <span className="font-heading font-700 text-base tracking-wide" style={{ color: "var(--sand)", fontFamily: "Syne, sans-serif", fontWeight: 700 }}>
            Firee
          </span>
        </Link>

        {variant === "landing" ? (
          /* Landing Nav */
          <>
            <Link
              href="/dashboard"
              className="font-medium text-sm transition-opacity hover:opacity-75"
              style={{ color: "var(--sand)", fontFamily: "DM Sans, sans-serif" }}
            >
              Dashboard
            </Link>
            <div className="flex items-center gap-3 ml-auto">
              <Link href="/login" className="text-sm font-medium transition-opacity hover:opacity-75" style={{ color: "var(--sand)", fontFamily: "DM Sans, sans-serif" }}>
                Login
              </Link>
              <Link href="/create" className="btn-outline text-sm" style={{ borderColor: "var(--sand)", color: "var(--sand)" }}>
                Create
              </Link>
            </div>
          </>
        ) : (
          /* Dashboard Nav */
          <>
            <Link
              href="/dashboard"
              className="font-medium text-sm transition-opacity hover:opacity-75 shrink-0"
              style={{ color: "var(--sand)", fontFamily: "DM Sans, sans-serif" }}
            >
              Dashboard
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full py-2 pl-4 pr-10 rounded-xl text-sm outline-none"
                style={{
                  background: "rgba(110,172,218,0.25)",
                  border: "1px solid rgba(110,172,218,0.3)",
                  color: "var(--sand)",
                  fontFamily: "DM Sans, sans-serif",
                }}
              />
              <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 opacity-60" style={{ color: "var(--sand)" }} />
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-3">
              <button className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
                <Bell size={18} style={{ color: "var(--sand)" }} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-400" />
              </button>

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                  style={{ background: "var(--sand)" }}
                >
                  <span className="text-xs font-bold" style={{ color: "var(--navy)", fontFamily: "Syne, sans-serif" }}>D</span>
                </button>

                {profileOpen && (
                  <div
                    className="absolute right-0 top-[calc(100%+8px)] w-52 rounded-2xl shadow-2xl overflow-hidden z-50"
                    style={{ background: "var(--sand)", border: "1px solid rgba(3,52,110,0.12)" }}
                  >
                    <div className="py-2">
                      <Link href="/profile" className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-white/30 transition-colors" style={{ color: "var(--midnight)", fontFamily: "DM Sans, sans-serif" }} onClick={() => setProfileOpen(false)}>
                        <User size={15} /> Profile
                      </Link>
                      <Link href="/profile" className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-white/30 transition-colors" style={{ color: "var(--midnight)", fontFamily: "DM Sans, sans-serif" }} onClick={() => setProfileOpen(false)}>
                        <Settings size={15} /> Setting
                      </Link>
                      <Link href="#" className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-white/30 transition-colors" style={{ color: "var(--midnight)", fontFamily: "DM Sans, sans-serif" }} onClick={() => setProfileOpen(false)}>
                        <HelpCircle size={15} /> Support
                      </Link>
                      <div className="mx-4 my-2 h-px" style={{ background: "rgba(3,52,110,0.15)" }} />
                      <button className="w-[calc(100%-32px)] mx-4 mb-1 btn-primary text-xs py-2">
                        <Wallet size={13} className="inline mr-1.5" />
                        Connect Wallet
                      </button>
                      <button className="w-[calc(100%-32px)] mx-4 mt-1 mb-2 btn-primary text-xs py-2" style={{ background: "var(--midnight)" }}>
                        <LogOut size={13} className="inline mr-1.5" />
                        Logout
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
