import React from "react";
import {
  MapPin, Bed, Wifi, Droplet, Utensils,
  Car, Sparkles, GlassWater, ShowerHead, Video, Check,
} from "lucide-react";
import { advantagesData } from "../data";

// ── Icon map ─────────────────────────────────────────────────────────────────
// Memetakan nama icon (string dari data.ts) ke elemen React.
function getIcon(iconName: string): React.ReactNode {
  const cls = "w-5 h-5 sm:w-6 sm:h-6";
  const icons: Record<string, React.ReactNode> = {
    MapPin:      <MapPin      className={cls} />,
    Bed:         <Bed         className={cls} />,
    Wifi:        <Wifi        className={cls} />,
    Droplet:     <Droplet     className={cls} />,
    Utensils:    <Utensils    className={cls} />,
    Car:         <Car         className={cls} />,
    Sparkles:    <Sparkles    className={cls} />,
    GlassWater:  <GlassWater  className={cls} />,
    ShowerHead:  <ShowerHead  className={cls} />,
    Video:       <Video       className={cls} />,
  };
  return icons[iconName] ?? <Check className={cls} />;
}

// ── Color map ─────────────────────────────────────────────────────────────────
// Memetakan nama icon ke kelas Tailwind untuk warna latar ikon.
function getColorClass(iconName: string): string {
  const colors: Record<string, string> = {
    MapPin:     "bg-teal-50    border border-teal-100    text-teal-700",
    Bed:        "bg-amber-50   border border-amber-100   text-amber-700",
    Wifi:       "bg-indigo-50  border border-indigo-100  text-indigo-700",
    Droplet:    "bg-blue-50    border border-blue-100    text-blue-700",
    Utensils:   "bg-emerald-50 border border-emerald-100 text-emerald-700",
    Car:        "bg-rose-50    border border-rose-100    text-rose-700",
    Sparkles:   "bg-teal-50    border border-teal-100    text-teal-600",
    GlassWater: "bg-cyan-50    border border-cyan-100    text-cyan-700",
    ShowerHead: "bg-sky-50     border border-sky-100     text-sky-700",
    Video:      "bg-slate-50   border border-slate-100   text-slate-700",
  };
  return colors[iconName] ?? "bg-teal-50 border border-teal-100 text-teal-700";
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function Advantages() {
  return (
    <section id="keunggulan" className="py-20 bg-white border-y border-gray-100 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-teal-700 font-extrabold text-xs tracking-widest uppercase block">
            FASILITAS &amp; KEUNGGULAN
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Mengapa Harus Kos Lievi?
          </h2>
          <p className="text-gray-500 text-base">
            Kami menghadirkan standard fasilitas tinggi, kebersihan terjamin, serta privasi aman
            yang teratur bagi mahasiswa dan profesional.
          </p>
        </div>

        {/* Grid Keunggulan */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {advantagesData.map((adv) => (
            <div
              key={adv.id}
              className="p-4 sm:p-6 bg-gray-50 hover:bg-white rounded-2xl border border-gray-100
                         hover:border-teal-100 transition-all duration-300 hover:shadow-lg
                         hover:shadow-teal-900/5 group flex flex-col items-center text-center"
            >
              {/* Ikon */}
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center
                              mb-4 transition-transform group-hover:scale-110 ${getColorClass(adv.icon)}`}>
                {getIcon(adv.icon)}
              </div>

              <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-1.5 line-clamp-1
                             group-hover:text-teal-700 transition-colors">
                {adv.title}
              </h3>
              <p className="text-[10px] sm:text-xs text-gray-400 leading-relaxed line-clamp-2 sm:line-clamp-3">
                {adv.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
