"use client";

import React from "react";
import Link from "next/link";

export default function AdminOpsDashboardPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111318] dark:text-gray-100 min-h-screen">
      <div className="flex flex-col min-h-screen max-w-md mx-auto bg-white dark:bg-slate-950 shadow-2xl">
        <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 px-4 py-3 flex items-center justify-between">
          <button className="size-10 flex items-center justify-center text-gray-700 dark:text-gray-300">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h1 className="text-base font-bold tracking-tight uppercase text-[11px] text-gray-500">Admin Ops Dashboard</h1>
          <div className="flex items-center gap-2">
            <button className="size-10 flex items-center justify-center text-gray-700 dark:text-gray-300 relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-950"></span>
            </button>
          </div>
        </header>

        <main className="flex-1 pb-24">
          <section className="px-4 pt-6 pb-2">
            <div className="grid grid-cols-2 gap-3">
              <Link href="/admin/kyc/1" className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm text-left relative overflow-hidden group active:scale-95 transition-all">
                <div className="size-10 bg-purple-50 dark:bg-purple-900/30 text-purple-600 rounded-xl flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <p className="text-[11px] font-bold text-gray-500 uppercase leading-tight">Verifikasi KYC Vendor</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xl font-extrabold">24</span>
                  <span className="text-[10px] bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-1.5 py-0.5 rounded font-bold">Review</span>
                </div>
                <div className="absolute -right-2 -bottom-2 text-purple-100/20 dark:text-purple-900/10">
                  <span className="material-symbols-outlined text-6xl">description</span>
                </div>
              </Link>
              <Link href="/admin/dispute/1" className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm text-left relative overflow-hidden group active:scale-95 transition-all">
                <div className="size-10 bg-red-50 dark:bg-red-900/30 text-red-600 rounded-xl flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined">gavel</span>
                </div>
                <p className="text-[11px] font-bold text-gray-500 uppercase leading-tight">Manajemen Dispute</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xl font-extrabold">12</span>
                  <span className="text-[10px] bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 px-1.5 py-0.5 rounded font-bold">Mediasi</span>
                </div>
                <div className="absolute -right-2 -bottom-2 text-red-100/20 dark:text-red-900/10">
                  <span className="material-symbols-outlined text-6xl">balance</span>
                </div>
              </Link>
            </div>
          </section>

          <section className="py-4 overflow-hidden">
            <div className="px-4 mb-3 flex justify-between items-end">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Financial Performance</h2>
              <span className="text-blue-600 text-[10px] font-bold flex items-center gap-1">
                REAL-TIME <span className="size-1.5 bg-blue-600 rounded-full animate-pulse"></span>
              </span>
            </div>
            <div className="flex gap-3 overflow-x-auto no-scrollbar px-4">
              {[
                { label: "Total GMV", val: "Rp 1.2B", trend: "+15%", color: "text-emerald-500" },
                { label: "Escrow Hold", val: "Rp 450M", trend: "84 Active Trx", color: "text-gray-500" },
                { label: "Net Revenue", val: "Rp 180M", trend: "+8%", color: "text-emerald-500" },
              ].map((item, i) => (
                <div key={i} className="flex-none w-36 bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                  <p className="text-[10px] font-bold text-gray-400 uppercase">{item.label}</p>
                  <p className="text-base font-extrabold mt-1">{item.val}</p>
                  <div className={`text-[10px] font-bold mt-1 flex items-center ${item.color}`}>
                    {item.trend.includes("+") && <span className="material-symbols-outlined text-xs">trending_up</span>} {item.trend}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="px-4 mb-6">
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-bold text-sm">Tren Transaksi (7 Hari)</h3>
                  <p className="text-2xl font-black mt-1">Rp 45.2M <span className="text-xs font-medium text-gray-400">/ hari</span></p>
                </div>
              </div>
              <div className="h-32 w-full relative">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 150">
                  <path d="M0,120 Q50,110 80,40 T160,80 T240,30 T320,90 T400,20 L400,150 L0,150 Z" fill="rgba(17, 82, 212, 0.1)"></path>
                  <path d="M0,120 Q50,110 80,40 T160,80 T240,30 T320,90 T400,20" fill="none" stroke="#1152d4" strokeWidth="3" strokeLinecap="round"></path>
                </svg>
              </div>
            </div>
          </section>

          <section className="px-4 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-extrabold">Antrean Prioritas</h3>
              <button className="text-blue-600 text-xs font-bold hover:underline">Lihat Semua (36)</button>
            </div>
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm relative">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-black text-purple-600 bg-purple-50 dark:bg-purple-900/20 px-2 py-1 rounded uppercase tracking-wider">KYC Review</span>
                  <span className="text-[10px] text-gray-400 font-medium">10 Menit lalu</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-gray-400">business_center</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Royal Decor Jakarta</h4>
                    <p className="text-[10px] text-gray-500">3 Dokumen baru menunggu review</p>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white text-xs font-bold py-2.5 rounded-lg active:scale-[0.98] transition-all shadow-md shadow-blue-600/20">Verifikasi Sekarang</button>
              </div>

              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-black text-red-500 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded uppercase tracking-wider">Mediasi Aktif</span>
                  <span className="text-[10px] text-gray-400 font-medium">32 Menit lalu</span>
                </div>
                <h4 className="font-bold text-sm mb-1">Catering Mulia vs. Klien Anisa</h4>
                <p className="text-xs text-gray-500 mb-4 line-clamp-1">Status: Menunggu respon vendor (Refund Request)</p>
                <div className="flex gap-2">
                  <button className="flex-1 border border-blue-600 text-blue-600 text-xs font-bold py-2.5 rounded-lg active:scale-95 transition-all">Detail Kasus</button>
                  <button className="px-4 bg-blue-600 text-white rounded-lg active:scale-95 transition-all">
                    <span className="material-symbols-outlined text-sm pt-1">chat</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/90 dark:bg-slate-950/90 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 px-6 py-2 flex justify-between items-center pb-8 z-50">
          {[
            { icon: "dashboard", label: "Monitor", active: true },
            { icon: "description", label: "KYC", active: false },
            { icon: "add", label: "Add", isFab: true },
            { icon: "gavel", label: "Dispute", active: false },
            { icon: "settings", label: "Settings", active: false },
          ].map((item, i) => (
            item.isFab ? (
              <div key={i} className="relative -top-4">
                <button className="size-14 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-600/40 flex items-center justify-center active:scale-90 transition-transform">
                  <span className="material-symbols-outlined text-3xl">add</span>
                </button>
              </div>
            ) : (
              <div key={i} className={`flex flex-col items-center gap-1 ${item.active ? "text-blue-600" : "text-gray-400"}`}>
                <span className={`material-symbols-outlined ${item.active ? "fill-icon" : ""}`}>{item.icon}</span>
                <span className="text-[10px] font-bold">{item.label}</span>
              </div>
            )
          ))}
        </nav>
      </div>
    </div>
  );
}
