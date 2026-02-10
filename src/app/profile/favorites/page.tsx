import React from "react";
import Link from "next/link";

const FAVORITE_VENDORS = [
  {
    id: "1",
    category: "Fotografi Pernikahan",
    name: "Lumina Photography",
    rating: 4.9,
    reviews: 120,
    location: "Jakarta Selatan",
    price: "Rp 12.500.000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFD95-IkeE4ucEKKxL42l1XYjSYJS8WrZnUe_VaSz8OSvpQ6Aj_avhId_Ujmib2Irk4su5cr8Ryua6KjDq3QX7319b4C9YL8liKWqZW-nrdqLCgo__2doNbn-J30_piZCEmHAGI0ZYhLQ8oW_pHCUq-yJFbn7SMQ_y_Qmuk1HRMhDz9ScamH03Myu1yoc9SsQOPSKuHnqvn91caeCtBaTr82WvUgCEN79nkyfoNEmpbJ1GhTtxM2bz_GfY8OxUrT3l3r665LneZayV"
  },
  {
    id: "2",
    category: "Traditional Catering",
    name: "Katering Nusantara",
    rating: 4.8,
    reviews: 85,
    location: "Bandung",
    price: "Rp 85.000/pax",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlYZeus3-9PM1fP4ojnrPXB3tu2RXsnqMNfa9EtaOfnszdFZ-Kqb7WgsL1HDL687gA_1IlJZD8lhAuuiBBIuAuVtnzftTLZX0KsdwX68qKJ33j8H_ZMDrlu1Rnf09KoGGlDZfL3h_8N_iiZslLzJG6Tz3a9xyjy4AecDI_usBvpWreOJVFQKbmrUP9yeimhHiatUBAkgDNYUhZyM3Sw9QnbdoBIlw0XkKDSwsZ-Mpgtk5E8Imd5NpMz6NpomTwpnurm8TL5T0vhvOP"
  },
  {
    id: "3",
    category: "Rustic Decoration",
    name: "Griya Dekor",
    rating: 4.7,
    reviews: 56,
    location: "Tangerang",
    price: "Rp 25.000.000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA318tXusr_oGDqwB1BAn1QKh-PuKVOCS_yWBRq4JzUnXCrHWAKeUzLq7sgcbcHNi_qTtJDDmbbZqdJmzJ8120R29sTdEnTHw1NhpE_F67E5DLgPFTTJb90S7rn_tC7YOZgXMnq0sVZe4WhtphBN_7rB9c27kJ3-dGHsFUUhoFnMS4iJYMYnTkK9RFGANySqsE4OIE0GyCHM1aHm4bIXElv3Ib8g7PP8zV7yGEP_uHXLCgwqmAcu5AYFZmiCFP75eTWUR0gTqZfklLh"
  }
];

export default function FavoriteVendors() {
  return (
    <div className="bg-background-light text-[#171112] min-h-screen font-jakarta antialiased">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <Link href="/profile" className="text-[#171112] flex items-center justify-center size-10 rounded-full hover:bg-gray-100 transition-colors">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </Link>
          <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center mr-10">Vendor Favorit Saya</h1>
        </div>
        <div className="flex gap-3 px-4 pb-4 overflow-x-auto no-scrollbar max-w-md mx-auto">
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-wedding-primary text-white px-4 text-sm font-semibold shadow-sm">
            <span>Semua</span>
          </button>
          {["Catering", "Dekorasi", "Fotografi"].map((cat) => (
            <button key={cat} className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border border-gray-200 px-4 text-sm font-medium">
              <span>{cat}</span>
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-md mx-auto pb-24">
        <div className="p-4 space-y-4">
          {FAVORITE_VENDORS.map((vendor) => (
            <div key={vendor.id} className="group relative flex flex-col bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img src={vendor.image} alt={vendor.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <button className="absolute top-3 right-3 z-10 size-10 flex items-center justify-center bg-white/90 rounded-full shadow-lg text-wedding-primary">
                  <span className="material-symbols-outlined !fill-1">favorite</span>
                </button>
                <div className="absolute bottom-3 left-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined !text-[12px]">verified</span>
                  VERIFIED ESCROW
                </div>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-wedding-primary text-xs font-bold uppercase tracking-wider">{vendor.category}</p>
                    <h3 className="text-[#171112] dark:text-white text-lg font-bold mt-0.5">{vendor.name}</h3>
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                    <span className="material-symbols-outlined text-yellow-500 !text-[16px] !fill-1">star</span>
                    <span className="text-[#171112] text-xs font-bold">{vendor.rating}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 text-slate-500 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined !text-[16px]">location_on</span>
                    <span>{vendor.location} • {vendor.reviews} Ulasan</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-gray-500 font-bold">Mulai dari</span>
                    <span className="text-lg font-bold text-wedding-primary tracking-tight">{vendor.price}</span>
                  </div>
                  <button className="flex-1 h-11 bg-wedding-primary text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-all">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white/90 backdrop-blur-lg border-t border-gray-200 py-3 pb-8 z-50">
        <div className="max-w-md mx-auto flex justify-around items-center">
          <Link href="/home" className="flex flex-col items-center gap-1 text-gray-400">
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-medium">Beranda</span>
          </Link>
          <Link href="/vendors" className="flex flex-col items-center gap-1 text-gray-400">
            <span className="material-symbols-outlined">search</span>
            <span className="text-[10px] font-medium">Cari</span>
          </Link>
          <button className="flex flex-col items-center gap-1 text-wedding-primary">
            <span className="material-symbols-outlined !fill-1">favorite</span>
            <span className="text-[10px] font-bold">Wishlist</span>
          </button>
          <Link href="/orders" className="flex flex-col items-center gap-1 text-gray-400 relative">
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="text-[10px] font-medium">Pesanan</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center gap-1 text-gray-400">
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-medium">Profil</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
