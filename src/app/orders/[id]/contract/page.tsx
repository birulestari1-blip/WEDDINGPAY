"use client";

import React from "react";
import Link from "next/link";

export default function ContractPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111318] dark:text-gray-100 font-manrope">
      <div className="max-w-[480px] mx-auto bg-white dark:bg-[#1a212e] min-h-screen shadow-sm relative overflow-x-hidden">
        {/* Top Navigation Bar */}
        <div className="sticky top-0 z-50 flex items-center bg-white/90 dark:bg-[#1a212e]/90 backdrop-blur-md p-4 justify-between border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <Link href="/orders" className="p-1 -ml-1 text-[#111318] dark:text-white">
              <span className="material-symbols-outlined text-[24px]">arrow_back_ios</span>
            </Link>
            <h2 className="text-lg font-bold leading-tight tracking-tight">Detail Kontrak</h2>
          </div>
          <div className="flex gap-2">
            <button className="p-2 text-[#111318] dark:text-white">
              <span className="material-symbols-outlined text-[24px]">share</span>
            </button>
            <button className="p-2 text-[#111318] dark:text-white">
              <span className="material-symbols-outlined text-[24px]">download</span>
            </button>
          </div>
        </div>

        {/* Contract Header Info */}
        <div className="p-4 space-y-1">
          <div className="flex items-center justify-between">
            <span className="px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[10px] font-bold uppercase tracking-wider rounded">
              Telah Ditandatangani
            </span>
            <span className="text-xs text-[#616f89] dark:text-gray-400 font-medium">
              Versi: 1.0.4
            </span>
          </div>
          <h3 className="text-2xl font-bold leading-tight pt-2">#WP-2023-8812</h3>
          <p className="text-[#616f89] dark:text-gray-400 text-sm">
            Berlaku sejak: 12 Oktober 2023
          </p>
        </div>

        <div className="px-4 py-2">
          <div className="bg-blue-600/5 dark:bg-blue-600/10 border border-blue-600/10 p-3 rounded-xl flex items-start gap-3">
            <span className="material-symbols-outlined text-blue-600">verified_user</span>
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                Jaminan WeddingPay
              </p>
              <p className="text-xs text-blue-600/80 leading-relaxed">
                Dana Anda aman di sistem escrow kami. Pembayaran akan dirilis ke
                vendor hanya setelah milestone disetujui.
              </p>
            </div>
          </div>
        </div>

        {/* Parties Involved */}
        <div className="p-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#616f89] dark:text-gray-400 mb-4">
            Pihak Terlibat
          </h4>
          <div className="space-y-4">
            {/* Party 1: Client */}
            <div className="flex items-center justify-between gap-4 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-white dark:border-gray-700 shadow-sm"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9WZTXP3Elkg_X8qN3eBmHTpQvWH-qlhONUDeob2XPkO9fNXmcURNFpxQED02pGVefnnXQePz9660dpN_fugZBJyWhw68sMHa4exQ7HJvmJVOzC4-_TVpxcLjNQVC2vYK6-7kw7wsA6dDNL3hcJ2sUC4XGggTEpv7Qj1Bzu1b8pIFszf38yxYLU_d4kJkpn6HgkadfUptFkriUkt-OwLHbWsX6-qhBJudNyAqx4_PH7moudcIUoBGJvUon-trj0omIvyPbhMgqPcoG')",
                  }}
                ></div>
                <div>
                  <p className="text-base font-bold leading-tight">Syarifah & Aris</p>
                  <p className="text-xs text-[#616f89] dark:text-gray-400">
                    Pihak Pertama (Pengantin)
                  </p>
                </div>
              </div>
            </div>
            {/* Party 2: Vendor */}
            <div className="flex items-center justify-between gap-4 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-white dark:border-gray-700 shadow-sm"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuADasnx2yIl65zuzQxg5SFnZv9aYb4yv8YqR-1kuzJg4PApbCMtqPDk65YwNg2zZEAKJsYxgV3IctdBaSIXd-VVhvL8qKfWEBNC7OSVCy4SMi8P7_4xvZN0Sk7W-wuIJuAkTPfZ1wwfvurWMmRKEVIpYAzQZkHvQLnet56tiXZN12Dd0IABx32QfwZThVPrXxxquDPk7zmNED5hbs0jya8aC8h0hMNPhrijeR4PqgFoqWaGYTJ-Sl91yiH3I-xXERDX6uqFe0L7SIdF')",
                  }}
                ></div>
                <div>
                  <p className="text-base font-bold leading-tight">
                    Eternal Memories Planner
                  </p>
                  <p className="text-xs text-[#616f89] dark:text-gray-400">
                    Pihak Kedua (Vendor Utama)
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-blue-500 text-[20px]">
                verified
              </span>
            </div>
          </div>
        </div>

        {/* Scope of Service */}
        <div className="p-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#616f89] dark:text-gray-400 mb-3">
            Rincian Layanan
          </h4>
          <div className="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden">
            <div className="p-4 bg-white dark:bg-gray-800/20">
              <ul className="space-y-3">
                {[
                  {
                    title: "Full Wedding Planning",
                    desc: "Koordinasi dari persiapan hingga hari-H untuk 500 tamu.",
                  },
                  {
                    title: "Vendor Management",
                    desc: "Kurasi, negosiasi, dan manajemen 12 sub-vendor.",
                  },
                  {
                    title: "On-site Coordination",
                    desc: "Tim 8 personil standby selama 12 jam di lokasi.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500 text-[20px]">
                      check_circle
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="text-xs text-[#616f89] dark:text-gray-400">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800/40 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
              <p className="text-sm font-medium">Total Nilai Kontrak</p>
              <p className="text-lg font-bold text-blue-600">Rp 45.000.000</p>
            </div>
          </div>
        </div>

        {/* Payment Milestones */}
        <div className="p-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#616f89] dark:text-gray-400 mb-4">
            Jadwal Pembayaran (Milestone)
          </h4>
          <div className="relative pl-6 border-l-2 border-gray-100 dark:border-gray-800 space-y-6 ml-2">
            {[
              {
                title: "Booking Fee (20%)",
                date: "Telah dibayar: 12 Okt 2023",
                amount: "Rp 9.000.000",
                status: "completed",
              },
              {
                title: "Technical Meeting (40%)",
                date: "Jatuh tempo: 15 Des 2023",
                amount: "Rp 18.000.000",
                status: "active",
              },
              {
                title: "Pelunasan H-7 (40%)",
                date: "Jatuh tempo: 15 Jan 2024",
                amount: "Rp 18.000.000",
                status: "pending",
              },
            ].map((m, i) => (
              <div key={i} className="relative">
                <div
                  className={`absolute -left-[31px] top-0 w-[14px] h-[14px] rounded-full border-4 border-white dark:border-[#1a212e] ${
                    m.status === "completed"
                      ? "bg-green-500"
                      : m.status === "active"
                      ? "bg-blue-600"
                      : "bg-gray-200 dark:bg-gray-700"
                  }`}
                ></div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-bold">{m.title}</p>
                    <p className="text-xs text-[#616f89] dark:text-gray-400">
                      {m.date}
                    </p>
                  </div>
                  <p className="text-sm font-bold">{m.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* E-Signatures */}
        <div className="p-4 pb-32">
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#616f89] dark:text-gray-400 mb-6 text-center">
            Tanda Tangan Digital
          </h4>
          <div className="grid grid-cols-2 gap-8">
            {[
              { name: "Syarifah Putri", date: "12/10/2023 09:45 WIB" },
              { name: "Eternal Memories", date: "12/10/2023 11:20 WIB" },
            ].map((sig, i) => (
              <div key={i} className="text-center space-y-3">
                <div className="h-24 flex items-center justify-center bg-gray-50 dark:bg-gray-800/50 rounded-lg relative overflow-hidden">
                  <div className="w-20 h-12 opacity-40 flex items-center justify-center">
                    <span className="material-symbols-outlined text-blue-600 text-4xl italic">
                      {i === 0 ? "edit" : "draw"}
                    </span>
                  </div>
                  <div className="absolute bottom-2 right-2">
                    <span className="material-symbols-outlined text-green-500 text-sm">
                      verified
                    </span>
                  </div>
                </div>
                <div className="border-b border-dashed border-slate-300 w-full"></div>
                <div>
                  <p className="text-xs font-bold uppercase">{sig.name}</p>
                  <p className="text-[10px] text-[#616f89] dark:text-gray-400">
                    {sig.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fixed Bottom Action */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] p-4 bg-white/80 dark:bg-[#1a212e]/80 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 flex gap-3 z-50">
          <button className="flex-1 bg-blue-600 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
            <span className="material-symbols-outlined">print</span>
            Cetak Kontrak (PDF)
          </button>
          <button className="w-14 h-14 bg-gray-100 dark:bg-gray-800 text-[#111318] dark:text-white rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined">help_outline</span>
          </button>
        </div>
      </div>
    </div>
  );
}
