import React from "react";
import { ChevronUp, ChevronDown, ArrowRight } from "lucide-react";
import { faqList, FAQItem } from "../data";

interface FAQProps {
  openFaqId: number | null;
  setOpenFaqId: (id: number | null) => void;
}

export default function FAQ({ openFaqId, setOpenFaqId }: FAQProps) {
  return (
    <section id="faq" className="py-20 bg-white border-y border-gray-100 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
          <span className="text-teal-700 font-extrabold text-xs tracking-widest uppercase block">CUSTOMER SUPPORT FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Pertanyaan yang Sering Diajukan</h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
            Masih ragu atau ingin tahu lebih dalam mengenai aturan main, sewa, serta jam malam Kos Lievi? Temukan jawbannya langsung di samping ini.
          </p>
          <div className="pt-4 hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs text-teal-700 font-bold tracking-wider uppercase border-b-2 border-teal-700/20 pb-0.5 transition-all"
            >
              Hubungi Pengelola Langsung
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          {faqList.map((faq: FAQItem) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-xl overflow-hidden bg-[#F9FAFB]/50 transition-colors"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left focus:outline-none"
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="font-bold text-sm sm:text-base text-gray-900">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-teal-700 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-teal-700/50 shrink-0" />
                  )}
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-72 border-t border-gray-150" : "max-h-0"}`}>
                  <div className="px-6 py-4 text-xs sm:text-sm text-gray-500 leading-relaxed bg-white">{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
