import React from "react";
import { Menu, X, Sparkles } from "lucide-react";

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrolled: boolean;
}

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen, scrolled }: NavbarProps) {
  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-teal-700 rounded-xl flex items-center justify-center text-white shadow-md shadow-teal-900/10 transition-transform group-hover:scale-105">
              <span className="font-extrabold text-base tracking-wider">KL</span>
            </div>
            <span className="font-black text-xl tracking-tight text-gray-900 group-hover:text-teal-700 transition-colors uppercase">
              KOS <span className="text-teal-700">LIEVI</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-semibold text-gray-600 hover:text-teal-700 transition-colors">
              Beranda
            </a>
            <a href="#keunggulan" className="text-sm font-semibold text-gray-600 hover:text-teal-700 transition-colors">
              Keunggulan
            </a>
            <a href="#cara-booking" className="text-sm font-semibold text-gray-600 hover:text-teal-700 transition-colors">
              Cara Booking
            </a>
            <a href="#kamar" className="text-sm font-semibold text-gray-600 hover:text-teal-700 transition-colors">
              Daftar Kamar
            </a>
            <a href="#testimoni" className="text-sm font-semibold text-gray-600 hover:text-teal-700 transition-colors">
              Ulasan
            </a>
            <a href="#faq" className="text-sm font-semibold text-gray-600 hover:text-teal-700 transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-sm font-semibold text-gray-600 hover:text-teal-700 transition-colors">
              Kontak
            </a>
          </div>

          <div className="hidden md:flex items-center">
            <a
              href="#kamar"
              className="px-5 py-2.5 bg-teal-700 text-white rounded-xl font-bold hover:bg-teal-800 transition-all text-xs tracking-wider shadow-sm hover:shadow-teal-900/10 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Pesan Kamar Kost
            </a>
          </div>

          {/* Mobile menu interface btn */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-teal-700 transition-colors hover:bg-gray-100 rounded-lg focus:outline-none"
            aria-label="Toggle Mobile Menu"
            id="mobile-menu-btn"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Layer */}
      {mobileMenuOpen && (
        <div
          id="drawer-overlay"
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-4/5 max-w-sm h-full bg-white shadow-2xl p-6 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-extrabold text-lg text-teal-700 uppercase">KOS LIEVI MENU</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-1.5 hover:bg-gray-100 rounded-full text-gray-500">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="#home"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-gray-700 hover:text-teal-700 py-1 transition-colors border-b border-gray-50"
                >
                  Beranda
                </a>
                <a
                  href="#keunggulan"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-gray-700 hover:text-teal-700 py-1 transition-colors border-b border-gray-50"
                >
                  Keunggulan
                </a>
                <a
                  href="#cara-booking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-gray-700 hover:text-teal-700 py-1 transition-colors border-b border-gray-50"
                >
                  Cara Booking
                </a>
                <a
                  href="#kamar"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-gray-700 hover:text-teal-700 py-1 transition-colors border-b border-gray-50"
                >
                  Daftar Kamar
                </a>
                <a
                  href="#testimoni"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-gray-700 hover:text-teal-700 py-1 transition-colors border-b border-gray-50"
                >
                  Ulasan
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-gray-700 hover:text-teal-700 py-1 transition-colors border-b border-gray-50"
                >
                  FAQ
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-gray-700 hover:text-teal-700 py-1 transition-colors"
                >
                  Kontak
                </a>
              </div>
            </div>

            <a
              href="#kamar"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 bg-teal-700 text-white rounded-xl font-bold hover:bg-teal-800 text-center transition-all shadow-sm"
              id="drawer-cta-btn"
            >
              Pesan Kamar Sekarang
            </a>
          </div>
        </div>
      )}
    </>
  );
}
