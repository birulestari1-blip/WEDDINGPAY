import React from "react";
import Link from "next/link";
import { CATEGORIES, VENDORS } from "@/lib/mock-data";

export default function CategoriesPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#181112] dark:text-white font-plus-jakarta min-h-screen">
      <div className="max-w-md mx-auto bg-white dark:bg-background-dark min-h-screen shadow-2xl flex flex-col">
        {/* Top AppBar */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-wedding-accent text-2xl">
                favorite
              </span>
              <h1 className="text-lg font-bold tracking-tight">WeddyMarket</h1>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <span className="material-symbols-outlined">shopping_bag</span>
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 pb-24 px-4">
          {/* Search Section */}
          <div className="py-4">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-gray-400 group-focus-within:text-wedding-accent transition-colors">
                  search
                </span>
              </div>
              <input
                className="block w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border-none rounded-xl ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-2 focus:ring-wedding-accent text-sm transition-all"
                placeholder="Cari jasa, vendor, atau venue..."
                type="text"
              />
            </div>
          </div>

          {/* Greeting & Info */}
          <div className="py-2">
            <h2 className="text-2xl font-bold tracking-tight mb-1">
              Halo, Calon Pengantin!
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Temukan vendor impian untuk hari spesialmu.
            </p>
          </div>

          {/* Kategori Vendor Grid */}
          <section className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Kategori Vendor</h3>
              <button className="text-wedding-accent text-sm font-semibold">
                Lihat Semua
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/vendors/${cat.id}`}
                  className="flex flex-col items-center bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all group active:scale-95"
                >
                  <div className={`size-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <span className={`material-symbols-outlined text-primary`}>
                      {cat.icon}
                    </span>
                  </div>
                  <span className="text-sm font-semibold">{cat.name}</span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">
                    {cat.sub}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Section Vendor Terpopuler */}
          <section className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Vendor Terpopuler</h3>
              <button className="text-wedding-accent text-sm font-semibold">
                Lihat Semua
              </button>
            </div>
            <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar">
              {VENDORS.map((v) => (
                <Link key={v.id} href={`/vendors/${v.category}/${v.id}`} className="min-w-[240px] bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm active:scale-[0.98] transition-all">
                  <div className="h-32 w-full bg-gray-200 relative">
                    <img
                      alt={v.name}
                      className="w-full h-full object-cover"
                      src={v.image}
                    />
                    <div className="absolute top-2 right-2 bg-white/90 dark:bg-gray-900/90 px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                      <span className="material-symbols-outlined text-yellow-400 text-xs fill-1">
                        star
                      </span>
                      <span className="text-[10px] font-bold">{v.rating}</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="font-bold text-sm truncate">
                      {v.name}
                    </h4>
                    <div className="flex items-center gap-1 mt-1 text-gray-500 text-[10px]">
                      <span className="material-symbols-outlined text-[12px]">
                        location_on
                      </span>
                      {v.location}
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <p className="text-wedding-accent font-bold text-xs">
                        Mulai {v.price}
                      </p>
                      <span className="text-[10px] text-gray-400 uppercase">
                        {v.subCategory}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>

        {/* Navigation Tab Bar */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 px-6 py-2 flex justify-between items-center z-50 max-w-md mx-auto">
          <Link href="/" className="flex flex-col items-center gap-1 text-gray-400">
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-medium">Beranda</span>
          </Link>
          <button className="flex flex-col items-center gap-1 text-wedding-accent">
            <span className="material-symbols-outlined fill-1">storefront</span>
            <span className="text-[10px] font-medium">Vendor</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <span className="material-symbols-outlined">receipt_long</span>
            <span className="text-[10px] font-medium">Pesanan</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-medium">Profil</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
