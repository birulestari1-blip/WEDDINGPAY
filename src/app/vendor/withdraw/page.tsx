"use client";

import React from "react";
import Link from "next/link";

export default function VendorWithdrawalPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-manrope text-gray-900 dark:text-gray-100 min-h-screen flex justify-center">
      <div className="relative w-full max-w-[430px] min-h-screen bg-background-light dark:bg-background-dark shadow-2xl flex flex-col">
        <header className="sticky top-0 z-20 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-4 flex items-center border-b border-gray-200 dark:border-gray-800">
          <Link href="/vendor/financial" className="p-1 -ml-1 text-gray-800 dark:text-white">
            <span className="material-symbols-outlined text-[28px]">chevron_left</span>
          </Link>
          <h1 className="flex-1 text-center text-lg font-bold tracking-tight pr-7 text-gray-800 dark:text-white">Tarik Dana</h1>
        </header>

        <div className="flex-1 overflow-y-auto pb-40">
          <div className="p-4">
            <div className="bg-blue-600 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-gradient-to-br from-white to-transparent"></div>
              <div className="relative z-10 text-center sm:text-left">
                <p className="text-white/80 text-sm font-medium mb-1">Saldo Tersedia</p>
                <h2 className="text-3xl font-extrabold tracking-tight">Rp 15.250.000</h2>
                <div className="mt-4 flex items-center gap-2 bg-white/20 w-fit px-3 py-1 rounded-full mx-auto sm:mx-0">
                  <span className="material-symbols-outlined text-sm">verified_user</span>
                  <span className="text-xs font-semibold">Dana Aman &amp; Terverifikasi</span>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-2 space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ml-1">Nominal Penarikan</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-gray-500 font-bold">Rp</span>
                </div>
                <input className="block w-full pl-12 pr-12 py-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-lg font-bold transition-all outline-none" placeholder="0" type="number" defaultValue="5000000"/>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer">
                  <span className="material-symbols-outlined text-gray-400 group-focus-within:text-blue-600">cancel</span>
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-500 flex items-center gap-1 ml-1">
                <span className="material-symbols-outlined text-[14px]">info</span>
                Min. penarikan Rp 50.000 • Maks. Rp 50.000.000
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3 px-1">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Pilih Rekening Tujuan</label>
                <button className="text-xs font-bold text-blue-600 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">add_circle</span>
                  Tambah Baru
                </button>
              </div>
              <div className="space-y-3">
                <label className="relative flex items-center p-4 bg-white dark:bg-gray-900 border-2 border-blue-600 rounded-xl cursor-pointer shadow-sm transition-all">
                  <input defaultChecked className="hidden" name="bank" type="radio"/>
                  <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-4 shrink-0">
                    <span className="material-symbols-outlined text-blue-600">account_balance</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-800 dark:text-white truncate">BCA • 0823****12</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wide truncate">PT BERKAH WEDDING ORGANIZER</p>
                  </div>
                  <div className="text-blue-600 ml-2">
                    <span className="material-symbols-outlined">check_circle</span>
                  </div>
                </label>

                <label className="relative flex items-center p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl cursor-pointer hover:border-blue-600/50 transition-all opacity-70">
                  <input className="hidden" name="bank" type="radio"/>
                  <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-4 shrink-0">
                    <span className="material-symbols-outlined text-gray-400">account_balance</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-800 dark:text-white truncate">Mandiri • 1310****88</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wide truncate">JOKO SURYANTO</p>
                  </div>
                  <div className="text-gray-300 ml-2">
                    <span className="material-symbols-outlined">radio_button_unchecked</span>
                  </div>
                </label>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-900/50 rounded-xl p-4 space-y-3">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Rincian Penarikan</h3>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Jumlah Tarik</span>
                <span className="font-semibold text-gray-800 dark:text-white">Rp 5.000.000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Biaya Admin</span>
                <span className="font-semibold text-emerald-600">Gratis</span>
              </div>
              <hr className="border-gray-200 dark:border-gray-800"/>
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-gray-800 dark:text-white">Total Diterima</span>
                <span className="text-lg font-extrabold text-blue-600">Rp 5.000.000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-blue-600/20">
            Konfirmasi Penarikan
            <span className="material-symbols-outlined text-[20px]">lock</span>
          </button>
          <p className="text-[10px] text-center text-gray-400 mt-3 px-4">
            Dengan menekan tombol konfirmasi, Anda menyetujui Syarat &amp; Ketentuan WeddingPay mengenai kebijakan penarikan dana vendor.
          </p>
        </div>
      </div>
    </div>
  );
}
