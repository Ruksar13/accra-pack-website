"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Factory, 
  FlaskConical, 
  Globe2, 
  Sparkles, 
  Layers, 
  Award, 
  Clock, 
  FileText, 
  ChevronRight,
  Gauge,
  PackageCheck,
  Building2,
  ExternalLink,
  Package,
  Truck,
  Lock
} from "lucide-react";
import { 
  SITE_STATS, 
  TRUSTED_CLIENTS, 
  CERTIFICATIONS, 
  PRODUCT_CATEGORIES, 
  SPOTLIGHT_PRODUCTS,
  INSIGHT_ARTICLES,
  EXPORT_DESTINATIONS
} from "@/data/websiteData";
import QuoteModal from "@/components/QuoteModal";
import WorldMap from "@/components/WorldMap";
import HistoryTimeline from "@/components/HistoryTimeline";

export default function HomePage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedCategoryTab, setSelectedCategoryTab] = useState(PRODUCT_CATEGORIES[0].id);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [clientFilter, setClientFilter] = useState("all");

  const activeCategory = PRODUCT_CATEGORIES.find(c => c.id === selectedCategoryTab) || PRODUCT_CATEGORIES[0];

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-20 lg:py-28 border-b border-slate-800">
        {/* Subtle background industrial grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/70 border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
                <span>Pioneering Aerosol & Liquid Contract Manufacturing Since 1979</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                India&apos;s Trusted OEM & Private Label Partner for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400">
                  Aerosols & Liquids
                </span>
              </h1>

              {/* Crisp Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Turnkey product development, high-speed contract filling, and export-ready manufacturing from our WHO-GMP and US FDA registered facility in Vapi, Gujarat.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <span>Request a Quotation</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>

                <Link
                  href="/capabilities"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm bg-slate-800/90 hover:bg-slate-700/90 text-white border border-slate-700 flex items-center justify-center gap-2 transition-colors"
                >
                  <Factory className="w-4 h-4 text-cyan-400" />
                  <span>Explore Capabilities</span>
                </Link>

                <Link
                  href="/products"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Browse 12 Sectors &rarr;
                </Link>
              </div>

              {/* Key Bullet Highlights */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left text-xs text-slate-300 border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>500+ Ready Formulations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>120M+ Annual Units</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Exporting to 20+ Countries</span>
                </div>
              </div>
            </div>

            {/* Right Visual Card with Real Manufacturing Photography */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-2xl overflow-hidden backdrop-blur-xl">
                {/* Real Plant Image with subtle zoom */}
                <div className="relative h-56 sm:h-64 w-full bg-slate-950 overflow-hidden">
                  <Image
                    src="/images/manufacturing/plant-infrastructure.jpg"
                    alt="Accra Pac Vapi Advanced Aerosol Manufacturing Facility"
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Floating Badges on Image */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-950/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      WHO-GMP &amp; US FDA
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div>
                      <h4 className="text-sm font-bold">Vapi Manufacturing Complex</h4>
                      <p className="text-[11px] text-slate-300">Gujarat, India &bull; NFPA 30B Safety Standard</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-teal-500/90 text-slate-950">
                      120M+ Units/Yr
                    </span>
                  </div>
                </div>

                {/* Capability Badges Below Image */}
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 space-y-1">
                      <div className="text-slate-400 text-[11px]">Aerosol Capacity</div>
                      <div className="text-sm font-bold text-teal-400">5 High-Speed Lines</div>
                      <div className="text-[10px] text-slate-500">Hydrocarbon, BOV, Compressed Gas</div>
                    </div>
                    <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 space-y-1">
                      <div className="text-slate-400 text-[11px]">Liquid &amp; Roll-On</div>
                      <div className="text-sm font-bold text-cyan-400">6 Specialized Lines</div>
                      <div className="text-[10px] text-slate-500">2ml to 5L Precision Batching</div>
                    </div>
                  </div>

                  {/* Testing lab highlight */}
                  <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <FlaskConical className="w-4 h-4 text-teal-400 shrink-0" />
                      <div>
                        <div className="font-semibold text-white">GC, HPLC &amp; Microbiology Lab</div>
                        <div className="text-[11px] text-slate-400">6 Flame-Proof Stability Chambers</div>
                      </div>
                    </div>
                    <Link
                      href="/capabilities"
                      className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-teal-300 text-[11px] font-semibold transition-colors shrink-0"
                    >
                      View Lines &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS AT A GLANCE (BENTO GRID) */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {SITE_STATS.map((stat) => (
              <div 
                key={stat.label} 
                className="p-5 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all text-center space-y-1 group"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 leading-tight">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRUSTED BY TOP GLOBAL BRANDS — REDESIGNED DARK ENTERPRISE SECTION */}
      <section className="py-20 sm:py-24 bg-slate-950 text-white border-y border-slate-800 relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(20,184,166,0.15),transparent_75%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800/80">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                <span>CONFIDENTIAL CONTRACT MANUFACTURING ALLIANCES</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Trusted by Top Global Brands
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Manufacturing formulations for multinational FMCG conglomerates, pharmaceutical innovators, and private-label leaders under strict bilateral NDAs and zero formula drift protocols.
              </p>
            </div>

            {/* Quick Sector Filters */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              {[
                { id: "all", label: "All Leaders (8)" },
                { id: "fmcg", label: "FMCG & Consumer (4)" },
                { id: "pharma", label: "Healthcare & Pharma (2)" },
                { id: "industrial", label: "Industrial & Materials (2)" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setClientFilter(tab.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    clientFilter === tab.id
                      ? "bg-teal-400 text-slate-950 shadow-md font-black"
                      : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Enterprise Client Brand Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUSTED_CLIENTS
              .filter((client) => clientFilter === "all" || client.sector === clientFilter)
              .map((client) => (
                <div
                  key={client.name}
                  className="group rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-teal-400/60 hover:bg-slate-850 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-teal-500/10 space-y-5"
                >
                  <div className="space-y-4">
                    {/* Header: Monogram Logo & Sector Pill */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900 border border-slate-700/80 text-teal-400 flex items-center justify-center font-black text-sm tracking-wider shadow-inner group-hover:scale-105 group-hover:border-teal-400/50 group-hover:text-teal-300 transition-all">
                        {client.monogram}
                      </div>
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-slate-950/90 text-teal-300 border border-teal-500/30">
                        {client.category.split(" ")[0]}
                      </span>
                    </div>

                    {/* Brand Info */}
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                        {client.name}
                      </h3>
                      <div className="text-xs font-semibold text-slate-400">
                        {client.tier}
                      </div>
                    </div>

                    {/* Scope of Production */}
                    <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Contract Production Scope:
                      </div>
                      <p className="text-xs text-slate-300 leading-snug">
                        {client.scope}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer: Partnership Highlight */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-teal-400 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span>{client.badge}</span>
                    </span>
                    <Lock className="w-3.5 h-3.5 text-slate-600 group-hover:text-teal-400 transition-colors" />
                  </div>
                </div>
              ))}
          </div>

          {/* Enterprise Governance & Confidentiality Bento Strip */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2 text-teal-400">
                <Lock className="w-4 h-4 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">100% Bilateral NDA</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Legally bonded IP confidentiality protocols with restricted cleanroom access and segregated formulation batching.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">Zero Formula Leakage</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Brand formulas remain 100% client-owned. Batch recipes are encrypted and protected against unauthorized disclosure.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400">
                <Award className="w-4 h-4 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">24/7 Audit Readiness</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Continuous compliance with US FDA, WHO-GMP, and multinational client QA teams with complete electronic batch records.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2 text-amber-400">
                <Building2 className="w-4 h-4 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">Dual-Source Supply</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Guaranteed supply chain redundancy across raw materials, propellant gases, valve systems, and lithographed tin/aluminum cans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE ACCRA PAC — 6 CORE PILLARS */}
      <section id="why-choose-us" className="py-20 sm:py-24 bg-white border-b border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-700 bg-teal-50 px-4 py-1.5 rounded-full border border-teal-200/80 inline-block">
              The Accra Pac Advantage
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Why Choose Accra Pac?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Four decades of aerosol engineering mastery, dual WHO-GMP &amp; US FDA registered manufacturing, and turnkey CDMO execution under one roof. We eliminate the friction of multi-vendor management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Pillar 1 */}
            <div className="p-7 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-teal-400 hover:bg-white hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                    <FlaskConical className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-teal-100/70 text-teal-800">
                    Immediate Launch
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  500+ Ready R&amp;D Formulations
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Skip 6 to 9 months of trial-and-error. Launch with pre-validated, market-proven formulations across OTC pain relief, personal care, and technical aerosols with complete stability data.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/80 text-xs font-semibold text-teal-700 flex items-center gap-1.5">
                <span>Fast Speed-to-Market</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-7 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-cyan-400 hover:bg-white hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                    <Factory className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-cyan-100/70 text-cyan-800">
                    11 Filling Lines
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                  120M+ Scalable Filling Capacity
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Operating 5 dedicated aerosol lines and 6 specialized liquid lines. High-speed automation capable of handling flexible pilot validation runs to tens of millions of commercial units.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/80 text-xs font-semibold text-cyan-700 flex items-center gap-1.5">
                <span>Flexible Production Tiers</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-7 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-emerald-400 hover:bg-white hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-emerald-100/70 text-emerald-800">
                    Audit-Ready 24/7
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  WHO-GMP &amp; US FDA Registered
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Audit-ready infrastructure certified for ISO 9001, 14001, 22716, 45001, NFPA 30B, and Ayush Form 25-D. Complete batch traceability and electronic records on every production run.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/80 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                <span>Zero Compliance Compromise</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="p-7 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-amber-400 hover:bg-white hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                    <Gauge className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-amber-100/70 text-amber-800">
                    GC, HPLC &amp; Micro
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                  In-House Analytical &amp; Stability Labs
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  In-house Gas Chromatography (GC), High-Performance Liquid Chromatography (HPLC), and 6 flame-proof stability ovens for accelerated and real-time shelf life monitoring.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/80 text-xs font-semibold text-amber-700 flex items-center gap-1.5">
                <span>Zero Formula Drift</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="p-7 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-indigo-400 hover:bg-white hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-indigo-100/70 text-indigo-800">
                    Bilateral NDA
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                  100% IP &amp; Recipe Confidentiality
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Your proprietary formulations and brand secrets remain 100% yours. All projects are protected by rigorous legal non-disclosure agreements with restricted cleanroom access.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/80 text-xs font-semibold text-indigo-700 flex items-center gap-1.5">
                <span>Client-Owned Formulations</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Pillar 6 */}
            <div className="p-7 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                    <Globe2 className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-blue-100/70 text-blue-800">
                    20+ Export Markets
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  Seamless Global Hazmat Export
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Over two decades of dangerous goods handling. Direct container routing from Vapi to Mumbai ports (JNPT) with full IMDG compliance, UN-certified packaging, and customs clearance.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/80 text-xs font-semibold text-blue-700 flex items-center gap-1.5">
                <span>USA, Middle East &amp; Global</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMPREHENSIVE MANUFACTURING PORTFOLIO — 12 CORE PRODUCT SECTORS (CLEAR SHOWCASE) */}
      <section id="sectors" className="py-20 sm:py-24 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header with Exact Client Content */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-teal-400 bg-teal-950/80 border border-teal-500/30 px-3.5 py-1.5 rounded-full inline-block">
                Comprehensive Manufacturing Portfolio
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                12 Core Product Sectors
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Every sector reflects proven formulation recipes, qualified propellant systems, and specialized container formats ready for your brand.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-extrabold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-all shadow-lg shadow-teal-500/20"
              >
                <span>Explore Full Catalogue</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Filter Bar for 12 Sectors */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All 12 Sectors (12)" },
              { id: "pharma", label: "Healthcare & Pharma (3)" },
              { id: "personal", label: "Personal Care & Beauty (3)" },
              { id: "home", label: "Home & Ambient Care (3)" },
              { id: "industrial", label: "Technical & Industrial (3)" }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setCategoryFilter(f.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  categoryFilter === f.id
                    ? "bg-teal-500 text-slate-950 shadow-md font-black"
                    : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* CLEAR 12-SECTOR CARDS GRID (ALL 12 VISIBLE AT A GLANCE) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PRODUCT_CATEGORIES
              .filter((cat) => {
                if (categoryFilter === "all") return true;
                if (categoryFilter === "pharma") return ["pharma-otc", "ayurveda-herbal", "professional-medical"].includes(cat.id);
                if (categoryFilter === "personal") return ["personal-care", "hair-care", "fragrances"].includes(cat.id);
                if (categoryFilter === "home") return ["air-care", "household-cleaning", "disinfection-hygiene"].includes(cat.id);
                if (categoryFilter === "industrial") return ["insect-repellents", "automotive-care", "industrial-maintenance"].includes(cat.id);
                return true;
              })
              .map((cat, idx) => {
                const isSelected = selectedCategoryTab === cat.id;
                const anchorId = cat.id === "hair-care" ? "hairid" : cat.id;

                return (
                  <div
                    key={cat.id}
                    className={`group rounded-3xl bg-slate-900/90 border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between ${
                      isSelected
                        ? "border-teal-400 ring-2 ring-teal-400/30"
                        : "border-slate-800 hover:border-teal-500/60"
                    }`}
                  >
                    <div>
                      {/* High-Resolution Category Image */}
                      <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden">
                        <Image
                          src={cat.image}
                          alt={cat.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                        
                        {/* Number Badge & Tagline */}
                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-slate-950/80 backdrop-blur-md text-teal-300 border border-slate-700">
                            Sector 0{idx + 1}
                          </span>
                        </div>

                        <div className="absolute bottom-3 left-4 right-4">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300 bg-slate-950/80 px-2.5 py-0.5 rounded-full border border-teal-500/30 inline-block mb-1">
                            {cat.tagline}
                          </span>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="p-6 space-y-3">
                        <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                          {cat.name}
                        </h3>

                        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                          {cat.shortDesc}
                        </p>

                        {/* Popular Formulations Chips */}
                        <div className="pt-1 space-y-1.5">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                            Popular Formulations:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {cat.popularProducts.slice(0, 3).map((p) => (
                              <span
                                key={p}
                                className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-950 text-teal-300 border border-slate-800"
                              >
                                {p}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Formats info */}
                        <div className="pt-2 text-[11px] text-slate-400 flex items-center gap-1.5">
                          <span className="font-semibold text-slate-300">Formats:</span>
                          <span className="truncate">{cat.formats.slice(0, 2).join(" • ")}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Footer */}
                    <div className="p-6 pt-0 space-y-2">
                      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
                        <button
                          onClick={() => setSelectedCategoryTab(cat.id)}
                          className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                            isSelected
                              ? "bg-teal-500 text-slate-950 font-black"
                              : "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
                          }`}
                        >
                          {isSelected ? "Active Specs &darr;" : "View Specifications"}
                        </button>

                        <Link
                          href={`/products#${anchorId}`}
                          className="px-3 py-2 rounded-xl text-xs font-bold bg-teal-950/80 hover:bg-teal-900 text-teal-300 border border-teal-500/40 flex items-center gap-1 transition-colors shrink-0"
                          title={`View ${cat.name} in Catalogue`}
                        >
                          <span>Catalogue</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* ACTIVE CATEGORY IN-DEPTH SPECIFICATIONS SHOWCASE */}
          <div className="mt-12 bg-slate-900/90 rounded-3xl border border-teal-500/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-teal-400 bg-teal-950 px-3 py-1 rounded-full border border-teal-500/40">
                  Active Deep-Dive Preview
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  {activeCategory.name} Specifications
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {activeCategory.tagline}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="px-6 py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs transition-colors shadow"
                >
                  Request Quote for {activeCategory.name.split(" ")[0]}
                </button>
                <Link
                  href={`/products#${activeCategory.id === "hair-care" ? "hairid" : activeCategory.id}`}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors"
                >
                  Catalogue Anchor &rarr;
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800 space-y-2">
                <span className="font-bold text-teal-300 uppercase tracking-wider block text-[11px]">
                  All Available Formats
                </span>
                <ul className="space-y-1.5 text-slate-200">
                  {activeCategory.formats.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800 space-y-2">
                <span className="font-bold text-cyan-300 uppercase tracking-wider block text-[11px]">
                  Packaging Configurations
                </span>
                <ul className="space-y-1.5 text-slate-200">
                  {activeCategory.packaging.map((pkg, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{pkg}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800 space-y-2">
                <span className="font-bold text-emerald-300 uppercase tracking-wider block text-[11px]">
                  Quality &amp; Regulatory Compliance
                </span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activeCategory.compliance.map((c) => (
                    <span key={c} className="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-950/90 text-emerald-300 border border-emerald-800/60">
                      {c}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] text-slate-400 pt-2 leading-relaxed">
                  Batch COA, SDS, and stability documentation supplied with each production dispatch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5B. THE HISTORY OF ACCRA PAC — ROADMAP WITH DIRECTIONAL ARROWS (LIGHT THEME) */}
      <section id="history" className="py-20 sm:py-24 bg-slate-50 text-slate-900 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/70 border border-teal-200 px-3.5 py-1.5 rounded-full inline-block">
              45+ Years Technical Evolution
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              The History of Accra Pac (1979 &rarr; Present)
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Follow our sequential technical progression from commissioning India&apos;s first automatic aerosol line in 1979 to our modern 120M+ capacity complex today.
            </p>
          </div>

          {/* Interactive Chronological Roadmap with Directional Arrows in Light Theme */}
          <HistoryTimeline theme="light" />
        </div>
      </section>

      {/* 5C. MANUFACTURING CAPABILITIES PHOTO SHOWCASE (DARK THEME) */}
      <section className="py-20 sm:py-24 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950 border border-teal-500/30 px-3.5 py-1.5 rounded-full inline-block">
                Vapi Plant &amp; Infrastructure
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
                World-Class Aerosol &amp; Liquid Production Lines
              </h2>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                Operating 11 dedicated lines across aerosols, liquids, and roll-ons with 100% hot-water bath leak testing, NFPA 30B safety, and in-house analytical laboratories.
              </p>
            </div>
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors shrink-0 shadow"
            >
              <span>Explore All 11 Lines</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Capability 1 */}
            <div className="group bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden hover:border-teal-400 transition-all flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <Image
                    src="/images/manufacturing/aerosol-filling-line.jpg"
                    alt="Aerosol Filling Line"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-teal-300">
                    5 Aerosol Lines
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors">
                    Automated Aerosol Filling
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Hydrocarbon, BOV, and compressed gas systems with continuous water-bath leak inspection.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 text-[11px] font-semibold text-teal-400">
                1.5 oz to 16 oz Cans &bull; High Speed
              </div>
            </div>

            {/* Capability 2 */}
            <div className="group bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden hover:border-cyan-400 transition-all flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <Image
                    src="/images/manufacturing/liquid-filling-line.jpg"
                    alt="Liquid Filling Line"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-cyan-300">
                    6 Liquid Lines
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    Liquid &amp; Roll-On Processing
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Automated roll-on ball insertion, pump crimping, and precision batching from 2 ml to 5 Liters.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 text-[11px] font-semibold text-cyan-400">
                Roll-Ons &bull; Serums &bull; Cleaners
              </div>
            </div>

            {/* Capability 3 */}
            <div className="group bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden hover:border-emerald-400 transition-all flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <Image
                    src="/images/manufacturing/qc-lab-testing.jpg"
                    alt="QC Lab Testing"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-emerald-300">
                    In-House Lab
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    GC, HPLC &amp; Microbiology
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Complete raw material assay, active concentration verification, and pathogen screening.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 text-[11px] font-semibold text-emerald-400">
                Batch COA &bull; Raw Material Testing
              </div>
            </div>

            {/* Capability 4 */}
            <div className="group bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden hover:border-amber-400 transition-all flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <Image
                    src="/images/manufacturing/stability-chamber.jpg"
                    alt="Flame Proof Stability Chambers"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-amber-300">
                    Safety Engineered
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    6 Flame-Proof Chambers
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Accelerated and real-time shelf life testing engineered specifically for flammable propellants.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 text-[11px] font-semibold text-amber-400">
                NFPA 30B &bull; 40&deg;C/75% RH Validated
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. REDESIGNED TURNKEY MANUFACTURING JOURNEY (LIGHT THEME) */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-700 bg-teal-50 px-4 py-1.5 rounded-full border border-teal-200/80 inline-block">
              Structured Turnkey Execution
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              From Concept to Commercial Dispatch
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              An engineering-led, 8-stage turnkey workflow guaranteeing zero formula drift, 100% crimp integrity, and international regulatory auditability.
            </p>
          </div>

          {/* 4 Connected Phases with 8 Granular Stages & Directional Flow */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* PHASE 1: DISCOVERY & FORMULATION */}
              <div className="bg-slate-50/90 rounded-3xl p-6 border-2 border-teal-100 flex flex-col justify-between space-y-6 shadow-sm hover:border-teal-300 transition-all group">
                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="text-[11px] font-black uppercase tracking-wider text-teal-800 bg-teal-100/70 px-2.5 py-1 rounded-full">
                      Phase 01
                    </span>
                    <span className="text-xs font-bold text-slate-700">Discovery &amp; R&amp;D</span>
                  </div>

                  {/* Stage 01 */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="w-6 h-6 rounded-full bg-teal-600 text-white text-[11px] font-black flex items-center justify-center">
                        01
                      </span>
                      <FileText className="w-4 h-4 text-teal-600" />
                    </div>
                    <h4 className="text-xs font-bold text-slate-900">Requirement &amp; Monograph Review</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Target specifications, active concentration, container volume, and regulatory checks.
                    </p>
                  </div>

                  {/* Directional Down/Right Arrow */}
                  <div className="flex justify-center text-teal-500 text-xs font-bold">
                    <span>&darr;</span>
                  </div>

                  {/* Stage 02 */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="w-6 h-6 rounded-full bg-teal-600 text-white text-[11px] font-black flex items-center justify-center">
                        02
                      </span>
                      <FlaskConical className="w-4 h-4 text-teal-600" />
                    </div>
                    <h4 className="text-xs font-bold text-slate-900">Formulation Selection or R&amp;D</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Select from our 500+ library or bespoke chemical synthesis by Vapi engineers.
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 text-[11px] text-teal-800 font-bold flex items-center justify-between">
                  <span>Deliverable: Master Recipe</span>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-600" />
                </div>
              </div>

              {/* PHASE 2: PROTOTYPING & PACKAGING */}
              <div className="bg-slate-50/90 rounded-3xl p-6 border-2 border-cyan-100 flex flex-col justify-between space-y-6 shadow-sm hover:border-cyan-300 transition-all group">
                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="text-[11px] font-black uppercase tracking-wider text-cyan-800 bg-cyan-100/70 px-2.5 py-1 rounded-full">
                      Phase 02
                    </span>
                    <span className="text-xs font-bold text-slate-700">Prototype &amp; Valve</span>
                  </div>

                  {/* Stage 03 */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="w-6 h-6 rounded-full bg-cyan-600 text-white text-[11px] font-black flex items-center justify-center">
                        03
                      </span>
                      <Sparkles className="w-4 h-4 text-cyan-600" />
                    </div>
                    <h4 className="text-xs font-bold text-slate-900">Prototype Sampling &amp; Sensory</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Lab bench samples dispatched for client fragrance, skin-feel, and efficacy sign-off.
                    </p>
                  </div>

                  {/* Directional Down/Right Arrow */}
                  <div className="flex justify-center text-cyan-500 text-xs font-bold">
                    <span>&darr;</span>
                  </div>

                  {/* Stage 04 */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="w-6 h-6 rounded-full bg-cyan-600 text-white text-[11px] font-black flex items-center justify-center">
                        04
                      </span>
                      <Package className="w-4 h-4 text-cyan-600" />
                    </div>
                    <h4 className="text-xs font-bold text-slate-900">Can, Valve &amp; Actuator Testing</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Internal can lining corrosion tests, valve gasket swelling, and spray pattern checks.
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 text-[11px] text-cyan-800 font-bold flex items-center justify-between">
                  <span>Deliverable: Can/Valve Match</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-600" />
                </div>
              </div>

              {/* PHASE 3: SCALE-UP & PRODUCTION */}
              <div className="bg-slate-50/90 rounded-3xl p-6 border-2 border-indigo-100 flex flex-col justify-between space-y-6 shadow-sm hover:border-indigo-300 transition-all group">
                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="text-[11px] font-black uppercase tracking-wider text-indigo-800 bg-indigo-100/70 px-2.5 py-1 rounded-full">
                      Phase 03
                    </span>
                    <span className="text-xs font-bold text-slate-700">Scale-Up &amp; Filling</span>
                  </div>

                  {/* Stage 05 */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-[11px] font-black flex items-center justify-center">
                        05
                      </span>
                      <Gauge className="w-4 h-4 text-indigo-600" />
                    </div>
                    <h4 className="text-xs font-bold text-slate-900">Pilot Batch &amp; Tech Transfer</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Cleanroom pilot validation to verify chemical homogeneity and zero formula drift.
                    </p>
                  </div>

                  {/* Directional Down/Right Arrow */}
                  <div className="flex justify-center text-indigo-500 text-xs font-bold">
                    <span>&darr;</span>
                  </div>

                  {/* Stage 06 */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-[11px] font-black flex items-center justify-center">
                        06
                      </span>
                      <Factory className="w-4 h-4 text-indigo-600" />
                    </div>
                    <h4 className="text-xs font-bold text-slate-900">Commercial High-Speed Filling</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Automated mass filling on 5 aerosol and 6 liquid lines with inline tare weighing.
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 text-[11px] text-indigo-800 font-bold flex items-center justify-between">
                  <span>Deliverable: Mass Output (120M+)</span>
                  <ArrowRight className="w-3.5 h-3.5 text-indigo-600" />
                </div>
              </div>

              {/* PHASE 4: QUALITY & EXPORT DISPATCH */}
              <div className="bg-slate-50/90 rounded-3xl p-6 border-2 border-emerald-100 flex flex-col justify-between space-y-6 shadow-sm hover:border-emerald-300 transition-all group">
                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-full">
                      Phase 04
                    </span>
                    <span className="text-xs font-bold text-slate-700">QC &amp; Global Shipping</span>
                  </div>

                  {/* Stage 07 */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-[11px] font-black flex items-center justify-center">
                        07
                      </span>
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    </div>
                    <h4 className="text-xs font-bold text-slate-900">100% Water Bath QC &amp; Release</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      55&deg;C illuminated leak bath testing, GC/HPLC active assay, and microbial clearance.
                    </p>
                  </div>

                  {/* Directional Down/Right Arrow */}
                  <div className="flex justify-center text-emerald-500 text-xs font-bold">
                    <span>&darr;</span>
                  </div>

                  {/* Stage 08 */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-[11px] font-black flex items-center justify-center">
                        08
                      </span>
                      <Truck className="w-4 h-4 text-emerald-600" />
                    </div>
                    <h4 className="text-xs font-bold text-slate-900">Hazmat Logistics &amp; Dispatch</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      UN-certified export cartons, IMDG compliance, and rapid drayage to Mumbai port (JNPT).
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 text-[11px] text-emerald-800 font-bold flex items-center justify-between">
                  <span>Deliverable: COA &amp; Dispatch</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SPOTLIGHT PRODUCTS SHOWCASE (DARK THEME) */}
      <section className="py-20 sm:py-24 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950 border border-teal-500/30 px-3.5 py-1.5 rounded-full inline-block">
                Ready for Private Label &amp; Commercialization
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
                Spotlight Products with Dedicated Pages
              </h2>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                Click into any product below to explore complete chemical formulation options, packaging dimensions, 8-step manufacturing flow, and on-page quotation.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors shrink-0 shadow"
            >
              <span>Explore All 12 Categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPOTLIGHT_PRODUCTS.map((prod) => (
              <Link
                key={prod.id}
                href={`/products/${prod.slug}`}
                className="group bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-teal-400 overflow-hidden shadow-lg hover:shadow-teal-500/10 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-950/80 backdrop-blur-md text-teal-300 border border-slate-700">
                        {prod.category.split(" ")[0]}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {prod.overview}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-teal-400">
                    <span>View Product Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FEATURED KNOWLEDGE ARTICLES (LIGHT THEME) */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/70 border border-teal-200 px-3.5 py-1.5 rounded-full inline-block">
                Technical Knowledge Center
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                Expert Insights on Aerosol Technology
              </h2>
            </div>
            <Link
              href="/insights"
              className="text-xs font-bold text-teal-700 hover:text-teal-800 inline-flex items-center gap-1.5"
            >
              <span>Browse All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INSIGHT_ARTICLES.slice(0, 3).map((art) => (
              <div 
                key={art.id} 
                className="flex flex-col justify-between p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-teal-400 hover:shadow-xl transition-all space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-50 font-bold text-teal-700 border border-teal-100">
                      {art.category}
                    </span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    href={`/insights#${art.id}`}
                    className="text-xs font-semibold text-teal-700 hover:text-teal-800 inline-flex items-center gap-1"
                  >
                    Read Engineering Analysis <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. GLOBAL EXPORT FOOTPRINT ON MODERN WORLD MAP (DARK THEME) */}
      <section className="py-20 sm:py-24 bg-slate-900 border-b border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950/80 border border-teal-500/30 px-3.5 py-1.5 rounded-full inline-block">
                20+ Years Global Export
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
                Supplying Regulated Markets Worldwide
              </h2>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                Seamless ocean and air container dispatch from Vapi through Mumbai ports (JNPT) with full IMDG Dangerous Goods compliance, UN-certified packaging, and US FDA registration.
              </p>
            </div>
            <Link
              href="/export"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors shadow self-start md:self-auto shrink-0"
            >
              <span>Explore All Trade Lanes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Interactive World Map */}
          <WorldMap />
        </div>
      </section>

      {/* 9. BOTTOM HIGH-CONVERTING CTA BANNER */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white py-16 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
            Confidential Consultation &bull; Direct Technical Access
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Formulate, Manufacture, or Scale Your Product?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Whether you need a pilot run of an existing formula or a turnkey private label launch from our 500+ formulation library, our engineering team in Vapi is ready to assist.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm bg-teal-400 hover:bg-teal-300 text-slate-950 shadow-lg shadow-teal-500/20 transition-all"
            >
              Request a Custom Quote
            </button>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors"
            >
              Contact Sales Team
            </Link>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span>Direct Inquiries: Mr. Sahil Shah (+91 98251 49522)</span>
            <span>&bull;</span>
            <span>Email: sahil.shah@accrapacindia.com</span>
          </div>
        </div>
      </section>

      {/* Reusable Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}

