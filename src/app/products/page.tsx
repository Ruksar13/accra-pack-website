"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Package, 
  ShieldCheck, 
  X, 
  ChevronRight,
  Flame,
  FlaskConical,
  Filter,
  Check,
  ExternalLink,
  Pill,
  Scissors,
  Leaf,
  Wind,
  SprayCan,
  Bug,
  Car,
  Wrench,
  Stethoscope,
  Layers,
  SlidersHorizontal,
  ChevronDown,
  HelpCircle,
  FileCheck2
} from "lucide-react";
import { 
  PRODUCT_CATEGORIES, 
  SPOTLIGHT_PRODUCTS, 
  SpotlightProduct, 
  CategoryItem 
} from "@/data/websiteData";
import QuoteModal from "@/components/QuoteModal";

// 12 Core Sectors aligned with document and Nainlab reference structure
const SECTOR_NAV_ITEMS = [
  { id: "pharma-otc", num: "01", label: "Pharma OTC", fullTitle: "Pharmaceutical OTC & Healthcare", anchor: "pharma-otc", icon: Pill },
  { id: "personal-care", num: "02", label: "Personal Care", fullTitle: "Personal Care & Grooming", anchor: "personal-care", icon: Sparkles },
  { id: "hair-care", num: "03", label: "Hair Care", fullTitle: "Hair Care & Styling", anchor: "hairid", icon: Scissors }, // Matches nainlab #hairid!
  { id: "ayurveda-herbal", num: "04", label: "Ayurveda & Herbal", fullTitle: "Ayurveda & Herbal Care", anchor: "ayurveda-herbal", icon: Leaf },
  { id: "fragrances", num: "05", label: "Fragrances", fullTitle: "Fragrances & Perfumes", anchor: "fragrances", icon: Flame },
  { id: "air-care", num: "06", label: "Air Care", fullTitle: "Air Care & Room Fresheners", anchor: "air-care", icon: Wind },
  { id: "household-cleaning", num: "07", label: "Household Cleaning", fullTitle: "Household Cleaning", anchor: "household-cleaning", icon: Sparkles },
  { id: "disinfection-hygiene", num: "08", label: "Disinfection", fullTitle: "Disinfection & Hygiene", anchor: "disinfection-hygiene", icon: ShieldCheck },
  { id: "insect-repellents", num: "09", label: "Insect Repellents", fullTitle: "Insect Repellents", anchor: "insect-repellents", icon: Bug },
  { id: "automotive-care", num: "10", label: "Automotive Care", fullTitle: "Automotive Care", anchor: "automotive-care", icon: Car },
  { id: "industrial-maintenance", num: "11", label: "Industrial & Maint.", fullTitle: "Industrial & Maintenance", anchor: "industrial-maintenance", icon: Wrench },
  { id: "professional-medical", num: "12", label: "Medical Device", fullTitle: "Medical Device & Professional Care", anchor: "professional-medical", icon: Stethoscope },
];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSectorId, setActiveSectorId] = useState("pharma-otc");
  const [viewMode, setViewMode] = useState<"focused" | "all">("focused");
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteCategory, setQuoteCategory] = useState<string>("Product Inquiry");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Handle URL hash on mount (e.g. #hairid)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        if (hash === "hairid" || hash === "hair-care") {
          setActiveSectorId("hair-care");
          const el = document.getElementById("categories-section");
          el?.scrollIntoView({ behavior: "smooth" });
        } else {
          const matched = SECTOR_NAV_ITEMS.find(s => s.anchor === hash || s.id === hash);
          if (matched) {
            setActiveSectorId(matched.id);
            const el = document.getElementById("categories-section");
            el?.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    }
  }, []);

  const handleOpenQuote = (categoryName: string) => {
    setQuoteCategory(categoryName);
    setIsQuoteOpen(true);
  };

  const handleSelectSector = (id: string, anchor: string) => {
    setActiveSectorId(id);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${anchor}`);
    }
    const el = document.getElementById("categories-section");
    if (el) {
      const yOffset = -85;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const filteredCategories = PRODUCT_CATEGORIES.filter((cat) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      cat.name.toLowerCase().includes(q) ||
      cat.shortDesc.toLowerCase().includes(q) ||
      cat.popularProducts.some(p => p.toLowerCase().includes(q)) ||
      cat.formats.some(f => f.toLowerCase().includes(q)) ||
      cat.applications.some(a => a.toLowerCase().includes(q))
    );
  });

  const activeCategory = PRODUCT_CATEGORIES.find(c => c.id === activeSectorId) || PRODUCT_CATEGORIES[0];
  const activeSectorMeta = SECTOR_NAV_ITEMS.find(s => s.id === activeCategory.id) || SECTOR_NAV_ITEMS[0];
  const ActiveIcon = activeSectorMeta.icon;

  return (
    <div className="flex flex-col">
      {/* 1. Header Banner */}
      <section className="relative bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800 overflow-hidden">
        {/* Subtle ambient lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#f0f6fe]0/10 rounded-full blur-3xl pointer-events-none animate-float" />
        <div className="absolute -bottom-20 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071324]/80 border border-[#1455A6]/30 text-[#00B8C7] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#1455A6] animate-pulse" />
              Formulation Library &amp; Product Sectors
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Products We Manufacture
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl">
              Our range is organized into 12 categories, each backed by dedicated formulations and packaging formats. Choose a category to see what we make.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SPOTLIGHT FINISHED PRODUCTS (FEATURED COMMERCIAL LINES) */}
      <section className="py-14 bg-slate-900 text-white border-b border-slate-800 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00B8C7] bg-[#071324] border border-[#1455A6]/30 px-3 py-1 rounded-full inline-block">
                High-Volume Commercial Lines
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Spotlight Finished Products
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
                Explore individual dedicated specification pages for our highest-volume private label &amp; contract manufactured lines.
              </p>
            </div>
            <button
              onClick={() => handleOpenQuote("Custom Product Line")}
              className="px-5 py-2.5 rounded-xl bg-[#1455A6] hover:bg-[#0f4487] text-slate-950 font-bold text-xs transition-colors self-start md:self-auto shrink-0 shadow-md hover-lift"
            >
              Request Custom Formula
            </button>
          </div>

          {/* Product cards with images and links to /products/[slug] */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPOTLIGHT_PRODUCTS.map((prod) => (
              <Link
                key={prod.id}
                href={`/products/${prod.slug}`}
                className="group bg-slate-950 rounded-2xl border border-slate-800 hover:border-[#00B8C7] overflow-hidden shadow-lg hover:shadow-blue-900/10 transition-all duration-300 flex flex-col justify-between hover-lift"
              >
                <div>
                  {/* Product Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-950/80 backdrop-blur-md text-[#00B8C7] border border-slate-700">
                        {prod.category.split(" ")[0]}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-white group-hover:text-[#00B8C7] transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {prod.overview}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-[#00B8C7]">
                    <span>Explore Full Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. REDESIGNED INTERACTIVE CATEGORIES SECTION */}
      <section id="categories-section" className="bg-slate-50 py-12 sm:py-16 scroll-mt-20 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Top Control Bar: Search + Mode Switcher */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Search Box */}
            <div className="relative w-full lg:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search 500+ formulas, actives (e.g. Minoxidil, Lidocaine, Deo)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1455A6] focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center gap-3 text-xs text-slate-600 overflow-x-auto w-full lg:w-auto justify-start lg:justify-end pb-1 lg:pb-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#f0f6fe] text-[#1455A6] font-semibold border border-blue-100 whitespace-nowrap">
                <FlaskConical className="w-3.5 h-3.5 text-[#1455A6]" />
                500+ Ready Formulations
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-semibold whitespace-nowrap">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00B8C7]" />
                WHO-GMP &amp; US FDA
              </span>

              {/* View Switcher Toggle */}
              <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 shrink-0">
                <button
                  onClick={() => setViewMode("focused")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    viewMode === "focused"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Sector Focus
                </button>
                <button
                  onClick={() => setViewMode("all")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    viewMode === "all"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  All 12 Sectors
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Category Selector Pill Bar */}
          <div className="bg-white rounded-2xl p-3 border border-slate-200 shadow-sm overflow-hidden">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 px-1 scrollbar-thin">
              {SECTOR_NAV_ITEMS.map((sector) => {
                const IconComponent = sector.icon;
                const isActive = activeSectorId === sector.id;

                return (
                  <button
                    key={sector.id}
                    id={`tab-${sector.anchor}`}
                    onClick={() => handleSelectSector(sector.id, sector.anchor)}
                    className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 group ${
                      isActive
                        ? "bg-slate-900 text-white shadow-md shadow-slate-900/10 scale-[1.02]"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/60"
                    }`}
                  >
                    <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                      isActive ? "bg-[#f0f6fe]0/20 text-[#00B8C7]" : "bg-slate-200 text-slate-600"
                    }`}>
                      {sector.num}
                    </span>
                    <IconComponent className={`w-3.5 h-3.5 transition-transform group-hover:scale-110 ${
                      isActive ? "text-[#00B8C7]" : "text-slate-400 group-hover:text-[#1455A6]"
                    }`} />
                    <span>{sector.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Result Banner if Filtered */}
          {searchQuery && (
            <div className="bg-[#f0f6fe] border border-blue-200 rounded-xl p-3 flex items-center justify-between text-xs text-[#0b182f]">
              <span>Showing results matching: &quot;<strong>{searchQuery}</strong>&quot; ({filteredCategories.length} categories found)</span>
              <button 
                onClick={() => setSearchQuery("")}
                className="text-[#1455A6] font-bold hover:underline"
              >
                Clear Search
              </button>
            </div>
          )}

          {/* MAIN CATEGORY VIEW: FOCUSED MODE (Nainlab reference inspired) */}
          {viewMode === "focused" && !searchQuery ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Vertical Category List */}
              <aside className="lg:col-span-4 space-y-3">
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 space-y-2">
                  <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Select Sector
                    </span>
                    <span className="text-[10px] font-bold text-[#1455A6] bg-[#f0f6fe] px-2 py-0.5 rounded-full border border-blue-100">
                      12 Core Lines
                    </span>
                  </div>

                  <div className="space-y-1.5 max-h-[620px] overflow-y-auto pr-1">
                    {SECTOR_NAV_ITEMS.map((item) => {
                      const IconComponent = item.icon;
                      const isCurrent = activeSectorId === item.id;

                      return (
                        <button
                          key={item.id}
                          onClick={() => handleSelectSector(item.id, item.anchor)}
                          className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between group ${
                            isCurrent
                              ? "bg-slate-900 text-white shadow-md"
                              : "bg-slate-50/80 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200/50"
                          }`}
                        >
                          <div className="flex items-center gap-2.5 truncate">
                            <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded shrink-0 ${
                              isCurrent ? "bg-[#f0f6fe]0/30 text-[#00B8C7]" : "bg-slate-200 text-slate-600"
                            }`}>
                              {item.num}
                            </span>
                            <IconComponent className={`w-4 h-4 shrink-0 ${
                              isCurrent ? "text-[#00B8C7]" : "text-slate-400 group-hover:text-[#1455A6]"
                            }`} />
                            <span className="text-xs font-bold truncate">{item.label}</span>
                          </div>
                          <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                            isCurrent ? "text-[#00B8C7] translate-x-1" : "text-slate-400 group-hover:translate-x-1"
                          }`} />
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                    <p className="font-semibold text-slate-700">Custom Category Requirements?</p>
                    <p>Our Vapi analytical lab formulates custom actives to your specification.</p>
                    <button
                      onClick={() => handleOpenQuote("Custom R&D Formulation")}
                      className="text-[#1455A6] hover:text-[#1455A6] font-bold inline-flex items-center gap-1 pt-1"
                    >
                      Talk to R&amp;D Team <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </aside>

              {/* Right Column: Detailed Showcase for Active Category */}
              <main className="lg:col-span-8 space-y-6">
                <article className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden animate-fade-in">
                  
                  {/* Category Header Hero Card */}
                  <div className="relative h-60 sm:h-72 w-full bg-slate-950 overflow-hidden">
                    <Image
                      src={activeCategory.image}
                      alt={activeCategory.name}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 850px"
                      className="object-cover opacity-60 scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent flex flex-col justify-end p-6 sm:p-8">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#1455A6] text-slate-950 uppercase tracking-wider">
                            Sector {activeSectorMeta.num} of 12
                          </span>
                          <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-slate-900/90 text-[#00B8C7] border border-[#1455A6]/30 backdrop-blur-md">
                            {activeCategory.tagline}
                          </span>
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-black text-white">
                          {activeCategory.name}
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
                          {activeCategory.shortDesc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-8">
                    
                    {/* Nainlab Reference Pattern: Fast-Track Callout Card */}
                    <div className="p-5 rounded-2xl bg-gradient-to-r from-teal-500/10 via-teal-50 to-emerald-50/40 border border-blue-200/80 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#0b182f]">
                        <Sparkles className="w-4 h-4 text-[#1455A6] animate-spin-slow" />
                        <span>Fast-Track Your {activeCategory.name.split(" ")[0]} Product Launch</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        Skip months of formulation trial-and-error. Choose from our tested ready-to-fill formulations or work with our formulation chemists to fine-tune active strength, viscosity, fragrance profiles, and propellant ratios for immediate market launch.
                      </p>
                    </div>

                    {/* Popular Products & Ready Formulations Grid */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                          <Layers className="w-3.5 h-3.5 text-[#1455A6]" />
                          Validated Commercial Formulations
                        </h3>
                        <span className="text-[11px] font-medium text-slate-400">
                          {activeCategory.popularProducts.length} Ready Lines
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {activeCategory.popularProducts.map((prod) => (
                          <div 
                            key={prod}
                            className="p-4 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#00B8C7] transition-all duration-200 space-y-2 hover-lift group"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#1455A6] transition-colors">
                                  {prod}
                                </h4>
                                <div className="text-[11px] text-slate-500 mt-0.5">
                                  Standard &amp; Custom Actives &bull; Stable Shelf-Life
                                </div>
                              </div>
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#f0f6fe] text-[#1455A6] border border-blue-200 shrink-0">
                                Ready
                              </span>
                            </div>

                            <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs">
                              <span className="text-[11px] text-slate-400">Rapid 7-Day Lab Sample</span>
                              <button
                                onClick={() => handleOpenQuote(`${activeCategory.name} - ${prod}`)}
                                className="font-bold text-[#1455A6] group-hover:text-[#0b182f] hover:underline flex items-center gap-1"
                              >
                                Request Sample &rarr;
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Applications Matrix */}
                    <div className="space-y-2.5 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Target Applications &amp; Uses
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeCategory.applications.map((app) => (
                          <span 
                            key={app}
                            className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200/70 text-slate-700 text-xs font-medium border border-slate-200/70 transition-colors"
                          >
                            &bull; {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Packaging Formats & Delivery Systems */}
                    <div className="space-y-2.5 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Compatible Packaging &amp; Dispensing Formats
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {activeCategory.formats.map((fmt) => (
                          <div key={fmt} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                            <Check className="w-3.5 h-3.5 text-[#1455A6] shrink-0" />
                            <span>{fmt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Compliance & Certifications */}
                    <div className="p-4 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#00B8C7]">
                          Quality Assurance Standards
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {activeCategory.compliance.map((c) => (
                            <span key={c} className="px-2.5 py-0.5 rounded-md bg-slate-800 text-teal-200 border border-slate-700 text-[11px] font-medium">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => handleOpenQuote(activeCategory.name)}
                        className="px-6 py-3 rounded-xl bg-[#1455A6] hover:bg-[#0f4487] text-slate-950 font-bold text-xs transition-colors shadow whitespace-nowrap self-start sm:self-auto"
                      >
                        Request Quote for {activeCategory.name.split(" ")[0]}
                      </button>
                    </div>

                  </div>
                </article>
              </main>
            </div>
          ) : (
            /* ALL 12 SECTORS GRID VIEW / SEARCH RESULTS */
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCategories.map((category) => {
                  const sectorMeta = SECTOR_NAV_ITEMS.find(s => s.id === category.id) || SECTOR_NAV_ITEMS[0];
                  const Icon = sectorMeta.icon;

                  return (
                    <article
                      key={category.id}
                      id={sectorMeta.anchor}
                      className="bg-white rounded-3xl border border-slate-200 hover:border-[#00B8C7] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between hover-lift group"
                    >
                      <div>
                        {/* Card Header with Image */}
                        <div className="relative h-44 w-full bg-slate-950 overflow-hidden">
                          <Image
                            src={category.image}
                            alt={category.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover opacity-65 group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-between p-5">
                            <div className="flex items-center justify-between">
                              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#1455A6] text-slate-950 uppercase tracking-wider">
                                Sector {sectorMeta.num}
                              </span>
                              <div className="p-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-[#00B8C7]">
                                <Icon className="w-4 h-4" />
                              </div>
                            </div>
                            <div>
                              <span className="text-[10px] font-bold text-[#00B8C7] uppercase tracking-wider block">
                                {category.tagline}
                              </span>
                              <h3 className="text-xl font-bold text-white mt-0.5">
                                {category.name}
                              </h3>
                            </div>
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-6 space-y-4">
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {category.shortDesc}
                          </p>

                          {/* Popular Products Tags */}
                          <div className="space-y-1.5">
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                              Key Formulations:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {category.popularProducts.map((p) => (
                                <span 
                                  key={p} 
                                  className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 text-[11px] font-semibold border border-slate-200/60"
                                >
                                  {p}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Formats snippet */}
                          <div className="pt-2 text-xs text-slate-500">
                            <strong>Formats:</strong> {category.formats.slice(0, 3).join(", ")}
                          </div>
                        </div>
                      </div>

                      {/* Card Footer Action */}
                      <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                        <button
                          onClick={() => {
                            setActiveSectorId(category.id);
                            setViewMode("focused");
                            if (typeof window !== "undefined") {
                              window.history.replaceState(null, "", `#${sectorMeta.anchor}`);
                            }
                            const el = document.getElementById("categories-section");
                            el?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="text-xs font-bold text-[#1455A6] hover:text-[#0b182f] inline-flex items-center gap-1"
                        >
                          View Sector Details &rarr;
                        </button>
                        <button
                          onClick={() => handleOpenQuote(category.name)}
                          className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-[#1455A6] text-white text-xs font-semibold transition-colors shadow-sm"
                        >
                          Request Sample
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 4. FOR EVERY CATEGORY (FROM CLIENT DOC) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1455A6] bg-[#f0f6fe] px-3.5 py-1.5 rounded-full border border-blue-200 inline-block">
              Universal Standards
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              For Every Category
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#00B8C7] space-y-2 shadow-sm transition-all duration-300 hover-lift">
              <div className="flex items-center gap-2 text-[#1455A6] font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#1455A6]" />
                <span>Private Label &amp; OEM</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Use one of our ready formulations or a custom one developed for you.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#00B8C7] space-y-2 shadow-sm transition-all duration-300 hover-lift">
              <div className="flex items-center gap-2 text-cyan-700 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-[#1455A6]" />
                <span>Certifications</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Manufactured at our ISO-certified, WHO-GMP certified and US FDA registered facility.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#00B8C7] space-y-2 shadow-sm transition-all duration-300 hover-lift">
              <div className="flex items-center gap-2 text-[#1455A6] font-bold text-sm">
                <Package className="w-5 h-5 text-[#00B8C7]" />
                <span>Documentation</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                COA, SDS and batch records for every commercial order, with regulatory support for domestic and export markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS (FROM CLIENT DOC WITH INTERACTIVE ACCORDIONS) */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1455A6] bg-[#f0f6fe] px-3 py-1 rounded-full border border-blue-200">
              Clear Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3.5">
            {[
              {
                q: "Can I use my own formulation?",
                a: "Yes. We manufacture to your formula, adapt one from our library, or develop a custom one."
              },
              {
                q: "Can you manufacture across several categories for one brand?",
                a: "Yes. Many brands launch a full range through us as one project."
              },
              {
                q: "Can you support export markets?",
                a: "Yes. We support the documentation and packaging that export markets require."
              },
              {
                q: "Can't find your product?",
                a: "Tell us what you need. Our library covers more than the list above, and our R&D team can develop new products."
              }
            ].map((faq, i) => {
              const isOpen = activeFaq === i;

              return (
                <div 
                  key={i} 
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 text-slate-900 hover:text-[#1455A6] transition-colors"
                  >
                    <span className="text-sm font-bold">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#1455A6]" : ""
                    }`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-4 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => handleOpenQuote("Products Page Inquiry")}
                className="px-8 py-3.5 rounded-xl font-bold text-xs bg-[#1455A6] hover:bg-[#0f4487] text-white shadow-md transition-all hover-lift"
              >
                Request a Quote
              </button>
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-xl font-semibold text-xs bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 transition-colors hover-lift"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reusable Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={() => setIsQuoteOpen(false)} 
        preselectedCategory={quoteCategory} 
      />
    </div>
  );
}

