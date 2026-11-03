"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  FlaskConical, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Package,
  Award
} from "lucide-react";
import QuoteModal from "@/components/QuoteModal";

export default function OEMPrivateLabellingPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
              Solutions &bull; Model 02
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              OEM &amp; Private Labelling
            </h1>
            <p className="text-xl text-teal-300 font-semibold">
              Your Brand. Our Manufacturing.
            </p>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Fast-track your consumer brand launch without the risk of starting formulation from scratch. Access our library of 500+ market-proven formulations, curate custom fragrance signatures and packaging formats, and let us manage turnkey manufacturing and global export.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Key Advantages */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
                Speed to Market
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Launch with Pre-Validated Formulations in Record Time
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Developing a stable aerosol formulation from zero typically takes 6 to 12 months due to mandatory 3-month accelerated stability testing. With Accra Pac&apos;s OEM model, you select from over 500 established formulas that have already passed rigorous stability and can-lining compatibility checks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <FlaskConical className="w-4 h-4 text-teal-600" />
                    500+ Tested Recipes
                  </div>
                  <p className="text-slate-600">Across deodorants, shaving foams, hair sprays, OTC pain sprays, and room fresheners.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <Package className="w-4 h-4 text-cyan-600" />
                    Custom Packaging Curation
                  </div>
                  <p className="text-slate-600">Aluminium or tinplate cans, embossed caps, precision mist actuators, and roll-on bottles.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Label Compliance Review
                  </div>
                  <p className="text-slate-600">Regulatory guidance on ingredient declarations, warning statements, and export labels.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <Award className="w-4 h-4 text-indigo-600" />
                    Global Fragrance House Sourcing
                  </div>
                  <p className="text-slate-600">Partnerships with top IFRA-certified fragrance houses for proprietary scent profiles.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs shadow transition-all"
                >
                  Explore Formulation Library
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl overflow-hidden border border-slate-800 space-y-5 shadow-2xl">
              <div className="relative h-48 w-full bg-slate-950">
                <Image
                  src="/images/products/deodorant-spray.jpg"
                  alt="Private Label Aerosol Products"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-teal-300 border border-slate-700">
                  OEM Ready Formulations
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0 space-y-4">
                <h3 className="text-base font-bold text-white border-b border-slate-800 pb-3">
                  OEM Private Label Workflow (10 Steps)
                </h3>
                <div className="space-y-2 text-xs">
                  {[
                    "1. Brand Requirement & Category Selection",
                    "2. Formula Matching from 500+ Library",
                    "3. Bench Prototype Sample Formulation",
                    "4. Fragrance Customization & Client Testing",
                    "5. Container, Can & Valve Engineering",
                    "6. Final Benchmark Sample Approval",
                    "7. Artwork & Label Regulatory Check",
                    "8. Commercial Scheduled Production",
                    "9. Analytical QA & COA Batch Release",
                    "10. UN-Certified Export Dispatch"
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
            Ready to Launch Your Private Label Line?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Contact our private label specialists to request formulation samples and packaging catalogues.
          </p>
          <button
            onClick={() => setIsQuoteOpen(true)}
            className="px-6 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs transition-colors shadow"
          >
            Request Private Label Catalogue &amp; Samples
          </button>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} preselectedCategory="OEM & Private Label" />
    </div>
  );
}

