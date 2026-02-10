import React from "react";
import Link from "next/link";

export default async function VendorReviews({ params }: { params: Promise<{ category: string, id: string }> }) {
  const { category, id } = await params;
  return (
    <div className="bg-background-light text-[#0d121b] min-h-screen font-inter antialiased">
      <div className="relative flex h-auto min-h-screen w-full flex-col max-w-[480px] mx-auto bg-white shadow-xl overflow-x-hidden">
        <header className="sticky top-0 z-50 flex items-center bg-white/80 backdrop-blur-md p-4 pb-3 justify-between border-b border-gray-100">
          <Link href={`/vendors/${category}/${id}`} className="text-[#0d121b] flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </Link>
          <h2 className="text-[#0d121b] text-lg font-bold leading-tight tracking-tight flex-1 text-center">Ulasan & Reputasi</h2>
          <div className="flex size-10 items-center justify-center">
            <button className="text-[#0d121b] flex items-center justify-center rounded-full hover:bg-gray-100">
              <span className="material-symbols-outlined">share</span>
            </button>
          </div>
        </header>

        <div className="p-4 flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 bg-wedding-primary/5 p-5 rounded-xl border border-wedding-primary/10">
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-1">
                <p className="text-[#0d121b] text-5xl font-black leading-tight tracking-tight">4.8</p>
                <p className="text-gray-500 font-medium">/ 5.0</p>
              </div>
              <div className="flex gap-0.5 text-wedding-primary mb-1">
                {[1, 2, 3, 4].map(i => <span key={i} className="material-symbols-outlined text-[20px] !fill-1">star</span>)}
                <span className="material-symbols-outlined text-[20px]">star</span>
              </div>
              <p className="text-gray-600 text-sm font-medium">Berdasarkan 124 ulasan</p>
              <div className="flex items-center gap-1 mt-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-full w-fit">
                <span className="material-symbols-outlined text-sm">verified</span>
                <span className="text-[10px] font-bold uppercase tracking-wider">Verified Vendor</span>
              </div>
            </div>
            <div className="flex-1 min-w-[180px] flex flex-col gap-2">
              {[5, 4, 3, 2].map((rating, idx) => (
                <div key={rating} className={`flex items-center gap-3 ${rating === 2 ? 'opacity-50' : ''}`}>
                  <span className="text-xs font-bold w-3 text-gray-500">{rating}</span>
                  <div className="flex-1 h-2 rounded-full bg-gray-200 overflow-hidden">
                    <div className="h-full bg-wedding-primary rounded-full" style={{ width: `${[70, 20, 5, 3][idx]}%` }}></div>
                  </div>
                  <span className="text-[10px] font-medium w-8 text-right text-gray-500">{[70, 20, 5, 3][idx]}%</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[#0d121b] text-lg font-bold leading-tight mb-4">Detail Penilaian</h3>
            <div className="grid grid-cols-3 gap-3">
              {["Komunikasi", "Kualitas", "Ketepatan"].map((label, idx) => (
                <div key={label} className="flex flex-col items-center gap-2 rounded-xl py-4 bg-white border border-gray-100 shadow-sm">
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">{label}</p>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-wedding-primary text-sm !fill-1">star</span>
                    <p className="text-[#0d121b] text-xl font-bold leading-tight">{[4.9, 4.7, 4.8][idx]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-2">
          <div className="flex items-center justify-between px-4 mb-3">
            <h3 className="text-[#0d121b] text-lg font-bold leading-tight">Foto dari Pengantin</h3>
            <p className="text-wedding-primary text-sm font-semibold cursor-pointer">Lihat Semua</p>
          </div>
          <div className="flex gap-3 overflow-x-auto px-4 no-scrollbar pb-2">
            {[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBxNJYRbZntRden73zmm2SnRTbedmmg4IydpwiKHOhGdZCk-rwRrdOPjO_0dIcAOzLgU7DE_-D7gSp0Leia05iSge1A2C05eY_5zJRI6fcU_tqDzaOHcSpQgVI2-pxRe4TBVsp56mbs53Ezm4gb9dU-n8-NK9Hu6f2RgSDt0Lm5qjSe8rdpJ0pqwIaHb6xTGl0noWSs7cPhUQOA2hitu8Y9uhA92uGQrPgudBkJHNsGX4WaEUlG-cCduhsJTCiOjRCZ5yo6Qyja9mZH",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuD-NFE6t0ab2D65U5m4mLaPeNG77iYouLkoSa4DaGyGU13i_LBsR8_tn1u21LhvulHFutH7m1U0CR5xH6jynPc5l3dhBkBmF-sT9efcrZ9FM8kWSlZOk6iMp78oY8_kdn899aeSwsfQL7UG-5yvIBSakCR2W0iBuQgMXtxstirQbg-HjlKOZDfTUI-rDQv-XUyiEVNEMQEpI_xiVk58Knr7gYWaf8mfXrUQXpVIVz3RGgxQKO3PInTXicJbHOf_98y7A_7tniTJrYwv",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuArAIbReH0axueFmT8xUXxYMZSHsfI4g9mMKRePUWHLX_-yZX__IzVtuUPz6-6TUC8deGIyj9rARCnBOWx2_6OqK19evqC_zFv64_Y0FjXscIuKwEiS9y6KgVcIY-8j26DCgCKtaHkaWV-B4TD6d6Ve-UmKiFs_9BIQCNoUOECn8IAwi93-EM3PZ7IVXLyS8BqCpNfbZVrpu9ln_1nh4NGQ2fPDxJuFRQddX0mMgyryW4FsfJXKynWUjSryfynEY6u7mK7CZTBzOvrE"
            ].map((img, idx) => (
              <div key={idx} className="relative shrink-0 w-28 h-28 rounded-lg overflow-hidden bg-gray-200 border border-gray-100">
                <img className="w-full h-full object-cover" src={img} alt="Review" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto px-4 py-4 no-scrollbar border-y border-gray-50 mt-4">
          <button className="shrink-0 px-4 py-2 rounded-full bg-wedding-primary text-white text-sm font-semibold">Paling Relevan</button>
          <button className="shrink-0 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium border border-gray-200">Terbaru</button>
          <button className="shrink-0 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium border border-gray-200">Dengan Foto</button>
          <button className="shrink-0 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium border border-gray-200">Rating 5</button>
        </div>

        <div className="p-4 flex flex-col gap-6">
          <div className="flex flex-col gap-3 pb-6 border-b border-gray-100">
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-wedding-primary/20 flex items-center justify-center font-bold text-wedding-primary">SA</div>
                <div>
                  <p className="text-sm font-bold text-[#0d121b]">Siti & Andi</p>
                  <p className="text-[11px] text-gray-500 font-medium">Menikah pada 12 Juli 2023</p>
                </div>
              </div>
              <div className="flex gap-0.5 text-wedding-primary">
                {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined text-sm !fill-1">star</span>)}
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-green-600">
              <span className="material-symbols-outlined text-xs">verified_user</span>
              <span>BOOKING TERVERIFIKASI</span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Vendor sangat responsif dan kooperatif. Hasil dekorasi persis seperti di moodboard yang kami sepakati. Tim sangat profesional saat hari H, semua teratur tepat waktu!
            </p>
            <div className="grid grid-cols-2 gap-2 mt-1">
              <div className="h-32 rounded-lg overflow-hidden bg-gray-100">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkdkhMyHSMqtkIWUJiu6PWPsSPjboGHOIf2hSH6-imHukZaD87SQsQTdp1Dq9BXRydil0SE2L4WBNEjC6qf1fAzYg_xWm56yercpolrFBKheCH7-RgPK1M3UemQcsFhhxMj01TuZzOwG17NM1FQZDyM9zpHeNKdCTRNU2FR5T-QD7S1w8DN5rwMM4TlfaEL_E4NGorRjWwnxMeU0_8UTnqXaxezQzEkgfZ7Vp18AOkXzEx-lHO7e2A-lMYjZMNdQCqtEQT2LBuLBMc" alt="Review photo" />
              </div>
              <div className="h-32 rounded-lg overflow-hidden bg-gray-100">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfqIK5ioG7j5Fr5Gb9wk1HOabgZMi3gn4KHQalzWHLNSbdX6W11pdVuxeWBqDLlSGzrNoIxkcVFxHQmgUZ42zu0-c5G8PpCwaEcQpweJ4m_3XyLihQsE-_vXn_LsD7HzeaQfGC0qqJsFH7V9EsmAhmJs4egprWtn3aYpBV7XQhUhsY2eqCVv2Qel_Jl-3Z_1VZVsbQnF3LOQVjzKF03XkRPvlIstOJAt6c1ZAOacL3huT0-RSLGUWyxkU72p-0VDhU5GCfrsFyC3LZ" alt="Review photo" />
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-wedding-primary transition-colors">
                <span className="material-symbols-outlined text-sm">thumb_up</span>
                <span>Membantu (12)</span>
              </button>
              <button className="text-xs text-gray-400 font-medium">Laporkan</button>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 p-4 bg-white/95 border-t border-gray-100 backdrop-blur-sm">
          <button className="w-full bg-wedding-primary text-white py-4 rounded-xl font-bold text-base shadow-lg shadow-wedding-primary/25 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">edit_square</span>
            Tulis Ulasan Anda
          </button>
        </div>
      </div>
    </div>
  );
}
