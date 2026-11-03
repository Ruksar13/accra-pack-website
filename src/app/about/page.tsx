"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, 
  Award, 
  Factory, 
  Globe2, 
  CheckCircle2, 
  ArrowRight, 
  FlaskConical, 
  HeartHandshake, 
  Target, 
  Eye, 
  Users,
  Compass,
  Building2
} from "lucide-react";
import { 
  TIMELINE_MILESTONES, 
  SITE_STATS, 
  CERTIFICATIONS 
} from "@/data/websiteData";
import QuoteModal from "@/components/QuoteModal";
import HistoryTimeline from "@/components/HistoryTimeline";

export default function AboutPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
              Corporate Heritage & Capabilities
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Pioneering Aerosol & Liquid Contract Manufacturing
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              From introducing India&apos;s first automatic aerosol line in 1979 to operating a modern 120-million-unit facility today, Accra Pac partners with global brands to engineer, formulate, and manufacture world-class products.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Executive Story & Heritage */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
                Our Story
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Decades of Proven Manufacturing, Not Just Promises
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Accra Pac India was founded in 1979 in Vapi, Gujarat, commissioning one of the country&apos;s first state-of-the-art automatic aerosol filling facilities. Over four decades of dedicated specialization, we transformed from an aerosol pioneer into an integrated OEM and private label contract manufacturing partner.
                </p>
                <p>
                  Today, we support leading multinational FMCG corporations, pharmaceutical manufacturers, and ambitious private labels across personal care, healthcare, household hygiene, and industrial sectors. Our turnkey model unites formulation R&D, pilot stability testing, propellant filling, valve crimping, secondary packaging, and export logistics inside a single, tightly controlled facility.
                </p>
                <p>
                  With US FDA registration, WHO-GMP certification, and international compliance across North America, Europe, and Asia, our partners focus on brand building and retail distribution while we manage the exacting technical complexities of manufacturing.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>WHO-GMP & US FDA Registered</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                  <Factory className="w-4 h-4 text-cyan-600" />
                  <span>11 Specialized Filling Lines</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                  <Globe2 className="w-4 h-4 text-teal-600" />
                  <span>Exporting to 20+ Countries</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-3xl overflow-hidden text-white shadow-2xl border border-slate-800">
                {/* Plant Photo */}
                <div className="relative h-56 w-full bg-slate-950 overflow-hidden">
                  <Image
                    src="/images/manufacturing/plant-infrastructure.jpg"
                    alt="Accra Pac Vapi Gujarat Facility"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-teal-300 border border-slate-700">
                    Vapi Manufacturing Complex
                  </div>
                  <div className="absolute bottom-3 left-4 text-xs font-bold text-white">
                    G.I.D.C. Vapi, Gujarat &bull; Near Mumbai Port
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-4">
                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between items-center py-2 border-b border-slate-800">
                      <span className="text-slate-400">Annual Output Capacity:</span>
                      <span className="font-bold text-teal-300">120+ Million Units</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-800">
                      <span className="text-slate-400">Filling Lines:</span>
                      <span className="font-bold text-white">5 Aerosol + 6 Liquid Lines</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-800">
                      <span className="text-slate-400">R&amp;D Formulation Library:</span>
                      <span className="font-bold text-teal-300">500+ Validated Recipes</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-800">
                      <span className="text-slate-400">Commercialized Products:</span>
                      <span className="font-bold text-white">750+ Unique SKUs</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-800">
                      <span className="text-slate-400">Stability Testing:</span>
                      <span className="font-bold text-teal-300">6 Flame-Proof Chambers</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-slate-400">Safety Standards:</span>
                      <span className="font-bold text-white">NFPA 30B Level 3 Aerosol Storage</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsQuoteOpen(true)}
                    className="w-full py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs transition-colors text-center shadow"
                  >
                    Schedule a Plant Audit &amp; Technical Meeting
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. History of Accra Pac — Interactive Chronological Evolution Roadmap with Directional Arrows */}
      <section id="history" className="py-20 bg-slate-950 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950/80 border border-teal-500/30 px-3.5 py-1 rounded-full">
              45+ Years Technical Evolution (1979 &rarr; Present)
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              The History of Accra Pac
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              From commissioning India&apos;s first automatic aerosol line in 1979 to operating an audit-ready, 120-million-unit WHO-GMP and US FDA registered manufacturing complex today. Follow each milestone phase below.
            </p>
          </div>

          {/* Dedicated Roadmap Component with Directional Arrows */}
          <HistoryTimeline />
        </div>
      </section>

      {/* 4. Mission, Vision & Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Mission */}
            <div className="p-8 rounded-2xl bg-teal-900/10 border border-teal-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To help global and domestic consumer brands successfully engineer, manufacture, and scale innovative aerosol and liquid products through world-class OEM and turnkey CDMO solutions.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-2xl bg-cyan-900/10 border border-cyan-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-700 text-white flex items-center justify-center">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To be recognized globally among the leading contract development and manufacturing partners for aerosols, celebrated not only for manufacturing capacity, but for the market-leading brands we build together.
              </p>
            </div>
          </div>

          {/* Core Guiding Values */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Guiding Principles
            </span>
            <h3 className="text-2xl font-bold text-slate-900">
              What Governs Every Batch We Fill
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="font-bold text-slate-900 text-base">Quality First, Safety Always</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every batch is produced under defined quality, safety, and traceability controls. Audit-ready compliance on every single shift.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="font-bold text-slate-900 text-base">Absolute IP Confidentiality</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Customer formulations, proprietary specifications, and commercial strategies are protected under strict NDA and restricted access.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="font-bold text-slate-900 text-base">Co-Development Partnership</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                We view each project as a long-term strategic relationship, providing hands-on formulation troubleshooting and scale-up guidance.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="font-bold text-slate-900 text-base">Continuous Innovation</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Investing ahead of customer demand in automated lines, eco-propellants, EcoVadis sustainability, and international certifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Manufacture in India with Accra Pac? */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
              Global Manufacturing Economics
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Why Global Brands Choose India with Accra Pac
            </h2>
            <p className="text-sm text-slate-300">
              India has emerged as one of the world&apos;s most competitive and reliable contract manufacturing hubs for cosmetics and pharmaceuticals. Accra Pac delivers the easiest, safest route to leverage this advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Skilled Technical Workforce",
                desc: "Experienced chemical engineers, analytical chemists, and formulation scientists with decades of specialized aerosol knowledge."
              },
              {
                title: "Mature Packaging Ecosystem",
                desc: "Direct access to top-tier domestic and global suppliers of aluminium cans, tinplate, specialized valves, and precision actuators."
              },
              {
                title: "Competitive Production Economics",
                desc: "Achieve significant unit cost reductions without compromising international quality, raw material grades, or batch reproducibility."
              },
              {
                title: "Established Export Corridors",
                desc: "Proximity to Mumbai sea ports (JNPT) and air hubs provides swift container departures to North America, the Middle East, and Europe."
              },
              {
                title: "English-Speaking Technical Team",
                desc: "Seamless communication across engineering documentation, technical specifications, batch records, and regulatory filings."
              },
              {
                title: "International Quality Benchmarks",
                desc: "Manufacturing held to US FDA, WHO-GMP, and ISO 22716 standards, ensuring effortless customs release in destination markets."
              }
            ].map((adv) => (
              <div
                key={adv.title}
                className="p-6 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2"
              >
                <div className="flex items-center gap-2 text-teal-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{adv.title}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Discuss Your Production Requirements with Our Leadership
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            From new formulation development to technology transfer of an established product line, our technical team is ready to evaluate your specifications.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-teal-700 text-white font-semibold text-sm transition-all shadow"
            >
              Request a Technical Proposal
            </button>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors"
            >
              Contact Our Vapi Plant
            </Link>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}

