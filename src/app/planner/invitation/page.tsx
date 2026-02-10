"use client";

import React from "react";
import Link from "next/link";

export default function InvitationManagementPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111318] dark:text-gray-100 antialiased min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full max-w-md mx-auto flex-col bg-white dark:bg-[#111318] overflow-x-hidden shadow-2xl">
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#111318]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center p-4 pb-2 justify-between">
            <Link href="/" className="text-[#111318] dark:text-white flex size-10 shrink-0 items-center justify-center cursor-pointer rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <span className="material-symbols-outlined text-2xl">arrow_back</span>
            </Link>
            <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">Kelola Undangan</h2>
            <div className="flex w-10 items-center justify-end">
              <button className="flex cursor-pointer items-center justify-center rounded-lg h-10 w-10 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-[#111318] dark:text-white">
                <span className="material-symbols-outlined text-2xl">share</span>
              </button>
            </div>
          </div>
          <div className="flex px-4 py-3">
            <div className="flex h-11 flex-1 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 p-1">
              <button className="flex h-full grow items-center justify-center rounded-lg px-2 bg-white dark:bg-gray-700 shadow-sm text-blue-600 text-sm font-semibold transition-all">Editor</button>
              <button className="flex h-full grow items-center justify-center rounded-lg px-2 text-gray-500 dark:text-gray-400 text-sm font-semibold transition-all">Statistik RSVP</button>
            </div>
          </div>
        </header>

        <main className="flex-1 pb-32">
          <section className="px-4 py-4 grid grid-cols-3 gap-3">
            {[
              { label: "Total Tamu", val: "248", color: "text-blue-600", bg: "bg-blue-600/10 dark:bg-blue-600/20", border: "border-blue-600/20" },
              { label: "Hadir", val: "182", color: "text-emerald-600", bg: "bg-emerald-50 dark:bg-emerald-900/20", border: "border-emerald-100 dark:border-emerald-800" },
              { label: "Maaf", val: "14", color: "text-red-500", bg: "bg-red-50 dark:bg-red-900/20", border: "border-red-100 dark:border-red-800" }
            ].map((stat, i) => (
              <div key={i} className={`${stat.bg} p-3 rounded-xl border ${stat.border}`}>
                <p className={`text-[10px] uppercase font-bold tracking-wider opacity-70 ${stat.color}`}>{stat.label}</p>
                <p className={`text-xl font-extrabold ${stat.color}`}>{stat.val}</p>
              </div>
            ))}
          </section>

          <section className="py-2">
            <div className="flex items-center justify-between px-4 pb-3">
              <h3 className="text-[#111318] dark:text-white text-md font-bold leading-tight">Pilih Tema Undangan</h3>
              <span className="text-blue-600 text-xs font-bold cursor-pointer hover:underline">Lihat Semua</span>
            </div>
            <div className="flex w-full overflow-x-auto no-scrollbar px-4 gap-3">
              {[
                { name: "Modern Lux", active: true },
                { name: "Classic Gold", active: false },
                { name: "Rustic Wood", active: false },
                { name: "Boho Floral", active: false }
              ].map((theme, i) => (
                <div key={i} className={`flex flex-col gap-2 w-28 shrink-0 ${!theme.active ? 'opacity-70' : ''}`}>
                  <div className={`relative w-full aspect-[3/4] bg-center bg-no-repeat bg-cover rounded-xl ${theme.active ? 'ring-2 ring-blue-600 ring-offset-2 dark:ring-offset-[#111318]' : 'border border-gray-100 dark:border-gray-800'}`} style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-5EtrpKwmELaYJ_koU5BC-4JlhPure0XZ76lMjFiqmx5i-eXrtOQ6kcbRTiHwQiidwPyrMmOi7UBI-VzcanyGrTYNZimuxzuB7avRIKXh6S9vClUuounXl93DzzBTfriJ965pziQW6q2b9vl0C_xYhvLpJy_ep5CKVA25UDNfKJ-eLirnxEXYq6kCoMmu3_E9JV2IkK5yQGD1hg_93I31ANE1rQV2W32ro3_p3_sH2YQvDbwtghHjDTBtEyKLxJjhgYXwL33Zpst5')` }}>
                    {theme.active && (
                      <div className="absolute top-2 right-2 bg-blue-600 text-white rounded-full p-0.5 shadow-lg">
                        <span className="material-symbols-outlined text-sm leading-none flex items-center justify-center">check_circle</span>
                      </div>
                    )}
                  </div>
                  <p className={`text-xs text-center ${theme.active ? 'font-bold text-[#111318] dark:text-white' : 'font-medium text-gray-500'}`}>{theme.name}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="px-4 py-6">
            <div className="flex items-center justify-between pb-3">
              <h3 className="text-[#111318] dark:text-white text-md font-bold leading-tight">Galeri Foto</h3>
              <button className="text-blue-600 text-xs font-bold flex items-center gap-1 hover:bg-blue-50 dark:hover:bg-blue-600/10 px-2 py-1 rounded-lg transition-colors">
                <span className="material-symbols-outlined text-sm">add_circle</span> Tambah
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="aspect-square rounded-lg bg-cover bg-center bg-gray-100 dark:bg-gray-800 border border-black/5" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBr7DyBwEE_hlhJ1Lyo9cJZ-QBF0jGAPxH0LTxgE9LNSt2Y-i2QmJRer4cLeJnSxdQzUvdDDExouxLUjN1cQJNM0NQ13ZqfRmYehGbdzLozy5JoZK0zNsxbAiFKlEPR0YJVyo7R21d5ttkVLu9bWzC8NQuZdHnlMQhTXLce0HfUBzVcGVjyQBYTrl15HhOggExCwL94yQ567Ige9nzZxlmBj7jzzOroJWR93jhpOSCWfc9aCNHZyz9U9HD1yIG0jGUq6eZuZbDpLx_N')` }}></div>
              <div className="aspect-square rounded-lg bg-cover bg-center bg-gray-100 dark:bg-gray-800 border border-black/5" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0V7IeMe5Fjw54Upqh-0kEgVYpnFYFU8ygIKPqrn8zhBvpcXn4Sa-H2mjjVd4rB3QSNDj_x3hYQFXUWSxiizYPnxLi_7clxPoPDTHp4f1HBubfau_OjpAuadaPMb1Rmy-TyeByoJKLL7yXh1gRyEjyPpy1aKjk5iyTV7nawpQMKvS9gJYRfkdw0iizezo1K-MldaiVU1IdwdM_HENHR1OS0Hp7Mx-q6qAvoSfVrNxWApKStCz2LxdvGssRP1bdaOh_FgW-knKJjQ2A')` }}></div>
              <div className="aspect-square rounded-lg bg-slate-50 dark:bg-slate-800 border-2 border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-center cursor-pointer group hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                <span className="material-symbols-outlined text-slate-400 group-hover:text-blue-600 transition-colors">image</span>
              </div>
            </div>
          </section>

          <section className="px-4 py-2">
            <h3 className="text-[#111318] dark:text-white text-md font-bold pb-4">Jadwal &amp; Lokasi</h3>
            <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-blue-600 text-xl">event_available</span>
                <h4 className="font-bold text-sm">Akad Nikah</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Tanggal &amp; Waktu</label>
                  <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 rounded-xl border border-gray-200 dark:border-gray-700 mt-1 shadow-sm">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Sabtu, 24 Mei 2025 • 09:00</span>
                    <span className="material-symbols-outlined text-gray-400 text-lg">calendar_month</span>
                  </div>
                </div>
                <div>
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Lokasi</label>
                  <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 rounded-xl border border-gray-200 dark:border-gray-700 mt-1 shadow-sm">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200 truncate mr-2">Masjid Raya Al-Azhar, Jakarta Selatan</span>
                    <span className="material-symbols-outlined text-gray-400 text-lg">location_on</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-50 px-4 pb-8 pt-4 bg-white/90 dark:bg-[#111318]/90 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800">
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-blue-600/30 active:scale-[0.98] transition-all">
              <span className="material-symbols-outlined text-xl">send</span>
              <span>Kirim via WhatsApp</span>
            </button>
            <button className="w-14 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-[#111318] dark:text-white py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 active:scale-[0.98] transition-all">
              <span className="material-symbols-outlined">visibility</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
