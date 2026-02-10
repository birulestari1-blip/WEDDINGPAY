import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Manrope, Spline_Sans, Epilogue } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const splineSans = Spline_Sans({
  variable: "--font-spline",
  subsets: ["latin"],
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WeddingPay - Security & Trust",
  description: "Marketplace Vendor Pernikahan Aman dengan Sistem Semi-Escrow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} ${manrope.variable} ${splineSans.variable} ${epilogue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
