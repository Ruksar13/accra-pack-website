import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Factory, 
  Sparkles, 
  Package, 
  FlaskConical, 
  Globe2, 
  HelpCircle,
  ChevronRight,
  Send,
  Layers,
  Award
} from "lucide-react";
import { SPOTLIGHT_PRODUCTS, SpotlightProduct } from "@/data/websiteData";

// Generate static params for all 7 spotlight products
export function generateStaticParams() {
  return SPOTLIGHT_PRODUCTS.map((prod) => ({
    slug: prod.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = SPOTLIGHT_PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} Manufacturer & Private Label | Accra Pac India`,
    description: `${product.bannerTitle}. WHO-GMP and US FDA registered manufacturing with 120M+ units capacity in Vapi, Gujarat.`,
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = SPOTLIGHT_PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* 1. Breadcrumbs & Banner */}
      <section className="bg-slate-950 text-white pt-10 pb-16 sm:pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#00B8C7] font-medium">{product.name}</span>
          </nav>

          <div className="max-w-4xl space-y-3 pt-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071324]/80 border border-[#1455A6]/30 text-[#00B8C7] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#00B8C7]" />
              <span>{product.category} &bull; OEM &amp; Private Label</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {product.bannerTitle}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              {product.overview}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Product Showcase & Key Specs Card */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Product Image Column */}
            <div className="lg:col-span-5 reveal">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl group hover-lift">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#00B8C7]">
                      Accra Pac Ready Formulation Library
                    </span>
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <p className="text-xs text-slate-300">Commercialized for global brands &amp; pharmacy retailers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Overview & Quick Specification Grid */}
            <div className="lg:col-span-7 space-y-6 reveal">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1455A6] bg-[#f0f6fe] px-3 py-1 rounded-full">
                  Formulation Highlights
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {product.tagline}
                </h2>
              </div>

              {/* Key Features Bullet List */}
              <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1455A6] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Quick Spec Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 hover-lift">
                  <div className="text-[11px] text-slate-500">Quality Benchmark</div>
                  <div className="text-xs font-bold text-slate-900">WHO-GMP &bull; US FDA</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 hover-lift">
                  <div className="text-[11px] text-slate-500">Stability Testing</div>
                  <div className="text-xs font-bold text-[#1455A6]">6 Flame-Proof Chambers</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 col-span-2 sm:col-span-1 hover-lift">
                  <div className="text-[11px] text-slate-500">Manufacturing Plant</div>
                  <div className="text-xs font-bold text-slate-900">Vapi, Gujarat (India)</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="#inquiry-form"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-[#1455A6] text-white font-bold text-xs shadow transition-all text-center hover-lift"
                >
                  Request Samples &amp; Pricing
                </a>
                <Link
                  href="/products"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors text-center"
                >
                  &larr; Back to All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Formulation Variants & Options */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 reveal">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1455A6] bg-[#f0f6fe]/60 px-3 py-1 rounded-full">
              Formulation Versatility
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Available Active Concentrations &amp; Variants
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Select an established monograph formula from our library, or request a custom active concentration developed by our R&amp;D chemists.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-container reveal">
            {product.formulationOptions.map((opt, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3 hover:border-[#00B8C7] transition-all hover-lift"
              >
                <div className="w-8 h-8 rounded-lg bg-[#f0f6fe] text-[#1455A6] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{opt}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Validated stability &amp; analytical HPLC release assays available.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Packaging, Customisation & Process Matrix */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Packaging & Customisation 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
            {/* Packaging */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 hover-lift">
              <div className="w-10 h-10 rounded-xl bg-[#f0f6fe] text-[#1455A6] flex items-center justify-center">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Available Packaging Configurations</h3>
              <ul className="space-y-2 text-xs text-slate-700">
                {product.packaging.map((pkg, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1455A6] shrink-0" />
                    <span>{pkg}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customisation */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 hover-lift">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Customisation Capabilities</h3>
              <ul className="space-y-2 text-xs text-slate-700">
                {product.customisation.map((cust, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1455A6] shrink-0" />
                    <span>{cust}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 8-Step Manufacturing Process */}
          <div className="space-y-8 reveal">
            <div className="text-center max-w-2xl mx-auto space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1455A6]">
                Production Integrity
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900">
                8-Step Manufacturing Process for {product.name}
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center stagger-container">
              {product.manufacturingProcess.map((step, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 space-y-1 hover-lift">
                  <div className="text-[10px] font-extrabold text-[#1455A6] bg-[#f0f6fe]/60 w-6 h-6 rounded-full flex items-center justify-center mx-auto">
                    {idx + 1}
                  </div>
                  <div className="text-[11px] leading-tight pt-1">{step}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Regulatory & Export Support */}
          <div className="p-8 rounded-2xl bg-slate-900 text-white space-y-4 reveal hover-lift">
            <div className="flex items-center gap-2 text-[#00B8C7] font-bold text-sm">
              <ShieldCheck className="w-5 h-5" />
              <span>Regulatory Compliance &amp; Global Export Release</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300">
              <p className="leading-relaxed">
                <strong>Regulatory Standards:</strong> {product.regulatory}
              </p>
              <p className="leading-relaxed">
                <strong>Export Clearance:</strong> {product.exportSupport}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Product Specific FAQs */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2 reveal">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1455A6] bg-[#f0f6fe]/60 px-3 py-1 rounded-full">
              Common Questions
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Technical FAQs Regarding {product.name}
            </h3>
          </div>

          <div className="space-y-4 stagger-container reveal">
            {product.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2 hover-lift">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#1455A6] shrink-0" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. On-Page Request a Quote Form */}
      <section id="inquiry-form" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6 reveal hover-lift">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1455A6] bg-[#f0f6fe]/60 px-3 py-1 rounded-full">
                Direct Inquiry
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Request a Quote for {product.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Connect directly with our business development team in Vapi. Confidentiality guaranteed.
              </p>
            </div>

            <form className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full p-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1455A6]"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Company / Brand *</label>
                  <input
                    type="text"
                    required
                    placeholder="Company Name"
                    className="w-full p-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1455A6]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Business Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="w-full p-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1455A6]"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98251..."
                    className="w-full p-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1455A6]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Target Annual Volume</label>
                  <select className="w-full p-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1455A6] text-xs">
                    <option>10,000 – 50,000 units (Pilot validation)</option>
                    <option>50,000 – 250,000 units (Commercial)</option>
                    <option>250,000+ units (Enterprise)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Target Country / Market</label>
                  <input
                    type="text"
                    placeholder="e.g. India, USA, UAE"
                    className="w-full p-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1455A6]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Packaging or Formulation Notes</label>
                <textarea
                  rows={3}
                  placeholder={`Specify desired can size, fragrance profile, or target launch date for ${product.name}...`}
                  className="w-full p-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1455A6] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-[#1455A6] text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow"
              >
                <span>Submit Product Request</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
