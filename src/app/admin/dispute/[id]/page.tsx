"use client";

import React, { use } from "react";
import Link from "next/link";

export default function AdminDisputeMediationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased min-h-screen">
      <div className="relative flex h-screen w-full flex-col overflow-hidden max-w-md mx-auto bg-white dark:bg-slate-900 shadow-2xl">
        <div className="sticky top-0 z-20 flex items-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 py-3">
          <Link href="/admin" className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </Link>
          <div className="flex-1 text-center">
            <h1 className="text-sm font-bold uppercase tracking-wider text-slate-500">Case #WP-9921</h1>
            <p className="text-base font-bold leading-tight">Mediasi Dispute</p>
          </div>
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined text-[#e23653]">gavel</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar pb-32">
          <div className="p-4 bg-red-50 dark:bg-red-900/10 border-b border-red-100 dark:border-red-900/20">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2 py-0.5 rounded bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-[10px] font-bold uppercase">Critical Dispute</span>
              <span className="text-xs text-slate-500 italic">Created 2 days ago</span>
            </div>
            <h2 className="text-lg font-bold">Layanan Katering Tidak Sesuai Menu</h2>
            <div className="mt-2 flex justify-between items-end">
              <div>
                <p className="text-xs text-slate-500">Nilai Transaksi</p>
                <p className="text-lg font-bold text-[#e23653]">Rp 45.000.000</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-500">Status Escrow</p>
                <p className="text-xs font-semibold text-amber-600">Dana Ditangguhkan</p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-slate-400">history</span>
              <h3 className="font-bold text-sm">Kronologi Masalah</h3>
            </div>
            <div className="relative space-y-4 pl-4 border-l-2 border-slate-100 dark:border-slate-800 ml-2">
              <div className="relative">
                <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700 border-4 border-white dark:border-slate-900"></div>
                <p className="text-xs font-bold text-slate-500">12 Okt, 14:20</p>
                <p className="text-sm">Pengantin mengajukan dispute karena menu gubukan kurang dari jumlah porsi yang disepakati.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700 border-4 border-white dark:border-slate-900"></div>
                <p className="text-xs font-bold text-slate-500">12 Okt, 18:45</p>
                <p className="text-sm">Vendor menolak dispute dengan klaim bahwa sisa porsi dibawa pulang oleh keluarga pengantin.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 px-4 py-6 border-y border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#e23653]/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-xs text-[#e23653]">person</span>
                </div>
                <span className="text-xs font-bold">Sisi Pengantin</span>
              </div>
              <div className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <p className="text-[11px] leading-relaxed italic text-slate-600 dark:text-slate-400">"Sate Ayam ludes dalam 30 menit awal, padahal tamu baru 1/4 yang datang. Vendor tidak profesional."</p>
              </div>
            </div>
            <div className="space-y-3 border-l border-slate-200 dark:border-slate-700 pl-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-xs text-blue-600">storefront</span>
                </div>
                <span className="text-xs font-bold">Sisi Vendor</span>
              </div>
              <div className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <p className="text-[11px] leading-relaxed italic text-slate-600 dark:text-slate-400">"Terdapat dokumentasi piring kotor yang jauh melebihi jumlah porsi. Pihak keluarga minta tambah porsi mendadak."</p>
              </div>
            </div>
          </div>

          <div className="m-4">
            <button className="w-full flex items-center justify-between p-4 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-500">chat_paste_go</span>
                <div className="text-left">
                  <p className="text-sm font-bold">Riwayat Chat Transaksi</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-tight">42 Pesan • 3 Lampiran</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-400">open_in_new</span>
            </button>
          </div>

          <div className="px-4 py-2">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Ruang Mediasi (Aktif)</h3>
            <div className="space-y-4">
              <div className="flex flex-col items-start max-w-[85%]">
                <p className="text-[10px] font-bold text-[#e23653] mb-1 ml-2">Pengantin (Siska)</p>
                <div className="bg-[#e23653]/10 dark:bg-[#e23653]/20 p-3 rounded-2xl rounded-tl-none border border-[#e23653]/20">
                  <p className="text-sm">Saya minta refund 30% karena porsi sate tidak ada yang makan saking cepatnya habis.</p>
                </div>
              </div>
              <div className="flex flex-col items-end ml-auto max-w-[85%]">
                <p className="text-[10px] font-bold text-blue-600 mb-1 mr-2 text-right">Vendor (Catering Pro)</p>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-2xl rounded-tr-none border border-blue-100 dark:border-blue-800 text-right">
                  <p className="text-sm">Kami tidak bisa refund. Kami ada bukti foto stock opname sebelum dan sesudah acara.</p>
                </div>
              </div>
              <div className="flex justify-center">
                <p className="text-[10px] bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-slate-500">Mediator bergabung dalam percakapan</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4 pb-8 space-y-3 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
          <div className="flex gap-2 mb-2">
            <div className="flex-1 relative">
              <input className="w-full pl-4 pr-10 py-2.5 bg-slate-100 dark:bg-slate-800 border-none rounded-full text-sm focus:ring-2 focus:ring-[#e23653]/50 outline-none transition-all" placeholder="Tulis instruksi mediasi..." type="text"/>
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#e23653]">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 py-3.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl text-sm border border-slate-200 dark:border-slate-700 active:scale-95 transition-all">
              <span className="material-symbols-outlined text-lg">replay</span>
              Refund Penuh
            </button>
            <button className="flex items-center justify-center gap-2 py-3.5 bg-[#e23653] text-white font-bold rounded-xl text-sm shadow-lg shadow-[#e23653]/20 active:scale-95 transition-all">
              <span className="material-symbols-outlined text-lg">check_circle</span>
              Rilis Dana
            </button>
          </div>
          <button className="w-full flex items-center justify-center gap-2 py-3 text-[#e23653] font-bold text-xs uppercase tracking-widest border border-dashed border-[#e23653]/30 rounded-xl active:scale-[0.98] transition-all">
            <span className="material-symbols-outlined text-base">balance</span>
            Buat Putusan Split Refund (Custom)
          </button>
        </div>
      </div>
    </div>
  );
}
