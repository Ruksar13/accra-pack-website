"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, 
  Award, 
  FlaskConical, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Microscope, 
  Flame, 
  Layers, 
  Sparkles,
  Scale
} from "lucide-react";
import { CERTIFICATIONS } from "@/data/websiteData";
import QuoteModal from "@/components/QuoteModal";

export default function QualityPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
              Analytical Rigor &amp; Global Standards
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Quality Built Into Every Batch We Fill
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              When supplying regulated markets across the US, Middle East, and Asia, quality compliance isn&apos;t an afterthought — it is the foundation. Accra Pac operates an audit-ready, WHO-GMP and US FDA registered manufacturing facility.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Certifications & Compliance Grid */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
              Credentials &amp; Standards
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              International Quality Accreditations
            </h2>
            <p className="text-sm text-slate-600">
              Verified certifications that ensure seamless customs clearance, retail audit acceptance, and brand safety globally.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.code}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-teal-400 hover:bg-teal-50/20 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-black text-slate-900 tracking-tight">
                    {cert.code}
                  </span>
                  <Award className="w-4 h-4 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">{cert.title}</h4>
                  <span className="text-[10px] uppercase font-semibold text-teal-700 tracking-wider">
                    {cert.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. In-House Analytical Testing & Labs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/60 px-3 py-1 rounded-full">
                Laboratory Infrastructure
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                GC, HPLC &amp; Microbiology Analytical Testing
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our in-house R&amp;D and Quality Control laboratories are equipped with analytical instrumentation to validate raw material purity, active pharmaceutical ingredient (API) assay, and aerosol stability before release.
              </p>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <FlaskConical className="w-4 h-4 text-teal-600" />
                    Gas Chromatography (GC)
                  </div>
                  <p className="text-slate-600">
                    High-precision analysis of propellant gas composition, volatile solvents, fragrance maceration profiles, and ethanol purities.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <Microscope className="w-4 h-4 text-cyan-600" />
                    High-Performance Liquid Chromatography (HPLC)
                  </div>
                  <p className="text-slate-600">
                    Quantitative active ingredient assay for OTC healthcare formulations (Minoxidil, Lidocaine, Menthol, Povidone-Iodine).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Microbiology Testing Suite
                  </div>
                  <p className="text-slate-600">
                    Total aerobic microbial count (TAMC), total combined yeast &amp; mold count (TYMC), pathogen screening, and preservative challenge testing.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl overflow-hidden border border-slate-800 space-y-6 shadow-2xl">
              <div className="relative h-48 w-full bg-slate-950">
                <Image
                  src="/images/manufacturing/stability-chamber.jpg"
                  alt="Six Flame-Proof Stability Testing Chambers"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-amber-300 border border-slate-700">
                  Explosion-Proof Aerosol Testing
                </div>
              </div>

              <div className="p-8 sm:p-10 pt-0 space-y-5">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                  <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-400">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">Six Flame-Proof Stability Chambers</h4>
                    <p className="text-xs text-slate-400">Aerosol Flammability &amp; Shelf-Life Evaluation</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Because aerosols hold pressurized flammable hydrocarbon propellants, standard stability ovens pose explosion hazards. Accra Pac engineered six dedicated, flame-proof stability chambers to evaluate:
                </p>

                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span><strong>Accelerated Aging:</strong> 40&deg;C &plusmn; 2&deg;C / 75% RH &plusmn; 5% RH for 3 &amp; 6 months</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span><strong>Real-Time Monitoring:</strong> 25&deg;C &plusmn; 2&deg;C / 60% RH &plusmn; 5% RH up to 36 months</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span><strong>Can &amp; Lining Compatibility:</strong> Internal epoxy-phenolic corrosion evaluation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span><strong>Valve Gasket Integrity:</strong> Zero swelling or propellant leakage under heat</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <button
                    onClick={() => setIsQuoteOpen(true)}
                    className="w-full py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs transition-colors"
                  >
                    Request a Quality &amp; Compliance Audit Dossier
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Complete Batch Traceability & Documentation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
              Traceability &amp; Records
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Complete Documentation for Domestic &amp; Export Release
            </h2>
            <p className="text-sm text-slate-600">
              Every shipment is backed by verifiable documentation meeting the stringent requirements of pharmaceutical and international retail audits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="font-bold text-slate-900 text-sm">Certificate of Analysis (COA)</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specific active assays, specific gravity, pH, pressure, spray pattern, and discharge rate validated and signed by QC head for every commercial batch.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="font-bold text-slate-900 text-sm">Safety Data Sheet (SDS)</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                GHS and OSHA compliant Safety Data Sheets detailing hazardous identification, proper handling, flammability classifications, and emergency measures.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="font-bold text-slate-900 text-sm">Batch Manufacturing Records</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Traceability from vendor raw material lots and packaging batches through compounding, filling, inline checks, and final release.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="font-bold text-slate-900 text-sm">Export Hazmat Dossiers</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                UN packaging certificates, maritime IMDG Dangerous Goods declarations, and packing checklists for smooth international customs clearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Ready to Audit Our Quality Systems?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            We welcome technical audits from prospective brand partners and QA teams at our Vapi manufacturing complex.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="px-6 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs transition-colors shadow"
            >
              Request Plant Audit Schedule
            </button>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors"
            >
              Contact Regulatory Affairs
            </Link>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}

