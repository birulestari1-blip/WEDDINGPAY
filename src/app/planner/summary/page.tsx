"use client";

import React from "react";
import Link from "next/link";
import { VENDORS } from "@/lib/mock-data";

export default function EventSummaryPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-manrope text-[#111318] dark:text-white min-h-screen">
      <div className="relative mx-auto min-h-screen w-full max-w-[430px] bg-background-light dark:bg-background-dark overflow-x-hidden pb-24 shadow-2xl">
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 justify-between border-b border-gray-100 dark:border-gray-800 flex items-center">
          <button onClick={() => window.history.back()} className="text-[#111318] dark:text-white flex size-10 shrink-0 items-center justify-center cursor-pointer">
            <span className="material-symbols-outlined text-2xl">arrow_back_ios</span>
          </button>
          <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Ringkasan Acara</h2>
          <div className="absolute right-4">
            <button className="flex items-center justify-center size-10 text-[#111318] dark:text-white">
              <span className="material-symbols-outlined">more_horiz</span>
            </button>
          </div>
        </header>

        <div className="p-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <div className="size-24 rounded-full border-4 border-blue-600/10 overflow-hidden bg-cover bg-center shadow-lg" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAR3P6X_qEyXupU-b5WZ-2CeNUO8VzPYXEW2roteR0SDWCk84Wz6vdZ_xPg7-aiahf8pwSl0Kgk-f1IABSlw8u2tMZ7k5ch3itAqsI2LwBNgbgK2Tbl4JJLHfZx408rEZ0vwCf6hAq-T2tL2xUCqCX7eA0_-eH95H8POnJD6Mo7RHYZmtoFqH2XweQjORADhrlTS_4Y-zthfHvPKyDdV-la1roqch7d-02h89w5zDrnS8CdOD5WiAMqZISqIc7w2vP5eZ496HxCuhSB')" }}>
                </div>
                <div className="absolute bottom-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-full border-2 border-white dark:border-gray-900">
                  WP LIVE
                </div>
              </div>
              <h1 className="text-[#111318] dark:text-white text-2xl font-extrabold text-center">Andi & Bunga Wedding</h1>
              <div className="flex items-center gap-2 mt-1 text-blue-600 font-medium text-sm">
                <span className="material-symbols-outlined text-base">calendar_today</span>
                <span>24 Oktober 2024</span>
              </div>
              <div className="flex items-center gap-2 mt-1 text-[#616f89] dark:text-gray-400 text-sm">
                <span className="material-symbols-outlined text-base">location_on</span>
                <span>Bali Grand Ballroom</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-50 dark:border-gray-800">
              <div className="flex justify-between items-end mb-2">
                <span className="text-sm font-semibold text-[#111318] dark:text-white">Kesiapan Keseluruhan</span>
                <span className="text-blue-600 text-sm font-bold">75%</span>
              </div>
              <div className="w-full bg-blue-600/10 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
              </div>
              <p className="text-[11px] text-[#616f89] dark:text-gray-400 mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">info</span>
                12 dari 16 vendor telah menyelesaikan milestone
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 px-4 mb-6">
          <button className="flex-1 flex items-center justify-center gap-2 h-12 bg-white dark:bg-gray-900 text-blue-600 border border-blue-600/20 rounded-xl font-bold text-sm shadow-sm active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-xl">chat_bubble</span>
            <span>Chat Vendor</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 h-12 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-600/20 active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-xl">event_note</span>
            <span>Lihat Rundown</span>
          </button>
        </div>

        <div className="px-4 pb-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#111318] dark:text-white text-lg font-bold tracking-tight">Daftar Vendor</h3>
            <button className="text-blue-600 text-sm font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-lg">add_circle</span>
              Tambah
            </button>
          </div>

          <div className="space-y-4">
            {VENDORS.map((v) => (
              <div key={v.id} className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <div className="size-12 rounded-lg bg-blue-600/5 flex items-center justify-center text-blue-600">
                      <span className="material-symbols-outlined text-2xl">storefront</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#111318] dark:text-white">{v.name}</h4>
                      <p className="text-xs text-[#616f89] dark:text-gray-400">{v.subCategory}</p>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Lunas</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-background-light dark:bg-background-dark p-2 rounded-lg text-center">
                    <p className="text-[10px] text-[#616f89] dark:text-gray-400 uppercase font-bold mb-1">Status Escrow</p>
                    <p className="font-bold text-xs">Selesai Dibayar</p>
                  </div>
                  <div className="bg-background-light dark:bg-background-dark p-2 rounded-lg text-center">
                    <p className="text-[10px] text-[#616f89] dark:text-gray-400 uppercase font-bold mb-1">Kesiapan</p>
                    <p className="font-bold text-xs">100%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 flex justify-around items-center pt-3 pb-6 px-6 z-50">
          <Link href="/home" className="flex flex-col items-center gap-1 cursor-pointer text-gray-400">
            <span className="material-symbols-outlined">grid_view</span>
            <span className="text-[10px] font-medium">Dashboard</span>
          </Link>
          <div className="flex flex-col items-center gap-1 cursor-pointer text-blue-600">
            <span className="material-symbols-outlined font-bold !fill-1">assignment</span>
            <span className="text-[10px] font-bold">Proyek</span>
          </div>
          <div className="flex flex-col items-center gap-1 cursor-pointer text-gray-400">
            <div className="size-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg -mt-8 border-4 border-white dark:border-background-dark">
              <span className="material-symbols-outlined">add</span>
            </div>
            <span className="text-[10px] font-medium">Bayar</span>
          </div>
          <Link href="/chat/1" className="flex flex-col items-center gap-1 cursor-pointer text-gray-400">
            <span className="material-symbols-outlined">chat_bubble</span>
            <span className="text-[10px] font-medium">Pesan</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center gap-1 cursor-pointer text-gray-400">
            <span className="material-symbols-outlined">account_circle</span>
            <span className="text-[10px] font-medium">Profil</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
