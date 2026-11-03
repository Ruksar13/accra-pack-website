"use client";

import React, { useState } from "react";
import { 
  Globe2, 
  MapPin, 
  ShieldCheck, 
  Ship, 
  Plane, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  ExternalLink,
  Layers
} from "lucide-react";

export interface MapDestination {
  id: string;
  name: string;
  region: string;
  lat: number;
  lng: number;
  x: number;
  y: number;
  categories: string;
  compliance: string;
  transitMode: "Sea Freight (JNPT)" | "Air Freight" | "Multimodal Ocean";
  flag: string;
}

// Origin: Vapi, Gujarat, India (Approx 20.38°N, 72.91°E)
export const ORIGIN_INDIA = {
  name: "Vapi Plant, Gujarat, India",
  role: "Accra Pac Global Manufacturing Complex",
  x: 658,
  y: 205,
};

// Precise positions on a 1000x520 world map canvas
export const MAP_DESTINATIONS: MapDestination[] = [
  {
    id: "usa",
    name: "United States",
    region: "North America",
    lat: 41.07,
    lng: -85.13,
    x: 232,
    y: 155,
    categories: "US FDA Registered OTC Sprays & Private Label Care",
    compliance: "US FDA Registered &bull; 21 CFR Compliant",
    transitMode: "Sea Freight (JNPT)",
    flag: "🇺🇸"
  },
  {
    id: "uae",
    name: "United Arab Emirates",
    region: "Middle East",
    lat: 25.20,
    lng: 55.27,
    x: 615,
    y: 198,
    categories: "Personal Care, Deodorants & Luxury Perfumes",
    compliance: "ISO 22716 &bull; GSO Standard &bull; IMDG Hazmat",
    transitMode: "Sea Freight (JNPT)",
    flag: "🇦🇪"
  },
  {
    id: "oman",
    name: "Oman",
    region: "Middle East",
    lat: 23.58,
    lng: 58.40,
    x: 624,
    y: 206,
    categories: "OTC Healthcare & Personal Grooming Sprays",
    compliance: "WHO-GMP &bull; Batch Traceable",
    transitMode: "Sea Freight (JNPT)",
    flag: "🇴🇲"
  },
  {
    id: "singapore",
    name: "Singapore",
    region: "Southeast Asia",
    lat: 1.35,
    lng: 103.81,
    x: 746,
    y: 268,
    categories: "Household Disinfection & Specialty Aerosols",
    compliance: "HSA Regulated &bull; VOC Compliant",
    transitMode: "Sea Freight (JNPT)",
    flag: "🇸🇬"
  },
  {
    id: "malaysia",
    name: "Malaysia",
    region: "Southeast Asia",
    lat: 3.13,
    lng: 101.68,
    x: 738,
    y: 260,
    categories: "Cosmetics, Hair Care Styling & Body Sprays",
    compliance: "ISO 22716 &bull; Halal Compatible Facilities",
    transitMode: "Sea Freight (JNPT)",
    flag: "🇲🇾"
  },
  {
    id: "russia",
    name: "Russia & CIS",
    region: "Eurasia",
    lat: 55.75,
    lng: 37.61,
    x: 568,
    y: 110,
    categories: "Automotive Maintenance & Industrial Technical Sprays",
    compliance: "NFPA 30B Level 3 &bull; Sub-Zero Flammability Tested",
    transitMode: "Multimodal Ocean",
    flag: "🇷🇺"
  },
  {
    id: "sri-lanka",
    name: "Sri Lanka",
    region: "South Asia",
    lat: 6.92,
    lng: 79.86,
    x: 676,
    y: 254,
    categories: "Air Fresheners & Household Hygiene Sprays",
    compliance: "ISO 9001 &bull; Fast Colombo Port Transit",
    transitMode: "Sea Freight (JNPT)",
    flag: "🇱🇰"
  },
  {
    id: "bhutan",
    name: "Bhutan",
    region: "South Asia",
    lat: 27.47,
    lng: 89.63,
    x: 704,
    y: 196,
    categories: "Ayurvedic & Herbal Therapeutic Care Sprays",
    compliance: "Ayush Form 25-D License &bull; Plant Actives",
    transitMode: "Air Freight",
    flag: "🇧🇹"
  },
  {
    id: "congo",
    name: "Congo & Central Africa",
    region: "Africa",
    lat: -4.26,
    lng: 15.28,
    x: 512,
    y: 284,
    categories: "Personal Care, Deodorants & Insect Defense Sprays",
    compliance: "WHO-GMP &bull; Tropical Humidity Tested",
    transitMode: "Sea Freight (JNPT)",
    flag: "🇨🇬"
  },
  {
    id: "ethiopia",
    name: "Ethiopia",
    region: "Africa",
    lat: 9.03,
    lng: 38.74,
    x: 574,
    y: 242,
    categories: "Antiseptic First Aid & Hygiene Disinfectants",
    compliance: "WHO-GMP &bull; East Africa Corridors",
    transitMode: "Sea Freight (JNPT)",
    flag: "🇪🇹"
  },
  {
    id: "djibouti",
    name: "Djibouti",
    region: "Africa",
    lat: 11.82,
    lng: 42.59,
    x: 585,
    y: 236,
    categories: "Household Hygiene & Body Fragrance Aerosols",
    compliance: "Port Transit &bull; Export Hazmat Packaging",
    transitMode: "Sea Freight (JNPT)",
    flag: "🇩🇯"
  },
  {
    id: "bangladesh",
    name: "Bangladesh",
    region: "South Asia",
    lat: 23.81,
    lng: 90.41,
    x: 708,
    y: 204,
    categories: "FMCG Aerosols & Liquid Contract Manufacturing",
    compliance: "Regional Trade Agreements &bull; High-Volume Runs",
    transitMode: "Multimodal Ocean",
    flag: "🇧🇩"
  }
];

export default function WorldMap() {
  const [selectedId, setSelectedId] = useState<string>("usa");
  const [activeRegion, setActiveRegion] = useState<string>("all");

  const activeDestination = MAP_DESTINATIONS.find(d => d.id === selectedId) || MAP_DESTINATIONS[0];

  const regions = ["all", "North America", "Middle East", "Southeast Asia", "Africa", "South Asia", "Eurasia"];

  const filteredDestinations = MAP_DESTINATIONS.filter(d => 
    activeRegion === "all" || d.region === activeRegion
  );

  // Generates curved bezier arc route connecting Vapi, India to destination
  const getArcPath = (destX: number, destY: number) => {
    const originX = ORIGIN_INDIA.x;
    const originY = ORIGIN_INDIA.y;
    const dx = destX - originX;
    const dy = destY - originY;
    
    // Arch upward or downward depending on relative position
    const midX = (originX + destX) / 2;
    const midY = (originY + destY) / 2 - Math.abs(dx) * 0.18 - 20;
    
    return `M ${originX} ${originY} Q ${midX} ${midY} ${destX} ${destY}`;
  };

  return (
    <div className="w-full bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
      {/* Map Control Header */}
      <div className="p-6 sm:p-8 border-b border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/50 backdrop-blur-md">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
              Live Global Export Matrix
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
            Origin: Vapi, Gujarat &rarr; 20+ Global Export Hubs
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Hover or click on any destination pin to inspect active trade lanes, compliance standards, and product classes.
          </p>
        </div>

        {/* Region Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {regions.map((reg) => (
            <button
              key={reg}
              onClick={() => setActiveRegion(reg)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeRegion === reg
                  ? "bg-teal-500 text-slate-950 shadow-md font-bold"
                  : "bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
              }`}
            >
              {reg === "all" ? "All Markets" : reg}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Interactive Map Container */}
      <div className="relative w-full aspect-[16/8.5] min-h-[380px] sm:min-h-[460px] bg-gradient-to-b from-[#090e1a] via-[#0b1329] to-[#090e1a] overflow-hidden select-none">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

        <svg 
          viewBox="0 0 1000 520" 
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Radial glow for origin */}
            <radialGradient id="originGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
            </radialGradient>

            {/* Glowing gradient for flight routes */}
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.8" />
            </linearGradient>

            <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* WORLD CONTINENTS PATHS (Precision Stylized Vector Silhouettes) */}
          <g className="fill-slate-800/60 stroke-slate-700/60 stroke-[0.8]">
            {/* North America */}
            <path d="M 120 70 L 190 60 L 270 65 L 290 100 L 260 140 L 230 150 L 240 190 L 220 220 L 190 230 L 170 190 L 140 180 L 110 140 Z M 270 40 L 320 30 L 350 50 L 320 70 Z" />
            {/* Central America & Caribbean */}
            <path d="M 210 230 L 230 250 L 245 270 L 235 285 L 220 270 Z" />
            {/* South America */}
            <path d="M 245 285 L 300 290 L 330 330 L 320 390 L 280 460 L 260 440 L 250 360 L 230 310 Z" />
            {/* Europe */}
            <path d="M 460 110 L 520 85 L 560 100 L 550 140 L 510 155 L 470 160 L 450 140 Z M 440 110 L 460 95 L 450 130 Z" />
            {/* Africa */}
            <path d="M 460 180 L 540 170 L 580 220 L 570 290 L 550 370 L 500 390 L 470 340 L 450 250 L 440 210 Z M 575 320 L 590 340 L 585 370 L 570 350 Z" />
            {/* Eurasia / Russia / North Asia */}
            <path d="M 540 85 L 680 70 L 780 80 L 860 100 L 850 140 L 760 150 L 670 130 L 580 120 Z" />
            {/* Middle East */}
            <path d="M 560 170 L 620 165 L 640 200 L 625 240 L 580 230 Z" />
            {/* South Asia & India */}
            <path d="M 630 170 L 690 165 L 720 185 L 690 270 L 660 270 L 640 220 Z" />
            {/* East Asia & China */}
            <path d="M 690 165 L 780 150 L 830 180 L 800 230 L 740 230 L 710 190 Z M 835 150 L 850 165 L 840 200 Z" />
            {/* Southeast Asia */}
            <path d="M 725 230 L 760 240 L 755 280 L 730 270 Z M 750 290 L 790 300 L 810 320 L 760 320 Z M 800 250 L 820 270 L 805 290 Z" />
            {/* Australia */}
            <path d="M 790 360 L 860 350 L 890 390 L 870 440 L 800 430 L 780 390 Z M 895 440 L 920 460 L 900 480 Z" />
          </g>

          {/* Dotted Latitude/Equator Guide Lines */}
          <line x1="60" y1="260" x2="940" y2="260" stroke="#334155" strokeWidth="0.8" strokeDasharray="3 4" strokeOpacity="0.4" />
          <line x1="60" y1="130" x2="940" y2="130" stroke="#334155" strokeWidth="0.5" strokeDasharray="2 4" strokeOpacity="0.25" />
          <line x1="60" y1="390" x2="940" y2="390" stroke="#334155" strokeWidth="0.5" strokeDasharray="2 4" strokeOpacity="0.25" />

          {/* FLIGHT / SHIPPING ARCS FROM INDIA TO ALL DESTINATIONS */}
          <g>
            {filteredDestinations.map((dest) => {
              const isSelected = selectedId === dest.id;
              const pathD = getArcPath(dest.x, dest.y);

              return (
                <g key={`route-${dest.id}`}>
                  {/* Background route path */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={isSelected ? "#2dd4bf" : "#38bdf8"}
                    strokeWidth={isSelected ? "2.5" : "1"}
                    strokeOpacity={isSelected ? "0.9" : "0.25"}
                    strokeDasharray={isSelected ? "6 4" : "4 4"}
                    className={isSelected ? "animate-pulse" : ""}
                    filter={isSelected ? "url(#glowEffect)" : undefined}
                  />

                  {/* Animated flow particle dot on active route */}
                  {isSelected && (
                    <circle r="3.5" fill="#5eead4" filter="url(#glowEffect)">
                      <animateMotion path={pathD} dur="2.2s" repeatCount="indefinite" />
                    </circle>
                  )}
                </g>
              );
            })}
          </g>

          {/* ORIGIN HUB: VAPI / MUMBAI, INDIA */}
          <g className="cursor-pointer">
            {/* Outer radar pulse rings */}
            <circle cx={ORIGIN_INDIA.x} cy={ORIGIN_INDIA.y} r="18" fill="url(#originGlow)" opacity="0.6" className="animate-ping" />
            <circle cx={ORIGIN_INDIA.x} cy={ORIGIN_INDIA.y} r="10" fill="#0d9488" opacity="0.3" />
            <circle cx={ORIGIN_INDIA.x} cy={ORIGIN_INDIA.y} r="5.5" fill="#14b8a6" stroke="#ffffff" strokeWidth="1.5" />
            
            {/* Origin Label Tag */}
            <g transform={`translate(${ORIGIN_INDIA.x + 8}, ${ORIGIN_INDIA.y - 12})`}>
              <rect x="-4" y="-12" width="134" height="20" rx="5" fill="#022c22" stroke="#14b8a6" strokeWidth="1" opacity="0.95" />
              <text x="3" y="1" fill="#5eead4" fontSize="9.5" fontWeight="bold" fontFamily="sans-serif">
                ★ Accra Pac Plant (Vapi)
              </text>
            </g>
          </g>

          {/* DESTINATION PINS */}
          {filteredDestinations.map((dest) => {
            const isSelected = selectedId === dest.id;

            return (
              <g 
                key={`pin-${dest.id}`} 
                className="cursor-pointer transition-all duration-200 group"
                onClick={() => setSelectedId(dest.id)}
                onMouseEnter={() => setSelectedId(dest.id)}
              >
                {/* Active radar ring */}
                {isSelected && (
                  <circle cx={dest.x} cy={dest.y} r="14" fill="#38bdf8" opacity="0.35" className="animate-ping" />
                )}

                {/* Pin base circle */}
                <circle 
                  cx={dest.x} 
                  cy={dest.y} 
                  r={isSelected ? "6" : "4"} 
                  fill={isSelected ? "#38bdf8" : "#94a3b8"} 
                  stroke={isSelected ? "#ffffff" : "#0f172a"} 
                  strokeWidth={isSelected ? "2" : "1"}
                  className="transition-all duration-150"
                  filter={isSelected ? "url(#glowEffect)" : undefined}
                />

                {/* Country label pin */}
                <g transform={`translate(${dest.x + 6}, ${dest.y + (dest.y > 400 ? -8 : 4)})`}>
                  <rect 
                    x="-2" 
                    y="-9" 
                    width={dest.name.length * 6.2 + 10} 
                    height="16" 
                    rx="4" 
                    fill={isSelected ? "#0f172a" : "#090d16"} 
                    stroke={isSelected ? "#38bdf8" : "#334155"} 
                    strokeWidth={isSelected ? "1.2" : "0.6"} 
                    opacity={isSelected ? "0.98" : "0.85"}
                  />
                  <text 
                    x="3" 
                    y="3" 
                    fill={isSelected ? "#ffffff" : "#cbd5e1"} 
                    fontSize="8.5" 
                    fontWeight={isSelected ? "bold" : "normal"}
                    fontFamily="sans-serif"
                  >
                    {dest.name}
                  </text>
                </g>
              </g>
            );
          })}
        </svg>

        {/* Floating Active Country Detail Card (Glassmorphism) */}
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-slate-900/95 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-slate-700 shadow-2xl space-y-3 z-10 animate-in fade-in duration-150">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">{activeDestination.flag}</span>
              <div>
                <h4 className="text-sm sm:text-base font-extrabold text-white flex items-center gap-2">
                  <span>{activeDestination.name}</span>
                </h4>
                <span className="text-[10px] font-semibold text-teal-400 uppercase tracking-wider">
                  {activeDestination.region} Trade Corridor
                </span>
              </div>
            </div>

            <span className="text-[11px] font-semibold text-slate-300 bg-slate-800 px-2.5 py-1 rounded-full border border-slate-700 flex items-center gap-1">
              <Ship className="w-3 h-3 text-cyan-400" />
              <span>{activeDestination.transitMode}</span>
            </span>
          </div>

          <div className="space-y-1.5 text-xs">
            <div className="text-slate-300">
              <span className="text-slate-500 font-semibold">Flagship Exports:</span>{" "}
              <strong className="text-teal-300 font-medium">{activeDestination.categories}</strong>
            </div>
            <div className="text-[11px] text-slate-400">
              <span className="text-slate-500 font-semibold">Compliance:</span>{" "}
              <span dangerouslySetInnerHTML={{ __html: activeDestination.compliance }} />
            </div>
          </div>

          <div className="pt-1 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80">
            <span>Direct dispatch from Vapi via Mumbai JNPT</span>
            <span className="text-teal-400 font-bold flex items-center gap-1">
              Active Trade Lane <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>

      {/* Country Quick Selector Pills Strip */}
      <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800/80">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center justify-between">
          <span>Click any destination to illuminate trade route:</span>
          <span className="text-teal-400 font-semibold">{filteredDestinations.length} Active Export Markets</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {filteredDestinations.map((dest) => (
            <button
              key={dest.id}
              onClick={() => setSelectedId(dest.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                selectedId === dest.id
                  ? "bg-teal-500 text-slate-950 shadow-md font-bold ring-2 ring-teal-400 scale-[1.02]"
                  : "bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              <span>{dest.flag}</span>
              <span>{dest.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

