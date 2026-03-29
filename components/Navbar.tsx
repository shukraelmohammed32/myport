"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { navigation, siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";
import { Container } from "@/components/Container";
import { ThemeToggle } from "@/components/ThemeToggle";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        borderBottom: "1px solid var(--border)",
        backgroundColor: "var(--bg)",
        backdropFilter: scrolled ? "blur(14px)" : "none"
      }}
    >
      <Container className="flex h-[4.25rem] items-center justify-between">

        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <span
            className="h-2 w-2 rounded-full transition-transform group-hover:scale-125"
            style={{ backgroundColor: "var(--ink)" }}
            aria-hidden
          />
          <span
            className="font-display text-[0.95rem] font-semibold tracking-tight transition-opacity group-hover:opacity-60"
            style={{ color: "var(--ink)" }}
          >
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "link-hover text-sm font-medium transition-opacity",
                isActive(item.href)
                  ? "font-semibold opacity-100"
                  : "opacity-50 hover:opacity-100"
              )}
              style={{ color: "var(--ink)" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href={siteConfig.resumePath}
            download
            className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] px-3.5 py-1.5 text-sm font-medium text-[var(--ink)] transition-all hover:bg-[var(--ink)] hover:text-[var(--bg)] hover:border-[var(--ink)] active:scale-[0.97]"
          >
            Resume
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-colors active:scale-[0.97]"
            style={{ borderColor: "var(--border)", color: "var(--ink)" }}
            onClick={() => setMenuOpen((p) => !p)}
            type="button"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="border-t md:hidden"
          style={{
            borderColor: "var(--border)",
            backgroundColor: "var(--bg)"
          }}
        >
          <Container className="flex flex-col gap-1 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "font-semibold"
                    : "opacity-55 hover:opacity-100"
                )}
                style={{ color: "var(--ink)" }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={siteConfig.resumePath}
              download
              className="mt-2 inline-flex items-center justify-center rounded-xl border px-4 py-2.5 text-sm font-medium transition-all"
              style={{ borderColor: "var(--border)", color: "var(--ink)" }}
            >
              Download Resume
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
