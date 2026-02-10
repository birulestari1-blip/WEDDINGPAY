import React from "react";
import Link from "next/link";
import { VENDORS } from "@/lib/mock-data";

const topCatering = VENDORS.filter(v => v.category === 'catering');
const topVenues = VENDORS.filter(v => v.category === 'venue');
const results = VENDORS.slice(1, 4);

export default function VendorSearchPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111813] dark:text-white antialiased min-h-screen">
      <div className="max-w-md mx-auto bg-white dark:bg-background-dark min-h-screen shadow-2xl flex flex-col">
        {/* Sticky Top Header */}
        <div className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center p-4 pb-2 justify-between">
            <div className="flex items-center gap-3">
              <Link href="/vendors/categories" className="material-symbols-outlined text-[#111813] dark:text-white" style={{ fontSize: "24px" }}>
                arrow_back_ios
              </Link>
              <h1 className="text-xl font-bold leading-tight tracking-tight">Cari Vendor</h1>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <span className="material-symbols-outlined">tune</span>
              </button>
            </div>
          </div>
          {/* Active Search Bar */}
          <div className="px-4 py-2">
            <label className="relative flex items-center w-full h-12">
              <div className="absolute left-4 text-emerald-500">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                className="w-full h-full pl-12 pr-12 rounded-xl border-none bg-gray-50 dark:bg-gray-900 shadow-sm focus:ring-2 focus:ring-emerald-500 text-base"
                placeholder="Catering, Venue, atau Fotografer..."
                type="text"
                defaultValue="Catering Pernikahan"
              />
              <button className="absolute right-4 text-gray-400">
                <span className="material-symbols-outlined">cancel</span>
              </button>
            </label>
          </div>
          {/* Keyword Suggestions (Pills) */}
          <div className="flex gap-2 p-4 pt-2 overflow-x-auto no-scrollbar">
            {["Semua", "Prasmanan", "Honeymoon", "Gedung", "Modern"].map((pill, i) => (
              <button
                key={i}
                className={`flex h-9 shrink-0 items-center justify-center rounded-full px-4 text-sm font-semibold shadow-sm ${
                  i === 0 ? "bg-emerald-500 text-black" : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                }`}
              >
                {pill}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 pb-24">
          {/* Section: Top Catering */}
          <div className="mt-4">
            <div className="flex items-center justify-between px-4 mb-3">
              <h2 className="text-lg font-bold">Top Catering</h2>
              <button className="text-emerald-500 text-sm font-semibold">Lihat Semua</button>
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar px-4">
              {topCatering.map((v) => (
                <div key={v.id} className="min-w-[260px] bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
                  <div className="relative h-40 bg-cover bg-center" style={{ backgroundImage: `url('${v.image}')` }}>
                    <div className="absolute top-2 right-2 bg-emerald-500 px-2 py-1 rounded-lg flex items-center gap-1 shadow-md">
                      <span className="material-symbols-outlined text-black text-[14px] font-bold">verified_user</span>
                      <span className="text-[10px] font-bold text-black uppercase">Escrow</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="flex items-center gap-1 mb-1">
                      <span className="material-symbols-outlined text-yellow-400 text-[16px] fill-current">star</span>
                      <span className="text-xs font-bold">{v.rating}</span>
                      <span className="text-xs text-gray-500">({v.reviews} Review)</span>
                    </div>
                    <h3 className="font-bold text-sm truncate">{v.name}</h3>
                    <p className="text-emerald-500 font-bold text-sm mt-1">{v.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Top Venue */}
          <div className="mt-8">
            <div className="flex items-center justify-between px-4 mb-3">
              <h2 className="text-lg font-bold">Top Venue</h2>
              <button className="text-emerald-500 text-sm font-semibold">Lihat Semua</button>
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar px-4">
              {topVenues.map((v) => (
                <div key={v.id} className="min-w-[260px] bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
                  <div className="relative h-40 bg-cover bg-center" style={{ backgroundImage: `url('${v.image}')` }}>
                    <div className="absolute top-2 right-2 bg-emerald-500 px-2 py-1 rounded-lg flex items-center gap-1 shadow-md">
                      <span className="material-symbols-outlined text-black text-[14px] font-bold">verified_user</span>
                      <span className="text-[10px] font-bold text-black uppercase">Escrow</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="flex items-center gap-1 mb-1">
                      <span className="material-symbols-outlined text-yellow-400 text-[16px] fill-current">star</span>
                      <span className="text-xs font-bold">{v.rating}</span>
                      <span className="text-xs text-gray-500">({v.reviews} Review)</span>
                    </div>
                    <h3 className="font-bold text-sm truncate">{v.name}</h3>
                    <p className="text-emerald-500 font-bold text-sm mt-1">{v.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: General Results */}
          <div className="mt-8 px-4">
            <h2 className="text-lg font-bold mb-4">Hasil Pencarian Lainnya</h2>
            <div className="space-y-4">
              {results.map((v) => (
                <div key={v.id} className="flex gap-4 bg-white dark:bg-gray-900 p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                  <div className="w-24 h-24 rounded-lg bg-cover bg-center shrink-0" style={{ backgroundImage: `url('${v.image}')` }}></div>
                  <div className="flex flex-col justify-between flex-1 py-1">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase font-bold text-gray-400">{v.category}</span>
                        <div className="flex items-center gap-0.5">
                          <span className="material-symbols-outlined text-yellow-400 text-[14px] fill-current">star</span>
                          <span className="text-[10px] font-bold">{v.rating}</span>
                        </div>
                      </div>
                      <h3 className="font-bold text-sm leading-tight">{v.name}</h3>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="material-symbols-outlined text-emerald-500 text-[14px]">verified_user</span>
                        <span className="text-[10px] text-emerald-500 font-bold">Verified Escrow</span>
                      </div>
                    </div>
                    <p className="text-sm font-bold text-emerald-500">{v.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Navigation Bar (iOS style) */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 pb-8 pt-2 max-w-md mx-auto">
          <div className="flex justify-around items-center px-4">
            <Link href="/" className="flex flex-col items-center gap-1 text-gray-400">
              <span className="material-symbols-outlined">home</span>
              <span className="text-[10px] font-medium">Beranda</span>
            </Link>
            <Link href="/vendors/categories" className="flex flex-col items-center gap-1 text-emerald-500">
              <span className="material-symbols-outlined fill-current">search</span>
              <span className="text-[10px] font-bold">Cari</span>
            </Link>
            <div className="relative -top-4">
              <div className="bg-emerald-500 p-4 rounded-full shadow-lg shadow-emerald-500/30 text-black">
                <span className="material-symbols-outlined font-bold">add</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1 text-gray-400">
              <span className="material-symbols-outlined">account_balance_wallet</span>
              <span className="text-[10px] font-medium">Escrow</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-gray-400">
              <span className="material-symbols-outlined">person</span>
              <span className="text-[10px] font-medium">Profil</span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
