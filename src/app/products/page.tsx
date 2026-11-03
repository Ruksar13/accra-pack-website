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
  ExternalLink
} from "lucide-react";
import { 
  PRODUCT_CATEGORIES, 
  SPOTLIGHT_PRODUCTS, 
  SpotlightProduct, 
  CategoryItem 
} from "@/data/websiteData";
import QuoteModal from "@/components/QuoteModal";

// Sidebar categories aligned with nainlab reference website pattern
const SIDEBAR_ITEMS = [
  { id: "pharma-otc", label: "PHARMACEUTICAL OTC", anchor: "pharma-otc" },
  { id: "personal-care", label: "PERSONAL CARE & GROOMING", anchor: "personal-care" },
  { id: "hair-care", label: "HAIR CARE", anchor: "hairid" }, // Matches nainlab #hairid reference!
  { id: "ayurveda-herbal", label: "AYURVEDA & HERBAL", anchor: "ayurveda-herbal" },
  { id: "fragrances", label: "FRAGRANCES & PERFUMES", anchor: "fragrances" },
  { id: "air-care", label: "AIR CARE & ROOM FRESHENERS", anchor: "air-care" },
  { id: "household-cleaning", label: "HOUSEHOLD CLEANING", anchor: "household-cleaning" },
  { id: "disinfection-hygiene", label: "PERSONAL HYGIENE & DISINFECTION", anchor: "disinfection-hygiene" },
  { id: "insect-repellents", label: "INSECT REPELLENTS", anchor: "insect-repellents" },
  { id: "automotive-care", label: "AUTOMOTIVE CARE", anchor: "automotive-care" },
  { id: "industrial-maintenance", label: "INDUSTRIAL & MAINTENANCE", anchor: "industrial-maintenance" },
  { id: "professional-medical", label: "MEDICAL & PROFESSIONAL CARE", anchor: "professional-medical" },
];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeNav, setActiveNav] = useState("pharma-otc");
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteCategory, setQuoteCategory] = useState<string>("Product Inquiry");

  // Handle URL hash on mount (e.g. #hairid)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        if (hash === "hairid") {
          setActiveNav("hair-care");
          const el = document.getElementById("hairid");
          el?.scrollIntoView({ behavior: "smooth" });
        } else {
          setActiveNav(hash);
          const el = document.getElementById(hash);
          el?.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, []);

  const handleOpenQuote = (categoryName: string) => {
    setQuoteCategory(categoryName);
    setIsQuoteOpen(true);
  };

  const handleScrollTo = (anchor: string, id: string) => {
    setActiveNav(id);
    const element = document.getElementById(anchor);
    if (element) {
      const yOffset = -90; // offset for sticky navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
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
      cat.formats.some(f => f.toLowerCase().includes(q))
    );
  });

  return (
    <div className="flex flex-col">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-14 sm:py-18 border-b border-slate-800">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
              Formulation Library &amp; Product Sectors
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Products We Manufacture
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              Explore our 12 specialized manufacturing sectors with market-tested formulations, custom active variants, and export-compliant packaging formats.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SPOTLIGHT FINISHED PRODUCTS (WITH INDIVIDUAL DEDICATED DETAIL PAGES) */}
      <section className="py-14 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950 border border-teal-500/30 px-3 py-1 rounded-full">
                Featured Commercial Lines
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                Spotlight Products (Click for Full Detail Pages)
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                Explore individual dedicated specification pages for our highest-volume private label &amp; contract manufactured products.
              </p>
            </div>
            <button
              onClick={() => handleOpenQuote("Custom Product Line")}
              className="px-5 py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs transition-colors self-start md:self-auto shrink-0"
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
                className="group bg-slate-950 rounded-2xl border border-slate-800 hover:border-teal-400 overflow-hidden shadow-lg hover:shadow-teal-500/10 transition-all flex flex-col justify-between"
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
                    <span>Explore Full Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Top Search & Filter Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-20 z-30 shadow-sm py-3.5 px-4">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search formulations, actives (e.g. Lidocaine, Minoxidil)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Stats Indicator */}
          <div className="text-xs text-slate-500 flex items-center gap-4">
            <span><strong>500+</strong> Ready R&amp;D Formulations</span>
            <span className="hidden md:inline">&bull;</span>
            <span className="hidden md:inline"><strong>WHO-GMP &bull; US FDA Registered</strong></span>
          </div>
        </div>
      </div>

      {/* 4. Main Nainlab-style Two-Column Layout */}
      <section className="bg-slate-50/70 py-10 sm:py-14">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: Sticky Vertical Category Sidebar (Nainlab reference style) */}
            <aside className="lg:col-span-3 sticky top-36 z-20">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 space-y-2">
                <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Product Categories
                  </h3>
                  <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full">
                    12 Sectors
                  </span>
                </div>

                <nav className="space-y-1 max-h-[70vh] overflow-y-auto pr-1">
                  {SIDEBAR_ITEMS.map((item) => {
                    const isActive = activeNav === item.id;

                    return (
                      <button
                        key={item.id}
                        onClick={() => handleScrollTo(item.anchor, item.id)}
                        className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-between group ${
                          isActive
                            ? "bg-slate-900 text-white shadow-sm font-bold"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                        }`}
                      >
                        <span className="truncate pr-2">{item.label}</span>
                        <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                          isActive ? "text-teal-400 translate-x-0.5" : "text-slate-400 group-hover:translate-x-0.5"
                        }`} />
                      </button>
                    );
                  })}
                </nav>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  <p>Need a custom formulation not listed here?</p>
                  <button
                    onClick={() => handleOpenQuote("Bespoke Custom Formulation")}
                    className="text-teal-700 hover:text-teal-800 font-bold mt-1 inline-flex items-center gap-1"
                  >
                    Ask our R&amp;D Team <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </aside>

            {/* RIGHT COLUMN: Products & Categories Content Stream */}
            <main className="lg:col-span-9 space-y-12">
              {filteredCategories.length === 0 ? (
                <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center space-y-3">
                  <p className="text-base text-slate-700">No products match &quot;{searchQuery}&quot;.</p>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-xs font-bold text-teal-700 hover:underline"
                  >
                    Clear Search
                  </button>
                </div>
              ) : (
                filteredCategories.map((category) => {
                  const anchorId = category.id === "hair-care" ? "hairid" : category.id;

                  return (
                    <article
                      key={category.id}
                      id={anchorId}
                      className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden scroll-mt-36"
                    >
                      {/* Category Banner with Image */}
                      <div className="relative h-48 sm:h-56 w-full bg-slate-900 overflow-hidden">
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 900px"
                          className="object-cover opacity-75"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-6 sm:p-8">
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                              {category.tagline}
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                              {category.name}
                            </h2>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 sm:p-8 space-y-6">
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {category.shortDesc}
                        </p>

                        {/* Why Choose Us for This Category (Nainlab Pattern) */}
                        <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-100 space-y-1.5">
                          <div className="flex items-center gap-2 text-xs font-bold text-teal-900">
                            <Sparkles className="w-4 h-4 text-teal-600" />
                            <span>Kickstart Your {category.name.split(" ")[0]} Product&apos;s Market Journey!</span>
                          </div>
                          <p className="text-xs text-teal-950/80 leading-relaxed">
                            Skip months of trial-and-error. Choose from our tested ready formulas or work with our Vapi R&amp;D chemists to customize hold, fragrance, actives, and packaging compatibility for immediate market entry.
                          </p>
                        </div>

                        {/* Applications & Ready Products Grid */}
                        <div className="space-y-3">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            Popular Formulations &amp; Products
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                            {category.popularProducts.map((prod) => (
                              <div 
                                key={prod}
                                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-teal-400 hover:bg-white transition-all space-y-1 group"
                              >
                                <div className="text-xs font-bold text-slate-800 group-hover:text-teal-700 transition-colors">
                                  {prod}
                                </div>
                                <div className="text-[11px] text-slate-500">
                                  Validated Formula &bull; Fast Sampling
                                </div>
                                <button
                                  onClick={() => handleOpenQuote(`${category.name} - ${prod}`)}
                                  className="text-[11px] font-semibold text-teal-700 hover:underline pt-1 block"
                                >
                                  Request Sample &rarr;
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Specifications Summary */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-xs text-slate-700">
                          <div>
                            <span className="font-bold text-slate-900 block mb-1">Key Applications:</span>
                            <p className="text-slate-600 leading-relaxed">
                              {category.applications.join(" &bull; ")}
                            </p>
                          </div>
                          <div>
                            <span className="font-bold text-slate-900 block mb-1">Manufacturing Formats:</span>
                            <p className="text-slate-600 leading-relaxed">
                              {category.formats.join(" &bull; ")}
                            </p>
                          </div>
                          <div>
                            <span className="font-bold text-slate-900 block mb-1">Standards &amp; Compliance:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {category.compliance.map((c) => (
                                <span key={c} className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-semibold">
                                  {c}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="pt-2 flex items-center justify-between">
                          <button
                            onClick={() => handleOpenQuote(category.name)}
                            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-teal-700 text-white font-semibold text-xs shadow transition-all"
                          >
                            Request Quote for {category.name.split(" ")[0]}
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })
              )}
            </main>
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
