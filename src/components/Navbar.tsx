"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Phone, 
  Mail, 
  ShieldCheck, 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown, 
  Factory
} from "lucide-react";
import QuoteModal from "./QuoteModal";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  // Exact navigation structure based on client index:
  // 1. Home (via Logo only)
  // 2. About Us
  // 3. Manufacturing Capabilities
  // 4. Products (nainlab style layout)
  // Solutions (Dropdown with: 5. Contract Manufacturing, 6. OEM & Private Labelling, 7. CDMO)
  // 8. Quality & Compliance
  // Global Export
  // 9. Contact Us
  // 10. Careers (in footer and mobile menu)
  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/capabilities", label: "Manufacturing Capabilities" },
    { href: "/products", label: "Products" },
    { 
      label: "Solutions",
      hasDropdown: true,
      subItems: [
        { href: "/contract-manufacturing", label: "Contract Manufacturing", desc: "Your formulation, our automated lines" },
        { href: "/oem-private-labelling", label: "OEM & Private Labelling", desc: "500+ ready formulations & turnkey launch" },
        { href: "/cdmo", label: "CDMO", desc: "Concept to commercialization & stability" },
      ]
    },
    { href: "/quality", label: "Quality & Compliance" },
    { href: "/export", label: "Global Export" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      {/* Top Notification & Utility Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              WHO-GMP &amp; US FDA Registered Facility
            </span>
            <span className="hidden md:inline-block text-slate-700">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300 whitespace-nowrap">
              <Factory className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              Vapi Plant &bull; 120M+ Annual Units Capacity
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300 text-xs">
            <a 
              href="tel:+919825149522" 
              className="flex items-center gap-1 hover:text-white transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>+91 98251 49522</span>
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href="mailto:sales@accrapacindia.com" 
              className="flex items-center gap-1 hover:text-white transition-colors whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>sales@accrapacindia.com</span>
            </a>
            <span className="text-slate-700 hidden lg:inline">|</span>
            <Link 
              href="/careers" 
              className="hidden lg:inline hover:text-teal-300 transition-colors whitespace-nowrap text-slate-400"
            >
              Careers
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header - Logo provides Home navigation; All tabs strictly in 1 single line */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-2 xl:gap-3">
            {/* Logo: Clicking navigates to Home */}
            <Link 
              href="/" 
              className="flex items-center shrink-0 group" 
              title="Accra Pac - Return to Home"
            >
              <div className="relative h-11 w-44 sm:w-52 xl:w-56">
                <Image
                  src="/accra-pac-logo.png"
                  alt="Accra Pac - Highest Quality Aerosol Filler"
                  fill
                  sizes="(max-width: 640px) 176px, (max-width: 1280px) 208px, 224px"
                  className="object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation - 100% 1-Line Layout */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  const isSolutionsActive = 
                    pathname.startsWith("/contract-manufacturing") || 
                    pathname.startsWith("/oem-private-labelling") || 
                    pathname.startsWith("/cdmo") ||
                    pathname.startsWith("/services");

                  return (
                    <div 
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setSolutionsDropdown(true)}
                      onMouseLeave={() => setSolutionsDropdown(false)}
                    >
                      <button
                        className={`flex items-center gap-1 px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-semibold whitespace-nowrap rounded-lg transition-colors ${
                          isSolutionsActive
                            ? "text-teal-700 bg-teal-50" 
                            : "text-slate-700 hover:text-teal-700 hover:bg-slate-50"
                        }`}
                      >
                        <span className="whitespace-nowrap">{link.label}</span>
                        <ChevronDown className="w-3.5 h-3.5 shrink-0" />
                      </button>

                      {solutionsDropdown && (
                        <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-2 mt-1 animate-in fade-in-50 duration-150 z-50">
                          {link.subItems?.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={() => setSolutionsDropdown(false)}
                              className="block px-4 py-2.5 hover:bg-teal-50/70 transition-colors group"
                            >
                              <div className="text-xs xl:text-sm font-bold text-slate-800 group-hover:text-teal-700 whitespace-nowrap">
                                {sub.label}
                              </div>
                              <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                                {sub.desc}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.label}
                    href={link.href!}
                    className={`px-2 xl:px-3 py-2 text-xs xl:text-sm font-semibold whitespace-nowrap rounded-lg transition-colors ${
                      isActive 
                        ? "text-teal-700 bg-teal-50 font-bold" 
                        : "text-slate-700 hover:text-teal-700 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Button - strictly 1 line */}
            <div className="hidden sm:flex items-center shrink-0">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 xl:px-5 py-2.5 rounded-lg text-xs xl:text-sm font-bold text-white bg-slate-900 hover:bg-teal-700 shadow-sm transition-all duration-200 active:scale-95 whitespace-nowrap"
              >
                <span className="whitespace-nowrap">Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 text-teal-300 shrink-0" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="text-xs font-bold text-white bg-slate-900 px-3 py-1.5 rounded-md sm:hidden whitespace-nowrap"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1 shadow-lg">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.label} className="py-1">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 py-1">
                      {link.label}
                    </div>
                    <div className="pl-4 space-y-1">
                      {link.subItems?.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-700 hover:bg-slate-50 rounded-md"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href!}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-semibold ${
                    pathname === link.href 
                      ? "text-teal-700 bg-teal-50 font-bold" 
                      : "text-slate-700 hover:text-teal-700 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-2 border-t border-slate-100 mt-2">
              <Link
                href="/careers"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-teal-700"
              >
                Careers
              </Link>
            </div>

            <div className="pt-3 border-t border-slate-100 mt-3 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsQuoteOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold text-white bg-slate-900 hover:bg-teal-700 shadow"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 text-teal-300" />
              </button>
              <div className="text-center text-xs text-slate-500 pt-1">
                Direct Sales: +91 98251 49522
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Reusable Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
