import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030712",
        card: "#0F172A",
        primary: {
          DEFAULT: "#2563EB",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#22C55E",
          foreground: "#030712",
        },
        foreground: "#FFFFFF",
        muted: "#94A3B8",
        border: "rgba(148, 163, 184, 0.12)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(circle at 50% 50%, rgba(37,99,235,0.25), transparent 60%)",
        "accent-glow":
          "radial-gradient(circle at 50% 50%, rgba(34,197,94,0.18), transparent 60%)",
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
        "spin-slower": "spin 60s linear infinite",
        "spin-reverse": "spin-reverse 45s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 2s infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
