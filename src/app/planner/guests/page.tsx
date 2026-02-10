"use client";

import React from "react";
import Link from "next/link";

export default function PlannerGuestsPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased min-h-screen">
      <div className="max-w-md mx-auto min-h-screen flex flex-col shadow-2xl bg-white dark:bg-background-dark overflow-x-hidden">
        <header className="sticky top-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 pt-4 pb-2">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <h1 className="text-lg font-bold">Daftar Tamu &amp; Denah</h1>
            <button className="w-10 h-10 flex items-center justify-center rounded-full text-blue-600 hover:bg-blue-600/10 transition-colors">
              <span className="material-symbols-outlined">person_add</span>
            </button>
          </div>

          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {[
              { label: "Total Tamu", val: "250", unit: "Jiwa", color: "text-slate-500" },
              { label: "Hadir", val: "185", unit: "74%", color: "text-emerald-600" },
              { label: "Pending", val: "45", unit: "18%", color: "text-amber-500" }
            ].map((stat, i) => (
              <div key={i} className="flex-none w-32 bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                <p className={`text-[10px] uppercase tracking-wider font-semibold mb-1 ${stat.color}`}>{stat.label}</p>
                <div className="flex items-end gap-1">
                  <span className="text-xl font-bold">{stat.val}</span>
                  <span className={`text-[10px] mb-1 font-medium ${stat.color}`}>{stat.unit}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex bg-slate-200 dark:bg-slate-800 p-1 rounded-xl">
            <button className="flex-1 py-2 text-sm font-semibold rounded-lg bg-white dark:bg-slate-700 shadow-sm text-blue-600">Daftar Tamu</button>
            <button className="flex-1 py-2 text-sm font-medium text-slate-500 dark:text-slate-400">Denah Duduk</button>
          </div>
        </header>

        <main className="flex-1 px-4 py-4 space-y-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
              <input className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="Cari nama tamu..." type="text"/>
            </div>
            <button className="w-11 h-11 flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-400 active:scale-95 transition-all">
              <span className="material-symbols-outlined">tune</span>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <h2 className="font-bold text-slate-800 dark:text-slate-200">Grup Tamu: VIP</h2>
            <button className="text-blue-600 text-xs font-semibold">Lihat Semua</button>
          </div>

          <div className="space-y-3">
            {[
              { name: "Bpk. Ahmad Subarjo", rel: "Keluarga Mempelai Pria", status: "Hadir", table: "Meja 01", avatar: "CO" },
              { name: "Ibu Siti Aminah", rel: "Keluarga Mempelai Pria", status: "Ragu", table: "Set Meja", avatar: "CT" },
              { name: "Dr. Hendra Wijaya", rel: "Rekan Kerja", status: "Belum RSVP", table: "Ingatkan", avatar: "DX" }
            ].map((guest, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-3 active:scale-[0.98] transition-all">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-slate-100 dark:bg-slate-700 border-2 border-white dark:border-slate-600 flex items-center justify-center font-bold text-slate-400">
                  {guest.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm truncate">{guest.name}</h3>
                  <p className="text-xs text-slate-500">{guest.rel}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                    guest.status === 'Hadir' ? 'bg-emerald-100 text-emerald-600' :
                    guest.status === 'Ragu' ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-500'
                  }`}>{guest.status}</span>
                  <div className={`mt-1 flex items-center justify-end gap-1 ${guest.table === 'Set Meja' ? 'text-blue-600' : 'text-slate-400'}`}>
                    <span className="material-symbols-outlined text-sm">{guest.table === 'Set Meja' ? 'add_circle' : guest.table === 'Ingatkan' ? 'mail' : 'table_restaurant'}</span>
                    <span className="text-[10px] font-bold uppercase">{guest.table}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 pb-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-slate-800 dark:text-slate-200">Denah Meja Terkini</h2>
              <span className="text-xs text-slate-500">12 / 25 Meja Terisi</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border-2 border-blue-600/20 flex flex-col items-center">
                <div className="relative mb-3">
                  <div className="w-16 h-16 rounded-full border-4 border-blue-600 flex items-center justify-center bg-blue-600/5">
                    <span className="material-symbols-outlined text-blue-600 text-3xl">table_bar</span>
                  </div>
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">01</span>
                </div>
                <p className="text-xs font-bold mb-1">Meja VIP Alpha</p>
                <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full mt-2">
                  <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: "80%" }}></div>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold">8 / 10 Kursi</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center opacity-60">
                <div className="relative mb-3">
                  <div className="w-16 h-16 rounded-full border-4 border-slate-300 dark:border-slate-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-slate-400 text-3xl">chair</span>
                  </div>
                  <span className="absolute -top-1 -right-1 bg-slate-400 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">02</span>
                </div>
                <p className="text-xs font-bold mb-1">Meja VIP Beta</p>
                <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full mt-2">
                  <div className="bg-slate-300 h-1.5 rounded-full" style={{ width: "20%" }}></div>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold">2 / 10 Kursi</p>
              </div>
            </div>
          </div>
        </main>

        <div className="fixed bottom-24 right-6 z-30">
          <button className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform active:scale-95">
            <span className="material-symbols-outlined text-3xl">grid_view</span>
          </button>
        </div>

        <nav className="sticky bottom-0 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 px-6 py-3 pb-8">
          <div className="flex justify-between items-center max-w-sm mx-auto">
            {[
              { icon: "home", label: "Home", active: false },
              { icon: "group", label: "Tamu", active: true },
              { icon: "table_chart", label: "Planner", active: false },
              { icon: "analytics", label: "Laporan", active: false },
              { icon: "settings", label: "Setelan", active: false }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col items-center gap-1 ${item.active ? 'text-blue-600' : 'text-slate-400'}`}>
                <span className={`material-symbols-outlined ${item.active ? 'fill-icon' : ''}`}>{item.icon}</span>
                <span className="text-[10px] font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
