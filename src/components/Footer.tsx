import React from "react";

// ── Component ─────────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-500 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Logo Branding */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-teal-700 rounded-lg flex items-center justify-center text-white">
            <span className="font-extrabold text-xs tracking-wider">KL</span>
          </div>
          <span className="font-black text-sm tracking-tight text-white uppercase">
            KOS <span className="text-teal-600">LIEVI</span>
          </span>
        </div>

        {/* Copyright */}
        <p className="text-[11px] leading-relaxed text-gray-500 text-center sm:text-right">
          &copy; {new Date().getFullYear()} Kos Lievi Batang. Seluruh Hak Cipta Dilindungi Undang-Undang.
        </p>

      </div>
    </footer>
  );
}
