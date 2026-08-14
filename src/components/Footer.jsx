import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 border-t border-white/5 py-6">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs text-slate-500">
          © {currentYear} Tanveer Qurashi. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}