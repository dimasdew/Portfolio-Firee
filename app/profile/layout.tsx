"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import { ClipboardList, UserCircle } from "lucide-react";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen" style={{ background: "var(--snow)" }}>
      <Navbar variant="dashboard" isLoggedIn />

      {/* Banner */}
      <div className="w-full h-36 relative" style={{ background: "linear-gradient(135deg, var(--sky) 0%, var(--navy) 100%)" }}>
        {/* Avatar */}
        <div
          className="absolute -bottom-10 left-8 w-24 h-24 rounded-full border-4 flex items-center justify-center text-2xl font-bold"
          style={{ background: "var(--sand)", borderColor: "white", color: "var(--navy)", fontFamily: "Syne, sans-serif" }}
        >
          D
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 pt-14 pb-10">
        {/* User info */}
        <div className="mb-6">
          <h2 className="text-xl font-extrabold" style={{ fontFamily: "Syne, sans-serif", color: "var(--midnight)" }}>@dimasdew</h2>
          <div className="flex items-center gap-3 mt-0.5">
            <span className="text-xs opacity-50 font-mono" style={{ fontFamily: "DM Mono, monospace" }}>0xaB2...4de3</span>
            <span className="text-xs opacity-50" style={{ fontFamily: "DM Sans, sans-serif" }}>· Joined Sept 2024</span>
          </div>
        </div>

        <div className="h-px mb-6" style={{ background: "rgba(3,52,110,0.12)" }} />

        <p className="text-sm font-semibold mb-4" style={{ fontFamily: "Syne, sans-serif", color: "var(--midnight)" }}>My Profile</p>

        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="flex flex-col gap-2 shrink-0 w-32">
            <Link
              href="/profile/order"
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
              style={pathname === "/profile/order"
                ? { background: "var(--navy)", color: "var(--sand)", fontFamily: "DM Sans, sans-serif" }
                : { background: "rgba(110,172,218,0.15)", color: "var(--midnight)", fontFamily: "DM Sans, sans-serif" }
              }
            >
              <ClipboardList size={15} />
              Order
            </Link>
            <Link
              href="/profile"
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
              style={pathname === "/profile"
                ? { background: "var(--navy)", color: "var(--sand)", fontFamily: "DM Sans, sans-serif" }
                : { background: "rgba(110,172,218,0.15)", color: "var(--midnight)", fontFamily: "DM Sans, sans-serif" }
              }
            >
              <UserCircle size={15} />
              Profile
            </Link>
          </div>

          {/* Content */}
          <div className="flex-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
