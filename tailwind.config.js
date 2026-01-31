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
        background: "var(--background)",
        "background-accent": "var(--background-accent)",
        surface: "var(--surface)",
        ink:     "var(--ink)",
        muted:   "var(--muted)",
        primary: "var(--primary)",
        accent:  "var(--accent)",
        "accent-strong": "var(--accent-strong)",
        "accent-soft": "var(--accent-soft)",
      },
      boxShadow: {
        soft:        "0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.04)",
        card:        "0 4px 24px -4px rgba(0,0,0,0.08)",
        "card-hover":"0 8px 36px -8px rgba(0,0,0,0.13)",
        glow:        "0 0 15px rgba(255, 26, 26, 0.2)",
        "glow-accent": "0 0 25px rgba(255, 26, 26, 0.4)",
        "glow-strong": "0 0 40px rgba(255, 59, 59, 0.5)",
      }
    }
  },
  plugins: [require("@tailwindcss/typography")],
};
