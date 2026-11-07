"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  FlaskConical, 
  Gauge, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Factory, 
  FileText, 
  Scale, 
  Zap,
  Microscope
} from "lucide-react";
import QuoteModal from "@/components/QuoteModal";

export default function CDMOPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#00B8C7] bg-[#071324] border border-[#1455A6]/30 px-3.5 py-1.5 rounded-full inline-block">
              Solutions &bull; Model 03
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              CDMO
            </h1>
            <p className="text-xl sm:text-2xl text-[#00B8C7] font-bold">
              Contract Development and Manufacturing, Under One Roof
            </p>
            {/* Exact text from client doc */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Some brands arrive with a finished formulation, others with an idea. As a CDMO, we take your product from concept and formulation through testing, scale-up and commercial manufacturing, so you work with one partner from first brief to final shipment.
            </p>
          </div>
        </div>
      </section>

      {/* 2. What We Offer */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 reveal">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1455A6] bg-[#f0f6fe] px-3.5 py-1.5 rounded-full border border-blue-200 inline-block">
              End-to-End Science &amp; Scale
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              What We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-container">
            {[
              {
                title: "Concept & Feasibility",
                desc: "We turn your idea or brief into a clear development plan covering formulation approach, format, packaging and regulatory considerations."
              },
              {
                title: "Custom Formulation Development",
                desc: "New formulations from scratch, or an adaptation of one from our ready library."
              },
              {
                title: "Analytical Testing",
                desc: "In-house GC, HPLC and microbiology testing to validate every formulation."
              },
              {
                title: "Stability Testing",
                desc: "Stability and shelf-life evaluation, including six flame-proof chambers for aerosol products, plus packaging compatibility testing."
              },
              {
                title: "Regulatory & Documentation Support",
                desc: "COA, SDS and technical documentation for domestic sale and export."
              },
              {
                title: "Scale-Up & Commercial Manufacturing",
                desc: "Validated pilot batches, then scheduled production on our qualified aerosol and liquid lines."
              }
            ].map((item, i) => (
              <div
                key={item.title}
                className="p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#00B8C7] hover:shadow-lg transition-all space-y-3 group flex flex-col justify-between hover-lift"
              >
                <div className="space-y-2">
                  <div className="text-[#1455A6] font-black text-xs uppercase tracking-wider">
                    <span>CDMO Phase 0{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1455A6] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CDMO Workflow (9 Steps) */}
      <section className="py-20 sm:py-24 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 reveal">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00B8C7] bg-[#071324] border border-[#1455A6]/30 px-3.5 py-1.5 rounded-full inline-block">
              Integrated Roadmap
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              CDMO Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-3 stagger-container">
            {[
              "1. Idea & Brief",
              "2. Feasibility",
              "3. Formulation Development",
              "4. Prototype Sampling",
              "5. Analytical & Stability Testing",
              "6. Customer Approval",
              "7. Scale-Up & Pilot Batch",
              "8. Commercial Manufacturing",
              "9. Quality Release & Dispatch"
            ].map((step, idx) => (
              <div
                key={step}
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2 hover:border-[#00B8C7] transition-all flex flex-col justify-between hover-lift"
              >
                <div className="w-8 h-8 mx-auto rounded-full bg-[#1455A6] text-slate-950 text-xs font-black flex items-center justify-center">
                  0{idx + 1}
                </div>
                <div className="text-xs font-bold text-slate-200 leading-snug">
                  {step.split(". ")[1]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why CDMO With Accra Pac */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 reveal">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#1455A6] bg-[#f0f6fe] px-3.5 py-1.5 rounded-full border border-blue-200 inline-block">
            One Team, Zero Friction
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why CDMO With Accra Pac
          </h2>
          {/* Exact content from client doc */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Development and manufacturing are usually handled by different companies, and the handoff is where delays and surprises happen. Here, the team that develops your product is the team that manufactures it, with one quality system and one point of contact from first sample to commercial batch.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm bg-[#1455A6] hover:bg-[#0f4487] text-white shadow-md transition-all"
            >
              Discuss Your Product Idea
            </button>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
            >
              Talk to Our R&amp;D Team
            </Link>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}

