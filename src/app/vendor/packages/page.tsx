import React from "react";
import Link from "next/link";

const PACKAGES = [
  {
    id: "1",
    name: "Paket Catering Traditional 500 Pax (Gold Edition)",
    price: "Rp 45.000.000",
    sales: 12,
    updated: "2d ago",
    status: "Aktif",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBH1EupgYy93Y3wByxbFym26FwQmMWg1p8-g7kZlE76XL8zq2N-pv4RYBxAYBYFxkQP6d2FGRX9-_U0G61t_N_dg60TZ_FeMh-O-YFeUkGHkhiEhgDUz80dQX9gZzxBF_KwvFoi1XSUSydpRJRAyWJQQqm1KOQK7oxLf7oep26UKqxe5oXhLSkVYb1GxxtmWodtZJ5ooTz6YqaUFzMOv8PZuE_d23dc7xXUFxJ4Ox6t_I9Eo3xFv6sXDnO5O890_g-LUjLQWI5ddyIq"
  },
  {
    id: "2",
    name: "Dekorasi Pelaminan Rustic Gold - Indoor/Outdoor",
    price: "Rp 25.000.000",
    sales: 8,
    updated: "5d ago",
    status: "Aktif",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOlyGRRwzUZZry63KI5YuXG2Vew3aIlVd6VzfNM79mTs7vlTCwxxZ6chrEDouVrEY4jKzT_JxsbRSxsAGYOoICH-igKWt5R-uUxIqh0dla8zUu7pN6XmWrpDAA13nELVrT7_fJiGbyqwe2jYiHnJzK-elGcE3ithf0m96DezzXozACAPW35_Y3-UBeMTmy9Nia66vYIk2MkMQ81cHN8p9NYOEtL3C892QXtnhAWfX2exspcE0It33m4W2PA_kUs-ejOpEhiiqe1dvd"
  }
];

export default function VendorPackages() {
  return (
    <div className="bg-background-light min-h-screen text-[#0d0f1c] font-inter antialiased">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#ced2e9]">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <Link href="/vendor" className="flex items-center justify-center size-10 rounded-full hover:bg-gray-200 transition-colors">
              <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
            </Link>
            <h1 className="text-xl font-bold tracking-tight">Katalog Paket Saya</h1>
          </div>
          <button className="flex items-center justify-center size-10 rounded-full hover:bg-gray-200 transition-colors">
            <span className="material-symbols-outlined text-2xl">search</span>
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto pb-24">
        <div className="px-4 py-6">
          <Link href="/vendor/packages/add" className="w-full flex items-center justify-center gap-2 bg-[#607afb] text-white h-14 rounded-xl font-bold text-lg shadow-lg shadow-blue-500/20 hover:scale-[0.98] active:scale-95 transition-all">
            <span className="material-symbols-outlined">add_circle</span>
            Tambah Paket Baru
          </Link>
        </div>

        <div className="px-4 mb-4">
          <div className="flex border-b border-[#ced2e9] gap-6 overflow-x-auto no-scrollbar">
            <button className="flex flex-col items-center justify-center border-b-[3px] border-[#607afb] pb-3 pt-2 shrink-0">
              <p className="text-sm font-bold text-[#607afb]">Semua (12)</p>
            </button>
            <button className="flex flex-col items-center justify-center border-b-[3px] border-transparent pb-3 pt-2 shrink-0 opacity-60">
              <p className="text-sm font-bold">Aktif (10)</p>
            </button>
            <button className="flex flex-col items-center justify-center border-b-[3px] border-transparent pb-3 pt-2 shrink-0 opacity-60">
              <p className="text-sm font-bold">Non-aktif (2)</p>
            </button>
          </div>
        </div>

        <div className="px-4 space-y-4">
          {PACKAGES.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-xl p-4 shadow-sm border border-[#ced2e9]/50 flex gap-4 relative">
              <div className="relative size-20 shrink-0">
                <div className="w-full h-full rounded-lg bg-cover bg-center" style={{ backgroundImage: `url('${pkg.image}')` }}></div>
                <span className="absolute top-1 left-1 bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">{pkg.status}</span>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-sm leading-snug pr-6 line-clamp-2">{pkg.name}</h3>
                    <button className="absolute top-4 right-4 text-gray-400 hover:text-[#607afb] transition-colors">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-medium text-[#607afb] bg-[#607afb]/10 px-2 py-0.5 rounded-full">{pkg.sales} Terjual</span>
                    <span className="text-xs text-gray-500">• Updated {pkg.updated}</span>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-[#607afb] font-bold text-base">{pkg.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-[#ced2e9] px-6 py-2 flex justify-between items-center z-50 pb-8">
        <Link href="/vendor" className="flex flex-col items-center gap-1 opacity-40">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-medium">Dashboard</span>
        </Link>
        <Link href="/vendor/projects" className="flex flex-col items-center gap-1 opacity-40">
          <span className="material-symbols-outlined">list_alt</span>
          <span className="text-[10px] font-medium">Pesanan</span>
        </Link>
        <button className="flex flex-col items-center gap-1 text-[#607afb]">
          <span className="material-symbols-outlined !fill-1">inventory_2</span>
          <span className="text-[10px] font-bold">Katalog</span>
        </button>
        <Link href="/vendor/financial" className="flex flex-col items-center gap-1 opacity-40">
          <span className="material-symbols-outlined">payments</span>
          <span className="text-[10px] font-medium">Keuangan</span>
        </Link>
        <Link href="/vendor/profile" className="flex flex-col items-center gap-1 opacity-40">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-medium">Profil</span>
        </Link>
      </nav>
    </div>
  );
}
