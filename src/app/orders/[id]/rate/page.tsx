import React from "react";
import Link from "next/link";

export default async function OrderRate({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="bg-background-light min-h-screen text-[#181611] font-jakarta antialiased">
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl flex flex-col relative pb-24">
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md px-4 py-4 flex items-center border-b border-gray-100">
          <Link href={`/orders/${id}`} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
          </Link>
          <h1 className="flex-1 text-center font-bold text-lg pr-10">Beri Penilaian</h1>
        </header>

        <main className="flex-1 px-5 py-6 space-y-8">
          <section className="flex flex-col items-center text-center space-y-4">
            <div className="relative">
              <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-primary/20 bg-gray-200">
                <img alt="Vendor Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG8c3U64HHtoxwqW-u_mXEQcb6d8DzAY20sh6O6ZDEPgh5lsY5hUqFW_T7y9b2N5Bxzh9Uh9NbelpSqlAVFTSiHgZhQ8Uxqphb2yiWErTIs2qz-jserlfHnVqarj3S_dwmwpEqJpShS0eaY2iQyoNpK4DZyseQuxAeQAPoOQgLp8wLD22W3rUyXUkXUmpR3Ne6qoYhPi-YycCdd_wVUa1CiMybQHPCRRh4rkO3kgC12VDrjKNQzF89nh5T36e_IDChXMTxW_gP_sh8" />
              </div>
              <div className="absolute bottom-1 right-1 bg-yellow-500 text-white p-1.5 rounded-full shadow-lg border-2 border-white">
                <span className="material-symbols-outlined text-sm leading-none flex items-center justify-center">verified</span>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Citra Rasa Catering</h2>
              <p className="text-gray-500 font-medium">Catering & Banquet Service</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-semibold">Acara: 12 Des 2023</p>
            </div>
          </section>

          <section className="space-y-6 bg-background-light/50 p-5 rounded-2xl">
            <div className="space-y-3">
              {["Kualitas Layanan", "Komunikasi", "Kesesuaian Harga"].map((label) => (
                <div key={label} className="flex justify-between items-center">
                  <h3 className="font-semibold text-sm">{label}</h3>
                  <div className="flex gap-1 text-yellow-500">
                    {[1, 2, 3, 4].map(i => <span key={i} className="material-symbols-outlined !fill-1">star</span>)}
                    <span className="material-symbols-outlined">star</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <label className="font-bold text-sm block ml-1">Tulis Ulasan Detail</label>
            <textarea className="w-full bg-white border border-gray-200 rounded-xl p-4 text-sm focus:ring-2 focus:ring-wedding-primary focus:border-transparent outline-none transition-all resize-none" placeholder="Ceritakan momen bahagiamu bersama vendor ini..." rows={4}></textarea>
          </section>

          <section className="space-y-3">
            <label className="font-bold text-sm block ml-1">Media Dokumentasi</label>
            <div className="grid grid-cols-4 gap-3">
              <button className="aspect-square rounded-xl border-2 border-dashed border-wedding-primary/40 bg-wedding-primary/5 flex flex-col items-center justify-center gap-1 hover:bg-wedding-primary/10 transition-colors text-wedding-primary">
                <span className="material-symbols-outlined text-2xl">add_a_photo</span>
                <span className="text-[10px] font-bold uppercase">Unggah</span>
              </button>
            </div>
            <p className="text-[11px] text-gray-400 italic">Maksimal 5 foto hasil kerja vendor.</p>
          </section>

          <section className="flex items-center justify-between py-2 border-t border-gray-100 pt-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-wedding-primary">favorite</span>
              <div>
                <p className="text-sm font-semibold leading-tight">Rekomendasikan vendor ini?</p>
                <p className="text-xs text-gray-500">Akan muncul di profil vendor</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-wedding-primary"></div>
            </label>
          </section>
        </main>

        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 bg-white/95 backdrop-blur-sm border-t border-gray-100">
          <button className="w-full bg-wedding-primary hover:bg-wedding-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-wedding-primary/20 transition-all flex items-center justify-center gap-2 active:scale-[0.98]">
            <span>Kirim Ulasan</span>
            <span className="material-symbols-outlined text-lg">send</span>
          </button>
        </div>
      </div>
    </div>
  );
}
