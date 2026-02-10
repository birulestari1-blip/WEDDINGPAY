import React from "react";
import Link from "next/link";

export default function VendorKYCVerify() {
  return (
    <div className="bg-background-light min-h-screen font-manrope antialiased">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="flex items-center p-4">
          <Link href="/vendor/join" className="text-slate-900 p-1">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          <h1 className="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-8">
            Verifikasi Identitas
          </h1>
        </div>
      </header>

      <main className="max-w-md mx-auto pb-32">
        <div className="px-6 py-6">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2"></div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-8 w-8 rounded-full flex items-center justify-center bg-wedding-primary text-white text-sm font-bold ring-4 ring-white">1</div>
              <span className="text-[10px] font-bold text-wedding-primary">KTP</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-8 w-8 rounded-full flex items-center justify-center bg-gray-200 text-gray-500 text-sm font-bold ring-4 ring-white">2</div>
              <span className="text-[10px] font-bold text-gray-400">Selfie</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-8 w-8 rounded-full flex items-center justify-center bg-gray-200 text-gray-500 text-sm font-bold ring-4 ring-white">3</div>
              <span className="text-[10px] font-bold text-gray-400">Legalitas</span>
            </div>
          </div>
        </div>

        <div className="px-4 space-y-6">
          <section>
            <h2 className="text-slate-900 text-2xl font-bold leading-tight">Lengkapi Profil Vendor</h2>
            <p className="text-gray-500 text-sm mt-2">Pastikan semua dokumen terlihat jelas untuk mempercepat proses verifikasi tim WeddingPay.</p>
          </section>

          <div className="bg-wedding-primary/5 border border-wedding-primary/20 rounded-xl p-4 flex gap-3">
            <span className="material-symbols-outlined text-wedding-primary">info</span>
            <div>
              <p className="text-sm font-semibold text-wedding-primary">Tips Verifikasi</p>
              <p className="text-xs text-wedding-primary/80 leading-relaxed">Hindari cahaya yang memantul pada kartu dan pastikan teks dapat terbaca dengan jelas.</p>
            </div>
          </div>

          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">1. Unggah Foto KTP</h3>
              <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded font-bold uppercase">Wajib</span>
            </div>
            <div className="border-2 border-dashed border-gray-300 rounded-xl bg-white p-8 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-wedding-primary transition-colors">
              <div className="bg-wedding-primary/10 p-4 rounded-full mb-3 group-hover:bg-wedding-primary/20 transition-colors">
                <span className="material-symbols-outlined text-wedding-primary text-3xl">add_a_photo</span>
              </div>
              <p className="text-sm font-bold text-slate-900">Ambil Foto KTP</p>
              <p className="text-xs text-gray-500 mt-1">Format JPG, PNG (Maks. 5MB)</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-100">
                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                <span className="text-[11px] text-gray-600">Pencahayaan Terang</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-100">
                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                <span className="text-[11px] text-gray-600">Teks Terbaca Jelas</span>
              </div>
            </div>
          </section>

          <section className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">2. Selfie dengan KTP</h3>
              <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded font-bold uppercase">Wajib</span>
            </div>
            <div className="flex gap-4 items-center p-4 bg-white rounded-xl border border-gray-100">
              <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  alt="Contoh Selfie"
                  className="w-full h-full object-cover opacity-60"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcb1KHWoSSKFIn2qc40FIgnARfBAUze1cAwIV2eOxHhD7Zw09vpnrPtddi-7KuKZ14LeeiudS_vouPBknz26Opn5abu6JKXWw0lo9K42oIpOMVLWrAw2ALjz5PW3ne_uhyM1ckrbXOluWvaDmPl2OiSZ7sztm4NUYp9r28zg_9S1RuSJw3kc-rYakfSgQ-6wk3a4mja9NAKrcgdpiFmOfsI17KFKktFxRneSg7K797QMd0AjAbINxZDNJcxnlac0mIFPpf-s83U4Wt"
                />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-gray-700">Panduan Selfie:</p>
                <ul className="text-[11px] text-gray-500 space-y-1 mt-1">
                  <li>• Wajah terlihat sepenuhnya</li>
                  <li>• KTP tidak menutupi wajah</li>
                  <li>• Tidak menggunakan kacamata hitam</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-100 p-4 pb-8">
        <div className="max-w-md mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-orange-500 text-sm">schedule</span>
            <p className="text-[11px] font-medium text-gray-500">Estimasi verifikasi: 1 x 24 jam kerja</p>
          </div>
          <button className="w-full bg-wedding-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-wedding-primary/20 transition-colors">
            Kirim Data Verifikasi
          </button>
        </div>
      </footer>
    </div>
  );
}
