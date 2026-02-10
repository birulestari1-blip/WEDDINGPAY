"use client";

import React from "react";
import Link from "next/link";
import { VENDOR_STATS } from "@/lib/mock-data";

export default function VendorFinancialDashboardPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-manrope text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="relative mx-auto max-w-[430px] min-h-screen bg-white dark:bg-slate-950 shadow-2xl flex flex-col">
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md px-4 pt-4 pb-2 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-700">
              <span className="material-symbols-outlined text-primary">person</span>
            </div>
            <div>
              <p className="text-[12px] text-slate-500 font-medium leading-none mb-1">Halo, Vendor</p>
              <h1 className="text-sm font-bold leading-none">Lumina Photography</h1>
            </div>
          </div>
          <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400">
            <span className="material-symbols-outlined text-[24px]">notifications</span>
          </button>
        </header>

        <main className="flex-1 overflow-y-auto">
          <section className="p-4">
            <div className="bg-blue-600 rounded-xl p-5 text-white shadow-lg shadow-blue-600/20 mb-4 relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-sm font-medium opacity-80">Total Pendapatan</p>
                <h2 className="text-3xl font-extrabold mt-1 tracking-tight">{VENDOR_STATS.totalRevenue}</h2>
                <div className="flex items-center gap-1 mt-2 text-[12px] bg-white/20 w-fit px-2 py-0.5 rounded-full">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span>
                  <span>+12% bulan ini</span>
                </div>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-10">
                <span className="material-symbols-outlined text-[120px]">account_balance_wallet</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-amber-500 text-[20px]">lock_clock</span>
                  <p className="text-[12px] font-semibold text-slate-500 dark:text-slate-400">Escrow</p>
                </div>
                <p className="text-lg font-bold">{VENDOR_STATS.escrowBalance}</p>
                <p className="text-[10px] text-slate-400 mt-1">Tertahan sistem</p>
              </div>
              <div className="bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-emerald-500 text-[20px]">check_circle</span>
                  <p className="text-[12px] font-semibold text-emerald-500/80">Siap Cair</p>
                </div>
                <p className="text-lg font-bold text-emerald-500">{VENDOR_STATS.readyToWithdraw}</p>
                <p className="text-[10px] text-emerald-500/60 mt-1">Bisa ditarik</p>
              </div>
            </div>

            <Link href="/vendor/withdraw">
              <button className="w-full bg-blue-600 py-3.5 rounded-xl text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 active:scale-[0.98] transition-transform">
                <span className="material-symbols-outlined text-[20px]">payments</span>
                Cairkan Dana Sekarang
              </button>
            </Link>
          </section>

          <section className="px-4 mb-4">
            <h3 className="text-base font-bold mb-3 flex items-center justify-between">
              Transaksi &amp; Milestone
              <span className="text-blue-600 text-xs font-semibold cursor-pointer">Lihat Semua</span>
            </h3>
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {["Semua", "DP Masuk", "In Escrow", "Selesai"].map((tab, i) => (
                <button
                  key={i}
                  className={`px-4 py-2 text-xs font-bold rounded-full flex-shrink-0 transition-colors ${
                    i === 0 ? "bg-blue-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </section>

          <section className="px-4 space-y-4 pb-32">
            {[
              { name: "Andini & Budi", date: "12 Des 2024", amount: "15.000.000", status: "Siap Cair", milestone: "Editing Foto", progress: 85, completed: ["DP Lunas"] },
              { name: "Citra & Dimas", date: "20 Jan 2025", amount: "25.000.000", status: "DP Masuk", milestone: "Pre-wedding", progress: 30, completed: ["DP Lunas"], pending: ["Escrow"] }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl p-4 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-bold text-sm">{item.name}</h4>
                    <p className="text-[10px] text-slate-500">Pernikahan: {item.date}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase ${
                    item.status === "Siap Cair" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"
                  }`}>
                    {item.status}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-2 text-xs">
                  <span className="font-medium text-slate-400">Nilai Kontrak</span>
                  <span className="font-bold">Rp {item.amount}</span>
                </div>
                <div className="space-y-2 mt-4">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="font-semibold text-slate-600 dark:text-slate-300">Milestone: {item.milestone}</span>
                    <span className="text-blue-600 font-bold">{item.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full rounded-full transition-all duration-700" style={{ width: `${item.progress}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </main>

        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-slate-100 dark:border-slate-800 px-6 py-3 flex justify-between items-center z-50">
          {[
            { icon: "grid_view", label: "Home", active: false },
            { icon: "account_balance_wallet", label: "Keuangan", active: true },
            { icon: "add", label: "Add", isFab: true },
            { icon: "calendar_month", label: "Jadwal", active: false },
            { icon: "person", label: "Profil", active: false },
          ].map((item, i) => (
            item.isFab ? (
              <div key={i} className="relative -top-6">
                <button className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/40 active:scale-90 transition-transform">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
            ) : (
              <button key={i} className={`flex flex-col items-center gap-1 ${item.active ? "text-blue-600" : "text-slate-400"}`}>
                <span className={`material-symbols-outlined ${item.active ? "fill-icon" : ""}`}>{item.icon}</span>
                <span className="text-[10px] font-bold">{item.label}</span>
              </button>
            )
          ))}
        </nav>
      </div>
    </div>
  );
}
