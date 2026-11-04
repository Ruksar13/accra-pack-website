export interface StatItem {
  value: string;
  label: string;
  detail: string;
}

export interface ClientItem {
  name: string;
  category: string;
  tier: string;
  scope: string;
  badge: string;
  monogram: string;
  sector: "fmcg" | "pharma" | "industrial";
}

export interface CategoryItem {
  id: string;
  name: string;
  shortDesc: string;
  tagline: string;
  image: string;
  applications: string[];
  formats: string[];
  packaging: string[];
  compliance: string[];
  popularProducts: string[];
}

export interface SpotlightProduct {
  id: string;
  slug: string;
  name: string;
  bannerTitle: string;
  category: string;
  tagline: string;
  image: string;
  overview: string;
  features: string[];
  benefits: string[];
  manufacturingProcess: string[];
  formulationOptions: string[];
  packaging: string[];
  customisation: string[];
  regulatory: string;
  exportSupport: string;
  relatedProducts: { name: string; slug?: string }[];
  faqs: { q: string; a: string }[];
}

export interface TimelineMilestone {
  period: string;
  title: string;
  description: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  takeaway: string;
}

export const SITE_STATS: StatItem[] = [
  { value: "45+ Years", label: "Since 1979", detail: "Aerosol & liquid manufacturing pioneer" },
  { value: "2005", label: "Exporting Since", detail: "Long-term international relationships" },
  { value: "500+", label: "Ready Formulations", detail: "Fast-track R&D formulation library" },
  { value: "750+", label: "Products Developed", detail: "Formulations brought to commercial scale" },
  { value: "100+", label: "Customers Served", detail: "Global and Indian brand partners" },
  { value: "120+ Million", label: "Units Annual Capacity", detail: "Scalable automated high-speed filling" },
  { value: "5 Aerosol | 6 Liquid", label: "Filling Lines", detail: "11 dedicated production lines" },
];

export const INDUSTRIES_WE_SERVE = [
  { name: "Pharmaceutical & Healthcare Companies", icon: "Stethoscope" },
  { name: "Personal Care & Beauty Brands", icon: "Sparkles" },
  { name: "FMCG Companies", icon: "ShoppingBag" },
  { name: "Private Label & Retail Brands", icon: "Store" },
  { name: "Household & Hygiene Brands", icon: "Home" },
  { name: "Automotive & Industrial Companies", icon: "Car" },
  { name: "Startups & Emerging Brands", icon: "Rocket" },
  { name: "Exporters & Distributors", icon: "Globe" }
];

export const WHY_CHOOSE_ACCRA_PAC = [
  {
    title: "One Partner, Under One Roof",
    desc: "Formulation, filling, packaging, testing and export support in one facility.",
    icon: "Building2"
  },
  {
    title: "Ready Formulation Library",
    desc: "Launch faster with formulas already proven to work.",
    icon: "FlaskConical"
  },
  {
    title: "International Certifications",
    desc: "Manufacturing held to global quality standards.",
    icon: "Award"
  },
  {
    title: "Real Export Experience",
    desc: "Trusted by brands across the USA, Middle East, Africa and Asia.",
    icon: "Globe2"
  },
  {
    title: "Scalable Production",
    desc: "From pilot runs to full commercial volumes.",
    icon: "Factory"
  },
  {
    title: "Complete Traceability",
    desc: "Full documentation and quality control on every batch.",
    icon: "ShieldCheck"
  }
];

export const TRUSTED_CLIENTS: ClientItem[] = [
  { 
    name: "Reckitt Benckiser", 
    category: "Global Hygiene & Health", 
    tier: "Fortune 500 FMCG Leader",
    scope: "Surface Disinfectant & Antiseptic Aerosol Lines",
    badge: "15+ Years Contract Partner",
    monogram: "RB",
    sector: "fmcg"
  },
  { 
    name: "Henkel", 
    category: "Consumer Goods & Industrial", 
    tier: "Global Chemical & FMCG Giant",
    scope: "Specialty Industrial Aerosols & Sealants",
    badge: "Audited Quality Standards",
    monogram: "HNK",
    sector: "industrial"
  },
  { 
    name: "Colgate-Palmolive", 
    category: "Oral & Personal Care", 
    tier: "Global Personal Care Conglomerate",
    scope: "Deodorant & Antiperspirant Roll-On Filling",
    badge: "High-Speed Automation",
    monogram: "CP",
    sector: "fmcg"
  },
  { 
    name: "Hindustan Unilever", 
    category: "FMCG Conglomerate", 
    tier: "India's Leading FMCG Enterprise",
    scope: "Personal Grooming & Household Aerosols",
    badge: "Zero-Defect Water Bath",
    monogram: "HUL",
    sector: "fmcg"
  },
  { 
    name: "GSK Consumer", 
    category: "Pharmaceuticals & Healthcare", 
    tier: "Global Healthcare Innovator",
    scope: "Topical Medicated Sprays & OTC Formulations",
    badge: "WHO-GMP Validated",
    monogram: "GSK",
    sector: "pharma"
  },
  { 
    name: "3M", 
    category: "Industrial & Materials", 
    tier: "Multinational Materials Leader",
    scope: "Automotive Maintenance & Technical Sprays",
    badge: "NFPA 30B Safety Compliant",
    monogram: "3M",
    sector: "industrial"
  },
  { 
    name: "Godrej Consumer", 
    category: "Consumer Products", 
    tier: "Household FMCG Brand Leader",
    scope: "Air Care, Insect Repellents & Home Sprays",
    badge: "Continuous High-Volume Runs",
    monogram: "GCPL",
    sector: "fmcg"
  },
  { 
    name: "Philips Healthcare", 
    category: "Health & Personal Care", 
    tier: "Global Health Technology",
    scope: "Specialized Sanitization & Medical Solutions",
    badge: "Strict IP Confidentiality",
    monogram: "PHI",
    sector: "pharma"
  },
];

export const CERTIFICATIONS = [
  { code: "WHO-GMP", title: "WHO Good Manufacturing Practice", type: "Pharma Grade" },
  { code: "US FDA", title: "US FDA Registered Facility", type: "Global Export" },
  { code: "ISO 22716", title: "Cosmetics GMP Standard", type: "Personal Care" },
  { code: "ISO 9001", title: "Quality Management System", type: "Operations" },
  { code: "ISO 14001", title: "Environmental Management", type: "Sustainability" },
  { code: "ISO 45001", title: "Occupational Health & Safety", type: "Safety" },
  { code: "NFPA 30B", title: "Aerosol Manufacture & Storage", type: "Fire Safety" },
  { code: "EcoVadis", title: "Sustainability Assessment", type: "ESG" },
  { code: "SEDEX", title: "Ethical Trade Audited", type: "Supply Chain" },
  { code: "Form 25-D", title: "Ayurvedic & Unani Drug License", type: "Herbal Healthcare" },
];

export const PRODUCT_CATEGORIES: CategoryItem[] = [
  {
    id: "pharma-otc",
    name: "Pharmaceutical OTC & Healthcare",
    tagline: "Regulated pain relief, antiseptics, and therapeutic aerosols",
    image: "/images/products/pain-relief-spray.jpg",
    shortDesc: "Topical pain relief, antiseptic first aid, antifungals, and medical-grade sprays manufactured under WHO-GMP and US FDA standards.",
    applications: ["Pain & joint management", "First aid & burn care", "Antifungal treatment", "Topical anesthesia", "Nasal hygiene & scalp care"],
    formats: ["Menthol & Lidocaine Pain Sprays", "Povidone-Iodine Antiseptics", "Miconazole Powder Sprays", "Minoxidil Topical Solution", "Nasal Saline Sprays"],
    packaging: ["Aerosol Cans (with metered valves)", "Dry Powder Sprays", "Roll-On Bottles", "Pump Sprays"],
    compliance: ["WHO-GMP", "US FDA Registered", "21 CFR Compliant", "Batch Traceability"],
    popularProducts: ["Menthol 10% Pain Spray", "Lidocaine 4% Antiseptic", "Tolnaftate 1% Foot Spray", "Saline Mist"]
  },
  {
    id: "personal-care",
    name: "Personal Care & Grooming",
    tagline: "Premium daily grooming, deodorants, and body care",
    image: "/images/products/deodorant-spray.jpg",
    shortDesc: "High-volume aerosol and roll-on filling for deodorants, body sprays, shaving foam, and intimate care on dedicated ISO 22716 lines.",
    applications: ["Deodorant & antiperspirant", "Shaving & grooming", "Intimate hygiene", "Body freshness"],
    formats: ["Aerosol Deodorants", "Roll-On Antiperspirants", "Shaving Foams & Gels", "After-Shave Mists", "Foaming Washes"],
    packaging: ["Aluminium & Steel Cans (1.5 oz - 11 oz)", "Roll-On Packs", "Foam Actuator Cans", "Pump Sprays"],
    compliance: ["ISO 22716 (Cosmetic GMP)", "Allergen-Tested", "Microbiology-Tested"],
    popularProducts: ["Long-Lasting Body Spray", "Sensitive Shave Foam", "Roll-on Deodorant", "Cleansing Foam"]
  },
  {
    id: "hair-care",
    name: "Hair Care & Styling",
    tagline: "Salon-grade styling sprays, mousses, and treatments",
    image: "/images/products/hair-spray.jpg",
    shortDesc: "Advanced styling aerosols and liquids with customizable hold strengths, fine spray distribution, and treatment-grade active delivery.",
    applications: ["Daily hold & finishing", "Volume & texturizing", "Dry shampooing", "Detangling & conditioning"],
    formats: ["Hair Styling Sprays (Light/Med/Strong)", "Hair Styling Mousse", "Dry Shampoo", "Oil Sheen Sprays", "Leave-in Conditioners"],
    packaging: ["Aerosol Cans with precision actuators", "Foam Dispensers", "Trigger Sprays", "Bottles"],
    compliance: ["ISO 22716", "Aerosol VOC Compliance", "Compatibility Tested"],
    popularProducts: ["Extreme Hold Hair Spray", "Instant Dry Shampoo", "Volumizing Mousse", "Keratin Mist"]
  },
  {
    id: "ayurveda-herbal",
    name: "Ayurveda & Herbal Care",
    tagline: "Licensed herbal formulations with natural efficacy",
    image: "/images/products/herbal-spray.jpg",
    shortDesc: "Natural botanical sprays and roll-ons produced under government Ayurvedic drug license (Form 25-D) with strict batch testing.",
    applications: ["Herbal pain management", "Natural deodorizing", "Oral freshness", "Plant-based insect repellency"],
    formats: ["Herbal Pain Relief Sprays", "Natural Deodorants", "Herbal Mouth & Breath Fresheners", "Citronella Mosquito Sprays"],
    packaging: ["Aerosol Cans", "Pump Sprays", "Roll-On Bottles", "Pocket Sprays"],
    compliance: ["Ayush Form 25-D Certified", "Heavy Metal Screened", "WHO-GMP"],
    popularProducts: ["Gandhapura & Nilgiri Pain Spray", "Herbal Deo Mist", "Clove Breath Spray"]
  },
  {
    id: "fragrances",
    name: "Fragrances & Perfumes",
    tagline: "Fine perfumery, pocket scents, and body colognes",
    image: "/images/products/perfume-spray.jpg",
    shortDesc: "Precision blending of alcohol and water-based fragrance profiles with maceration and filtration suited for luxury and mass markets.",
    applications: ["Fine fragrance gifting", "Daily body colognes", "Pocket perfumes", "Travel mists"],
    formats: ["Eau de Parfum", "Body Perfumes", "Pocket Perfume Sprays", "Colognes"],
    packaging: ["Premium Glass Bottles", "Pocket Pen Sprays", "Aerosol Body Spray Cans"],
    compliance: ["IFRA-Compliant Formulations", "Flammability Tested", "ISO 22716"],
    popularProducts: ["Pocket EDP Sprays", "Luxury Body Mist", "Sport Cologne"]
  },
  {
    id: "air-care",
    name: "Air Care & Room Fresheners",
    tagline: "Dry and water-based room freshening & odor neutralizers",
    image: "/images/products/air-freshener.jpg",
    shortDesc: "Continuous and metered aerosol room fresheners formulated for long-lasting diffusion and true molecular odor elimination.",
    applications: ["Home fragrance", "Metered institutional dispensers", "Shoe & fabric freshening", "Odor neutralization"],
    formats: ["Dry Propellant Room Sprays", "Metered Refill Sprays", "Water-Based Air Fresheners", "Fabric Deodorizers"],
    packaging: ["Aerosol Cans (Standard & Metered)", "Trigger Sprays", "Refill Canisters"],
    compliance: ["VOC Regulatory Compliance", "Stability Chamber Tested"],
    popularProducts: ["Dry Air Freshener", "Automatic Dispenser Refill", "Linen Odor Neutralizer"]
  },
  {
    id: "household-cleaning",
    name: "Household Cleaning",
    tagline: "Specialized cleaners, degreasers, and surface sprays",
    image: "/images/products/cleaning-spray.jpg",
    shortDesc: "High-performance surface, kitchen, and glass cleaners available in concentrate and ready-to-use aerosol and trigger formats.",
    applications: ["Surface & glass cleaning", "Kitchen degreasing", "Upholstery care", "Specialty appliance cleaning"],
    formats: ["Multi-Purpose Cleaners", "Foaming Kitchen Degreasers", "Glass & Mirror Cleaners", "Fabric Spot Removers"],
    packaging: ["Aerosol Cans with foam actuators", "Ergonomic Trigger Sprays", "Refill Bottles"],
    compliance: ["ISO 9001", "Material Compatibility Tested"],
    popularProducts: ["Foaming Oven Cleaner", "Streak-Free Glass Spray", "Citrus Degreaser"]
  },
  {
    id: "disinfection-hygiene",
    name: "Disinfection & Hygiene",
    tagline: "Institutional and domestic antimicrobial solutions",
    image: "/images/products/cleaning-spray.jpg",
    shortDesc: "Fast-acting sanitizers and surface disinfectants with proven kill-rate efficacy manufactured to strict quality standards.",
    applications: ["Touch-point sanitization", "Hand hygiene", "Toilet & washroom hygiene", "Hospitality sanitization"],
    formats: ["Aerosol Disinfectant Sprays", "Foam Hand Sanitizers", "Liquid Toilet Seat Sprays", "Alcohol Cleansing Mists"],
    packaging: ["Aerosol Cans", "Pump Dispensers", "Pocket Spritzers"],
    compliance: ["Efficacy Validated", "WHO Formulation Compliant"],
    popularProducts: ["All-Surface Disinfectant Mist", "Instant Foam Sanitizer", "Toilet Seat Sanitizer"]
  },
  {
    id: "insect-repellents",
    name: "Insect Repellents",
    tagline: "Repellent and household pest sprays for personal and home use",
    image: "/images/products/herbal-spray.jpg",
    shortDesc: "Aerosols engineered for mosquito, crawling insect, and pest defense with specialized valves for directional or wide sprays.",
    applications: ["Personal mosquito protection", "Crawling insect knockout", "Bedbug & ant control", "Outdoor barrier sprays"],
    formats: ["Mosquito Repellent", "Lizard Spray", "Multi Insect Spray", "Bedbug Spray", "Ant Spray", "Rat Repellent Spray"],
    packaging: ["Aerosol cans", "Pump sprays", "Trigger sprays"],
    compliance: ["Insecticide Regulatory Compliant", "NFPA 30B Storage"],
    popularProducts: ["Mosquito Repellent", "Multi Insect Spray", "Rat Repellent Spray"]
  },
  {
    id: "automotive-care",
    name: "Automotive Care",
    tagline: "Vehicle care aerosols filled to NFPA 30B safety standards",
    image: "/images/products/automotive-spray.jpg",
    shortDesc: "Technical aerosols formulated for vehicle maintenance, degreasing, brake cleaning, and interior dashboard detailing.",
    applications: ["Interior cleaning", "Brake cleaning", "Choke & carburetor cleaning", "Dashboard & tire care"],
    formats: ["Automotive Interior Cleaners", "Brake Cleaners", "Choke & Carburetor Cleaners", "Dashboard Care", "Tire Care"],
    packaging: ["Technical-grade aerosol cans with valves and actuators suited to flammable formulations"],
    compliance: ["NFPA 30B Safety", "High Pressure Tested"],
    popularProducts: ["Brake Cleaners", "Choke & Carburetor Cleaners", "Dashboard Care"]
  },
  {
    id: "industrial-maintenance",
    name: "Industrial & Maintenance",
    tagline: "Technical aerosols for equipment upkeep and protection",
    image: "/images/manufacturing/plant-infrastructure.jpg",
    shortDesc: "Industrial-grade maintenance aerosols designed to withstand harsh shop environments, high friction, and extreme temperatures.",
    applications: ["Equipment upkeep", "Corrosion protection", "Industrial cleaning", "Refrigerant management"],
    formats: ["Lubricants", "Penetrating Oils", "Silicone Sprays", "Rust Protection", "Specialty Technical Aerosols", "Refrigerant Aerosols"],
    packaging: ["Industrial-grade aerosol cans with valves and actuators suited to higher-pressure or flammable formulations"],
    compliance: ["NFPA 30B Level 3 Aerosol", "SDS / Hazmat Certified"],
    popularProducts: ["Lubricants", "Penetrating Oils", "Silicone Sprays"]
  },
  {
    id: "professional-medical",
    name: "Medical Device & Professional Care",
    tagline: "Sprays for clinics and healthcare professionals",
    image: "/images/manufacturing/qc-lab-testing.jpg",
    shortDesc: "Specialized clinical sprays for dental equipment maintenance and rapid sports recovery cooling under pharma-grade control.",
    applications: ["Dental handpiece maintenance", "Clinical cooling", "Professional medical equipment"],
    formats: ["Dental Lubricant Spray", "Cooling Spray"],
    packaging: ["Aerosol cans", "Pump sprays"],
    compliance: ["WHO-GMP", "Cleanroom Filling Controls"],
    popularProducts: ["Dental Lubricant Spray", "Cooling Spray"]
  }
];

export const SPOTLIGHT_PRODUCTS: SpotlightProduct[] = [
  {
    id: "pain-relief-spray",
    slug: "pain-relief-spray",
    name: "Pain Relief Spray",
    bannerTitle: "Pain Relief Spray Manufacturer — Contract & Private Label Manufacturing",
    category: "Pharmaceutical OTC & Healthcare",
    tagline: "Fast-acting topical analgesia with fast evaporation",
    image: "/images/products/pain-relief-spray.jpg",
    overview: "Accra Pac manufactures topical pain relief sprays, including menthol, methyl salicylate, and diclofenac-based formulations, for OTC healthcare brands, pharmacy chains, and private label wellness companies under WHO-GMP certified and US FDA registered manufacturing.",
    features: [
      "Menthol and diclofenac formulation options",
      "Aerosol spray or roll-on format delivery",
      "Fast-evaporating, non-greasy finish options",
      "360-degree all-angle inverted discharge valve"
    ],
    benefits: [
      "Launch instantly with our validated formula library instead of starting development from zero",
      "Backed by full batch-traceable manufacturing and export-ready documentation",
      "Tested for deep muscle relief, joint ache, and athletic recovery"
    ],
    manufacturingProcess: [
      "Formulation Selection & Active Review",
      "Bench Prototype Sampling",
      "6-Chamber Stability Testing",
      "Customer Sample Approval",
      "Commercial High-Speed Filling",
      "Analytical GC/HPLC Quality Testing",
      "Secondary Carton Packaging",
      "Export Documentation & Dispatch"
    ],
    formulationOptions: [
      "Menthol Pain Relief Spray (10–13%)",
      "Methyl Salicylate + Menthol + Camphor Triple Action",
      "Lidocaine 4% Dry Pain Relief Spray",
      "Lidocaine 4% + Menthol 1% Dual Action",
      "Menthol Pain Relief Roll-On (Liquid Liniment)"
    ],
    packaging: [
      "Aluminium & Tinplate Cans (50ml to 150ml)",
      "Continuous and metered spray valves",
      "Roll-on applicator bottles",
      "Child-resistant or tamper-evident safety caps"
    ],
    customisation: [
      "Fragrance masking (mint, eucalyptus, wintergreen)",
      "Spray cone pattern and droplet density",
      "Can height, diameter, and custom cap color",
      "Bespoke label artwork and multilingual compliance"
    ],
    regulatory: "WHO-GMP certified facility. US FDA registered. 21 CFR compliant. Batch COA and SDS provided.",
    exportSupport: "Full documentation and UN-certified export packaging support for pain relief spray shipments to regulated markets, including the United States.",
    relatedProducts: [
      { name: "Ayurvedic Herbal Pain Relief Spray", slug: "herbal-pain-relief-spray" },
      { name: "Minoxidil 5% Regrowth Foam", slug: "minoxidil-foam" },
      { name: "Povidone-Iodine Antiseptic Spray" }
    ],
    faqs: [
      {
        q: "Can I use my own pain relief formulation, or must I choose one of yours?",
        a: "Either. We can manufacture your submitted formula via Technology Transfer, or you can select and adapt a proven formulation from our 500+ ready R&D library."
      },
      {
        q: "Is diclofenac spray export-compliant for the US market?",
        a: "This depends on the specific regulatory classification in your target destination market. Our in-house regulatory affairs team will confirm monograph requirements and dossier filings for your target country."
      }
    ]
  },
  {
    id: "minoxidil-foam",
    slug: "minoxidil-foam",
    name: "Minoxidil 5% Regrowth Foam",
    bannerTitle: "Minoxidil Foam Manufacturer — Hair Regrowth Treatment Contract Manufacturing",
    category: "Scalp & Hair Treatment",
    tagline: "Targeted hair regrowth foam with precise dosing",
    image: "/images/products/minoxidil-foam.jpg",
    overview: "Accra Pac manufactures minoxidil-based hair regrowth foam, an advanced treatment-category aerosol product requiring precise foam density, thermal collapse kinetics, and strict regulatory documentation, supported by in-house GC/HPLC testing and 6 flame-proof stability chambers.",
    features: [
      "Stable micro-foam consistency that collapses on skin temperature contact",
      "Controlled dosage valve system for precise 1g scalp dosing",
      "Formulated for clean scalp application without dripping into eyes",
      "Available in standard 5% Men's and 2% Women's treatment concentrations"
    ],
    benefits: [
      "Enter the high-growth hair restoration market with an experienced aerosol foam manufacturer",
      "Propylene-glycol-free carrier options to reduce scalp irritation and flaking",
      "Full batch-to-batch assay consistency verified by HPLC"
    ],
    manufacturingProcess: [
      "Formulation Validation & Active Solubilization",
      "Foam Thermal Stability Testing (40°C/75% RH)",
      "Sample Evaluation & Dose Calibration",
      "Client Approval & Component Procurement",
      "Cleanroom Commercial Aerosol Filling",
      "HPLC Assay & Microbial Release Testing",
      "Tamper-Evident Secondary Packaging",
      "Global Hazmat Logistics Dispatch"
    ],
    formulationOptions: [
      "Minoxidil 5% Standard Treatment Foam",
      "Minoxidil 2% Treatment Foam (Women's Line)",
      "Custom active combinations (Minoxidil + Finasteride where permitted)",
      "Fragrance-free scalp soothing base"
    ],
    packaging: [
      "60g (1-Month Supply) and 100g Aerosol Foam Dispensers",
      "Specialized downward foam actuator nozzle",
      "Tamper-evident child-resistant safety caps"
    ],
    customisation: [
      "Active concentration tiers",
      "Fragrance-free or delicate scalp scents",
      "Can diameter and lithograph branding",
      "Custom secondary outer cartons and patient leaflet insertion"
    ],
    regulatory: "WHO-GMP certified facility. US FDA registered. 21 CFR compliant.",
    exportSupport: "Technical dossier preparation, Certificate of Analysis (COA), Safety Data Sheets (SDS), and UN-certified export shipping cartons.",
    relatedProducts: [
      { name: "Professional Hair Styling Spray", slug: "hair-spray" },
      { name: "Pain Relief Spray", slug: "pain-relief-spray" },
      { name: "Volumizing Hair Mousse" }
    ],
    faqs: [
      {
        q: "How is minoxidil foam different to manufacture compared to standard hair mousse?",
        a: "Minoxidil foam is a pharmaceutical treatment aerosol requiring tighter active solubilization, controlled dose dispensing, and strict HPLC assay verification compared to cosmetic mousses."
      },
      {
        q: "Can you develop a fragrance-free version for sensitive scalps?",
        a: "Yes. Fragrance-free and low-alcohol base options are part of our standard R&D capability."
      }
    ]
  },
  {
    id: "shaving-foam",
    slug: "shaving-foam",
    name: "Rich Conditioning Shaving Foam",
    bannerTitle: "Shaving Foam Manufacturer — Aerosol Contract Manufacturing",
    category: "Personal Care & Grooming",
    tagline: "Dense cushion foam with skin-nourishing emollients",
    image: "/images/products/shaving-foam.jpg",
    overview: "Accra Pac manufactures shaving foam and shaving gel across can sizes from 1.5 oz to 11 oz for global personal care brands, grooming ranges, and private label supermarket lines, manufactured on cosmetic-GMP certified lines (ISO 22716).",
    features: [
      "Rich, stable foam density that cushions razor friction",
      "Multiple can size options from 1.5 oz travel to 11 oz family retail",
      "Rust-resistant internal epoxy-phenolic can lining for high-humidity bathrooms",
      "Complementary after-shave lotion and splash manufacturing available"
    ],
    benefits: [
      "Round out a full men's grooming range under one manufacturing roof",
      "Formulated with aloe vera, menthol, and skin-conditioning emollients",
      "High-speed production lines ensuring competitive unit economics"
    ],
    manufacturingProcess: [
      "Formulation Compounding & Emulsification",
      "Foam Expansion & Density Calibration",
      "Can Lining Corrosion Testing",
      "Customer Sample Sign-Off",
      "Automated High-Speed Gassing & Filling",
      "100% Water Bath Leak Detection",
      "Actuator & Cap Assembly",
      "Packaging & Dispatch"
    ],
    formulationOptions: [
      "Classic Moisturizing Shaving Foam",
      "Sensitive Skin Shaving Foam (Chamomile & Vitamin E)",
      "Cooling Menthol Fresh Shaving Foam",
      "Self-Foaming Shaving Gel (Post-Foaming Aerosol)"
    ],
    packaging: [
      "1.5 oz, 3 oz, 7 oz, and 11 oz Aluminium & Tinplate Cans",
      "Ergonomic wide-press foam actuators",
      "Over-caps in custom brand pantone shades"
    ],
    customisation: [
      "Fragrance profiling (citrus, sandalwood, ocean fresh)",
      "Foam density and expansion velocity",
      "Custom can size and printed lithography artwork"
    ],
    regulatory: "ISO 22716 Cosmetics GMP certified. ISO 9001/14001/45001. WHO-GMP facility.",
    exportSupport: "Export packaging and documentation support for international grooming and retail supermarket brands.",
    relatedProducts: [
      { name: "Multi-Format Deodorant & Body Spray", slug: "deodorant-manufacturer" },
      { name: "Professional Hair Styling Spray", slug: "hair-spray" },
      { name: "After-Shave Balm & Lotion" }
    ],
    faqs: [
      {
        q: "What can sizes are available for shaving foam?",
        a: "We manufacture across can sizes from 1.5 oz (travel format) up to 11 oz (large retail size)."
      },
      {
        q: "Can you manufacture a sensitive-skin shaving foam formulation?",
        a: "Yes. Fragrance-free or hypoallergenic sensitive-skin formulas with soothing botanicals like aloe vera are available from our ready library."
      }
    ]
  },
  {
    id: "deodorant-manufacturer",
    slug: "deodorant-manufacturer",
    name: "Multi-Format Deodorants & Antiperspirants",
    bannerTitle: "Deodorant Manufacturer — Aerosol, Roll-On & No-Gas Contract Manufacturing",
    category: "Personal Care & Grooming",
    tagline: "Aerosol, roll-on, and no-gas fine fragrance under one roof",
    image: "/images/products/deodorant-spray.jpg",
    overview: "Accra Pac manufactures aerosol, roll-on, and 0% gas deodorants and antiperspirants — one of our highest-volume production categories. With dedicated automated roll-on lines alongside 5 aerosol lines, brands can unify fragrance lines across multiple formats with zero vendor fragmentation.",
    features: [
      "Aerosol, roll-on, and 0% gas fine fragrance formats",
      "Alcohol-based and zero-alcohol skin-friendly formulations",
      "Antiperspirant (aluminium salt) and standard deodorant options",
      "Up to 48-hour odor and sweat protection efficacy"
    ],
    benefits: [
      "Manufacture all 3 deodorant formats through one single qualified partner",
      "Direct relationships with international IFRA fragrance houses",
      "High-speed filling lines producing millions of units monthly"
    ],
    manufacturingProcess: [
      "Fragrance Maceration & Active Compounding",
      "Aerosol & Roll-On Line Setup",
      "Stability & Can-Lining Validation",
      "Customer Benchmark Approval",
      "High-Speed Automated Filling",
      "Ball Insertion (Roll-On) & Gas Crimping (Aerosol)",
      "In-Line IPQC Weight Check",
      "Carton Packing & Global Shipping"
    ],
    formulationOptions: [
      "Classic Aerosol Body Spray (Dry Spray)",
      "0% Gas Perfumed Body Spray (High Concentration)",
      "Antiperspirant Roll-On (Liquid Emulsion)",
      "Natural / Aluminium-Free Deodorant Mist"
    ],
    packaging: [
      "150ml and 200ml Aerosol Cans",
      "50ml Roll-On Bottles with leak-proof roller balls",
      "100ml to 120ml No-Gas Pump Sprays"
    ],
    customisation: [
      "Bespoke fragrance development",
      "Format combination (aerosol + roll-on duo packs)",
      "Can printing and embossed cap styling"
    ],
    regulatory: "ISO 22716 Cosmetics GMP. SEDEX and EcoVadis rated. WHO-GMP facility.",
    exportSupport: "Dangerous Goods export packaging and shipping documentation to the US, Middle East, Africa, and Asia.",
    relatedProducts: [
      { name: "Rich Conditioning Shaving Foam", slug: "shaving-foam" },
      { name: "Fine Fragrances & Perfumes" },
      { name: "Dry & Water-Based Air Fresheners", slug: "air-freshener" }
    ],
    faqs: [
      {
        q: "Can I launch the same fragrance across aerosol, roll-on, and no-gas formats?",
        a: "Yes. This is one of our most frequent private label requests, managed as one synchronized formulation project across all three packaging formats."
      },
      {
        q: "Do you manufacture antiperspirant formulations, or only standard deodorants?",
        a: "Both are standard capabilities in our production schedule."
      }
    ]
  },
  {
    id: "air-freshener",
    slug: "air-freshener",
    name: "Dry & Water-Based Air Fresheners",
    bannerTitle: "Air Freshener Manufacturer — Aerosol & Water-Based Contract Manufacturing",
    category: "Air Care & Home Fragrance",
    tagline: "Zero-fallout dry room spray & metered commercial refills",
    image: "/images/products/air-freshener.jpg",
    overview: "Accra Pac manufactures dry propellant and water-based room fresheners and molecular odor eliminators for household retail brands and commercial dispenser systems, using both aerosol and automated trigger spray filling lines.",
    features: [
      "Dry propellant formulation options with zero wet fallout on floors",
      "Metered valve capability (3,000+ sprays per 250ml can)",
      "True molecular odor-neutralizing active ingredients",
      "Wide portfolio of over 100 fine home fragrance scents"
    ],
    benefits: [
      "Manufacture across your complete air care range under one roof",
      "Cost-effective supply chain for high-volume retail distribution",
      "Formulations tested for long airborne suspension time"
    ],
    manufacturingProcess: [
      "Fragrance Blending & Carrier Formulation",
      "Metered Valve & Actuator Fitting",
      "Hot Water Bath Leak Testing",
      "Fragrance Suspension Analysis",
      "Automated High-Speed Filling",
      "QC Spray Cone Inspection",
      "Shrink-Wrapping & Master Cartons",
      "Logistics Dispatch"
    ],
    formulationOptions: [
      "Dry Propellant Aerosol Room Spray",
      "Automatic Metered Dispenser Refill Canister",
      "Aqueous Fine Mist Room Freshener",
      "Fabric & Upholstery Odor Eliminator"
    ],
    packaging: [
      "250ml Metered Refill Cans",
      "300ml Standard Household Aerosol Cans",
      "500ml Ergonomic Trigger Sprays"
    ],
    customisation: [
      "Custom fragrance formulation (floral, citrus, oud, fresh linen)",
      "Spray pattern (wide cone vs directional mist)",
      "Can size, actuator color, and branded carton design"
    ],
    regulatory: "NFPA 30B compliant manufacture and storage. ISO 9001/14001/45001.",
    exportSupport: "Dangerous Goods export packaging and customs documentation for international distribution.",
    relatedProducts: [
      { name: "Multi-Format Deodorants", slug: "deodorant-manufacturer" },
      { name: "Household Cleaning Sprays" },
      { name: "Multi-Insect Repellent Sprays" }
    ],
    faqs: [
      {
        q: "What is the difference between dry and water-based air freshener formulations?",
        a: "Dry formulations use propellant gas for micro-fine airborne suspension without wet droplets; water-based formulations use aqueous carriers best suited for certain natural claims."
      },
      {
        q: "Can you manufacture metered refills for automatic commercial dispensers?",
        a: "Yes. We fit specialized metered dosage valves engineered for 3,000+ actuations."
      }
    ]
  },
  {
    id: "hair-spray",
    slug: "hair-spray",
    name: "Professional Hair Styling Spray",
    bannerTitle: "Hair Spray Manufacturer — Styling & Treatment Aerosol Contract Manufacturing",
    category: "Hair Care & Styling",
    tagline: "Micro-diffused hold with extreme humidity resistance",
    image: "/images/products/hair-spray.jpg",
    overview: "Accra Pac manufactures hair styling sprays, dry shampoo, and hair treatment aerosols for professional salon brands and retail personal care ranges, with formulation options spanning flexible hold to ultra-freeze.",
    features: [
      "Micro-fine spray mist that dries rapidly without stickiness",
      "Humidity-resistant polymer matrix that locks out frizz",
      "Dry shampoo and oil-sheen spray formats",
      "Easily brushes out without leaving white flaky residue"
    ],
    benefits: [
      "Build a complete hair styling aerosol line through a cosmetic-GMP certified partner",
      "Low VOC compliance for international market distribution",
      "Scalable commercial production on high-speed lines"
    ],
    manufacturingProcess: [
      "Polymer Resin & Active Compounding",
      "Spray Cone Pattern Calibration",
      "Can Corrosion & Valve Compatibility",
      "Benchmark Salon Performance Testing",
      "Commercial Inline Aerosol Filling",
      "100% Leak Testing Water Bath",
      "Precision Actuator Assembly",
      "Packaging & Export Staging"
    ],
    formulationOptions: [
      "Flexible Natural Hold Hair Spray",
      "Firm Studio Hold Hair Spray",
      "Ultra-Freeze Extreme Hold Salon Spray",
      "Oil-Absorbing Instant Dry Shampoo",
      "Leave-in Keratin Conditioning Mist"
    ],
    packaging: [
      "200ml to 400ml Salon Aluminium & Tinplate Cans",
      "Precision mist actuators with ergonomic caps"
    ],
    customisation: [
      "Hold strength level and shine finish",
      "Fragrance masking and subtle perfume notes",
      "Can size, matte/gloss lithography, and custom over-caps"
    ],
    regulatory: "ISO 22716 Cosmetics GMP certified. ISO 9001/14001/45001. WHO-GMP facility.",
    exportSupport: "UN-certified packaging and dangerous goods shipping documentation for international hair care brand launches.",
    relatedProducts: [
      { name: "Minoxidil 5% Regrowth Foam", slug: "minoxidil-foam" },
      { name: "Volumizing Hair Mousse" },
      { name: "Multi-Format Deodorants", slug: "deodorant-manufacturer" }
    ],
    faqs: [
      {
        q: "Can you manufacture a full hold-strength range (light, medium, strong) under one brand?",
        a: "Yes. Developing light, medium, and ultra-strong hold variants from one fragrance profile is a standard private label project."
      },
      {
        q: "Do you manufacture dry shampoo?",
        a: "Yes. We manufacture oil-absorbing dry shampoo in both aerosol spray and powder spray formats."
      }
    ]
  },
  {
    id: "herbal-pain-spray",
    slug: "herbal-pain-relief-spray",
    name: "Ayurvedic Herbal Pain Relief Spray",
    bannerTitle: "Herbal Pain Relief Spray Manufacturer — Ayurvedic & Natural Contract Manufacturing",
    category: "Ayurveda & Herbal",
    tagline: "Traditional botanical actives in modern aerosol format",
    image: "/images/products/herbal-spray.jpg",
    overview: "Accra Pac manufactures herbal and Ayurvedic pain relief sprays formulated with natural active botanical oils (Gandhapura, Nilgiri, Pudina, Dalchini) and manufactured under our government GMP certification for Ayurveda, Siddha & Unani drug products (Form 25-D licence).",
    features: [
      "100% natural herbal therapeutic actives",
      "Fast penetration for joint stiffness, muscle pain, and sports sprains",
      "Modern aerosol delivery with 360-degree spray valve",
      "Manufactured under dedicated Ayush Form 25-D drug license"
    ],
    benefits: [
      "Enter the booming natural wellness category with authentic drug licensing",
      "No synthetic NSAIDs — clean natural marketing positioning",
      "Validated shelf-life stability across 6 flame-proof chambers"
    ],
    manufacturingProcess: [
      "Ayurvedic Botanical Oil Extraction & Blending",
      "Active Assay & Heavy Metal Screening",
      "Stability Chamber Testing",
      "Sampling & Sensory Feedback",
      "Commercial Pressurized Filling",
      "In-Line Crimp & Pressure Testing",
      "Carton Packaging with Leaflet",
      "Batch Release & Shipping"
    ],
    formulationOptions: [
      "Classic Ayurvedic Pain Oil Blend Spray",
      "Joint Comfort Wintergreen (Gandhapura) Spray",
      "Herbal Pain Relief Roll-On Liniment",
      "Sports Cryo-Herbal Cooling Mist"
    ],
    packaging: [
      "50g and 100g Aluminium Cans with 360-degree inverted spray valve",
      "Roll-on applicator bottles"
    ],
    customisation: [
      "Botanical ingredient selection",
      "Natural aroma balancing",
      "Can size, label artwork, and Ayurvedic claim substantiation"
    ],
    regulatory: "GMP certified for Ayurveda, Siddha & Unani drugs (Form 25-D). ISO 9001/14001/45001. WHO-GMP facility.",
    exportSupport: "Documentation support for herbal/Ayurvedic product exports with destination market regulatory verification.",
    relatedProducts: [
      { name: "Pain Relief Spray", slug: "pain-relief-spray" },
      { name: "Herbal Deodorants" },
      { name: "Citronella Mosquito Repellent" }
    ],
    faqs: [
      {
        q: "Do herbal pain relief sprays require different licensing than standard pain relief sprays?",
        a: "Yes. Ayurvedic drug products require a separate drug manufacturing licence in India (Form 25-D), which our Vapi facility already holds."
      },
      {
        q: "Can I develop a completely new herbal formulation rather than using an existing one?",
        a: "Yes. Our R&D team supports bespoke Ayurvedic formulation development from concept through validated commercial formula."
      }
    ]
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    period: "1979",
    title: "Established in Vapi",
    description: "Accra Pac is established in Vapi, Gujarat, with one of India's first state-of-the-art automatic aerosol plants."
  },
  {
    period: "1980s–1990s",
    title: "Propellant & Multi-Format Expansion",
    description: "Introduces ozone-friendly LPG propellant technology and expands into liquids, creams, lotions and semi-solids."
  },
  {
    period: "2005",
    title: "First Major Export Order",
    description: "Ships its first major export order and begins long-term relationships with international markets."
  },
  {
    period: "2010s",
    title: "Filling Lines & Analytical Testing",
    description: "Adds filling lines, a dedicated roll-on line, BOV capability and in-house analytical testing."
  },
  {
    period: "2020s",
    title: "Certifications & Global Credentials",
    description: "Earns ISO, WHO-GMP and US FDA credentials and expands exports across the Middle East, Africa and Asia."
  },
  {
    period: "Today",
    title: "End-to-End Global Partner",
    description: "Supports brands from first formulation to global export."
  }
];

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    id: "how-aerosol-contract-manufacturing-works",
    title: "How Aerosol Contract Manufacturing Works: From Formulation to Filling",
    category: "Aerosol Technology",
    readTime: "5 min read",
    summary: "An engineering look inside the aerosol filling process: bulk formulation compounding, can sorting, valve crimping, propellant gassing, and underwater leak testing.",
    takeaway: "Understand critical quality checkpoints including crimp dimension verification and pressure testing to ensure consumer safety and product shelf-life."
  },
  {
    id: "oem-vs-private-label",
    title: "OEM vs. Private Label Manufacturing: Strategic Comparison for Consumer Brands",
    category: "Product Development",
    readTime: "4 min read",
    summary: "Compare the economics, timeline, and intellectual property implications of launching with a custom-developed formula versus adopting a turn-key ready formulation.",
    takeaway: "Ready R&D formulations save 6-9 months of testing; custom OEM development provides proprietary brand differentiation for long-term IP value."
  },
  {
    id: "international-buyers-guide",
    title: "What International Buyers Look for in an Aerosol Manufacturing Partner",
    category: "Export & Regulatory",
    readTime: "6 min read",
    summary: "Essential audit criteria for global sourcing teams: FDA registration, NFPA 30B compliance, batch traceability, and dangerous goods transport certifications.",
    takeaway: "Documentation rigor (COA, SDS, stability data) is just as critical as high-speed line capacity when supplying regulated North American and European markets."
  },
  {
    id: "bov-bag-on-valve-explained",
    title: "BOV (Bag-on-Valve) Technology Explained: When Does Your Formulation Need It?",
    category: "Packaging Innovations",
    readTime: "4 min read",
    summary: "How Bag-on-Valve keeps product completely separated from the eco-friendly propellant gas, enabling 99% product evacuation and 360-degree spraying.",
    takeaway: "BOV is ideal for sensitive pharmaceutical creams, preservative-free cosmetics, viscous gels, and formulations that cannot contact hydrocarbons."
  },
  {
    id: "exporting-aerosols-from-india",
    title: "Exporting Aerosol Products from India: Essential Hazmat & Regulatory Documentation",
    category: "Export & Logistics",
    readTime: "5 min read",
    summary: "A practical guide to international Dangerous Goods (DG) shipping, IMDG maritime standards, UN-certified carton packaging, and export customs clearance.",
    takeaway: "Partnering with an experienced exporter prevents container rejection, port customs delays, and compliance penalties."
  },
  {
    id: "from-idea-to-shelf-timeline",
    title: "From Idea to Shelf: Timeline and Phases of Custom Formulation Development",
    category: "Product Development",
    readTime: "5 min read",
    summary: "A roadmap of product development: initial brief, prototype bench sampling, 3-month accelerated stability testing, packaging compatibility, and pilot scale-up.",
    takeaway: "Accelerated stability testing in flame-proof chambers prevents costly can corrosion and propellant degradation before commercial launch."
  }
];

export const EXPORT_DESTINATIONS = [
  { country: "United States", region: "North America", note: "US FDA registered shipments & private label brands" },
  { country: "United Arab Emirates", region: "Middle East", note: "Personal care & luxury body perfumes" },
  { country: "Oman", region: "Middle East", note: "OTC healthcare & personal grooming" },
  { country: "Singapore", region: "Southeast Asia", note: "Household hygiene & specialty aerosols" },
  { country: "Malaysia", region: "Southeast Asia", note: "Cosmetics & hair care styling" },
  { country: "Russia & CIS", region: "Eurasia", note: "Technical automotive & industrial maintenance" },
  { country: "Sri Lanka", region: "South Asia", note: "Air fresheners & household cleaners" },
  { country: "Bhutan", region: "South Asia", note: "Ayurvedic & herbal therapeutic care" },
  { country: "Congo", region: "Africa", note: "Personal care & insect defense sprays" },
  { country: "Ethiopia", region: "Africa", note: "Antiseptic first aid & hygiene" },
  { country: "Djibouti", region: "Africa", note: "Household hygiene & deodorants" },
  { country: "Bangladesh", region: "South Asia", note: "FMCG contract manufacturing" },
];

export const COMPANY_CONTACTS = {
  plant: {
    title: "Manufacturing Plant (Vapi)",
    address: "Plot No. 1105, Phase III, G.I.D.C., Vapi, Gujarat – 396195, India",
    phone: "+91-260-2430996 / 2422856",
    email: "info@accrapacindia.com",
    details: "2.5 Hours drive from Mumbai International Airport. Audits & factory visits welcome."
  },
  corporate: {
    title: "Corporate Office (Mumbai)",
    address: "503, Rajanigandha, Prof. V.S. Agashe Rd., Dadar (W), Mumbai – 400028, India",
    phone: "+91 7303 258963",
    email: "sales@accrapacindia.com",
    details: "Commercial, regulatory, and contract management headquarters."
  },
  usa: {
    title: "North America Sales Office",
    address: "Accra Pac Holding Co., LLC, 6435 W. Jefferson Blvd, Suite 151, Fort Wayne, IN 46804, USA",
    email: "samir.shah@accrapacindia.com",
    details: "Local support for US & Americas brand partnerships."
  },
  enquiryPerson: {
    name: "Mr. Sahil Shah",
    role: "Head of Business Development",
    phone: "+91 98251 49522",
    email: "sahil.shah@accrapacindia.com"
  }
};
