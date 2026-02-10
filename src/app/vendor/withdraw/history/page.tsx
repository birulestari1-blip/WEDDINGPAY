import React from "react";
import Link from "next/link";

const HISTORY = [
  { id: 1, amount: "Rp 5.000.000", status: "Berhasil", bank: "BCA •••• 1234", date: "24 Okt 2023, 14:20", color: "green" },
  { id: 2, amount: "Rp 2.500.000", status: "Diproses", bank: "Mandiri •••• 5678", date: "23 Okt 2023, 09:15", color: "orange" },
  { id: 3, amount: "Rp 1.000.000", status: "Gagal", bank: "BNI •••• 9012", date: "20 Okt 2023, 11:45", color: "red" },
  { id: 4, amount: "Rp 7.200.000", status: "Berhasil", bank: "BCA •••• 1234", date: "15 Okt 2023, 16:00", color: "green" }
];

export default function WithdrawHistory() {
  return (
    <div className="bg-background-light min-h-screen font-manrope antialiased">
      <div className="max-w-[430px] mx-auto bg-white min-h-screen shadow-2xl flex flex-col relative overflow-x-hidden">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-gray-100">
          <div className="flex items-center gap-3">
            <Link href="/vendor/withdraw" className="p-1 -ml-1 text-[#111318]">
              <span className="material-symbols-outlined text-[24px]">arrow_back_ios</span>
            </Link>
            <h1 className="text-[#111318] text-lg font-bold leading-tight tracking-tight">Riwayat Penarikan</h1>
          </div>
          <button className="text-[#111318]">
            <span className="material-symbols-outlined">info</span>
          </button>
        </header>

        <main className="flex-1 px-4 py-4">
          <div className="bg-[#1152d4] rounded-xl p-6 text-white shadow-lg mb-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-sm">account_balance_wallet</span>
                <p className="text-white/80 text-sm font-medium">Saldo Tersedia</p>
              </div>
              <p className="text-3xl font-bold mb-6">Rp 15.500.000</p>
              <Link href="/vendor/withdraw" className="w-full bg-white text-[#1152d4] py-3 rounded-lg font-bold text-base flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-transform">
                <span className="material-symbols-outlined text-[20px]">payments</span>
                Tarik Dana Sekarang
              </Link>
            </div>
          </div>

          <h2 className="text-[#111318] text-xl font-bold mb-4">Riwayat Transaksi</h2>

          <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar">
            {["Semua", "Berhasil", "Diproses", "Gagal"].map((label, idx) => (
              <button key={label} className={`flex h-9 shrink-0 items-center justify-center px-4 rounded-full text-sm font-semibold ${idx === 0 ? 'bg-[#1152d4] text-white' : 'bg-gray-100 text-slate-500'}`}>
                {label}
              </button>
            ))}
          </div>

          <div className="space-y-3 pb-24">
            {HISTORY.map((item) => (
              <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-50 shadow-sm">
                <div className={`flex items-center justify-center rounded-lg shrink-0 size-12 ${item.color === 'green' ? 'bg-green-50 text-green-600' : item.color === 'orange' ? 'bg-orange-50 text-orange-600' : 'bg-red-50 text-red-600'}`}>
                  <span className="material-symbols-outlined">{item.color === 'orange' ? 'pending_actions' : item.color === 'red' ? 'error_outline' : 'account_balance'}</span>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start">
                    <p className="text-[#111318] text-base font-bold line-clamp-1">{item.amount}</p>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${item.color === 'green' ? 'bg-green-100 text-green-700' : item.color === 'orange' ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'}`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm font-medium">{item.bank}</p>
                  <p className="text-gray-400 text-xs mt-1">{item.date}</p>
                </div>
              </div>
            ))}

            <div className="pt-8 pb-4 text-center">
              <div className="flex items-center justify-center gap-1.5 text-gray-400 text-xs font-semibold uppercase tracking-widest">
                <span className="material-symbols-outlined text-[14px] !fill-1">verified_user</span>
                Secured by WeddingPay
              </div>
              <p className="text-[10px] text-gray-400 mt-1">Lisensi Fintech Terdaftar OJK</p>
            </div>
          </div>
        </main>

        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white/90 backdrop-blur-lg border-t border-gray-100 px-6 py-3 flex justify-between items-center z-50 pb-8">
          <Link href="/vendor" className="flex flex-col items-center gap-1 text-gray-400">
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-medium">Beranda</span>
          </Link>
          <Link href="/vendor/projects" className="flex flex-col items-center gap-1 text-gray-400">
            <span className="material-symbols-outlined">assignment</span>
            <span className="text-[10px] font-medium">Pesanan</span>
          </Link>
          <Link href="/vendor/withdraw/history" className="flex flex-col items-center gap-1 text-[#1152d4]">
            <span className="material-symbols-outlined !fill-1">account_balance_wallet</span>
            <span className="text-[10px] font-bold">Dompet</span>
          </Link>
          <Link href="/vendor/profile" className="flex flex-col items-center gap-1 text-gray-400">
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-medium">Profil</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
