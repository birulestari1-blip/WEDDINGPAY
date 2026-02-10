"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function AddPackagePage() {
  const [items, setItems] = useState([
    "Buffet 10 Menu Pilihan",
    "Dekorasi Meja VIP"
  ]);

  return (
    <div className="bg-background-light dark:bg-background-dark font-inter text-[#111318] dark:text-white min-h-screen">
      <div className="relative mx-auto min-h-screen max-w-md bg-white dark:bg-background-dark flex flex-col pb-24 shadow-xl">
        <header className="sticky top-0 z-50 flex items-center justify-between bg-white dark:bg-background-dark px-4 py-3 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <Link href="/vendor-admin/portfolio" className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
            </Link>
            <h1 className="text-lg font-bold tracking-tight">Tambah Paket Baru</h1>
          </div>
          <button className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <span className="material-symbols-outlined">help_outline</span>
          </button>
        </header>

        <main className="flex-1 overflow-y-auto">
          <section className="p-4">
            <h3 className="text-base font-bold mb-3">Foto Sampul Paket</h3>
            <div className="relative group cursor-pointer overflow-hidden rounded-xl aspect-[16/9] bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center gap-2">
              <div className="relative z-10 flex flex-col items-center bg-white/80 dark:bg-black/50 p-4 rounded-xl backdrop-blur-sm">
                <span className="material-symbols-outlined text-primary text-3xl mb-1 text-blue-600">
                  add_a_photo
                </span>
                <span className="text-sm font-medium">Unggah Foto Utama</span>
              </div>
            </div>
          </section>

          <section className="px-4 py-2 space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1.5">Nama Paket</label>
              <input className="w-full h-12 px-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-1 focus:ring-blue-600 outline-none text-sm" placeholder="Contoh: Gold Catering 500 Pax" type="text" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1.5">Harga Paket (IDR)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">Rp</span>
                <input className="w-full h-12 pl-12 pr-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-1 focus:ring-blue-600 outline-none text-sm" placeholder="0" type="number" />
              </div>
            </div>
          </section>

          <section className="px-4 py-2 mt-4">
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Daftar Fasilitas &amp; Item</label>
              <button className="text-xs font-bold text-blue-600 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">add</span> Tambah Item
              </button>
            </div>
            <div className="space-y-2">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="flex-1 flex items-center h-11 px-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                    <span className="material-symbols-outlined text-blue-600 text-sm mr-2">check_circle</span>
                    <input className="flex-1 bg-transparent border-none focus:ring-0 text-sm p-0 dark:text-white" type="text" defaultValue={item} />
                  </div>
                  <button className="text-gray-400 hover:text-red-500"><span className="material-symbols-outlined">delete</span></button>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md p-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 flex items-center gap-3 pb-8">
          <button className="flex-1 h-12 bg-blue-600 text-white rounded-lg font-bold text-base shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-all">
            Simpan Paket
          </button>
        </footer>
      </div>
    </div>
  );
}
