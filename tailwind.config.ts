import type { Config } from "tailwindcss";

/**
 * Lucid Precision Framework — "The Digital Curator"
 * See DESIGN.md for full specification.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Updated Design: Dark Forest Green + Lime Green */
        primary: "#004d3d",
        "primary-container": "#00c853",
        accent: "#00c853",
        background: "#f5f5f5",
        surface: "#ffffff",
        "surface-container-low": "#f5f5f5",
        "surface-container": "#fafafa",
        "surface-container-high": "#e8e8e8",
        "surface-container-highest": "#e0e0e0",
        "surface-container-lowest": "#ffffff",
        "on-background": "#161d1a",
        "on-surface": "#161d1a",
        "on-surface-variant": "#3c4a43",
        "on-primary": "#ffffff",
        "on-primary-container": "#004d3d",
        "outline-variant": "#bacac1",
        tertiary: "#d32f2f",
        /* Legacy Lucid Precision colors for compatibility */
        "lucid-primary": "#006c4f",
        "lucid-primary-container": "#00cc99",
      },
      fontFamily: {
        sans: ["Noto Sans", "Noto Sans Thai", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        headline: ["1.75rem", { lineHeight: "1.3" }],
        body: ["1rem", { lineHeight: "1.7" }],
        label: ["0.75rem", { letterSpacing: "0.05em" }],
      },
      spacing: {
        "scale-8": "2.75rem",
        "scale-12": "4rem",
        "scale-16": "5.5rem",
        "scale-20": "7rem",
      },
      borderRadius: {
        xl: "0.75rem",
        full: "9999px",
      },
      boxShadow: {
        ambient: "0 8px 40px rgb(22 29 26 / 0.05)",
      },
      backgroundImage: {
        "cta-gradient": "linear-gradient(135deg, #006c4f 0%, #00cc99 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
