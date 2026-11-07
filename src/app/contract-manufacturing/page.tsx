"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Factory, 
  FlaskConical, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Package,
  FileText,
  Boxes,
  Truck,
  Layers,
  ChevronRight
} from "lucide-react";
import QuoteModal from "@/components/QuoteModal";

export default function ContractManufacturingPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#00B8C7] bg-[#071324] border border-[#1455A6]/30 px-3.5 py-1.5 rounded-full inline-block">
              Solutions &bull; Model 01
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Contract Manufacturing
            </h1>
            <p className="text-xl sm:text-2xl text-[#00B8C7] font-bold">
              Your Formulation. Our Production.
            </p>
            {/* Exact text from client doc */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Already have a formulation? We validate your specifications on our lines and deliver consistent, export-ready batches, so you don&apos;t need a plant, filling line or quality lab of your own.
            </p>
          </div>
        </div>
      </section>

      {/* 2. What We Offer */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 reveal">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1455A6] bg-[#f0f6fe] px-3.5 py-1.5 rounded-full border border-blue-200 inline-block">
              Full-Scope Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              What We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-container">
            {[
              {
                title: "Aerosol Manufacturing",
                desc: "Propellant and can filling, valve fitting, crimping and leak testing, with hydrocarbon, compressed gas and BOV technologies."
              },
              {
                title: "Liquid Manufacturing",
                desc: "Mixing, batch processing and precision filling from 2 ml to 5 L."
              },
              {
                title: "Roll-On, Pump & Trigger Spray Filling",
                desc: "Dedicated roll-on filling, plus pump and trigger spray formats."
              },
              {
                title: "Technology Transfer",
                desc: "We review your formulation, then transfer it to our lines with pilot batches to confirm it performs as expected."
              },
              {
                title: "Packaging Sourcing & Assembly",
                desc: "Cans, bottles, valves, actuators and closures sourced to your specification."
              },
              {
                title: "Quality Testing & Documentation",
                desc: "In-process and finished product testing on every batch, with COA, SDS and batch records."
              },
              {
                title: "Warehousing & Export Support",
                desc: "Secure storage, export-ready packaging and logistics coordination."
              }
            ].map((item, i) => (
              <div
                key={item.title}
                className="p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#00B8C7] hover:shadow-lg transition-all space-y-3 group flex flex-col justify-between hover-lift"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#1455A6] font-black text-xs uppercase tracking-wider">
                    <span>Feature 0{i + 1}</span>
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

      {/* 3. How It Works (7 Steps) */}
      <section className="py-20 sm:py-24 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 reveal">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00B8C7] bg-[#071324] border border-[#1455A6]/30 px-3.5 py-1.5 rounded-full inline-block">
              7-Step Process
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 stagger-container">
            {[
              "1. Requirement & Specification Review",
              "2. Technology Transfer",
              "3. Pilot Batch",
              "4. Testing & Approval",
              "5. Commercial Production",
              "6. Quality Release",
              "7. Dispatch / Export"
            ].map((step, idx) => (
              <div
                key={step}
                className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-3 hover:border-[#00B8C7] transition-all flex flex-col justify-between hover-lift"
              >
                <div className="w-9 h-9 mx-auto rounded-full bg-[#1455A6] text-slate-950 text-xs font-black flex items-center justify-center">
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

      {/* 4. Why Contract Manufacturing With Accra Pac */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 reveal">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#1455A6] bg-[#f0f6fe] px-3.5 py-1.5 rounded-full border border-blue-200 inline-block">
            Confidence &amp; Repeatability
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Contract Manufacturing With Accra Pac
          </h2>
          {/* Exact content from client doc */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Capacity matters, but so does confidence that every batch comes out the same. Production scales from pilot runs to full commercial volumes, with complete batch traceability and strict confidentiality throughout. Your product stays yours, and we take care of the manufacturing.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm bg-[#1455A6] hover:bg-[#0f4487] text-white shadow-md transition-all"
            >
              Start Your Contract Manufacturing Project
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

