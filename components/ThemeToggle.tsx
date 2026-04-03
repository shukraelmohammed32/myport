"use client";

import { Moon, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextIsDark = !root.classList.contains("dark");

    root.classList.toggle("dark", nextIsDark);
    root.style.colorScheme = nextIsDark ? "dark" : "light";
    localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);
  };

  return (
    <button
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="theme-toggle"
      aria-pressed={isDark}
      onClick={toggleTheme}
      type="button"
    >
      <span className="relative flex h-8 w-16 items-center rounded-full border border-white/10 bg-white/[0.04] p-1">
        <span
          className="theme-toggle__thumb absolute left-1 top-1 transition-transform duration-300"
          style={{ transform: isDark ? "translateX(0)" : "translateX(1.9rem)" }}
        />
      </span>
      <span className="hidden text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/56 sm:inline">
        {isDark ? "Dark" : "Light"}
      </span>
      <SunMedium className="h-4 w-4 text-cyan-300" />
      <Moon className="h-4 w-4 text-pink-300" />
    </button>
  );
}
