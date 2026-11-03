# Accra Pac - Premier Aerosol & Liquid Contract Manufacturing Website

A modern, high-performance static website for **Accra Pac (India)** built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

Pioneering aerosol contract filling and private labelling since 1979 from Vapi, Gujarat, India.

---

## 🌟 Key Highlights & Features

- **Strict Desktop 1-Line Navigation Bar**: Compact, non-wrapping header with dropdown for Turnkey Solutions (`Contract Manufacturing`, `OEM & Private Labelling`, `CDMO`), logo-only home navigation, and immediate quotation modal trigger.
- **Alternating Rhythm Design**: Strictly alternating dark and light thematic sections across the entire homepage for visual comfort and contrast.
- **Redesigned "Trusted by Top Global Brands"**: High-end enterprise showcase with sector filters (`FMCG & Consumer`, `Healthcare & Pharma`, `Industrial & Materials`), metallic client monograms, contract production scopes, and a 4-pillar bilateral NDA & governance bento strip.
- **Comprehensive 12 Core Product Sectors**: Full-visibility 12-sector catalogue with quick category filtering, popular formulations chips, container specifications, and direct catalogue anchor links (`/products#hairid`, `/products#pharma-otc`, etc.).
- **Interactive Chronological History Roadmap**: Step progress timeline with milestone cards and directional arrows (`→`) tracing technical evolution from 1979 to 2024.
- **Nainlab-Style Product Catalogue (`/products`)**: Sticky sidebar category navigation matching reference architecture with direct anchor scroll for `#hairid`.
- **Dedicated Product Detail Pages (`/products/[slug]`)**: Static generated deep-dive pages for 7 spotlight formulations featuring ingredient tables, 8-step turnkey processes, packaging specifications, and on-page quote forms.
- **Interactive World Export Map (`/export`)**: Modern interactive SVG world map showing active international trade lanes (USA, UAE, Singapore, Oman, Russia, Malaysia, etc.) with port logistics and UN-certified hazmat compliance.
- **Zero Content Repetition**: Crisp, high-impact copy eliminating redundant year mentions and highlighting capacity (120M+ units/year, 11 production lines, 500+ formulations).

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Static Exports)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Ruksar13/accra-pack-website.git
cd accra-pack-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the website.

### Production Build

```bash
# Build static production bundle
npm run build

# Start production server
npm run start
```

---

## 📁 Project Structure

```
accra-pack-website/
├── public/
│   ├── images/
│   │   ├── logo/
│   │   ├── manufacturing/
│   │   └── products/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── capabilities/
│   │   ├── careers/
│   │   ├── cdmo/
│   │   ├── contact/
│   │   ├── contract-manufacturing/
│   │   ├── export/
│   │   ├── insights/
│   │   ├── oem-private-labelling/
│   │   ├── products/
│   │   │   └── [slug]/
│   │   ├── quality/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HistoryTimeline.tsx
│   │   ├── QuoteModal.tsx
│   │   └── WorldMap.tsx
│   └── data/
│       └── websiteData.ts
└── tailwind.config.ts
```

---

## 📄 License

Proprietary & Confidential - Accra Pac (India)
