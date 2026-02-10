"use client";

import React from "react";
import Link from "next/link";

const cateringVendors = [
  { id: 1, name: "Larasati Catering", price: "Mulai Rp 15jt", rating: "4.9", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANPo649Edjx-0XrADrB6LANvGiFx0xljb4xaGDJEUhr16-LjjR7cPPO_AwiN04005Eqd_pTx-qJ1RXJpJAkZ15He0e5Zcg84QxzmKSc2vacPOPGaym7pkbQMtsuw8LGP8KYvMtUL8-AI-piyIvRZL4PpMYXxi1iNlRR037rsSTfQ18HJ7AIa7GRxww_Gb6SxYklhowwa2UvWkBBl9BRHV3udixtZDH-TSPDnNFngJg1EqsmjUeJEliuOIi1BTm--NhhZosEAObNWBq" },
  { id: 2, name: "Mawar Melati Food", price: "Mulai Rp 12jt", rating: "4.8", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYj2y6DjCpvXUrYTZx4cSDiMXabACgh_P0HFEQhdk4TjYUTS_nZmnL0VC0YAXf-WM1LgpwXxO6JjvCKZihP-K-oF1Qpsjwzy9zINjSHznCSQ5ppBFVCckWHVNCft1zQhk5E2p8ZIbP8EziNU2-t-_FDqqABc4qviyIEKYsYTmthGasFSx0EMaiPGuwyhKoaAzrUxXrsi1v67TmDTuh1ZUevjysyBz8K3s9IfH63NCJZV8cW5RdmhpQpwhV7ObK_0OH9fv9T7cLtshW" },
];

export default function RecommendationsPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-manrope text-[#111318] transition-colors duration-200 min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <Link href="/vendors" className="text-[#111318] dark:text-white p-2 -ml-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
            <span className="material-symbols-outlined block">arrow_back</span>
          </Link>
          <h1 className="text-[#111318] dark:text-white text-base font-bold leading-tight tracking-tight flex-1 ml-2">
            Rekomendasi Vendor
          </h1>
          <button className="text-blue-600 p-2 -mr-2 hover:bg-blue-600/10 rounded-full transition-colors">
            <span className="material-symbols-outlined block">tune</span>
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto pb-24">
        {/* Budget Tracker Widget */}
        <div className="p-4">
          <div className="relative overflow-hidden flex flex-col items-stretch justify-start rounded-xl shadow-lg bg-blue-600 p-6 text-white">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 opacity-20">
              <span className="material-symbols-outlined text-[160px]">account_balance_wallet</span>
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-sm">savings</span>
                <p className="text-white/80 text-sm font-medium tracking-wide uppercase">Budget Tracker</p>
              </div>
              <h2 className="text-2xl font-bold leading-tight mb-4">Sisa Budget Anda</h2>
              <div className="flex items-end justify-between mb-4">
                <div className="flex flex-col">
                  <p className="text-3xl font-extrabold tracking-tight">Rp 45.000.000</p>
                  <p className="text-white/70 text-sm mt-1">Total: Rp 120.000.000</p>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-medium text-white/90 uppercase tracking-tighter">Terpakai 65%</span>
                  <span className="text-xs font-medium text-white/90 tracking-tighter">Rp 75.000.000</span>
                </div>
                <div className="h-2 w-full bg-white/30 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full" style={{ width: "65%" }}></div>
                </div>
              </div>
              <button className="mt-6 w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 bg-white text-blue-600 text-sm font-bold shadow-sm hover:bg-gray-50 active:scale-95 transition-all">
                <span className="material-symbols-outlined text-sm mr-2">edit</span>
                <span>Atur Ulang Budget</span>
              </button>
            </div>
          </div>
        </div>

        {/* Section 1: Catering */}
        <section className="mt-4">
          <div className="flex items-center justify-between px-4 mb-4">
            <h2 className="text-[#111318] dark:text-white text-xl font-bold">Catering</h2>
            <button className="text-blue-600 text-sm font-bold flex items-center hover:underline">
              Lihat Semua
              <span className="material-symbols-outlined text-sm ml-1">chevron_right</span>
            </button>
          </div>
          <div className="flex overflow-x-auto no-scrollbar px-4 gap-4 pb-4">
            {cateringVendors.map((v) => (
              <div key={v.id} className="flex-none w-64 rounded-xl bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="relative h-36 bg-gray-200">
                  <img alt={v.name} className="w-full h-full object-cover" src={v.image} />
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Best Value</div>
                  <div className="absolute bottom-2 left-2">
                    <div className="bg-[#1e293b] text-white text-[9px] font-bold px-2 py-1 rounded flex items-center shadow-sm">
                      <span className="material-symbols-outlined text-[12px] mr-1">verified_user</span>
                      Proteksi Escrow
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-[#111318] dark:text-white truncate flex-1">{v.name}</h3>
                    <div className="flex items-center text-orange-400">
                      <span className="material-symbols-outlined text-xs fill-1">star</span>
                      <span className="text-xs font-bold ml-1 text-gray-700 dark:text-gray-300">{v.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-green-600 dark:text-green-400 text-[11px] font-semibold mb-2">
                    <span className="material-symbols-outlined text-[14px] mr-1">event_available</span>
                    Tersedia untuk 12 Des 2024
                  </div>
                  <p className="text-blue-600 font-bold text-sm mb-3">{v.price}</p>
                  <div className="flex gap-2">
                    <span className="text-[10px] bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-bold px-2 py-1 rounded border border-green-200 dark:border-green-800/50">Sesuai Budget</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="px-4 py-8">
          <div className="bg-gray-100 dark:bg-gray-800/50 rounded-xl p-6 text-center">
            <span className="material-symbols-outlined text-4xl text-gray-400 mb-2">security</span>
            <h4 className="font-bold text-gray-800 dark:text-white mb-2">Jaminan Keamanan WeddingPay</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Semua vendor pilihan di atas mendukung pembayaran via Escrow untuk menjamin dana Anda aman hingga acara selesai.
            </p>
            <button className="bg-blue-600 text-white font-bold px-6 py-2.5 rounded-lg text-sm active:scale-95 transition-transform">
              Pelajari Proteksi Escrow
            </button>
          </div>
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 pb-8">
        <div className="flex items-center justify-around max-w-md mx-auto py-3 px-4">
          <Link href="/" className="flex flex-col items-center text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors cursor-pointer">
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] mt-1 font-medium">Beranda</span>
          </Link>
          <div className="flex flex-col items-center text-blue-600 cursor-pointer">
            <span className="material-symbols-outlined fill-1">explore</span>
            <span className="text-[10px] mt-1 font-bold">Vendor</span>
          </div>
          <Link href="/budget" className="flex flex-col items-center text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors cursor-pointer">
            <span className="material-symbols-outlined">account_balance_wallet</span>
            <span className="text-[10px] mt-1 font-medium">Budget</span>
          </Link>
          <div className="flex flex-col items-center text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors cursor-pointer">
            <span className="material-symbols-outlined">event_note</span>
            <span className="text-[10px] mt-1 font-medium">Agenda</span>
          </div>
          <Link href="/profile" className="flex flex-col items-center text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors cursor-pointer">
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] mt-1 font-medium">Profil</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
