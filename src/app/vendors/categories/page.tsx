import React from "react";
import Link from "next/link";

const categories = [
  { id: "catering", name: "Catering", sub: "Layanan Boga", icon: "restaurant", color: "bg-red-50 text-red-500" },
  { id: "mua", name: "Makeup (MUA)", sub: "Rias Pengantin", icon: "face_5", color: "bg-rose-50 text-rose-500" },
  { id: "venue", name: "Venue", sub: "Lokasi Acara", icon: "location_on", color: "bg-blue-50 text-blue-500" },
  { id: "photo", name: "Photography", sub: "Dokumentasi", icon: "photo_camera", color: "bg-orange-50 text-orange-500" },
  { id: "wo", name: "Wedding Organizer", sub: "Perencana Ahli", icon: "assignment_ind", color: "bg-purple-50 text-purple-500" },
  { id: "mc", name: "MC", sub: "Master of Ceremony", icon: "mic", color: "bg-teal-50 text-teal-500" },
  { id: "dance", name: "Tradisi & Tari", sub: "Seni Budaya", icon: "theater_comedy", color: "bg-amber-50 text-amber-500" },
  { id: "music", name: "Music", sub: "Hiburan Musik", icon: "music_note", color: "bg-pink-50 text-pink-500" },
  { id: "decor", name: "Decoration", sub: "Dekorasi Pelaminan", icon: "home_and_garden", color: "bg-green-50 text-green-500" },
  { id: "florist", name: "Florist", sub: "Bunga Segar", icon: "local_florist", color: "bg-rose-50 text-rose-400" },
];

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
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/vendors/${cat.id}`}
                  className="flex flex-col items-center bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all group active:scale-95"
                >
                  <div className={`size-12 rounded-full ${cat.color.split(' ')[0]} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <span className={`material-symbols-outlined ${cat.color.split(' ')[1]}`}>
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
              {/* Vendor Card 1 */}
              <div className="min-w-[240px] bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm">
                <div className="h-32 w-full bg-gray-200 relative">
                  <img
                    alt="Catering Preview"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfj9xFNYGP-sb6FIPXyYx0hj6M9qSbXDDGkEvaShyYTBMrrd34mOmjftn96_LRalQ1mh8D_slTB3LhlisEMA1JRGXRK2MmL1oab_2PEbYQGd5F1Uw2L1g8Wx1-n15ZYdW6WdtS8qIPxQfNuwX2qIRKsK7PPIpNln5w5T5ry_kqmKzRzoBRC7gaZmhpTqpWSeRmZnuAHc55VxGiorzp3mREOIp19GDqF9BtBcQJTKn6quKCXm2H1VB7GpDaccWxWasYpsAXj3dJFCk7"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 dark:bg-gray-900/90 px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-yellow-400 text-xs fill-1">
                      star
                    </span>
                    <span className="text-[10px] font-bold">4.9</span>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-sm truncate">
                    Royal Garden Catering
                  </h4>
                  <div className="flex items-center gap-1 mt-1 text-gray-500 text-[10px]">
                    <span className="material-symbols-outlined text-[12px]">
                      location_on
                    </span>
                    Jakarta Selatan
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-wedding-accent font-bold text-xs">
                      Mulai Rp 45jt
                    </p>
                    <span className="text-[10px] text-gray-400">500 Pax</span>
                  </div>
                </div>
              </div>
              {/* Vendor Card 2 */}
              <div className="min-w-[240px] bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm">
                <div className="h-32 w-full bg-gray-200 relative">
                  <img
                    alt="MUA Preview"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmPHbEMcbJsBK5mefACR-_7IwqcIYqvZLQrw9tTHd_-aODu93aIgGPnh3dZEu1SBww1nw-ZQhJrb7ZFeJqFm7UUV4ckvYuuUYBvw7xYXjU43si-IMSeSwiK_ZpAfF59SzpwY6_bjOYNn5aqvW8ThNAtD_1HxsDRScd3qCGRddsAX8_NQZ7O3lrpjXwh9EWTSTA8wZnC3ArENthHWJ72t70ls9C5nsaxSCOKINRUdchrOK7MV0TfGmGMTEZTuuhKaMOuWn5snAAizHi"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 dark:bg-gray-900/90 px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-yellow-400 text-xs fill-1">
                      star
                    </span>
                    <span className="text-[10px] font-bold">4.8</span>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-sm truncate">
                    Lumina Bride Studio
                  </h4>
                  <div className="flex items-center gap-1 mt-1 text-gray-500 text-[10px]">
                    <span className="material-symbols-outlined text-[12px]">
                      location_on
                    </span>
                    Bandung
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-wedding-accent font-bold text-xs">
                      Mulai Rp 8.5jt
                    </p>
                    <span className="text-[10px] text-gray-400">
                      Full Service
                    </span>
                  </div>
                </div>
              </div>
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
