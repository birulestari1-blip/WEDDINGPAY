import React from "react";
import Link from "next/link";

const orders = [
  {
    id: "WP-99210",
    vendor: "Lumina Photography",
    category: "Dokumentasi & Videografi",
    price: "Rp 15.000.000",
    status: "DP Dibayar",
    statusColor: "text-emerald-600",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvhq6lXWQUAifbtcLI-4LmQdauBF-SpDRuI_-UfIlCfvSl7-SMUZrZkc-90whjZlmRiCLtqbT4V0HWlOaX4YPK-7NECyqqTzR0QellrEVwFJtyBroMEUX67p5OzSvvS7Wdl-WmA-8kFEx_1wbLvKxqs8pkgK_VS4R59TpJsWAxAkagNftSIY5law4kcSUVsdOD2745ab9nLi7quNBqzTfsMcpES_UL1s8bMoNaRgga6QDwSJGsyOxBQ8CBJY8xPwedUEQKnooRClnU"
  },
  {
    id: "WP-99211",
    vendor: "Royal Catering Elite",
    category: "Konsumsi & Katering",
    price: "Rp 45.000.000",
    status: "Verifikasi Kerja",
    statusColor: "text-amber-600",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQSfT9N0kYk70L8-TZEEVD2Nez4hq53Q8yvRfHckJPhATp40eheFOkbFwLZroctEVd1vjFwjOMfaDrkBOSJthlCAN5_QQYwIoKUPjJGgIBb_TSBQd9q6IjyYDJ4yStOHE0MiwBHBTaUSkI1iaHwsUW_DIeegDufq4VFdAENiQl4x-0q-Dtp07TA2YlmZSOlK5cLmwbvJbhzNlJZeqelRfYtXqJGubzD2aR5H5MRRhi0ifUr6Q2_s4OJ_T03N9AD3xnbgve1Z7PRYL8"
  },
  {
    id: "WP-99212",
    vendor: "Grand Palace Decor",
    category: "Dekorasi & Venue",
    price: "Rp 32.500.000",
    status: "Dana di Escrow",
    statusColor: "text-blue-600",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8r9ZpNDJ1DOrycBNhCzJWLReUorLloR4EmSNu11YIzL6QXSeUkJeL310MQ9L7m9wT7fQ1X7OZgVAMhOP1mPqaoX7EfB1DiPz2rFLXB-odqbxuQwqXe3bVhudQJIWfg4RRUeYO3pVAWqMQiatPvn2CdwmA6nhRvRw7e3e-dqBX4u7u9R7r4XpMtXtc-PG_diJN8oN8hEoLGn6bskFd4gAsi1rBmUVKX0juhBE58jaLBhdT4d6P56QChaiE15l0o5pNmYIE8W0BJ2wD"
  }
];

export default function OrdersPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-manrope text-slate-900 dark:text-slate-100 min-h-screen antialiased">
      <div className="max-w-md mx-auto min-h-screen bg-background-light dark:bg-background-dark pb-24 relative shadow-2xl">
        {/* Top App Bar */}
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center px-4 py-4 gap-3">
            <Link href="/" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-slate-900 dark:text-white">
              <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
            </Link>
            <div className="flex-1">
              <h1 className="text-xl font-bold tracking-tight">Daftar Pesanan</h1>
            </div>
            <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-wedding-blue">
              <span className="material-symbols-outlined text-2xl">help_outline</span>
            </button>
          </div>
          {/* Segmented Control Tabs */}
          <div className="px-4 pb-2">
            <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
              <button className="flex-1 py-2 text-sm font-bold bg-white dark:bg-gray-700 shadow-sm rounded-lg text-wedding-blue transition-all">
                Aktif
              </button>
              <button className="flex-1 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
                Menunggu
              </button>
              <button className="flex-1 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
                Selesai
              </button>
            </div>
          </div>
        </header>

        {/* Search & Filter */}
        <div className="px-4 py-3">
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-wedding-blue transition-colors">
              search
            </span>
            <input
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-800 border-none rounded-xl focus:ring-1 focus:ring-wedding-blue shadow-sm text-sm transition-all"
              placeholder="Cari nama vendor atau kategori..."
              type="text"
            />
          </div>
        </div>

        {/* Content Area */}
        <main className="px-4 flex flex-col gap-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-50 dark:border-gray-800 overflow-hidden">
              <div className="flex gap-4">
                <div className="w-20 h-20 rounded-xl bg-gray-200 overflow-hidden shrink-0">
                  <img
                    alt={order.vendor}
                    className="w-full h-full object-cover"
                    src={order.image}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-base truncate dark:text-white">{order.vendor}</h3>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-wedding-blue text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 shrink-0">
                      <span className="material-symbols-outlined text-[14px]">verified_user</span> Escrow
                    </span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">{order.category}</p>
                  <p className="font-bold text-wedding-blue text-sm mt-2">{order.price}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-50 dark:border-gray-700 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full bg-current ${order.statusColor === 'text-emerald-600' ? 'text-emerald-500 animate-pulse' : order.statusColor === 'text-amber-600' ? 'text-amber-500' : 'text-blue-500'}`}></span>
                    <span className={`${order.statusColor} dark:text-current text-sm font-bold`}>{order.status}</span>
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium italic">
                    {order.status === 'Verifikasi Kerja' ? 'Menunggu konfirmasi Anda' : 'Terakhir diperbarui hari ini'}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 text-xs font-bold border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors dark:text-white">
                    {order.status === 'Verifikasi Kerja' ? 'Komplain' : 'Chat Vendor'}
                  </button>
                  <Link
                    href={order.status === 'Verifikasi Kerja' ? `/orders/${order.id}/release` : `/orders/${order.id}`}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg shadow-sm text-center flex items-center justify-center ${
                      order.status === 'Verifikasi Kerja' ? 'bg-amber-500 text-white' : 'bg-wedding-blue text-white'
                    }`}
                  >
                    {order.status === 'Verifikasi Kerja' ? 'Konfirmasi Kerja' : 'Detail Pesanan'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 px-6 py-3 pb-8 max-w-md mx-auto z-40">
          <div className="flex justify-around items-center">
            <Link href="/" className="flex flex-col items-center gap-1 text-gray-400">
              <span className="material-symbols-outlined">home</span>
              <span className="text-[10px] font-medium">Home</span>
            </Link>
            <Link href="/vendors/categories" className="flex flex-col items-center gap-1 text-gray-400">
              <span className="material-symbols-outlined">explore</span>
              <span className="text-[10px] font-medium">Jelajahi</span>
            </Link>
            <div className="flex flex-col items-center gap-1 text-wedding-blue">
              <span className="material-symbols-outlined font-bold fill-1">receipt_long</span>
              <span className="text-[10px] font-bold">Pesanan</span>
            </div>
            <button className="flex flex-col items-center gap-1 text-gray-400">
              <span className="material-symbols-outlined">chat_bubble</span>
              <span className="text-[10px] font-medium">Pesan</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-gray-400">
              <span className="material-symbols-outlined">person</span>
              <span className="text-[10px] font-medium">Profil</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
