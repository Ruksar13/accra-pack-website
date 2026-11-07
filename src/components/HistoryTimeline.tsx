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
                        ? "bg-gradient-to-r from-[#1455A6] via-[#00B8C7] to-slate-700" 
                        : "bg-gradient-to-r from-[#1455A6] via-[#00B8C7] to-slate-300"
                    }`}></div>
                    <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-[#00B8C7] -ml-1"></div>
                  </div>
                )}

                {/* Milestone Node Button */}
                <button
                  onClick={() => setActiveStep(idx)}
                  className={`relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md ${
                    isActive
                      ? "bg-[#1455A6] text-white scale-110 shadow-lg shadow-blue-900/30 ring-4 ring-[#1455A6]/20 font-extrabold"
                      : isDark
                        ? "bg-slate-800 text-[#00B8C7] hover:bg-slate-700 hover:scale-105 border border-slate-700"
                        : "bg-white text-[#1455A6] hover:bg-[#f0f6fe] hover:scale-105 border-2 border-slate-200"
                  }`}
                  title={`View ${item.period}: ${item.title}`}
                >
                  <Icon className="w-5 h-5" />
                </button>

                {/* Year Pill & Arrow Label */}
                <div className="mt-3 text-center space-y-0.5">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-extrabold tracking-wide transition-colors ${
                    isActive 
                      ? "bg-[#1455A6] text-white shadow font-black" 
                      : isDark
                        ? "bg-slate-800 text-slate-300 border border-slate-700"
                        : "bg-slate-100 text-slate-700 border border-slate-200"
                  }`}>
                    {item.period}
                  </span>
                  <div className={`text-[11px] font-semibold truncate max-w-[140px] block ${
                    isDark ? "text-[#A6A9AD]" : "text-slate-600"
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
            ? "bg-gradient-to-br from-[#0b182f] via-[#0b182f] to-[#071324] border border-[#1455A6]/40 text-white"
            : "bg-white border-2 border-[#1455A6]/20 text-slate-900 shadow-blue-900/5"
        }`}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B8C7]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className={`px-3.5 py-1 rounded-full text-xs font-bold border ${
                  isDark
                    ? "bg-[#1455A6]/30 text-[#00B8C7] border-[#00B8C7]/40"
                    : "bg-[#f0f6fe] text-[#1455A6] border-blue-200"
                }`}>
                  Phase {EXTENDED_MILESTONES[activeStep].yearNumber} &bull; {EXTENDED_MILESTONES[activeStep].phase}
                </span>
                <span className={`text-xs font-semibold flex items-center gap-1 ${
                  isDark ? "text-[#A6A9AD]" : "text-slate-500"
                }`}>
                  <Calendar className="w-3.5 h-3.5 text-[#00B8C7]" />
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
                  ? "bg-slate-800/80 text-[#00B8C7] border-slate-700"
                  : "bg-blue-50/80 text-[#1455A6] border-blue-200"
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
                        ? "text-slate-300 bg-[#071324] border-slate-800"
                        : "text-slate-700 bg-slate-50 border-slate-200"
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00B8C7] shrink-0" />
                    <span className="font-semibold">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Status Badge */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-3 backdrop-blur-md">
              <div className="w-16 h-16 rounded-2xl bg-[#1455A6] text-white flex items-center justify-center shadow-lg shadow-blue-900/30">
                {React.createElement(EXTENDED_MILESTONES[activeStep].icon, { className: "w-8 h-8" })}
              </div>
              <div>
                <div className="text-3xl font-black text-white">
                  {EXTENDED_MILESTONES[activeStep].period}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#00B8C7]">
                  {EXTENDED_MILESTONES[activeStep].phase}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MOBILE TIMELINE ACCORDION */}
      <div className="lg:hidden space-y-4">
        {EXTENDED_MILESTONES.map((item, idx) => {
          const isActive = activeStep === idx;
          const Icon = item.icon;

          return (
            <div 
              key={item.period} 
              className={`rounded-2xl border transition-all p-5 ${
                isActive
                  ? isDark
                    ? "bg-[#0b182f] border-[#1455A6]"
                    : "bg-white border-[#1455A6] shadow-md"
                  : isDark
                    ? "bg-slate-900 border-slate-800"
                    : "bg-slate-50 border-slate-200"
              }`}
            >
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setActiveStep(idx)}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                    isActive ? "bg-[#1455A6] text-white" : "bg-slate-800 text-[#00B8C7]"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#00B8C7]">{item.period}</div>
                    <div className="text-sm font-bold text-slate-800 dark:text-white">{item.title}</div>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "rotate-90 text-[#1455A6]" : "text-slate-400"}`} />
              </div>

              {isActive && (
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="space-y-1.5">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00B8C7] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
