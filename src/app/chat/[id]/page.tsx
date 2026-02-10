"use client";

import React, { use } from "react";
import Link from "next/link";

export default function ChatDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <div className="relative mx-auto flex h-screen max-w-md flex-col bg-white overflow-hidden shadow-2xl font-manrope antialiased">
      <header className="sticky top-0 z-30 border-b border-gray-100 px-4 py-3 bg-white/85 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => window.history.back()} className="text-[#111418] flex items-center justify-center">
              <span className="material-symbols-outlined text-[28px]">chevron_left</span>
            </button>
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-cover bg-center border border-gray-200" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpvQLK-sNThK0XP2jqb7a_cOSBhaQvQaicDV9I5up1YhbiEKm946MrpMbX9ur4KdO3R3rE0e4LZmv0TjF8HzEWoPKn1rMn8uMVePF4sMcKYpHl_45bQHDPORUy3tnvVsc_aPk2lFUSXHDMFehM4yh8fKMqCGBAIMAj0xOSCVxfpO9R30y6NJTgYy0wt_osoBvZhngwovSrRJkmA3rc0-iiogiWtDBeNw81XyukZO0RWOFk9uI3tGICxPtXJrnosWqTAGqMR4E7VPZ1')" }}></div>
                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <h2 className="text-[#111418] text-sm font-bold leading-none">Griya Wedding</h2>
                  <span className="material-symbols-outlined text-[#196ee6] text-[16px] !fill-1">verified</span>
                </div>
                <p className="text-slate-500 text-xs font-medium">Online</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-[#111418] p-2">
              <span className="material-symbols-outlined text-[24px]">call</span>
            </button>
            <button className="text-[#111418] p-2">
              <span className="material-symbols-outlined text-[24px]">more_vert</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto bg-white scroll-smooth pb-24">
        <div className="p-4 bg-slate-50/50">
          <div className="flex flex-col gap-4 rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-[#196ee6] text-[18px]">security</span>
                  <p className="text-[#111418] text-sm font-bold leading-tight">Lanjutkan Pembayaran</p>
                </div>
                <p className="text-slate-500 text-xs font-normal leading-normal">
                  Vendor telah mengirimkan draft kontrak. Silakan bayar DP untuk mengamankan tanggal Anda.
                </p>
                <p className="text-[#196ee6] text-sm font-bold mt-1">Total DP: Rp2.000.000</p>
              </div>
              <div className="h-16 w-16 shrink-0 rounded-lg bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJP5hi5NklKcdzCIPbJUvtif9yH8xQ4fBzMybPImHRpjxWf_FqaqrJIynSpnLqqGvRjkVbVdjaVC5oF5wkDmSv2Tc48qqMm45mWKhfAd0WvthuEvsGUGsMhbR0U3Xv435h-sBBmdIvgEp4TjqyxN9pFGEjv-KMB1gZxmPjb_8umutAJfWrTqY0rQ6j4T0mvQTPjuWmhJZRfpXaHiROaNk7gIF-NkwIk7my4OlRSeHovgMq0mixnBKBhEdnl7mCW5KdDnJ-aI5jxiKw')" }}></div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-[#196ee6] px-4 py-2.5 text-sm font-bold text-white shadow-md active:scale-[0.98] transition-transform">
                <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
                Bayar DP
              </button>
              <button className="flex items-center justify-center rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-bold text-[#111418]">
                Lihat Draft
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 p-4">
          <div className="flex justify-center">
            <span className="rounded-full bg-gray-100 px-3 py-1 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Senin, 24 Mei</span>
          </div>

          <div className="flex items-end gap-2 max-w-[85%] self-start">
            <div className="h-8 w-8 shrink-0 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAFJrBiT-Nh1_PRDdQZJTvkR2r0Q8qWxTIpfNEJwq9YnoJUsILbXBi_m2cjl0e6ovq4qRxnrlAQVATo7B_a77uvLyq4ZIxukLcFZFr-f8FYvzj7N2_nroaO5EX5YlAQj38P5LFCseV9Q1l6g4yNjxlpXsCXLLVyeRCUU_TFnxXH6XFWDSCUwc79GbYqIjox2cJeGZ75Eyf8i47zckPrLF7jVMh7uubxPUFUSHLS3HRY9ms0MEs0_kgD0xQ-mwGR1elHKP5t_OoaVkxm')" }}></div>
            <div className="flex flex-col gap-1">
              <div className="rounded-2xl rounded-bl-none bg-gray-100 p-3 text-[#111418]">
                <p className="text-sm font-medium">Halo Kak! Untuk paket cinematic kami sudah termasuk 2 videografer dan 1 fotografer lead ya.</p>
              </div>
              <span className="text-[10px] text-gray-400 ml-1">10:24</span>
            </div>
          </div>

          <div className="flex items-end gap-2 max-w-[85%] self-end">
            <div className="flex flex-col gap-1 items-end">
              <div className="rounded-2xl rounded-br-none bg-[#196ee6] p-3 text-white shadow-sm">
                <p className="text-sm font-medium">Baik Kak, saya cek dulu ya. Apakah bisa kirim beberapa contoh foto outdoor di lokasi tersebut?</p>
              </div>
              <div className="flex items-center gap-1 mr-1">
                <span className="text-[10px] text-gray-400">10:30</span>
                <span className="material-symbols-outlined text-[14px] text-[#196ee6]">done_all</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="bg-white/85 backdrop-blur-md absolute bottom-0 left-0 w-full border-t border-gray-100 px-4 pb-8 pt-3 z-30">
        <div className="flex items-center gap-3">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500">
            <span className="material-symbols-outlined text-[24px]">add</span>
          </button>
          <div className="relative flex-1">
            <input className="w-full rounded-full border-none bg-gray-100 py-2.5 pl-4 pr-10 text-sm focus:ring-2 focus:ring-[#196ee6]" placeholder="Ketik pesan..." type="text"/>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
              <span className="material-symbols-outlined text-[20px]">mood</span>
            </button>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#196ee6] text-white shadow-lg shadow-blue-500/30 active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-[22px]">send</span>
          </button>
        </div>
      </div>
    </div>
  );
}
