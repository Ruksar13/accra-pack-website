"use client";

import React, { useState } from "react";
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  FlaskConical, 
  Layers, 
  Building2, 
  Mail, 
  Phone 
} from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCategory?: string;
}

export default function QuoteModal({ isOpen, onClose, preselectedCategory }: QuoteModalProps) {
  const [step, setStep] = useState(1);
  const [format, setFormat] = useState(preselectedCategory || "Aerosol Spray");
  const [formulationType, setFormulationType] = useState("Ready Library Formula (500+ available)");
  const [volume, setVolume] = useState("50,000 – 250,000 units");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "India",
    notes: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          service: `${format} (${formulationType}, Volume: ${volume})`,
          message: formData.notes,
          formType: "Accra Pack Quote Modal",
        }),
      });
    } catch (err) {
      console.error("Quote submit error:", err);
    } finally {
      setSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-slate-900 text-white p-6 flex justify-between items-start">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-1">
              Accra Pac OEM & Contract Manufacturing
            </div>
            <h3 className="text-xl font-bold">Request a Custom Proposal</h3>
            <p className="text-xs text-slate-300 mt-1">
              Direct connection with our technical team in Vapi. Confidentiality guaranteed.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Inquiry Received</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{formData.name || "partner"}</strong>. Our technical team (led by Mr. Sahil Shah) will review your specifications for <strong>{format}</strong> and send an initial quotation within 24 business hours.
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left text-xs text-slate-600 max-w-md mx-auto space-y-1">
                <div><strong>Format:</strong> {format}</div>
                <div><strong>Formulation:</strong> {formulationType}</div>
                <div><strong>Volume:</strong> {volume}</div>
                <div><strong>Destination:</strong> {formData.country}</div>
              </div>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 bg-slate-900 hover:bg-teal-700 text-white rounded-lg text-sm font-semibold transition-colors"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Product Format */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  1. Product Format & Packaging
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  {[
                    "Aerosol Spray",
                    "BOV (Bag-on-Valve)",
                    "Roll-On Dispenser",
                    "Liquid / Bottle",
                    "Shaving Foam / Gel",
                    "Specialty Technical"
                  ].map((fmt) => (
                    <button
                      type="button"
                      key={fmt}
                      onClick={() => setFormat(fmt)}
                      className={`py-2 px-3 rounded-lg border text-left transition-all ${
                        format === fmt 
                          ? "border-teal-600 bg-teal-50/80 text-teal-800 font-medium ring-1 ring-teal-600" 
                          : "border-slate-200 hover:border-slate-300 text-slate-600"
                      }`}
                    >
                      {fmt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Formulation Status */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  2. Formulation Approach
                </label>
                <select
                  value={formulationType}
                  onChange={(e) => setFormulationType(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option>Ready Library Formula (500+ available — fastest launch)</option>
                  <option>Custom Formulation R&D (Developed in Accra Pac lab)</option>
                  <option>Client-Supplied Formulation (Technology Transfer)</option>
                  <option>Adapt Existing Market Formulation</option>
                </select>
              </div>

              {/* Volume Target */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  3. Anticipated Annual Run
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {[
                    "10,000 – 50,000 (Pilot)",
                    "50,000 – 250,000 (Commercial)",
                    "250,000+ (Enterprise Scale)"
                  ].map((vol) => (
                    <button
                      type="button"
                      key={vol}
                      onClick={() => setVolume(vol)}
                      className={`p-2 rounded-lg border text-center transition-all ${
                        volume === vol 
                          ? "border-teal-600 bg-teal-50/80 text-teal-800 font-medium ring-1 ring-teal-600" 
                          : "border-slate-200 hover:border-slate-300 text-slate-600"
                      }`}
                    >
                      {vol}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="pt-2 border-t border-slate-100 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs sm:text-sm border border-slate-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">Company / Brand Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Consumer"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full text-xs sm:text-sm border border-slate-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">Business Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs sm:text-sm border border-slate-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98251..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs sm:text-sm border border-slate-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Target Market / Country</label>
                  <input
                    type="text"
                    placeholder="e.g. India, United States, UAE, Africa"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full text-xs sm:text-sm border border-slate-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">Specific Product Requirements</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Can dimensions, active ingredients, target launch date, regulatory questions..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full text-xs sm:text-sm border border-slate-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-between gap-3">
                <span className="text-[11px] text-slate-400">
                  Strict NDA protected. Never shared with third parties.
                </span>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-slate-900 hover:bg-teal-700 shadow flex items-center gap-2 transition-all"
                >
                  <span>Submit RFQ</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

