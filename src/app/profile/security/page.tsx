"use client";

import React from "react";
import Link from "next/link";

export default function SecurityPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-inter min-h-screen">
      {/* Main Container (Phone Form Factor) */}
      <div className="relative flex min-h-screen w-full flex-col max-w-md mx-auto bg-white dark:bg-background-dark shadow-xl overflow-x-hidden">
        {/* Top App Bar (iOS Style) */}
        <div className="sticky top-0 z-10 flex items-center bg-white dark:bg-background-dark/95 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800">
          <Link
            href="/profile"
            className="text-blue-600 cursor-pointer flex size-10 items-center justify-center"
          >
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">
            Keamanan Akun
          </h2>
        </div>

        <div className="flex flex-col gap-6 p-4">
          {/* Security Score Card */}
          <div className="flex flex-col items-stretch justify-start rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden">
            <div className="w-full bg-gradient-to-br from-blue-600 to-blue-800 aspect-[21/9] flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
              <div className="flex flex-col items-center text-white">
                <span className="material-symbols-outlined text-5xl mb-1">
                  verified_user
                </span>
                <span className="text-white/80 text-xs font-medium uppercase tracking-wider">
                  Tingkat Keamanan
                </span>
              </div>
            </div>
            <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 px-4">
              <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal leading-normal">
                Status Perlindungan
              </p>
              <p className="text-[#111318] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
                Skor Keamanan: 92%
              </p>
              <div className="flex items-center gap-3 justify-between mt-1">
                <p className="text-green-600 dark:text-green-400 text-base font-semibold leading-normal flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    check_circle
                  </span>
                  Sangat Aman
                </p>
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-blue-600 text-white text-sm font-medium leading-normal">
                  <span className="truncate">Tips</span>
                </button>
              </div>
            </div>
          </div>

          {/* Settings Group */}
          <div className="flex flex-col gap-1">
            <h3 className="text-[#111318] dark:text-white text-sm font-bold uppercase tracking-wider px-1 pb-2">
              Pengaturan Akses
            </h3>
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
              {/* Ubah PIN */}
              <Link href="/profile/security/recover-pin" className="flex items-center gap-4 px-4 min-h-16 justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="text-blue-600 flex items-center justify-center rounded-lg bg-blue-600/10 shrink-0 size-10">
                    <span className="material-symbols-outlined">lock_reset</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[#111318] dark:text-white text-base font-semibold leading-tight">
                      Ubah PIN 6-Digit
                    </p>
                    <p className="text-[#616f89] dark:text-gray-400 text-xs">
                      Diperlukan untuk konfirmasi pembayaran
                    </p>
                  </div>
                </div>
                <div className="shrink-0 text-gray-400">
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </div>
              </Link>
              <div className="h-[1px] bg-gray-100 dark:bg-gray-800 mx-4 ml-14"></div>
              {/* Login Biometrik */}
              <div className="flex items-center gap-4 px-4 min-h-16 justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-blue-600 flex items-center justify-center rounded-lg bg-blue-600/10 shrink-0 size-10">
                    <span className="material-symbols-outlined">
                      fingerprint
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[#111318] dark:text-white text-base font-semibold leading-tight">
                      Login Biometrik
                    </p>
                    <p className="text-[#616f89] dark:text-gray-400 text-xs">
                      Gunakan Fingerprint atau Face ID
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      defaultChecked
                      className="sr-only peer"
                      type="checkbox"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Login Activity */}
          <div className="flex flex-col gap-1 mb-20">
            <div className="flex justify-between items-center px-1 pb-2">
              <h3 className="text-[#111318] dark:text-white text-sm font-bold uppercase tracking-wider">
                Aktivitas Login
              </h3>
              <button className="text-blue-600 text-xs font-semibold">
                Lihat Semua
              </button>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 divide-y divide-gray-100 dark:divide-gray-800">
              {/* Activity 1 */}
              <div className="flex items-center gap-4 p-4">
                <div className="text-gray-500 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 shrink-0 size-10">
                  <span className="material-symbols-outlined text-xl">
                    smartphone
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-[#111318] dark:text-white text-sm font-bold">
                    iPhone 15 Pro - Jakarta
                  </p>
                  <p className="text-[#616f89] dark:text-gray-400 text-xs">
                    Aktif Sekarang • Sesi ini
                  </p>
                </div>
                <div className="text-green-500 flex items-center">
                  <span className="material-symbols-outlined text-sm">
                    fiber_manual_record
                  </span>
                </div>
              </div>
              {/* Activity 2 */}
              <div className="flex items-center gap-4 p-4">
                <div className="text-gray-500 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 shrink-0 size-10">
                  <span className="material-symbols-outlined text-xl">
                    laptop
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-[#111318] dark:text-white text-sm font-bold">
                    MacBook Pro - Bandung
                  </p>
                  <p className="text-[#616f89] dark:text-gray-400 text-xs">
                    Kemarin, 14:20 WIB
                  </p>
                </div>
                <div className="text-gray-300">
                  <span className="material-symbols-outlined">more_vert</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Bottom Button */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md p-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">security</span>
            Simpan Perubahan
          </button>
          {/* iOS Home Indicator Spacing */}
          <div className="h-4"></div>
        </div>

        {/* Escrow Protection Badge */}
        <div className="px-6 py-4 flex flex-col items-center gap-2 mb-28">
          <div className="flex items-center gap-2 text-gray-400">
            <span className="material-symbols-outlined text-sm">
              shield_with_heart
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
              WeddingPay Escrow Protection
            </span>
          </div>
          <p className="text-center text-[#616f89] dark:text-gray-500 text-[11px] leading-relaxed">
            Dana Anda dilindungi oleh sistem semi-escrow kami. <br />
            Ubah PIN secara berkala untuk menjaga keamanan transaksi.
          </p>
        </div>
      </div>
    </div>
  );
}
