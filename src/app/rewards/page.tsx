"use client";

import React from "react";
import Link from "next/link";

export default function RewardsPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#1b0e0f] dark:text-white antialiased min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden pb-24">
        <header className="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800">
          <Link href="/" className="text-[#1b0e0f] dark:text-white flex size-12 shrink-0 items-center justify-center cursor-pointer">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          <h2 className="text-[#1b0e0f] dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">WeddingPay Rewards</h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex size-10 items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-sm text-red-600">
              <span className="material-symbols-outlined">notifications</span>
            </button>
          </div>
        </header>

        <div className="p-4 space-y-4">
          <div className="bg-gradient-to-br from-[#f3e7e8] via-[#e7d0d2] to-[#d4b4b8] dark:from-[#4a2a2d] dark:to-[#361a1c] p-6 rounded-xl shadow-lg border border-white/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-[120px] -mr-10 -mt-10">card_giftcard</span>
            </div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-[#b08d91] dark:text-[#e7d0d2] mb-1">Total Saldo</p>
                <h3 className="text-3xl font-extrabold text-[#1b0e0f] dark:text-white">12,500 <span className="text-sm font-semibold opacity-70">pts</span></h3>
              </div>
              <div className="bg-white/50 dark:bg-black/20 backdrop-blur px-3 py-1 rounded-full border border-white/30">
                <p className="text-[10px] font-bold text-red-600 uppercase tracking-tighter">Elite Member</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/40 dark:bg-white/5 p-3 rounded-lg backdrop-blur-sm">
                <p className="text-[10px] text-[#b08d91] dark:text-[#e7d0d2] mb-1">Cashback Akumulasi</p>
                <p className="text-lg font-bold text-[#1b0e0f] dark:text-white">Rp 2.450.000</p>
              </div>
              <div className="bg-white/40 dark:bg-white/5 p-3 rounded-lg backdrop-blur-sm">
                <p className="text-[10px] text-[#b08d91] dark:text-[#e7d0d2] mb-1">Potensi Cashback</p>
                <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">+Rp 500rb</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-2">
          <div className="px-4 flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold tracking-tight">Penawaran Eksklusif</h2>
            <button className="text-red-600 text-sm font-semibold hover:underline">Lihat Semua</button>
          </div>
          <div className="flex overflow-x-auto gap-4 px-4 pb-4 no-scrollbar">
            {[
              { label: "HOT DEAL", title: "Cashback 5% Pelunasan Awal", desc: "Gunakan Escrow untuk pelunasan H-30 vendor", color: "bg-red-600", bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcNSAZ9HH2JpcYLjMs04c8tf2mhOBP7cjIS4hRN8zcjgOvMkhdsF4m5BjUe5j-LbWCnIr31nJmd80oK0KmtEv2dfImh2MVhco8ol4hJ6eWA0q9Lci1hgntLXPIIQmeOffNY6Iv2Q4h-xwhe9ymAKjG4I08voZ4J1ofBxJLq8tfY7F2I9G2sWlRqIE8cPvkZMngrpWa7kupMWQyOi1X0z8yzxiQFWFleD0TNOaaRTYQ9V6w6dS1CHU5uZ248nN1jUxa3CCMj1kGD4mW" },
              { label: "PARTNER", title: "Voucher Diskon Merchant", desc: "Diskon hingga Rp 1jt di vendor pilihan", color: "bg-amber-500", bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgbhZSbQTbLJ1DyEwiKCrSmokOvzvZRnpU43TLmHSt62NCN97_C5F_k-npxUbnSyh9sRr0IFFk7s1gRefEgX_FowzN21gh56EwqmKnL3QubvqhYOQtwSjQ6w8UcJRaRQi6mNpd9OXsb-hHT1qtr-ok_yO6Fg8YzDVEodFQW2OMG0NbkV2lJRxPcfgPZVtPkVA37Xo-X2D2BlaHxXG8JOftQCKmF3mwh9Fzgwxw9CpMlTcO3kjmpGheje41N45fPtlKxddl9b8pxjiG" }
            ].map((offer, i) => (
              <div key={i} className="flex-none w-72 bg-white dark:bg-zinc-900 rounded-xl shadow-md border border-[#e7d0d2]/30 overflow-hidden group cursor-pointer active:scale-[0.98] transition-all">
                <div className="h-32 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${offer.bg}')` }}></div>
                <div className="p-4">
                  <span className={`inline-block ${offer.color}/10 ${offer.color.replace('bg-', 'text-')} text-[10px] font-bold px-2 py-0.5 rounded-full mb-2`}>{offer.label}</span>
                  <h4 className="font-bold text-sm mb-1 line-clamp-1">{offer.title}</h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">{offer.desc}</p>
                  <button className={`w-full ${offer.color} text-white py-2 rounded-lg text-xs font-bold transition-transform active:scale-95 shadow-sm`}>{i === 0 ? 'Ambil Promo' : 'Klaim Voucher'}</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-4 py-4">
          <div className="flex border-b border-[#e7d0d2]/50 mb-6 overflow-x-auto no-scrollbar">
            {["Tukar Hadiah", "Riwayat Poin", "Tantangan"].map((tab, i) => (
              <button key={tab} className={`pb-3 px-4 text-sm font-bold whitespace-nowrap ${i === 0 ? 'border-b-2 border-red-600 text-red-600' : 'text-zinc-400'}`}>
                {tab}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {[
              { title: "Upgrade Kamar Honeymoon", desc: "Berlaku di 50+ Hotel Partner", pts: "8,000", bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_NWYj8J0rzCsO-DwugV_6H44m0fgSMZlJDEoz7Rru3KtWvA660pipi1Ij3yvBMX4_WEHNooHBjDHQ7me77Ao8r1KGn-XCZiasnfTXHzyjm3AUZ2nftPwVel4VVuT3GD6fISwGh9CjaErFd6mo4o7IkACBHGU79lbKkek_K2jZuAczygsL2ddiNnlIjPjDTaSAcK-ddFWfRm-vALcAExbapS4K8VYVaUE_HJ3d4XnyyIys-kXhoz_jRYobfSKzIzaWD5wp5KywKkZx" },
              { title: "Voucher Belanja Rp 500rb", desc: "Furniture & Home Decor", pts: "5,000", bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWekcsF1ME2M6tCdiHpMRUpEkRkne6UcOmDuF7sOOVuHl29vFidnVCRZ6fF4Sb6JmFk3N02jxprbyWiiKyWPBcPH6GL9GSftmLPOUlBqS8l7kftZPlaJupH5JzntKxriQ1zjneXer9t1V2DdAekDGs142PlTv4fUN0D3m9VaPukzrtUL7QyopomQqiahrH8u8t-K9KJ18xrA3HuWgMuRU-OlBxGrY3M_oyoYkdOFf3BcPfzKxbVxeiYiTKaLwipKCYDJ0YAWM7AVVn" }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-center bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-100 dark:border-zinc-800 shadow-sm active:scale-[0.98] transition-all">
                <div className="size-20 bg-zinc-200 dark:bg-zinc-800 rounded-lg overflow-hidden shrink-0 bg-cover bg-center" style={{ backgroundImage: `url('${item.bg}')` }}></div>
                <div className="flex-1">
                  <h5 className="font-bold text-sm">{item.title}</h5>
                  <p className="text-[10px] text-zinc-400">{item.desc}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="material-symbols-outlined text-sm text-amber-500 fill-icon">stars</span>
                    <span className="text-sm font-bold text-amber-500">{item.pts} pts</span>
                  </div>
                </div>
                <button className="size-10 flex items-center justify-center rounded-full bg-red-600/10 text-red-600 shrink-0">
                  <span className="material-symbols-outlined">redeem</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
