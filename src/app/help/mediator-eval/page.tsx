import React from "react";
import Link from "next/link";

export default function MediatorEval() {
  return (
    <div className="bg-background-light text-[#111318] min-h-screen font-manrope antialiased">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
        <Link href="/help" className="flex items-center text-[#0f49bd]">
          <span className="material-symbols-outlined">chevron_left</span>
          <span className="text-base font-medium">Kembali</span>
        </Link>
        <h1 className="text-lg font-bold tracking-tight">Evaluasi Mediator</h1>
        <div className="w-10"></div>
      </header>

      <main className="max-w-md mx-auto px-4 py-6 space-y-8">
        <section className="flex flex-col items-center text-center space-y-4">
          <div className="relative">
            <div className="size-24 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img alt="Foto Profil Mediator" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_NbLxRu54pD9ZWglDnF0_VTV7ZraPYCqtHcMfJkYEpHAlRrxGJHcsJImoJBP4-xCvj4awBOioqnU-xeohTPCrfmcxtACCrU7Cyrs7zn1IEasVb3u2doOUHD2gBv4G8eOHrD2CZgCoL1NIsXk7mGcVfXDAVIBuG-RURq2DCuXqJxTR0xlfyaj2GQiqss7LZhwyBWLlVzRo6UuA8Ue5n33u39Bg_I8jwjqCoFZvCTzpJqXkTK6wEE9cuM6arzIZOOUnGkWMfRxp0HL8" />
            </div>
            <div className="absolute bottom-0 right-0 bg-green-500 border-2 border-white size-5 rounded-full"></div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Budi Santoso, S.H.</h2>
            <p className="text-gray-500 font-medium">Mediator Berlisensi</p>
            <div className="mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#0f49bd]/10 text-[#0f49bd]">
              ID Kasus: #WP-9921
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="text-center space-y-1">
            <h3 className="text-base font-semibold">Bagaimana pelayanan mediator?</h3>
            <p className="text-sm text-gray-500">Berikan penilaian Anda berdasarkan pengalaman mediasi.</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm space-y-6">
            {["Objektivitas", "Kecepatan Respon", "Solusi yang Diberikan"].map((aspect, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0f49bd] text-xl">
                    {idx === 0 ? "balance" : idx === 1 ? "schedule" : "lightbulb"}
                  </span>
                  <span className="font-bold text-sm uppercase tracking-wider text-gray-700">{aspect}</span>
                </div>
                <div className="flex justify-between items-center px-2">
                  <div className="flex gap-2 text-yellow-500">
                    {[1, 2, 3, 4].map(i => <span key={i} className="material-symbols-outlined text-3xl !fill-1">star</span>)}
                    <span className="material-symbols-outlined text-3xl">star</span>
                  </div>
                  <span className="text-xs font-bold bg-gray-100 px-2 py-1 rounded">4.0</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label className="font-bold text-sm text-gray-700">Testimoni & Saran Perbaikan</label>
            <textarea className="w-full p-4 rounded-xl border-gray-200 bg-white focus:ring-2 focus:ring-[#0f49bd] transition-all shadow-sm outline-none" placeholder="Tuliskan pengalaman Anda secara detail agar kami dapat terus meningkatkan kualitas layanan mediasi..." rows={4}></textarea>
          </div>
        </section>

        <section className="bg-[#0f49bd]/5 rounded-xl p-4 flex gap-4 items-start">
          <span className="material-symbols-outlined text-[#0f49bd]">verified_user</span>
          <p className="text-xs leading-relaxed text-gray-600">
            Terima kasih telah berkontribusi. Penilaian Anda membantu menjaga <strong>integritas komunitas WeddingPay</strong> dan memastikan penyelesaian sengketa yang jujur serta profesional bagi semua pengguna.
          </p>
        </section>

        <div className="pt-4 pb-12">
          <button className="w-full bg-[#0f49bd] hover:bg-blue-800 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2">
            <span>Kirim Penilaian</span>
            <span className="material-symbols-outlined text-xl">send</span>
          </button>
        </div>
      </main>
    </div>
  );
}
