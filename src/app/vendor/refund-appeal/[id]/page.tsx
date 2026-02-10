import React from "react";
import Link from "next/link";

export default async function VendorRefundAppeal({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="bg-background-light text-[#111318] antialiased min-h-screen font-manrope">
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/vendor" className="flex items-center text-wedding-primary">
            <span className="material-symbols-outlined">arrow_back_ios</span>
            <span className="text-base font-medium">Dashboard</span>
          </Link>
          <h1 className="text-base font-bold tracking-tight">Ajukan Banding</h1>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="max-w-md mx-auto pb-32">
        <div className="m-4 bg-amber-50 border border-amber-200 p-3 rounded-xl flex gap-3 text-amber-900">
          <span className="material-symbols-outlined shrink-0">warning</span>
          <p className="text-xs font-semibold leading-tight">
            Penting: Pengajuan banding hanya dapat dilakukan satu kali. Pastikan semua bukti sudah lengkap sebelum mengirim.
          </p>
        </div>

        <div className="mx-4 mb-6">
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1 mb-3">Detail Keputusan Admin</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase">ID Transaksi</p>
                <p className="text-sm font-bold">#WP-99281-REF</p>
              </div>
              <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase italic">Refund Disetujui</span>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Alasan Keputusan Admin:</p>
                <p className="text-sm text-gray-700 leading-relaxed italic">
                  "Vendor dianggap gagal memenuhi kewajiban dokumentasi hasil kerja sesuai timeline kontrak. Bukti chat menunjukkan ketidaksiapan pada H-1."
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-1 text-red-600">Potongan Dana:</p>
                  <p className="text-base font-extrabold">Rp 5.500.000</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Tanggal Keputusan:</p>
                  <p className="text-sm font-semibold">14 Mei 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-4">
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1 mb-3">Formulir Pembelaan</h2>
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-800 ml-1">Deskripsi Sanggahan</label>
              <textarea
                className="w-full bg-white border border-gray-200 rounded-xl p-4 text-sm focus:ring-2 focus:ring-wedding-primary focus:border-transparent outline-none transition-all"
                placeholder="Jelaskan alasan mengapa keputusan ini harus ditinjau kembali..."
                rows={5}
              ></textarea>
              <p className="text-[10px] text-slate-500 ml-1">Sertakan detail kronologi kerja yang belum tercover sebelumnya.</p>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-800 ml-1">Lampiran Bukti Baru</label>
              <div className="grid grid-cols-3 gap-2">
                <button className="aspect-square border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center gap-1 hover:border-wedding-primary/50 hover:bg-wedding-primary/5 transition-all group">
                  <span className="material-symbols-outlined text-gray-400 group-hover:text-wedding-primary">add_a_photo</span>
                  <span className="text-[10px] font-bold text-slate-500 group-hover:text-wedding-primary">Upload</span>
                </button>
              </div>
              <p className="text-[10px] text-slate-500 ml-1">Mendukung format JPG, PNG, atau PDF (Max 5MB).</p>
            </div>
            <div className="bg-wedding-primary/5 rounded-xl p-4 border border-wedding-primary/10">
              <div className="flex items-center gap-2 mb-2 text-wedding-primary">
                <span className="material-symbols-outlined text-sm">info</span>
                <h4 className="text-xs font-bold">Tips Pengajuan Banding</h4>
              </div>
              <ul className="text-[11px] text-wedding-primary/80 space-y-1 ml-2 list-disc list-outside">
                <li>Lampirkan screenshot chat yang menunjukkan kesepakatan perubahan jadwal.</li>
                <li>Unggah foto hasil kerja fisik (jika ada) sebagai bukti jasa telah dilaksanakan.</li>
                <li>Pastikan dokumen kontrak yang diunggah mencantumkan klausul pembatalan.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 p-4 z-40 pb-8">
        <div className="max-w-md mx-auto grid grid-cols-1 gap-3">
          <button className="w-full bg-wedding-primary hover:bg-wedding-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-wedding-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
            <span>Kirim Pengajuan Banding</span>
            <span className="material-symbols-outlined text-lg">send</span>
          </button>
          <p className="text-center text-[10px] text-slate-500 font-medium px-4">
            Dengan menekan tombol di atas, Anda menyatakan bahwa informasi yang diberikan adalah benar dan sah.
          </p>
        </div>
      </div>
    </div>
  );
}
