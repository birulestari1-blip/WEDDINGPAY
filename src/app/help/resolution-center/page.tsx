"use client";

import React from "react";
import Link from "next/link";

export default function ResolutionCenterPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased font-display min-h-screen">
      <div className="max-w-[430px] mx-auto min-h-screen bg-white dark:bg-slate-900 relative shadow-2xl flex flex-col">
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center px-4 py-3 justify-between">
            <Link href="/" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined text-slate-700 dark:text-slate-300">arrow_back_ios_new</span>
            </Link>
            <h1 className="text-lg font-bold tracking-tight">Pusat Resolusi</h1>
            <div className="w-10"></div>
          </div>
        </header>

        <main className="flex-1 pb-32">
          <section className="px-5 pt-8 pb-6 bg-gradient-to-b from-blue-600/5 to-transparent">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-blue-600 text-sm font-bold">verified_user</span>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Escrow Protection Active</span>
            </div>
            <h2 className="text-2xl font-extrabold leading-tight text-slate-900 dark:text-white mb-3">Ada kendala dengan pesanan Anda?</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Dana Anda aman di WeddingPay. Pilih kategori masalah agar kami dapat membantu proses mediasi dengan vendor secara adil.
            </p>
          </section>

          <section className="px-5 mb-8">
            <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">Pilih Kategori Masalah</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "person_off", label: "Vendor Tidak Datang", desc: "Vendor tidak hadir di hari H acara." },
                { icon: "report_problem", label: "Hasil Tidak Sesuai", desc: "Kualitas tidak sesuai dengan kontrak." },
                { icon: "schedule_send", label: "Keterlambatan", desc: "Penyelesaian molor dari jadwal." },
                { icon: "help", label: "Lainnya", desc: "Masalah lainnya terkait transaksi." }
              ].map((cat, i) => (
                <label key={i} className="relative cursor-pointer group">
                  <input defaultChecked={i === 0} className="peer sr-only" name="category" type="radio"/>
                  <div className="p-4 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800 transition-all peer-checked:border-blue-600 peer-checked:bg-blue-600/5 h-full flex flex-col">
                    <span className="material-symbols-outlined text-slate-400 peer-checked:text-blue-600 mb-3 group-hover:scale-110 transition-transform">{cat.icon}</span>
                    <p className="font-bold text-sm text-slate-800 dark:text-slate-100 leading-tight">{cat.label}</p>
                    <p className="text-[10px] text-slate-500 mt-1 leading-normal">{cat.desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </section>

          <section className="px-5 space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">Deskripsi Masalah</label>
              <textarea className="w-full px-4 py-3 rounded-xl border-slate-200 dark:border-slate-800 dark:bg-slate-800 focus:ring-blue-600 focus:border-blue-600 text-sm leading-relaxed outline-none transition-all" placeholder="Ceritakan secara detail kronologi kejadian..." rows={4}></textarea>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">Bukti Pendukung</label>
              <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-blue-600">cloud_upload</span>
                </div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">Unggah Foto atau Dokumen</p>
                <p className="text-xs text-slate-500 mt-1 uppercase font-bold">Maks 10MB</p>
              </div>
            </div>
            <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm">send</span>
              Ajukan Komplain
            </button>
          </section>

          <section className="mx-5 mt-10 mb-6 p-5 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <span className="material-symbols-outlined text-blue-600">support_agent</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Butuh bantuan lebih lanjut?</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">Mediator WeddingPay siap membantu menengahi sengketa Anda secara profesional dan adil.</p>
                <button className="mt-3 flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:underline active:opacity-70 transition-all">
                  Hubungi Mediator WeddingPay
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
