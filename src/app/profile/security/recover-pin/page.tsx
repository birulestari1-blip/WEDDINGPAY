"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function RecoverPINPage() {
  const [timer, setTimer] = useState(45);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex justify-center items-start sm:items-center font-inter">
      {/* Mobile Container Emulator */}
      <div className="w-full max-w-[430px] min-h-screen sm:min-h-[844px] bg-white dark:bg-gray-900 shadow-2xl overflow-hidden relative flex flex-col">
        {/* TopAppBar Navigation */}
        <nav className="flex items-center justify-between px-4 pt-12 pb-4 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
          <Link
            href="/profile/security"
            className="text-gray-800 dark:text-white p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="material-symbols-outlined text-2xl leading-none">
              arrow_back_ios_new
            </span>
          </Link>
          <h1 className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">
            Pemulihan PIN
          </h1>
        </nav>

        <div className="flex-1 overflow-y-auto px-6 pt-8 pb-12 flex flex-col items-center">
          {/* Illustration Component */}
          <div className="w-full max-w-[240px] aspect-square mb-8 bg-blue-600/5 rounded-full flex items-center justify-center relative">
            <div className="absolute inset-0 bg-blue-600/10 rounded-full animate-pulse"></div>
            <div className="z-10 bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl border border-blue-600/10 flex items-center justify-center">
              <span
                className="material-symbols-outlined text-blue-600 text-7xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                shield_person
              </span>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full shadow-lg border-4 border-white dark:border-gray-900 flex items-center justify-center">
              <span className="material-symbols-outlined text-xl font-bold">
                lock_reset
              </span>
            </div>
          </div>

          {/* Header Text */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Verifikasi Identitas Anda
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed px-2">
              Kami telah mengirimkan kode OTP 6-digit ke WhatsApp atau Email
              terdaftar{" "}
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                (+62 812****456)
              </span>{" "}
              untuk mereset PIN keamanan Anda.
            </p>
          </div>

          {/* OTP Input Section */}
          <div className="w-full mb-8">
            <div className="flex justify-between gap-2">
              {[...Array(6)].map((_, i) => (
                <input
                  key={i}
                  className="flex h-14 w-full max-w-[50px] text-center border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg text-xl font-bold transition-all focus:outline-none focus:ring-1 focus:ring-blue-600"
                  inputMode="numeric"
                  maxLength={1}
                  type="text"
                />
              ))}
            </div>
            {/* Resend Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Belum menerima kode?{" "}
                <button className="text-blue-600 font-semibold hover:underline">
                  Kirim ulang (00:{timer.toString().padStart(2, "0")})
                </button>
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-auto w-full">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 mb-4">
              <span>Verifikasi & Buat PIN Baru</span>
            </button>
            {/* Footer Support */}
            <button className="w-full py-2 flex items-center justify-center gap-2 group">
              <span className="material-symbols-outlined text-gray-400 group-hover:text-blue-600 text-sm">
                support_agent
              </span>
              <span className="text-xs text-gray-400 group-hover:text-blue-600 transition-colors">
                Butuh bantuan lain? Hubungi CS WeddingPay
              </span>
            </button>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="px-6 pb-6 flex justify-center gap-1.5">
          <div className="h-1.5 w-8 bg-blue-600 rounded-full"></div>
          <div className="h-1.5 w-1.5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <div className="h-1.5 w-1.5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        </div>

        {/* Home Indicator (iOS Style) */}
        <div className="w-full flex justify-center pb-2">
          <div className="w-32 h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
        </div>

        {/* Security Badge */}
        <div className="absolute bottom-12 right-6 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-9xl">
            verified_user
          </span>
        </div>
      </div>
    </div>
  );
}
