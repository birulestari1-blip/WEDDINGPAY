"use client";

import React from "react";
import Link from "next/link";

export default function CostSimulationPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111318] antialiased min-h-screen">
      <div className="relative mx-auto min-h-screen max-w-[430px] bg-white dark:bg-background-dark shadow-2xl flex flex-col">
        <header className="sticky top-0 z-10 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-4 border-b border-gray-100 dark:border-gray-800">
          <Link href="/" className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <span className="material-symbols-outlined text-slate-800 dark:text-white">arrow_back_ios_new</span>
          </Link>
          <h1 className="flex-1 text-center text-lg font-bold text-slate-800 dark:text-white pr-10">Simulasi Biaya &amp; Proteksi</h1>
        </header>

        <main className="flex-1 overflow-y-auto pb-32">
          <section className="px-6 pt-6 pb-2">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-800 dark:text-white">Detail Transaksi</h2>
            <p className="text-sm text-gray-500 mt-1">Hitung estimasi biaya proteksi untuk vendor pernikahan Anda.</p>
          </section>

          <section className="px-6 py-4">
            <label className="block mb-2 text-sm font-semibold text-slate-800 dark:text-gray-300 ml-1">Total Nilai Kontrak</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <span className="text-lg font-bold text-blue-600">Rp</span>
              </div>
              <input className="block w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-blue-600 focus:ring-0 rounded-xl text-xl font-bold text-slate-800 dark:text-white transition-all outline-none" placeholder="0" type="text" defaultValue="50.000.000"/>
            </div>
          </section>

          <section className="px-6 py-4">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-slate-800 dark:text-gray-300 ml-1">Tingkat Proteksi</label>
              <span className="text-[10px] bg-blue-600/10 text-blue-600 px-2 py-1 rounded-full font-bold uppercase tracking-wider">Rekomendasi</span>
            </div>
            <div className="grid grid-cols-2 gap-3 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
              <button className="flex flex-col items-center justify-center py-3 px-4 rounded-lg transition-all text-gray-500 dark:text-gray-400">
                <span className="text-sm font-bold">Proteksi Basic</span>
                <span className="text-[10px] mt-0.5 opacity-70">Keamanan Standar</span>
              </button>
              <button className="flex flex-col items-center justify-center py-3 px-4 rounded-lg bg-white dark:bg-slate-900 text-blue-600 dark:text-white shadow-sm ring-1 ring-black/5 font-bold">
                <span className="text-sm">Proteksi Premium</span>
                <span className="text-[10px] mt-0.5 opacity-70">Keamanan Maksimal</span>
              </button>
            </div>
          </section>

          <section className="px-6 py-4">
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <h3 className="text-sm font-medium opacity-80 mb-4 border-b border-white/10 pb-2">Rincian Estimasi Biaya</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="opacity-70 flex items-center gap-1">
                    Biaya Admin Gateway
                    <span className="material-symbols-outlined text-[14px]">info</span>
                  </span>
                  <span className="font-mono">Rp 5.000</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="opacity-70 flex items-center gap-1">
                    Proteksi Escrow (0.5%)
                    <span className="material-symbols-outlined text-[14px]">verified_user</span>
                  </span>
                  <span className="font-mono">Rp 250.000</span>
                </div>
                <div className="pt-3 mt-1 border-t border-white/20 flex justify-between items-end">
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest opacity-60">Total Pembayaran</p>
                    <p className="text-2xl font-extrabold text-white">Rp 50.255.000</p>
                  </div>
                  <span className="material-symbols-outlined text-white/50 text-3xl">account_balance_wallet</span>
                </div>
              </div>
            </div>
          </section>

          <section className="px-6 py-6 space-y-4">
            <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-4">Manfaat Proteksi Premium</h4>
            {[
              { icon: "currency_exchange", label: "Jaminan Uang Kembali 100%", desc: "Dana aman di escrow hingga vendor menyelesaikan pekerjaan sesuai kontrak.", color: "text-emerald-600", bg: "bg-emerald-100 dark:bg-emerald-900/30" },
              { icon: "gavel", label: "Mediasi Hukum Gratis", desc: "Bantuan penanganan sengketa dengan tim legal profesional tanpa biaya tambahan.", color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/30" },
              { icon: "emergency", label: "Pencarian Vendor Pengganti", desc: "Bantuan pencarian vendor darurat jika terjadi pembatalan sepihak oleh vendor.", color: "text-orange-600", bg: "bg-orange-100 dark:bg-orange-900/30" }
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className={`w-10 h-10 shrink-0 rounded-full ${benefit.bg} flex items-center justify-center ${benefit.color}`}>
                  <span className="material-symbols-outlined">{benefit.icon}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800 dark:text-white">{benefit.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </section>
        </main>

        <footer className="sticky bottom-0 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 p-6 pb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-emerald-500 text-lg">verified</span>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Escrow Secured by WeddingPay</span>
            </div>
            <span className="text-[10px] text-gray-400 font-bold">v2.4.0</span>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
            <span>Lanjutkan Pembayaran</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
