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
  MapPin
} from "lucide-react";
import WorldMap, { MAP_DESTINATIONS } from "@/components/WorldMap";
import QuoteModal from "@/components/QuoteModal";

export default function ExportPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-950 border border-teal-500/30 px-3.5 py-1.5 rounded-full inline-block">
              Global Reach
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Export Solutions
            </h1>
            {/* Exact text from client doc */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Compliant manufacturing, complete documentation and reliable logistics coordination for customers across the USA, Middle East, Africa and Asia.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive World Map Section */}
      <section className="py-20 sm:py-24 bg-slate-900 border-b border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 reveal">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950/80 border border-teal-500/30 px-3.5 py-1.5 rounded-full inline-block">
              Active Trade Lanes
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              International Export Footprint
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Direct container dispatch from Vapi through Mumbai ports (JNPT) to key consumer markets worldwide.
            </p>
          </div>

          <WorldMap />

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-center text-xs text-slate-300 space-y-2 hover-lift">
            <div className="font-bold text-teal-400 uppercase tracking-wider">
              Destinations Served:
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                "USA", "UAE", "Oman", "Singapore", "Malaysia", "Russia",
                "Sri Lanka", "Bhutan", "Congo", "Ethiopia", "Djibouti", "Bangladesh"
              ].map((c) => (
                <span key={c} className="px-3 py-1 rounded-lg bg-slate-900 text-slate-200 border border-slate-800 font-semibold hover:border-teal-400 transition-colors">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Export Competency Details */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 reveal">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200 inline-block">
              Seamless Logistics
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              End-to-End Export Coordination
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-container">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-3 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                <Ship className="w-6 h-6 text-teal-700" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Maritime IMDG Compliance</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Full adherence to International Maritime Dangerous Goods (IMDG) codes, proper container segregation, and dangerous goods declarations for sea shipments.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-3 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold">
                <PackageCheck className="w-6 h-6 text-cyan-700" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">UN-Certified Packaging</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Heavy-duty export cartons tested for drop resistance and stacking pressure, with pre-printed UN specification markings.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-3 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <FileText className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Complete Export Documentation</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Comprehensive export dossiers including Certificate of Analysis (COA), Safety Data Sheets (SDS), and Certificate of Free Sale.
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="px-8 py-4 rounded-xl font-bold text-sm bg-teal-700 hover:bg-teal-800 text-white shadow-md transition-all hover-lift"
            >
              Discuss Your Export Requirements
            </button>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}
