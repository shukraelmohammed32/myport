/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"]
      },
      colors: {
        surface: "var(--surface)",
        ink:     "var(--ink)",
        muted:   "var(--muted)",
        primary: "var(--primary)",
        accent:  "var(--accent)"
      },
      boxShadow: {
        soft:        "0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.04)",
        card:        "0 4px 24px -4px rgba(0,0,0,0.08)",
        "card-hover":"0 8px 36px -8px rgba(0,0,0,0.13)",
        /* kept for compat with any lingering references */
        glow:        "0 0 0 1px var(--border)",
        "glow-lg":   "0 2px 8px rgba(0,0,0,0.06)",
        "glow-xl":   "0 4px 20px rgba(0,0,0,0.09)"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")],
};
