import React from "react";
import { Search, Calendar, MessageSquare, Key, Check } from "lucide-react";
import { bookingSteps, BookingStep } from "../data";

export default function BookingSteps() {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "search":
        return <Search className="w-6 h-6" />;
      case "calendar":
        return <Calendar className="w-6 h-6" />;
      case "message-square":
        return <MessageSquare className="w-6 h-6" />;
      case "key":
        return <Key className="w-6 h-6" />;
      default:
        return <Check className="w-6 h-6" />;
    }
  };

  return (
    <section id="cara-booking" className="py-20 bg-gray-50 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-teal-700 font-extrabold text-xs tracking-widest uppercase block">SISTEM RESERVASI</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Bagaimana Cara Booking Kamar?</h2>
          <p className="text-gray-500 text-base">Alur pendaftaran dan sewa di Kos Lievi kami buat sesederhana mungkin demi memudahkan mahasiswa rantau.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Horizontal Line for desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-0.5 bg-gray-200 -z-0" />

          {bookingSteps.map((step: BookingStep) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs hover:shadow-md transition-shadow relative z-10 text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 bg-teal-50 border border-teal-100 rounded-full flex items-center justify-center text-teal-700 mb-4 font-black text-xl shadow-xs">
                {getStepIcon(step.icon)}
              </div>
              <div className="absolute top-4 right-4 bg-teal-700 text-white rounded-md px-2 py-0.5 text-xs font-black">
                Langkah {step.step}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2 mt-1">{step.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed text-center">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
