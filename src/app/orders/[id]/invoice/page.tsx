import React from "react";
import Link from "next/link";

export default async function OrderInvoice({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="bg-background-light text-[#171112] min-h-screen font-jakarta antialiased">
      <div className="sticky top-0 z-50 flex items-center bg-white/80 backdrop-blur-md p-4 justify-between border-b border-[#e5dcdd]">
        <div className="flex items-center gap-2">
          <Link href={`/orders/${id}`} className="text-[#171112] flex size-10 shrink-0 items-center justify-center cursor-pointer">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          <h2 className="text-[#171112] text-lg font-bold leading-tight tracking-tight">Invoice</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <span className="material-symbols-outlined text-[#171112]">print</span>
          </button>
        </div>
      </div>

      <div className="p-4 pb-32 max-w-md mx-auto">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-[#e5dcdd]">
          <div className="p-6 border-b border-dashed border-[#e5dcdd] relative">
            <div className="flex justify-between items-start mb-6">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="bg-wedding-primary p-1.5 rounded-lg">
                    <span className="material-symbols-outlined text-white text-xl !fill-1">favorite</span>
                  </div>
                  <span className="font-bold text-xl tracking-tight">WeddingPay</span>
                </div>
                <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">Official Receipt</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-bold border border-green-200 uppercase tracking-wider">
                  Lunas
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Nomor Invoice</p>
                <p className="text-sm font-semibold">INV/2023/WP/0812</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Tanggal Transaksi</p>
                <p className="text-sm font-semibold">12 Okt 2023, 14:30</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-slate-50">
            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter mb-3">Informasi Vendor</p>
            <div className="flex items-center gap-4">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-12 border border-[#e5dcdd]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0UgsiTFsnfQkGe8eTjQqFsmlDhss2URIlBOKWzm3SvJiGK5JJtzsYMGVL6VlTPQ4LqtgX9p4qw_fN2PbuBRR0Yg20ZsCJ1_fu3vJ4guh_cbloI1Q5XGll_rlBys7BP25S_lziDQQEzcfLLwpokDHqW1KHO8hGC9EvUDzNcgj9p6AI0ehGkCelcp_qeTKEMriS7Dndw3dwPxVs-v8I9eiYXjMegxBbISGAWyUHbP7wRoGGnVAv9niJ_65m2JUsHVii0cxZEKzmDHnB')" }}></div>
              <div className="flex flex-col">
                <p className="text-[#171112] text-base font-bold leading-tight">Glow Decoration</p>
                <p className="text-slate-500 text-xs">P dekorasi & Florist • Jakarta</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter mb-4">Rincian Pembayaran</p>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-4">
                  <p className="text-sm font-semibold text-[#171112]">DP 30% Paket Dekorasi Pernikahan</p>
                  <p className="text-xs text-slate-500">Wedding Package Gold (Januari 2024)</p>
                </div>
                <p className="text-sm font-medium text-[#171112] shrink-0">Rp 5.000.000</p>
              </div>
              <div className="h-px bg-gray-100"></div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <p className="text-slate-500">Subtotal</p>
                  <p className="font-medium">Rp 5.000.000</p>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <p className="text-slate-500">Biaya Layanan Platform</p>
                  <p className="font-medium text-wedding-primary">+ Rp 10.000</p>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <p className="text-slate-500">Metode: Bank Transfer (VA)</p>
                  <p className="font-medium">BNI Virtual Account</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t-2 border-[#171112]">
                <div className="flex justify-between items-center">
                  <p className="text-base font-bold">Total Pembayaran</p>
                  <p className="text-xl font-extrabold text-wedding-primary">Rp 5.010.000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-background-light border-t border-[#e5dcdd] flex flex-col items-center gap-4">
            <div className="bg-white p-2 rounded-lg shadow-sm border border-[#e5dcdd]">
              <div className="size-24 bg-center bg-no-repeat bg-cover opacity-80" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyNQwiVBU4487NUVMZkJ_6pw9fYyjobABg4Mg7I3X9syOleR_H6Oj8WAX0mJ4VoCjhRT4NcnLV80l2aNtnIr2CABeKX5PWAIRa6kxUO31onmxIZIBQQMQ24AE-0AFRlLCJ__qHDVtvfdKQvCtkCuHAclIVTQ8Y_dTo7ObWlCHqVo89sj8_sWkxEjdOOQZT8EV9Bs2gjVtRXJtQHvfSAPv_9hjc6S6Z-ue5df-5vjpr9uPE2rx6fKQEcnYBoifZ-97JIH2kYo1PIsZ7')" }}></div>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Dokumen Sah WeddingPay</p>
              <p className="text-[10px] text-slate-500 mt-1 max-w-[200px] leading-tight">Gunakan QR Code di atas untuk memvalidasi keaslian invoice ini melalui aplikasi resmi WeddingPay.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-start gap-3 p-4 bg-wedding-primary/5 rounded-xl border border-wedding-primary/10">
          <span className="material-symbols-outlined text-wedding-primary text-xl">verified_user</span>
          <div>
            <p className="text-xs font-bold text-wedding-primary uppercase tracking-tight">Transaksi Terlindungi</p>
            <p className="text-xs text-slate-600 mt-1 leading-normal">
              Pembayaran ini disimpan di rekening bersama WeddingPay (Semi-Escrow) dan akan dilepaskan ke vendor sesuai kesepakatan termin.
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-[#e5dcdd] flex gap-3 max-w-md mx-auto pb-8">
        <button className="flex-1 h-12 bg-wedding-primary text-white rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-wedding-primary/20 flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">download</span>
          <span>Unduh PDF</span>
        </button>
        <button className="flex size-12 items-center justify-center bg-white border border-[#e5dcdd] text-[#171112] rounded-xl transition-all active:scale-95">
          <span className="material-symbols-outlined">share</span>
        </button>
      </div>
    </div>
  );
}
