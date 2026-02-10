"use client";

import React, { useState } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Cari Vendor Terpercaya",
    description: "Temukan ribuan vendor pernikahan terbaik yang telah terverifikasi dalam satu aplikasi.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaFYUmaak6QWDGuwTqwOw1daRDK_k8-xwGqgBq1YDs5Sb1nq9jqyC71nydMSEZx0a329Cg2PbZvBmGtT3q0NRG146O4ztMapuJrXCED6qYIpagMujt5aGnHh8GeeMMxnB6V-IeUKJ-GtpUKOBLPFVOP1XgpPfKwb9Fwe82rHKsQqbu1CxrXX5MVvpHHXoOq3vzi1FPGIjPFcu_vWAw8Gf2jo3yO5OD3KdkUr0e-DA8hMHYzk_04J1cmvb1Go8LZNL0Fes7egRxA6y9",
    icon: "storefront",
  },
  {
    id: 2,
    title: "Transaksi Aman dengan Semi-Escrow",
    description: "Dana Anda terlindungi. Pembayaran hanya diteruskan ke vendor setelah layanan selesai.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDq_06xTPXprLhQkM0Y3EAPNJuF8UJeg0e91aPvPn33bkxernppA_WMiLfjDaZMgveNfLL6LqX4cdnlOIPKMT_p66luxrKPUi83FAn_lWR1u043DtWUSlIqAzkhWNT2GixpoZU4KeOM-6UdLzPQut49Ee-n5iPkLZJr4ZBGZ8Ci6wElzBe9ZpeeAyb9qWKfDmwNU8kjWkAseWk46hKWqWfOeQ_PklY-9cOQEVLW61AW7L941Sk-vN_1urXIaVix51OHjdkPJfTrpnAQ",
    icon: "shield_person",
  },
  {
    id: 3,
    title: "Wujudkan Pernikahan Impian Tanpa Cemas",
    description: "Nikmati momen berharga Anda tanpa rasa khawatir. WeddingPay hadir menjaga setiap transaksi.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKeqqVz-wP8Vo26dtqDTuVHtNwXrx8tslv66KpyxkvgkduiIbI0qUB7DrWGSh8OWZsa6s4ASDcoK6oumoGPlQSGlCQ6SwvkBJ3vfo_MnOjroRJhD2fkMhN-p4yOhnAyC9BC3l1EUxl_WvcJ3Al9DOLigcxO5cNHVKUzvEdYCdb2JxBkdmVQxVejOSz8rzq3UiYSNFfVzSwWT-x8A5WnOKXlZNh_Na6E-wg8g6edBc2uSjK-GsFM9M7kqhVArhQLWZpywSvbwMsnr97",
    icon: "favorite",
  },
];

export default function OnboardingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // Navigate to login
      window.location.href = "/auth/login";
    }
  };

  return (
    <div className="bg-background-dark font-manrope text-white overflow-hidden h-screen flex justify-center">
      {/* Mobile Container */}
      <div className="relative w-full max-w-[430px] overflow-hidden bg-background-dark shadow-2xl h-full">
        {/* Carousel Background Section */}
        <div className="relative h-full w-full">
          <div className="absolute inset-0 bg-center bg-cover transition-all duration-700 brightness-75"
               style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>

          {/* Content Layer */}
          <div className="absolute bottom-48 left-0 w-full px-8 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-wedding-blue/20 backdrop-blur-md flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-wedding-blue text-3xl">
                {slides[currentSlide].icon}
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight leading-tight">
              {slides[currentSlide].title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}<br/>
                </React.Fragment>
              ))}
            </h1>
            <p className="text-[#9da6b9] text-base leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>

        {/* UI Overlay Elements (Fixed) */}
        <div className="absolute bottom-0 left-0 w-full px-6 pb-12 pt-6 bg-gradient-to-t from-background-dark to-transparent">
          {/* Pagination Indicators */}
          <div className="flex items-center gap-2 mb-8">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentSlide ? "w-8 bg-wedding-blue" : "w-4 bg-white/20"
                }`}
              ></div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4">
            <button
              onClick={nextSlide}
              className="w-full h-14 bg-wedding-blue hover:bg-wedding-blue/90 text-white font-bold text-lg rounded-xl shadow-lg shadow-wedding-blue/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            >
              {currentSlide === slides.length - 1 ? "Mulai Sekarang" : "Selanjutnya"}
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
            <Link href="/auth/login" className="w-full h-12 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm rounded-xl transition-all border border-white/10 backdrop-blur-sm flex items-center justify-center">
              Masuk ke Akun Saya
            </Link>
          </div>

          {/* App Version / Subtle Footer */}
          <div className="mt-8 text-center">
            <p className="text-xs text-white/30 tracking-widest uppercase">
              WeddingPay Indonesia • v2.4.0
            </p>
          </div>

          {/* Home Indicator (iOS) */}
          <div className="mt-8 mx-auto w-32 h-1 bg-white/20 rounded-full"></div>
        </div>

        {/* Top Right Logo */}
        <div className="absolute top-16 right-8 z-50 opacity-80">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-wedding-blue rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl">
                payments
              </span>
            </div>
            <span className="font-bold tracking-tight text-lg">
              Wedding<span className="text-wedding-blue">Pay</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
