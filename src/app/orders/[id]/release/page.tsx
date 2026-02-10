import React from "react";
import Link from "next/link";

export default async function FundReleasePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="bg-background-light dark:bg-background-dark font-manrope text-slate-900 dark:text-slate-100 min-h-screen antialiased">
      <div className="relative mx-auto min-h-screen max-w-[430px] bg-white dark:bg-background-dark flex flex-col shadow-2xl">
        {/* Top App Bar */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center p-4 justify-between h-16">
            <Link href="/orders" className="text-[#111318] dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <span className="material-symbols-outlined">arrow_back_ios_new</span>
            </Link>
            <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
              Konfirmasi Pelepasan
            </h2>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto pb-48">
          {/* Vendor Info Card */}
          <div className="p-4">
            <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14 shrink-0 border-2 border-white dark:border-gray-700 shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAlnOCcL3I7wZrITT7EcSlcypvp__y6eLgHC6u8cJis_HwRE4pbx1pP_6buSuCybHN1rY7J7EJkVzu69QeLIrTOa3fQieJpuc0H8CIAS1PR3SdvS68guTG-88wCI68P-6Cl7VsTg7KPIxI893wMF6YAon9QtmQFxf32vZGfCd2_Ic2fQ_dTyvRCWcL7A-QTDhZcLZQAP9DVhNNw98bp80TNVrCV4bzad_U5R_CfGh_qGDlEy-MXsi0x-NCeUnzEyMfh5JKn44r9bzSH')" }}></div>
              <div className="flex flex-col justify-center flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="text-[#111318] dark:text-white text-base font-bold leading-normal line-clamp-1">
                    Catering Berkah
                  </p>
                  <span className="material-symbols-outlined text-blue-500 text-xs fill-1">
                    verified
                  </span>
                </div>
                <p className="text-[#616f89] dark:text-gray-400 text-sm font-medium leading-normal line-clamp-1">
                  Kategori: Catering Layanan Penuh
                </p>
              </div>
              <div className="shrink-0">
                <div className="flex size-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <div className="size-2.5 rounded-full bg-[#07883b]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Milestone Details */}
          <section className="px-4 py-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-wedding-blue text-xl">
                flag
              </span>
              <h3 className="text-[#111318] dark:text-white text-lg font-bold tracking-tight">
                Milestone yang Diajukan
              </h3>
            </div>
            <div className="bg-wedding-blue/5 dark:bg-wedding-blue/10 border border-wedding-blue/20 p-4 rounded-xl">
              <p className="text-[#111318] dark:text-white text-lg font-semibold leading-normal">
                Penyusunan Menu & Test Food
              </p>
              <p className="text-[#616f89] dark:text-gray-400 text-sm mt-1">
                Tahap ke-2 dari 4 tahap pembayaran
              </p>
            </div>
          </section>

          {/* Work Evidence Gallery */}
          <section className="mt-6">
            <div className="px-4 flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-wedding-blue text-xl">
                  photo_library
                </span>
                <h3 className="text-[#111318] dark:text-white text-lg font-bold tracking-tight">
                  Bukti Kerja Vendor
                </h3>
              </div>
              <span className="text-wedding-blue text-sm font-bold cursor-pointer">Lihat Semua</span>
            </div>
            <div className="flex gap-3 overflow-x-auto px-4 hide-scrollbar snap-x">
              {[1, 2, 3].map((i) => (
                <div key={i} className="snap-start shrink-0">
                  <div className="w-48 h-64 rounded-xl bg-slate-100 dark:bg-slate-800 border border-gray-100 dark:border-gray-800 shadow-sm"></div>
                </div>
              ))}
            </div>
            <div className="px-4 mt-3">
              <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-900/30 p-3 rounded-lg border border-dashed border-gray-200 dark:border-gray-700">
                <span className="material-symbols-outlined text-gray-400">
                  description
                </span>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed italic">
                  "Menu final telah disepakati oleh klien melalui sesi test food
                  pada 24 Okt 2023. Terlampir foto penyajian standar untuk hari
                  H."
                </p>
              </div>
            </div>
          </section>

          {/* Payment Summary Card */}
          <section className="px-4 mt-8">
            <div className="bg-white dark:bg-gray-900 border-2 border-wedding-blue/10 rounded-2xl p-5 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[#616f89] dark:text-gray-400 font-medium text-sm">
                  Nominal Pelepasan
                </span>
                <span className="bg-wedding-blue/10 text-wedding-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Escrow Secure
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-[#111318] dark:text-white text-xl font-bold">
                  Rp
                </span>
                <span className="text-[#111318] dark:text-white text-4xl font-extrabold tracking-tight">
                  5.000.000
                </span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-sm">
                <span className="text-gray-500">Biaya Layanan (Termasuk)</span>
                <span className="text-gray-900 dark:text-white font-semibold">
                  Rp 25.000
                </span>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="px-6 py-8">
            <div className="flex gap-3 items-start bg-orange-50 dark:bg-orange-900/10 p-4 rounded-xl border border-orange-100 dark:border-orange-900/30">
              <span className="material-symbols-outlined text-orange-500 text-xl shrink-0">
                warning
              </span>
              <p className="text-[13px] text-orange-800 dark:text-orange-300 leading-relaxed">
                <span className="font-bold">Peringatan:</span> Dengan
                menyetujui, dana akan segera ditransfer ke vendor. Tindakan ini{" "}
                <span className="underline">tidak dapat dibatalkan</span>.
                Pastikan Anda sudah puas dengan hasil kerja.
              </p>
            </div>
          </section>
        </main>

        {/* Fixed Action Bottom Bar */}
        <div className="fixed bottom-0 w-full max-w-[430px] bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 p-4 pb-8 flex flex-col gap-3">
          <button className="w-full bg-wedding-blue hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-wedding-blue/20 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">payments</span>
            Setujui &amp; Lepaskan Dana
          </button>
          <button className="w-full bg-white dark:bg-transparent border border-gray-200 dark:border-gray-700 text-red-500 dark:text-red-400 font-bold py-3.5 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">report</span>
            Ajukan Keberatan
          </button>
          <div className="mx-auto w-32 h-1 bg-gray-200 dark:bg-gray-800 rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
}
