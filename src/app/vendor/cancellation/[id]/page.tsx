import React from "react";
import Link from "next/link";

export default async function VendorCancellationDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col bg-white font-manrope antialiased">
      <header className="sticky top-0 z-10 flex items-center justify-between bg-white p-4 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <Link href="/vendor" className="text-[#181211]">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-lg font-bold leading-tight tracking-tight">Detail Pembatalan</h1>
        </div>
        <button className="text-[#181211]">
          <span className="material-symbols-outlined">info</span>
        </button>
      </header>

      <main className="flex-1 overflow-y-auto pb-24">
        <div className="p-4">
          <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-wedding-primary/10 text-wedding-primary">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <div>
                <p className="text-[#181211] text-base font-bold leading-tight">Permintaan Refund Disetujui</p>
                <p className="text-sm text-slate-500">Order #WP-99210 • 12 Okt 2023</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm font-normal leading-relaxed">
              Pesanan ini telah dibatalkan oleh Pengantin. Dana telah diproses sesuai kebijakan semi-escrow WeddingPay.
            </p>
            <button className="flex w-full items-center justify-center gap-2 rounded-lg h-10 px-4 bg-wedding-primary text-white text-sm font-bold transition-all active:scale-95">
              <span className="material-symbols-outlined text-sm">policy</span>
              <span className="truncate">Cek Kebijakan Pembatalan</span>
            </button>
          </div>
        </div>

        <section className="px-4 py-2">
          <h3 className="text-[#181211] text-base font-bold leading-tight tracking-tight pb-3">Rincian Dana Akhir</h3>
          <div className="rounded-xl bg-slate-50 p-4 space-y-3">
            <div className="flex justify-between items-center text-sm">
              <p className="text-slate-500">Total Nilai Pesanan</p>
              <p className="text-[#181211] font-medium">Rp 15.000.000</p>
            </div>
            <div className="flex justify-between items-center text-sm">
              <p className="text-slate-500">Refund ke Pengantin</p>
              <p className="text-wedding-primary font-medium">- Rp 12.000.000</p>
            </div>
            <div className="flex justify-between items-center text-sm">
              <p className="text-slate-500">Potongan Layanan (5%)</p>
              <p className="text-wedding-primary font-medium">- Rp 150.000</p>
            </div>
            <div className="h-px bg-gray-200 my-1"></div>
            <div className="flex justify-between items-center">
              <p className="text-[#181211] font-bold">Kompensasi Vendor</p>
              <p className="text-green-600 font-bold">Rp 2.850.000</p>
            </div>
          </div>
          <p className="mt-2 text-[11px] text-slate-400 italic px-1">
            *Kompensasi dihitung berdasarkan H-30 pembatalan sesuai syarat & ketentuan.
          </p>
        </section>

        <section className="px-4 py-6">
          <h3 className="text-[#181211] text-base font-bold leading-tight tracking-tight pb-3">Alasan Pembatalan</h3>
          <div className="flex flex-col gap-2 p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <div className="size-6 rounded-full overflow-hidden bg-gray-200">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCREqr6lJju4yrr1ZMHZPsECCEhTC6sXd6-LRWNbnCp7GV4MbJgJRjVU9GQt5y3xqImi7WHIx6l58eXcacZ1GwSBfY0fXMKXAU6GfOOrnYR4lRbUKAlzptWVuqIvtMknx-ZhgdhqN-vL5iubAt5a42-nN4IrDlzxjz9kYUPCTVKMG740wFNDVoOesM1mV9w_ZfLGpLgJ1PY32TWH-kHH8tzKjZHCuevAHpOqTMBxQJ0c8_SZsm79lgn9J1sN_q8Q7pgcqzoakklvISs" alt="Siska" />
              </div>
              <span className="text-sm font-bold">Siska Amelia (Pengantin)</span>
            </div>
            <p className="text-sm text-[#181211] leading-relaxed italic text-slate-600">
              "Mohon maaf, terjadi perubahan jadwal mendadak dari pihak keluarga besar sehingga acara harus diundur tanpa kepastian tanggal baru. Kami sepakat mengikuti kebijakan refund yang berlaku."
            </p>
          </div>
        </section>
      </main>

      <footer className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white p-4 border-t border-gray-100 flex gap-3 pb-8">
        <button className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl border border-wedding-primary text-wedding-primary text-sm font-bold transition-all active:scale-95 bg-white">
          <span className="material-symbols-outlined text-lg">support</span>
          <span>Hubungi Support</span>
        </button>
        <Link href="/vendor" className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-wedding-primary text-white text-sm font-bold transition-all active:scale-95 shadow-lg shadow-wedding-primary/20">
          <span className="material-symbols-outlined text-lg">home</span>
          <span>Beranda Vendor</span>
        </Link>
      </footer>
    </div>
  );
}
