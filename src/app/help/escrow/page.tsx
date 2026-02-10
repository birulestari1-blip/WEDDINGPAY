"use client";

import React from "react";
import Link from "next/link";

export default function EscrowHelp() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col max-w-[430px] mx-auto bg-white shadow-xl overflow-x-hidden font-plus-jakarta antialiased">
      <div className="sticky top-0 z-10 flex items-center bg-white/95 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-100">
        <button onClick={() => window.history.back()} className="text-[#111318] flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <h2 className="text-[#111318] text-lg font-bold leading-tight tracking-tight flex-1 text-center">Bantuan Escrow</h2>
        <div className="flex w-10 items-center justify-end text-[#111318]">
          <span className="material-symbols-outlined">help</span>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="relative flex w-full flex-1 items-stretch rounded-xl h-12 shadow-sm border border-gray-100 overflow-hidden">
          <div className="text-slate-400 flex bg-slate-50 items-center justify-center pl-4">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </div>
          <input className="flex-1 bg-slate-50 border-none h-full placeholder:text-slate-400 px-4 pl-2 text-base outline-none" placeholder="Cari topik bantuan..." />
        </div>
      </div>

      <div className="px-4 py-2">
        <div className="relative overflow-hidden rounded-2xl bg-wedding-blue/10 p-6 flex flex-col items-center text-center">
          <div className="mb-4 bg-wedding-blue text-white p-3 rounded-full shadow-lg">
            <span className="material-symbols-outlined text-4xl">shield</span>
          </div>
          <h3 className="text-xl font-bold text-wedding-blue mb-1">Keamanan Transaksi 100%</h3>
          <p className="text-sm text-gray-600">WeddingPay melindungi dana Anda hingga hari H tiba dengan sistem semi-escrow.</p>
        </div>
      </div>

      <div className="py-6">
        <h3 className="text-[#111318] tracking-tight text-xl font-bold leading-tight px-4 pb-4">Cara Kerja Semi-Escrow</h3>
        <div className="grid grid-cols-[48px_1fr] gap-x-3 px-6 relative">
          {[
            { icon: "account_balance_wallet", title: "1. Uang Masuk", desc: "Pengantin melakukan pembayaran aman melalui platform WeddingPay.", last: false },
            { icon: "lock", title: "2. Dana Ditahan", desc: "Dana disimpan sementara di payment gateway resmi kami yang terpercaya.", last: false },
            { icon: "diversity_3", title: "3. Vendor Bekerja", desc: "Vendor mulai mempersiapkan jasa/produk sesuai kontrak yang disepakati.", last: false },
            { icon: "verified", title: "4. Dana Cair", desc: "Setelah konfirmasi penyelesaian dari pengantin, dana dirilis ke vendor.", last: true }
          ].map((step, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center gap-1">
                <div className={`flex size-10 items-center justify-center rounded-full ${step.last ? 'bg-wedding-blue text-white shadow-lg shadow-blue-500/40' : 'bg-wedding-blue/20 text-wedding-blue border-2 border-wedding-blue/10'}`}>
                  <span className="material-symbols-outlined">{step.icon}</span>
                </div>
                {!step.last && <div className="w-[2px] bg-wedding-blue/20 h-full grow"></div>}
              </div>
              <div className={`flex flex-1 flex-col ${step.last ? 'pt-1' : 'pb-8 pt-1'}`}>
                <p className="text-[#111318] text-base font-semibold leading-normal">{step.title}</p>
                <p className="text-slate-500 text-sm font-normal leading-normal">{step.desc}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="px-4 py-6 bg-gray-50">
        <h3 className="text-[#111318] tracking-tight text-xl font-bold leading-tight mb-4">Pertanyaan Populer</h3>
        <div className="space-y-3">
          {["Kapan dana cair ke vendor?", "Bagaimana jika vendor batal?", "Apa itu biaya proteksi escrow?", "Metode pembayaran yang tersedia?"].map((q, i) => (
            <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between group cursor-pointer active:bg-gray-50 transition-colors">
              <div className="flex gap-3 items-center">
                <div className="text-wedding-blue bg-wedding-blue/10 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-xl">{['payments', 'cancel', 'info', 'account_balance'][i]}</span>
                </div>
                <p className="text-sm font-medium text-[#111318]">{q}</p>
              </div>
              <span className="material-symbols-outlined text-gray-400 text-sm">chevron_right</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
