"use client";

import React, { use } from "react";
import Link from "next/link";

export default function AdminKYCReviewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased min-h-screen">
      <div className="relative flex h-screen w-full flex-col overflow-hidden max-w-md mx-auto bg-white dark:bg-slate-900 shadow-2xl">
        <header className="flex items-center px-4 py-4 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 z-20">
          <Link href="/admin" className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">arrow_back_ios_new</span>
          </Link>
          <div className="flex-1 text-center pr-10">
            <h1 className="text-base font-bold tracking-tight">Verifikasi KYC Vendor</h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">ID: VND-88291</p>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto no-scrollbar pb-64">
          <section className="p-4 bg-slate-50 dark:bg-slate-800/50 flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
                <img alt="Vendor" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUS2joX02pwTT8T5x1ndVrN__yJhyQsN-ecC9jSxi6C2R0AK2laeTPFeTVPCTqd6KJHghh5gQIgBT04ABAubj4p77Gu1yzYDD8bqSvxQDEl4orYfyapM2dHukj2X2z9g2IIM7dgnHtraDIbsoy02R-Lg6R2l9pfXd8SD_Fq4PBEK4iY-6ATloSpKIKJlqHuKp0JDMtn0_Ektae-nbS70c1IG89pjlwz9wvNCQYW5e6W-EnqHDr4_7SeSBurKcXkj2LPmaZRQxYfx3T"/>
              </div>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h2 className="font-bold text-lg leading-tight">Griya Wedding Organizer</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">location_on</span>
                Bandung, Jawa Barat
              </p>
              <span className="inline-block mt-1 px-2 py-0.5 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-[10px] font-bold rounded uppercase">Pending Review</span>
            </div>
          </section>

          <div className="px-4 py-6 space-y-8">
            {/* Foto KTP */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200">
                  <span className="material-symbols-outlined text-[#e23653] text-lg">badge</span>
                  Foto KTP
                </h3>
                <button className="text-xs font-semibold text-[#e23653] flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">zoom_in</span> Zoom
                </button>
              </div>
              <div className="aspect-[1.6/1] bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden relative group">
                <img alt="KTP" className="w-full h-full object-cover grayscale-[20%]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKW_U-hjnqBSSracB8p7Q0isCAZOiDXh38eSeyvg8N4TsbSe-nEpg2PTnEhh5Alm4TkRa9OGhCUBA4QFU6ObL8z6VsVYRhFiHXfRcgB9PRbFwEAFcoKksctoB5Ur5vBe9zqBe7MXeQQxMojgdCYfIiIKYWoIOdEb4VFTc-2cc-FnQJpx-AxPdGAmOklhuzWz401gjCQGJrcAsw6OQpCvHr0UqKC06YhTT8jEYeNCQkiUBfBFey4ozsQoji9bzxnA77nDvz8I3qARc3"/>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-dashed border-slate-200 dark:border-slate-700">
                <p className="text-[11px] text-slate-500 mb-1">NIK Terdeteksi:</p>
                <p className="text-sm font-mono font-bold tracking-wider">3273012809920005</p>
              </div>
            </div>

            {/* Foto Selfie */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200">
                  <span className="material-symbols-outlined text-[#e23653] text-lg">face</span>
                  Foto Selfie
                </h3>
                <button className="text-xs font-semibold text-[#e23653] flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">zoom_in</span> Zoom
                </button>
              </div>
              <div className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden relative">
                <img alt="Selfie" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxkgwWKgpmYQFzCT0bAHjvToefATGOuaMV8ljkHcsEdcmhcbrwH9D8thr4QDzbAp3vnr1dyFWsGKOw_G38V97mjWiNYWk3dOTwxAgkqaqJxHvdDIGWOaxj_-vsysC8VuMfRoKkm1qhnXMXiTzmt-OYn4AyzevM1utiukn1SWRh7GuJ_Yfu7-6j2KvyYSWPagyRxcdPlVi1P16jI30ePqB-hrDuHHL17fR3zo7AKkkpXs8JSEL8QAbr0cFY4ohSfgyFuS2SI9xlCe-X"/>
              </div>
            </div>

            {/* Dokumen Legalitas */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200">
                  <span className="material-symbols-outlined text-[#e23653] text-lg">description</span>
                  Dokumen Legalitas (NIB)
                </h3>
                <button className="text-xs font-semibold text-[#e23653] flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">open_in_new</span> Detail
                </button>
              </div>
              <div className="aspect-[1/1.4] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center p-6">
                  <span className="material-symbols-outlined text-5xl text-slate-300 dark:text-slate-600 mb-2">picture_as_pdf</span>
                  <p className="text-xs font-medium text-slate-500">NIB_GriyaWedding_2023.pdf</p>
                  <button className="mt-4 px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-lg text-xs font-bold transition-all active:scale-95">Pratinjau Dokumen</button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="absolute bottom-0 inset-x-0 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 p-4 pb-12 z-30 shadow-[0_-10px_20px_-5px_rgba(0,0,0,0.1)]">
          <div className="w-12 h-1 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mb-6"></div>
          <div className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Alasan Penolakan (Jika Ada)</label>
              <textarea className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#e23653]/20 placeholder:text-slate-400 outline-none transition-all dark:text-white" placeholder="Contoh: Foto KTP tidak jelas atau sudah kadaluarsa..." rows={2}></textarea>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-red-500/10 text-slate-600 hover:text-red-500 font-bold py-4 rounded-2xl transition-all border border-transparent hover:border-red-500/20 active:scale-95">
                <span className="material-symbols-outlined">close</span>
                Reject
              </button>
              <button className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-emerald-500/20 transition-all active:scale-95">
                <span className="material-symbols-outlined">check_circle</span>
                Approve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
