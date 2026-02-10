import React from "react";
import Link from "next/link";

const NOTIFICATIONS = [
  { id: 1, type: "transaction", title: "Pembayaran Berhasil", body: "DP Pelunasan Gedung Sasana Kriya telah diterima melalui sistem escrow.", time: "2mnt", unread: true },
  { id: 2, type: "milestone", title: "H-30 Pernikahan!", body: "Waktunya final check dengan vendor katering dan dokumentasi.", time: "1jam", unread: true },
  { id: 3, type: "chat", title: "Pesan Baru: Arsyad Decor", body: '"Halo kak, untuk konsep pelaminan rustic sudah kami update di dashboard ya..."', time: "Yesterday", unread: false },
  { id: 4, type: "promo", title: "Voucher Diskon Rp500rb", body: "Khusus hari ini! Gunakan kode WEDDINGPROMO untuk cicilan 0% vendor pilihan.", time: "Yesterday", unread: false },
  { id: 5, type: "system", title: "Vendor Terverifikasi", body: "Vendor 'Lumina Photography' baru saja diverifikasi oleh sistem WeddingPay.", time: "Yesterday", unread: false }
];

export default function Notifications() {
  return (
    <div className="bg-background-light text-[#171112] min-h-screen font-jakarta antialiased">
      <div className="relative flex h-screen w-full flex-col overflow-hidden max-w-md mx-auto bg-white shadow-2xl">
        <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 pt-10 pb-4">
          <div className="flex items-center justify-between">
            <Link href="/home" className="text-[#171112] flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
              <span className="material-symbols-outlined">arrow_back_ios_new</span>
            </Link>
            <h2 className="text-[#171112] text-lg font-bold leading-tight tracking-tight">Notifikasi</h2>
            <button className="text-wedding-primary text-sm font-semibold px-2">
              Baca Semua
            </button>
          </div>
          <div className="mt-4 flex gap-2 overflow-x-auto no-scrollbar pb-1">
            <button className="whitespace-nowrap px-4 py-2 rounded-full bg-wedding-primary text-white text-sm font-semibold">Semua</button>
            {["Transaksi", "Milestone", "Chat", "Promo"].map(tab => (
              <button key={tab} className="whitespace-nowrap px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium">{tab}</button>
            ))}
          </div>
        </header>

        <main className="flex-1 overflow-y-auto no-scrollbar">
          <div className="px-4 py-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 px-2">Terbaru</h3>
            <div className="space-y-1">
              {NOTIFICATIONS.filter(n => n.unread).map((n) => (
                <div key={n.id} className="relative flex gap-4 p-3 rounded-2xl bg-wedding-primary/5 transition-colors">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                      <span className="material-symbols-outlined">{n.type === 'transaction' ? 'account_balance_wallet' : 'calendar_today'}</span>
                    </div>
                    <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-wedding-primary border-2 border-white rounded-full"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-0.5">
                      <p className="text-[15px] font-bold text-gray-900 truncate">{n.title}</p>
                      <span className="text-[11px] text-gray-400 whitespace-nowrap ml-2">{n.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">{n.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="px-4 py-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 px-2">Kemarin</h3>
            <div className="space-y-1">
              {NOTIFICATIONS.filter(n => !n.unread).map((n) => (
                <div key={n.id} className="flex gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500">
                      <span className="material-symbols-outlined">{n.type === 'chat' ? 'chat_bubble' : n.type === 'promo' ? 'sell' : 'verified'}</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 border-b border-gray-100 pb-3">
                    <div className="flex justify-between items-start mb-0.5">
                      <p className="text-[15px] font-semibold text-gray-800 truncate">{n.title}</p>
                      <span className="text-[11px] text-gray-400 whitespace-nowrap ml-2">{n.time}</span>
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-2">{n.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <div className="bg-white/95 border-t border-gray-100 pt-3 pb-8">
          <div className="flex justify-around items-center px-4">
            <Link href="/home" className="flex flex-col items-center gap-1 text-gray-400">
              <span className="material-symbols-outlined">home</span>
              <span className="text-[10px] mt-1">Beranda</span>
            </Link>
            <Link href="/orders" className="flex flex-col items-center gap-1 text-gray-400">
              <span className="material-symbols-outlined">payments</span>
              <span className="text-[10px] mt-1">Transaksi</span>
            </Link>
            <div className="flex flex-col items-center text-wedding-primary">
              <div className="relative">
                <span className="material-symbols-outlined !fill-1">notifications</span>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-wedding-primary rounded-full"></span>
              </div>
              <span className="text-[10px] mt-1 font-bold">Notifikasi</span>
            </div>
            <Link href="/profile" className="flex flex-col items-center gap-1 text-gray-400">
              <span className="material-symbols-outlined">account_circle</span>
              <span className="text-[10px] mt-1">Profil</span>
            </Link>
          </div>
          <div className="flex justify-center mt-4">
            <div className="w-32 h-1.5 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
