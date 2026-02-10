"use client";

import React from "react";
import Link from "next/link";
import { CHECKLIST_ITEMS } from "@/lib/mock-data";

export default function PlannerChecklistPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0d0d1b] dark:text-white transition-colors duration-300 min-h-screen">
      <div className="max-w-md mx-auto min-h-screen flex flex-col relative pb-24 shadow-2xl bg-white dark:bg-background-dark">
        <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
          <Link href="/" className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
            <span className="material-symbols-outlined text-gray-700 dark:text-white">arrow_back_ios</span>
          </Link>
          <h1 className="text-lg font-bold">Checklist Tugas</h1>
          <button className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </header>

        <main className="flex-1">
          <section className="p-4 mb-2">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex justify-between items-end mb-3">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Progres Persiapan</p>
                  <h2 className="text-2xl font-bold text-blue-600">65% <span className="text-sm font-normal text-gray-400">Selesai</span></h2>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400 mb-1">12 dari 18 tugas</p>
                </div>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-800 h-3 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full rounded-full w-[65%] shadow-[0_0_10px_rgba(19,19,236,0.3)]"></div>
              </div>
            </div>
          </section>

          <section className="px-4 mb-6">
            <div className="bg-blue-600/5 dark:bg-blue-600/10 border border-blue-600/20 rounded-xl p-4 flex gap-4 items-start">
              <div className="bg-blue-600 text-white p-2 rounded-lg shrink-0">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-blue-600 mb-1">Saran AI WeddingPay</h3>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  Waktunya fitting baju pengantin minggu ini agar jadwal penjahit tetap aman dan sesuai timeline!
                </p>
                <button className="mt-3 text-xs font-bold text-blue-600 flex items-center gap-1">
                  Lihat Detail <span className="material-symbols-outlined text-xs">chevron_right</span>
                </button>
              </div>
            </div>
          </section>

          <div className="px-4 mb-4">
            <div className="flex border-b border-gray-200 dark:border-gray-800">
              {["Semua", "Penting", "Terlambat"].map((tab, i) => (
                <button key={tab} className={`px-4 py-2 text-sm ${i === 0 ? "font-bold border-b-2 border-blue-600 text-blue-600" : "font-medium text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"}`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6 px-4">
            {Array.from(new Set(CHECKLIST_ITEMS.map(i => i.group))).map(group => (
              <div key={group}>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 px-1">{group}</h3>
                <div className="space-y-3">
                  {CHECKLIST_ITEMS.filter(i => i.group === group).map(item => (
                    <div key={item.id} className={`bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 flex items-start gap-4 ${item.status === 'active' ? 'ring-1 ring-blue-600/20' : ''}`}>
                      <div className="mt-1">
                        <span className={`material-symbols-outlined ${item.status === 'completed' ? 'text-blue-600 fill-1' : 'text-gray-300 dark:text-gray-700'}`}>
                          {item.status === 'completed' ? 'check_circle' : 'radio_button_unchecked'}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className={`font-semibold ${item.status === 'completed' ? 'text-gray-400 line-through' : ''}`}>{item.title}</h4>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                            item.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                            item.status === 'active' ? 'bg-blue-600/10 text-blue-600' : 'bg-gray-100 text-gray-400'
                          }`}>
                            {item.status === 'completed' ? 'Selesai' : item.status === 'active' ? 'Proses' : 'Belum'}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 mt-2">
                          <span className={`flex items-center gap-1 text-xs ${item.date === 'Besok' ? 'text-orange-600 font-bold' : 'text-gray-400'}`}>
                            <span className="material-symbols-outlined text-xs">{item.date === 'Besok' ? 'alarm' : 'calendar_today'}</span> {item.date}
                          </span>
                          {item.vendor && (
                            <span className="flex items-center gap-1 text-xs text-blue-600 font-medium">
                              <span className="material-symbols-outlined text-xs">storefront</span> {item.vendor}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>

        <button className="fixed bottom-24 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-3xl">add</span>
        </button>

        <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 px-6 py-3 flex justify-between items-center max-w-md mx-auto z-40">
          {[
            { icon: "home", label: "Beranda", active: false },
            { icon: "task_alt", label: "Checklist", active: true },
            { icon: "payments", label: "Budget", active: false },
            { icon: "groups", label: "Tamu", active: false },
            { icon: "account_circle", label: "Profil", active: false },
          ].map(item => (
            <div key={item.label} className={`flex flex-col items-center ${item.active ? "text-blue-600" : "text-gray-400"}`}>
              <span className={`material-symbols-outlined ${item.active ? "fill-icon" : ""}`}>{item.icon}</span>
              <span className="text-[10px] mt-1 font-medium">{item.label}</span>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
