import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Accra Pac Official Brand Color Palette
        // Primary: Royal Blue (#1455A6) & White (#FFFFFF)
        // Secondary: Silver / Metallic Grey (#A6A9AD) & Aqua / Teal (#00B8C7)
        brand: {
          royal: {
            50: "#f0f6fe",
            100: "#e0edfd",
            200: "#b9dbfb",
            300: "#7cbbf7",
            400: "#3697f0",
            500: "#1455A6", // Primary Royal Blue
            600: "#0f4487",
            700: "#0d366b",
            800: "#0f2f59",
            900: "#12284b",
            950: "#0b182f",
          },
          silver: {
            50: "#f8f9fa",
            100: "#f1f3f5",
            200: "#e5e7eb",
            300: "#d1d5db",
            400: "#A6A9AD", // Secondary Silver / Metallic Grey
            500: "#8e9196",
            600: "#6e7278",
            700: "#55585d",
            800: "#44464b",
            900: "#37383c",
          },
          aqua: {
            50: "#effcfd",
            100: "#d6f7fb",
            200: "#b1f0f6",
            300: "#79e4ef",
            400: "#38d0e2",
            500: "#00B8C7", // Secondary Aqua / Teal
            600: "#0093a2",
            700: "#047683",
            800: "#0a5e69",
            900: "#0c4f58",
            950: "#03343b",
          },
          // Direct aliases for consistent developer experience
          primary: "#1455A6",
          white: "#FFFFFF",
          secondary: "#00B8C7",
          metallic: "#A6A9AD",
          dark: "#0b182f",
          navy: "#0d2244",
          slate: "#1e293b",
        },
      },
      fontFamily: {
        sans: [
          "'Plus Jakarta Sans'",
          "var(--font-plus-jakarta)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif"
        ],
      },
      fontSize: {
        xs: ["16px", { lineHeight: "24px" }],
        sm: ["16px", { lineHeight: "24px" }],
        base: ["16px", { lineHeight: "26px" }],
        lg: ["18px", { lineHeight: "28px" }],
        xl: ["20px", { lineHeight: "30px" }],
        "2xl": ["24px", { lineHeight: "32px" }],
        "3xl": ["30px", { lineHeight: "38px" }],
        "4xl": ["36px", { lineHeight: "44px" }],
        "5xl": ["48px", { lineHeight: "1.15" }],
        "6xl": ["60px", { lineHeight: "1.1" }],
      },
    },
  },
  plugins: [],
};
export default config;
