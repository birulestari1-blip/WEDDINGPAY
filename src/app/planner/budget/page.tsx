"use client";

import React from "react";
import Link from "next/link";

export default function BudgetSimulationPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111318] transition-colors duration-200 min-h-screen">
      <div className="max-w-md mx-auto bg-white dark:bg-background-dark shadow-2xl flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center p-4 justify-between max-w-md mx-auto">
            <Link href="/" className="text-[#111318] dark:text-white p-2 -ml-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
              <span className="material-symbols-outlined block">arrow_back</span>
            </Link>
            <h1 className="text-[#111318] dark:text-white text-base font-bold leading-tight tracking-tight flex-1 ml-2">Simulasi Budget</h1>
            <button className="text-[#B76E79] p-2 -mr-2 hover:bg-[#B76E79]/10 rounded-full transition-colors">
              <span className="material-symbols-outlined block">info</span>
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto pb-64">
          <div className="p-4">
            <div className="relative overflow-hidden flex flex-col items-stretch justify-start rounded-2xl shadow-xl bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-white">
              <div className="absolute top-0 right-0 -mr-6 -mt-6 opacity-10">
                <span className="material-symbols-outlined text-[140px]">query_stats</span>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
                    <span className="material-symbols-outlined text-sm block">account_balance_wallet</span>
                  </div>
                  <p className="text-white/80 text-[10px] font-bold tracking-widest uppercase">Budget Real-time</p>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-white/70 text-xs mb-1">Sisa Anggaran</p>
                    <h2 className="text-3xl font-extrabold tracking-tight mb-4">Rp 12.500.000</h2>
                    <div className="space-y-2">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-white/60">Terpakai</span>
                        <span className="font-bold">Rp 107.500.000</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-[#E4B4B4] rounded-full shadow-[0_0_8px_rgba(228,180,180,0.6)]" style={{ width: "89%" }}></div>
                      </div>
                      <div className="flex justify-between text-[10px] pt-1">
                        <span className="text-white/50">Total Budget: Rp 120.000.000</span>
                        <span className="text-[#E4B4B4] font-bold">89.5%</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex-none w-24 h-24 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90">
                      <circle className="text-white/10" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeWidth="8"></circle>
                      <circle className="text-[#E4B4B4]" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="26.3" strokeLinecap="round"></circle>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-[10px] font-bold">SISA</span>
                      <span className="text-xs font-black">10%</span>
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
                  <span className="material-symbols-outlined text-[#B76E79]">restaurant</span>
                  <h3 className="font-bold text-gray-800 dark:text-white">Catering</h3>
                </div>
                <span className="text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-500 px-2 py-0.5 rounded-full font-bold">WAJIB</span>
              </div>
              <div className="space-y-3">
                <label className="relative flex items-center p-4 rounded-xl border-2 border-blue-600 bg-blue-50/50 dark:bg-blue-600/5 cursor-pointer transition-all">
                  <input defaultChecked className="hidden peer" name="catering" type="radio"/>
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-sm text-gray-900 dark:text-white">Larasati Catering</span>
                      <span className="material-symbols-outlined text-[14px] text-slate-800" title="Proteksi Escrow">verified_user</span>
                    </div>
                    <p className="text-blue-600 font-extrabold text-sm">Rp 45.000.000</p>
                  </div>
                  <div className="w-6 h-6 rounded-full border-2 border-blue-600 flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                </label>
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#B76E79]">filter_vintage</span>
                  <h3 className="font-bold text-gray-800 dark:text-white">Dekorasi</h3>
                </div>
              </div>
              <div className="space-y-3">
                <label className="relative flex items-center p-4 rounded-xl border-2 border-blue-600 bg-blue-50/50 dark:bg-blue-600/5 cursor-pointer transition-all">
                  <input defaultChecked className="hidden peer" name="decor" type="radio"/>
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-sm text-gray-900 dark:text-white">Bloom &amp; Bliss Decor</span>
                      <span className="material-symbols-outlined text-[14px] text-slate-800" title="Proteksi Escrow">verified_user</span>
                    </div>
                    <p className="text-blue-600 font-extrabold text-sm">Rp 25.000.000</p>
                  </div>
                  <div className="w-6 h-6 rounded-full border-2 border-blue-600 flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
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
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Total Alokasi (3 Vendor)</p>
                  <p className="text-xl font-black text-blue-600">Rp 107.500.000</p>
                </div>
                <button className="bg-[#B76E79] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-[#B76E79]/20 active:scale-95 transition-transform flex items-center gap-2">
                  Simpan Simulasi
                  <span className="material-symbols-outlined text-sm">bookmark</span>
                </button>
              </div>
              <div className="flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-gray-800 rounded-xl mb-2">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 overflow-hidden">
                        <img className="w-full h-full object-cover" src={`https://lh3.googleusercontent.com/aida-public/AB6AXuANPo649Edjx-0XrADrB6LANvGiFx0xljb4xaGDJEUhr16-LjjR7cPPO_AwiN04005Eqd_pTx-qJ1RXJpJAkZ15He0e5Zcg84QxzmKSc2vacPOPGaym7pkbQMtsuw8LGP8KYvMtUL8-AI-piyIvRZL4PpMYXxi1iNlRR037rsSTfQ18HJ7AIa7GRxww_Gb6SxYklhowwa2UvWkBBl9BRHV3udixtZDH-TSPDnNFngJg1EqsmjUeJEliuOIi1BTm--NhhZosEAObNWBq`}/>
                      </div>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">Rincian Belanja</span>
                </div>
                <span className="material-symbols-outlined text-gray-400">expand_less</span>
              </div>
            </div>
            <nav className="bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 px-4 py-3">
              <div className="flex items-center justify-around pb-6">
                {["home", "explore", "account_balance_wallet", "event_note", "person"].map((icon, i) => (
                  <div key={icon} className={`flex flex-col items-center cursor-pointer ${i === 2 ? "text-blue-600" : "text-gray-400"}`}>
                    <span className="material-symbols-outlined">{icon}</span>
                    <span className="text-[10px] mt-1 font-medium">{["Beranda", "Vendor", "Simulasi", "Agenda", "Profil"][i]}</span>
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
