import React from "react";
import { Star, Maximize, Bed, ShowerHead, Zap } from "lucide-react";
import { Room } from "../data";

interface RoomCardProps {
  key?: React.Key; // diperlukan oleh @types/react versi lama
  room: Room;
  onOpenModal: (room: Room) => void;
}

// ── Component ─────────────────────────────────────────────────────────────────
// Menampilkan satu kartu kamar dengan foto, spesifikasi singkat, harga, dan
// tombol booking. Semua kamar berstatus "Tersedia" sehingga tombol selalu aktif.
export default function RoomCard({ room, onOpenModal }: RoomCardProps) {
  return (
    <div
      id={`room-card-${room.id}`}
      className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs flex flex-col"
    >
      {/* Foto kamar */}
      <div className="relative aspect-16/11 bg-gray-100 overflow-hidden shrink-0">
        <img
          src={room.images[0]}
          alt={`Foto ${room.name}`}
          className="w-full h-full object-cover transition-transform duration-500"
          loading="lazy"
        />
      </div>

      <div className="p-3 sm:p-6 flex flex-col flex-grow">

        {/* Nama kamar & rating */}
        <div className="flex items-center justify-between gap-2 mb-1.5 sm:mb-2">
          <h3 className="text-sm sm:text-xl font-bold text-gray-900 truncate">{room.name}</h3>
          <div className="flex items-center gap-0.5 text-amber-500 shrink-0">
            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
            <span className="text-[10px] sm:text-xs font-bold text-gray-600">5.0</span>
          </div>
        </div>

        {/* Subtitle singkat */}
        <p className="text-[10px] sm:text-xs text-gray-400 mb-3 sm:mb-4 font-semibold line-clamp-1 sm:line-clamp-2">
          {room.subtitle}
        </p>

        {/* Spesifikasi cepat */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5 sm:gap-y-2.5
                        pt-3 pb-3.5 sm:pt-4 sm:pb-5 border-t border-gray-100
                        text-[10px] sm:text-xs text-gray-500 mb-auto">
          <div className="flex items-center gap-1.5 min-w-0">
            <Maximize className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-teal-700 shrink-0" />
            <span className="truncate">{room.specifications.ukuran}</span>
          </div>
          <div className="flex items-center gap-1.5 min-w-0">
            <Bed className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-teal-700 shrink-0" />
            <span className="truncate">Single Springbed</span>
          </div>
          <div className="flex items-center gap-1.5 min-w-0">
            <ShowerHead className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-teal-700 shrink-0" />
            <span className="truncate">Kipas &amp; KM Dalam</span>
          </div>
          <div className="flex items-center gap-1.5 min-w-0">
            <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-teal-700 shrink-0" />
            <span className="truncate">Free Token Listrik</span>
          </div>
        </div>

        {/* Harga & tombol booking */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3
                        pt-3 sm:pt-4 border-t border-gray-100 mt-auto">
          <div className="shrink-0">
            <div className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">
              Tarif Sewa
            </div>
            <div className="flex items-baseline gap-0.5">
              <span className="text-base sm:text-xl font-black text-teal-700">
                {room.priceFormatted}
              </span>
              <span className="text-[9px] sm:text-xs text-gray-400 font-semibold">/ bln</span>
            </div>
            <div className="text-[9px] text-teal-600 font-bold mt-0.5">
              Harian: Rp 100.000 / hari
            </div>
          </div>

          <button
            onClick={() => onOpenModal(room)}
            id={`btn-book-${room.id}`}
            className="w-full sm:w-auto px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl font-bold
                       text-[10px] sm:text-xs tracking-wider uppercase transition-all
                       flex items-center justify-center gap-1 shrink-0
                       bg-teal-700 text-white shadow-xs cursor-pointer"
          >
            Booking
          </button>
        </div>

      </div>
    </div>
  );
}
