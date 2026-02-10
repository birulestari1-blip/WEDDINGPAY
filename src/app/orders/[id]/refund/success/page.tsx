"use client";

import React from "react";
import Link from "next/link";

export default function RefundSuccessPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-manrope text-[#111813] dark:text-white antialiased min-h-screen">
      <div className="relative flex h-screen max-w-md mx-auto flex-col bg-white dark:bg-background-dark overflow-x-hidden shadow-2xl">
        <div className="flex items-center bg-white dark:bg-background-dark p-4 justify-between border-b border-gray-100 dark:border-gray-800">
          <Link href="/orders" className="text-[#111813] dark:text-white flex size-10 shrink-0 items-center justify-center cursor-pointer">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </Link>
          <h2 className="text-[#111813] dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Status Refund</h2>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col items-center text-center">
          <div className="relative mb-8 mt-4 flex items-center justify-center">
            <div className="absolute w-40 h-40 bg-emerald-500/10 rounded-full animate-pulse"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-full p-6 shadow-xl border border-emerald-500/20">
              <span className="material-symbols-outlined text-[80px] text-emerald-500" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48" }}>
                verified_user
              </span>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-emerald-500 rounded-full p-2 border-4 border-white dark:border-background-dark shadow-lg text-white">
              <span className="material-symbols-outlined text-xl font-bold">check</span>
            </div>
          </div>

          <h2 className="text-[#111813] dark:text-white text-2xl font-extrabold leading-tight mb-3">
            Refund Berhasil Dikembalikan
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-relaxed px-4 mb-8">
            Dana telah berhasil dikirimkan kembali ke rekening Anda setelah proses verifikasi admin WeddingPay selesai.
          </p>

          <div className="w-full bg-background-light dark:bg-gray-800/50 rounded-xl p-5 mb-8 border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col items-center mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">Jumlah Refund</p>
              <p className="text-emerald-500 text-3xl font-extrabold tracking-tight">Rp 15.000.000</p>
            </div>
            <div className="space-y-4 text-left">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-gray-400 text-lg">account_balance</span>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Metode Pengembalian</p>
                </div>
                <p className="text-[#111813] dark:text-white text-sm font-bold">Transfer Bank BCA</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-gray-400 text-lg">storefront</span>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Nama Vendor</p>
                </div>
                <p className="text-[#111813] dark:text-white text-sm font-bold">Mahkota Decoration</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-gray-400 text-lg">event_available</span>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Status Escrow</p>
                </div>
                <p className="text-emerald-500 text-sm font-bold">Selesai (Refunded)</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 bg-emerald-500/10 p-4 rounded-lg w-full mb-8 text-left">
            <span className="material-symbols-outlined text-emerald-500">info</span>
            <p className="text-[#111813] dark:text-gray-300 text-xs leading-relaxed">
              Sistem semi-escrow WeddingPay memastikan dana Anda aman. Silakan cek mutasi rekening Anda dalam 1x24 jam ke depan.
            </p>
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 space-y-3">
          <Link href="/">
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 mb-3">
              Kembali ke Beranda
            </button>
          </Link>
          <Link href="/vendors">
            <button className="w-full bg-transparent border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500/5 font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[20px]">search</span>
              Cari Vendor Pengganti
            </button>
          </Link>
          <p className="text-center text-xs text-gray-400 dark:text-gray-500 pt-2">
            Punya kendala? <span className="text-emerald-500 font-bold cursor-pointer">Hubungi Bantuan</span>
          </p>
        </div>
      </div>
    </div>
  );
}
