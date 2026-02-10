import React from "react";
import Link from "next/link";
import { VENDORS } from "@/lib/mock-data";

export default async function VendorProfilePage({ params }: { params: Promise<{ category: string, id: string }> }) {
  const { category, id } = await params;
  const vendor = VENDORS.find(v => v.id === id) || VENDORS[0];

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen pb-32 font-plus-jakarta">
      <div className="max-w-md mx-auto relative bg-white dark:bg-background-dark min-h-screen">
        {/* Top Navigation Bar */}
        <nav className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/5 px-4 py-3 flex items-center justify-between text-white">
          <Link href={`/vendors/${category}`} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </Link>
          <h1 className="text-sm font-bold uppercase tracking-widest">Vendor Profile</h1>
          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
              <span className="material-symbols-outlined">share</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
        </nav>

        {/* Header Section: Cover & Profile */}
        <header className="relative w-full">
          <div className="h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDKVrn_-4gpz4aUfh4IAHd9XtdJs3sjJtxBh9dZIOxpQ9YROpGi7CrKn8CBjTRaGqIkNlBHkvddzrAuX1hLyQ5grAp6OF0Z7KI9HyEU39DdzEj-TAmwGGlHvDkfcK8Czq19iAcxslOI2odGFqH2YCYIenMrQVoWSDNDnUu6L4CKcOcghPYFDUuUIY4dXqqZvoFjuPmlW98-K_h0gW9OtGlfcAqpk4VzZMCqfjROtY2x6xB0UJx2Ikq23WdAX2oAwNtqwGTqpe-XdTUS')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
          <div className="px-4 -mt-16 relative z-10 flex flex-col items-center">
            <div className="p-1 rounded-full bg-background-dark">
              <div className="w-32 h-32 rounded-full border-4 border-wedding-gold bg-cover bg-center shadow-2xl" style={{ backgroundImage: `url('${vendor.image}')` }}></div>
            </div>
            <div className="mt-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <h2 className="text-2xl font-bold tracking-tight dark:text-white text-slate-900">{vendor.name}</h2>
                {vendor.isVerified && <span className="material-symbols-outlined text-wedding-gold text-xl fill-1">verified</span>}
              </div>
              <p className="text-slate-400 flex items-center justify-center gap-1 mt-1">
                <span className="material-symbols-outlined text-sm">location_on</span> {vendor.location}
              </p>
              <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-wedding-gold/20 rounded-full border border-wedding-gold/30">
                <span className="material-symbols-outlined text-xs text-wedding-gold fill-1">shield_with_heart</span>
                <span className="text-xs font-bold text-wedding-gold uppercase tracking-wider">Verified Escrow Vendor</span>
              </div>
            </div>
          </div>
        </header>

        {/* Stats Bar */}
        <section className="mt-8 px-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-white/5 text-center">
              <p className="text-2xl font-bold dark:text-white text-slate-900">150+</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Weddings Done</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-white/5 text-center">
              <div className="flex items-center justify-center gap-1">
                <p className="text-2xl font-bold dark:text-white text-slate-900">4.9</p>
                <span className="material-symbols-outlined text-wedding-gold fill-1">star</span>
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Avg. Rating</p>
            </div>
          </div>
        </section>

        {/* Tabs Navigation */}
        <section className="mt-8 sticky top-[64px] z-40 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-white/5">
          <div className="flex px-4">
            <button className="flex-1 py-4 border-b-2 border-wedding-gold text-wedding-gold text-sm font-bold tracking-wide">PORTFOLIO</button>
            <button className="flex-1 py-4 border-b-2 border-transparent text-slate-400 text-sm font-bold tracking-wide">SERVICES</button>
            <button className="flex-1 py-4 border-b-2 border-transparent text-slate-400 text-sm font-bold tracking-wide">REVIEWS</button>
          </div>
        </section>

        {/* Portfolio Gallery Grid */}
        <main className="mt-4 px-4">
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square rounded-xl bg-cover bg-center overflow-hidden bg-slate-200 dark:bg-slate-800"></div>
            ))}
          </div>

          {/* Featured Package Snippet */}
          <div className="mt-10 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Recommended Package</h3>
              <button className="text-wedding-gold text-xs font-bold uppercase tracking-widest">See All</button>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl border border-white/5 overflow-hidden">
              <div className="h-32 w-full bg-cover bg-center bg-slate-200 dark:bg-slate-800"></div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold">The Royal Buffet Selection</h4>
                    <p className="text-sm text-slate-400 mt-1">Min. 500 Guests • 8 Main Courses</p>
                  </div>
                  <div className="text-right">
                    <p className="text-wedding-gold font-bold">Rp 120jt</p>
                    <p className="text-[10px] text-slate-500">Starting price</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Floating CTA Bar */}
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-background-dark via-background-dark/90 to-transparent max-w-md mx-auto">
          <div className="flex gap-3 pb-safe">
            <button className="flex-1 flex items-center justify-center gap-2 h-14 rounded-xl border border-wedding-gold text-wedding-gold font-bold tracking-wide backdrop-blur-md bg-white/10">
              <span className="material-symbols-outlined">chat_bubble</span>
              Chat Vendor
            </button>
            <button className="flex-[1.5] flex items-center justify-center gap-2 h-14 rounded-xl bg-wedding-gold text-background-dark font-bold tracking-wide shadow-lg shadow-wedding-gold/20">
              <span className="material-symbols-outlined">calendar_today</span>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
