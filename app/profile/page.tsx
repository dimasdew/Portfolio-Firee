"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";

export default function ProfilePage() {
  const [username, setUsername] = useState("dimasdew");
  const [editing, setEditing] = useState(false);
  const [language, setLanguage] = useState("Indonesia");
  const [notification, setNotification] = useState("Yes");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="rounded-3xl p-8 shadow-sm" style={{ background: "white", border: "1px solid rgba(110,172,218,0.2)" }}>
      <div className="space-y-6 max-w-lg">
        {/* Username */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ fontFamily: "Syne, sans-serif", color: "var(--navy)" }}>
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={!editing}
              className="input-field"
              style={!editing ? { opacity: 0.7, cursor: "default" } : {}}
            />
          </div>
          <button onClick={() => setEditing(!editing)} className="btn-primary mt-6 text-xs px-4 py-2">
            {editing ? "Done" : "Edit"}
          </button>
        </div>

        {/* Avatar */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ fontFamily: "Syne, sans-serif", color: "var(--navy)" }}>
              Avatar
            </label>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity" style={{ background: "rgba(110,172,218,0.3)", border: "1px dashed var(--sky)" }}>
                <Pencil size={14} style={{ color: "var(--navy)" }} />
              </div>
              <span className="text-xs opacity-50" style={{ fontFamily: "DM Sans, sans-serif" }}>Click to upload</span>
            </div>
          </div>
          <button className="btn-primary mt-6 text-xs px-4 py-2" style={{ background: "rgba(220,38,38,0.12)", color: "#dc2626" }}>
            Remove
          </button>
        </div>

        {/* Banner */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ fontFamily: "Syne, sans-serif", color: "var(--navy)" }}>
              Banner
            </label>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity" style={{ background: "rgba(110,172,218,0.3)", border: "1px dashed var(--sky)" }}>
                <Pencil size={14} style={{ color: "var(--navy)" }} />
              </div>
              <span className="text-xs opacity-50" style={{ fontFamily: "DM Sans, sans-serif" }}>Click to upload</span>
            </div>
          </div>
          <button className="btn-primary mt-6 text-xs px-4 py-2" style={{ background: "rgba(220,38,38,0.12)", color: "#dc2626" }}>
            Remove
          </button>
        </div>

        {/* Language */}
        <div>
          <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ fontFamily: "Syne, sans-serif", color: "var(--navy)" }}>
            Language
          </label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="input-field"
            style={{ cursor: "pointer" }}
          >
            {["Indonesia", "English", "Japanese", "Korean"].map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </div>

        {/* Notification */}
        <div className="flex items-end justify-between gap-4">
          <div className="flex-1">
            <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ fontFamily: "Syne, sans-serif", color: "var(--navy)" }}>
              Notification
            </label>
            <select
              value={notification}
              onChange={(e) => setNotification(e.target.value)}
              className="input-field"
              style={{ cursor: "pointer", width: "fit-content", minWidth: "120px" }}
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <button
            onClick={handleSave}
            className={`btn-primary px-6 py-2.5 text-sm transition-all ${saved ? "opacity-70" : ""}`}
          >
            {saved ? "Saved ✓" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
