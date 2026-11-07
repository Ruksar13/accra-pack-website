import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowUpRight, 
  Factory, 
  Building2, 
  Globe2,
  Briefcase
} from "lucide-react";
import { CERTIFICATIONS, PRODUCT_CATEGORIES } from "@/data/websiteData";

export default function Footer() {
  return (
    <footer className="bg-[#0b182f] text-slate-300 border-t border-[#1455A6]/30">
      {/* Top Value / Certifications Marquee Bar */}
      <div className="border-b border-slate-800/80 bg-[#071324] py-5 px-4">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00B8C7] animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#A6A9AD]">
              International Standards &amp; Accreditations
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {CERTIFICATIONS.slice(0, 6).map((cert) => (
              <span
                key={cert.code}
                className="px-2.5 py-1 text-xs font-medium rounded bg-[#1455A6]/20 text-[#00B8C7] border border-[#1455A6]/40"
              >
                {cert.code}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group" title="Accra Pac - Return to Home">
              <div className="relative h-14 sm:h-16 w-56 sm:w-64">
                <Image
                  src="/accra-pac-logo-white.png"
                  alt="Accra Pac India - Highest Quality Aerosol Filler"
                  fill
                  className="object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </Link>

            <p className="text-sm text-[#A6A9AD] max-w-sm leading-relaxed">
              India&apos;s pioneering contract manufacturer for aerosols and liquids. 
              Delivering high-precision OEM, private label, and CDMO solutions 
              for world-class healthcare, personal care, and industrial brands.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00B8C7] shrink-0" />
                <span>WHO-GMP Certified &bull; US FDA Registered &bull; NFPA 30B Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Factory className="w-4 h-4 text-[#A6A9AD] shrink-0" />
                <span>120+ Million Units Annual Capacity &bull; 11 Specialized Lines</span>
              </div>
            </div>
          </div>

          {/* Solutions & Core Pages (Aligned with Index) */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Solutions &amp; Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-[#A6A9AD] hover:text-[#00B8C7] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="text-[#A6A9AD] hover:text-[#00B8C7] transition-colors">
                  Manufacturing Capabilities
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-[#A6A9AD] hover:text-[#00B8C7] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contract-manufacturing" className="text-[#A6A9AD] hover:text-[#00B8C7] transition-colors">
                  Contract Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/oem-private-labelling" className="text-[#A6A9AD] hover:text-[#00B8C7] transition-colors">
                  OEM &amp; Private Label
                </Link>
              </li>
              <li>
                <Link href="/cdmo" className="text-[#A6A9AD] hover:text-[#00B8C7] transition-colors">
                  CDMO &amp; Custom R&amp;D
                </Link>
              </li>
              <li>
                <Link href="/quality" className="text-[#A6A9AD] hover:text-[#00B8C7] transition-colors">
                  Quality &amp; Compliance
                </Link>
              </li>
              <li>
                <Link href="/export" className="text-[#A6A9AD] hover:text-[#00B8C7] transition-colors">
                  Export Solutions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#A6A9AD] hover:text-[#00B8C7] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-[#00B8C7] hover:text-white font-semibold flex items-center gap-1 transition-colors">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Careers at Accra Pac</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Products We Manufacture
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/products#pharma-otc" className="text-[#A6A9AD] hover:text-[#00B8C7] transition-colors truncate block">
                  Pharmaceutical OTC &amp; Health
                </Link>
              </li>
              <li>
                <Link href="/products#personal-care" className="text-[#A6A9AD] hover:text-[#00B8C7] transition-colors truncate block">
                  Personal Care &amp; Grooming
                </Link>
              </li>
              <li>
                <Link href="/products#hairid" className="text-[#A6A9AD] hover:text-[#00B8C7] transition-colors truncate block">
                  Hair Care &amp; Styling
                </Link>
              </li>
              <li>
                <Link href="/products#ayurveda-herbal" className="text-[#A6A9AD] hover:text-[#00B8C7] transition-colors truncate block">
                  Ayurveda &amp; Herbal
                </Link>
              </li>
              <li>
                <Link href="/products#fragrances" className="text-[#A6A9AD] hover:text-[#00B8C7] transition-colors truncate block">
                  Fragrances &amp; Perfumes
                </Link>
              </li>
              <li>
                <Link href="/products#air-care" className="text-[#A6A9AD] hover:text-[#00B8C7] transition-colors truncate block">
                  Air Care &amp; Fresheners
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-[#00B8C7] hover:text-white font-medium inline-flex items-center gap-1 mt-1 transition-colors">
                  View All 12 Sectors <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Locations */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Offices &amp; Facilities
            </h4>
            <div className="space-y-4 text-xs text-[#A6A9AD]">
              <div>
                <div className="font-semibold text-slate-200 flex items-center gap-1.5 mb-1">
                  <Factory className="w-3.5 h-3.5 text-[#00B8C7]" />
                  Manufacturing Plant
                </div>
                <p>Plot No. 1105, Phase III, G.I.D.C., Vapi, Gujarat – 396195, India</p>
                <p className="text-slate-400 mt-0.5">Tel: +91-260-2430996</p>
              </div>

              <div>
                <div className="font-semibold text-slate-200 flex items-center gap-1.5 mb-1">
                  <Building2 className="w-3.5 h-3.5 text-[#00B8C7]" />
                  Mumbai Corporate Office
                </div>
                <p>503, Rajanigandha, Dadar (W), Mumbai – 400028</p>
              </div>

              <div>
                <div className="font-semibold text-slate-200 flex items-center gap-1.5 mb-1">
                  <Globe2 className="w-3.5 h-3.5 text-[#A6A9AD]" />
                  USA Sales Office
                </div>
                <p>Accra Pac Holding Co., LLC, Fort Wayne, IN 46804</p>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <div className="text-slate-300 font-medium">Business Inquiries:</div>
                <div className="text-[#00B8C7] font-medium mt-0.5">Mr. Sahil Shah &bull; +91 98251 49522</div>
                <div className="text-slate-400">sahil.shah@accrapacindia.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-900 py-6 px-4 text-xs text-slate-500">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>
            &copy; {new Date().getFullYear()} Accra Pac India Pvt. Ltd. All rights reserved. 
            Legacy of aerosol manufacturing excellence since 1979.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-300 transition-colors">About Us</Link>
            <Link href="/quality" className="hover:text-slate-300 transition-colors">Quality &amp; Compliance</Link>
            <Link href="/careers" className="hover:text-slate-300 transition-colors">Careers</Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
