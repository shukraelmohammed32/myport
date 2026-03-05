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
        soft: "0 12px 30px -18px rgba(15, 23, 42, 0.35)"
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(circle at center, rgba(15, 23, 42, 0.09) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
