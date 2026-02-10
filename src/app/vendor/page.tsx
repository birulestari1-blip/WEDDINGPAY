"use client";

import React from "react";
import Link from "next/link";
import { VENDOR_STATS } from "@/lib/mock-data";

export default function VendorDashboardPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-manrope text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="relative mx-auto max-w-[430px] min-h-screen bg-white dark:bg-slate-950 shadow-2xl flex flex-col">
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md px-4 pt-4 pb-2 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-700">
              <span className="material-symbols-outlined text-primary">person</span>
            </div>
            <div>
              <p className="text-[12px] text-slate-500 font-medium leading-none mb-1">Halo, Vendor</p>
              <h1 className="text-sm font-bold leading-none">Lumina Photography</h1>
            </div>
          </div>
          <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400">
            <span className="material-symbols-outlined text-[24px]">notifications</span>
          </button>
        </header>

        <main className="flex-1 overflow-y-auto pb-24">
          {/* Quick Stats Grid */}
          <section className="p-4 grid grid-cols-2 gap-4">
            <div className="bg-primary/10 p-4 rounded-2xl border border-primary/20">
              <p className="text-[10px] font-bold text-primary uppercase tracking-wider">Total Revenue</p>
              <p className="text-xl font-extrabold mt-1">{VENDOR_STATS.totalRevenue}</p>
            </div>
            <div className="bg-emerald-500/10 p-4 rounded-2xl border border-emerald-500/20">
              <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Projects</p>
              <p className="text-xl font-extrabold mt-1">{VENDOR_STATS.completedProjects}</p>
            </div>
          </section>

          {/* Action Menu */}
          <section className="px-4 py-2 grid grid-cols-4 gap-4">
            {[
              { icon: 'calendar_month', label: 'Jadwal', href: '/vendor/calendar' },
              { icon: 'account_balance_wallet', label: 'Keuangan', href: '/vendor/financial' },
              { icon: 'inventory_2', label: 'Paket', href: '/vendor/packages' },
              { icon: 'image', label: 'Portfolio', href: '/vendor/portfolio' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="flex flex-col items-center gap-2 group">
                <div className="size-14 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800 group-active:scale-95 transition-transform">
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <span className="text-[10px] font-bold text-center">{item.label}</span>
              </Link>
            ))}
          </section>

          {/* Active Projects */}
          <section className="px-4 mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">Proyek Aktif</h2>
              <span className="text-primary text-xs font-bold">Lihat Semua</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-center gap-4">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">assignment</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-sm">Pernikahan Budi & Shinta</h3>
                  <p className="text-[10px] text-gray-500">24 Okt 2024 • Jakarta</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-orange-500 uppercase tracking-wider">In Progress</span>
                </div>
              </div>
            </div>
          </section>

          {/* Verification Banner */}
          <section className="px-4 mt-8">
            <div className="bg-slate-900 rounded-2xl p-5 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-base font-bold">Lengkapi Verifikasi KYC</h3>
                <p className="text-xs text-slate-400 mt-1">Dapatkan badge 'Verified' untuk meningkatkan kepercayaan klien.</p>
                <Link href="/vendor/kyc/verify">
                  <button className="mt-4 bg-primary text-white px-4 py-2 rounded-lg text-xs font-bold">Verifikasi Sekarang</button>
                </Link>
              </div>
              <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-white/5 text-[100px]">verified_user</span>
            </div>
          </section>
        </main>

        <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-slate-100 dark:border-slate-800 px-6 py-3 flex justify-between items-center pb-8 z-50 max-w-md mx-auto">
          {[
            { icon: "dashboard", label: "Home", active: true },
            { icon: "receipt_long", label: "Pesanan", active: false },
            { icon: "add", label: "Add", isFab: true },
            { icon: "account_balance_wallet", label: "Dompet", active: false },
            { icon: "person", label: "Profil", active: false },
          ].map((item, i) => (
            item.isFab ? (
              <div key={i} className="relative -top-4">
                <button className="size-14 bg-primary text-white rounded-full shadow-lg shadow-primary/40 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">add</span>
                </button>
              </div>
            ) : (
              <div key={i} className={`flex flex-col items-center gap-1 ${item.active ? "text-primary" : "text-gray-400"}`}>
                <span className={`material-symbols-outlined ${item.active ? "fill-icon" : ""}`}>{item.icon}</span>
                <span className="text-[10px] font-bold">{item.label}</span>
              </div>
            )
          ))}
        </nav>
      </div>
    </div>
  );
}
