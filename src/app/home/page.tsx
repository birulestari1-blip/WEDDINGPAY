import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background-light text-wedding-navy antialiased font-plus-jakarta">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-white shadow-2xl">
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
          <div className="flex items-center justify-between px-5 pt-6 pb-4">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-wedding-accent">
                WeddingPay
              </span>
              <h1 className="text-xl font-bold text-wedding-navy flex items-center gap-1">
                Marketplace{" "}
                <span className="material-symbols-outlined text-blue-500 text-lg">
                  verified
                </span>
              </h1>
            </div>
            <div className="flex gap-3">
              <button className="size-10 flex items-center justify-center rounded-full bg-gray-50 border border-gray-100">
                <span className="material-symbols-outlined text-wedding-navy">
                  notifications
                </span>
              </button>
              <Link href="/auth/login" className="size-10 flex items-center justify-center rounded-full bg-gray-50 border border-gray-100">
                <span className="material-symbols-outlined text-wedding-navy">
                  person
                </span>
              </Link>
            </div>
          </div>
          <div className="px-5 pb-4">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                search
              </span>
              <input
                className="w-full bg-gray-50 border-none rounded-xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-wedding-navy/5"
                placeholder="Cari vendor yang terverifikasi..."
                type="text"
              />
            </div>
          </div>
        </header>

        <main className="flex-1 pb-24">
          <section className="px-5 py-4">
            <div className="bg-gradient-to-br from-wedding-navy to-wedding-primary rounded-3xl p-6 text-white relative overflow-hidden shadow-xl shadow-wedding-navy/20">
              <div className="absolute -right-4 -top-4 w-32 h-32 bg-white/5 rounded-full"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-4">
                  <span className="material-symbols-outlined text-sm">
                    shield_with_heart
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    Garansi Transaksi Aman
                  </span>
                </div>
                <h2 className="text-2xl font-bold leading-tight mb-2">
                  Pernikahan Aman 100% dengan Sistem Semi-Escrow
                </h2>
                <p className="text-white/80 text-xs leading-relaxed mb-6">
                  Dana Anda hanya diteruskan ke vendor setelah Anda menyetujui
                  progres pekerjaan.
                </p>
                <button className="bg-white text-wedding-navy font-bold text-sm px-6 py-2.5 rounded-full flex items-center gap-2">
                  Pelajari Selengkapnya
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </section>

          <section className="px-5 py-8 bg-gray-50/50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-wedding-navy">
                Cara Kerja WeddingPay
              </h3>
              <span className="material-symbols-outlined text-wedding-navy/40">
                info
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-3 border border-gray-100">
                  <span className="material-symbols-outlined text-wedding-accent">
                    payments
                  </span>
                </div>
                <p className="text-[10px] font-bold text-wedding-navy mb-1 uppercase tracking-tight">
                  1. Booking
                </p>
                <p className="text-[9px] text-gray-500 leading-tight">
                  Bayar via sistem aman kami
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-3 border border-gray-100">
                  <span className="material-symbols-outlined text-blue-600">
                    verified_user
                  </span>
                </div>
                <p className="text-[10px] font-bold text-wedding-navy mb-1 uppercase tracking-tight">
                  2. Pantau
                </p>
                <p className="text-[9px] text-gray-500 leading-tight">
                  Dana ditahan di escrow
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-3 border border-gray-100">
                  <span className="material-symbols-outlined text-green-600">
                    task_alt
                  </span>
                </div>
                <p className="text-[10px] font-bold text-wedding-navy mb-1 uppercase tracking-tight">
                  3. Selesai
                </p>
                <p className="text-[9px] text-gray-500 leading-tight">
                  Vendor dibayar saat beres
                </p>
              </div>
            </div>
          </section>

          <section className="px-5 py-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-wedding-navy">
                Vendor Terpercaya
              </h3>
              <a className="text-sm font-semibold text-wedding-accent" href="#">
                Lihat Semua
              </a>
            </div>
            <div className="space-y-6">
              {[
                {
                  id: 1,
                  name: "Lumina Grand Ballroom - Jakarta",
                  type: "Venue & Catering • 500 Pax",
                  price: "Rp 125.000.000",
                  rating: "4.9",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3hgz1jU6FzQHZctbKWUnlaVy_7fN70HTieab4RxOhJ7nSkiXUDUNjFv4-FY-Vl-jKi9vcV_IRwCJX1MIG4YaSkTxMqWv0ZfdwVyLU84chxlFIvNvB2k3DTkNzs2APwSx9nEl94Kf22I5Mcat5gx862wP_KHMer3GWCYKWv8tTE2nquI_udnYtJA46cVuTrA7ye1PcNk6JC8UnXMlqMAqyeqcx0smxZdUEwvxgfe3VUDX2OW3P_eJR_slKMs4WdkWJKU3nScDmQ_tO"
                },
                {
                  id: 2,
                  name: "Rustic Dream Decoration",
                  type: "Decoration • Full Package",
                  price: "Rp 45.000.000",
                  rating: "4.8",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdoXW2QehmrvUx_4l3b5DqXmEX-FoZ7UAVReTGpzFc3kJSnLOBwkS02yBa4BD7gTHOrse06JVvWdfj_E5Tb186W-vtKftceDAhiNWZFoXGWDZfhsAJ0uKLYsp52LUlk1_wZl7DHe0F2pFOplHUtQj0IxTPArHLj_2P5nBYOSRO9pSBp5bGPXurTqqlE0afk3i9Z4plz7krykjIdlRuGTOLSl1UmsOaUyCEvMOKCrh0kjFAcwUyMTi4gkXdAHrRujugeBFslHoNm2rx"
                }
              ].map((vendor) => (
                <div key={vendor.id} className="group">
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-3">
                    <img
                      alt={vendor.name}
                      className="w-full h-full object-cover"
                      src={vendor.image}
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur shadow-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs text-yellow-500 fill-1">
                        star
                      </span>
                      <span className="text-xs font-bold">{vendor.rating}</span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-wedding-navy text-white px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-xs">
                        verified
                      </span>
                      TERVERIFIKASI
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-bold text-wedding-navy">
                      {vendor.name}
                    </h4>
                    <p className="text-xs text-gray-500">{vendor.type}</p>
                    <div className="mt-2 flex items-end justify-between">
                      <div>
                        <div className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded inline-block mb-1">
                          SUDAH TERMASUK BIAYA PROTEKSI
                        </div>
                        <div className="text-lg font-extrabold text-wedding-navy">
                          {vendor.price}
                        </div>
                      </div>
                      <button className="bg-gray-100 p-2 rounded-xl">
                        <span className="material-symbols-outlined text-wedding-navy">
                          favorite
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-5 p-6 bg-wedding-navy rounded-3xl text-center">
            <span className="material-symbols-outlined text-4xl text-blue-400 mb-4">
              gpp_good
            </span>
            <h4 className="text-white font-bold text-lg mb-2">
              Transparansi Tanpa Biaya Tersembunyi
            </h4>
            <p className="text-white/60 text-xs leading-relaxed mb-6">
              Semua harga yang ditampilkan adalah harga final, termasuk proteksi
              transaksi dan pajak.
            </p>
            <div className="flex justify-center items-center gap-4 border-t border-white/10 pt-6">
              <div className="flex flex-col items-center">
                <span className="text-white font-bold text-sm">2.4k+</span>
                <span className="text-white/40 text-[9px] uppercase font-bold tracking-widest">
                  Client
                </span>
              </div>
              <div className="w-[1px] h-8 bg-white/10"></div>
              <div className="flex flex-col items-center">
                <span className="text-white font-bold text-sm">1.2k+</span>
                <span className="text-white/40 text-[9px] uppercase font-bold tracking-widest">
                  Vendor
                </span>
              </div>
              <div className="w-[1px] h-8 bg-white/10"></div>
              <div className="flex flex-col items-center">
                <span className="text-white font-bold text-sm">100%</span>
                <span className="text-white/40 text-[9px] uppercase font-bold tracking-widest">
                  Secure
                </span>
              </div>
            </div>
          </section>
        </main>

        <nav className="fixed bottom-0 w-full max-w-md bg-white border-t border-gray-100 px-6 py-3 pb-8 flex justify-between items-center z-[60]">
          <Link href="/home" className="flex flex-col items-center gap-1 text-wedding-navy">
            <span className="material-symbols-outlined fill-1">home</span>
            <span className="text-[10px] font-bold">Beranda</span>
          </Link>
          <Link href="/vendors" className="flex flex-col items-center gap-1 text-gray-400">
            <span className="material-symbols-outlined">explore</span>
            <span className="text-[10px] font-medium">Eksplor</span>
          </Link>
          <Link href="/orders" className="flex flex-col items-center gap-1 text-gray-400">
            <span className="material-symbols-outlined">receipt_long</span>
            <span className="text-[10px] font-medium">Transaksi</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center gap-1 text-gray-400">
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-medium">Akun</span>
          </Link>
        </nav>
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md flex justify-center pb-2 pointer-events-none z-[70]">
          <div className="w-32 h-1.5 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
