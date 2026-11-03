"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Users, 
  Briefcase, 
  Award, 
  GraduationCap, 
  CheckCircle2, 
  Send, 
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Aerosol Formulation Chemist",
    experience: "3-5 Years",
    message: ""
  });

  const openings = [
    {
      title: "Senior Aerosol Formulation Chemist",
      dept: "R&D / Product Development",
      location: "Vapi Plant, Gujarat",
      exp: "4–7 Years in aerosol or personal care compounding",
      desc: "Lead formulation development of new OTC topical sprays, BOV applications, and personal care aerosols. Experience with stability testing protocols."
    },
    {
      title: "Quality Assurance (QA) Executive",
      dept: "Quality Systems & Compliance",
      location: "Vapi Plant, Gujarat",
      exp: "3–5 Years in WHO-GMP / US FDA regulated plants",
      desc: "Manage IPQC checkpoints, BMR documentation, crimp dimension compliance, and internal audit preparations."
    },
    {
      title: "Production Line Engineer - Aerosol Filling",
      dept: "Plant Engineering",
      location: "Vapi Plant, Gujarat",
      exp: "3–6 Years in automated aerosol packaging lines",
      desc: "Supervise automated aerosol gassing houses, hot water test baths, crimpers, and inline checkweighers."
    },
    {
      title: "International Export & Hazmat Coordinator",
      dept: "Logistics & Supply Chain",
      location: "Corporate Office, Mumbai",
      exp: "2–5 Years in Dangerous Goods (DG) export shipments",
      desc: "Coordinate ocean container bookings (JNPT), IMDG hazmat documentation, customs clearance, and global client logistics."
    }
  ];

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
              Careers at Accra Pac
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Build Your Career in Manufacturing That Matters
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Join a multidisciplinary team of formulation scientists, quality assurance specialists, and automation engineers producing high-grade aerosol and liquid products for global brands.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Culture & Values */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
              Why Work With Us
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Excellence, Safety &amp; Professional Growth
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Advanced Technical Training</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Work alongside industry veterans on pressurized propellant chemistry, GC/HPLC analytical instrumentation, and WHO-GMP audit readiness.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Global Brand Exposure</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Participate in commercial manufacturing projects for multinational FMCG, healthcare, and retail leaders across North America, Europe, and Asia.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Safe, Ethical Workplace</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ISO 45001 safety systems, NFPA 30B compliant gas safety, EcoVadis sustainability benchmarks, and fair employee development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Open Positions & Application Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Openings list */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/60 px-3 py-1 rounded-full">
                  Current Openings
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                  Join Our Growing Team
                </h2>
              </div>

              <div className="space-y-4">
                {openings.map((job) => (
                  <div
                    key={job.title}
                    className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h3 className="text-base font-bold text-slate-900">{job.title}</h3>
                      <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200 self-start sm:self-auto">
                        {job.dept}
                      </span>
                    </div>

                    <div className="text-xs text-slate-500 flex flex-wrap gap-4">
                      <span><strong>Location:</strong> {job.location}</span>
                      <span><strong>Experience:</strong> {job.exp}</span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {job.desc}
                    </p>

                    <button
                      onClick={() => {
                        setForm({ ...form, role: job.title });
                        const el = document.getElementById("apply-form");
                        el?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-xs font-bold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1 pt-1"
                    >
                      Apply for this role <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Application form */}
            <div id="apply-form" className="lg:col-span-5">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 scroll-mt-28">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Apply for a Position</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Submit your profile to our Human Resources team.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-6 rounded-xl bg-teal-50 border border-teal-200 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-teal-600 mx-auto" />
                    <h4 className="font-bold text-teal-950">Application Received</h4>
                    <p className="text-xs text-teal-800">
                      Thank you, <strong>{form.name}</strong>. Our HR team will review your application for <strong>{form.role}</strong> and contact you if your qualifications match our active openings.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold text-teal-700 underline"
                    >
                      Submit Another Application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div>
                      <label className="block font-medium text-slate-700 mb-1">Target Position</label>
                      <select
                        value={form.role}
                        onChange={(e) => setForm({ ...form, role: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        {openings.map((j) => (
                          <option key={j.title}>{j.title}</option>
                        ))}
                        <option>General Application / Other Department</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-medium text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full p-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full p-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98..."
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full p-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-slate-700 mb-1">Years of Relevant Experience</label>
                      <input
                        type="text"
                        placeholder="e.g. 4 Years in Aerosol Compounding"
                        value={form.experience}
                        onChange={(e) => setForm({ ...form, experience: e.target.value })}
                        className="w-full p-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-slate-700 mb-1">Brief Summary of Qualifications</label>
                      <textarea
                        rows={3}
                        placeholder="Key technical skills, past employers, current location..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full p-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-slate-900 hover:bg-teal-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow"
                    >
                      <span>Submit Application</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>

                    <p className="text-[11px] text-slate-400 text-center">
                      Or email your CV directly to <span className="font-semibold text-slate-600">info@accrapacindia.com</span>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

