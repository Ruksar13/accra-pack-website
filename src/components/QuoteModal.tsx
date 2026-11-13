"use client";

import React, { useState, useEffect } from "react";
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  FlaskConical, 
  Layers, 
  Building2, 
  Mail, 
  Phone,
  Loader2,
  AlertCircle
} from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCategory?: string;
}

export default function QuoteModal({ isOpen, onClose, preselectedCategory }: QuoteModalProps) {
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync preselectedCategory if provided
  useEffect(() => {
    if (preselectedCategory) {
      setFormat(preselectedCategory);
    }
  }, [preselectedCategory]);

  // Handle ESC key to close and lock body scroll when open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          format,
          formulationType,
          volume,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send quote request.");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      console.error("Quote submission error:", err);
      setErrorMessage(err.message || "An unexpected error occurred. Please try again or call +91 98251 49522.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setErrorMessage(null);
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      country: "India",
      notes: ""
    });
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative bg-white rounded-2xl sm:rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar - Sticky & Prominent */}
        <div className="bg-gradient-to-r from-[#0b182f] via-[#0f284e] to-[#1455A6] text-white p-4 sm:p-6 flex justify-between items-start border-b border-[#1455A6]/40 shrink-0 relative">
          <div className="pr-10">
            <div className="text-base font-bold uppercase tracking-wider text-[#00B8C7] mb-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00B8C7] animate-pulse"></span>
              <span>Accra Pac &bull; OEM &amp; Contract Manufacturing</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white">Request a Custom Proposal</h3>
            <p className="text-xs text-[#A6A9AD] mt-1 line-clamp-1 sm:line-clamp-none">
              Direct connection with our technical team in Vapi. Confidentiality guaranteed.
            </p>
          </div>

          {/* PROMINENT CLOSE BUTTON - High contrast, accessible, clear hover & active states */}
          <button
            onClick={onClose}
            type="button"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-red-500 text-white hover:text-white flex items-center justify-center transition-all duration-200 shadow-md cursor-pointer border border-white/20 hover:border-red-400 group active:scale-95"
            aria-label="Close modal"
            title="Close (Esc)"
          >
            <X className="w-5 h-5 transition-transform group-hover:rotate-90" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 overscroll-contain">
          {isSubmitted ? (
            <div className="text-center py-6 sm:py-8 space-y-4">
              <div className="w-16 h-16 bg-[#e0edfd] text-[#1455A6] rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10 text-[#1455A6]" />
              </div>
              <h4 className="text-2xl font-black text-slate-900">Inquiry Received</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name || "partner"}</strong>. Your technical request has been transmitted directly to our sales administration (<strong>sales@accrapacindia.com</strong>).
              </p>
              
              <div className="bg-[#f0f6fe] p-4 rounded-xl border border-blue-200 text-left text-xs text-slate-700 max-w-md mx-auto space-y-1.5 shadow-sm">
                <div><strong className="text-[#1455A6]">Format:</strong> {format}</div>
                <div><strong className="text-[#1455A6]">Formulation:</strong> {formulationType}</div>
                <div><strong className="text-[#1455A6]">Volume:</strong> {volume}</div>
                <div><strong className="text-[#1455A6]">Target Destination:</strong> {formData.country}</div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-7 py-3 bg-[#1455A6] hover:bg-[#0f4487] text-white rounded-xl text-sm font-bold shadow-md transition-colors"
                >
                  Close &amp; Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Error banner if submission fails */}
              {errorMessage && (
                <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <strong className="font-semibold">Notice:</strong> {errorMessage}
                  </div>
                </div>
              )}

              {/* 1. Product Format */}
              <div>
                <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                  1. Product Format &amp; Packaging
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs sm:text-sm">
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
                      className={`py-2.5 px-3 rounded-xl border text-left font-semibold transition-all ${
                        format === fmt 
                          ? "border-[#1455A6] bg-[#f0f6fe] text-[#1455A6] font-bold ring-2 ring-[#1455A6]/30 shadow-sm" 
                          : "border-slate-200 hover:border-slate-300 text-slate-800 bg-slate-50/50"
                      }`}
                    >
                      {fmt}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Formulation Status */}
              <div>
                <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                  2. Formulation Approach
                </label>
                <select
                  value={formulationType}
                  onChange={(e) => setFormulationType(e.target.value)}
                  className="w-full text-sm bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#1455A6] transition-all"
                >
                  <option>Ready Library Formula (500+ available — fastest launch)</option>
                  <option>Custom Formulation R&amp;D (Developed in Accra Pac lab)</option>
                  <option>Client-Supplied Formulation (Technology Transfer)</option>
                  <option>Adapt Existing Market Formulation</option>
                </select>
              </div>

              {/* 3. Volume Target */}
              <div>
                <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                  3. Anticipated Annual Run
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs sm:text-sm">
                  {[
                    "10,000 – 50,000 (Pilot)",
                    "50,000 – 250,000 (Commercial)",
                    "250,000+ (Enterprise Scale)"
                  ].map((vol) => (
                    <button
                      type="button"
                      key={vol}
                      onClick={() => setVolume(vol)}
                      className={`p-2.5 rounded-xl border text-center font-medium transition-all ${
                        volume === vol 
                          ? "border-[#1455A6] bg-[#f0f6fe] text-[#1455A6] font-bold ring-2 ring-[#1455A6]/30 shadow-sm" 
                          : "border-slate-200 hover:border-slate-300 text-slate-800 bg-slate-50/50"
                      }`}
                    >
                      {vol}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Contact Information */}
              <div className="pt-3 border-t border-slate-200 space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-sm border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#1455A6] transition-all font-medium text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">Company / Brand Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Consumer"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full text-sm border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#1455A6] transition-all font-medium text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">Business Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-sm border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#1455A6] transition-all font-medium text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98251..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-sm border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#1455A6] transition-all font-medium text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">Target Market / Destination Country</label>
                  <input
                    type="text"
                    placeholder="e.g. India, United States, UAE, Africa"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full text-sm border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#1455A6] transition-all font-medium text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">Specific Product Requirements &amp; Notes</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Can size, active ingredients, fragrance profile, target launch date..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full text-sm border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#1455A6] resize-none transition-all font-medium text-slate-900"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500 text-center sm:text-left font-medium">
                  Strict NDA protected. Inquiries routed to sales@accrapacindia.com
                </span>
                
                <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 sm:flex-initial px-7 py-3 rounded-xl text-sm font-bold text-white bg-[#1455A6] hover:bg-[#0f4487] disabled:opacity-70 shadow-md shadow-blue-900/20 flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#00B8C7]" />
                        <span>Sending to Admin...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit RFQ</span>
                        <Send className="w-4 h-4 text-[#00B8C7]" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
