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
  Building2,
  Lock,
  Leaf
} from "lucide-react";
import QuoteModal from "@/components/QuoteModal";
import HistoryTimeline from "@/components/HistoryTimeline";

export default function AboutPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#00B8C7] bg-[#071324]/80 border border-[#1455A6]/30 px-3.5 py-1.5 rounded-full inline-block">
              About Accra Pac
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Your Manufacturing Partner from Concept to Commercial Success
            </h1>
            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal pt-2">
              <p>
                Choosing a manufacturing partner is one of the most important decisions a brand makes, because your product&apos;s quality, consistency and market readiness rest in their hands. Accra Pac has carried that responsibility as a pioneer of aerosol manufacturing in India, and is now a trusted global OEM and private label partner for aerosol, liquid and cosmetic products.
              </p>
              <p>
                We partner with brands from the first idea to the final export shipment, helping global brands, private label companies and ambitious entrepreneurs build products ready to compete anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Journey (Interactive Chronological Timeline) */}
      <section id="history" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 reveal">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1455A6] bg-[#f0f6fe]/70 px-3.5 py-1.5 rounded-full border border-blue-200 inline-block">
              Milestones &amp; Evolution
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Our Journey
            </h2>
          </div>

          <HistoryTimeline theme="light" />
        </div>
      </section>

      {/* 3. Why Global Brands Choose Accra Pac */}
      <section className="py-20 sm:py-24 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 reveal">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00B8C7] bg-[#071324] border border-[#1455A6]/30 px-3.5 py-1.5 rounded-full inline-block">
              Proven Global Track Record
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Why Global Brands Choose Accra Pac
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-container">
            <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-[#00B8C7] transition-all space-y-3 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-[#071324] text-[#00B8C7] flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Proven with leading names
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Brands such as Reckitt Benckiser, Henkel, Colgate, Hindustan Unilever, GSK, 3M, Godrej and Philips have tested us, trusted us and returned.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-cyan-400 transition-all space-y-3 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-cyan-950 text-[#00B8C7] flex items-center justify-center font-bold">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                One partner, every step
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Formulation, filling, packaging, regulatory documentation, testing, warehousing and export support happen under one roof, so you never manage five vendors.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-emerald-400 transition-all space-y-3 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-[#071324] text-[#00B8C7] flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Built for international standards
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Our certifications and quality systems are made for regulated markets. See{" "}
                <Link href="/quality" className="text-[#00B8C7] hover:underline font-semibold">
                  Quality &amp; Compliance
                </Link>.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-amber-400 transition-all space-y-3 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-amber-950 text-amber-400 flex items-center justify-center font-bold">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Your ideas stay yours
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Strict confidentiality and secure manufacturing practices protect every formulation and project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Manufacturing in India? */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 reveal">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1455A6] bg-[#f0f6fe] px-3.5 py-1.5 rounded-full border border-blue-200 inline-block">
              Strategic Advantages
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Why Manufacturing in India?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-container">
            {[
              {
                title: "Skilled Technical Workforce",
                desc: "A skilled workforce and a mature ecosystem for aerosols, cosmetics and pharmaceuticals."
              },
              {
                title: "Cost Competitiveness",
                desc: "Competitive costs without compromising quality."
              },
              {
                title: "Logistics Infrastructure",
                desc: "Established export infrastructure and shipping networks."
              },
              {
                title: "Reliable Supply Chain",
                desc: "English-speaking business environment and a reliable supply chain."
              }
            ].map((adv) => (
              <div
                key={adv.title}
                className="p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#00B8C7] hover:shadow-lg transition-all space-y-3 group hover-lift"
              >
                <div className="w-10 h-10 rounded-xl bg-[#f0f6fe]/80 text-[#1455A6] flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5 text-[#1455A6]" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#1455A6] transition-colors">
                  {adv.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Mission, Vision & What Guides Us */}
      <section className="py-20 sm:py-24 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 reveal">
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 hover-lift">
              <div className="flex items-center gap-3 text-[#00B8C7]">
                <Target className="w-6 h-6" />
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-base text-slate-300 leading-relaxed font-normal">
                To help brands successfully develop, manufacture and scale innovative aerosol and liquid products through world-class OEM and private label manufacturing solutions.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 hover-lift">
              <div className="flex items-center gap-3 text-[#00B8C7]">
                <Eye className="w-6 h-6" />
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-base text-slate-300 leading-relaxed font-normal">
                To become one of the world&apos;s leading OEM and private label manufacturing partners for aerosol and liquid products, recognized not only for our scale and technical expertise, but for the brands we&apos;ve helped build and grow globally.
              </p>
            </div>
          </div>

          {/* What Guides Us */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00B8C7] bg-[#071324] border border-[#1455A6]/30 px-3.5 py-1.5 rounded-full inline-block">
                Core Principles
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                What Guides Us
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-container">
              {[
                {
                  title: "Quality First, Safety Always",
                  desc: "Every batch is produced under defined quality, safety and traceability controls."
                },
                {
                  title: "Integrity",
                  desc: "Customer formulations, specifications and intellectual property are handled under strict confidentiality."
                },
                {
                  title: "Partnership, Not Just Production",
                  desc: "We see every project as a long-term relationship."
                },
                {
                  title: "Continuous Improvement",
                  desc: "We keep investing in technology, compliance and capability so you never have to look elsewhere as you grow."
                }
              ].map((val) => (
                <div
                  key={val.title}
                  className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#00B8C7]/60 transition-all space-y-3 group hover-lift"
                >
                  <h3 className="text-base font-bold text-white group-hover:text-[#00B8C7] transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Leadership Team, Life at Accra Pac & Sustainability */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 reveal">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Leadership */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 flex flex-col justify-between hover-lift">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#f0f6fe] text-[#1455A6] flex items-center justify-center font-bold">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Leadership Team
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Our leadership combines decades of hands-on manufacturing experience with a global outlook. The philosophy is simple: invest ahead of demand, protect every customer&apos;s confidentiality, and never let scale come at the cost of quality.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-base text-slate-400">
                [Leadership profiles to be added once the client shares names, titles and bios.]
              </div>
            </div>

            {/* Life at Accra Pac */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 flex flex-col justify-between hover-lift">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Life at Accra Pac
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Behind every batch is a multidisciplinary team of formulation scientists, chemists, quality professionals, production experts and regulatory specialists who have spent years perfecting the craft.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-base text-slate-400">
                [Team photos and stories to be added based on client input.]
              </div>
            </div>

            {/* Sustainability */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 flex flex-col justify-between hover-lift">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#f0f6fe] text-[#1455A6] flex items-center justify-center font-bold">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Sustainability &amp; Responsibility
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  We manufacture responsibly, with efficient use of resources, environmental compliance, workplace safety and fair treatment of every person on our production floor.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 text-base text-slate-400">
                [Specific initiatives or policies to be added once confirmed by the client.]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white py-20 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 reveal">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00B8C7] bg-[#071324] px-3.5 py-1.5 rounded-full border border-[#1455A6]/30">
            Confidential Consultation
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Ready to Bring Your Product to Market?
          </h2>
          {/* Exact content from client doc */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Whether you&apos;re developing a new formulation or launching a private label brand, our team is ready to help.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm bg-[#1455A6] hover:bg-[#0f4487] text-slate-950 shadow-lg shadow-blue-900/20 transition-all"
            >
              Request a Quote
            </button>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 text-[#00B8C7] border border-[#1455A6]/30 transition-colors"
            >
              Talk to Our Experts
            </Link>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}

