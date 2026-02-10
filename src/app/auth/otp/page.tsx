"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function OTPPage() {
  const [timer, setTimer] = useState(59);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#171112] dark:text-white antialiased font-plus-jakarta min-h-screen flex items-center justify-center">
      {/* Main Container */}
      <div className="relative flex h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-white dark:bg-background-dark shadow-2xl">
        {/* Top App Bar */}
        <div className="flex items-center bg-transparent p-4 pb-2 justify-between">
          <Link
            href="/auth/login"
            className="text-[#171112] dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </Link>
          <h2 className="text-[#171112] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">
            Verifikasi Kode OTP
          </h2>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col px-6 pt-6 pb-10">
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 bg-wedding-accent/10 dark:bg-wedding-accent/20 rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-wedding-accent text-5xl">
                smartphone
              </span>
            </div>
            <h1 className="text-[#171112] dark:text-white text-2xl font-bold tracking-tight text-center mb-3">
              Keamanan Akun
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed text-center max-w-[280px]">
              Kami telah mengirimkan kode verifikasi ke nomor WhatsApp Anda{" "}
              <span className="text-[#171112] dark:text-white font-semibold">
                0812****5678
              </span>
            </p>
          </div>

          {/* OTP Input Section */}
          <div className="flex justify-between gap-2 mb-8">
            {[...Array(6)].map((_, i) => (
              <input
                key={i}
                className="w-12 h-14 text-center text-xl font-bold bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-wedding-accent transition-all"
                maxLength={1}
                type="text"
              />
            ))}
          </div>

          <div className="space-y-6">
            <Link href="/">
              <button className="w-full bg-wedding-accent hover:bg-wedding-accent/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-wedding-accent/20 transition-all flex items-center justify-center gap-2">
                Verifikasi
                <span className="material-symbols-outlined">verified</span>
              </button>
            </Link>

            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span>Kirim ulang kode dalam</span>
                <span className="font-bold text-wedding-accent">
                  00:{timer.toString().padStart(2, "0")}
                </span>
              </div>
              <div className="w-full flex items-center justify-center gap-3">
                <div className="h-px flex-1 bg-gray-100 dark:bg-gray-800"></div>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                  Atau
                </span>
                <div className="h-px flex-1 bg-gray-100 dark:bg-gray-800"></div>
              </div>
              <button className="flex items-center gap-2 text-wedding-accent font-bold text-sm hover:underline">
                <span className="material-symbols-outlined text-lg">mail</span>
                Kirim kode melalui Email
              </button>
            </div>
          </div>

          <div className="flex-1"></div>

          <div className="text-center mt-auto">
            <div className="flex items-center justify-center gap-2 opacity-60">
              <span className="material-symbols-outlined text-sm">
                verified_user
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold">
                WeddingPay Secure Verification
              </span>
            </div>
          </div>
        </div>

        {/* iOS Home Indicator */}
        <div className="flex justify-center pb-2">
          <div className="w-32 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
