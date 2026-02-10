import React from "react";
import Link from "next/link";

export default function VendorCalendar() {
  return (
    <div className="bg-background-light text-slate-900 min-h-screen font-manrope antialiased">
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/vendor/financial" className="flex items-center text-wedding-primary">
            <span className="material-symbols-outlined">arrow_back_ios</span>
            <span className="text-base font-medium">Dashboard</span>
          </Link>
          <h1 className="text-base font-bold tracking-tight">Ketersediaan</h1>
          <button className="text-wedding-primary text-base font-semibold">Bulk Edit</button>
        </div>
      </header>

      <main className="max-w-md mx-auto pb-32">
        <div className="bg-white mx-4 mt-4 rounded-xl shadow-sm overflow-hidden">
          <div className="flex items-center justify-between p-4 text-slate-900">
            <div className="flex flex-col">
              <h2 className="text-lg font-extrabold text-slate-900">Mei 2024</h2>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Jadwal Booking Vendor</p>
            </div>
            <div className="flex gap-1">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 px-2 border-b border-gray-50 pb-2">
            {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((day) => (
              <div key={day} className="text-center text-[10px] font-bold text-gray-400 uppercase">{day}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 p-2 gap-1">
            {[...Array(3)].map((_, i) => (
              <div key={`prev-${i}`} className="h-12 flex items-center justify-center text-gray-300 text-sm">{28 + i}</div>
            ))}
            {[...Array(25)].map((_, i) => {
              const day = i + 1;
              const isBooked = [3, 4].includes(day);
              const isHoliday = day === 7;
              const isSelected = day === 15;

              return (
                <button
                  key={day}
                  className={`h-12 relative flex flex-col items-center justify-center rounded-lg transition-all ${
                    isSelected ? "bg-wedding-primary text-white shadow-lg ring-2 ring-wedding-primary/20 z-10" :
                    isBooked ? "bg-red-50 border border-red-100 text-red-600" :
                    isHoliday ? "bg-gray-100 text-gray-400" :
                    "hover:bg-gray-100 text-sm font-medium"
                  }`}
                >
                  <span className="text-sm font-bold">{day}</span>
                  {isBooked && <div className="absolute bottom-1.5 w-1 h-1 rounded-full bg-red-600"></div>}
                  {isHoliday && <span className="text-[8px] font-bold">LIBUR</span>}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 px-6 py-4 justify-center">
          {[
            { label: "Tersedia", color: "bg-emerald-500" },
            { label: "Dipesan", color: "bg-red-500" },
            { label: "Libur", color: "bg-gray-300" },
            { label: "Terpilih", color: "bg-wedding-primary" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div className={`size-3 rounded-full ${item.color}`}></div>
              <span className="text-[11px] font-bold text-gray-500">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="px-4 mt-2">
          <h3 className="text-sm font-bold px-1 mb-3 text-gray-400 uppercase tracking-widest">Detail 15 Mei 2024</h3>
          <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-3 flex items-start gap-4">
            <div className="p-2 bg-red-100 rounded-lg text-red-600">
              <span className="material-symbols-outlined">event_busy</span>
            </div>
            <div className="flex-1 text-slate-900">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-sm">Booking: Andi & Budi</h4>
                <span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Locked</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Transaction ID: #WP-99281</p>
              <div className="mt-3 flex gap-2">
                <button className="text-xs font-bold text-wedding-primary bg-wedding-primary/5 px-3 py-1.5 rounded-lg">Lihat Kontrak</button>
                <button className="text-xs font-bold text-gray-500 bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-slate-900">Chat Pengantin</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 p-4 z-40">
        <div className="max-w-md mx-auto">
          <button className="w-full bg-wedding-primary hover:bg-wedding-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-wedding-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">save</span>
            Simpan Perubahan Jadwal
          </button>
        </div>
      </div>
    </div>
  );
}
