"use client";

import React, { use } from "react";
import Link from "next/link";

export default function RevisionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111318] dark:text-gray-100 font-manrope min-h-screen">
      {/* Top Navigation Bar */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <Link href="/orders" className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
            </Link>
            <h2 className="text-lg font-bold tracking-tight">Revisi Pesanan</h2>
          </div>
          <button className="text-blue-600 font-semibold text-sm">Bantuan</button>
        </div>
      </div>

      <main className="max-w-md mx-auto pb-32">
        {/* Contract Info Card */}
        <div className="p-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-4">
              <div className="bg-blue-600/10 p-3 rounded-lg">
                <span className="material-symbols-outlined text-blue-600">description</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">
                  Kontrak Aktif
                </p>
                <h3 className="text-base font-bold">#WP-99281 - Sakura Catering</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Comparison */}
        <div className="px-4 py-2">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">
            Perbandingan Perubahan
          </h3>
          <div className="space-y-3">
            {/* Change Item 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="p-4 border-b border-gray-50 dark:border-gray-800">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-base">Menu Prasmanan Gold</h4>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                    Update
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex-1">
                    <p className="text-xs text-gray-400 mb-1">Sebelumnya</p>
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border border-dashed border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-semibold">500 Porsi</p>
                      <p className="text-xs text-gray-500">Rp 75.000.000</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center pt-5">
                    <span className="material-symbols-outlined text-gray-300">
                      arrow_forward
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-blue-600 font-medium mb-1">Revisi Baru</p>
                    <div className="bg-blue-600/5 dark:bg-blue-600/10 p-3 rounded-lg border border-blue-600/20">
                      <p className="text-sm font-bold text-blue-600">600 Porsi</p>
                      <p className="text-xs text-blue-600/80">Rp 90.000.000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Change Item 2 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="p-4 border-b border-gray-50 dark:border-gray-800">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-base">
                    Penambahan Stall (Sate Ayam)
                  </h4>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                    Baru
                  </span>
                </div>
                <div className="mt-3 flex justify-between items-center bg-green-50/50 dark:bg-green-900/10 p-3 rounded-lg border border-green-100 dark:border-green-900/20">
                  <div>
                    <p className="text-sm font-semibold">200 Porsi Baru</p>
                    <p className="text-xs text-gray-500">
                      Stall tambahan di area outdoor
                    </p>
                  </div>
                  <p className="text-sm font-bold text-green-600 dark:text-green-400">
                    + Rp 5.000.000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Cost Breakdown */}
        <div className="px-4 py-6">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">
            Rincian Biaya Tambahan
          </h3>
          <div className="space-y-4">
            {[
              { label: "Total Kontrak Awal", value: "Rp 125.000.000" },
              { label: "Selisih Penambahan Porsi", value: "+ Rp 15.000.000", highlight: true },
              { label: "Item Tambahan Baru", value: "+ Rp 5.000.000", highlight: true },
              { label: "Biaya Administrasi (3%)", value: "+ Rp 600.000" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center text-sm">
                <span className="text-gray-600 dark:text-gray-400">{item.label}</span>
                <span className={`font-medium ${item.highlight ? 'text-blue-600' : ''}`}>{item.value}</span>
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <div className="bg-blue-600/5 dark:bg-blue-600/20 rounded-xl p-4 border border-blue-600/10">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-tight">
                      Total Biaya Tambahan
                    </p>
                    <p className="text-2xl font-extrabold text-[#111318] dark:text-white mt-1">
                      Rp 20.600.000
                    </p>
                  </div>
                  <div className="size-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">
                      account_balance_wallet
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
                  Dana ini akan disimpan di <strong>Saldo Escrow WeddingPay</strong>{" "}
                  dan hanya akan dicairkan ke vendor setelah acara selesai sesuai
                  progres termin.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Note */}
        <div className="px-6 py-2 flex gap-3">
          <span className="material-symbols-outlined text-gray-400 text-lg">
            info
          </span>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-normal">
            Dengan menyetujui, Anda menyepakati revisi lampiran kontrak nomor
            #WP-99281-REV1. Perubahan ini bersifat final setelah pembayaran
            dilakukan.
          </p>
        </div>
      </main>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 p-4 pb-8 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="max-w-md mx-auto flex flex-col gap-3">
          <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
            <span>Setujui Perubahan</span>
            <span className="material-symbols-outlined">check_circle</span>
          </button>
          <button className="w-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-bold py-4 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
            <span className="material-symbols-outlined text-blue-600">chat</span>
            <span>Hubungi Vendor</span>
          </button>
        </div>
      </div>
    </div>
  );
}
