import React from "react";
import Link from "next/link";

export default async function VendorProjectEvidence({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="bg-background-light text-slate-900 min-h-screen font-manrope antialiased">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href={`/vendor/projects/${id}`} className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors">
            <span className="material-symbols-outlined text-gray-700">arrow_back_ios_new</span>
          </Link>
          <h1 className="text-lg font-bold tracking-tight">Bukti Kerja Vendor</h1>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="max-w-md mx-auto pb-24">
        <div className="p-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex gap-4 items-start">
              <div className="w-20 h-20 bg-cover bg-center rounded-lg flex-shrink-0" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAuLieZCs1Ga3rQS4Tq584ergnSxzfyyVDwIDkNqx63hkJ0aYBjN68rU9nGdr-UYCkMj_rp5s7tStyrTspJirvt4l6TuOfXaza71CuvIbwOK9_LgKu4R1zkvClltB9i56PKo8Boj7GwNy2VdUnLb249oO9-eCGmVZjh2J40BVznrOF2cVHSWtAD55a5gW9BCluB4YDobu_nsXq9O00yogv-KVRE7rBZtoLH5NpjSsoXvZvAc8Rknvxn3TXxKCU1m1bLBr4r24yVWA3h')" }}></div>
              <div className="flex-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-wedding-primary bg-wedding-primary/10 px-2 py-0.5 rounded-full">Proyek Aktif</span>
                <h2 className="text-lg font-bold mt-1 leading-tight">Dekorasi Pernikahan - Akad</h2>
                <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">person</span>
                  Klien: Budi & Shinta
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 mb-6">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3">
            <span className="material-symbols-outlined text-wedding-primary">info</span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-blue-900">Instruksi Pengunggahan</p>
              <p className="text-xs text-blue-700 mt-1 leading-relaxed">
                Unggah bukti kerja (Foto/PDF). Pengantin akan menerima notifikasi otomatis untuk menyetujui pelepasan dana escrow setelah verifikasi.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 px-4">
          <div className="bg-white rounded-xl border-2 border-wedding-primary/20 p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-wedding-primary/10 flex items-center justify-center text-wedding-primary">
                  <span className="material-symbols-outlined text-lg">edit_document</span>
                </div>
                <h4 className="font-bold text-gray-800">Sketsa Desain Akhir</h4>
              </div>
              <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-1 rounded">PERLU INPUT</span>
            </div>
            <p className="text-sm text-gray-500 mb-4 leading-normal">
              Unggah sketsa desain 3D atau PDF konsep dekorasi yang telah disepakati bersama pengantin.
            </p>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group">
              <div className="size-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform text-wedding-primary">
                <span className="material-symbols-outlined">cloud_upload</span>
              </div>
              <p className="text-sm font-bold text-gray-700">Unggah Foto atau PDF</p>
              <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest font-semibold">Maks. 10MB</p>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-light via-background-light/90 to-transparent">
        <div className="max-w-md mx-auto">
          <button className="w-full bg-wedding-primary hover:bg-wedding-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-wedding-primary/20 transition-all active:scale-95 flex items-center justify-center gap-2">
            <span>Kirim Bukti Kerja</span>
            <span className="material-symbols-outlined text-lg">send</span>
          </button>
        </div>
      </div>
    </div>
  );
}
