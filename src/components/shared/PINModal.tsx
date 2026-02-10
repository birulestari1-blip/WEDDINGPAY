"use client";

import React, { useState } from "react";

interface PINModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  title?: string;
  description?: string;
  amount?: string;
}

export default function PINModal({
  isOpen,
  onClose,
  onSuccess,
  title = "Konfirmasi Keamanan",
  description = "Masukkan 6 digit PIN transaksi Anda",
  amount,
}: PINModalProps) {
  const [pin, setPin] = useState<string>("");

  if (!isOpen) return null;

  const handleKeyClick = (key: string) => {
    if (pin.length < 6) {
      const newPin = pin + key;
      setPin(newPin);
      if (newPin.length === 6) {
        // Simulate verification
        setTimeout(() => {
          onSuccess();
          onClose();
          setPin("");
        }, 500);
      }
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col justify-end bg-black/40 backdrop-blur-md">
      {/* Bottom Sheet Content */}
      <div className="bg-white dark:bg-[#1a202c] rounded-t-[2.5rem] w-full max-w-md mx-auto flex flex-col items-stretch shadow-2xl animate-in slide-in-from-bottom duration-300">
        {/* Handle */}
        <div className="flex h-8 w-full items-center justify-center">
          <div className="h-1.5 w-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>

        {/* Header Section */}
        <div className="px-6 pt-2 pb-6 text-center relative">
          <button
            onClick={onClose}
            className="absolute left-6 top-2 text-gray-400"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600/10 p-3 rounded-full">
              <span className="material-symbols-outlined text-blue-600 text-3xl">
                verified_user
              </span>
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {title}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>

        {/* Transaction Info Card */}
        {amount && (
          <div className="mx-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 flex flex-col items-center">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
              Pelepasan Dana
            </span>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-2 text-center">
              Catering Berkah - Pernikahan Budi & Ani
            </p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {amount}
            </h3>
          </div>
        )}

        {/* PIN Input Dots */}
        <div className="flex justify-center gap-3 px-6 py-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`w-12 h-14 border-2 rounded-xl flex items-center justify-center bg-white dark:bg-gray-900 shadow-sm transition-all ${
                i < pin.length ? "border-blue-600" : "border-gray-200 dark:border-gray-700"
              }`}
            >
              {i < pin.length && (
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mb-6">
          <button className="text-blue-600 font-semibold text-sm hover:underline">
            Lupa PIN Transaksi?
          </button>
        </div>

        {/* Custom Numeric Keypad */}
        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 pb-12 rounded-t-3xl border-t border-gray-100 dark:border-gray-700">
          <div className="grid grid-cols-3 gap-y-4 gap-x-8 max-w-sm mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => handleKeyClick(num.toString())}
                className="h-16 flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white rounded-xl transition-all active:bg-gray-200"
              >
                {num}
              </button>
            ))}
            <button className="h-16 flex items-center justify-center text-gray-900 dark:text-white rounded-xl">
              <span className="material-symbols-outlined text-3xl">
                fingerprint
              </span>
            </button>
            <button
              onClick={() => handleKeyClick("0")}
              className="h-16 flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white rounded-xl transition-all active:bg-gray-200"
            >
              0
            </button>
            <button
              onClick={handleDelete}
              className="h-16 flex items-center justify-center text-gray-900 dark:text-white rounded-xl active:bg-gray-200"
            >
              <span className="material-symbols-outlined text-3xl">
                backspace
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Safety Label */}
        <div className="bg-gray-50 dark:bg-gray-800/50 pb-8 flex items-center justify-center gap-2 text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] font-bold">
          <span className="material-symbols-outlined !text-sm">lock</span>
          Keamanan Terenkripsi AES-256
        </div>
      </div>
    </div>
  );
}
