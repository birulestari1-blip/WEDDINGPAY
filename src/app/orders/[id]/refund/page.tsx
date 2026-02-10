"use client";

import React, { use } from "react";
import Link from "next/link";

export default function RefundRequestPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <div className="bg-background-light dark:bg-background-dark font-manrope text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="relative mx-auto max-w-[430px] min-h-screen bg-white dark:bg-slate-950 shadow-2xl flex flex-col">
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md px-4 py-4 flex items-center border-b border-slate-100 dark:border-slate-800">
          <Link href="/orders" className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">arrow_back_ios_new</span>
          </Link>
          <h1 className="text-base font-bold flex-1 text-center pr-8">Pengajuan Refund</h1>
        </header>

        <main className="flex-1 overflow-y-auto pb-32">
          <section className="p-4">
            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-4 border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center border border-slate-100 dark:border-slate-700">
                  <span className="material-symbols-outlined text-blue-600">restaurant</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Detail Pesanan</p>
                  <h2 className="text-base font-bold">Catering Berkah</h2>
                  <p className="text-xs text-slate-500">ID Pesanan: WP-7729102</p>
                </div>
              </div>
              <div className="pt-3 border-t border-dashed border-slate-200 dark:border-slate-700">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Dana Terproteksi Escrow</span>
                  <span className="text-lg font-extrabold text-slate-900 dark:text-white">Rp 10.000.000</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">shield</span>
                  Dana ini aman tertahan di sistem WeddingPay
                </p>
              </div>
            </div>
          </section>

          <section className="px-4 space-y-6">
            <div>
              <label className="block text-sm font-bold mb-3 text-slate-700 dark:text-slate-300">Alasan Pengembalian</label>
              <div className="space-y-2">
                {[
                  "Vendor Batal Sepihak",
                  "Hasil Tidak Sesuai Perjanjian",
                  "Penundaan Acara (Force Majeure)"
                ].map((reason, i) => (
                  <label key={i} className="flex items-center p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 cursor-pointer hover:border-blue-600/50 transition-colors">
                    <input defaultChecked={i === 0} className="w-5 h-5 text-blue-600 border-slate-300 focus:ring-blue-600" name="reason" type="radio"/>
                    <span className="ml-3 text-sm font-medium">{reason}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-slate-300">Penjelasan Tambahan</label>
              <textarea className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:ring-blue-600 focus:border-blue-600 transition-all h-32 resize-none" placeholder="Ceritakan lebih detail mengenai masalah yang terjadi..."></textarea>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-slate-300">Bukti Pendukung</label>
              <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-slate-50/50 dark:bg-slate-900/50">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm mb-3 text-slate-400">
                  <span className="material-symbols-outlined text-[28px]">cloud_upload</span>
                </div>
                <p className="text-sm font-semibold">Unggah Foto atau Dokumen</p>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">Screenshot percakapan, kontrak, atau<br/>bukti pembatalan lainnya.</p>
                <button className="mt-4 px-6 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold shadow-sm active:scale-95 transition-transform">
                  Pilih File
                </button>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 flex gap-3">
              <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 shrink-0">info</span>
              <div className="space-y-1">
                <p className="text-xs font-bold text-blue-800 dark:text-blue-300 leading-tight">Proses Verifikasi Admin</p>
                <p className="text-[11px] text-blue-700 dark:text-blue-400 leading-relaxed">Admin WeddingPay akan memverifikasi pengajuan Anda dalam 1x24 jam kerja. Anda akan diberitahu jika memerlukan informasi tambahan.</p>
              </div>
            </div>
          </section>
        </main>

        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 p-4 pb-8 z-50">
          <div className="flex flex-col gap-3">
            <p className="text-[10px] text-center text-slate-500 italic">Dengan menekan tombol di bawah, Anda menyetujui syarat &amp; ketentuan pengembalian dana.</p>
            <Link href="/orders/1/refund/success">
              <button className="w-full bg-red-600 py-4 rounded-2xl text-white font-extrabold flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 active:scale-[0.98] transition-all">
                <span className="material-symbols-outlined text-[20px]">assignment_return</span>
                Ajukan Refund
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
