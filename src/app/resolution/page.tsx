"use client";

import React, { useState } from "react";
import Link from "next/link";

const categories = [
  { id: "no-show", name: "Vendor Tidak Datang", sub: "Vendor tidak hadir di hari H acara.", icon: "person_off" },
  { id: "poor-quality", name: "Hasil Tidak Sesuai", sub: "Kualitas tidak sesuai dengan kontrak.", icon: "report_problem" },
  { id: "delay", name: "Keterlambatan", sub: "Penyelesaian molor dari jadwal.", icon: "schedule_send" },
  { id: "others", name: "Lainnya", sub: "Masalah lainnya terkait transaksi.", icon: "help" },
];

export default function ResolutionCenterPage() {
  const [selectedCategory, setSelectedCategory] = useState("no-show");

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased font-manrope min-h-screen">
      <div className="max-w-[430px] mx-auto min-h-screen bg-white dark:bg-slate-900 relative shadow-2xl flex flex-col">
        {/* Top App Bar */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center px-4 py-3 justify-between">
            <Link href="/" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-white">
              <span className="material-symbols-outlined">arrow_back_ios_new</span>
            </Link>
            <h1 className="text-lg font-bold tracking-tight">Pusat Resolusi</h1>
            <div className="w-10"></div>
          </div>
        </header>

        <main className="flex-1 pb-32">
          {/* Header Section */}
          <section className="px-5 pt-8 pb-6 bg-gradient-to-b from-wedding-blue/5 to-transparent">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-wedding-blue text-sm font-bold">verified_user</span>
              <span className="text-xs font-bold text-wedding-blue uppercase tracking-wider">Escrow Protection Active</span>
            </div>
            <h2 className="text-2xl font-extrabold leading-tight text-slate-900 dark:text-white mb-3">Ada kendala dengan pesanan Anda?</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Dana Anda aman di WeddingPay. Pilih kategori masalah agar kami dapat membantu proses mediasi dengan vendor secara adil.
            </p>
          </section>

          {/* Kategori Masalah */}
          <section className="px-5 mb-8">
            <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">Pilih Kategori Masalah</h3>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative cursor-pointer group p-4 rounded-xl border-2 transition-all flex flex-col h-full ${
                    selectedCategory === cat.id
                      ? "border-wedding-blue bg-wedding-blue/5"
                      : "border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800"
                  }`}
                >
                  <span className={`material-symbols-outlined mb-3 transition-transform group-hover:scale-110 ${
                    selectedCategory === cat.id ? "text-wedding-blue" : "text-slate-400"
                  }`}>
                    {cat.icon}
                  </span>
                  <p className="font-bold text-sm text-slate-800 dark:text-slate-100">{cat.name}</p>
                  <p className="text-[11px] text-slate-500 mt-1 leading-tight">{cat.sub}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Form Details */}
          <section className="px-5 space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">Deskripsi Masalah</label>
              <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 dark:bg-slate-800 focus:ring-1 focus:ring-wedding-blue focus:border-wedding-blue text-sm leading-relaxed outline-none dark:text-white" placeholder="Ceritakan secara detail kronologi kejadian..." rows={4}></textarea>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">Bukti Pendukung</label>
              <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer text-center">
                <div className="w-12 h-12 rounded-full bg-wedding-blue/10 flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-wedding-blue">cloud_upload</span>
                </div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">Unggah Foto atau Dokumen</p>
                <p className="text-xs text-slate-500 mt-1">Chat, Kontrak, atau Foto (Maks 10MB)</p>
              </div>
            </div>

            <Link href="/resolution/refund" className="block">
              <button className="w-full py-4 bg-wedding-blue text-white rounded-xl font-bold shadow-lg shadow-wedding-blue/20 hover:bg-blue-600 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">send</span>
                Ajukan Komplain
              </button>
            </Link>
          </section>

          {/* Mediation Help Section */}
          <section className="mx-5 mt-10 mb-6 p-5 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <span className="material-symbols-outlined text-wedding-blue">support_agent</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Butuh bantuan lebih lanjut?</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">Mediator WeddingPay siap membantu menengahi sengketa Anda secara profesional dan adil.</p>
                <button className="mt-3 flex items-center gap-1.5 text-sm font-bold text-wedding-blue hover:underline transition-all">
                  Hubungi Mediator WeddingPay
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </section>
        </main>

        {/* Fixed Footer Nav */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-6 py-4 flex justify-around items-center z-50 max-w-[430px] mx-auto pb-8">
          <Link href="/" className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-medium">Home</span>
          </Link>
          <Link href="/orders" className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined">receipt_long</span>
            <span className="text-[10px] font-medium">Transaksi</span>
          </Link>
          <div className="flex flex-col items-center gap-1 text-wedding-blue">
            <span className="material-symbols-outlined">help_center</span>
            <span className="text-[10px] font-medium">Bantuan</span>
          </div>
          <button className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-medium">Profil</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
