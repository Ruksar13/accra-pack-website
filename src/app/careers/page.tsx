"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Users, 
  Briefcase, 
  Award, 
  Globe2, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  ArrowRight
} from "lucide-react";

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-950 border border-teal-500/30 px-3.5 py-1.5 rounded-full inline-block">
              Join Our Team
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Build a Career in Manufacturing That Matters
            </h1>
            {/* Exact text from client doc */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Join a team of formulation scientists, quality professionals, production engineers, regulatory specialists and export teams, working on products that reach shelves around the world.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Why Work With Us */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200 inline-block">
              Culture of Excellence
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Why Work With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3 group hover:border-teal-400 transition-all">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                <Globe2 className="w-6 h-6 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                Work That Travels
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Your work reaches international markets, not just domestic shelves.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3 group hover:border-cyan-400 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold">
                <Users className="w-6 h-6 text-cyan-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                Learn From Experts
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Work alongside people who have spent years perfecting aerosol and liquid manufacturing.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3 group hover:border-emerald-400 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                Quality and Safety First
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                A workplace built on certified safety and quality systems.
              </p>
            </div>
          </div>

          {/* Culture & Benefits Note */}
          <div className="p-6 rounded-2xl bg-teal-50/50 border border-teal-100 text-center text-xs text-slate-500">
            [To be developed with the client: culture statement, benefits, training and growth opportunities.]
          </div>
        </div>
      </section>

      {/* 3. Current Openings & Application Form */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/70 px-3.5 py-1.5 rounded-full border border-teal-200 inline-block">
              Opportunities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Current Openings
            </h2>
            <p className="text-sm text-slate-500 italic">
              [Job title, department, location, experience, skills. To be added per active vacancy.]
            </p>
            <p className="text-base font-bold text-slate-800 pt-2">
              No suitable opening right now? Send us your resume. We&apos;ll keep it on file for future roles.
            </p>
          </div>

          {/* Application Form */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xl font-black text-slate-900">
              Apply Now
            </h3>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-teal-100 text-teal-800 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Application Submitted</h4>
                <p className="text-xs text-slate-600">
                  Thank you, {form.name}. Our talent acquisition team will review your application.
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
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 / Mobile Number"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Position *</label>
                    <input
                      type="text"
                      required
                      value={form.position}
                      onChange={(e) => setForm({ ...form, position: e.target.value })}
                      placeholder="Desired Role / Department"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Resume Upload (PDF / Doc)</label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-2 rounded-xl border border-slate-300 text-xs text-slate-600 file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Message</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Briefly describe your experience and skills..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Application</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
