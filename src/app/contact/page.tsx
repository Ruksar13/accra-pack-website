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
  UserCheck
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    enquiryType: "Contract Manufacturing",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          country: form.country,
          format: form.enquiryType,
          formulationType: "Standard / Custom",
          volume: "Commercial Volume",
          notes: form.message
        }),
      });

      const data = await res.json();
      if (!res.ok && !data.success) {
        throw new Error(data.error || "Failed to deliver inquiry");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Failed to send enquiry. Please contact us directly at sales@accrapacindia.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#00B8C7] bg-[#071324] border border-[#1455A6]/30 px-3.5 py-1.5 rounded-full inline-block">
              Contact Us
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Get in Touch
            </h1>
            {/* Exact text from client doc */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Tell us about your product or project, and our team will get back to you.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Direct Sales Leadership Spotlight */}
      <section className="bg-[#1455A6] text-white py-6 px-4 border-b border-teal-800 reveal">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0f4487] border border-teal-700 flex items-center justify-center font-bold text-[#00B8C7]">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-[#00B8C7] uppercase font-bold tracking-wider">
                For Business Enquiries
              </div>
              <div className="text-sm font-extrabold">
                Mr. Sahil Shah
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <a 
              href="tel:+919825149522"
              className="flex items-center gap-1.5 bg-[#0f4487]/80 hover:bg-[#1455A6] px-4 py-2 rounded-lg transition-colors hover-lift"
            >
              <Phone className="w-3.5 h-3.5 text-[#00B8C7]" />
              <span>+91 98251 49522</span>
            </a>
            <a 
              href="mailto:sahil.shah@accrapacindia.com"
              className="flex items-center gap-1.5 bg-white text-slate-900 hover:bg-slate-100 px-4 py-2 rounded-lg transition-colors hover-lift shadow-sm"
            >
              <Mail className="w-3.5 h-3.5 text-[#1455A6]" />
              <span>sahil.shah@accrapacindia.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. Global Locations Grid */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-container">
            {/* Manufacturing Plant */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 flex flex-col justify-between hover-lift">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#f0f6fe] text-[#1455A6] flex items-center justify-center font-bold">
                  <Factory className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Manufacturing Plant
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Plot No. 1105, Phase III, G.I.D.C., Vapi, Gujarat – 396195, India
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 space-y-1 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#1455A6]" />
                  <span>+91-260-2430996 / 2422856</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#1455A6]" />
                  <span>info@accrapacindia.com</span>
                </div>
              </div>
            </div>

            {/* Corporate / Mumbai Office */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 flex flex-col justify-between hover-lift">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Corporate / Mumbai Office
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  503, Rajanigandha, Prof. V.S. Agashe Rd., Dadar (W), Mumbai – 400028, India
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 space-y-1 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#1455A6]" />
                  <span>+91 7303 258963</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#1455A6]" />
                  <span>sales@accrapacindia.com</span>
                </div>
              </div>
            </div>

            {/* USA Sales Office */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 flex flex-col justify-between hover-lift">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#f0f6fe] text-[#1455A6] flex items-center justify-center font-bold">
                  <Globe2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  USA Sales Office
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Accra Pac Holding Co., LLC, 6435 W. Jefferson Blvd, Suite 151, Fort Wayne, IN 46804
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 space-y-1 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#00B8C7]" />
                  <span>samir.shah@accrapacindia.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Form & Google Map */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Enquiry Form
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your product and business details below.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#f0f6fe] border border-blue-200 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#f0f6fe] text-[#1455A6] flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Enquiry Received</h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Thank you, {form.name}. Our commercial and engineering team will review your requirements and respond promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your Full Name"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#1455A6] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Company *</label>
                      <input
                        type="text"
                        required
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Company or Brand Name"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#1455A6] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#1455A6] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 / Country Code & Number"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#1455A6] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Country *</label>
                      <input
                        type="text"
                        required
                        value={form.country}
                        onChange={(e) => setForm({ ...form, country: e.target.value })}
                        placeholder="e.g. India, USA, UAE"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#1455A6] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Enquiry Type *</label>
                      <select
                        value={form.enquiryType}
                        onChange={(e) => setForm({ ...form, enquiryType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#1455A6] focus:outline-none bg-white"
                      >
                        <option value="Contract Manufacturing">Contract Manufacturing</option>
                        <option value="OEM & Private Label">OEM &amp; Private Label</option>
                        <option value="Export Enquiry">Export Enquiry</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Message *</label>
                    <textarea
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your product requirements, packaging format, estimated volumes, or technical specifications..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#1455A6] focus:outline-none"
                    ></textarea>
                  </div>

                  {error && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-[#1455A6] hover:bg-[#0f4487] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span>Sending to sales@accrapacindia.com...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Google Map of Vapi Plant */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-[#00B8C7] font-bold text-xs uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Vapi Plant Location</span>
                </div>
                <h3 className="text-lg font-bold">Accra Pac India Pvt. Ltd.</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Plot No. 1105, Phase III, G.I.D.C., Vapi, Gujarat – 396195, India. Approximately 170 km north of Mumbai International Airport with high-speed NH-48 access.
                </p>
              </div>

              <div className="rounded-3xl overflow-hidden border border-slate-300 shadow-sm h-80 relative bg-slate-100">
                <iframe
                  title="Accra Pac Vapi Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.3541481977755!2d72.9234857!3d20.3683907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cf31818d6fbb%3A0xe54fb91e0a2e5861!2sAccra%20Pac%20India%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

