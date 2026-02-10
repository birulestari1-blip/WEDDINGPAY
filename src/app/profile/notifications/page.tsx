"use client";

import React from "react";
import Link from "next/link";

export default function NotificationsPage() {
  const categories = [
    {
      title: "Status Pembayaran",
      desc: "Escrow, DP, & Pelunasan",
      icon: "account_balance_wallet",
      push: true,
      wa: true,
    },
    {
      title: "Pesan Chat Baru",
      desc: "Pesan dari Pengantin/Vendor",
      icon: "chat_bubble",
      push: true,
      wa: false,
    },
    {
      title: "Pengingat Milestone",
      desc: "Jadwal meeting & deadline",
      icon: "calendar_today",
      push: true,
      wa: true,
    },
    {
      title: "Promo Platform",
      desc: "Diskon, deals & berita vendor",
      icon: "sell",
      push: false,
      wa: false,
    },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-plus-jakarta">
      <div className="relative flex h-screen w-full flex-col max-w-[430px] mx-auto bg-white dark:bg-background-dark overflow-hidden shadow-2xl">
        {/* TopAppBar */}
        <header className="flex items-center bg-white dark:bg-background-dark p-4 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-10">
          <Link
            href="/profile"
            className="text-[#111318] dark:text-white flex size-10 shrink-0 items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          <h1 className="text-[#111318] dark:text-white text-lg font-bold leading-tight flex-1 text-center pr-10">
            Pengaturan Notifikasi
          </h1>
        </header>

        <main className="flex-1 overflow-y-auto pb-32">
          {/* Header Text */}
          <div className="px-4 pt-6 pb-2">
            <h2 className="text-[#111318] dark:text-white text-2xl font-bold leading-tight">
              Saluran Komunikasi
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
              Pilih bagaimana Anda ingin menerima pembaruan transaksi dan promosi
              di WeddingPay.
            </p>
          </div>

          {/* Table Header for Channels */}
          <div className="flex items-center px-4 py-4 mt-4 bg-gray-50 dark:bg-gray-900/50 sticky top-0 z-10">
            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Kategori
              </span>
            </div>
            <div className="flex gap-4 sm:gap-8">
              <div className="w-12 text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                  Push
                </span>
              </div>
              <div className="w-12 text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-gold">
                  WA
                </span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-4 py-5 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <div className="bg-blue-600/10 text-blue-600 p-2.5 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined">{cat.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#111318] dark:text-white text-sm font-semibold truncate">
                    {cat.title}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs truncate">
                    {cat.desc}
                  </p>
                </div>
                <div className="flex gap-4 sm:gap-8">
                  {/* Push Toggle */}
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      defaultChecked={cat.push}
                      className="sr-only peer"
                      type="checkbox"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                  {/* WA Toggle */}
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      defaultChecked={cat.wa}
                      className="sr-only peer"
                      type="checkbox"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-rose-gold"></div>
                  </label>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp Note */}
          <div className="m-4 p-4 bg-background-light dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-rose-gold text-lg">
                info
              </span>
              <p className="text-[12px] leading-relaxed text-gray-600 dark:text-gray-400">
                Notifikasi WhatsApp dikirimkan ke nomor terverifikasi:{" "}
                <span className="font-bold text-gray-800 dark:text-gray-200">
                  +62 812-****-5678
                </span>
                . Pastikan nomor Anda aktif untuk menerima update transaksi
                penting.
              </p>
            </div>
          </div>

          {/* System Permissions Check */}
          <div className="px-4 py-2">
            <button className="w-full flex items-center justify-between p-3 bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-800 rounded-lg group hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-gray-400 group-hover:text-blue-600">
                  settings
                </span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Pengaturan Sistem iOS
                </span>
              </div>
              <span className="material-symbols-outlined text-gray-400 text-sm">
                chevron_right
              </span>
            </button>
          </div>
        </main>

        {/* Fixed Bottom Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-gray-100 dark:border-gray-800">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-all">
            Simpan Perubahan
          </button>
          {/* iOS Home Indicator Space */}
          <div className="h-6"></div>
        </div>
      </div>
    </div>
  );
}
