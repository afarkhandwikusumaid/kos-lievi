import React from "react";
import RoomCard from "./RoomCard";
import { Room } from "../data";

interface RoomListProps {
  rooms: Room[];
  onOpenModal: (room: Room) => void;
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function RoomList({ rooms, onOpenModal }: RoomListProps) {
  return (
    <section id="kamar" className="py-20 bg-white border-y border-gray-100 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-teal-700 font-extrabold text-xs tracking-widest uppercase block">
            DAFTAR PILIHAN KAMAR
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Pilih Kamar Kost Anda
          </h2>
          <p className="text-gray-500 text-base font-semibold">
            Terdapat 10 kamar deluxe — semua siap dipesan.
          </p>
        </div>

        {/* Grid Kamar: 2 kolom di mobile, 3 kolom di desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} onOpenModal={onOpenModal} />
          ))}
        </div>

      </div>
    </section>
  );
}
