"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ComparisonPage() {
  const [activeTab, setActiveTab] = useState("Catering");

  const vendors = [
    {
      id: 1,
      name: "Nusantara Catering",
      rating: "4.8",
      reviews: 120,
      price: "Rp 45.000.000",
      escrow: true,
      pax: "500 Porsi",
      menu: "Indonesian, Asian Fusion",
      cancel: "Refund 50% < 30 hari",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCy7A3qdK7BcxTuLmmo6s7waKH8ZgUaVEWncoMm_1eORd08xxVO-5q4ReTGMw06JW5ExsEbe2JZU9gx_C0OG0BJ0lZMOUG0EPXNp5aYuXc62VUVjVIIUkF0umDcb9wGBpTUx7D_7ruN1FuOy41jC7THgBWRuQTtFvVRM0lb8l3PhAJy4g69Js4bB2D24cqt1GfM9Ya1O-DT7OihzrKmeMSRrgmvaKjqlZjGhu-KRNejCQUFUTjWm4V_MuAwynRkUBqoNGWLjhRHQRIm"
    },
    {
      id: 2,
      name: "Sari Rasa Abadi",
      rating: "4.9",
      reviews: 85,
      price: "Rp 52.500.000",
      escrow: true,
      pax: "600 Porsi",
      menu: "Full Traditional Heritage",
      cancel: "Refund 75% < 45 hari",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZnlFc_IW0aGIdWAVix5m4qIWylS65DHtXrFMZqYeWAvh762d6eIN_ueidxgiI0m--mj7Bcrrrv_4MtkcN8WTdgSvNV2lb-f1ZjcNDYtz87WZP-CmkV1yOI6fNbw2LacfK-OE-oq_R3LGv5Hvow8OwKprNiPtj1w7PV46ZLVxlGGME-x8697nH2LUYiHGQc3QxbcFEe4fJPSQNnl8VIC64PBnRZ7fIc1yyMGHCHItEIohVuDha4a4VbG_IqZk-rUyQ9ZfTs8S7Sf7l"
    },
    {
      id: 3,
      name: "Royal Gourmet",
      rating: "4.7",
      reviews: 200,
      price: "Rp 40.000.000",
      escrow: false,
      pax: "400 Porsi",
      menu: "International, Western",
      cancel: "Non-Refundable",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0lfOCDilOazTKRgK8gKw7FE_W0_7jiQbHgUNHLOIGsoMazCWrnyQsk7gXRKxzaOYRDxnHg3BdEwvdaEW25IyiTi0mQIk-BJUAqwgYVGLIz-c6bFHR1zmgsEqyJfjJVbAQ6XWPRa_c9sRqZ5LvQVapNeh2oa8yZMMOb9NfthgTxWCYLOTkXw3ifIKpzw8wWcgCb3APDGBPWvLNrT0OecKS_huXitIEze4DmcnIYoM6pQs9FicFWVEsD-xBpxyO7RrIHQKHKoaPgObq"
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-plus-jakarta text-[#171112] dark:text-white min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
        {/* Top App Bar */}
        <div className="flex items-center bg-white dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-50 border-b border-[#e5dcdd] dark:border-white/10">
          <Link href="/vendors" className="text-[#171112] dark:text-white flex size-12 shrink-0 items-center cursor-pointer">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          <h2 className="text-[#171112] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
            Bandingkan Vendor
          </h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex cursor-pointer items-center justify-center rounded-lg h-12 bg-transparent text-[#171112] dark:text-white">
              <span className="material-symbols-outlined">more_horiz</span>
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="bg-white dark:bg-background-dark">
          <div className="flex border-b border-[#e5dcdd] dark:border-white/10 px-4 gap-8">
            {["Catering", "MUA", "Dekorasi"].map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 transition-all ${
                  activeTab === t ? "border-primary text-primary font-bold" : "border-transparent text-[#87646a] dark:text-gray-400"
                }`}
              >
                <p className="text-sm leading-normal">{t}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Table Container */}
        <div className="flex-1 overflow-x-auto no-scrollbar">
          <div className="min-w-[800px] flex flex-col">
            {/* Vendor Headers (Sticky Top) */}
            <div className="flex bg-white dark:bg-background-dark border-b border-[#e5dcdd] dark:border-white/10">
              {/* Labels Column */}
              <div className="w-32 shrink-0 p-4 flex items-end sticky left-0 z-20 bg-white dark:bg-background-dark border-r border-[#e5dcdd] dark:border-white/10">
                <span className="text-xs font-bold text-[#87646a] dark:text-gray-400 uppercase tracking-wider">
                  Fitur
                </span>
              </div>
              {/* Vendor Cards */}
              {vendors.map((v) => (
                <div key={v.id} className="flex-1 p-4 flex flex-col gap-3 min-w-[220px] border-l first:border-l-0 border-[#e5dcdd] dark:border-white/10">
                  <div className="w-full aspect-[4/3] bg-cover bg-center rounded-lg shadow-sm" style={{ backgroundImage: `url('${v.image}')` }}></div>
                  <div>
                    <h4 className="text-sm font-bold text-[#171112] dark:text-white line-clamp-1">{v.name}</h4>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-yellow-500 text-xs fill-1">star</span>
                      <span className="text-xs text-[#87646a] dark:text-gray-400">{v.rating} ({v.reviews})</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison Rows */}
            <div className="flex bg-white dark:bg-background-dark">
              <div className="w-32 shrink-0 p-4 sticky left-0 z-20 bg-white dark:bg-background-dark border-r border-[#e5dcdd] dark:border-white/10 flex items-center">
                <span className="text-sm font-medium text-[#87646a] dark:text-gray-400">Harga Mulai</span>
              </div>
              {vendors.map(v => (
                <div key={v.id} className="flex-1 p-4 flex items-center min-w-[220px] border-l first:border-l-0 border-[#e5dcdd] dark:border-white/10">
                  <span className="text-sm font-bold text-primary">{v.price}</span>
                </div>
              ))}
            </div>

            <div className="flex bg-gray-50 dark:bg-white/5">
              <div className="w-32 shrink-0 p-4 sticky left-0 z-20 bg-gray-50 dark:bg-[#2d1a1d] border-r border-[#e5dcdd] dark:border-white/10 flex items-center">
                <span className="text-sm font-medium text-[#87646a] dark:text-gray-400">Escrow Verified</span>
              </div>
              {vendors.map(v => (
                <div key={v.id} className="flex-1 p-4 flex items-center min-w-[220px] border-l first:border-l-0 border-[#e5dcdd] dark:border-white/10 gap-2">
                  <span className={`material-symbols-outlined ${v.escrow ? 'text-green-500 fill-1' : 'text-gray-300'}`}>verified</span>
                  <span className={`text-xs font-semibold ${v.escrow ? 'text-green-600' : 'text-gray-500'}`}>
                    {v.escrow ? 'Terverifikasi' : 'Belum Tersedia'}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex bg-white dark:bg-background-dark">
              <div className="w-32 shrink-0 p-4 sticky left-0 z-20 bg-white dark:bg-background-dark border-r border-[#e5dcdd] dark:border-white/10 flex items-center">
                <span className="text-sm font-medium text-[#87646a] dark:text-gray-400">Kapasitas</span>
              </div>
              {vendors.map(v => (
                <div key={v.id} className="flex-1 p-4 flex items-center min-w-[220px] border-l first:border-l-0 border-[#e5dcdd] dark:border-white/10">
                  <span className="text-sm text-[#171112] dark:text-white">{v.pax}</span>
                </div>
              ))}
            </div>

            <div className="flex bg-gray-50 dark:bg-white/5">
              <div className="w-32 shrink-0 p-4 sticky left-0 z-20 bg-gray-50 dark:bg-[#2d1a1d] border-r border-[#e5dcdd] dark:border-white/10 flex items-center">
                <span className="text-sm font-medium text-[#87646a] dark:text-gray-400">Pilihan Menu</span>
              </div>
              {vendors.map(v => (
                <div key={v.id} className="flex-1 p-4 flex items-center min-w-[220px] border-l first:border-l-0 border-[#e5dcdd] dark:border-white/10">
                  <span className="text-sm text-[#171112] dark:text-white">{v.menu}</span>
                </div>
              ))}
            </div>

            <div className="flex bg-white dark:bg-background-dark">
              <div className="w-32 shrink-0 p-4 sticky left-0 z-20 bg-white dark:bg-background-dark border-r border-[#e5dcdd] dark:border-white/10 flex items-center">
                <span className="text-sm font-medium text-[#87646a] dark:text-gray-400">Pembatalan</span>
              </div>
              {vendors.map(v => (
                <div key={v.id} className="flex-1 p-4 flex items-center min-w-[220px] border-l first:border-l-0 border-[#e5dcdd] dark:border-white/10">
                  <span className={`text-xs ${v.cancel === 'Non-Refundable' ? 'text-primary font-medium' : 'text-[#171112] dark:text-white'}`}>{v.cancel}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons Row */}
            <div className="flex bg-white dark:bg-background-dark border-t border-[#e5dcdd] dark:border-white/10">
              <div className="w-32 shrink-0 p-4 sticky left-0 z-20 bg-white dark:bg-background-dark border-r border-[#e5dcdd] dark:border-white/10"></div>
              {vendors.map(v => (
                <div key={v.id} className="flex-1 p-4 min-w-[220px] border-l first:border-l-0 border-[#e5dcdd] dark:border-white/10">
                  <button className="w-full bg-primary text-white py-3 rounded-lg text-sm font-bold shadow-sm active:scale-[0.98] transition-transform">
                    Pilih & Pesan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Bottom Tips/Helper */}
        <div className="p-4 bg-background-light dark:bg-background-dark">
          <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl flex gap-3 items-start">
            <span className="material-symbols-outlined text-primary">info</span>
            <p className="text-xs text-[#171112] dark:text-white leading-relaxed">
              <strong>Tips WeddingPay:</strong> Pilih vendor dengan label "Escrow Verified" untuk keamanan transaksi yang lebih terjamin. Pembayaran hanya akan diteruskan ke vendor setelah acara selesai.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
