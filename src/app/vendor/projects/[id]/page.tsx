import React from "react";
import Link from "next/link";

export default async function VendorProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="bg-background-light text-slate-900 min-h-screen font-manrope antialiased">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <Link href="/vendor/financial" className="text-wedding-primary flex items-center">
          <span className="material-symbols-outlined text-[28px]">chevron_left</span>
          <span className="text-lg -ml-1">Proyek</span>
        </Link>
        <h2 className="text-slate-900 text-base font-bold tracking-tight text-slate-900">Detail Proyek</h2>
        <button className="text-wedding-primary">
          <span className="material-symbols-outlined">more_horiz</span>
        </button>
      </header>

      <main className="max-w-md mx-auto pb-24 overflow-y-auto">
        <div className="p-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="inline-block px-2 py-1 rounded-md bg-orange-100 text-orange-600 text-[10px] font-bold uppercase tracking-wider mb-2">Sedang Berjalan</span>
                <h1 className="text-xl font-bold leading-tight text-slate-900">Pernikahan Budi & Shinta</h1>
                <p className="text-gray-500 text-sm mt-1">Gedung Sasana Budaya, Jakarta</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Total Nilai</p>
                <p className="text-wedding-primary font-bold text-lg leading-none mt-1">Rp 25.000.000</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <Link href={`/chat/${id}`} className="flex items-center justify-center gap-2 py-2.5 px-4 bg-wedding-primary text-white rounded-xl font-bold text-sm shadow-md shadow-wedding-primary/20 transition-all active:scale-95">
                <span className="material-symbols-outlined text-sm">chat_bubble</span>
                Chat Client
              </Link>
              <Link href={`/vendor/projects/${id}/evidence`} className="flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-100 text-gray-700 rounded-xl font-bold text-sm transition-all active:scale-95">
                <span className="material-symbols-outlined text-sm">cloud_upload</span>
                Unggah Bukti
              </Link>
            </div>
          </div>
        </div>

        <div className="sticky top-0 bg-white z-10 border-b border-gray-100">
          <div className="flex justify-around">
            <button className="py-3 px-4 text-sm font-semibold border-b-2 border-wedding-primary text-wedding-primary">Info Proyek</button>
            <button className="py-3 px-4 text-sm font-medium text-gray-500 border-b-2 border-transparent">Keuangan</button>
            <button className="py-3 px-4 text-sm font-medium text-gray-500 border-b-2 border-transparent">Kontrak</button>
          </div>
        </div>

        <div className="p-4 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-800">Milestone Pekerjaan</h3>
              <span className="text-xs text-wedding-primary font-semibold">4/6 Selesai</span>
            </div>
            <div className="space-y-4">
              {[
                { title: "DP & Booking Tanggal", desc: "Selesai pada 12 Jan 2024", completed: true },
                { title: "Meeting Koordinasi Awal", desc: "Selesai pada 20 Feb 2024", completed: true },
                { title: "Technical Meeting", desc: "Target: 15 Mar 2024", current: true },
                { title: "Pelaksanaan Hari H", desc: "Target: 25 Mar 2024", future: true }
              ].map((m, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${m.completed ? 'bg-green-500' : m.current ? 'border-2 border-wedding-primary bg-white' : 'bg-gray-100 border border-gray-200'}`}>
                      {m.completed ? <span className="material-symbols-outlined text-white text-xs">check</span> : m.current ? <div className="w-2 h-2 rounded-full bg-wedding-primary animate-pulse"></div> : <span className="text-[10px] font-bold text-gray-400">{i+1}</span>}
                    </div>
                    {i < 3 && <div className={`w-0.5 h-full ${m.completed ? 'bg-green-500/30' : 'bg-gray-200'}`}></div>}
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className={`text-sm font-bold ${m.future ? 'text-gray-400' : m.current ? 'text-wedding-primary' : 'text-gray-700'}`}>{m.title}</p>
                        <p className="text-xs text-gray-400">{m.desc}</p>
                      </div>
                      {m.current && <button className="text-[10px] font-bold text-wedding-primary px-2 py-1 rounded bg-wedding-primary/10">Update</button>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4 text-slate-900">Termin Pembayaran</h3>
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <table className="w-full text-sm text-slate-900">
                <thead>
                  <tr className="bg-gray-100 text-left text-slate-900">
                    <th className="px-4 py-2 font-semibold text-xs text-gray-500">TERMIN</th>
                    <th className="px-4 py-2 font-semibold text-xs text-gray-500 text-right">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-slate-900">
                  <tr>
                    <td className="px-4 py-3 font-medium">Down Payment (30%)</td>
                    <td className="px-4 py-3 text-right">
                      <span className="text-green-600 font-bold text-[10px] uppercase">Cair</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Termin 2 (40%)</td>
                    <td className="px-4 py-3 text-right">
                      <span className="text-orange-500 font-bold text-[10px] uppercase">Review</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-400">Pelunasan (30%)</td>
                    <td className="px-4 py-3 text-right text-slate-900">
                      <span className="text-gray-400 font-bold text-[10px] uppercase text-slate-900">Nanti</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="p-8 text-center opacity-40 text-slate-900">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="material-symbols-outlined text-sm">verified_user</span>
            <span className="text-[10px] uppercase tracking-widest font-bold">Escrow Protection Active</span>
          </div>
          <p className="text-[10px]">Dana disimpan aman di WeddingPay sampai milestone selesai.</p>
        </div>
      </main>
    </div>
  );
}
