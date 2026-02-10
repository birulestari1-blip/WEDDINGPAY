"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function AuthPage() {
  const [tab, setTab] = useState<"register" | "login">("register");

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#171112] min-h-screen flex items-center justify-center p-0 md:p-4 font-plus-jakarta">
      {/* Mobile Container (Simulating Phone Form Factor) */}
      <div className="relative w-full max-w-[430px] h-full min-h-screen md:min-h-[800px] bg-white dark:bg-[#1a0d0f] md:rounded-[3rem] md:shadow-2xl overflow-hidden flex flex-col">
        {/* Header / Top Bar */}
        <div className="pt-12 pb-6 px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-wedding-accent/10 rounded-2xl flex items-center justify-center">
              <span className="material-symbols-outlined text-wedding-accent text-3xl">
                favorite
              </span>
            </div>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-[#171112] dark:text-white">
            WeddingPay
          </h1>
          <p className="text-[#87646a] dark:text-gray-400 text-sm mt-2 px-4 leading-relaxed">
            Kelola transaksi vendor pernikahan dengan aman & nyaman
          </p>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 px-6 pb-12">
          {/* Segmented Control (Tabs) */}
          <div className="flex bg-[#f4f0f1] dark:bg-[#2d1a1d] p-1 rounded-xl mb-8">
            <button
              onClick={() => setTab("register")}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                tab === "register"
                  ? "bg-white dark:bg-wedding-accent text-[#171112] dark:text-white shadow-sm"
                  : "text-[#87646a] dark:text-gray-400 hover:text-[#171112]"
              }`}
            >
              Daftar
            </button>
            <button
              onClick={() => setTab("login")}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                tab === "login"
                  ? "bg-white dark:bg-wedding-accent text-[#171112] dark:text-white shadow-sm"
                  : "text-[#87646a] dark:text-gray-400 hover:text-[#171112]"
              }`}
            >
              Masuk
            </button>
          </div>

          {/* Form Fields */}
          <div className="space-y-5">
            {tab === "register" && (
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#87646a] ml-1">
                  Nama Lengkap
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#87646a] text-xl">
                    person
                  </span>
                  <input
                    className="w-full pl-12 pr-4 py-4 bg-white dark:bg-[#2d1a1d] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-xl text-sm focus:ring-2 focus:ring-wedding-accent/20 focus:border-wedding-accent transition-all outline-none text-[#171112] dark:text-white"
                    placeholder="Budi Santoso"
                    type="text"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#87646a] ml-1">
                Email atau No. WhatsApp
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#87646a] text-xl">
                  mail
                </span>
                <input
                  className="w-full pl-12 pr-4 py-4 bg-white dark:bg-[#2d1a1d] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-xl text-sm focus:ring-2 focus:ring-wedding-accent/20 focus:border-wedding-accent transition-all outline-none text-[#171112] dark:text-white"
                  placeholder="contoh@email.com"
                  type="email"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-bold uppercase tracking-wider text-[#87646a]">
                  Kata Sandi
                </label>
                <Link
                  href="/auth/forgot-password"
                  className="text-xs font-semibold text-wedding-accent hover:underline"
                >
                  Lupa?
                </Link>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#87646a] text-xl">
                  lock
                </span>
                <input
                  className="w-full pl-12 pr-12 py-4 bg-white dark:bg-[#2d1a1d] border border-[#e5dcdd] dark:border-[#3d2a2d] rounded-xl text-sm focus:ring-2 focus:ring-wedding-accent/20 focus:border-wedding-accent transition-all outline-none text-[#171112] dark:text-white"
                  placeholder="••••••••"
                  type="password"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#87646a]">
                  <span className="material-symbols-outlined text-xl">
                    visibility
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Primary Action Button */}
          <Link href="/auth/otp">
            <button className="w-full mt-8 py-4 bg-wedding-accent text-white font-bold rounded-xl shadow-lg shadow-wedding-accent/25 hover:bg-wedding-accent/90 active:scale-[0.98] transition-all">
              {tab === "register" ? "Daftar Sekarang" : "Masuk"}
            </button>
          </Link>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#e5dcdd] dark:border-[#3d2a2d]"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
              <span className="bg-white dark:bg-[#1a0d0f] px-4 text-[#87646a]">
                Atau
              </span>
            </div>
          </div>

          {/* Social Login */}
          <button className="w-full py-4 bg-white dark:bg-transparent border border-[#e5dcdd] dark:border-[#3d2a2d] text-[#171112] dark:text-white font-semibold rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
            <img
              alt="Google Logo"
              className="w-5 h-5"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsC4o7Nwho4__jni6nGldWPmhA4y19QYqUyKP-owRsWYFOyELaqsLptI43YPqLDmHAatfzclaTinTr7PXZfUL7oKkevFwJP1RFevVqBsG85KLr_ebsqmXABeEtnCb54TJmV0wu244PBsbY-E4oLiYamvfkrmR7WjzaB_PqUGLAcR01GioKYXK0eGubAkp5Dx2Inn0FDEI6fsIRuOIyuLiO7alknSJHzc9d2JmHlZSt7PTirV_UJby5Mt5GkmKzxeCDnUH9GZ4bmCze"
            />
            Lanjutkan dengan Google
          </button>

          {/* Terms and Conditions */}
          <p className="text-[11px] text-center text-[#87646a] mt-8 leading-relaxed px-4">
            Dengan mendaftar, Anda menyetujui{" "}
            <a className="text-wedding-accent font-semibold underline" href="#">
              Syarat & Ketentuan
            </a>{" "}
            serta{" "}
            <a className="text-wedding-accent font-semibold underline" href="#">
              Kebijakan Privasi
            </a>{" "}
            WeddingPay.
          </p>
        </div>

        {/* iOS Bottom Indicator (Visual only) */}
        <div className="pb-3 flex justify-center">
          <div className="w-32 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
