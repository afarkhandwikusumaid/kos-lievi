import React from "react";
import { X, Info, MessageSquare } from "lucide-react";
import { Room } from "../data";

interface RoomDetailModalProps {
  room: Room;
  onClose: () => void;
  minDateString: string;
  bookingDate: string;
  setBookingDate: (date: string) => void;
  onWhatsAppBooking: (room: Room) => void;
  modalMainImg: string;
  setModalMainImg: (img: string) => void;
}

// ── Component ─────────────────────────────────────────────────────────────────
// Modal detail kamar: galeri foto, spesifikasi lengkap, pilih tanggal masuk,
// dan tombol booking langsung via WhatsApp.
export default function RoomDetailModal({
  room,
  onClose,
  minDateString,
  bookingDate,
  setBookingDate,
  onWhatsAppBooking,
  modalMainImg,
  setModalMainImg,
}: RoomDetailModalProps) {
  return (
    // Overlay — klik di luar modal untuk menutup
    <div
      id="room-detail-modal"
      className="fixed inset-0 bg-black/60 backdrop-blur-xs z-[100] flex items-center
                 justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      {/* Panel modal — stopPropagation agar klik di dalam tidak menutup */}
      <div
        className="bg-white rounded-2xl overflow-hidden w-full max-w-4xl shadow-2xl relative
                   grid grid-cols-1 md:grid-cols-2 max-h-[90vh] md:max-h-[85vh]
                   animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol tutup */}
        <button
          onClick={onClose}
          id="modal-close-btn"
          aria-label="Tutup Modal"
          className="absolute top-4 right-4 z-50 w-8 h-8 rounded-full bg-white/90
                     backdrop-blur-xs shadow-md border hover:bg-red-50 hover:text-red-500
                     hover:border-red-100 flex items-center justify-center text-gray-500
                     transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* ── Kolom Kiri: Galeri Foto ─────────────────────────────────────── */}
        <div className="p-6 bg-gray-50 border-r border-gray-100 flex flex-col justify-between
                        overflow-y-auto max-h-[40vh] md:max-h-none">

          {/* Foto utama */}
          <div className="aspect-4/3 bg-gray-150 rounded-xl overflow-hidden mb-4 relative shrink-0">
            <img
              src={modalMainImg}
              alt={`Foto utama ${room.name}`}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            <div className="absolute bottom-4 left-4">
              <span className="px-2.5 py-1 text-[10px] font-extrabold uppercase bg-teal-700
                               text-white rounded-md tracking-wider">
                Foto Interior Riil
              </span>
            </div>
          </div>

          {/* Thumbnail gallery */}
          <div className="grid grid-cols-4 gap-2">
            {room.images.map((imgUrl, idx) => (
              <button
                key={idx}
                id={`thumb-btn-${idx}`}
                onClick={() => setModalMainImg(imgUrl)}
                className={`aspect-square rounded-lg overflow-hidden bg-gray-200 border-2 transition-all ${
                  modalMainImg === imgUrl
                    ? "border-teal-700 shadow-sm opacity-100 scale-95"
                    : "border-transparent opacity-75 hover:opacity-100"
                }`}
              >
                <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Catatan pengelola — hanya tampil di desktop */}
          <div className="hidden md:block pt-6">
            <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-2">
              Informasi Penting
            </div>
            <ul className="text-[10px] text-gray-500 leading-relaxed list-disc list-inside space-y-1">
              <li>Survei fisik kamar diantar langsung oleh staf representatif.</li>
              <li>Uang muka / DP booking mengamankan kamar untuk maks 14 hari.</li>
              <li>Aturan penyerahan jaminan sewa tertulis terlampir di kuitansi sewa.</li>
            </ul>
          </div>
        </div>

        {/* ── Kolom Kanan: Detail, Form Tanggal & Tombol Booking ─────────── */}
        <div className="p-6 md:p-8 flex flex-col justify-between overflow-y-auto
                        max-h-[50vh] md:max-h-none">
          <div className="space-y-6">

            {/* Nama & badge */}
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase
                                 tracking-wider border bg-teal-50 border-teal-150 text-teal-700">
                  Bisa Dipesan
                </span>
                <span className="px-2 py-0.5 rounded-md bg-gray-100 text-[9px] font-black
                                 uppercase tracking-wider text-teal-700 border border-teal-100">
                  DELUXE PREMIUM
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
                {room.name}
              </h3>
            </div>

            {/* Tarif */}
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-between">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Tarif Bulanan
              </span>
              <div className="text-right">
                <span className="text-2xl font-black text-teal-700 block leading-none">
                  {room.priceFormatted}
                </span>
                <span className="text-[10px] text-gray-400 font-bold uppercase mt-0.5 block">
                  Nett termasuk Wi-Fi
                </span>
              </div>
            </div>

            {/* Spesifikasi lengkap */}
            <div className="space-y-3">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest
                             flex items-center gap-1.5 pb-2 border-b border-gray-100">
                <Info className="w-3.5 h-3.5 text-teal-700" />
                Spesifikasi &amp; Fasilitas Kamar
              </h4>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 text-xs text-gray-600">
                {[
                  ["Ukuran",   room.specifications.ukuran],
                  ["Kasur",    room.specifications.kasur],
                  ["Lemari",   room.specifications.lemari],
                  ["Belajar",  room.specifications.meja],
                  ["Kipas",    room.specifications.kipas],
                  ["KM Mandi", room.specifications.kamarMandi.includes("Dalam") ? "Dalam" : "Luar"],
                  ["Token",    room.specifications.listrik],
                  ["Lainnya",  room.specifications.lainnya],
                ].map(([label, value]) => (
                  <li key={label} className="flex items-center gap-2 min-w-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" />
                    <span className="truncate">
                      {label}: <strong>{value}</strong>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form pilih tanggal masuk */}
            <div className="border-t border-gray-100 pt-5">
              <label
                htmlFor="modal-date-picker"
                className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1.5"
              >
                Rencana Tanggal Masuk Kost:
              </label>
              <input
                type="date"
                id="modal-date-picker"
                min={minDateString}
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl
                           text-sm focus:outline-none focus:border-teal-700"
              />
            </div>
          </div>

          {/* Tombol Booking WhatsApp */}
          <div className="pt-6 mt-6 border-t border-gray-100">
            <button
              onClick={() => onWhatsAppBooking(room)}
              id="submit-booking-wa"
              className="w-full py-3.5 bg-teal-700 hover:bg-teal-800 text-white rounded-xl
                         font-bold flex items-center justify-center gap-2 transition-all
                         shadow-md shadow-teal-900/10 text-xs tracking-wider uppercase
                         hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Booking Unit via WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
