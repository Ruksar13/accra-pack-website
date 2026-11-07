import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";

export const metadata: Metadata = {
  title: "Accra Pac India | Premier OEM & Private Label Aerosol & Liquid Manufacturer",
  description: "India's trusted contract manufacturer for aerosols, liquids, roll-ons, and personal care products. WHO-GMP, US FDA registered, ISO certified facility with 120M+ units annual capacity.",
  icons: {
    icon: "/accra-pac-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-[#1455A6] selection:text-white">
        <ScrollObserver />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
