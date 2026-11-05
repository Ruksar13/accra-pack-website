"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Factory, 
  FlaskConical, 
  ShieldCheck, 
  Layers, 
  Gauge, 
  CheckCircle2, 
  ArrowRight, 
  Package, 
  Sliders, 
  Sparkles,
  HelpCircle,
  Flame,
  Scale
} from "lucide-react";
import QuoteModal from "@/components/QuoteModal";

export default function CapabilitiesPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* 1. Header Banner with Plant Image Overlay */}
      <section className="relative bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/manufacturing/plant-infrastructure.jpg"
            alt="Accra Pac Vapi Manufacturing Complex"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
              Integrated Plant Infrastructure
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Facility &amp; Infrastructure
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Dedicated aerosol and liquid filling lines, an in-house R&amp;D and QA laboratory and secure warehousing, strategically located in Vapi, Gujarat, with convenient access to Mumbai&apos;s international logistics infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Key Production Numbers */}
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 stagger-container">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-1 hover-lift">
              <div className="text-3xl sm:text-4xl font-extrabold text-teal-700">120M+</div>
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">Annual Units Capacity</div>
              <div className="text-[11px] text-slate-500">Scalable from pilot runs to multi-million commercial orders</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-1 hover-lift">
              <div className="text-3xl sm:text-4xl font-extrabold text-cyan-700">5 Lines</div>
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">Aerosol Filling</div>
              <div className="text-[11px] text-slate-500">Hydrocarbon, BOV &amp; Compressed Gas systems</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-1 hover-lift">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">6 Lines</div>
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">Liquid &amp; Roll-On Filling</div>
              <div className="text-[11px] text-slate-500">Precision dosing from 2 ml up to 5 Liters</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-1 hover-lift">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-700">6 Chambers</div>
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">Flame-Proof Stability</div>
              <div className="text-[11px] text-slate-500">Real-time &amp; accelerated shelf-life validation</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Deep Dive into Filling Technologies with Real Photography */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/60 px-3 py-1 rounded-full">
              Core Technologies
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Aerosol, Liquid &amp; Specialty Packaging Systems
            </h2>
            <p className="text-sm text-slate-600">
              Versatile engineering across container geometries, propellant types, and formulation viscosity profiles.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 stagger-container">
            {/* Tech 1: Aerosol Filling */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:border-teal-400 transition-all flex flex-col justify-between group hover-lift">
              <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                <Image
                  src="/images/manufacturing/aerosol-filling-line.jpg"
                  alt="Aerosol Filling Line"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-teal-300">
                  5 Automated Lines
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-4">
                <div>
                  <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider">Pressurized Gas Filling</span>
                  <h3 className="text-xl font-bold text-slate-900 mt-0.5">Aerosol Manufacturing</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Full automated sequence: bulk batch compounding, automated tare weighing, valve placement, precision crimping, propellant injection under pressure, and 100% hot-water bath leak testing.
                </p>
                <div className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span><strong>Can Sizes:</strong> 1.5 oz to 16 oz (Aluminium &amp; Tinplate)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span><strong>Propellants:</strong> LPG/Hydrocarbon, DME, CO2, Nitrogen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span><strong>Pharma Propellants:</strong> HFA-134a, HFA-152a</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span><strong>Safety:</strong> NFPA 30B compliant propellant handling</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-3 border-t border-slate-100 text-xs font-semibold text-teal-700">
                  Deodorants &bull; Hair Sprays &bull; Pain Relief &bull; Air Care
                </div>
              </div>
            </div>

            {/* Tech 2: BOV (Bag-on-Valve) */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:border-cyan-400 transition-all flex flex-col justify-between group hover-lift">
              <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                <Image
                  src="/images/manufacturing/liquid-filling-line.jpg"
                  alt="BOV & Advanced Filling"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-cyan-300">
                  Separation Technology
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-4">
                <div>
                  <span className="text-xs font-semibold text-cyan-700 uppercase tracking-wider">Eco-Friendly Barrier</span>
                  <h3 className="text-xl font-bold text-slate-900 mt-0.5">BOV (Bag-on-Valve)</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Product is hermetically sealed in a laminated multi-layer pouch inside the can, completely isolated from eco-friendly propellant gas (Nitrogen/Compressed Air).
                </p>
                <div className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span><strong>Evacuation Rate:</strong> Up to 99.5% product dispensing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span><strong>360-Degree Spray:</strong> Discharges at any angle or upside-down</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span><strong>No Preservatives:</strong> Zero contact with air or propellant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span><strong>Ideal For:</strong> Creams, gels, saline sprays, burn relief</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-3 border-t border-slate-100 text-xs font-semibold text-cyan-700">
                  Nasal Saline &bull; Burn Gels &bull; Sun Care &bull; Wound Wash
                </div>
              </div>
            </div>

            {/* Tech 3: Liquid & Roll-On Filling */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:border-emerald-400 transition-all flex flex-col justify-between group hover-lift">
              <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                <Image
                  src="/images/manufacturing/qc-lab-testing.jpg"
                  alt="Liquid & Quality Laboratory"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-emerald-300">
                  6 Liquid Lines
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-4">
                <div>
                  <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Precision Multi-Format</span>
                  <h3 className="text-xl font-bold text-slate-900 mt-0.5">Liquid &amp; Roll-On Filling</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Precision batch compounding, homogenization, and multi-nozzle automated filling for liquids, lotions, creams, and semi-solids from 2 ml vials to 5 Liter containers.
                </p>
                <div className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Dedicated Line:</strong> Automated roll-on ball insertion &amp; capping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Dispenser Assembly:</strong> Trigger sprays, fine mists &amp; foaming pumps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Packaging Range:</strong> Glass, HDPE, PET, and flexible sachets</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Formulation Bases:</strong> Alcohol-based, aqueous, and emulsions</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-3 border-t border-slate-100 text-xs font-semibold text-emerald-700">
                  Roll-On Deos &bull; Hand Sanitizers &bull; Surface Cleaners
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. In-Process Quality Control (IPQC) & Stability Chambers with Real Photos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
                Quality Assurance Built In
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Zero Compromise In-Process Testing
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rather than testing quality only at the end, every single commercial run is monitored by rigorous in-line quality controls to ensure consumer safety and container integrity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700 stagger-container">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 hover-lift">
                  <div className="font-bold text-slate-900">1. Raw Material Assay</div>
                  <p className="text-slate-500">Every active, solvent, and fragrance oil inspected against internal monograph specs before dispensing.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 hover-lift">
                  <div className="font-bold text-slate-900">2. Crimp Dimensions</div>
                  <p className="text-slate-500">Micro-gauge verification of crimp height and crimp diameter every 30 minutes to guarantee leak prevention.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 hover-lift">
                  <div className="font-bold text-slate-900">3. 100% Water Bath Testing</div>
                  <p className="text-slate-500">Every single aerosol can passes through an illuminated 55&deg;C hot water testing bath to detect micro-leaks.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 hover-lift">
                  <div className="font-bold text-slate-900">4. Spray Pattern &amp; Discharge</div>
                  <p className="text-slate-500">Validation of spray cone angle, droplet size distribution, and discharge delivery rate per second.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 space-y-5 overflow-hidden relative hover-lift">
              <div className="relative h-44 w-full rounded-xl overflow-hidden mb-2">
                <Image
                  src="/images/manufacturing/stability-chamber.jpg"
                  alt="Flame Proof Stability Testing"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-4">
                  <span className="text-xs font-bold text-amber-400">
                    6 Flame-Proof Stability Testing Chambers
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Aerosol manufacturing involves pressurized hydrocarbon propellants. Our Vapi facility was engineered to international industrial fire safety codes:
              </p>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">NFPA 30B Compliance:</strong> Certified storage systems for Level 1, 2, and 3 aerosol products, including explosion-proof gas houses and automatic gas detection sensors.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Stability Validation:</strong> Six specialized chambers for accelerated testing (40&deg;C/75% RH) and real-time shelf life monitoring without explosion risk.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Logistics Proximity:</strong> Located in G.I.D.C. Vapi, just 2.5 hours driving distance from Mumbai, enabling client audit visits and rapid container routing to JNPT sea port.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="w-full py-2.5 rounded-lg bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs transition-colors shadow"
                >
                  Request Technical Plant Tour / Dossier
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Warehouse & Logistics Imagery Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover-lift">
              <Image
                src="/images/manufacturing/warehouse-logistics.jpg"
                alt="Dangerous Goods Warehouse & Logistics"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/60 px-3 py-1 rounded-full">
                Secure Warehousing &amp; Hazmat Staging
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Spacious, NFPA-Compliant Warehousing &amp; Container Loading
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Raw materials, active pharmaceutical ingredients, empty aerosol cans, valves, and finished goods are stored in segregated, climate-monitored zones with automated fire suppression. Finished products are palletized on heat-treated export wooden pallets and shrink-wrapped for international maritime container loading.
              </p>
              <div className="pt-2 flex flex-wrap gap-3 text-xs font-semibold text-slate-700">
                <span className="px-3 py-1 rounded-lg bg-white border border-slate-200">Dangerous Goods UN 1950 Certified</span>
                <span className="px-3 py-1 rounded-lg bg-white border border-slate-200">Full Batch Traceability</span>
                <span className="px-3 py-1 rounded-lg bg-white border border-slate-200">Direct Road Transit to JNPT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Frequently Asked Questions */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 reveal">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
              Production FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Frequently Asked Questions About Manufacturing
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is the Minimum Order Quantity (MOQ) for aerosol or liquid filling?",
                a: "We offer flexible production tiers. For pilot batch validation and new product launches, trial runs start from smaller scale quantities. For standard commercial production, MOQs depend on can size, lithographed printing minimums, and active raw material procurement. Contact our sales team for an exact volume assessment."
              },
              {
                q: "What is the typical production lead time from approved sample to commercial delivery?",
                a: "For established formulations with approved packaging components on site, commercial production typically completes within 3 to 4 weeks. For new formulation development requiring accelerated 3-month stability validation, we provide a structured step-by-step development timeline."
              },
              {
                q: "Can Accra Pac manufacture with our own formulation, or do we use your 500+ ready formulations?",
                a: "Both pathways are fully supported. If you have an established formulation, our technical team executes seamless Technology Transfer and pilot verification on our lines. Alternatively, choose from our 500+ pre-validated R&D formulation library for rapid commercialization."
              },
              {
                q: "Can you manufacture both an aerosol and a liquid or roll-on version of the same product line?",
                a: "Yes. Many of our enterprise partners manufacture a coordinated personal care line (e.g. an aerosol body spray, a roll-on antiperspirant, and a liquid shave balm) simultaneously at Accra Pac under one single audit, contract, and quality control team."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm space-y-2 hover-lift">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-teal-600 shrink-0" />
                  {item.q}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5 reveal">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Let Us Engineer Your Next Formulation at Scale
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Contact our engineering and technical team in Vapi for line allocations, packaging compatibility reviews, and pilot batch scheduling.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="px-6 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs transition-colors shadow"
            >
              Discuss Your Manufacturing Specs
            </button>
            <Link
              href="/products"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors"
            >
              Explore Products Catalog
            </Link>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}
