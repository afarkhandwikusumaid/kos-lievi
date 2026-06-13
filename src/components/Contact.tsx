import React from "react";
import { MapPin, Phone, Clock, Info, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-teal-700 font-extrabold text-xs tracking-widest uppercase block">KONTAK &amp; LOKASI</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Hubungi Kami &amp; Survei Unit</h2>
          <p className="text-gray-500 text-base">
            Segera hubungi tim pengelola Kos Lievi untuk survey langsung, tanya status kamar, atau sekedar berkunjung.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Information column */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-150 flex gap-4">
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-teal-700 shrink-0">
                  <MapPin className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 mb-1">Alamat Lengkap Kos</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                    Kampung Baru dukuh cempoko, Mulyo, Tumbrep, Kec. Bandar, Kabupaten Batang, Jawa Tengah 51254
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-150 flex gap-4">
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-teal-700 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 mb-1">WhatsApp Pengelola</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mb-1 font-semibold">Nomor Resmi: +62 859-4462-9716</p>
                  <a
                    href={`https://wa.me/6285944629716?text=${encodeURIComponent(
                      "Halo Pengelola Kos Lievi, saya ingin tanya status kamar."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-teal-700 font-extrabold inline-flex items-center gap-1"
                  >
                    Chat langsung di WhatsApp
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-150 flex gap-4">
                <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-700 shrink-0">
                  <Clock className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 mb-1">Jam Terbaik Berkunjung</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-semibold">Setiap Hari: Jam 08:00 - 18:00 WIB</p>
                  <p className="text-[10px] text-gray-400 font-semibold mt-1">
                    Harap menjdawalkan janji temu minimal 1 hari sebelumnya via WA pengelola.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick note badge */}
            <div className="p-4 bg-teal-50 border border-teal-100 rounded-xl text-teal-800 text-xs inline-flex items-start gap-2.5">
              <Info className="w-4 h-4 shrink-0 text-teal-700 mt-0.5" />
              <p className="leading-relaxed font-medium">
                <strong>Peta Lokasi:</strong> Peta di samping menunjuk lokasi wilayah sub-distrik Bandar di mana Kos Lievi
                berdiri strategis dekat jalur utama jalan lingkar kampus.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-3 rounded-2xl border border-gray-150 shadow-xs h-[380px] lg:h-auto flex flex-col overflow-hidden">
            <iframe
              className="w-full h-full rounded-xl border border-gray-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.330882103597!2d109.7993839!3d-7.0633913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7017003e502977%3A0x2afb78968f9a8c73!2sLivie%20kost!5e0!3m2!1sid!2sid!4v1718312000000!5m2!1sid!2sid"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer"
              title="Peta Lokasi Livie Kost Bandar Kabupaten Batang"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
