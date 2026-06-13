import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4 space-y-4">
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

          <div className="text-[10px] text-gray-500 leading-relaxed">
            &copy; 2026 Kos Lievi Batang. Seluruh Hak Cipta Dilindungi Undang-Undang.
          </div>
        </div>

        <div className="md:col-span-3 space-y-4">
          <h4 className="text-sm font-black text-white uppercase tracking-widest pb-1 border-b border-gray-800">
            Tautan Pintar
          </h4>
          <div className="flex flex-col gap-2 text-xs">
            <a href="#home" className="hover:text-white transition-colors">
              Utama &amp; Panduan
            </a>
            <a href="#keunggulan" className="hover:text-white transition-colors">
              Fasilitas Keunggulan
            </a>
            <a href="#cara-booking" className="hover:text-white transition-colors">
              Sistem Cara Booking
            </a>
            <a href="#kamar" className="hover:text-white transition-colors">
              Semua 10 Kamar riil
            </a>
            <a href="#testimoni" className="hover:text-white transition-colors">
              Ulasan Mahasiswa
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Peta Lokasi Google Maps
            </a>
          </div>
        </div>

        <div className="md:col-span-5 space-y-4">
          <h4 className="text-sm font-black text-white uppercase tracking-widest pb-1 border-b border-gray-800">
            Peraturan Ringkas Kost
          </h4>
          <div className="space-y-2 text-[11px] text-gray-400">
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 shrink-0" />
              <p className="leading-relaxed">
                Saling menghormati batas privasi &amp; hak kenyamanan akademik sesama penghuni.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 shrink-0" />
              <p className="leading-relaxed">
                Jam kunjungan tamu diatur rapi (maksimal pukul 22.00 WIB untuk kebersihan kawasan).
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 shrink-0" />
              <p className="leading-relaxed">
                Dilarang membawa perlengkapan bermuatan membahayakan di dalam kamar &amp; area komunal.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 shrink-0" />
              <p className="leading-relaxed">Menjaga kebersihan dapur, dispenser, dan area rooftop atap dengan tertib mandiri.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
