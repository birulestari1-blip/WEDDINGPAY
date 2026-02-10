import React from "react";
import Link from "next/link";

export default function Welcome() {
  return (
    <div className="bg-background-dark font-manrope text-white overflow-hidden min-h-screen">
      <div className="relative mx-auto h-screen max-w-[430px] overflow-hidden bg-background-dark shadow-2xl">
        <div className="h-12 w-full flex items-center justify-between px-8 absolute top-0 z-50">
          <span className="text-sm font-semibold">9:41</span>
          <div className="flex items-center gap-1.5 text-white">
            <span className="material-symbols-outlined text-base">signal_cellular_alt</span>
            <span className="material-symbols-outlined text-base">wifi</span>
            <span className="material-symbols-outlined text-base rotate-90">battery_full</span>
          </div>
        </div>

        <div className="relative h-full w-full">
          <div className="flex h-full w-full overflow-x-auto snap-x snap-mandatory no-scrollbar">
            <div className="relative h-full w-full min-w-full flex-shrink-0 snap-center">
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-700"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCaFYUmaak6QWDGuwTqwOw1daRDK_k8-xwGqgBq1YDs5Sb1nq9jqyC71nydMSEZx0a329Cg2PbZvBmGtT3q0NRG146O4ztMapuJrXCED6qYIpagMujt5aGnHh8GeeMMxnB6V-IeUKJ-GtpUKOBLPFVOP1XgpPfKwb9Fwe82rHKsQqbu1CxrXX5MVvpHHXoOq3vzi1FPGIjPFcu_vWAw8Gf2jo3yO5OD3KdkUr0e-DA8hMHYzk_04J1cmvb1Go8LZNL0Fes7egRxA6y9')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>

              <div className="absolute bottom-48 left-0 w-full px-8 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-wedding-primary/20 backdrop-blur-md flex items-center justify-center mb-4 text-wedding-primary">
                  <span className="material-symbols-outlined text-3xl">storefront</span>
                </div>
                <h1 className="text-3xl font-extrabold tracking-tight leading-tight">
                  Cari Vendor <br/>Terpercaya
                </h1>
                <p className="text-[#9da6b9] text-base leading-relaxed">
                  Temukan ribuan vendor pernikahan terbaik yang telah terverifikasi dalam satu aplikasi.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full px-6 pb-12 pt-6 bg-gradient-to-t from-background-dark to-transparent">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-1.5 w-8 rounded-full bg-wedding-primary transition-all duration-300"></div>
            <div className="h-1.5 w-4 rounded-full bg-white/20 transition-all duration-300"></div>
            <div className="h-1.5 w-4 rounded-full bg-white/20 transition-all duration-300"></div>
          </div>

          <div className="flex flex-col gap-4">
            <Link href="/home" className="w-full h-14 bg-wedding-primary hover:bg-wedding-primary/90 text-white font-bold text-lg rounded-xl shadow-lg shadow-wedding-primary/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
              Mulai Sekarang
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </Link>
            <Link href="/auth/login" className="w-full h-12 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm rounded-xl transition-all border border-white/10 backdrop-blur-sm flex items-center justify-center">
              Masuk ke Akun Saya
            </Link>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-white/30 tracking-widest uppercase">WeddingPay Indonesia • v2.4.0</p>
          </div>

          <div className="mt-8 mx-auto w-32 h-1 bg-white/20 rounded-full"></div>
        </div>

        <div className="absolute top-16 right-8 z-50 opacity-80">
          <div className="flex items-center gap-2 text-white">
            <div className="w-8 h-8 bg-wedding-primary rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl">payments</span>
            </div>
            <span className="font-bold tracking-tight text-lg">Wedding<span className="text-wedding-primary">Pay</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
