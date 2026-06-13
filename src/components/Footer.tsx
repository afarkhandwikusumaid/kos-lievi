import React, { useState } from "react";
import { X, ShieldAlert } from "lucide-react";

// ── Component ─────────────────────────────────────────────────────────────────
export default function Footer() {
  const [showRulesModal, setShowRulesModal] = useState(false);

  const rules = [
    "Saling menghormati batas privasi & hak kenyamanan akademik sesama penghuni.",
    "Jam kunjungan tamu diatur rapi (maksimal pukul 22.00 WIB untuk kebersihan kawasan).",
    "Dilarang membawa perlengkapan bermuatan membahayakan di dalam kamar & area komunal.",
    "Menjaga kebersihan dapur, dispenser, dan area rooftop atap dengan tertib mandiri."
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Kolom Kiri: Logo & Deskripsi */}
        <div className="md:col-span-8 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-teal-700 rounded-xl flex items-center justify-center text-white">
              <span className="font-extrabold text-sm tracking-widest">KL</span>
            </div>
            <span className="font-black text-lg tracking-tight text-white uppercase">
              KOS <span className="text-teal-600">LIEVI</span>
            </span>
          </div>

          <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
            Boarding house eksklusif cowo-cewe yang didesain fungsional, sejuk, dan teratur demi mendukung kelancaran studi
            mahasiswa Universitas Diponegoro Batang dekat Mulyo Bandar.
          </p>

          <div className="text-[10px] text-gray-500 leading-relaxed pt-2">
            &copy; 2026 Kos Lievi Batang. Seluruh Hak Cipta Dilindungi Undang-Undang.
          </div>
        </div>

        {/* Kolom Kanan: Tombol Aksi Tata Tertib */}
        <div className="md:col-span-4 flex flex-col justify-center items-start md:items-end">
          <button
            onClick={() => setShowRulesModal(true)}
            className="px-5 py-3 bg-teal-700 text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer"
          >
            Tata Tertib Kost
          </button>
        </div>

      </div>

      {/* ── Tata Tertib Modal Popup ── */}
      {showRulesModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-[100] flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setShowRulesModal(false)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Tutup */}
            <button
              onClick={() => setShowRulesModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-150 text-gray-500 flex items-center justify-center transition-colors"
              aria-label="Tutup"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header Modal */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-black text-gray-900 text-sm uppercase tracking-wider">Tata Tertib &amp; Peraturan</h3>
                <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Kos Lievi Batang</p>
              </div>
            </div>

            {/* Isi Peraturan */}
            <div className="space-y-3">
              {rules.map((rule, index) => (
                <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span className="w-6 h-6 bg-teal-50 text-teal-700 font-black rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-xs text-gray-650 leading-relaxed font-semibold">
                    {rule}
                  </p>
                </div>
              ))}
            </div>

            {/* Catatan Kaki Modal */}
            <div className="mt-6 pt-4 border-t border-gray-100 text-center">
              <button
                onClick={() => setShowRulesModal(false)}
                className="w-full py-2.5 bg-teal-700 text-white font-bold rounded-xl text-xs uppercase tracking-wider"
              >
                Saya Mengerti &amp; Setuju
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
