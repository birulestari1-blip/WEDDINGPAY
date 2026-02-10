import React from "react";
import Link from "next/link";

export default function CreditNotification() {
  return (
    <div className="relative flex h-full min-h-screen w-full max-w-[430px] flex-col bg-white shadow-2xl overflow-x-hidden font-inter antialiased mx-auto">
      <div className="flex items-center bg-white p-4 pb-2 justify-between sticky top-0 z-10 border-b border-gray-100">
        <Link href="/notifications" className="text-[#111814] flex size-10 shrink-0 items-center justify-center cursor-pointer">
          <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
        </Link>
        <h2 className="text-[#111814] text-base font-semibold leading-tight tracking-tight flex-1 text-center">Detail Transaksi</h2>
        <div className="size-10 flex items-center justify-center">
          <span className="material-symbols-outlined text-gray-400">more_horiz</span>
        </div>
      </div>

      <div className="px-6 pt-8 pb-6 flex flex-col items-center">
        <div className="relative w-full max-w-[280px] aspect-square mb-6">
          <div className="absolute inset-0 bg-[#607AFB]/10 rounded-full blur-3xl"></div>
          <div className="relative w-full h-full bg-center bg-no-repeat bg-contain" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4RIqpEzRc0_3L3Nn_m9LGz4LlY4nrDIb5XtdtpxBbmqTpZ8uYko2e8Udw0mEEzUog026jdaN0Yg01U6jW_7W9K2G3vvVmqmhrx3MSg6goKyeMia_ClC_eBb-aBIdAQMEn0A9KOY-tEFDswo44m29ZFAmEm8oo8bGnILW0Nmu8KOt5t1opgIvvz3ZKLKHpW4fb5jJd72ZQ13h7S57Tfn8mWFGpZf_ud9_cVOtpEYpyBrrmoULcDK5HQ7DB6Yhph9LAXErK5Ca5b7Ci')" }}></div>
        </div>
        <h1 className="text-[#111814] tracking-tight text-2xl font-bold leading-tight text-center px-4">
          Dana Telah Masuk ke Saldo!
        </h1>
        <p className="text-gray-500 text-sm text-center mt-2 px-6">
          Pengantin telah menyetujui pelepasan dana. Saldo Anda telah diperbarui secara otomatis.
        </p>
      </div>

      <div className="p-4">
        <div className="flex flex-col items-stretch justify-start rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white border border-gray-100 p-5 gap-6">
          <div className="flex flex-col items-center py-2 border-b border-gray-100 pb-6">
            <p className="text-gray-500 text-xs font-medium uppercase tracking-widest mb-1">Nominal Diterima</p>
            <h2 className="text-[#13ec6d] text-3xl font-bold leading-tight">Rp 15.000.000</h2>
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#607AFB]/10 text-[#607AFB] text-xs font-bold uppercase tracking-wide">
              <span className="material-symbols-outlined text-xs">check_circle</span>
              Siap Dicairkan
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-500 text-sm">Nama Pengantin</p>
              <p className="text-[#111814] text-sm font-semibold">Andi & Bunga</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-500 text-sm">Nama Proyek</p>
              <p className="text-[#111814] text-sm font-semibold">Paket Dekorasi Emerald</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-500 text-sm">Tanggal Transaksi</p>
              <p className="text-[#111814] text-sm font-semibold">24 Mei 2024, 14:30 WIB</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-500 text-sm">ID Transaksi</p>
              <div className="flex items-center gap-1">
                <p className="text-[#111814] text-sm font-mono">WP-99283471</p>
                <span className="material-symbols-outlined text-gray-400 text-sm cursor-pointer">content_copy</span>
              </div>
            </div>
          </div>
          <Link href="/vendor/projects/1" className="w-full flex items-center justify-center gap-2 rounded-lg h-12 bg-[#607AFB]/10 text-[#111814] text-sm font-bold border border-[#607AFB]/20 hover:bg-[#607AFB]/20 transition-colors">
            <span className="material-symbols-outlined text-xl">info</span>
            Lihat Detail Proyek
          </Link>
        </div>
      </div>

      <div className="flex-grow"></div>

      <div className="p-6 pb-12 space-y-3 bg-white">
        <Link href="/vendor/wallet" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 bg-[#607AFB] text-white text-base font-bold leading-normal shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-transform">
          Cek Saldo Keuangan
        </Link>
        <Link href="/vendor/wallet/history" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 bg-transparent border border-gray-200 text-[#111814] text-base font-semibold leading-normal active:bg-gray-50 transition-colors">
          Lihat Riwayat Transaksi
        </Link>
      </div>
    </div>
  );
}
