import React from "react";
import Link from "next/link";

const topCatering = [
  { id: 1, name: "Saffron Catering & Events", price: "Rp 120rb/pax", rating: "4.9", reviews: 128, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAt6j-mZ1sroIDbWrc-wq8h6aLQboJQTKC6xJkAJxB89zKMAtmjSqeBB0rBGHhGnhGFa1a4bqnz31QBrNWpvdJvrdpBgy9vhCaqgsoDcRi3Q0A-ii82u9EwFAQNF7VK19q2R1ZuDxtWoh_XRQRVR2mgqT80h_mOJWi3Rzkr5_Iwg_ncsU5pjbD1T5eOZA3Dcsuh2o6wCmBJYzSVUsq7wVZjHiSB77gbm21baEBBX9GXoo1IfIQg6USXG7X3GrIo3UaX3EN-y0KjOioo" },
  { id: 2, name: "Larasati Food Signature", price: "Rp 150rb/pax", rating: "4.8", reviews: 94, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzPls4ms9mfkbXAQ4eUgekMiY4Vz2ZZmTerD3OtA0atbe84aDYmftdFl6PEqcmmbUnIc0VZgYawxVEwMFkvXpDP7I3RltB1XofV0bud86No_B02dCPfG5f6wKRS9TJehiru5-CkaaYxFaHHu3VdzF8usQk2TxQ77s68OcQ7Z5gEnsARe__RM9WeRa40SnDUTmjMuqShXS5di_ugntaieYnjYfAITirgRk21cnfAEsWAJdAxY141K2M6SvPGuPQcBunqoI0XLY9l7TO" },
];

const topVenues = [
  { id: 1, name: "The Ritz-Carlton Grand Hall", price: "Mulai Rp 250jt", rating: "5.0", reviews: 210, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjZT8tuUQvKQPzoeOFviF3bKr5IZNgFmy4iKNJU0vB7medu5sTlHMrawORCq5ZF4KfPEF0uDqhh3ETsYtX87aXqfqykyJlDhEGtLG4tzeNtlnN9KYLhWxEbv07McAdyxp4_hGCuF6ijHL-yFsNCp8YDGfyB2MGn_OkyL3L3e0PSCBKtV3eYiejPu0WxMjR7IVeVr1QJ5G4kXZ-L4WdDNJbyjkYyoTbtZ1LRfE1jEK5v-Z0UwSnn3wiSBWmvytXYSvBs8vMUchIxPRQ" },
  { id: 2, name: "Green Forest Garden Resort", price: "Mulai Rp 45jt", rating: "4.7", reviews: 85, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOr-Axhd_T1f57X-l3av6SDYOxGL7cSS0LRPGLS9uPnOPjTPn8_ideHWJePAJ48gcpr2IK0JVoAiw9PO_utZY5bwKjsG_iYRpyBj3A4Y-zqJmkwvEHTzSllN5YLMRBNauCCXjFrhOMNYTClwRc5R6Y7xxT8vLQAFycLKmhdtBq-eJghgnRoFXhLVc2vLkLwAIrKI1jE0P_69ecKmbLIX-Dl1l7dfP12z_KNryx2BuuSbGKySsFIgXMNK7ijKbBAs9HhSUi7ikYT-sG" },
];

const results = [
  { id: 1, category: "Fotografer", name: "Eternal Moments Photography", price: "Rp 12.500.000", rating: "4.9", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1S6EFyBNw4lhA__w7LkF8HvAOm_xMsYlKzbRC-oyKDLUNkcrrlIv3jmhFExQyzvpG-cUY-WxdDuuSZvjtMQ_d6ZAyLwzYOCqV0v7aiqkWgHsW7aWjLXTY5GexZULCnqetPOJPw_4XS-zfOoErKLBUktkXBWFa5s522iR-7By9UHuoYlbwNYql0kcBfENCOKh0HGV-1_OxSjk6NoBGLQbAqsnsF5zA5HkGlBHsJpRBqErgGOI0lDzp1D0FZyecGJNIqipUp4YR0g40" },
  { id: 2, category: "Dekorasi", name: "Flora & Bloom Decoration", price: "Mulai Rp 15.000.000", rating: "4.6", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7qRYDBLJ5MzkmTSqOhjGkM0q5JVJfAMMNcF9dtdd3-qdulpG65oD7-XRIZw4T787nc4O-voh6cToiKWSezO6hPqotb8R9PGokNmj7S2OEVcWambOOrkYll3BQZOISFz0ou8_IGDPmeUBAdlb9Y2VilKANSXQAkEhs47_63ao10RwAvQvNiqbT0CUKwURd1JSB-ggUJ3A4tDC8OT2iTTtCsoM8pRExap5EQ7wRfQHmNmjMp491tEOCi3SiNOtUChNAKrFAXBJBeXNU" },
];

export default function VendorSearchPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111813] dark:text-white antialiased min-h-screen">
      <div className="max-w-md mx-auto bg-white dark:bg-background-dark min-h-screen shadow-2xl flex flex-col">
        {/* Sticky Top Header */}
        <div className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center p-4 pb-2 justify-between">
            <div className="flex items-center gap-3">
              <Link href="/vendors/categories" className="material-symbols-outlined text-[#111813] dark:text-white" style={{ fontSize: "24px" }}>
                arrow_back_ios
              </Link>
              <h1 className="text-xl font-bold leading-tight tracking-tight">Cari Vendor</h1>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <span className="material-symbols-outlined">tune</span>
              </button>
            </div>
          </div>
          {/* Active Search Bar */}
          <div className="px-4 py-2">
            <label className="relative flex items-center w-full h-12">
              <div className="absolute left-4 text-emerald-500">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                className="w-full h-full pl-12 pr-12 rounded-xl border-none bg-gray-50 dark:bg-gray-900 shadow-sm focus:ring-2 focus:ring-emerald-500 text-base"
                placeholder="Catering, Venue, atau Fotografer..."
                type="text"
                defaultValue="Catering Pernikahan"
              />
              <button className="absolute right-4 text-gray-400">
                <span className="material-symbols-outlined">cancel</span>
              </button>
            </label>
          </div>
          {/* Keyword Suggestions (Pills) */}
          <div className="flex gap-2 p-4 pt-2 overflow-x-auto no-scrollbar">
            {["Semua", "Prasmanan", "Honeymoon", "Gedung", "Modern"].map((pill, i) => (
              <button
                key={i}
                className={`flex h-9 shrink-0 items-center justify-center rounded-full px-4 text-sm font-semibold shadow-sm ${
                  i === 0 ? "bg-emerald-500 text-black" : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                }`}
              >
                {pill}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 pb-24">
          {/* Section: Top Catering */}
          <div className="mt-4">
            <div className="flex items-center justify-between px-4 mb-3">
              <h2 className="text-lg font-bold">Top Catering</h2>
              <button className="text-emerald-500 text-sm font-semibold">Lihat Semua</button>
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar px-4">
              {topCatering.map((v) => (
                <div key={v.id} className="min-w-[260px] bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
                  <div className="relative h-40 bg-cover bg-center" style={{ backgroundImage: `url('${v.image}')` }}>
                    <div className="absolute top-2 right-2 bg-emerald-500 px-2 py-1 rounded-lg flex items-center gap-1 shadow-md">
                      <span className="material-symbols-outlined text-black text-[14px] font-bold">verified_user</span>
                      <span className="text-[10px] font-bold text-black uppercase">Escrow</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="flex items-center gap-1 mb-1">
                      <span className="material-symbols-outlined text-yellow-400 text-[16px] fill-current">star</span>
                      <span className="text-xs font-bold">{v.rating}</span>
                      <span className="text-xs text-gray-500">({v.reviews} Review)</span>
                    </div>
                    <h3 className="font-bold text-sm truncate">{v.name}</h3>
                    <p className="text-emerald-500 font-bold text-sm mt-1">{v.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Top Venue */}
          <div className="mt-8">
            <div className="flex items-center justify-between px-4 mb-3">
              <h2 className="text-lg font-bold">Top Venue</h2>
              <button className="text-emerald-500 text-sm font-semibold">Lihat Semua</button>
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar px-4">
              {topVenues.map((v) => (
                <div key={v.id} className="min-w-[260px] bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
                  <div className="relative h-40 bg-cover bg-center" style={{ backgroundImage: `url('${v.image}')` }}>
                    <div className="absolute top-2 right-2 bg-emerald-500 px-2 py-1 rounded-lg flex items-center gap-1 shadow-md">
                      <span className="material-symbols-outlined text-black text-[14px] font-bold">verified_user</span>
                      <span className="text-[10px] font-bold text-black uppercase">Escrow</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="flex items-center gap-1 mb-1">
                      <span className="material-symbols-outlined text-yellow-400 text-[16px] fill-current">star</span>
                      <span className="text-xs font-bold">{v.rating}</span>
                      <span className="text-xs text-gray-500">({v.reviews} Review)</span>
                    </div>
                    <h3 className="font-bold text-sm truncate">{v.name}</h3>
                    <p className="text-emerald-500 font-bold text-sm mt-1">{v.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: General Results */}
          <div className="mt-8 px-4">
            <h2 className="text-lg font-bold mb-4">Hasil Pencarian Lainnya</h2>
            <div className="space-y-4">
              {results.map((v) => (
                <div key={v.id} className="flex gap-4 bg-white dark:bg-gray-900 p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                  <div className="w-24 h-24 rounded-lg bg-cover bg-center shrink-0" style={{ backgroundImage: `url('${v.image}')` }}></div>
                  <div className="flex flex-col justify-between flex-1 py-1">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase font-bold text-gray-400">{v.category}</span>
                        <div className="flex items-center gap-0.5">
                          <span className="material-symbols-outlined text-yellow-400 text-[14px] fill-current">star</span>
                          <span className="text-[10px] font-bold">{v.rating}</span>
                        </div>
                      </div>
                      <h3 className="font-bold text-sm leading-tight">{v.name}</h3>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="material-symbols-outlined text-emerald-500 text-[14px]">verified_user</span>
                        <span className="text-[10px] text-emerald-500 font-bold">Verified Escrow</span>
                      </div>
                    </div>
                    <p className="text-sm font-bold text-emerald-500">{v.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Navigation Bar (iOS style) */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 pb-8 pt-2 max-w-md mx-auto">
          <div className="flex justify-around items-center px-4">
            <Link href="/" className="flex flex-col items-center gap-1 text-gray-400">
              <span className="material-symbols-outlined">home</span>
              <span className="text-[10px] font-medium">Beranda</span>
            </Link>
            <Link href="/vendors/categories" className="flex flex-col items-center gap-1 text-emerald-500">
              <span className="material-symbols-outlined fill-current">search</span>
              <span className="text-[10px] font-bold">Cari</span>
            </Link>
            <div className="relative -top-4">
              <div className="bg-emerald-500 p-4 rounded-full shadow-lg shadow-emerald-500/30 text-black">
                <span className="material-symbols-outlined font-bold">add</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1 text-gray-400">
              <span className="material-symbols-outlined">account_balance_wallet</span>
              <span className="text-[10px] font-medium">Escrow</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-gray-400">
              <span className="material-symbols-outlined">person</span>
              <span className="text-[10px] font-medium">Profil</span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
