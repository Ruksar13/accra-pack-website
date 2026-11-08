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
  Award, 
  Clock, 
  FileText, 
  ChevronRight,
  Gauge,
  PackageCheck,
  Building2,
  Package,
  Truck,
  Lock,
  Stethoscope,
  ShoppingBag,
  Store,
  Home,
  Car,
  Rocket,
  Download,
  Calendar,
  Layers,
  Wind,
  Check
} from "lucide-react";
import { 
  SITE_STATS, 
  TRUSTED_CLIENTS, 
  CERTIFICATIONS, 
  PRODUCT_CATEGORIES, 
  WHY_CHOOSE_ACCRA_PAC,
  INDUSTRIES_WE_SERVE
} from "@/data/websiteData";
import QuoteModal from "@/components/QuoteModal";
import WorldMap from "@/components/WorldMap";

export default function HomePage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [clientFilter, setClientFilter] = useState("all");

  return (
    <div className="flex flex-col">
      {/* 1. HERO BANNER — SLEEK, BALANCED & COMPACT (NO LENGTHY STACKED BOXES) */}
      <section className="relative min-h-[82vh] flex items-center justify-center text-white overflow-hidden py-16 sm:py-24">
        {/* FULL BLEED BACKGROUND IMAGE: High-tech aerosol cleanroom filling facility */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/hero/aarav-aerosol-line.webp"
            alt="Accra Pac High-Tech Aerosol Filling Line Conveyor"
            fill
            priority
            className="object-cover object-center scale-105 transition-transform duration-1000"
            sizes="100vw"
          />
          {/* Deep Cinematic Royal Navy & Dark Gradient Overlay for high readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071324]/95 via-[#0b182f]/85 to-[#071324]/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071324] via-transparent to-[#071324]/60" />
        </div>

        {/* Hero Content - Clean, elegant & well-proportioned */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 z-10">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0b182f]/90 backdrop-blur-md border border-[#00B8C7]/50 text-[#00B8C7] text-sm sm:text-base font-bold tracking-wide shadow-xl">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00B8C7] animate-ping"></span>
            <span>Pioneering Aerosol &amp; Liquid Contract Manufacturing Since 1979</span>
          </div>

          {/* Exact Headline from Client Doc */}
          <div className="space-y-5 max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-md">
              India&apos;s Trusted OEM &amp; Private Label Manufacturing Partner for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B8C7] via-cyan-300 to-white">
                Aerosols &amp; Liquids
              </span>
            </h1>

            {/* Exact Subtitle from Client Doc */}
            <p className="text-lg sm:text-xl text-slate-100 max-w-3xl mx-auto font-normal leading-relaxed drop-shadow">
              We help global brands develop, manufacture, package and export aerosol and liquid products, from concept to commercial success.
            </p>
          </div>

          {/* 3 CTAs from Client Doc: Request a Quote | Download Company Profile | Explore Manufacturing Capabilities */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm sm:text-base bg-[#1455A6] hover:bg-[#0f4487] text-white shadow-xl shadow-blue-900/40 border border-blue-400/30 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 text-[#00B8C7]" />
            </button>

            <button
              onClick={() => setIsQuoteOpen(true)}
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-bold text-sm sm:text-base bg-[#0b182f]/90 hover:bg-[#12284b] text-white border border-[#A6A9AD]/50 backdrop-blur-md flex items-center justify-center gap-2 transition-all"
            >
              <Download className="w-4 h-4 text-[#00B8C7]" />
              <span>Download Company Profile</span>
            </button>

            <Link
              href="/capabilities"
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-bold text-sm sm:text-base bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md flex items-center justify-center gap-2 transition-all"
            >
              <Factory className="w-4 h-4 text-[#00B8C7]" />
              <span>Explore Capabilities</span>
            </Link>
          </div>

          {/* Quick Highlight Ticker */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-7 text-sm sm:text-base font-semibold text-slate-200 border-t border-slate-800/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00B8C7] shrink-0" />
              <span>WHO-GMP &amp; US FDA Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#A6A9AD] shrink-0" />
              <span>120M+ Units Annual Capacity</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00B8C7] shrink-0" />
              <span>500+ Ready Formulations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
              <span>Exporting Since 2005</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ACCRA PAC, BY THE NUMBERS (ICON-LED STAT CARDS) — LIGHT THEME */}
      <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 reveal">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1455A6] bg-[#f0f6fe] px-4 py-1.5 rounded-full border border-blue-200 inline-block">
              Scale &amp; Proven Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Accra Pac, By the Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 stagger-container">
            {SITE_STATS.map((stat, idx) => {
              const icons = [Award, Globe2, FlaskConical, PackageCheck, Building2, Factory, Gauge];
              const IconComp = icons[idx % icons.length];
              return (
                <div 
                  key={stat.label} 
                  className="p-5 rounded-2xl bg-[#f8f9fa] border border-[#A6A9AD]/30 hover:border-[#1455A6] hover:bg-white hover:shadow-xl transition-all duration-300 text-center space-y-2 flex flex-col justify-between group hover-lift"
                >
                  <div className="w-10 h-10 mx-auto rounded-xl bg-[#f0f6fe] text-[#1455A6] flex items-center justify-center font-bold group-hover:scale-110 group-hover:bg-[#1455A6] group-hover:text-white transition-all">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-[#1455A6] transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-extrabold text-slate-900 uppercase tracking-wide mt-1">
                      {stat.label}
                    </div>
                  </div>
                  <div className="text-xs text-slate-600 leading-tight pt-1 font-medium">
                    {stat.detail}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. DEDICATED AEROSOL INNOVATION & TECHNOLOGY SHOWCASE SECTION
          (New section highlighting the aerosol image with rich technical details)
         ======================================================== */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-[#071324] via-[#0b182f] to-[#071324] text-white border-b border-slate-800 relative overflow-hidden">
        {/* Glow ambient background accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1455A6]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#00B8C7]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 reveal">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3.5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1455A6]/30 border border-[#00B8C7]/40 text-[#00B8C7] text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Wind className="w-4 h-4 text-[#00B8C7]" />
              <span>Aerosol Manufacturing Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Advanced Aerosol Filling &amp; Spray Technology
            </h2>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Operating 5 automated aerosol lines with ozone-friendly propellants, Bag-on-Valve (BOV) systems, and 100% in-line hot water bath safety testing compliant with international NFPA 30B regulations.
            </p>
          </div>

          {/* 2-Column Split Showcase: Left = Visual Centerpiece | Right = Technical Capabilities */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Aerosol Commercial Centerpiece with Badges */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#1455A6]/50 shadow-2xl shadow-blue-950/70 bg-[#071324] group hover-lift">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <Image
                    src="/images/hero/aerosol-hero-center.jpg"
                    alt="Accra Pac Precision Aerosol Canisters and Fine Spray Mist"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071324]/90 via-transparent to-transparent pointer-events-none" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 bg-[#0b182f]/90 backdrop-blur-md border border-[#00B8C7]/50 rounded-xl px-4 py-2 shadow-lg flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00B8C7] animate-pulse"></span>
                    <span className="text-sm font-bold text-white">5 High-Speed Aerosol Lines</span>
                  </div>

                  {/* Bottom Floating Bar */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between gap-2 text-xs sm:text-sm">
                    <div>
                      <div className="text-xs uppercase font-extrabold text-[#A6A9AD]">Quality Benchmark</div>
                      <div className="text-sm font-bold text-white">100% In-Line Hot Water Bath Testing</div>
                    </div>
                    <span className="px-3 py-1.5 rounded-lg bg-[#1455A6]/30 text-[#00B8C7] text-xs font-bold border border-[#00B8C7]/30">
                      NFPA 30B
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Technical Aerosol Capabilities Grid */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Precision Engineering from Valve to Droplet Distribution
                </h3>
                <p className="text-base text-slate-200 leading-relaxed font-normal">
                  As one of India&apos;s pioneering aerosol contract manufacturers since 1979, our Vapi complex handles high-volume commercial production across personal care deodorants, pharmaceutical topical sprays, hair styling mousses, and industrial lubricants.
                </p>
              </div>

              {/* 4 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-4.5 rounded-2xl bg-[#0b182f] border border-slate-800 hover:border-[#1455A6] transition-all space-y-2 p-4">
                  <div className="flex items-center gap-2 text-[#00B8C7] font-bold text-xs uppercase tracking-wide">
                    <Check className="w-4 h-4 text-[#00B8C7]" />
                    <span>BOV &amp; Dual Chamber</span>
                  </div>
                  <div className="text-base font-bold text-white">Bag-on-Valve Technology</div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    100% pure product delivery with 360° all-angle inverted discharge.
                  </p>
                </div>

                <div className="p-4.5 rounded-2xl bg-[#0b182f] border border-slate-800 hover:border-[#1455A6] transition-all space-y-2 p-4">
                  <div className="flex items-center gap-2 text-[#00B8C7] font-bold text-xs uppercase tracking-wide">
                    <Check className="w-4 h-4 text-[#00B8C7]" />
                    <span>Ozone-Friendly LPG</span>
                  </div>
                  <div className="text-base font-bold text-white">Hydrocarbon Gas Farm</div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Deodorized propellant bulk storage and automated gas leak monitoring.
                  </p>
                </div>

                <div className="p-4.5 rounded-2xl bg-[#0b182f] border border-slate-800 hover:border-[#1455A6] transition-all space-y-2 p-4">
                  <div className="flex items-center gap-2 text-[#00B8C7] font-bold text-xs uppercase tracking-wide">
                    <Check className="w-4 h-4 text-[#00B8C7]" />
                    <span>Metered Dosage</span>
                  </div>
                  <div className="text-base font-bold text-white">Micro-Mist Actuators</div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Custom spray cone angles, precise droplet sizing, and ergonomic caps.
                  </p>
                </div>

                <div className="p-4.5 rounded-2xl bg-[#0b182f] border border-slate-800 hover:border-[#1455A6] transition-all space-y-2 p-4">
                  <div className="flex items-center gap-2 text-[#00B8C7] font-bold text-xs uppercase tracking-wide">
                    <Check className="w-4 h-4 text-[#00B8C7]" />
                    <span>Tinplate &amp; Aluminum</span>
                  </div>
                  <div className="text-base font-bold text-white">50ml to 500ml Canisters</div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Continuous high-speed rotary crimping, automated coding &amp; packing.
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-[#1455A6] hover:bg-[#0f4487] text-white shadow-lg shadow-blue-900/30 flex items-center gap-2 transition-all"
                >
                  <span>Request an Aerosol Proposal</span>
                  <ArrowRight className="w-4 h-4 text-[#00B8C7]" />
                </button>
                <Link
                  href="/capabilities"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                >
                  View Filling Specifications &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRUSTED BY INDUSTRY LEADERS — DARK THEME */}
      <section className="py-20 sm:py-24 bg-[#071324] text-white border-y border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(20,85,166,0.25),transparent_75%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 reveal">
          {/* Header with Exact Client Content */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800/80">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00B8C7] bg-[#1455A6]/20 border border-[#1455A6]/40 px-3.5 py-1.5 rounded-full inline-block">
                Long-Term Partnerships
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Trusted by Industry Leaders
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Leading global and Indian brands trust Accra Pac as their OEM and private label partner. Many have stayed with us for years, not just single orders.
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
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    clientFilter === tab.id
                      ? "bg-[#1455A6] text-white shadow-md font-black ring-2 ring-[#00B8C7]/50"
                      : "bg-[#0b182f] text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Client Logos / Brand Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUSTED_CLIENTS
              .filter((client) => clientFilter === "all" || client.sector === clientFilter)
              .map((client) => (
                <div
                  key={client.name}
                  className="group rounded-2xl bg-[#0b182f] border border-slate-800 hover:border-[#1455A6] hover:bg-[#0f2240] p-6 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-blue-900/20 space-y-4 hover-lift"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1455A6]/30 to-[#0b182f] border border-[#1455A6]/50 text-[#00B8C7] flex items-center justify-center font-black text-base tracking-wider shadow-inner group-hover:scale-105 group-hover:border-[#00B8C7] transition-all">
                        {client.monogram}
                      </div>
                      <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-[#071324] text-[#00B8C7] border border-[#00B8C7]/30">
                        {client.category.split(" ")[0]}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#00B8C7] transition-colors">
                        {client.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#A6A9AD] font-medium mt-0.5">
                        {client.tier}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#071324]/80 border border-slate-800 text-sm text-slate-200 leading-relaxed font-normal">
                      {client.scope}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs sm:text-sm text-[#00B8C7] font-semibold">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00B8C7] shrink-0" />
                      <span>{client.badge}</span>
                    </span>
                    <Lock className="w-4 h-4 text-slate-500 group-hover:text-[#00B8C7] transition-colors" />
                  </div>
                </div>
              ))}
          </div>

          <div className="text-center text-xs sm:text-sm text-[#A6A9AD] pt-2">
            [Client logos and names displayed where commercial permission has been granted under bilateral agreement]
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE ACCRA PAC — LIGHT THEME */}
      <section id="why-choose-us" className="py-20 sm:py-24 bg-[#f8f9fa] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 reveal">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1455A6] bg-[#f0f6fe] px-4 py-1.5 rounded-full border border-blue-200 inline-block">
              The Accra Pac Advantage
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Why Choose Accra Pac
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 stagger-container">
            {WHY_CHOOSE_ACCRA_PAC.map((item, idx) => {
              const iconList = [Building2, FlaskConical, Award, Globe2, Factory, ShieldCheck];
              const IconComp = iconList[idx % iconList.length];

              return (
                <div
                  key={item.title}
                  className="p-7 rounded-2xl bg-white border border-[#A6A9AD]/30 hover:border-[#1455A6] hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 space-y-4 group flex flex-col justify-between hover-lift"
                >
                  <div className="space-y-3.5">
                    <div className="w-12 h-12 rounded-xl bg-[#f0f6fe] text-[#1455A6] flex items-center justify-center font-bold group-hover:scale-110 group-hover:bg-[#1455A6] group-hover:text-white transition-all">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1455A6] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-sm font-bold text-[#1455A6]">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#00B8C7]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. ABOUT ACCRA PAC — DARK THEME */}
      <section className="py-20 sm:py-24 bg-[#071324] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00B8C7] bg-[#1455A6]/20 border border-[#1455A6]/40 px-3.5 py-1.5 rounded-full inline-block">
                Pioneering Aerosol Contract Manufacturer
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                About Accra Pac
              </h2>
              {/* Exact content from client doc */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Accra Pac India Pvt. Ltd. is one of India&apos;s pioneering aerosol contract manufacturers. From our plant in Vapi, Gujarat, we serve global brands, private label companies and entrepreneurs across pharmaceuticals, personal care, household, Ayurvedic and industrial categories, so they can focus on growth while we manage manufacturing.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#1455A6] hover:bg-[#0f4487] text-white transition-all shadow-lg shadow-blue-900/30 hover-lift"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-4 h-4 text-[#00B8C7]" />
                </Link>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl aspect-[4/3] bg-slate-900 group hover-lift">
                <Image
                  src="/images/manufacturing/plant-infrastructure.jpg"
                  alt="Accra Pac Plant in Vapi Gujarat"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071324] via-[#071324]/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-sm font-bold">Vapi Plant, Gujarat, India</div>
                  <div className="text-xs text-[#00B8C7]">Dedicated Aerosol &amp; Liquid Filling Facility</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MANUFACTURING SOLUTIONS — LIGHT THEME */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 reveal">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1455A6] bg-[#f0f6fe] px-3.5 py-1.5 rounded-full border border-blue-200 inline-block">
              Integrated Production Formats
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Manufacturing Solutions
            </h2>
            {/* Exact content from client doc */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              From aerosols and liquids to roll-ons, foams, pump sprays and specialty formats, our integrated solutions take your product from development to global distribution.
            </p>
          </div>

          {/* Formats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 stagger-container">
            {[
              { title: "Aerosols", desc: "Hydrocarbon, BOV & Compressed Gas" },
              { title: "Liquids", desc: "2 ml to 5 Liters precision batching" },
              { title: "Roll-Ons", desc: "Dedicated high-speed ball insertion" },
              { title: "Foams", desc: "Shaving, mousses & foaming cleansers" },
              { title: "Pump Sprays", desc: "Fine mists & ergonomic triggers" },
              { title: "Specialty Formats", desc: "Custom valves, dual-chamber & bags" }
            ].map((f) => (
              <div 
                key={f.title}
                className="p-5 rounded-2xl bg-[#f8f9fa] border border-slate-200 text-center space-y-2 hover:border-[#1455A6] hover:bg-[#f0f6fe] transition-all hover-lift"
              >
                <div className="text-base font-bold text-slate-900">{f.title}</div>
                <div className="text-xs sm:text-sm text-slate-600 leading-snug">{f.desc}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm sm:text-base bg-[#1455A6] hover:bg-[#0f4487] text-white transition-all shadow-md"
            >
              <span>Explore Manufacturing Capabilities</span>
              <ArrowRight className="w-4 h-4 text-[#00B8C7]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. INDUSTRIES WE SERVE (ICON GRID) — DARK THEME */}
      <section className="py-20 sm:py-24 bg-[#071324] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 reveal">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00B8C7] bg-[#1455A6]/20 border border-[#1455A6]/40 px-4 py-1.5 rounded-full inline-block">
              Market Segments
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Industries We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-container">
            {INDUSTRIES_WE_SERVE.map((ind, idx) => {
              const icons = [Stethoscope, Sparkles, ShoppingBag, Store, Home, Car, Rocket, Globe2];
              const IconComp = icons[idx % icons.length];

              return (
                <div
                  key={ind.name}
                  className="p-6 rounded-2xl bg-[#0b182f] border border-slate-800 hover:border-[#00B8C7]/60 hover:bg-[#0f2240] transition-all duration-300 flex items-center gap-4 group hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-800 text-[#00B8C7] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#1455A6] group-hover:text-white transition-all">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="text-base font-bold text-slate-100 group-hover:text-[#00B8C7] transition-colors">
                    {ind.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. PRODUCT CATEGORIES (12 IMAGE CARDS LINKING TO PRODUCTS PAGE) — LIGHT THEME */}
      <section id="categories" className="py-20 sm:py-24 bg-[#f8f9fa] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 reveal">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1455A6] bg-[#f0f6fe] px-4 py-1.5 rounded-full border border-blue-200 inline-block">
                Complete Manufacturing Range
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                Product Categories
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                Choose a category to explore dedicated formulations and packaging formats.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-extrabold text-white bg-[#1455A6] hover:bg-[#0f4487] transition-all shadow-md self-start md:self-auto shrink-0 hover-lift"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4 text-[#00B8C7]" />
            </Link>
          </div>

          {/* 12 Category Cards Grid with AI Generated Photography */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PRODUCT_CATEGORIES.map((cat, idx) => {
              const anchor = cat.id === "hair-care" ? "hairid" : cat.id;

              return (
                <Link
                  key={cat.id}
                  href={`/products#${anchor}`}
                  className="group rounded-2xl bg-white border border-[#A6A9AD]/30 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-900/10 hover:border-[#1455A6] transition-all duration-300 flex flex-col justify-between hover-lift"
                >
                  <div>
                    {/* Category Image */}
                    <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black text-[#1455A6] border border-slate-200 shadow-sm">
                        0{idx + 1}
                      </div>
                      <div className="absolute bottom-3 left-4 right-4">
                        <span className="text-xs sm:text-sm font-bold text-white drop-shadow">
                          {cat.tagline}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1455A6] transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed font-normal">
                        {cat.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-[#1455A6]">
                      <span>View Category Formulations</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#00B8C7]" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-[#1455A6] hover:bg-[#0f4487] text-white transition-all shadow-lg"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4 text-[#00B8C7]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. OUR SOLUTIONS (GRAPHICAL TIMELINE & ROUTES) — DARK THEME */}
      <section className="py-20 sm:py-24 bg-[#071324] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 reveal">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00B8C7] bg-[#1455A6]/20 border border-[#1455A6]/40 px-3.5 py-1.5 rounded-full inline-block">
              Flexible Engagement Models
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Our Solutions
            </h2>
            {/* Exact content from client doc */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Whether you are launching your first product or expanding an established range, choose the route that fits.
            </p>
          </div>

          {/* Graphical Timeline from Client Doc */}
          <div className="p-6 rounded-3xl bg-[#0b182f] border border-slate-800 shadow-xl space-y-4">
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#00B8C7] text-center">
              Turnkey Production Flow
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold">
              {[
                "Concept",
                "Formulation",
                "Sampling",
                "Packaging",
                "Manufacturing",
                "Quality Assurance",
                "Export"
              ].map((step, i, arr) => (
                <React.Fragment key={step}>
                  <div className="px-4 py-2.5 rounded-xl bg-[#071324] border border-[#1455A6]/50 text-[#00B8C7] font-bold text-xs sm:text-sm flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1455A6]/30 text-white text-xs flex items-center justify-center font-black">
                      0{i + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <span className="text-[#00B8C7] font-black px-1">&rarr;</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* 3 Routes from Client Doc */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Route 1 */}
            <div className="p-8 rounded-3xl bg-[#0b182f] border border-slate-800 hover:border-[#1455A6] transition-all space-y-4 flex flex-col justify-between group hover-lift">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#1455A6]/20 text-[#00B8C7] flex items-center justify-center font-bold">
                  <Factory className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#00B8C7] transition-colors">
                  Contract Manufacturing
                </h3>
                <p className="text-base text-[#00B8C7] font-bold">
                  Your formulation, our production.
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  Already have a formulation? We validate your specifications on our lines and deliver consistent, export-ready batches.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <Link
                  href="/contract-manufacturing"
                  className="text-sm font-bold text-[#00B8C7] hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore Contract Manufacturing</span>
                  <span className="text-base">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Route 2 */}
            <div className="p-8 rounded-3xl bg-[#0b182f] border border-slate-800 hover:border-[#00B8C7] transition-all space-y-4 flex flex-col justify-between group hover-lift">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#1455A6]/20 text-[#00B8C7] flex items-center justify-center font-bold">
                  <Package className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#00B8C7] transition-colors">
                  OEM &amp; Private Labelling
                </h3>
                <p className="text-base text-[#00B8C7] font-bold">
                  Your brand, our manufacturing.
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  Whether you have a finished formulation or only an idea, we manage everything in between, from formula adaptation to packaging.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <Link
                  href="/oem-private-labelling"
                  className="text-sm font-bold text-[#00B8C7] hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore OEM &amp; Private Labelling</span>
                  <span className="text-base">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Route 3 */}
            <div className="p-8 rounded-3xl bg-[#0b182f] border border-slate-800 hover:border-[#1455A6] transition-all space-y-4 flex flex-col justify-between group hover-lift">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#1455A6]/20 text-[#00B8C7] flex items-center justify-center font-bold">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#00B8C7] transition-colors">
                  CDMO
                </h3>
                <p className="text-base text-[#00B8C7] font-bold">
                  From idea to commercial batch, under one roof.
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  End-to-end contract development, formulation synthesis, analytical validation, stability testing, and commercial scale-up.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <Link
                  href="/cdmo"
                  className="text-sm font-bold text-[#00B8C7] hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore CDMO Solutions</span>
                  <span className="text-base">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center pt-2">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm sm:text-base bg-[#1455A6] hover:bg-[#0f4487] text-white transition-all shadow-lg shadow-blue-900/30 hover-lift"
            >
              <span>Explore Our Solutions</span>
              <ArrowRight className="w-4 h-4 text-[#00B8C7]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. R&D & INNOVATION — LIGHT THEME */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1455A6] bg-[#f0f6fe] px-4 py-1.5 rounded-full border border-blue-200 inline-block">
                In-House Formulation Science
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                R&amp;D &amp; Innovation
              </h2>
              {/* Exact content from client doc */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Our ready formulations let you skip months of development, and our R&amp;D team develops custom products backed by in-house analytical and stability testing, so every formulation is validated before launch.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-bold text-slate-800 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <FlaskConical className="w-5 h-5 text-[#1455A6] shrink-0" />
                  <span>In-House GC &amp; HPLC Testing</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#00B8C7] shrink-0" />
                  <span>Microbiology Laboratory</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <Gauge className="w-5 h-5 text-[#1455A6] shrink-0" />
                  <span>6 Flame-Proof Stability Ovens</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <Package className="w-5 h-5 text-[#A6A9AD] shrink-0" />
                  <span>Packaging Compatibility Validated</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/cdmo"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm sm:text-base bg-[#1455A6] hover:bg-[#0f4487] text-white transition-all shadow-md"
                >
                  <span>Explore CDMO</span>
                  <ArrowRight className="w-4 h-4 text-[#00B8C7]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl aspect-[4/3] bg-slate-100 group">
                <Image
                  src="/images/manufacturing/qc-lab-testing.jpg"
                  alt="In-house analytical testing laboratory"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. QUALITY & COMPLIANCE — DARK THEME */}
      <section className="py-20 sm:py-24 bg-[#071324] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 reveal">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00B8C7] bg-[#1455A6]/20 border border-[#1455A6]/40 px-4 py-1.5 rounded-full inline-block">
              Audit-Ready Standards
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Quality &amp; Compliance
            </h2>
            {/* Exact content from client doc */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              ISO 9001, ISO 14001, ISO 22716 and ISO 45001 certified, WHO-GMP certified and US FDA registered. Every batch is documented, traceable and audit-ready.
            </p>
          </div>

          {/* Exact Certification Badges from Client Doc */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 stagger-container">
            {[
              { code: "ISO 9001", label: "Quality Management" },
              { code: "ISO 14001", label: "Environmental Management" },
              { code: "ISO 22716", label: "Cosmetics GMP" },
              { code: "ISO 45001", label: "Occupational Safety" },
              { code: "WHO-GMP", label: "Pharma Grade Facility" },
              { code: "US FDA", label: "Registered Facility" }
            ].map((cert) => (
              <div
                key={cert.code}
                className="p-5 rounded-2xl bg-[#0b182f] border border-slate-800 text-center space-y-1 hover:border-[#00B8C7] transition-colors hover-lift"
              >
                <div className="text-xl font-black text-[#00B8C7]">{cert.code}</div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium">{cert.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/quality"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm sm:text-base bg-[#1455A6] hover:bg-[#0f4487] text-white transition-all shadow-lg shadow-blue-900/30 hover-lift"
            >
              <span>Explore Quality &amp; Compliance</span>
              <ArrowRight className="w-4 h-4 text-[#00B8C7]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 13. EXPORT SOLUTIONS — LIGHT THEME */}
      <section className="py-20 sm:py-24 bg-[#f8f9fa] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 reveal">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1455A6] bg-[#f0f6fe] px-4 py-1.5 rounded-full border border-blue-200 inline-block">
                Global Trade Lanes
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                Export Solutions
              </h2>
              {/* Exact content from client doc */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Compliant manufacturing, complete documentation and reliable logistics coordination for customers across the USA, Middle East, Africa and Asia.
              </p>
            </div>

            <Link
              href="/export"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[#1455A6] hover:bg-[#0f4487] transition-all shadow-md self-start md:self-auto shrink-0 hover-lift"
            >
              <span>Explore All Trade Lanes</span>
              <ArrowRight className="w-4 h-4 text-[#00B8C7]" />
            </Link>
          </div>

          {/* Interactive World Map with Exact Countries from Doc */}
          <div className="rounded-3xl bg-[#071324] p-6 sm:p-10 shadow-2xl border border-slate-800 text-white">
            <WorldMap />
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center text-sm sm:text-base text-slate-700 font-medium">
            <strong className="text-[#1455A6]">Active Destination Highlights:</strong> USA, UAE, Oman, Singapore, Malaysia, Russia, Sri Lanka, Bhutan, Congo, Ethiopia, Djibouti, Bangladesh
          </div>
        </div>
      </section>

      {/* 14. FACILITY & INFRASTRUCTURE — DARK THEME */}
      <section className="py-20 sm:py-24 bg-[#071324] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 reveal">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800/80">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00B8C7] bg-[#1455A6]/20 border border-[#1455A6]/40 px-4 py-1.5 rounded-full inline-block">
                Vapi, Gujarat Manufacturing Plant
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Facility &amp; Infrastructure
              </h2>
              {/* Exact content from client doc */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                Dedicated aerosol and liquid filling lines, an in-house R&amp;D and QA laboratory and secure warehousing, strategically located in Vapi, Gujarat, with convenient access to Mumbai&apos;s international logistics infrastructure.
              </p>
            </div>

            <Link
              href="/capabilities"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[#1455A6] hover:bg-[#0f4487] transition-all shadow-md self-start md:self-auto shrink-0 hover-lift"
            >
              <span>Explore Facility</span>
              <ArrowRight className="w-4 h-4 text-[#00B8C7]" />
            </Link>
          </div>

          {/* 4 Image Cards: Factory | Production Line | Laboratory | Warehouse */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Factory */}
            <div className="group rounded-2xl bg-[#0b182f] border border-slate-800 overflow-hidden hover:border-[#1455A6] transition-all flex flex-col justify-between hover-lift">
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <Image
                    src="/images/manufacturing/plant-infrastructure.jpg"
                    alt="Accra Pac Vapi Factory"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-1.5">
                  <h3 className="text-base font-bold text-white group-hover:text-[#00B8C7] transition-colors">
                    Factory &amp; Infrastructure
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Strategically located in Vapi, Gujarat, near Mumbai ports.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Production line */}
            <div className="group rounded-2xl bg-[#0b182f] border border-slate-800 overflow-hidden hover:border-[#1455A6] transition-all flex flex-col justify-between hover-lift">
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <Image
                    src="/images/manufacturing/aerosol-filling-line.jpg"
                    alt="Aerosol & Liquid Production lines"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-1.5">
                  <h3 className="text-base font-bold text-white group-hover:text-[#00B8C7] transition-colors">
                    Production Lines
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    5 high-speed aerosol and 6 specialized liquid filling lines.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Laboratory */}
            <div className="group rounded-2xl bg-[#0b182f] border border-slate-800 overflow-hidden hover:border-[#1455A6] transition-all flex flex-col justify-between hover-lift">
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <Image
                    src="/images/manufacturing/qc-lab-testing.jpg"
                    alt="R&D and QA Laboratory"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-1.5">
                  <h3 className="text-base font-bold text-white group-hover:text-[#00B8C7] transition-colors">
                    R&amp;D and QA Laboratory
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    In-house GC, HPLC and microbiology analytical facilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Warehouse */}
            <div className="group rounded-2xl bg-[#0b182f] border border-slate-800 overflow-hidden hover:border-[#1455A6] transition-all flex flex-col justify-between hover-lift">
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <Image
                    src="/images/manufacturing/warehouse-logistics.jpg"
                    alt="Secure Warehousing"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-1.5">
                  <h3 className="text-base font-bold text-white group-hover:text-[#00B8C7] transition-colors">
                    Secure Warehousing
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    NFPA 30B compliant hazardous material storage and drayage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. BOTTOM CTA — LET'S BUILD YOUR NEXT SUCCESS STORY */}
      <section className="bg-gradient-to-r from-[#071324] via-[#0b182f] to-[#071324] text-white py-20 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 reveal">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00B8C7] bg-[#1455A6]/20 px-4 py-1.5 rounded-full border border-[#1455A6]/40">
            Start Your Manufacturing Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Let&apos;s Build Your Next Success Story
          </h2>
          {/* Exact content from client doc */}
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed">
            Launching a new product, expanding your portfolio or looking for a long-term manufacturing partner? Let&apos;s talk.
          </p>

          {/* 3 CTAs from Client Doc: Request a Quote | Schedule a Consultation | Download Company Profile */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm sm:text-base bg-[#1455A6] hover:bg-[#0f4487] text-white shadow-lg shadow-blue-900/30 transition-all"
            >
              Request a Quote
            </button>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm sm:text-base bg-slate-800 hover:bg-slate-700 text-white border border-[#A6A9AD]/30 transition-colors"
            >
              Schedule a Consultation
            </Link>
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm sm:text-base bg-[#0b182f] hover:bg-[#12284b] text-[#00B8C7] border border-[#00B8C7]/40 transition-colors"
            >
              Download Company Profile
            </button>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300 border-t border-slate-800/80 font-medium">
            <span>Direct Enquiries: Mr. Sahil Shah (+91 98251 49522)</span>
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
