import React from "react";
import Link from "next/link";

export default async function OrderReminder({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="max-w-md mx-auto min-h-screen bg-background-light flex flex-col relative overflow-hidden font-manrope antialiased">
      <header className="flex items-center bg-white/50 backdrop-blur-md sticky top-0 z-50 p-4 justify-between border-b border-gray-100">
        <Link href={`/orders/${id}`} className="text-[#181112] flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
          <span className="material-symbols-outlined">chevron_left</span>
        </Link>
        <h2 className="text-[#181112] text-lg font-bold leading-tight tracking-tight flex-1 text-center">Pengingat Pembayaran</h2>
        <div className="flex size-10 items-center justify-end">
          <span className="material-symbols-outlined text-[#181112]">more_horiz</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col p-4">
        <div className="flex flex-col items-center mt-6 mb-8 text-center">
          <div className="relative mb-4">
            <div className="size-20 bg-gradient-to-br from-[#E0C3B1] to-[#F5EBE6] rounded-full flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-white text-4xl !fill-1">notifications_active</span>
            </div>
            <div className="absolute -top-1 -right-1 bg-wedding-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-background-light uppercase">
              URGENT
            </div>
          </div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-wedding-primary/10 text-wedding-primary text-sm font-bold mb-3">
            <span className="material-symbols-outlined text-sm mr-1">calendar_today</span>
            H-14 Menuju Pernikahan
          </div>
          <h3 className="text-2xl font-bold leading-tight mb-2 px-4">Pernikahan Anda semakin dekat!</h3>
          <p className="text-gray-600 text-base leading-relaxed px-6">
            Segera lakukan pelunasan agar dana tetap aman di Escrow dan persiapan vendor berjalan lancar.
          </p>
        </div>

        <div className="mb-8 px-2">
          <div className="w-full h-48 bg-center bg-no-repeat bg-cover rounded-xl shadow-md" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCS4Yygmxo-M9wmuDVRnSPrPjd3gDJyOMu6FDD2Rl8W5m7dzAaJzSEC8bZ3WKOSxqHBNL6nqbqH3rgZHCAHIGXvaGQ3oOS-gD9-mfg9WR1eWHoL5kxMDv9JZYlGbXQRs9RZbsRdcp4U7VmkNIerO77OZdZZi6lxrdDBpUdYjNyRTYEORzAsepdijBUj-H-8WUGOTCvAxaSsj1rI1xCAmgN8jW-pGUa6VGW_arrZQCE_2aDxeqyL4aHXvMTbYfciSx_8TFKO5v1R4Dy8')" }}></div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-50">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Nama Vendor</p>
              <p className="text-lg font-bold text-[#181112]">Signature Catering</p>
            </div>
            <div className="size-12 rounded-lg bg-[#F5EBE6] flex items-center justify-center text-[#B76E79]">
              <span className="material-symbols-outlined">restaurant</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">Sisa Tagihan</span>
              <span className="text-xl font-bold text-wedding-primary">Rp 24.500.000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">Tanggal Jatuh Tempo</span>
              <div className="flex items-center text-sm font-semibold text-gray-700">
                <span className="material-symbols-outlined text-sm mr-1">event</span>
                14 Oktober 2024
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">Metode</span>
              <span className="text-sm font-semibold">WeddingPay Escrow</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mb-8 bg-gray-50 py-3 rounded-lg border border-dashed border-gray-200">
          <span className="material-symbols-outlined text-green-600 text-lg">verified_user</span>
          <span className="text-xs text-gray-500 font-medium">Dana Anda dilindungi sistem Escrow aman.</span>
        </div>
      </main>

      <div className="sticky bottom-0 bg-white/80 backdrop-blur-xl p-6 pb-12 border-t border-gray-100 flex flex-col gap-3">
        <button className="w-full bg-wedding-primary hover:bg-wedding-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-wedding-primary/20 transition-all flex items-center justify-center gap-2 active:scale-95">
          <span className="material-symbols-outlined">payments</span>
          Bayar Sekarang
        </button>
        <button className="w-full bg-transparent border-2 border-gray-200 text-[#181112] py-4 rounded-xl font-bold text-base hover:bg-gray-50 transition-all flex items-center justify-center gap-2 active:scale-95">
          <span className="material-symbols-outlined text-gray-500">chat_bubble</span>
          Hubungi Vendor
        </button>
      </div>

      <div className="absolute top-20 -right-20 w-64 h-64 bg-[#E0C3B1]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-40 -left-20 w-64 h-64 bg-wedding-primary/5 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
}
