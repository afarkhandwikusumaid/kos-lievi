import React, { useState, useEffect } from "react";
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
  const [selectedRoom,   setSelectedRoom]   = useState<Room | null>(null);
  const [modalMainImg,   setModalMainImg]   = useState<string>("");
  const [bookingDate,    setBookingDate]    = useState<string>("");
  const [minDateString,  setMinDateString]  = useState<string>("");
  const [openFaqId,      setOpenFaqId]      = useState<number | null>(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled,       setScrolled]       = useState<boolean>(false);

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
      `• Rencana Masuk: ${dateLabel}`,
      ``,
      `Apakah kamar ini masih kosong? Terima kasih.`
    ].join("\n");

    window.open(`https://wa.me/6285944629716?text=${encodeURIComponent(message)}`, "_blank");
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-900 selection:bg-teal-50 selection:text-teal-900 font-sans antialiased">

      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrolled={scrolled}
      />

      <Hero />

      {/* Advantages sekarang self-contained — tidak perlu prop helper */}
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

      {/* Modal hanya ditampilkan jika ada kamar yang dipilih */}
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
    </div>
  );
}
