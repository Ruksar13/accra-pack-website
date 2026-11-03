"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  FlaskConical, 
  Microscope, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Flame, 
  Layers, 
  Sparkles
} from "lucide-react";
import QuoteModal from "@/components/QuoteModal";

export default function CDMOPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
              Solutions &bull; Model 03
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              CDMO &amp; Custom R&amp;D
            </h1>
            <p className="text-xl text-teal-300 font-semibold">
              Contract Development &amp; Manufacturing, Under One Roof.
            </p>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Arrive with an idea, a therapeutic brief, or a target market opportunity. As an integrated CDMO, our formulation scientists, analytical chemists, and packaging engineers take your product from bench concept through stability validation, pilot scale-up, and commercial manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* 2. End-to-End CDMO Journey */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
                Concept to Commercialization
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Eliminate the Costly Hand-Off Between R&amp;D Lab &amp; Filling Plant
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Developing a formulation in a separate third-party laboratory and then handing it off to a commercial filler is where costly delays, foam instability, and can corrosion surprises typically happen. At Accra Pac, the team that develops your formula is the team that manufactures it on commercial lines.
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">In-House GC &amp; HPLC Instrumentation:</strong> Analytical validation of raw materials, active pharmaceutical ingredients (APIs), volatile organic compounds (VOC), and batch homogeneity.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Six Flame-Proof Stability Chambers:</strong> Accelerated real-time and elevated temperature stability testing (40&deg;C / 75% RH) to evaluate can lining integrity, valve swelling, and propellant pressure.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Regulatory Dossier Preparation:</strong> Support for US FDA 21 CFR filings, WHO-GMP audit records, Safety Data Sheets (SDS), and Certificate of Analysis (COA).
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-teal-700 text-white font-semibold text-xs shadow transition-all"
                >
                  Schedule an R&amp;D Technical Consultation
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl overflow-hidden border border-slate-800 space-y-4 shadow-2xl">
              <div className="relative h-48 w-full bg-slate-950">
                <Image
                  src="/images/manufacturing/qc-lab-testing.jpg"
                  alt="CDMO R&D and QC Testing Lab"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-teal-300 border border-slate-700">
                  R&amp;D Formulation &amp; Analytical Lab
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0 space-y-4">
                <h3 className="text-base font-bold text-white border-b border-slate-800 pb-3">
                  CDMO 10-Step Workflow
                </h3>
                <div className="space-y-2 text-xs">
                  {[
                    "1. Product Idea & Brief",
                    "2. Technical & Commercial Feasibility",
                    "3. Formulation Development from Scratch",
                    "4. Bench Prototype Sampling",
                    "5. Analytical GC/HPLC & Stability Testing",
                    "6. Can Lining & Valve Packaging Compatibility",
                    "7. Customer Sign-Off on Final Formulation",
                    "8. Scale-Up & Pilot Batch Validation",
                    "9. Commercial High-Speed Scheduled Filling",
                    "10. Quality Release & UN-Certified Export"
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0"></span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Have an Innovative Formulation Brief?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Speak directly with our formulation chemists and packaging engineers under a bilateral NDA.
          </p>
          <button
            onClick={() => setIsQuoteOpen(true)}
            className="px-6 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs transition-colors shadow"
          >
            Start Your CDMO Project
          </button>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} preselectedCategory="CDMO & Custom R&D" />
    </div>
  );
}

