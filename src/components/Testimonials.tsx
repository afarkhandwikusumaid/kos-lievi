import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials, Testimonial } from "../data";

// ── Component ─────────────────────────────────────────────────────────────────
export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimoni" className="py-20 bg-gray-50 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-teal-700 font-extrabold text-xs tracking-widest uppercase block">
            KATA PENYEWA KAMI
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Apa Ulasan Mereka Tentang Kos Lievi?
          </h2>
          <p className="text-gray-500 text-base">
            Kami senantiasa berusaha memberikan kenyamanan tempat tinggal terbaik agar studi Anda lancar berprestasi.
          </p>
        </div>

        {/* ── Tampilan Desktop (Grid) ── */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {testimonials.map((t: Testimonial) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-8 border border-gray-150 shadow-xs flex flex-col justify-between relative"
            >
              {/* Accent quote graphics */}
              <div className="absolute top-6 right-8 text-6xl text-teal-700/10 font-serif leading-none select-none pointer-events-none">
                “
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-0.5 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current shrink-0" />
                  ))}
                </div>

                <p className="text-gray-600 text-sm italic leading-relaxed relative z-10">"{t.content}"</p>
              </div>

              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-teal-150 shrink-0">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">{t.name}</h4>
                  <p className="text-[11px] text-teal-700 font-extrabold">{t.role}</p>
                  <p className="text-[10px] text-gray-400 font-semibold">{t.origin}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Tampilan Mobile (Slider) ── */}
        <div className="block lg:hidden relative">
          <div className="bg-white rounded-2xl p-8 border border-gray-150 shadow-xs flex flex-col justify-between relative min-h-[250px] transition-all duration-300">
            {/* Accent quote graphics */}
            <div className="absolute top-6 right-8 text-6xl text-teal-700/10 font-serif leading-none select-none pointer-events-none">
              “
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current shrink-0" />
                ))}
              </div>

              <p className="text-gray-600 text-sm italic leading-relaxed relative z-10">
                "{testimonials[activeIndex].content}"
              </p>
            </div>

            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-teal-150 shrink-0">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900">{testimonials[activeIndex].name}</h4>
                <p className="text-[11px] text-teal-700 font-extrabold">{testimonials[activeIndex].role}</p>
                <p className="text-[10px] text-gray-400 font-semibold">{testimonials[activeIndex].origin}</p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6 px-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 shadow-xs"
              aria-label="Ulasan Sebelumnya"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === i ? "bg-teal-700 w-5" : "bg-gray-300"
                  }`}
                  aria-label={`Ke slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 shadow-xs"
              aria-label="Ulasan Berikutnya"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Social Media CTA badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-xs text-gray-500 shadow-xs">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
            <span>
              Sudah dihuni oleh total <strong>30+ mahasiswa</strong> semenjak tahun 2024.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
