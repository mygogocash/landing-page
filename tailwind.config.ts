import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#10b981",
        "primary-dark": "#059669",
        "primary-deep": "#047857",
        accent: "#f97066",
        "accent-soft": "#fef2f2",
        cream: "#FFFBF7",
        mint: "#F0FDF4",
        "surface-green": "rgba(16, 185, 129, 0.08)",
        "surface-green-medium": "rgba(16, 185, 129, 0.15)",
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "sans-serif"],
        display: ["Instrument Sans", "Poppins", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
        "4xl": "32px",
      },
      keyframes: {
        "header-enter": {
          "0%": { opacity: "0", transform: "translateY(-14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "header-mobile-drawer": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "locale-panel-in": {
          "0%": { opacity: "0", transform: "translateY(-8px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        "header-enter": "header-enter 0.55s cubic-bezier(0.22, 1, 0.36, 1) both",
        "header-mobile-drawer":
          "header-mobile-drawer 0.35s cubic-bezier(0.22, 1, 0.36, 1) both",
        "locale-panel-in":
          "locale-panel-in 0.32s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
