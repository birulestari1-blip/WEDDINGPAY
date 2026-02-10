"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [method, setMethod] = useState<"email" | "whatsapp">("email");

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#171112] dark:text-white antialiased font-plus-jakarta min-h-screen flex items-center justify-center">
      {/* Main Container (iOS Phone Form Factor) */}
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
            Lupa Password
          </h2>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col px-6 pt-8 pb-10">
          {/* Illustration Header */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-24 h-24 bg-wedding-accent/10 dark:bg-wedding-accent/20 rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-wedding-accent text-5xl">
                lock_reset
              </span>
            </div>
            <h1 className="text-[#171112] dark:text-white text-2xl font-bold tracking-tight text-center mb-3">
              Pemulihan Akun
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed text-center max-w-[280px]">
              Masukkan email atau nomor WhatsApp Anda untuk menerima instruksi
              reset password.
            </p>
          </div>

          {/* Method Selector (Segmented Control) */}
          <div className="flex p-1 bg-gray-100 dark:bg-gray-800 rounded-xl mb-8">
            <button
              onClick={() => setMethod("email")}
              className={`flex-1 flex items-center justify-center py-2 rounded-lg transition-all text-sm font-semibold ${
                method === "email"
                  ? "bg-white dark:bg-gray-700 shadow-sm text-wedding-accent dark:text-white"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              <span className="material-symbols-outlined text-sm mr-2">
                mail
              </span>
              Email
            </button>
            <button
              onClick={() => setMethod("whatsapp")}
              className={`flex-1 flex items-center justify-center py-2 rounded-lg transition-all text-sm font-semibold ${
                method === "whatsapp"
                  ? "bg-white dark:bg-gray-700 shadow-sm text-wedding-accent dark:text-white"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              <span className="material-symbols-outlined text-sm mr-2">
                chat
              </span>
              WhatsApp
            </button>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">
                Email atau No. WhatsApp
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-gray-400 text-xl">
                    {method === "email" ? "alternate_email" : "smartphone"}
                  </span>
                </div>
                <input
                  className="block w-full pl-11 pr-4 py-3.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-wedding-accent focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                  placeholder={
                    method === "email"
                      ? "nama@email.com"
                      : "0812..."
                  }
                  type="text"
                />
              </div>
            </div>

            {/* Primary Action Button */}
            <button className="w-full bg-wedding-accent hover:bg-wedding-accent/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-wedding-accent/20 transition-all flex items-center justify-center gap-2 mt-4">
              Kirim Instruksi Pemulihan
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>

          {/* Spacer */}
          <div className="flex-1"></div>

          {/* Footer Links */}
          <div className="text-center mt-auto">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Sudah ingat password?{" "}
              <Link
                href="/auth/login"
                className="text-wedding-accent font-bold hover:underline ml-1"
              >
                Login di sini
              </Link>
            </p>

            {/* Security Note */}
            <div className="mt-8 flex items-center justify-center gap-2 opacity-60">
              <span className="material-symbols-outlined text-sm">
                verified_user
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold">
                Secure Marketplace Escrow
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
