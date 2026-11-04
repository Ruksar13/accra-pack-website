"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ChevronRight, 
  Calendar, 
  Sparkles, 
  ShieldCheck, 
  Factory, 
  Globe2, 
  FlaskConical, 
  Award,
  CheckCircle2
} from "lucide-react";

interface MilestoneExtended {
  period: string;
  yearNumber: string;
  phase: string;
  title: string;
  tag: string;
  description: string;
  icon: React.ElementType;
  highlights: string[];
}

const EXTENDED_MILESTONES: MilestoneExtended[] = [
  {
    period: "1979",
    yearNumber: "01",
    phase: "Established in Vapi",
    title: "Established in Vapi, Gujarat",
    tag: "First Automatic Aerosol Plant",
    description: "Accra Pac is established in Vapi, Gujarat, with one of India's first state-of-the-art automatic aerosol plants.",
    icon: Factory,
    highlights: ["Automatic aerosol plant", "Propellant filling pioneer", "Vapi facility founded"]
  },
  {
    period: "1980s–1990s",
    yearNumber: "02",
    phase: "Propellant & Multi-Format",
    title: "Propellant & Format Expansion",
    tag: "Ozone-Friendly LPG Technology",
    description: "Introduces ozone-friendly LPG propellant technology and expands into liquids, creams, lotions and semi-solids.",
    icon: FlaskConical,
    highlights: ["Ozone-friendly LPG propellants", "Expanded into liquids and creams", "Semi-solid formulation lines"]
  },
  {
    period: "2005",
    yearNumber: "03",
    phase: "Export Journey",
    title: "First Major Export Order",
    tag: "Long-Term Global Relationships",
    description: "Ships its first major export order and begins long-term relationships with international markets.",
    icon: Globe2,
    highlights: ["First major international shipment", "Export compliance protocols", "Global market relationships"]
  },
  {
    period: "2010s",
    yearNumber: "04",
    phase: "Filling Lines & Analytical Labs",
    title: "Lines & In-House Analytical Testing",
    tag: "Roll-On & BOV Capability",
    description: "Adds filling lines, a dedicated roll-on line, BOV capability and in-house analytical testing.",
    icon: ShieldCheck,
    highlights: ["Dedicated roll-on filling line", "Bag-on-Valve (BOV) systems", "In-house analytical testing"]
  },
  {
    period: "2020s",
    yearNumber: "05",
    phase: "Global Credentials",
    title: "ISO, WHO-GMP & US FDA",
    tag: "Export Footprint Expansion",
    description: "Earns ISO, WHO-GMP and US FDA credentials and expands exports across the Middle East, Africa and Asia.",
    icon: Award,
    highlights: ["WHO-GMP certified facility", "US FDA registered", "Exports across Middle East, Africa & Asia"]
  },
  {
    period: "Today",
    yearNumber: "06",
    phase: "Global Manufacturing Partner",
    title: "End-to-End Manufacturing",
    tag: "Concept to Global Export",
    description: "Supports brands from first formulation to global export.",
    icon: Sparkles,
    highlights: ["Concept to commercial success", "120M+ units capacity", "11 aerosol & liquid filling lines"]
  }
];

export default function HistoryTimeline({ theme = "light" }: { theme?: "light" | "dark" }) {
  const [activeStep, setActiveStep] = useState(0);
  const isDark = theme === "dark";

  return (
    <div className="space-y-12">
      {/* 1. DESKTOP / TABLET ROADMAP WITH DIRECTIONAL ARROWS */}
      <div className="hidden lg:block relative">
        {/* Step Progression Bar with Connecting Directional Arrows */}
        <div className="grid grid-cols-6 gap-3 relative pb-4">
          {EXTENDED_MILESTONES.map((item, idx) => {
            const isActive = activeStep === idx;
            const Icon = item.icon;
            const isLast = idx === EXTENDED_MILESTONES.length - 1;

            return (
              <div key={item.period} className="relative flex flex-col items-center">
                {/* Connecting Arrow Line to Next Milestone */}
                {!isLast && (
                  <div className="absolute top-6 left-1/2 w-full flex items-center z-0 pointer-events-none">
                    <div className={`h-0.5 w-full ${
                      isDark 
                        ? "bg-gradient-to-r from-teal-500 via-teal-400 to-slate-700" 
                        : "bg-gradient-to-r from-teal-500 via-teal-400 to-slate-300"
                    }`}></div>
                    <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-teal-500 -ml-1"></div>
                  </div>
                )}

                {/* Milestone Node Button */}
                <button
                  onClick={() => setActiveStep(idx)}
                  className={`relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md ${
                    isActive
                      ? "bg-gradient-to-br from-teal-400 to-cyan-500 text-slate-950 scale-110 shadow-teal-500/30 ring-4 ring-teal-400/20 font-extrabold"
                      : isDark
                        ? "bg-slate-800 text-teal-300 hover:bg-slate-700 hover:scale-105 border border-slate-700"
                        : "bg-white text-teal-700 hover:bg-teal-50 hover:scale-105 border-2 border-slate-200"
                  }`}
                  title={`View ${item.period}: ${item.title}`}
                >
                  <Icon className="w-5 h-5" />
                </button>

                {/* Year Pill & Arrow Label */}
                <div className="mt-3 text-center space-y-0.5">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-extrabold tracking-wide transition-colors ${
                    isActive 
                      ? "bg-teal-500 text-slate-950 shadow font-black" 
                      : isDark
                        ? "bg-slate-800 text-slate-300 border border-slate-700"
                        : "bg-slate-100 text-slate-700 border border-slate-200"
                  }`}>
                    {item.period}
                  </span>
                  <div className={`text-[11px] font-semibold truncate max-w-[140px] block ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}>
                    {item.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlighted Active Milestone Card with Rich Details */}
        <div className={`mt-6 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden transition-colors ${
          isDark
            ? "bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 text-white"
            : "bg-white border-2 border-teal-200/80 text-slate-900 shadow-teal-900/5"
        }`}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className={`px-3.5 py-1 rounded-full text-xs font-bold border ${
                  isDark
                    ? "bg-teal-500/20 text-teal-300 border-teal-500/40"
                    : "bg-teal-50 text-teal-800 border-teal-200"
                }`}>
                  Phase {EXTENDED_MILESTONES[activeStep].yearNumber} &bull; {EXTENDED_MILESTONES[activeStep].phase}
                </span>
                <span className={`text-xs font-semibold flex items-center gap-1 ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}>
                  <Calendar className="w-3.5 h-3.5 text-teal-600" />
                  {EXTENDED_MILESTONES[activeStep].period}
                </span>
              </div>

              <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}>
                {EXTENDED_MILESTONES[activeStep].title}
              </h3>

              <div className={`inline-block px-3 py-1 rounded-lg text-xs font-bold border ${
                isDark
                  ? "bg-slate-800/80 text-teal-300 border-slate-700"
                  : "bg-teal-50/80 text-teal-900 border-teal-200"
              }`}>
                {EXTENDED_MILESTONES[activeStep].tag}
              </div>

              <p className={`text-sm sm:text-base leading-relaxed font-normal ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}>
                {EXTENDED_MILESTONES[activeStep].description}
              </p>

              {/* Key Technical Highlights */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {EXTENDED_MILESTONES[activeStep].highlights.map((h, i) => (
                  <div 
                    key={i} 
                    className={`flex items-center gap-2 text-xs p-2.5 rounded-xl border ${
                      isDark
                        ? "text-slate-300 bg-slate-950/60 border-slate-800"
                        : "text-slate-700 bg-slate-50 border-slate-200"
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span className="font-semibold">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Interactive Arrow Controls & Next Preview */}
            <div className={`p-6 rounded-2xl border space-y-4 ${
              isDark
                ? "bg-slate-950/70 border-slate-800"
                : "bg-slate-50 border-slate-200"
            }`}>
              <div className={`text-xs font-bold uppercase tracking-wider ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}>
                Timeline Navigation
              </div>

              <div className="flex items-center justify-between gap-3">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    activeStep === 0
                      ? isDark ? "bg-slate-900 text-slate-600 border border-slate-800 cursor-not-allowed" : "bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed"
                      : isDark ? "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700" : "bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-sm"
                  }`}
                >
                  <span>&larr; Previous</span>
                </button>

                <button
                  disabled={activeStep === EXTENDED_MILESTONES.length - 1}
                  onClick={() => setActiveStep(prev => Math.min(EXTENDED_MILESTONES.length - 1, prev + 1))}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    activeStep === EXTENDED_MILESTONES.length - 1
                      ? isDark ? "bg-slate-900 text-slate-600 border border-slate-800 cursor-not-allowed" : "bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed"
                      : "bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-extrabold shadow"
                  }`}
                >
                  <span>Next Era</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {activeStep < EXTENDED_MILESTONES.length - 1 && (
                <div className={`pt-2 border-t text-[11px] flex items-center justify-between ${
                  isDark ? "border-slate-800/80 text-slate-400" : "border-slate-200 text-slate-500"
                }`}>
                  <span>Up Next:</span>
                  <span className="font-semibold text-teal-600">
                    {EXTENDED_MILESTONES[activeStep + 1].period} ({EXTENDED_MILESTONES[activeStep + 1].title.split(" ")[0]}...)
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. COMPLETE CHRONOLOGICAL CARDS WITH DIRECTIONAL ARROWS */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h4 className={`text-xs font-bold uppercase tracking-wider ${
            isDark ? "text-teal-400" : "text-teal-700"
          }`}>
            Chronological Evolution (1979 &rarr; Present)
          </h4>
          <span className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
            6 Key Evolutionary Milestones
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXTENDED_MILESTONES.map((item, idx) => {
            const isLast = idx === EXTENDED_MILESTONES.length - 1;

            return (
              <div
                key={item.period}
                className={`group relative rounded-2xl border p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                  isDark
                    ? "bg-slate-900 border-slate-800 hover:border-teal-400"
                    : "bg-white border-slate-200/90 hover:border-teal-500 hover:bg-white"
                }`}
              >
                {/* Connecting Directional Arrow Watermark */}
                {!isLast && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <div className="w-7 h-7 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center shadow-lg text-xs font-bold group-hover:scale-110 transition-transform">
                      &rarr;
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-2xl font-black tracking-tight ${
                      isDark ? "text-teal-400" : "text-teal-600"
                    }`}>
                      {item.period}
                    </span>
                    <span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${
                      isDark 
                        ? "bg-slate-800 text-slate-300 border-slate-700"
                        : "bg-slate-100 text-slate-700 border-slate-200"
                    }`}>
                      Phase 0{idx + 1}
                    </span>
                  </div>

                  <h4 className={`text-base font-bold leading-snug transition-colors ${
                    isDark 
                      ? "text-white group-hover:text-teal-400" 
                      : "text-slate-900 group-hover:text-teal-700"
                  }`}>
                    {item.title}
                  </h4>

                  <div className={`text-[11px] font-bold px-2.5 py-1 rounded-md inline-block ${
                    isDark 
                      ? "text-teal-300 bg-teal-950/60" 
                      : "text-teal-900 bg-teal-50 border border-teal-100"
                  }`}>
                    {item.tag}
                  </div>

                  <p className={`text-xs leading-relaxed ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}>
                    {item.description}
                  </p>
                </div>

                <div className={`mt-4 pt-3 border-t flex items-center justify-between text-[11px] ${
                  isDark ? "border-slate-800/80 text-slate-400" : "border-slate-100 text-slate-500"
                }`}>
                  <span className="font-medium">{item.phase}</span>
                  {!isLast ? (
                    <span className={`font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform ${
                      isDark ? "text-teal-400" : "text-teal-700"
                    }`}>
                      <span>Next Era</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  ) : (
                    <span className="font-semibold text-emerald-600 flex items-center gap-1">
                      <span>Current Plant Operations</span>
                      <Sparkles className="w-3 h-3" />
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
