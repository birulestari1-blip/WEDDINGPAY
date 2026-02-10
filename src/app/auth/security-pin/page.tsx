import React from "react";
import Link from "next/link";

export default function SecurityPinInput() {
  return (
    <div className="font-inter bg-background-light overflow-hidden h-screen font-manrope antialiased">
      <div className="fixed inset-0 z-0 overflow-hidden">
        <img
          alt="Wedding Setup"
          className="w-full h-full object-cover blur-sm brightness-50"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtSUckpRj4sdmYyQUkxNjsoWdIX8-bok5tuBpnGLbVi5NUW7ckQs-Qg0BA1fip4uYKmx9qCMjGQQKhK05-2KSCxcBc02yaZzqejcDGqmpEuAzgqMQ8hDl2ay3_FFFdEibAsrEIv_H8f2CTz9S8_s9dSxvRkYQCQhKre6tXLGq22NG9V6mzx4AgKBsgiPF5CUje-s94Fjma35jlC7cI-mUlq4OU8OP6J6bz0T1G8JkeDIXQsLYl888KhF6DVA6M9zgETu0vzHJmp12-"
        />
      </div>

      <div className="fixed inset-0 z-10 flex flex-col justify-end bg-black/40 backdrop-blur-md">
        <div className="bg-white rounded-t-[2.5rem] w-full max-w-md mx-auto flex flex-col items-stretch shadow-2xl animate-slide-up">
          <div className="flex h-8 w-full items-center justify-center">
            <div className="h-1.5 w-12 rounded-full bg-gray-200"></div>
          </div>

          <div className="px-6 pt-2 pb-6 text-center">
            <div className="flex justify-center mb-4 text-wedding-blue">
              <div className="bg-wedding-blue/10 p-3 rounded-full">
                <span className="material-symbols-outlined text-3xl">verified_user</span>
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">Konfirmasi Keamanan</h2>
            <p className="text-sm text-gray-500">Masukkan 6 digit PIN transaksi Anda</p>
          </div>

          <div className="mx-6 p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center">
            <span className="text-xs font-semibold text-wedding-blue uppercase tracking-wider mb-1">Pelepasan Dana</span>
            <p className="text-gray-700 text-sm mb-2 text-center">Catering Berkah - Pernikahan Budi & Ani</p>
            <h3 className="text-2xl font-bold text-gray-900">Rp 5.000.000</h3>
          </div>

          <div className="flex justify-center gap-3 px-6 py-10">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-12 h-14 border-2 border-wedding-blue rounded-xl flex items-center justify-center bg-white shadow-sm">
                <div className="w-3 h-3 bg-wedding-blue rounded-full"></div>
              </div>
            ))}
            {[4, 5, 6].map(i => (
              <div key={i} className="w-12 h-14 border-2 border-gray-200 rounded-xl flex items-center justify-center bg-white shadow-sm"></div>
            ))}
          </div>

          <div className="text-center mb-6">
            <button className="text-wedding-blue font-semibold text-sm hover:underline">Lupa PIN Transaksi?</button>
          </div>

          <div className="bg-gray-50 p-6 pb-12 rounded-t-3xl border-t border-gray-100">
            <div className="grid grid-cols-3 gap-y-4 gap-x-8 max-w-sm mx-auto">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                <button key={num} className="h-16 flex items-center justify-center text-2xl font-semibold text-gray-900 rounded-xl active:bg-gray-200 active:scale-95 transition-all">{num}</button>
              ))}
              <button className="h-16 flex items-center justify-center text-gray-900 rounded-xl active:bg-gray-200 active:scale-95 transition-all">
                <span className="material-symbols-outlined text-3xl">fingerprint</span>
              </button>
              <button className="h-16 flex items-center justify-center text-2xl font-semibold text-gray-900 rounded-xl active:bg-gray-200 active:scale-95 transition-all">0</button>
              <button className="h-16 flex items-center justify-center text-gray-900 rounded-xl active:bg-gray-200 active:scale-95 transition-all">
                <span className="material-symbols-outlined text-3xl">backspace</span>
              </button>
            </div>
          </div>

          <div className="bg-gray-50 pb-8 flex items-center justify-center gap-2 text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">
            <span className="material-symbols-outlined !text-sm">lock</span>
            Keamanan Terenkripsi AES-256
          </div>
        </div>
      </div>

      <div className="fixed top-6 right-6 z-20">
        <button className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold border border-white/20">
          BANTUAN
        </button>
      </div>
    </div>
  );
}
