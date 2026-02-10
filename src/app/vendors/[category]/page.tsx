import React from "react";
import Link from "next/link";

const categoryData: Record<string, any> = {
  catering: {
    title: "Katalog Catering",
    banner: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsMXTWF3m3BdORbCw5Rdz0I7QxSsEghppJenojLKilbpyd-N5Oi8quk1nS-yDWDM4S5IMokIr4e4qzvCclj5OUBasp__ptAOk25Rdd7QO4amcysMwUrtOJsbzXHxhVPhXSUY-O6c-2dSJgYeErqh7xlatWVoMDSu7FxmgkJRKd9N9hdhgrvi8pB-nYhWTPBZ74RSDljQZ0IN-y6LgbJLrBp9tk-ONFyvweXUGN_SAZa-ptllUhFgQ6t9m76J_VAGL2mKlIQ3hz6qI8",
    vendors: [
      { id: 1, name: "Berkah Catering", price: "Rp 45.000/pax", rating: "4.9", location: "Jakarta Selatan", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsMXTWF3m3BdORbCw5Rdz0I7QxSsEghppJenojLKilbpyd-N5Oi8quk1nS-yDWDM4S5IMokIr4e4qzvCclj5OUBasp__ptAOk25Rdd7QO4amcysMwUrtOJsbzXHxhVPhXSUY-O6c-2dSJgYeErqh7xlatWVoMDSu7FxmgkJRKd9N9hdhgrvi8pB-nYhWTPBZ74RSDljQZ0IN-y6LgbJLrBp9tk-ONFyvweXUGN_SAZa-ptllUhFgQ6t9m76J_VAGL2mKlIQ3hz6qI8" },
      { id: 2, name: "Sakura Wedding Food", price: "Rp 65.000/pax", rating: "4.8", location: "Bandung", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDp9WyKA2xTXrbFUPmbuwoRXEjfxmNEMX126xHor8rqiForIm3yBZ6JwybIPJVM-oDMIi7zwRJyAJwCFN87biKQJWFTOdS9CjfWPdXyyZ78BNHgNs1qeaYVLT6ZLcENK2cZLzBxcXTxgFhkeowU_7uSyG9oEfvM8ibtrCVsb2aewki7f0S7HlU4iwfnTmDrkFicS7KYChxkOEq9RNj1O3unL2pIwoYmGeRLznOfKo-_bsbTsYXmGL2sIM1shS7pZVczHldkdrdyEZPy" },
    ]
  },
  venue: {
    title: "Katalog Venue",
    banner: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNTkPELSVcsFAhtC7wN0eQUL4yThvVN6GxklqeyFMBz_ijOSc_2fuYsT_744lYP0a2K6I7-Y0YZ8BPfvxqq_sED5QP_1d-L42AVKIMF_cd_EJ94obRveN3ftg40ClNYYn7YowXwhZ1MJG1C3y0aCtfG-n-PZ1OpXvzA31BEEIgKIW00q1R-LqtZgh91ZhEkjvq7Dzwu0G-VmUtOGCJL7VSNDZboYK05CwpeMEyNQoGZMXTOjtpEP06OSsxAiTGiO0GOWbMRNDGHQHm",
    vendors: [
      { id: 1, name: "Grand Ballroom Mulia", price: "Rp 75.000.000", rating: "5.0", location: "Senayan, Jakarta", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNTkPELSVcsFAhtC7wN0eQUL4yThvVN6GxklqeyFMBz_ijOSc_2fuYsT_744lYP0a2K6I7-Y0YZ8BPfvxqq_sED5QP_1d-L42AVKIMF_cd_EJ94obRveN3ftg40ClNYYn7YowXwhZ1MJG1C3y0aCtfG-n-PZ1OpXvzA31BEEIgKIW00q1R-LqtZgh91ZhEkjvq7Dzwu0G-VmUtOGCJL7VSNDZboYK05CwpeMEyNQoGZMXTOjtpEP06OSsxAiTGiO0GOWbMRNDGHQHm" },
      { id: 2, name: "The Glass House Garden", price: "Rp 45.000.000", rating: "4.9", location: "Bandung", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBK86C0IX7v0xDl_3yLPe-HIeMd5EEERTDivZLTooDiGwxqxaNWB5TvWICN-cZFFWuEcKextF8KeJX7-NbORWynajmj3F2Hwn5TAqilk69igpDFVtGNkkr7OuWqs30_QpX-GY8ckRMe6UZ_y36XFfLIgsJ96-T56AY7GX56KbMd03O4NlCv9DhoCTlKViHJ095NhTjhUJZckd0Eu-0NFW5x2I-J-4bvzBcy8gHYwQ3J9DOENHdpySOxUtW5tI3zlZO7vx75qpUVzM-0" },
    ]
  },
  decor: {
    title: "Katalog Dekorasi",
    vendors: [
      { id: 1, name: "Citra Decor Wedding", price: "Rp 25jt", rating: "4.9", location: "Jakarta", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZocGfR6L3jt76kt-w7PrKMwwLh0OyN0jFLxwAhGSc-mXriE5wJae-9Qfxz7uTThMdyvHlyEDGoMH_44IsFMPoRVpPyDQBcAHYEh9Gh3mMjnIWo-IwsgBfDl4dAk38pKFmza5ENv63H8NrMc_PbRwQbRIdGlykP9eW-jDE1cP3AQWAoVPpxGW7MoUvJYBEIMl7fN7y1e9WxiSNGHo51jNUBaa0WShu31Yn7_NwsLYUrt_p_DM6Wi7iRwAXthL9ehJFn15GKksGfvgB" },
    ]
  }
};

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const category = (await params).category;
  const data = categoryData[category] || { title: "Katalog Vendor", vendors: [] };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen font-manrope">
      <div className="max-w-md mx-auto bg-white dark:bg-background-dark min-h-screen shadow-2xl flex flex-col">
        {/* Sticky Top Navigation */}
        <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <Link href="/vendors/categories" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
              </Link>
              <h1 className="text-xl font-extrabold tracking-tight">{data.title}</h1>
            </div>
            <div className="flex items-center gap-1">
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined">search</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined">tune</span>
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 pt-4 space-y-6">
          {data.vendors.map((vendor: any) => (
            <Link
              key={vendor.id}
              href={`/vendors/${category}/${vendor.id}`}
              className="group flex flex-col overflow-hidden rounded-xl bg-white dark:bg-[#1c2226] border border-slate-200 dark:border-slate-800 shadow-sm transition-all active:scale-[0.98]"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${vendor.image}')` }}
                ></div>
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/90 text-white backdrop-blur-sm shadow-lg">
                  <span className="material-symbols-outlined text-[14px] fill-1">verified_user</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider">Verified Escrow</span>
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm">
                  <span className="material-symbols-outlined text-xl">favorite</span>
                </button>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{vendor.name}</h3>
                  <div className="flex items-center gap-1 text-amber-500">
                    <span className="material-symbols-outlined text-lg fill-1">star</span>
                    <span className="text-sm font-bold">{vendor.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <p className="text-xs font-medium">{vendor.location}</p>
                </div>
                <div className="pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold tracking-widest">Mulai Dari</span>
                    <p className="text-primary text-base font-extrabold">{vendor.price}</p>
                  </div>
                  <button className="px-5 py-2 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
                    Detail
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </main>

        {/* Bottom Nav */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 px-6 pb-6 pt-2 max-w-md mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex flex-col items-center gap-1 text-slate-400">
              <span className="material-symbols-outlined">home</span>
              <span className="text-[10px] font-bold uppercase">Beranda</span>
            </Link>
            <Link href="/vendors/categories" className="flex flex-col items-center gap-1 text-primary">
              <span className="material-symbols-outlined fill-1">restaurant</span>
              <span className="text-[10px] font-bold uppercase">Vendor</span>
            </Link>
            <button className="flex flex-col items-center gap-1 text-slate-400">
              <span className="material-symbols-outlined">favorite</span>
              <span className="text-[10px] font-bold uppercase">Simpan</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-slate-400">
              <span className="material-symbols-outlined">person</span>
              <span className="text-[10px] font-bold uppercase">Profil</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
