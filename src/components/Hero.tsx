import React from "react";
import { Sparkles, ArrowRight, Bed, MapPin, ShieldCheck } from "lucide-react";

// ── Component ─────────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section
      id="home"
      className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative
                 bg-gradient-to-br from-teal-50/40 via-white to-gray-50/50"
    >
      {/* Dekorasi latar belakang blur */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute left-10 bottom-10 w-72 h-72 bg-amber-100/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

        {/* ── Kolom Kiri: Teks & CTA ─────────────────────────────────────────── */}
        <div className="md:col-span-7 space-y-6 text-center md:text-left">

          {/* Badge promo */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 text-amber-800
                          text-xs font-bold rounded-full border border-amber-100 uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
            PREMIUM CAMPUS LIVING DEKAT UNDIP
          </div>

          {/* Heading utama */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight
                         text-gray-900 leading-tight">
            Hunian Bersih, Tenang &amp; Premium di{" "}
            <span className="text-teal-700 relative inline-block">
              Kos Lievi{" "}
              <span className="absolute bottom-1 left-0 w-full h-1.5 bg-teal-700/15" />
            </span>
          </h1>

          {/* Deskripsi */}
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl leading-relaxed">
            Kost cowo-cewe eksklusif dekat Universitas Diponegoro PSDKU Batang.
            Kamar rapi &amp; modern, fasilitas internet kencang fiber optic,
            aman CCTV 24 Jam, di kawasan strategis Bandar.
          </p>

          {/* Tombol CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
            <a
              href="#kamar"
              id="hero-primary-cta"
              className="w-full sm:w-auto px-8 py-3.5 bg-teal-700 text-white
                         rounded-xl font-bold transition-all shadow-md shadow-teal-900/10
                         text-center flex items-center justify-center gap-2"
            >
              <span>Sewa Kamar Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#keunggulan"
              id="hero-secondary-cta"
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-gray-800
                         border border-gray-200 rounded-xl font-semibold
                         transition-all text-center flex items-center justify-center gap-1.5"
            >
              Fasilitas Bersama
            </a>
          </div>

          {/* Mini statistik */}
          <div className="pt-8 border-t border-gray-150 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">

            <div className="flex items-center gap-3 bg-teal-50/50 px-4 py-3.5 rounded-2xl
                            border border-teal-100/50 shadow-xs transition-all">
              <div className="w-10 h-10 bg-teal-700 text-white rounded-xl flex items-center
                              justify-center shadow-sm shrink-0">
                <Bed className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-black text-teal-850 leading-tight">10 Kamar</div>
                <div className="text-[10px] font-bold text-teal-600/70 uppercase tracking-wider">Cowo-Cewe</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-amber-50/50 px-4 py-3.5 rounded-2xl
                            border border-amber-100/50 shadow-xs transition-all">
              <div className="w-10 h-10 bg-amber-600 text-white rounded-xl flex items-center
                              justify-center shadow-sm shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-black text-amber-850 leading-tight">5 Menit</div>
                <div className="text-[10px] font-bold text-amber-600/70 uppercase tracking-wider">Ke UNDIP Batang</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-emerald-50/50 px-4 py-3.5 rounded-2xl
                            border border-emerald-100/50 shadow-xs transition-all">
              <div className="w-10 h-10 bg-emerald-700 text-white rounded-xl flex items-center
                              justify-center shadow-sm shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-black text-emerald-850 leading-tight">24 Jam</div>
                <div className="text-[10px] font-bold text-emerald-600/70 uppercase tracking-wider">
                  CCTV &amp; Keamanan
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Kolom Kanan: Foto Utama ────────────────────────────────────────── */}
        <div className="md:col-span-5 relative mt-6 md:mt-0">
          <div className="relative mx-auto max-w-md md:max-w-none">

            {/* Cincin dekoratif */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-teal-700 to-amber-500
                            opacity-20 rounded-3xl blur-md -z-10" />

            {/* Foto kamar */}
            <div className="overflow-hidden bg-white border border-gray-100 p-3 rounded-2xl
                            shadow-xl aspect-4/3 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80"
                alt="Interior kamar Kos Lievi yang rapi dan premium"
                className="w-full h-full object-cover rounded-xl transition-transform duration-700"
              />
            </div>

            {/* Float badge: sertifikat tertib */}
            <div
              className="absolute top-4 -left-6 bg-white/95 backdrop-blur-xs p-3.5 rounded-xl
                         shadow-lg border border-gray-50 flex items-center gap-3 animate-bounce
                         shadow-teal-900/5"
              style={{ animationDuration: "6s" }}
            >
              <div className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center
                              text-teal-700 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-gray-900">Sertifikat Tertib</div>
                <div className="text-[10px] text-gray-400 font-medium">Tertib &amp; Nyaman Rapi</div>
              </div>
            </div>

            {/* Float badge: semua bisa dipesan */}
            <div
              className="absolute -bottom-6 -right-4 bg-white/95 backdrop-blur-xs p-4 rounded-xl
                         shadow-lg border border-gray-50 flex items-center gap-3"
              style={{ animationDuration: "4s" }}
            >
              <div className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center
                              text-teal-700 shrink-0">
                <Bed className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-gray-900">10 Kamar Tersedia</div>
                <div className="text-[10px] text-teal-700 font-extrabold">
                  Semua bisa dipesan sekarang!
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
