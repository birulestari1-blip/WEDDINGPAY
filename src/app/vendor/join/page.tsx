import React from "react";
import Link from "next/link";

export default function VendorJoin() {
  return (
    <div className="bg-background-light text-slate-900 min-h-screen font-manrope antialiased">
      <header className="sticky top-0 z-50 flex items-center bg-white/90 backdrop-blur-md p-4 border-b border-gray-100 justify-between">
        <Link href="/" className="text-slate-900 flex size-10 shrink-0 items-center justify-center">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </Link>
        <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center">Gabung Vendor</h2>
        <div className="flex w-10 items-center justify-end">
          <button className="text-slate-900">
            <span className="material-symbols-outlined">help_outline</span>
          </button>
        </div>
      </header>

      <main className="pb-32">
        <div className="relative overflow-hidden">
          <div
            className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-6 pb-12"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.7) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBGqMJ50nmjNfzs_8VtMSAHrtBQ5n17OqTl86FkXIOm2P6NhosgIxhaONXHChqxGV5raEest-bvr7OjpX1PzmvDzCvGFnpmkWq11tPtaNGxLviIsWSWN_O9JfkRaPZU-b1-Q9faYvYvyJgT4G0AdCuoTNuq0Jki8vK09Lem3SaGA2Vno-cRkGnYjCTbDjuhMos8ETIC5EzkUtxkT55VZJ8s_ottdwHaF6gD9NPeZptaqpy0m2vQrWC8sgkMEG74xLHg7umk4PEsZ6uE')`,
            }}
          >
            <div className="flex flex-col gap-3 text-left">
              <div className="inline-flex items-center gap-2 bg-wedding-primary/20 backdrop-blur-md border border-wedding-primary/30 text-white text-xs font-bold px-3 py-1 rounded-full w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                TERSEDIA 3 DARI 10 SLOT EARLY BIRD
              </div>
              <h1 className="text-white text-4xl font-extrabold leading-tight tracking-tight">
                Dapatkan Order Tanpa Takut Tak Dibayar
              </h1>
              <p className="text-white/90 text-base font-medium leading-relaxed">
                Platform semi-escrow pertama di Indonesia khusus untuk ekosistem vendor pernikahan.
              </p>
            </div>
          </div>
        </div>

        <section className="px-6 py-10">
          <div className="flex flex-col gap-2 mb-8">
            <h2 className="text-slate-900 text-2xl font-extrabold tracking-tight">Mengapa WeddingPay?</h2>
            <p className="text-gray-500 text-sm">Fokus pada karya Anda, kami yang amankan finansialnya.</p>
          </div>
          <div className="grid gap-4">
            {[
              {
                title: "Kepastian Pembayaran",
                desc: "DP langsung cair ke rekening Anda. Pelunasan tersimpan aman di sistem escrow kami.",
                icon: "shield_with_heart",
              },
              {
                title: "Branding Premium",
                desc: "Tingkatkan konversi dengan badge 'Verified Vendor' yang membangun kepercayaan klien instan.",
                icon: "verified",
              },
              {
                title: "0% Komisi Early Bird",
                desc: "Gratis biaya pendaftaran dan potongan 0% khusus untuk 10 vendor pertama yang bergabung.",
                icon: "sell",
                special: true,
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className={`flex gap-4 rounded-xl border p-5 shadow-sm ${
                  benefit.special
                    ? "border-dashed border-wedding-primary/50 bg-wedding-primary/5"
                    : "border-gray-100 bg-white"
                }`}
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${benefit.special ? 'bg-wedding-primary text-white' : 'bg-wedding-primary/10 text-wedding-primary'}`}>
                  <span className="material-symbols-outlined text-3xl">{benefit.icon}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-slate-900 text-base font-bold">{benefit.title}</h3>
                  <p className="text-gray-500 text-sm leading-normal">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-6 bg-wedding-primary/5">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-end">
              <span className="text-sm font-bold text-wedding-primary uppercase tracking-wider">Kuota Early Bird</span>
              <span className="text-xs text-gray-500 font-medium">Sisa 3 slot lagi!</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div className="bg-wedding-primary h-full rounded-full" style={{ width: "70%" }}></div>
            </div>
            <p className="text-[11px] text-gray-400 text-center italic">Bergabung bersama 7 vendor ternama lainnya hari ini.</p>
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent z-50">
        <Link href="/vendor/kyc/verify" className="flex w-full items-center justify-center gap-3 bg-wedding-primary hover:bg-wedding-primary/90 text-white rounded-xl h-14 px-6 shadow-xl shadow-wedding-primary/20 transition-all active:scale-[0.98]">
          <span className="text-base font-extrabold tracking-wide uppercase">Daftar Sekarang - Gratis</span>
          <span className="material-symbols-outlined">trending_flat</span>
        </Link>
        <p className="text-center mt-3 text-[10px] text-gray-400">
          Tanpa biaya pendaftaran. Proses verifikasi kurang dari 24 jam.
        </p>
      </div>
    </div>
  );
}
