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
  Factory,
  Globe2,
  Package,
  FlaskConical,
  Award
} from "lucide-react";
import QuoteModal from "./QuoteModal";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  // Exact requested Navigation Structure:
  // ABOUT US | MANUFACTURING | PRODUCTS | SOLUTIONS | CONTACT | REQUEST A QUOTE
  // Under Solutions:
  // - Contract Manufacturing
  // - OEM & Private Label
  // - CDMO
  // - Quality & Compliance
  // - Export Solutions
  const navLinks = [
    { href: "/about", label: "ABOUT US" },
    { href: "/capabilities", label: "MANUFACTURING" },
    { href: "/products", label: "PRODUCTS" },
    { 
      label: "SOLUTIONS",
      hasDropdown: true,
      subItems: [
        { 
          href: "/contract-manufacturing", 
          label: "Contract Manufacturing", 
          desc: "Your formulation, our automated aerosol & liquid lines",
          icon: Factory 
        },
        { 
          href: "/oem-private-labelling", 
          label: "OEM & Private Label", 
          desc: "500+ ready proven formulations & turnkey market launch",
          icon: Package 
        },
        { 
          href: "/cdmo", 
          label: "CDMO", 
          desc: "Concept to commercialization, analytical testing & stability",
          icon: FlaskConical 
        },
        { 
          href: "/quality", 
          label: "Quality & Compliance", 
          desc: "WHO-GMP, US FDA, ISO 22716, ISO 9001 & NFPA 30B audited",
          icon: Award 
        },
        { 
          href: "/export", 
          label: "Export Solutions", 
          desc: "Global shipping & compliance across USA, Middle East, Africa & Asia",
          icon: Globe2 
        },
      ]
    },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <>
      {/* Top Notification & Utility Bar */}
      <div className="bg-[#0b182f] text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-[#00B8C7] font-medium whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-[#00B8C7]" />
              WHO-GMP &amp; US FDA Registered Facility
            </span>
            <span className="hidden md:inline-block text-[#A6A9AD]/40">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300 whitespace-nowrap">
              <Factory className="w-3.5 h-3.5 text-[#A6A9AD] shrink-0" />
              Vapi Plant &bull; 120M+ Annual Units Capacity
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300 text-xs">
            <a 
              href="tel:+919825149522" 
              className="flex items-center gap-1 hover:text-white transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#00B8C7] shrink-0" />
              <span>+91 98251 49522</span>
            </a>
            <span className="text-[#A6A9AD]/40">|</span>
            <a 
              href="mailto:sales@accrapacindia.com" 
              className="flex items-center gap-1 hover:text-white transition-colors whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 text-[#00B8C7] shrink-0" />
              <span>sales@accrapacindia.com</span>
            </a>
            <span className="text-[#A6A9AD]/40 hidden lg:inline">|</span>
            <Link 
              href="/careers" 
              className="hidden lg:inline hover:text-[#00B8C7] transition-colors whitespace-nowrap text-[#A6A9AD]"
            >
              Careers
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header - Clean, Uncrowded 1-Line Desktop Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4 xl:gap-8">
            {/* Logo: Navigates to Home */}
            <Link 
              href="/" 
              className="flex items-center shrink-0 group py-1" 
              title="Accra Pac - Return to Home"
            >
              <div className="relative h-14 sm:h-16 w-52 sm:w-64 xl:w-72 shrink-0">
                <Image
                  src="/accra-pac-logo.png"
                  alt="Accra Pac - Highest Quality Aerosol Filler"
                  fill
                  sizes="(max-width: 640px) 208px, (max-width: 1280px) 256px, 288px"
                  className="object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation: ABOUT US | MANUFACTURING | PRODUCTS | SOLUTIONS | CONTACT */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-3 shrink-0">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  const isSolutionsActive = 
                    pathname.startsWith("/contract-manufacturing") || 
                    pathname.startsWith("/oem-private-labelling") || 
                    pathname.startsWith("/cdmo") ||
                    pathname.startsWith("/quality") ||
                    pathname.startsWith("/export") ||
                    pathname.startsWith("/services");

                  return (
                    <div 
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setSolutionsDropdown(true)}
                      onMouseLeave={() => setSolutionsDropdown(false)}
                    >
                      <button
                        className={`flex items-center gap-1.5 px-3.5 py-2 text-xs xl:text-sm font-bold tracking-wide whitespace-nowrap rounded-lg transition-colors ${
                          isSolutionsActive
                            ? "text-[#1455A6] bg-[#f0f6fe] font-extrabold" 
                            : "text-slate-700 hover:text-[#1455A6] hover:bg-slate-50"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:rotate-180" />
                      </button>

                      {solutionsDropdown && (
                        <div className="absolute top-full left-0 w-84 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 py-3 mt-1 animate-in fade-in zoom-in-95 duration-150 z-50">
                          <div className="px-4 pb-2 border-b border-slate-100 flex items-center justify-between">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1455A6]">
                              Manufacturing &amp; Turnkey Solutions
                            </span>
                            <span className="text-[10px] font-semibold text-slate-400">
                              Under One Roof
                            </span>
                          </div>

                          <div className="pt-1.5">
                            {link.subItems?.map((sub) => {
                              const SubIcon = sub.icon;
                              const isSubActive = pathname === sub.href;

                              return (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  onClick={() => setSolutionsDropdown(false)}
                                  className={`flex items-start gap-3 px-4 py-2.5 transition-colors group ${
                                    isSubActive ? "bg-[#f0f6fe]" : "hover:bg-[#f0f6fe]"
                                  }`}
                                >
                                  <div className="w-8 h-8 rounded-lg bg-[#f0f6fe] text-[#1455A6] flex items-center justify-center shrink-0 group-hover:bg-[#1455A6] group-hover:text-white transition-all">
                                    <SubIcon className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div className="text-xs xl:text-sm font-bold text-slate-800 group-hover:text-[#1455A6] whitespace-nowrap">
                                      {sub.label}
                                    </div>
                                    <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                                      {sub.desc}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
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
                    className={`px-3.5 py-2 text-xs xl:text-sm font-bold tracking-wide whitespace-nowrap rounded-lg transition-colors ${
                      isActive 
                        ? "text-[#1455A6] bg-[#f0f6fe] font-extrabold border-b-2 border-[#1455A6]" 
                        : "text-slate-700 hover:text-[#1455A6] hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Button: REQUEST A QUOTE */}
            <div className="hidden sm:flex items-center shrink-0">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs xl:text-sm font-bold uppercase tracking-wider text-white bg-[#1455A6] hover:bg-[#0f4487] shadow-md shadow-blue-900/25 transition-all duration-200 active:scale-95 whitespace-nowrap"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00B8C7] shrink-0" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="text-xs font-bold uppercase tracking-wider text-white bg-[#1455A6] px-3 py-1.5 rounded-lg sm:hidden whitespace-nowrap shadow-sm"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-[#1455A6] hover:bg-slate-100 rounded-lg focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1 shadow-xl">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.label} className="py-1">
                    <div className="text-xs font-black text-[#1455A6] uppercase tracking-wider px-3 py-1.5 bg-[#f0f6fe] rounded-lg mb-1">
                      {link.label}
                    </div>
                    <div className="pl-2 space-y-1">
                      {link.subItems?.map((sub) => {
                        const SubIcon = sub.icon;
                        const isSubActive = pathname === sub.href;

                        return (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex items-center gap-2.5 px-3 py-2 text-xs font-bold rounded-lg transition-colors ${
                              isSubActive 
                                ? "text-[#1455A6] bg-[#f0f6fe]" 
                                : "text-slate-700 hover:text-[#1455A6] hover:bg-slate-50"
                            }`}
                          >
                            <SubIcon className="w-4 h-4 text-[#00B8C7]" />
                            <span>{sub.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href!}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-xs font-bold tracking-wider ${
                    pathname === link.href 
                      ? "text-[#1455A6] bg-[#f0f6fe] font-extrabold" 
                      : "text-slate-700 hover:text-[#1455A6] hover:bg-slate-50"
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
                className="block px-3 py-2 rounded-lg text-xs font-bold text-slate-600 hover:text-[#1455A6]"
              >
                CAREERS
              </Link>
            </div>

            <div className="pt-3 border-t border-slate-100 mt-3 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsQuoteOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#1455A6] hover:bg-[#0f4487] shadow"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00B8C7]" />
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
