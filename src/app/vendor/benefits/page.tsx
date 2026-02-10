"use client";

import React from "react";
import Link from "next/link";

export default function VendorBenefitsPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-manrope text-[#111318] dark:text-white min-h-screen">
      <div className="relative mx-auto min-h-screen w-full max-w-[430px] bg-white dark:bg-background-dark overflow-x-hidden pb-32 shadow-2xl">
        {/* Top Navigation Bar */}
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center justify-between px-4 h-14">
            <button onClick={() => window.history.back()} className="flex items-center text-blue-600">
              <span className="material-symbols-outlined">arrow_back_ios</span>
              <span className="text-lg">Kembali</span>
            </button>
            <h1 className="text-base font-bold tracking-tight">Keuntungan Vendor</h1>
            <button className="text-blue-600">
              <span className="material-symbols-outlined">info</span>
            </button>
          </div>
        </nav>

        <main>
          {/* Hero Section */}
          <div className="relative w-full h-80 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB7p2hVD5ZnAowmGmsFP83lBbNU4og9nPaGym6Okoem96Aoe73mIQCmdBYoh3d1K0umLj2rdzVIklArz3I7gtvrnsrOmOazw6wn5CDod-AhrC_js9RWPUZKlJctnoG_FvxZts7loHzkdtdYDujLQ5iuXJt_oMwFI2Km4KaTDTuCJ_mkvp8jGfOPZZVJhIR2RoOB98H16p7NUltqbeQZR_PCnblw93kTBRjvrFuOhDZDs0-43fRwNBMa77KilIyOn4zfGe7lrAU2bIw4')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-background-dark/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B76E79] text-white text-xs font-bold uppercase tracking-wider mb-3">
                <span className="material-symbols-outlined text-sm">verified_user</span>
                Verified Escrow
              </div>
              <h2 className="text-3xl font-extrabold text-white leading-tight">Jadilah Vendor Terpercaya &amp; Berkelas</h2>
              <p className="text-white/80 mt-2 text-sm max-w-[80%]">Tingkatkan omzet bisnis pernikahan Anda dengan sistem pembayaran WeddingPay yang aman.</p>
            </div>
          </div>

          <div className="px-6 pt-8 pb-4">
            <h3 className="text-2xl font-bold">Akses Eksklusif Pertumbuhan Bisnis</h3>
            <div className="h-1 w-12 bg-[#B76E79] mt-2 rounded-full"></div>
          </div>

          <div className="px-6 grid grid-cols-1 gap-4">
            {[
              { icon: "verified", title: "Badge 'Verified Escrow'", desc: "Tingkatkan kepercayaan calon pengantin secara instan dengan label verifikasi resmi." },
              { icon: "payments", title: "Jaminan Pembayaran", desc: "Dana aman dalam sistem escrow dan dijamin cair tepat waktu ke rekening Anda." },
              { icon: "monitoring", title: "Dashboard Keuangan", desc: "Pantau laporan transaksi, arus kas, dan invoice secara profesional dalam satu aplikasi." },
              { icon: "rocket_launch", title: "Eksposur Prioritas", desc: "Tampil di urutan teratas hasil pencarian pengantin. Dapatkan lebih banyak leads berkualitas." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold">{item.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </main>

        <footer className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 pb-8 max-w-md mx-auto">
          <Link href="/vendor/join">
            <button className="w-full h-14 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform text-lg">
              Mulai Verifikasi Sekarang
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </Link>
        </footer>
      </div>
    </div>
  );
}
