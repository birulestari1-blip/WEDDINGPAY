import React from "react";
import Link from "next/link";

export default function EscrowStandard() {
  return (
    <div className="bg-background-light text-wedding-navy antialiased font-manrope">
      <div className="relative flex h-auto min-h-screen w-full flex-col max-w-[430px] mx-auto bg-white shadow-2xl overflow-x-hidden pb-24">
        <header className="sticky top-0 z-50 flex flex-col bg-wedding-navy text-white p-4 pb-3">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="size-8 bg-white rounded-lg flex items-center justify-center text-wedding-navy">
                <span className="material-symbols-outlined font-bold">shield_with_heart</span>
              </div>
              <div>
                <h1 className="text-base font-extrabold leading-none tracking-tight">WeddingPay</h1>
                <p className="text-[10px] text-blue-200 font-medium uppercase tracking-[0.1em]">Escrow Standard</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="size-9 flex items-center justify-center rounded-full bg-white/10">
                <span className="material-symbols-outlined text-xl">search</span>
              </button>
              <button className="size-9 flex items-center justify-center rounded-full bg-white/10 text-yellow-400">
                <span className="material-symbols-outlined text-xl !fill-1">verified_user</span>
              </button>
            </div>
          </div>
          <div className="bg-white/10 rounded-xl p-3 flex items-center justify-between border border-white/10">
            <div className="flex flex-col">
              <span className="text-[10px] text-blue-200 uppercase font-bold tracking-wider">Total Dana Terlindungi</span>
              <span className="text-lg font-extrabold">Rp 12.840.500.000+</span>
            </div>
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="size-6 rounded-full border-2 border-wedding-navy bg-gray-300 bg-cover" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDoVxZLmQmFa62A1jNZUSQF2xFIgrbBxxKODBDg7yXEAthZvKEs5zcDTz1l6AT9nhxpeCR-oHV8THq7dyhVyI6JDj2LG_BATw20exWbnBuCQ-Uyzm0lbYtlIdWPCtBKYHQPmuZ6f8A7eJG6tCWQKtLKIov93tpk086wlEqFTiyZa2nDK3S9BOhXVNNvzpiQTqY2pLkkVkW6gUgcDoAoKeaKVNyU5ZLFkBGdFD6jHsapeFxne7mBjlI3lMZHG1ez73mXnujmLwDjcUbd')` }}></div>
              ))}
              <div className="size-6 rounded-full border-2 border-wedding-navy bg-gray-300 flex items-center justify-center text-[8px] font-bold text-wedding-navy">99+</div>
            </div>
          </div>
        </header>

        <main className="flex-1 pb-28">
          <section className="bg-wedding-navy text-white px-4 pt-2 pb-8 rounded-b-[2rem]">
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2 text-center">Alur Semi-Escrow Kami</h2>
              <p className="text-sm text-blue-100 text-center opacity-80">Menjamin keamanan dana Anda hingga acara usai.</p>
            </div>
            <div className="relative flex justify-between items-start px-2">
              <div className="absolute top-6 left-8 right-8 h-0.5 border-t-2 border-dashed border-white/20 z-0"></div>
              {[
                { icon: "book_online", text: "1. DP ke\nSistem" },
                { icon: "lock", text: "2. Dana\nDitahan", active: true },
                { icon: "task_alt", text: "3. Cair Usai\nAcara" }
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center w-24 text-center">
                  <div className={`size-12 rounded-2xl flex items-center justify-center shadow-lg mb-2 ${step.active ? 'bg-blue-600 text-white border-2 border-white/20' : 'bg-white text-wedding-navy'}`}>
                    <span className="material-symbols-outlined text-2xl font-bold">{step.icon}</span>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase leading-tight whitespace-pre-line">{step.text}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="px-4 -mt-4">
            <div className="bg-white rounded-2xl p-4 shadow-xl border border-blue-50">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined text-sm !fill-1">star</span>)}
                </div>
                <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full uppercase tracking-wide">Aman dari Penipuan</span>
              </div>
              <p className="text-sm font-medium italic text-gray-600 mb-3">"Awalnya takut kena tipu vendor abal-abal, tapi lewat WeddingPay, uang saya baru cair ke vendor setelah catering sampai di gedung. Sangat tenang!"</p>
              <div className="flex items-center gap-2">
                <div className="size-6 rounded-full bg-slate-200 bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDoVxZLmQmFa62A1jNZUSQF2xFIgrbBxxKODBDg7yXEAthZvKEs5zcDTz1l6AT9nhxpeCR-oHV8THq7dyhVyI6JDj2LG_BATw20exWbnBuCQ-Uyzm0lbYtlIdWPCtBKYHQPmuZ6f8A7eJG6tCWQKtLKIov93tpk086wlEqFTiyZa2nDK3S9BOhXVNNvzpiQTqY2pLkkVkW6gUgcDoAoKeaKVNyU5ZLFkBGdFD6jHsapeFxne7mBjlI3lMZHG1ez73mXnujmLwDjcUbd')" }}></div>
                <span className="text-xs font-bold text-wedding-navy">Siska & Budi</span>
                <span className="text-[10px] text-gray-400">• Jakarta Selatan</span>
              </div>
            </div>
          </section>

          <section className="mt-8 px-4">
            <h3 className="text-lg font-extrabold text-wedding-navy mb-4">Kenapa Harus WeddingPay?</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 text-blue-800">
                <span className="material-symbols-outlined mb-2 text-blue-600">verified</span>
                <h4 className="text-xs font-bold mb-1">Vendor Terverifikasi</h4>
                <p className="text-[10px] opacity-70 leading-relaxed">Hanya vendor dengan reputasi terbaik yang masuk sistem.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 text-blue-800">
                <span className="material-symbols-outlined mb-2 text-blue-600">gavel</span>
                <h4 className="text-xs font-bold mb-1">Bantuan Hukum</h4>
                <p className="text-[10px] opacity-70 leading-relaxed">Kami mediasi jika terjadi perselisihan kontrak vendor.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
