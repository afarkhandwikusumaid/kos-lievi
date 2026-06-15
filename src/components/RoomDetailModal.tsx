import React, { useState } from "react";
import { X, Info, MessageSquare } from "lucide-react";
import {
  Room,
  ROOM_COUNT,
  rentalPackages,
  importantNotes,
} from "../data";

// ── Types ──────────────────────────────────────────────────────────────────────

interface RoomDetailModalProps {
  room: Room;
  onClose: () => void;
  minDateString: string;
  bookingDate: string;
  setBookingDate: (date: string) => void;
  onWhatsAppBooking: (room: Room, roomNo: string, sewaPackage: string) => void;
  modalMainImg: string;
  setModalMainImg: (img: string) => void;
}

// ── Styles ─────────────────────────────────────────────────────────────────────
// Kelas-kelas CSS yang digunakan berulang dikelompokkan di sini agar mudah diubah

const LABEL_CLASS = "block text-xs font-black text-gray-400 uppercase tracking-widest mb-1.5";
const SELECT_CLASS = "w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-teal-700";

// ── Sub-components ─────────────────────────────────────────────────────────────

/** Bagian galeri: foto utama + thumbnail */
function GalleryColumn({
  room,
  modalMainImg,
  setModalMainImg,
}: {
  room: Room;
  modalMainImg: string;
  setModalMainImg: (img: string) => void;
}) {
  return (
    <div
      className="p-6 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-100
                 flex flex-col gap-4 overflow-y-visible md:overflow-y-auto overflow-x-hidden
                 max-h-none md:max-h-[85vh]"
    >
      {/* Foto utama */}
      <div className="aspect-4/3 bg-gray-150 rounded-xl overflow-hidden relative shrink-0">
        <img
          src={modalMainImg}
          alt={`Foto utama ${room.name}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        <div className="absolute bottom-4 left-4">
          <span className="px-2.5 py-1 text-[10px] font-extrabold uppercase bg-teal-700 text-white rounded-md tracking-wider">
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
                : "border-transparent opacity-75"
            }`}
          >
            <img
              src={imgUrl}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Informasi Penting — tampil di semua ukuran layar */}
      <div className="pt-2 border-t border-gray-200">
        <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-2">
          Informasi Penting
        </div>
        <ul className="text-[10px] text-gray-500 leading-relaxed list-disc list-inside space-y-1">
          {importantNotes.map((note) => (
            <li key={note.id}>{note.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** Bagian spesifikasi kamar */
function SpecificationsSection({ room }: { room: Room }) {
  return (
    <div className="space-y-3">
      <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-1.5 pb-2 border-b border-gray-100">
        <Info className="w-3.5 h-3.5 text-teal-700" />
        Spesifikasi &amp; Fasilitas Kamar
      </h4>

      <ul className="flex flex-col gap-y-2 text-xs text-gray-600">
        {room.specifications.map((spec, idx) => {
          if (!spec) return null;
          return (
            <li key={idx} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0 mt-1.5" />
              <span className="whitespace-normal break-words">
                <strong>{spec}</strong>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** Form pilihan nomor kamar, paket sewa, dan tanggal masuk */
function BookingForm({
  bookingDate,
  setBookingDate,
  minDateString,
  selectedRoomNo,
  setSelectedRoomNo,
  selectedPackage,
  setSelectedPackage,
}: {
  bookingDate: string;
  setBookingDate: (d: string) => void;
  minDateString: string;
  selectedRoomNo: string;
  setSelectedRoomNo: (v: string) => void;
  selectedPackage: string;
  setSelectedPackage: (v: string) => void;
}) {
  return (
    <div className="border-t border-gray-100 pt-5 space-y-4">
      {/* Nomor Kamar */}
      <div>
        <label htmlFor="modal-room-no" className={LABEL_CLASS}>
          Pilihan Nomor Kamar:
        </label>
        <select
          id="modal-room-no"
          value={selectedRoomNo}
          onChange={(e) => setSelectedRoomNo(e.target.value)}
          className={SELECT_CLASS}
        >
          {Array.from({ length: ROOM_COUNT }, (_, i) => {
            const no = String(i + 1).padStart(2, "0");
            return (
              <option key={no} value={`Kamar ${no}`}>
                Kamar {no}
              </option>
            );
          })}
        </select>
      </div>

      {/* Paket Sewa */}
      <div>
        <label htmlFor="modal-package" className={LABEL_CLASS}>
          Pilihan Paket Sewa:
        </label>
        <select
          id="modal-package"
          value={selectedPackage}
          onChange={(e) => setSelectedPackage(e.target.value)}
          className={SELECT_CLASS}
        >
          {rentalPackages.map((pkg) => (
            <option key={pkg.value} value={pkg.value}>
              {pkg.label}
            </option>
          ))}
        </select>
      </div>

      {/* Tanggal Masuk */}
      <div>
        <label htmlFor="modal-date-picker" className={LABEL_CLASS}>
          Rencana Tanggal Masuk Kost:
        </label>
        <input
          type="date"
          id="modal-date-picker"
          min={minDateString}
          value={bookingDate}
          onChange={(e) => setBookingDate(e.target.value)}
          className={SELECT_CLASS}
        />
      </div>
    </div>
  );
}

/** Kolom kanan: nama kamar, tarif, spesifikasi, form booking, dan tombol WA */
function DetailColumn({
  room,
  bookingDate,
  setBookingDate,
  minDateString,
  selectedRoomNo,
  setSelectedRoomNo,
  selectedPackage,
  setSelectedPackage,
  onWhatsAppBooking,
}: {
  room: Room;
  bookingDate: string;
  setBookingDate: (d: string) => void;
  minDateString: string;
  selectedRoomNo: string;
  setSelectedRoomNo: (v: string) => void;
  selectedPackage: string;
  setSelectedPackage: (v: string) => void;
  onWhatsAppBooking: () => void;
}) {
  return (
    <div
      className="p-6 md:p-8 flex flex-col justify-between overflow-y-visible md:overflow-y-auto
                 overflow-x-hidden max-h-none md:max-h-[85vh]"
    >
      <div className="space-y-6">
        {/* Nama kamar */}
        <h3 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
          {room.name}
        </h3>

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

        {/* Spesifikasi */}
        <SpecificationsSection room={room} />

        {/* Form booking */}
        <BookingForm
          bookingDate={bookingDate}
          setBookingDate={setBookingDate}
          minDateString={minDateString}
          selectedRoomNo={selectedRoomNo}
          setSelectedRoomNo={setSelectedRoomNo}
          selectedPackage={selectedPackage}
          setSelectedPackage={setSelectedPackage}
        />
      </div>

      {/* Tombol Booking WhatsApp */}
      <div className="pt-6 mt-6 border-t border-gray-100">
        <button
          onClick={onWhatsAppBooking}
          id="submit-booking-wa"
          className="w-full py-3.5 bg-teal-700 text-white rounded-xl font-bold flex items-center
                     justify-center gap-2 transition-all shadow-md shadow-teal-900/10
                     text-xs tracking-wider uppercase cursor-pointer"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Booking Unit via WhatsApp</span>
        </button>
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────

/**
 * Modal detail kamar: galeri foto, spesifikasi lengkap, pilih nomor kamar,
 * pilih paket sewa, pilih tanggal masuk, dan tombol booking via WhatsApp.
 */
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
  const [selectedRoomNo, setSelectedRoomNo]   = useState("Kamar 01");
  const [selectedPackage, setSelectedPackage] = useState("1 Bulan (Rp 750.000)");

  return (
    // Overlay — klik di luar modal untuk menutup
    <div
      id="room-detail-modal"
      className="fixed inset-0 bg-black/60 backdrop-blur-xs z-[100] flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      {/* Panel modal — klik di dalam tidak menutup */}
      <div
        className="bg-white rounded-2xl w-full max-w-4xl shadow-2xl relative overflow-hidden flex flex-col
                   max-h-[90vh] md:max-h-[85vh] animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol tutup — fixed di pojok kanan atas, tidak ikut scroll */}
        <button
          onClick={onClose}
          id="modal-close-btn"
          aria-label="Tutup Modal"
          className="absolute top-4 right-4 z-50 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs
                     shadow-md border flex items-center justify-center text-gray-500 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Kontainer dua kolom — dapat di-scroll sebagai satu kesatuan di mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full overflow-y-auto md:overflow-hidden">
          <GalleryColumn
            room={room}
            modalMainImg={modalMainImg}
            setModalMainImg={setModalMainImg}
          />
          <DetailColumn
            room={room}
            bookingDate={bookingDate}
            setBookingDate={setBookingDate}
            minDateString={minDateString}
            selectedRoomNo={selectedRoomNo}
            setSelectedRoomNo={setSelectedRoomNo}
            selectedPackage={selectedPackage}
            setSelectedPackage={setSelectedPackage}
            onWhatsAppBooking={() => onWhatsAppBooking(room, selectedRoomNo, selectedPackage)}
          />
        </div>
      </div>
    </div>
  );
}
