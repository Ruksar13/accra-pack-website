"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Factory, 
  FlaskConical, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  PackageCheck, 
  SlidersHorizontal,
  ChevronRight,
  Boxes,
  Microscope,
  FileSpreadsheet
} from "lucide-react";
import QuoteModal from "@/components/QuoteModal";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<"contract-mfg" | "oem-private-label" | "cdmo">("oem-private-label");
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteModel, setQuoteModel] = useState("OEM & Private Label");

  const handleOpenQuote = (modelName: string) => {
    setQuoteModel(modelName);
    setIsQuoteOpen(true);
  };

  return (
    <div className="flex flex-col">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
              Turnkey Engagement Models
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Manufacturing Tailored to Your Brand&apos;s Stage
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Whether you arrive with a finished formulation ready for high-speed filling, need turnkey private label products from our 500+ ready library, or require end-to-end CDMO development from concept to commercialization.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Model Selector Navigation Tabs */}
      <section className="bg-white py-6 border-b border-slate-200 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => setActiveTab("contract-mfg")}
              className={`p-4 rounded-xl text-left border transition-all ${
                activeTab === "contract-mfg"
                  ? "border-teal-600 bg-teal-50/80 ring-1 ring-teal-600 text-teal-950"
                  : "border-slate-200 hover:border-slate-300 bg-slate-50 text-slate-700"
              }`}
            >
              <div className="text-xs font-bold uppercase tracking-wider text-teal-700">Model 01</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">Contract Manufacturing</div>
              <div className="text-xs text-slate-500 mt-1">Your formulation, our high-speed lines</div>
            </button>

            <button
              onClick={() => setActiveTab("oem-private-label")}
              className={`p-4 rounded-xl text-left border transition-all ${
                activeTab === "oem-private-label"
                  ? "border-teal-600 bg-teal-50/80 ring-1 ring-teal-600 text-teal-950"
                  : "border-slate-200 hover:border-slate-300 bg-slate-50 text-slate-700"
              }`}
            >
              <div className="text-xs font-bold uppercase tracking-wider text-teal-700">Model 02</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">OEM &amp; Private Label</div>
              <div className="text-xs text-slate-500 mt-1">500+ ready formulations &amp; turnkey launch</div>
            </button>

            <button
              onClick={() => setActiveTab("cdmo")}
              className={`p-4 rounded-xl text-left border transition-all ${
                activeTab === "cdmo"
                  ? "border-teal-600 bg-teal-50/80 ring-1 ring-teal-600 text-teal-950"
                  : "border-slate-200 hover:border-slate-300 bg-slate-50 text-slate-700"
              }`}
            >
              <div className="text-xs font-bold uppercase tracking-wider text-teal-700">Model 03</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">CDMO &amp; Custom R&amp;D</div>
              <div className="text-xs text-slate-500 mt-1">End-to-end development &amp; stability</div>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Detailed Model Presentations */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
          {/* MODEL 1: CONTRACT MANUFACTURING */}
          {activeTab === "contract-mfg" && (
            <div id="contract-mfg" className="space-y-12 animate-in fade-in duration-200">
              <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm space-y-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
                      Contract Manufacturing
                    </span>
                    <h2 className="text-3xl font-extrabold text-slate-900">
                      Your Formulation. Our Production.
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
                      Already have an established, validated formulation and need a reliable partner to manufacture it at commercial scale? We execute seamless Technology Transfer onto our automated lines with strict batch reproducibility and complete confidentiality.
                    </p>
                  </div>
                  <button
                    onClick={() => handleOpenQuote("Contract Manufacturing")}
                    className="shrink-0 px-6 py-3 rounded-xl bg-slate-900 hover:bg-teal-700 text-white font-semibold text-xs transition-all shadow hover-lift"
                  >
                    Initiate Tech Transfer
                  </button>
                </div>

                {/* Scope of Services */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700 stagger-container">
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 space-y-2 hover-lift">
                    <div className="font-bold text-slate-900 text-sm">Technology Transfer &amp; Validation</div>
                    <p className="text-slate-600 leading-relaxed">
                      Our formulation engineers review your batch manufacturing records (BMR) and execute pilot scale-up batches to confirm physical and chemical performance on our automated lines.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 space-y-2 hover-lift">
                    <div className="font-bold text-slate-900 text-sm">Automated Aerosol &amp; Liquid Lines</div>
                    <p className="text-slate-600 leading-relaxed">
                      5 Aerosol lines (1.5 oz - 16 oz, hydrocarbon/compressed gas/BOV) and 6 Liquid lines (2 ml - 5L, roll-ons, pump sprays) with inline tare checking and 100% leak detection.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 space-y-2 hover-lift">
                    <div className="font-bold text-slate-900 text-sm">Analytical QA &amp; Batch Traceability</div>
                    <p className="text-slate-600 leading-relaxed">
                      In-house GC, HPLC, and microbiology testing. Comprehensive Certificate of Analysis (COA), Safety Data Sheets (SDS), and traceable batch records provided for every commercial shipment.
                    </p>
                  </div>
                </div>

                {/* Workflow */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                    Contract Manufacturing Workflow (8 Steps)
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center">
                    {[
                      "1. Spec Review",
                      "2. Tech Transfer",
                      "3. Pilot Batch",
                      "4. Client Sign-Off",
                      "5. Procurement",
                      "6. Commercial Run",
                      "7. QC & COA",
                      "8. Global Dispatch"
                    ].map((step, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-800">
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MODEL 2: OEM & PRIVATE LABEL */}
          {activeTab === "oem-private-label" && (
            <div id="oem-private-label" className="space-y-12 animate-in fade-in duration-200">
              <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm space-y-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
                      Turnkey OEM &amp; Private Label
                    </span>
                    <h2 className="text-3xl font-extrabold text-slate-900">
                      Your Brand. Our Manufacturing.
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
                      Launch your brand fast without reinventing the wheel. Choose from our proprietary library of 500+ market-proven formulations, select premium packaging and custom fragrance profiles, and let us handle manufacturing, quality testing, and export readiness.
                    </p>
                  </div>
                  <button
                    onClick={() => handleOpenQuote("OEM & Private Label")}
                    className="shrink-0 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs transition-all shadow"
                  >
                    Explore Ready Formulations
                  </button>
                </div>

                {/* Scope of Services */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                    <div className="font-bold text-slate-900 text-sm">500+ Ready Formulations Library</div>
                    <p className="text-slate-600 leading-relaxed">
                      Pre-validated formulas across OTC healthcare, deodorants, shaving foams, hair care, and insect defense with established stability data to cut 6+ months off your launch timeline.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                    <div className="font-bold text-slate-900 text-sm">Packaging Curation &amp; Artwork</div>
                    <p className="text-slate-600 leading-relaxed">
                      Guidance on aluminium vs tinplate cans, valve selection, actuator spray patterns, cap designs, and compliance review of label artwork against FDA and regional regulations.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                    <div className="font-bold text-slate-900 text-sm">Turnkey Export Packaging</div>
                    <p className="text-slate-600 leading-relaxed">
                      UN-approved hazmat export master cartons, palletization, shrink-wrapping, Dangerous Goods (DG) declarations, and shipping coordination for international distribution.
                    </p>
                  </div>
                </div>

                {/* Workflow */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                    Turnkey Private Label Workflow (10 Steps)
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2 text-center">
                    {[
                      "1. Brand Brief",
                      "2. Formula Select",
                      "3. Bench Sample",
                      "4. Fragrance Fit",
                      "5. Packaging Select",
                      "6. Sample Approval",
                      "7. Artwork Review",
                      "8. Production",
                      "9. QA Testing",
                      "10. Export Dispatch"
                    ].map((step, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-teal-50 border border-teal-100 text-[11px] font-semibold text-teal-900">
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MODEL 3: CDMO */}
          {activeTab === "cdmo" && (
            <div id="cdmo" className="space-y-12 animate-in fade-in duration-200">
              <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm space-y-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
                      CDMO &amp; Custom R&amp;D
                    </span>
                    <h2 className="text-3xl font-extrabold text-slate-900">
                      Contract Development &amp; Manufacturing, Under One Roof.
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
                      Arrive with an idea or therapeutic concept. Our formulation chemists, analytical scientists, and packaging engineers will develop a bespoke formula from scratch, validate stability across 6 flame-proof chambers, and scale it into commercial production.
                    </p>
                  </div>
                  <button
                    onClick={() => handleOpenQuote("CDMO Custom R&D")}
                    className="shrink-0 px-6 py-3 rounded-xl bg-slate-900 hover:bg-teal-700 text-white font-semibold text-xs transition-all shadow"
                  >
                    Schedule R&amp;D Consultation
                  </button>
                </div>

                {/* Scope of Services */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                    <div className="font-bold text-slate-900 text-sm">Custom Formulation Engineering</div>
                    <p className="text-slate-600 leading-relaxed">
                      Targeted formulation of novel actives (e.g. minoxidil foam, lidocaine dry sprays, herbal pain oils) with custom viscosity, skin absorption kinetics, and fragrance masking.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                    <div className="font-bold text-slate-900 text-sm">Stability &amp; Compatibility Validation</div>
                    <p className="text-slate-600 leading-relaxed">
                      Accelerated stability testing in 6 flame-proof chambers (40&deg;C / 75% RH) to evaluate can lining integrity, internal corrosion risks, propellant degradation, and valve gasket swelling.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                    <div className="font-bold text-slate-900 text-sm">Regulatory Dossier &amp; Scale-Up</div>
                    <p className="text-slate-600 leading-relaxed">
                      Generation of complete technical documentation, analytical HPLC method validation, challenge testing, and pilot batch scale-up to ensure seamless commercial batch runs.
                    </p>
                  </div>
                </div>

                {/* Workflow */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                    CDMO Co-Development Journey (10 Steps)
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2 text-center">
                    {[
                      "1. Idea & Brief",
                      "2. Feasibility",
                      "3. Custom R&D",
                      "4. Prototype Sample",
                      "5. Stability Testing",
                      "6. Packaging Comp.",
                      "7. Client Approval",
                      "8. Pilot Batch",
                      "9. Scale Production",
                      "10. QA & Dispatch"
                    ].map((step, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-[11px] font-semibold text-slate-800">
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. Side-by-Side Model Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
              Side-By-Side Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Choosing the Right Partnership Model
            </h2>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-bold border-b border-slate-800">Dimension</th>
                  <th className="p-4 font-bold border-b border-slate-800">Contract Manufacturing</th>
                  <th className="p-4 font-bold border-b border-slate-800 text-teal-300">OEM &amp; Private Label</th>
                  <th className="p-4 font-bold border-b border-slate-800">CDMO &amp; Custom R&amp;D</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/50">Formulation Ownership</td>
                  <td className="p-4">Client owns 100% of formula</td>
                  <td className="p-4 text-teal-800 font-medium">Licensed from Accra Pac library</td>
                  <td className="p-4">Custom developed for client</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/50">Speed to Market</td>
                  <td className="p-4">4 – 6 Weeks (after tech transfer)</td>
                  <td className="p-4 text-teal-800 font-bold">Fastest (pre-tested formulas)</td>
                  <td className="p-4">3 – 6 Months (includes stability)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/50">R&amp;D Testing Scope</td>
                  <td className="p-4">Process verification &amp; inline QC</td>
                  <td className="p-4 text-teal-800 font-medium">Pre-validated stability data</td>
                  <td className="p-4 font-medium">Full GC/HPLC &amp; 6-chamber stability</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/50">Packaging Support</td>
                  <td className="p-4">Client specs or sourced by us</td>
                  <td className="p-4 text-teal-800 font-medium">Turnkey curation &amp; artwork support</td>
                  <td className="p-4">Custom valve &amp; pouch engineering</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/50">Best Suited For</td>
                  <td className="p-4">Established FMCG &amp; Pharma brands</td>
                  <td className="p-4 text-teal-800 font-medium">Retailers, Private Labels &amp; Startups</td>
                  <td className="p-4">Novel therapeutics &amp; innovative concepts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Ready to Begin? Let&apos;s Evaluate Your Requirements
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Speak directly with our technical team to determine whether Contract Manufacturing, Turnkey OEM, or CDMO is the right fit for your commercial targets.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleOpenQuote("Engagement Model Review")}
              className="px-6 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs transition-colors shadow"
            >
              Request a Technical Feasibility Review
            </button>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>

      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={() => setIsQuoteOpen(false)} 
        preselectedCategory={quoteModel}
      />
    </div>
  );
}

