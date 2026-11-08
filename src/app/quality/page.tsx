"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, 
  Award, 
  FileCheck, 
  Flame, 
  Microscope, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Download,
  AlertTriangle
} from "lucide-react";
import QuoteModal from "@/components/QuoteModal";

export default function QualityCompliancePage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#00B8C7] bg-[#071324] border border-[#1455A6]/30 px-3.5 py-1.5 rounded-full inline-block">
              Audit-Ready Manufacturing
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Quality &amp; Compliance
            </h1>
            <p className="text-xl sm:text-2xl text-[#00B8C7] font-bold">
              Audit-Ready, Every Batch
            </p>
            {/* Exact text from client doc */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Quality at Accra Pac is a system, not a slogan. Every batch is produced under defined quality, safety and traceability controls, and documented so it stands up to customer and regulatory audits.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Certifications & Approvals (Grouped exactly as in doc) */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 reveal">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1455A6] bg-[#f0f6fe] px-3.5 py-1.5 rounded-full border border-blue-200 inline-block">
              International Accreditations
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Certifications &amp; Approvals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-container">
            {/* Group 1 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover-lift">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
                Quality, Environment &amp; Safety Systems
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1455A6] shrink-0 mt-0.5" />
                  <span>ISO 9001:2015, Quality Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1455A6] shrink-0 mt-0.5" />
                  <span>ISO 14001:2015, Environmental Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1455A6] shrink-0 mt-0.5" />
                  <span>ISO 45001:2018, Occupational Health &amp; Safety</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1455A6] shrink-0 mt-0.5" />
                  <span>ISO 22716:2007, Cosmetics GMP</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1455A6] shrink-0 mt-0.5" />
                  <span>WHO-GMP certified facility</span>
                </li>
              </ul>
            </div>

            {/* Group 2 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover-lift">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
                Regulatory &amp; Safety
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1455A6] shrink-0 mt-0.5" />
                  <span>US FDA registered</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1455A6] shrink-0 mt-0.5" />
                  <span>US EPA approved</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1455A6] shrink-0 mt-0.5" />
                  <span>21 CFR compliant</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1455A6] shrink-0 mt-0.5" />
                  <span>NFPA 30B compliant aerosol manufacturing and storage</span>
                </li>
              </ul>
            </div>

            {/* Group 3 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover-lift">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
                Responsible Business
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00B8C7] shrink-0 mt-0.5" />
                  <span>SEDEX approved</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00B8C7] shrink-0 mt-0.5" />
                  <span>EcoVadis registered</span>
                </li>
              </ul>
              <div className="pt-4 text-base text-slate-400 italic">
                [Certification logos and downloadable certificates, subject to client approval.]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Quality Process (5 Steps) */}
      <section className="py-20 sm:py-24 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 reveal">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00B8C7] bg-[#071324] border border-[#1455A6]/30 px-3.5 py-1.5 rounded-full inline-block">
              Systematic Gate Controls
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Our Quality Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 stagger-container">
            {[
              {
                step: "1. Raw Material Inspection",
                desc: "Every raw material and packaging component is checked before it enters production."
              },
              {
                step: "2. In-Process Control",
                desc: "Quality checks at every stage of filling and assembly."
              },
              {
                step: "3. Finished Product Testing",
                desc: "Each batch is tested before release."
              },
              {
                step: "4. Batch Release",
                desc: "Only approved batches move to dispatch."
              },
              {
                step: "5. Documentation",
                desc: "Records are completed and filed for every order."
              }
            ].map((p, idx) => (
              <div
                key={p.step}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 hover:border-[#00B8C7] transition-all flex flex-col justify-between hover-lift"
              >
                <div className="w-8 h-8 rounded-full bg-[#1455A6] text-slate-950 text-xs font-black flex items-center justify-center">
                  0{idx + 1}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-sm font-bold text-white">
                    {p.step.split(". ")[1]}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Testing, Traceability & Safety Details */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-container">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3 hover-lift">
              <h3 className="text-xl font-bold text-slate-900">
                Testing &amp; Validation
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Every formulation is validated before commercial production, using in-house GC and HPLC analysis, microbiology testing, stability and shelf-life evaluation in six flame-proof chambers, and packaging compatibility testing.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3 hover-lift">
              <h3 className="text-xl font-bold text-slate-900">
                Traceability &amp; Documentation
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Every batch can be traced from raw material to production, testing, finished product and dispatch. COA, SDS and batch records are maintained for each commercial order.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3 hover-lift">
              <h3 className="text-xl font-bold text-slate-900">
                Built for Audits and Export Markets
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Our documentation and quality systems are structured to support customer audits and regulated export markets, without last-minute preparation.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3 hover-lift">
              <h3 className="text-xl font-bold text-slate-900">
                Safety
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Aerosol manufacturing and storage follow NFPA 30B safety guidelines, with systems designed for flammable formulations.
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="px-8 py-4 rounded-xl font-bold text-sm bg-[#1455A6] hover:bg-[#0f4487] text-white shadow-md transition-all"
              >
                Discuss Your Compliance Requirement
              </button>
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="px-8 py-4 rounded-xl font-semibold text-sm bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
              >
                Download Certificates
              </button>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}

