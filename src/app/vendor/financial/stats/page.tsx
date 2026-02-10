import React from "react";

export default function VendorStats() {
  return (
    <div className="bg-background-light text-slate-900 min-h-screen font-manrope">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md p-4 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-3">
          <button className="text-slate-900 flex size-10 items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer transition-colors">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <h1 className="text-slate-900 text-lg font-bold leading-tight tracking-tight">Statistik Performa</h1>
        </div>
        <div className="flex size-10 items-center justify-end">
          <button className="flex cursor-pointer items-center justify-center rounded-full text-slate-900 hover:bg-gray-100 p-2 transition-colors">
            <span className="material-symbols-outlined">calendar_today</span>
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto flex flex-col pb-24">
        <div className="flex flex-wrap gap-3 p-4">
          <div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-xl p-5 bg-wedding-primary text-white shadow-lg shadow-wedding-primary/20">
            <div className="flex items-center justify-between mb-1">
              <p className="text-white/80 text-xs font-medium uppercase tracking-wider">Total Pendapatan</p>
              <span className="material-symbols-outlined text-white/60 text-lg">account_balance_wallet</span>
            </div>
            <p className="tracking-tight text-xl font-extrabold leading-tight">Rp 150.000.000</p>
            <div className="flex items-center gap-1 mt-2">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <p className="text-[13px] font-semibold text-emerald-500 bg-white px-1.5 py-0.5 rounded text-xs">+12.5%</p>
            </div>
          </div>
          <div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-xl p-5 bg-[#f0f2f4] border border-gray-100">
            <div className="flex items-center justify-between mb-1">
              <p className="text-[#616f89] text-xs font-medium uppercase tracking-wider">Pernikahan Selesai</p>
              <span className="material-symbols-outlined text-[#616f89] text-lg">event_available</span>
            </div>
            <p className="text-slate-900 tracking-tight text-2xl font-bold leading-tight">24</p>
            <div className="flex items-center gap-1 mt-2">
              <span className="material-symbols-outlined text-emerald-500 text-sm">trending_up</span>
              <p className="text-emerald-500 text-[13px] font-bold">+4%</p>
            </div>
          </div>
        </div>

        <div className="px-4 py-2">
          <div className="flex h-11 flex-1 items-center justify-center rounded-xl bg-gray-100 p-1">
            <button className="flex-1 py-2 text-sm font-semibold rounded-lg bg-white text-wedding-primary shadow-sm">30 Hari</button>
            <button className="flex-1 py-2 text-sm font-semibold text-gray-500">6 Bulan</button>
            <button className="flex-1 py-2 text-sm font-semibold text-gray-500">1 Tahun</button>
          </div>
        </div>

        <div className="px-4 py-4">
          <div className="flex flex-col gap-2 rounded-xl border border-gray-100 p-5 bg-white shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[#616f89] text-sm font-medium">Tren Pendapatan Bulanan</p>
                <p className="text-slate-900 tracking-tight text-2xl font-extrabold leading-tight mt-1">Rp 150.0M</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-emerald-500 text-sm font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full">+15% vs Des</span>
                <p className="text-[#616f89] text-[11px] font-normal mt-1 text-right">Jan - Jun 2024</p>
              </div>
            </div>

            <div className="h-40 w-full mt-6">
              <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                <path
                  d="M0 35 Q10 32 20 15 T40 25 T60 10 T80 30 T100 5"
                  fill="none"
                  stroke="#0f49bd"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <div className="flex justify-between mt-2">
                {["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"].map(m => (
                  <span key={m} className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-2">
          <h3 className="text-slate-900 text-lg font-bold leading-tight tracking-tight mb-4">Indikator Kinerja</h3>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Rating", value: "4.9/5.0", icon: "star_rate", color: "text-yellow-500", bg: "bg-yellow-50" },
              { label: "Respon", value: "15 Menit", icon: "chat_bubble", color: "text-blue-500", bg: "bg-blue-50" },
              { label: "Tepat Waktu", value: "98%", icon: "verified", color: "text-emerald-500", bg: "bg-emerald-50" }
            ].map(kpi => (
              <div key={kpi.label} className="flex flex-col items-center gap-2 p-3 rounded-xl border border-gray-100 bg-white shadow-sm">
                <div className={`flex size-10 items-center justify-center rounded-full ${kpi.bg} ${kpi.color}`}>
                  <span className="material-symbols-outlined text-xl">{kpi.icon}</span>
                </div>
                <div className="text-center">
                  <p className="text-slate-900 text-base font-bold">{kpi.value}</p>
                  <p className="text-[#616f89] text-[10px] font-medium uppercase">{kpi.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
