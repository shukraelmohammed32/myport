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
        ink: "var(--ink)",
        muted: "var(--muted)",
        primary: "var(--primary)",
        accent: "var(--accent)"
      },
      boxShadow: {
        soft: "0 12px 30px -18px rgba(139, 92, 246, 0.25)",
        glow: "0 0 40px rgba(139, 92, 246, 0.15), 0 0 80px rgba(236, 72, 153, 0.1)",
        "glow-lg": "0 0 60px rgba(139, 92, 246, 0.2), 0 0 120px rgba(236, 72, 153, 0.15)",
        "glow-xl": "0 0 80px rgba(139, 92, 246, 0.25), 0 0 160px rgba(236, 72, 153, 0.2)"
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(circle at center, rgba(15, 23, 42, 0.09) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
