"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Factory, 
  Building2, 
  Globe2, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  UserCheck
} from "lucide-react";
import { COMPANY_CONTACTS, PRODUCT_CATEGORIES } from "@/data/websiteData";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "India",
    category: "Pharmaceutical OTC & Healthcare",
    volume: "50,000 – 250,000 units",
    enquiryType: "New Product Development / Private Label",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
              Commercial &amp; Technical Inquiries
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Connect With Our Manufacturing Team
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Whether you are looking to audit our plant in Vapi, request pilot samples from our 500+ ready formulations library, or initiate contract manufacturing, our team is at your disposal.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Direct Sales Leadership Spotlight */}
      <section className="bg-teal-900 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-teal-800 border border-teal-700 flex items-center justify-center font-bold text-teal-300">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-teal-300 uppercase font-bold tracking-wider">
                Direct Commercial Enquiries
              </div>
              <div className="text-sm font-extrabold">
                {COMPANY_CONTACTS.enquiryPerson.name} &bull; {COMPANY_CONTACTS.enquiryPerson.role}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <a 
              href={`tel:${COMPANY_CONTACTS.enquiryPerson.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 bg-teal-800/80 hover:bg-teal-700 px-4 py-2 rounded-lg transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-300" />
              <span>{COMPANY_CONTACTS.enquiryPerson.phone}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_CONTACTS.enquiryPerson.email}`}
              className="flex items-center gap-1.5 bg-white text-slate-900 hover:bg-slate-100 px-4 py-2 rounded-lg transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-teal-700" />
              <span>{COMPANY_CONTACTS.enquiryPerson.email}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. Global Locations Grid */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vapi Plant */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4 hover:border-teal-400 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                  <Factory className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">
                    Manufacturing Plant
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                    {COMPANY_CONTACTS.plant.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {COMPANY_CONTACTS.plant.address}
                </p>
                <div className="pt-2 text-xs text-slate-600 space-y-1">
                  <div><strong>Tel:</strong> {COMPANY_CONTACTS.plant.phone}</div>
                  <div><strong>Email:</strong> {COMPANY_CONTACTS.plant.email}</div>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-200 text-[11px] text-teal-800 font-medium">
                {COMPANY_CONTACTS.plant.details}
              </div>
            </div>

            {/* Mumbai Corporate Office */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4 hover:border-cyan-400 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center font-bold">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-cyan-700 uppercase tracking-wider">
                    Commercial Headquarters
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                    {COMPANY_CONTACTS.corporate.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {COMPANY_CONTACTS.corporate.address}
                </p>
                <div className="pt-2 text-xs text-slate-600 space-y-1">
                  <div><strong>Tel:</strong> {COMPANY_CONTACTS.corporate.phone}</div>
                  <div><strong>Email:</strong> {COMPANY_CONTACTS.corporate.email}</div>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-200 text-[11px] text-cyan-800 font-medium">
                {COMPANY_CONTACTS.corporate.details}
              </div>
            </div>

            {/* USA Sales Office */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4 hover:border-emerald-400 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                  <Globe2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                    Americas Desk
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                    {COMPANY_CONTACTS.usa.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {COMPANY_CONTACTS.usa.address}
                </p>
                <div className="pt-2 text-xs text-slate-600 space-y-1">
                  <div><strong>Email:</strong> {COMPANY_CONTACTS.usa.email}</div>
                  <div><strong>US Liaison:</strong> Samir Shah</div>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-200 text-[11px] text-emerald-800 font-medium">
                {COMPANY_CONTACTS.usa.details}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Comprehensive RFQ & Inquiry Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 sm:p-12 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
                Request For Quotation (RFQ)
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Submit Your Product Requirements
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Please complete the form below. For proprietary formulation inquiries, our management will execute a bilateral Non-Disclosure Agreement (NDA) prior to technical review.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Inquiry Received Successfully</h3>
                <p className="text-sm text-slate-600 max-w-lg mx-auto">
                  Thank you, <strong>{form.name}</strong> from <strong>{form.company}</strong>. Your inquiry regarding <strong>{form.category}</strong> has been transmitted to Mr. Sahil Shah. We will review your volume targets ({form.volume}) and reply within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-lg text-xs font-bold text-white bg-slate-900 hover:bg-teal-700 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-xs sm:text-sm">
                {/* Product specifics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">
                      Product Category *
                    </label>
                    <select
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 text-xs sm:text-sm"
                    >
                      {PRODUCT_CATEGORIES.map((c) => (
                        <option key={c.id}>{c.name}</option>
                      ))}
                      <option>Custom Formulation / Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">
                      Engagement Model *
                    </label>
                    <select
                      value={form.enquiryType}
                      onChange={(e) => setForm({ ...form, enquiryType: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 text-xs sm:text-sm"
                    >
                      <option>OEM &amp; Turnkey Private Label</option>
                      <option>Contract Manufacturing (Client Formula)</option>
                      <option>CDMO &amp; Custom R&amp;D Development</option>
                      <option>Plant Audit / Factory Visit</option>
                      <option>Distribution &amp; Export Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">
                      Anticipated Annual Volume *
                    </label>
                    <select
                      value={form.volume}
                      onChange={(e) => setForm({ ...form, volume: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 text-xs sm:text-sm"
                    >
                      <option>10,000 – 50,000 units (Pilot validation)</option>
                      <option>50,000 – 250,000 units (Commercial)</option>
                      <option>250,000 – 1,000,000+ units (Enterprise)</option>
                    </select>
                  </div>
                </div>

                {/* Contact fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Samir Patel"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full p-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">Company / Brand Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Health Brands Ltd."
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full p-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">Work Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="spatel@apexhealth.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full p-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">Direct Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98251..."
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full p-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">Country / Market *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. India, USA, UAE"
                      value={form.country}
                      onChange={(e) => setForm({ ...form, country: e.target.value })}
                      className="w-full p-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1.5">
                    Technical Specifications or Questions
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Details about desired container size (e.g. 150ml aerosol), valve type, active ingredients, target launch date, regulatory questions..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>All inquiries handled under strict confidentiality agreements.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-slate-900 hover:bg-teal-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Submit Official RFQ</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 5. Vapi Plant Interactive Location Map Preview */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
            Plant Logistics &amp; Travel
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Visiting Our Manufacturing Complex in Vapi
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            Located at Plot No. 1105, Phase III, G.I.D.C., Vapi, Gujarat – 396195. Convenient access via Vapi Railway Station and a short 2.5 hour drive from Mumbai Airport.
          </p>

          <div className="max-w-3xl mx-auto bg-slate-950 p-6 rounded-2xl border border-slate-800 text-left text-xs text-slate-300 space-y-3">
            <div className="flex items-center gap-2 text-teal-400 font-bold text-sm">
              <MapPin className="w-4 h-4" />
              <span>Plant Coordinates: G.I.D.C. Industrial Estate, Vapi, Gujarat</span>
            </div>
            <p>
              We host client audit delegations, third-party certification audits (WHO, FDA, ISO), and technical formulation teams. Please coordinate your arrival with Mr. Sahil Shah (+91 98251 49522) to arrange plant security clearances and laboratory walkthroughs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

