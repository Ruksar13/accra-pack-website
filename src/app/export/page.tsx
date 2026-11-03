"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Globe2, 
  ShieldCheck, 
  Ship, 
  Plane, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  PackageCheck,
  Building2,
  MapPin,
  Sparkles
} from "lucide-react";
import WorldMap, { MAP_DESTINATIONS } from "@/components/WorldMap";
import QuoteModal from "@/components/QuoteModal";

export default function ExportPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
              International Reach &amp; Logistics
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Export-Ready Manufacturing for Global Markets
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              With over two decades of international shipping experience, Accra Pac has become a trusted contract manufacturing partner across the United States, Middle East, Africa, and Asia. We provide end-to-end Dangerous Goods (DG) packaging, maritime compliance, and regulatory documentation.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive World Map Section (Modern Way Pointing Out Global Export) */}
      <section className="py-16 sm:py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950/80 border border-teal-500/30 px-3 py-1 rounded-full">
              Interactive Global Flight &amp; Maritime Corridors
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Global Export Footprint on World Map
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Direct container dispatch from Vapi through Mumbai ports (JNPT) and air cargo to key consumer markets worldwide.
            </p>
          </div>

          {/* Modern Interactive SVG World Map */}
          <WorldMap />
        </div>
      </section>

      {/* 3. Export Competency Pillars */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
              Dangerous Goods &amp; Compliance
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Aerosol Hazmat Logistics Made Seamless
            </h2>
            <p className="text-sm text-slate-600">
              Aerosols are classified as UN 1950 Class 2.1 Flammable Gases or Class 2.2 Non-Flammable Gases. We take care of every safety detail so shipments never get delayed at customs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                <Ship className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Maritime IMDG Compliance</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Full adherence to International Maritime Dangerous Goods (IMDG) codes. Proper segregation, container placarding, Limited Quantity (LTD QTY) exemptions where applicable, and DG declaration documentation.
              </p>
              <div className="text-xs font-semibold text-teal-700 pt-2 border-t border-slate-200/80">
                Ocean freight container loading from JNPT Mumbai
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center font-bold">
                <PackageCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">UN-Certified Export Packaging</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Heavy-duty 5-ply and 7-ply corrugated export cartons tested for drop resistance, stacking pressure, and bursting strength. Pre-printed with UN specification markings and orientation hazard labels.
              </p>
              <div className="text-xs font-semibold text-cyan-700 pt-2 border-t border-slate-200/80">
                Heat-treated export wooden pallets with shrink-wrap
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">US FDA &amp; Regulated Markets</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                US FDA Facility Establishment Identifier (FEI) registration, 21 CFR compliance, and full technical dossier support for OTC healthcare, first aid antiseptics, and hair treatment lines entering North America.
              </p>
              <div className="text-xs font-semibold text-emerald-700 pt-2 border-t border-slate-200/80">
                USA sales office support in Fort Wayne, Indiana
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Logistics Corridor */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 border border-slate-800 space-y-6">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                Geographic Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold">
                Strategic Logistics Hub: 2.5 Hours from Mumbai Ports
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Located in Vapi, Gujarat along the Western Dedicated Freight Corridor, our manufacturing complex enjoys seamless road transit to Nhava Sheva (JNPT) sea port and Mumbai International Airport, avoiding transit delays and ensuring predictable departure schedules.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="text-teal-400 font-bold text-sm">Nhava Sheva (JNPT)</div>
                <div className="text-slate-400 mt-1">Direct ocean container dispatch for global sea freight</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="text-cyan-400 font-bold text-sm">Mumbai International Airport</div>
                <div className="text-slate-400 mt-1">Express air cargo for urgent samples &amp; pilot shipments</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="text-emerald-400 font-bold text-sm">Complete Export Documentation</div>
                <div className="text-slate-400 mt-1">In-house preparation of Bill of Lading, COA, SDS, Packing List</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Planning to Export Aerosol or Liquid Products?
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Contact our international sales and export documentation desk for country-specific regulatory feasibility, freight estimates, and sample dispatch.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-teal-700 text-white font-semibold text-xs transition-all shadow"
            >
              Request Export Quotation
            </button>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-xs transition-colors"
            >
              Contact Our USA &amp; Global Desks
            </Link>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}
