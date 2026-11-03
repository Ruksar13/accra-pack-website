"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Search, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Tag, 
  Sparkles, 
  ChevronRight,
  X,
  FileText
} from "lucide-react";
import { INSIGHT_ARTICLES, InsightArticle } from "@/data/websiteData";
import QuoteModal from "@/components/QuoteModal";

export default function InsightsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const categories = ["all", "Aerosol Technology", "Product Development", "Export & Regulatory", "Packaging Innovations", "Export & Logistics"];

  const filteredArticles = INSIGHT_ARTICLES.filter((art) => {
    const matchesCat = selectedCategory === "all" || art.category === selectedCategory;
    const matchesSearch = 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="flex flex-col">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
              Industry Knowledge &amp; Technical Analysis
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Aerosol Engineering, Export &amp; R&amp;D Insights
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Stay ahead with technical guides on aerosol filling mechanics, regulatory audits, Bag-on-Valve applications, and dangerous goods export logistics from our engineering team in Vapi.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Filter & Search Bar */}
      <section className="bg-white py-6 border-b border-slate-200 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search engineering insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium shrink-0 transition-colors ${
                    selectedCategory === cat
                      ? "bg-slate-900 text-white font-bold"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat === "all" ? "All Topics" : cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Articles Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                id={article.id}
                onClick={() => setActiveArticle(article)}
                className="cursor-pointer bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-between space-y-5 group scroll-mt-28"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 font-semibold border border-teal-100">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <div className="text-[11px] text-slate-500 line-clamp-2 italic">
                    <strong>Key Takeaway:</strong> {article.takeaway}
                  </div>
                  <div className="text-xs font-bold text-teal-700 group-hover:text-teal-800 flex items-center justify-between pt-1">
                    <span>Read Executive Summary</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Article Modal / Reader View */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div 
            className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-slate-900 text-white p-6 flex justify-between items-start">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                  {activeArticle.category} &bull; {activeArticle.readTime}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-1">
                  {activeArticle.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6 text-sm text-slate-700">
              <div>
                <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-2">
                  Executive Briefing
                </h4>
                <p className="leading-relaxed text-slate-600">
                  {activeArticle.summary}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-teal-50 border border-teal-100 text-teal-950 space-y-1.5">
                <div className="font-bold text-xs uppercase tracking-wider text-teal-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  Engineering &amp; Business Takeaway
                </div>
                <p className="text-xs sm:text-sm leading-relaxed">
                  {activeArticle.takeaway}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                <span className="font-bold text-slate-800 block">How Accra Pac Implements This:</span>
                <p>
                  Every technical insight published by our engineering desk is integrated directly into our daily shop-floor procedures at Vapi. From crimp validation to dangerous goods documentation, our clients benefit from 45+ years of real-world implementation.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-4">
                <span className="text-xs text-slate-500">
                  Want to discuss this topic with our technical team?
                </span>
                <button
                  onClick={() => {
                    setActiveArticle(null);
                    setIsQuoteOpen(true);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-teal-700 text-white font-semibold text-xs transition-colors shadow"
                >
                  Consult an Engineer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. CTA Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Have a Specific Formulation or Technical Question?
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Our chemists and packaging specialists are available for technical feasibility consultations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-teal-700 text-white font-semibold text-xs transition-all shadow"
            >
              Ask Our Technical Team
            </button>
            <Link
              href="/capabilities"
              className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors"
            >
              Explore Manufacturing Line Specs
            </Link>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}

