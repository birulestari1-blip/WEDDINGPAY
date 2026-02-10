"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function BudgetPage() {
  const [remainingBudget, setRemainingBudget] = useState(12500000);
  const totalBudget = 120000000;
  const usedBudget = totalBudget - remainingBudget;
  const usedPercentage = (usedBudget / totalBudget) * 100;

  return (
    <div className="bg-background-light dark:bg-background-dark font-manrope text-[#111318] transition-colors duration-200 min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <Link href="/" className="text-[#111318] dark:text-white p-2 -ml-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
            <span className="material-symbols-outlined block">arrow_back</span>
          </Link>
          <h1 className="text-[#111318] dark:text-white text-base font-bold leading-tight tracking-tight flex-1 ml-2">
            Simulasi Budget
          </h1>
          <button className="text-wedding-rose p-2 -mr-2 hover:bg-wedding-rose/10 rounded-full transition-colors">
            <span className="material-symbols-outlined block">info</span>
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto pb-40">
        <div className="p-4">
          <div className="relative overflow-hidden flex flex-col items-stretch justify-start rounded-2xl shadow-xl bg-gradient-to-br from-wedding-blue to-blue-800 p-6 text-white">
            <div className="absolute top-0 right-0 -mr-6 -mt-6 opacity-10">
              <span className="material-symbols-outlined text-[140px]">
                query_stats
              </span>
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
                  <span className="material-symbols-outlined text-sm block">
                    account_balance_wallet
                  </span>
                </div>
                <p className="text-white/80 text-[10px] font-bold tracking-widest uppercase">
                  Budget Real-time
                </p>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-white/70 text-xs mb-1">Sisa Anggaran</p>
                  <h2 className="text-3xl font-extrabold tracking-tight mb-4">
                    Rp {remainingBudget.toLocaleString("id-ID")}
                  </h2>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-white/60">Terpakai</span>
                      <span className="font-bold">
                        Rp {usedBudget.toLocaleString("id-ID")}
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-pink-200 rounded-full shadow-[0_0_8px_rgba(228,180,180,0.6)]"
                        style={{ width: `${usedPercentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-[10px] pt-1">
                      <span className="text-white/50">
                        Total Budget: Rp {totalBudget.toLocaleString("id-ID")}
                      </span>
                      <span className="text-pink-200 font-bold">
                        {usedPercentage.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative flex-none w-24 h-24 flex items-center justify-center">
                  <svg className="w-full h-full">
                    <circle
                      className="text-white/10"
                      cx="48"
                      cy="48"
                      fill="transparent"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                    ></circle>
                    <circle
                      className="text-pink-200"
                      cx="48"
                      cy="48"
                      fill="transparent"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 * (1 - usedPercentage / 100)}
                      strokeLinecap="round"
                      style={{
                        transition: "stroke-dashoffset 0.35s",
                        transform: "rotate(-90deg)",
                        transformOrigin: "50% 50%",
                      }}
                    ></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[10px] font-bold">SISA</span>
                    <span className="text-xs font-black">
                      {Math.max(0, 100 - usedPercentage).toFixed(0)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 mt-2 space-y-6">
          <section>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-wedding-rose">
                  restaurant
                </span>
                <h3 className="font-bold text-gray-800 dark:text-white">
                  Catering
                </h3>
              </div>
              <span className="text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-500 px-2 py-0.5 rounded-full font-bold">
                WAJIB
              </span>
            </div>
            <div className="space-y-3">
              <label className="relative flex items-center p-4 rounded-xl border-2 border-wedding-blue bg-blue-50/50 dark:bg-wedding-blue/5 cursor-pointer transition-all">
                <input
                  defaultChecked
                  className="hidden peer"
                  name="catering"
                  type="radio"
                />
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-sm text-gray-900 dark:text-white">
                      Larasati Catering
                    </span>
                    <span
                      className="material-symbols-outlined text-[14px] text-wedding-navy"
                      title="Proteksi Escrow"
                    >
                      verified_user
                    </span>
                  </div>
                  <p className="text-wedding-blue font-extrabold text-sm">
                    Rp 45.000.000
                  </p>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-wedding-blue flex items-center justify-center">
                  <div className="w-3 h-3 bg-wedding-blue rounded-full"></div>
                </div>
              </label>
              <label className="relative flex items-center p-4 rounded-xl border-2 border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 cursor-pointer hover:border-wedding-rose/30 transition-all">
                <input className="hidden" name="catering" type="radio" />
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-sm text-gray-900 dark:text-white">
                      Mawar Melati Food
                    </span>
                    <span
                      className="material-symbols-outlined text-[14px] text-wedding-navy"
                      title="Proteksi Escrow"
                    >
                      verified_user
                    </span>
                  </div>
                  <p className="text-gray-500 font-bold text-sm">
                    Rp 38.500.000
                  </p>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-gray-200 dark:border-gray-700"></div>
              </label>
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-wedding-rose">
                  filter_vintage
                </span>
                <h3 className="font-bold text-gray-800 dark:text-white">
                  Dekorasi
                </h3>
              </div>
            </div>
            <div className="space-y-3">
              <label className="relative flex items-center p-4 rounded-xl border-2 border-wedding-blue bg-blue-50/50 dark:bg-wedding-blue/5 cursor-pointer transition-all">
                <input
                  defaultChecked
                  className="hidden peer"
                  name="decor"
                  type="radio"
                />
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-sm text-gray-900 dark:text-white">
                      Bloom & Bliss Decor
                    </span>
                    <span
                      className="material-symbols-outlined text-[14px] text-wedding-navy"
                      title="Proteksi Escrow"
                    >
                      verified_user
                    </span>
                  </div>
                  <p className="text-wedding-blue font-extrabold text-sm">
                    Rp 25.000.000
                  </p>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-wedding-blue flex items-center justify-center">
                  <div className="w-3 h-3 bg-wedding-blue rounded-full"></div>
                </div>
              </label>
            </div>
          </section>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 rounded-t-3xl shadow-[0_-10px_25px_rgba(0,0,0,0.05)] max-w-md mx-auto">
          <div className="w-full flex justify-center pt-3 pb-1">
            <div className="h-1 w-12 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          </div>
          <div className="p-5 pt-2">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                  Total Alokasi (3 Vendor)
                </p>
                <p className="text-xl font-black text-wedding-blue">
                  Rp 107.500.000
                </p>
              </div>
              <button className="bg-wedding-rose text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-wedding-rose/20 active:scale-95 transition-transform flex items-center gap-2">
                Simpan Simulasi
                <span className="material-symbols-outlined text-sm">
                  bookmark
                </span>
              </button>
            </div>
            <div className="flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-gray-800 rounded-xl mb-2">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 overflow-hidden"
                    ></div>
                  ))}
                </div>
                <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                  Rincian Belanja
                </span>
              </div>
              <span className="material-symbols-outlined text-gray-400">
                expand_less
              </span>
            </div>
          </div>
          <nav className="bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 px-4 py-3 pb-8">
            <div className="flex items-center justify-around">
              <Link href="/" className="flex flex-col items-center text-gray-400 dark:text-gray-500 hover:text-wedding-blue transition-colors cursor-pointer">
                <span className="material-symbols-outlined">home</span>
                <span className="text-[10px] mt-1 font-medium">Beranda</span>
              </Link>
              <Link href="/vendors/categories" className="flex flex-col items-center text-gray-400 dark:text-gray-500 hover:text-wedding-blue transition-colors cursor-pointer">
                <span className="material-symbols-outlined">explore</span>
                <span className="text-[10px] mt-1 font-medium">Vendor</span>
              </Link>
              <div className="flex flex-col items-center text-wedding-blue cursor-pointer">
                <span className="material-symbols-outlined fill-1">
                  account_balance_wallet
                </span>
                <span className="text-[10px] mt-1 font-bold">Simulasi</span>
              </div>
              <div className="flex flex-col items-center text-gray-400 dark:text-gray-500 hover:text-wedding-blue transition-colors cursor-pointer">
                <span className="material-symbols-outlined">event_note</span>
                <span className="text-[10px] mt-1 font-medium">Agenda</span>
              </div>
              <div className="flex flex-col items-center text-gray-400 dark:text-gray-500 hover:text-wedding-blue transition-colors cursor-pointer">
                <span className="material-symbols-outlined">person</span>
                <span className="text-[10px] mt-1 font-medium">Profil</span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
