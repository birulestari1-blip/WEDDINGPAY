import React from "react";
import Link from "next/link";

export default async function PackageDetail({ params }: { params: Promise<{ category: string, id: string, pid: string }> }) {
  const { category, id, pid } = await params;
  return (
    <div className="bg-background-light text-[#1b0d12] min-h-screen font-display antialiased">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100 px-4 py-3 flex items-center justify-between">
        <Link href={`/vendors/${category}/${id}`} className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm text-[#1b0d12]">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </Link>
        <h2 className="text-sm font-bold tracking-tight uppercase">Detail Paket</h2>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm text-[#1b0d12]">
          <span className="material-symbols-outlined">share</span>
        </button>
      </div>

      <main className="pb-32 pt-16">
        <div className="relative w-full">
          <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar">
            <div className="snap-center shrink-0 w-[90%] ml-4 mr-2 first:ml-4 last:mr-4 py-4">
              <div className="aspect-[4/5] w-full rounded-2xl bg-cover bg-center shadow-lg" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWa7xmEx1vuJPLzrcMHjynHCF6CvRAjR845lUhPVXb85nkJIy0lOf1uW8GnTtp668zxWkYF-fWuPpn3hhpO2-kyccrVkTmTHAZr0XDqNiZ714_kda_0DGlutCQzi5B_BCBAc9lfgTBmRcdPDTgdOZ74j6jEuISbKniYCLbpY1ew6LqlroMXfDagTg_2kQ58gJ9SnWtdjWMpTtwwcDZqqNM5ueZygLL6axNK5SC14YPzC_hE8jlojPnUBVqjp2kK0F9WnunaTBqC8QA')" }}></div>
            </div>
          </div>
          <div className="flex justify-center gap-1.5 mt-2">
            <div className="w-6 h-1.5 rounded-full bg-wedding-primary"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
          </div>
        </div>

        <div className="px-5 mt-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-wedding-primary/10 text-wedding-primary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Most Popular</span>
            <div className="flex items-center gap-1 text-yellow-500">
              <span className="material-symbols-outlined text-sm !fill-1">star</span>
              <span className="text-sm font-bold text-[#1b0d12]">4.9</span>
            </div>
          </div>
          <h1 className="text-3xl font-extrabold text-[#1b0d12] leading-tight">Premium Rose Gold Luxury Wedding</h1>
          <p className="text-2xl font-bold text-wedding-primary mt-2">Rp 75.000.000</p>
        </div>

        <div className="px-5 mt-8">
          <div className="bg-white border border-wedding-primary/20 rounded-2xl p-4 flex gap-4 items-start shadow-sm">
            <div className="w-12 h-12 bg-wedding-primary/10 rounded-xl flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-wedding-primary text-2xl">verified_user</span>
            </div>
            <div>
              <h3 className="font-bold text-[#1b0d12] text-sm">WeddingPay Escrow Protection</h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Dana Anda aman. Pembayaran hanya akan diteruskan ke vendor setelah Anda mengonfirmasi layanan telah selesai sesuai kontrak.
              </p>
            </div>
          </div>
        </div>

        <div className="px-5 mt-8">
          <h2 className="text-lg font-bold mb-3">Tentang Paket</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Wujudkan pernikahan impian dengan tema Rose Gold yang mewah dan romantis. Paket ini dirancang khusus untuk calon pengantin yang menginginkan kemewahan tanpa kompromi, mencakup seluruh kebutuhan utama mulai dari dekorasi hingga katering eksklusif.
          </p>
        </div>

        <div className="px-5 mt-8">
          <h2 className="text-lg font-bold mb-4">Apa yang Anda Dapatkan</h2>
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: "restaurant", title: "Catering 500 Pax", desc: "Prasmanan & 5 Gubukan Populer" },
              { icon: "auto_awesome", title: "Dekorasi Pelaminan 12m", desc: "Fresh flowers & High-end Lighting" },
              { icon: "face_retouching_natural", title: "MUA & Hairdo Premium", desc: "Akad & Resepsi untuk Pengantin" },
              { icon: "photo_camera", title: "Fotografi & Videografi", desc: "Cinematic Movie & 100 Edited Photos" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-3 bg-white rounded-xl border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-background-light flex items-center justify-center text-wedding-primary">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <p className="font-bold text-sm">{item.title}</p>
                  <p className="text-xs text-gray-500 italic">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-5 mt-10">
          <div className="flex items-center justify-between p-4 bg-gray-100 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-white" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBnLFAY9iDmU5Q_QnbNwlivfITj__XCbAsPXuG2iqHC7XuXu3hKTy8d1Z1iEp8T2KaW9OfY8Mno9Sxou1A55KZgAhAmR5BT1I1AerU6HQetb7qEE80SmYd0TNo4jVimA6S-RpNsQ_8IQG3vluwXWlpnQmZw8AoVZBw0Xu00cDzhVrvNdmYNEyj9oPNxTj8p89hW9FI0zvOvVa7CkGkJI9MQv3FWbXoF1SxjEcrktTA9Fg3V5wWM4ATZkNFg-bSXAMN5vA6RsE35Jzei')" }}></div>
              <div>
                <h4 className="font-bold text-sm">Elysian Wedding Organizer</h4>
                <div className="flex items-center gap-1 text-[10px] text-gray-500">
                  <span className="material-symbols-outlined text-xs">location_on</span>
                  Jakarta Selatan
                </div>
              </div>
            </div>
            <button className="text-xs font-bold text-wedding-primary border border-wedding-primary px-3 py-1.5 rounded-lg">Kunjungi</button>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50 p-5 bg-white/80 backdrop-blur-md border-t border-gray-100">
        <div className="max-w-md mx-auto flex gap-3">
          <button className="flex-none w-14 h-14 rounded-xl border-2 border-wedding-primary/20 flex items-center justify-center text-wedding-primary bg-white">
            <span className="material-symbols-outlined text-2xl">chat</span>
          </button>
          <button className="flex-1 h-14 bg-wedding-primary text-white rounded-xl font-bold text-base shadow-lg shadow-wedding-primary/30 flex items-center justify-center gap-2">
            Pesan Paket Ini
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <div className="h-4"></div>
      </div>
    </div>
  );
}
