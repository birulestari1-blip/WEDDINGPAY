import React from "react";
import Link from "next/link";

const packages = [
  { id: 1, name: "Paket Catering Traditional 500 Pax (Gold Edition)", price: "Rp 45.000.000", sold: 12, updated: "2d ago", status: "Aktif", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBH1EupgYy93Y3wByxbFym26FwQmMWg1p8-g7kZlE76XL8zq2N-pv4RYBxAYBYFxkQP6d2FGRX9-_U0G61t_N_dg60TZ_FeMh-O-YFeUkGHkhiEhgDUz80dQX9gZzxBF_KwvFoi1XSUSydpRJRAyWJQQqm1KOQK7oxLf7oep26UKqxe5oXhLSkVYb1GxxtmWodtZJ5ooTz6YqaUFzMOv8PZuE_d23dc7xXUFxJ4Ox6t_I9Eo3xFv6sXDnO5O890_g-LUjLQWI5ddyIq" },
  { id: 2, name: "Dekorasi Pelaminan Rustic Gold - Indoor/Outdoor", price: "Rp 25.000.000", sold: 8, updated: "5d ago", status: "Aktif", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOlyGRRwzUZZry63KI5YuXG2Vew3aIlVd6VzfNM79mTs7vlTCwxxZ6chrEDouVrEY4jKzT_JxsbRSxsAGYOoICH-igKWt5R-uUxIqh0dla8zUu7pN6XmWrpDAA13nELVrT7_fJiGbyqwe2jYiHnJzK-elGcE3ithf0m96DezzXozACAPW35_Y3-UBeMTmy9Nia66vYIk2MkMQ81cHN8p9NYOEtL3C892QXtnhAWfX2exspcE0It33m4W2PA_kUs-ejOpEhiiqe1dvd" },
  { id: 3, name: "Dokumentasi Cinematic Wedding (2 Days)", price: "Rp 12.500.000", sold: 42, updated: "1w ago", status: "Non-aktif", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzqGK5JAGliqS5ugsYpuK-PvEpuzClNfRy-xEK-t5PIY5oJwJzI_yvGOJga5Ci-W3JUYM9WmPC98k_rmn3p5MkxMQjwT4DAx23wRwNzrsqZkp8l2fhvvC-j3p-t_NEECRnNiaAWzILOoWP_vHIT-fKp3FjaYSLyVqdZ15z_6OSnmdeNYYx2xpX8wfhsllIbGEFMpm3h4E3xDO83Cs1mZr1BBkVs44doHHb6mdMNrc3cc6eAYVXsF5xjtAvERiCIyDtl4EceC2dlaqv" },
];

export default function VendorPackagesPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#0d0f1c] dark:text-white font-inter">
      <div className="max-w-md mx-auto min-h-screen bg-white dark:bg-background-dark shadow-2xl flex flex-col relative overflow-x-hidden">
        <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#ced2e9] dark:border-gray-800">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center justify-center size-10 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-slate-900 dark:text-white">
                <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
              </Link>
              <h1 className="text-xl font-bold tracking-tight">Katalog Paket Saya</h1>
            </div>
            <button className="flex items-center justify-center size-10 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
              <span className="material-symbols-outlined text-2xl">search</span>
            </button>
          </div>
        </header>

        <main className="flex-1 pb-24">
          <div className="px-4 py-6">
            <Link href="/vendor-admin/packages/add" className="w-full flex items-center justify-center gap-2 bg-[#607afb] text-white h-14 rounded-xl font-bold text-lg shadow-lg shadow-[#607afb]/20 hover:scale-[0.98] active:scale-95 transition-all">
              <span className="material-symbols-outlined">add_circle</span>
              Tambah Paket Baru
            </Link>
          </div>

          <div className="px-4 mb-4">
            <div className="flex border-b border-[#ced2e9] dark:border-gray-800 gap-6 overflow-x-auto no-scrollbar">
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
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border border-[#ced2e9]/50 dark:border-gray-800 flex gap-4 relative group ${
                  pkg.status === "Non-aktif" ? "opacity-70 grayscale-[0.5]" : ""
                }`}
              >
                <div className="relative size-20 shrink-0">
                  <div
                    className="w-full h-full rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url('${pkg.image}')` }}
                  ></div>
                  <span
                    className={`absolute top-1 left-1 text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase ${
                      pkg.status === "Aktif" ? "bg-green-500" : "bg-gray-500"
                    }`}
                  >
                    {pkg.status}
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-sm leading-snug pr-6 line-clamp-2 dark:text-white">
                        {pkg.name}
                      </h3>
                      <button className="absolute top-4 right-4 text-gray-400 hover:text-[#607afb] transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-medium text-[#607afb] bg-[#607afb]/10 px-2 py-0.5 rounded-full">
                        {pkg.sold} Terjual
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        • Updated {pkg.updated}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-[#607afb] font-bold text-base">
                      {pkg.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
