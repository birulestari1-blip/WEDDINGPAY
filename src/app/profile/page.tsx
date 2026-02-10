"use client";

import React from "react";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 min-h-screen font-manrope">
      {/* Mobile Header (iOS Style) */}
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-rose-gold/20">
        <button className="p-2 -ml-2 hover:bg-rose-gold/10 rounded-full transition-colors">
          <span className="material-symbols-outlined text-wedding-accent">
            arrow_back_ios_new
          </span>
        </button>
        <h1 className="text-lg font-bold tracking-tight">Profil Pengantin</h1>
        <button className="p-2 -mr-2 hover:bg-rose-gold/10 rounded-full transition-colors">
          <span className="material-symbols-outlined text-wedding-accent">edit</span>
        </button>
      </header>

      <main className="max-w-md mx-auto pb-24">
        {/* Profile Section */}
        <section className="px-6 py-8 flex flex-col items-center text-center">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-wedding-accent to-rose-gold shadow-xl">
              <img
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-4 border-white dark:border-background-dark"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByVvrLX6Z0ru0gk1fv7xdKOW5GGC3kQ-IOghAewAQr7bcNgzKjMmJ1VYqTibssCQ3l5Z6s1fPePMslsFEoVmAd6cR8STyS9MQulOJTdnIlsqLj84eVnV9TXQy_QiJXNl007m5NmAWBuTJDLTL5BGA-AN4KDNeVpWgpjms2dZuEXuTLI053L_tl8fr6BBKoYLXiOGOFrABJi134_fG4fcaGv1MmvZOyQRhPByM1x2rQPUyS9mArfO-YFkioY0QMzcO2kRuNbXrpYhTg"
              />
            </div>
            <button className="absolute bottom-1 right-1 bg-wedding-accent text-white p-2 rounded-full shadow-lg border-2 border-white dark:border-background-dark flex items-center justify-center">
              <span className="material-symbols-outlined text-sm">photo_camera</span>
            </button>
          </div>
          <h2 className="mt-6 text-2xl font-extrabold text-slate-900 dark:text-white">
            Siti & Adit
          </h2>
          <div className="mt-1 flex items-center gap-2 text-wedding-accent font-semibold">
            <span className="material-symbols-outlined text-sm">calendar_today</span>
            <span>12 September 2024</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            142 Hari Menuju Bahagia
          </p>
        </section>

        {/* Wedding Preferences Card */}
        <section className="px-6 mb-8">
          <div className="bg-gradient-to-br from-[#fdfcfb] to-[#e2d1c3] dark:from-[#2d1b1c] dark:to-[#1a0d0e] rounded-xl p-6 shadow-sm border border-rose-gold/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-800 dark:text-rose-gold flex items-center gap-2">
                <span className="material-symbols-outlined text-wedding-accent">
                  favorite
                </span>
                Preferensi Pernikahan
              </h3>
              <span className="text-xs font-bold text-wedding-accent px-2 py-1 bg-wedding-accent/10 rounded-full uppercase tracking-wider">
                Plan: Gold
              </span>
            </div>

            <div className="space-y-5">
              {/* Budget Section */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                    Estimasi Budget
                  </label>
                  <span className="text-lg font-extrabold text-slate-900 dark:text-white">
                    Rp 250.000.000
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-wedding-accent h-full w-2/3 rounded-full"></div>
                </div>
                <p className="text-[10px] text-slate-400 mt-1">
                  Terpakai: Rp 165.000.000 (Melalui WeddingPay Escrow)
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Location */}
                <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg border border-white/50">
                  <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase block mb-1">
                    Lokasi Utama
                  </label>
                  <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                    <span className="material-symbols-outlined text-sm text-wedding-accent">
                      location_on
                    </span>
                    <span className="text-sm font-bold">Bandung, Jawa Barat</span>
                  </div>
                </div>
                {/* Theme */}
                <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg border border-white/50">
                  <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase block mb-1">
                    Tema Acara
                  </label>
                  <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                    <span className="material-symbols-outlined text-sm text-wedding-accent">
                      auto_awesome
                    </span>
                    <span className="text-sm font-bold">Modern Rustic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Settings Menu */}
        <section className="px-6 space-y-2">
          <h3 className="px-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
            Pengaturan Akun
          </h3>
          <div className="bg-white dark:bg-slate-900/50 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
            {/* Menu Item 1 */}
            <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-b border-slate-50 dark:border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-500">
                    account_balance_wallet
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-slate-800 dark:text-slate-100">
                    Metode Pembayaran
                  </p>
                  <p className="text-xs text-slate-500">
                    2 kartu tersimpan • Escrow Aktif
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-300">
                chevron_right
              </span>
            </button>
            {/* Menu Item 2 */}
            <Link href="/profile/security" className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-b border-slate-50 dark:border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-50 dark:bg-green-900/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-500">
                    verified_user
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-slate-800 dark:text-slate-100">
                    Keamanan Akun
                  </p>
                  <p className="text-xs text-slate-500">
                    Biometrik & Verifikasi 2 Langkah
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-300">
                chevron_right
              </span>
            </Link>
            {/* Menu Item 3 */}
            <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-orange-500">
                    support_agent
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-slate-800 dark:text-slate-100">
                    Pusat Bantuan
                  </p>
                  <p className="text-xs text-slate-500">
                    Hubungi CS atau baca FAQ
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-300">
                chevron_right
              </span>
            </button>
          </div>

          {/* Danger Zone */}
          <div className="mt-8">
            <button className="w-full py-4 px-4 flex items-center justify-center gap-2 text-wedding-accent font-bold hover:bg-wedding-accent/5 rounded-xl transition-colors border border-wedding-accent/20">
              <span className="material-symbols-outlined text-sm">logout</span>
              Keluar dari Akun
            </button>
            <p className="text-center text-[10px] text-slate-400 mt-6 uppercase tracking-widest">
              WeddingPay v2.4.0 • Secured by EscrowID
            </p>
          </div>
        </section>
      </main>

      {/* Navigation Tab Bar (iOS style) */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 px-8 py-3 flex justify-between items-center z-50">
        <Link href="/" className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-bold">Beranda</span>
        </Link>
        <Link href="/vendors" className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">explore</span>
          <span className="text-[10px] font-bold">Vendor</span>
        </Link>
        <div className="relative -mt-10">
          <button className="w-14 h-14 bg-wedding-accent text-white rounded-full shadow-lg shadow-wedding-accent/30 flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">add</span>
          </button>
        </div>
        <Link href="/orders" className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">receipt_long</span>
          <span className="text-[10px] font-bold">Transaksi</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center gap-1 text-wedding-accent">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-bold">Profil</span>
        </Link>
      </nav>
    </div>
  );
}
