import React from "react";
import Link from "next/link";

export default function VendorFilter() {
  return (
    <div className="bg-background-light text-[#181112] min-h-screen font-jakarta antialiased">
      <div className="relative flex min-h-screen w-full flex-col justify-end overflow-x-hidden">
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="relative z-10 flex flex-col items-stretch bg-white rounded-t-[2rem] shadow-2xl max-h-[92vh] overflow-hidden">
          <button className="flex h-6 w-full items-center justify-center pt-2">
            <div className="h-1.5 w-12 rounded-full bg-[#e5dcdd]"></div>
          </button>

          <div className="flex items-center bg-white p-4 pb-2 justify-between border-b border-gray-100">
            <div className="flex w-12 items-center justify-start">
              <Link href="/vendors" className="text-[#181112]">
                <span className="material-symbols-outlined">close</span>
              </Link>
            </div>
            <h2 className="text-[#181112] text-lg font-bold leading-tight tracking-tight flex-1 text-center">Filter Pencarian</h2>
            <div className="flex w-12 items-center justify-end">
              <button className="text-wedding-primary text-sm font-bold leading-normal tracking-tight shrink-0">Reset</button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto pb-32">
            <div className="px-4 pt-6">
              <h3 className="text-[#181112] text-base font-bold leading-tight mb-4">Kategori Vendor</h3>
              <div className="flex flex-wrap gap-2">
                <div className="px-4 py-2 rounded-full bg-wedding-primary text-white text-sm font-semibold border border-wedding-primary">Semua</div>
                {["Catering", "Fotografi", "MUA", "Venue", "Dekorasi"].map((cat) => (
                  <div key={cat} className="px-4 py-2 rounded-full bg-white text-gray-700 text-sm font-medium border border-gray-200">{cat}</div>
                ))}
              </div>
            </div>

            <div className="px-4 pt-8">
              <div className="flex justify-between items-end mb-6">
                <h3 className="text-[#181112] text-base font-bold leading-tight">Rentang Harga</h3>
                <p className="text-wedding-primary text-sm font-semibold">Rp 5jt - 50jt+</p>
              </div>
              <div className="relative flex w-full flex-col items-start justify-between gap-3 px-2">
                <div className="flex h-[38px] w-full pt-1.5">
                  <div className="flex h-1.5 w-full rounded-full bg-[#e5dcdd] items-center relative">
                    <div className="absolute left-[20%] right-[30%] h-1.5 bg-wedding-primary"></div>
                    <div className="absolute left-[20%] -translate-x-1/2 flex flex-col items-center gap-1">
                      <div className="size-6 rounded-full bg-white border-2 border-wedding-primary shadow-md"></div>
                    </div>
                    <div className="absolute right-[30%] translate-x-1/2 flex flex-col items-center gap-1">
                      <div className="size-6 rounded-full bg-white border-2 border-wedding-primary shadow-md"></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between w-full mt-2 text-xs font-medium text-gray-400">
                  <span>IDR 0</span>
                  <span>IDR 100jt+</span>
                </div>
              </div>
            </div>

            <div className="px-4 pt-8">
              <h3 className="text-[#181112] text-base font-bold leading-tight mb-4">Tanggal Tersedia</h3>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <span className="material-symbols-outlined text-wedding-primary">calendar_month</span>
                <div className="flex-1">
                  <p className="text-xs text-gray-500">Pilih Tanggal Pernikahan</p>
                  <p className="text-sm font-semibold">12 September 2024</p>
                </div>
                <span className="material-symbols-outlined text-gray-400">chevron_right</span>
              </div>
            </div>

            <div className="px-4 pt-8">
              <h3 className="text-[#181112] text-base font-bold leading-tight mb-4">Lokasi</h3>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <span className="material-symbols-outlined text-wedding-primary">location_on</span>
                <div className="flex-1">
                  <p className="text-xs text-gray-500">Kota atau Provinsi</p>
                  <p className="text-sm font-semibold">Jakarta Selatan, DKI Jakarta</p>
                </div>
                <span className="material-symbols-outlined text-gray-400">expand_more</span>
              </div>
            </div>

            <div className="px-4 pt-8">
              <h3 className="text-[#181112] text-base font-bold leading-tight mb-4">Rating Minimum</h3>
              <div className="flex gap-2">
                {[3.0, 4.0, 4.5].map((rating) => (
                  <button key={rating} className={`flex-1 py-2.5 px-3 rounded-lg border text-sm font-medium flex items-center justify-center gap-1 ${rating === 4.0 ? 'border-2 border-wedding-primary bg-wedding-primary/10 text-wedding-primary font-bold' : 'border-gray-200 text-gray-700'}`}>
                    <span className="material-symbols-outlined text-sm !fill-1">star</span> {rating}+
                  </button>
                ))}
              </div>
            </div>

            <div className="px-4 pt-8">
              <div className="flex items-center justify-between p-4 bg-wedding-primary/5 rounded-xl border border-wedding-primary/20">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-wedding-primary/10 flex items-center justify-center text-wedding-primary">
                    <span className="material-symbols-outlined">verified_user</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#181112]">Vendor Escrow Saja</h4>
                    <p className="text-[10px] text-gray-500 leading-tight">Transaksi aman & terjamin oleh WeddingPay</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-wedding-primary"></div>
                </label>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent">
            <button className="w-full bg-wedding-primary hover:bg-wedding-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-wedding-primary/20 transition-all flex items-center justify-center gap-2">
              Tampilkan 124 Vendor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
