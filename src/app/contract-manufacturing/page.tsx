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
  Layers,
  FileText,
  Boxes,
  Truck
} from "lucide-react";
import QuoteModal from "@/components/QuoteModal";

export default function ContractManufacturingPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
              Solutions &bull; Model 01
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Contract Manufacturing
            </h1>
            <p className="text-xl text-teal-300 font-semibold">
              Your Formulation. Our Production.
            </p>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Already have an established formulation and need a reliable, high-speed partner to make it at scale? Our contract manufacturing team takes your specifications, validates them on our lines, and delivers consistent, export-ready batches without compromising IP confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Overview & Value Props */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
                Turnkey Execution
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Scale Your Existing Products Without Capital Investment
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                You don&apos;t need to invest in land, automated filling lines, propellant storage houses, or analytical quality labs. Accra Pac acts as an extension of your own manufacturing footprint, operating under WHO-GMP, US FDA, and ISO certified standards.
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Seamless Technology Transfer:</strong> Our formulation and chemical engineers review your Batch Manufacturing Records (BMR) and replicate critical process parameters.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">11 Qualified Filling Lines:</strong> 5 Aerosol lines (1.5 oz - 16 oz, hydrocarbon/compressed gas/BOV) and 6 Liquid lines (2 ml to 5 L).
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Strict Confidentiality:</strong> Your formulation stays 100% yours. All projects are protected by bilateral non-disclosure agreements.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-teal-700 text-white font-semibold text-xs shadow transition-all"
                >
                  Initiate Tech Transfer Discussion
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
              <div className="relative h-48 w-full bg-slate-950">
                <Image
                  src="/images/manufacturing/aerosol-filling-line.jpg"
                  alt="Aerosol Contract Manufacturing Lines"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-teal-300 border border-slate-700">
                  5 High-Speed Aerosol Lines
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-4">
                <h3 className="text-base font-bold text-white border-b border-slate-800 pb-2">
                  Contract Capabilities Breakdown
                </h3>
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800">
                    <div className="text-teal-400 font-bold">Aerosol Manufacturing</div>
                    <div className="text-slate-400 mt-0.5">Propellant filling, can filling, valve fitting, crimping &amp; water bath leak testing.</div>
                  </div>
                  <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800">
                    <div className="text-cyan-400 font-bold">Liquid &amp; Roll-On Processing</div>
                    <div className="text-slate-400 mt-0.5">Bulk mixing, homogenization, and precision filling from 2 ml to 5 Liters.</div>
                  </div>
                  <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800">
                    <div className="text-emerald-400 font-bold">Analytical QC &amp; Release</div>
                    <div className="text-slate-400 mt-0.5">In-house GC, HPLC, microbiology, COA, and batch records for every run.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Workflow Steps */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/60 px-3 py-1 rounded-full">
              Structured Methodology
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Contract Manufacturing Workflow
            </h2>
            <p className="text-sm text-slate-600">
              An 8-stage quality-governed workflow from specification intake to international dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Requirement & Spec Review", desc: "Detailed review of active ingredients, target fill weights, propellant ratio, and can geometry." },
              { num: "02", title: "Technology Transfer", desc: "Analytical method transfer and adaptation to our high-speed aerosol and liquid lines." },
              { num: "03", title: "Pilot / Sample Batch", desc: "Small-scale trial run to verify crimp dimensions, discharge rates, and spray cone uniformity." },
              { num: "04", title: "Testing & Approval", desc: "In-house GC/HPLC testing and client sign-off on physical samples before commercial run." },
              { num: "05", title: "Procurement", desc: "Incoming quality control (IQC) on client-supplied or turnkey-sourced cans, valves, and raw materials." },
              { num: "06", title: "Commercial Production", desc: "High-speed scheduled filling with continuous in-line IPQC weight and crimp checks." },
              { num: "07", title: "Testing & Batch Release", desc: "Final finished product release and issuance of Certificate of Analysis (COA) and SDS." },
              { num: "08", title: "Warehousing & Export", desc: "Secure staging in NFPA 30B compliant warehouses and Dangerous Goods (DG) container loading." },
            ].map((st) => (
              <div key={st.num} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <div className="text-xs font-extrabold text-teal-700 bg-teal-50 w-7 h-7 rounded-full flex items-center justify-center">
                  {st.num}
                </div>
                <h4 className="text-sm font-bold text-slate-900">{st.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Ready to Transfer Your Formulation to Our Lines?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Contact our engineering team to review line capacities, can size ranges, and trial batch scheduling.
          </p>
          <button
            onClick={() => setIsQuoteOpen(true)}
            className="px-6 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs transition-colors shadow"
          >
            Request Contract Manufacturing Proposal
          </button>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} preselectedCategory="Contract Manufacturing" />
    </div>
  );
}

