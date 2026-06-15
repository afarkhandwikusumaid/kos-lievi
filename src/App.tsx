import React, { useState, useEffect } from "react";
import { X, ShieldAlert } from "lucide-react";
import { roomsData, Room } from "./data";

// ── Komponen ────────────────────────────────────────────────────────────────
import Navbar          from "./components/Navbar";
import Hero            from "./components/Hero";
import Advantages      from "./components/Advantages";
import BookingSteps    from "./components/BookingSteps";
import RoomList        from "./components/RoomList";
import RoomDetailModal from "./components/RoomDetailModal";
import Testimonials    from "./components/Testimonials";
import FAQ             from "./components/FAQ";
import Contact         from "./components/Contact";
import Footer          from "./components/Footer";

// ── App (State Orchestrator) ────────────────────────────────────────────────
export default function App() {
  // ── State ─────────────────────────────────────────────────────────────────
  const [selectedRoom,    setSelectedRoom]    = useState<Room | null>(null);
  const [modalMainImg,    setModalMainImg]    = useState<string>("");
  const [bookingDate,     setBookingDate]     = useState<string>("");
  const [minDateString,   setMinDateString]   = useState<string>("");
  const [openFaqId,       setOpenFaqId]       = useState<number | null>(null);
  const [mobileMenuOpen,  setMobileMenuOpen]  = useState<boolean>(false);
  const [scrolled,        setScrolled]        = useState<boolean>(false);
  const [showRulesModal,  setShowRulesModal]  = useState<boolean>(false);

  // ── Tata Tertib Data ──────────────────────────────────────────────────────
  const rules = [
    "Saling menghormati batas privasi & hak kenyamanan akademik sesama penghuni.",
    "Jam kunjungan tamu diatur rapi (maksimal pukul 22.00 WIB untuk kebersihan kawasan).",
    "Dilarang membawa perlengkapan bermuatan membahayakan di dalam kamar & area komunal.",
    "Menjaga kebersihan dapur, dispenser, dan area rooftop atap dengan tertib mandiri."
  ];

  // ── Side Effects ───────────────────────────────────────────────────────────
  useEffect(() => {
    // Set today as the minimum bookable date
    const today     = new Date().toISOString().split("T")[0];
    setMinDateString(today);
    setBookingDate(today);

    // Change navbar style once the user scrolls past 40 px
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Handlers ───────────────────────────────────────────────────────────────
  const handleOpenRoomModal = (room: Room) => {
    setSelectedRoom(room);
    setModalMainImg(room.images[0]);
  };

  const handleCloseModal = () => setSelectedRoom(null);

  const handleWhatsAppBooking = (room: Room, selectedRoomNo: string, selectedPackage: string) => {
    const dateLabel = bookingDate
      ? new Date(bookingDate).toLocaleDateString("id-ID", {
          year: "numeric", month: "long", day: "numeric",
        })
      : "Segera";

    const message = [
      `Halo Pengelola Kos Lievi, saya tertarik untuk booking hunian:`,
      `• Pilihan Kamar: ${selectedRoomNo}`,
      `• Pilihan Paket: ${selectedPackage}`,
      `• Rencana Tanggal Masuk: ${dateLabel}`,
      ``,
      `Apakah kamar ini masih kosong? Terima kasih.`
    ].join("\n");

    window.open(`https://wa.me/6285742177446?text=${encodeURIComponent(message)}`, "_blank");
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-900 selection:bg-teal-50 selection:text-teal-900 font-sans antialiased">

      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrolled={scrolled}
      />

      <Hero onOpenRulesModal={() => setShowRulesModal(true)} />

      <Advantages />

      <BookingSteps />

      <RoomList
        rooms={roomsData}
        onOpenModal={handleOpenRoomModal}
      />

      <Testimonials />

      <FAQ openFaqId={openFaqId} setOpenFaqId={setOpenFaqId} />

      <Contact />

      <Footer />

      {/* ── Modal Detail Kamar ── */}
      {selectedRoom && (
        <RoomDetailModal
          room={selectedRoom}
          onClose={handleCloseModal}
          minDateString={minDateString}
          bookingDate={bookingDate}
          setBookingDate={setBookingDate}
          onWhatsAppBooking={handleWhatsAppBooking}
          modalMainImg={modalMainImg}
          setModalMainImg={setModalMainImg}
        />
      )}

      {/* ── Modal Tata Tertib Kost ── */}
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
    </div>
  );
}
