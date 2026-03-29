"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";

type Theme = "light" | "dark";

type ThemeToggleProps = {
  className?: string;
};

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
  localStorage.setItem("theme", theme);
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <button
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border transition-colors",
        className
      )}
      style={{
        borderColor: "var(--border)",
        color: "var(--muted)",
        backgroundColor: "transparent"
      }}
      onClick={toggleTheme}
      type="button"
    >
      {!mounted ? (
        <span className="h-4 w-4" />
      ) : (
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotate: 90 }}
            initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
            key={theme}
            transition={{ duration: 0.2 }}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </motion.div>
        </AnimatePresence>
      )}
    </button>
  );
}
