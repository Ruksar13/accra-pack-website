"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Package, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Palette, 
  FlaskConical, 
  Truck,
  Factory
} from "lucide-react";
import QuoteModal from "@/components/QuoteModal";

export default function OEMPrivateLabellingPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-950 border border-teal-500/30 px-3.5 py-1.5 rounded-full inline-block">
              Solutions &bull; Model 02
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              OEM &amp; Private Labelling
            </h1>
            <p className="text-xl sm:text-2xl text-teal-400 font-bold">
              Your Brand. Our Manufacturing.
            </p>
            {/* Exact text from client doc */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              This is where most of our long-term customer relationships begin. Whether you have a finished formulation or only an idea, we manage everything in between, so you can focus on building your brand instead of running a manufacturing project.
            </p>
          </div>
        </div>
      </section>

      {/* 2. What We Offer */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200 inline-block">
              Turnkey Brand Solutions
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              What We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Private Label Solutions",
                desc: "Complete manufacturing under your brand, from an existing Accra Pac formulation or a new one developed for you."
              },
              {
                title: "Product Development",
                desc: "Support from a rough idea or detailed brief to a market-ready product."
              },
              {
                title: "Formulation Support",
                desc: "Choose from our ready formulations, adapt one, or develop a custom formulation with our R&D team."
              },
              {
                title: "Sampling",
                desc: "You approve every sample before it moves toward commercial volumes."
              },
              {
                title: "Packaging Development",
                desc: "Container, can and valve selection, compatibility testing and secondary packaging design."
              },
              {
                title: "Artwork Support",
                desc: "Labels, artwork, packaging layouts and product information."
              },
              {
                title: "Manufacturing & Export",
                desc: "Scheduled commercial production, with documentation, export-ready packaging and logistics support."
              }
            ].map((item, i) => (
              <div
                key={item.title}
                className="p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-400 hover:shadow-lg transition-all space-y-3 group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="text-teal-700 font-black text-xs uppercase tracking-wider">
                    <span>Capability 0{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
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

      {/* 3. OEM Workflow (9 Steps) */}
      <section className="py-20 sm:py-24 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950 border border-teal-500/30 px-3.5 py-1.5 rounded-full inline-block">
              9-Stage Workflow
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              OEM Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-3">
            {[
              "1. Requirement",
              "2. Product Development",
              "3. Formulation",
              "4. Sampling & Testing",
              "5. Customer Approval",
              "6. Packaging Development",
              "7. Commercial Manufacturing",
              "8. Quality Testing",
              "9. Dispatch / Export"
            ].map((step, idx) => (
              <div
                key={step}
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2 hover:border-teal-400 transition-all flex flex-col justify-between"
              >
                <div className="w-8 h-8 mx-auto rounded-full bg-teal-400 text-slate-950 text-xs font-black flex items-center justify-center">
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

      {/* 4. Why OEM With Accra Pac */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-extrabold uppercase tracking-widest text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200 inline-block">
            Your Brand Experience Partner
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why OEM With Accra Pac
          </h2>
          {/* Exact content from client doc */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            You&apos;re not just buying filling capacity. You&apos;re getting a partner with decades of experience building products for brands of every size. Every project is protected by strict confidentiality practices, and every formulation, yours or one you develop with us, stays yours.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm bg-teal-700 hover:bg-teal-800 text-white shadow-md transition-all"
            >
              Start Your Product Development
            </button>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
            >
              Talk to Our Manufacturing Team
            </Link>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}
