"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";

import { navigation, siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";
import { Container } from "@/components/Container";
import { ThemeToggle } from "@/components/ThemeToggle";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    const [basePath, hash] = href.split("#");

    if (hash) {
      return href === "/#home" ? pathname === "/" : false;
    }

    return basePath === "/" ? pathname === "/" : pathname.startsWith(basePath);
  };

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6">
      <Container className="max-w-[90rem] px-0">
        <div
          className="glass-panel rounded-[30px] transition duration-300"
          style={{
            boxShadow: scrolled
              ? "0 26px 72px rgba(0, 0, 0, 0.42), inset 0 1px 0 var(--surface-inset)"
              : "0 18px 44px rgba(0, 0, 0, 0.28), inset 0 1px 0 var(--surface-inset)"
          }}
        >
          <div className="flex min-h-[5.1rem] items-center justify-between gap-4 px-5 sm:px-6">
            <Link href="/#home" className="group flex items-center gap-3">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--accent-soft-strong)] bg-[linear-gradient(135deg,var(--accent-soft),var(--accent-soft-strong))] shadow-[0_0_24px_var(--accent-soft)]">
                <span className="absolute inset-1 rounded-[14px] bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))]" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_18px_var(--glow-a)]" />
              </span>
              <div>
                <span className="block font-display text-lg font-semibold tracking-tight text-[color:var(--foreground)]">
                  {siteConfig.name}
                </span>
                <span className="block text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  Full-Stack Developer
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-2 rounded-full border border-[color:var(--border)] bg-[var(--surface-muted)] p-2 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full border border-transparent px-4 py-2 text-sm font-medium transition duration-300",
                    isActive(item.href)
                      ? "bg-[var(--accent-soft)] text-[color:var(--foreground)] shadow-[inset_0_1px_0_var(--surface-inset)]"
                      : "text-[color:var(--muted)] hover:border-[color:var(--accent-soft-strong)] hover:bg-[var(--surface-muted)] hover:text-[color:var(--foreground)]"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <ThemeToggle />
              <Link
                href={siteConfig.resumePath}
                download
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[color:var(--accent-soft-strong)] bg-[linear-gradient(135deg,var(--accent),var(--accent-secondary))] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_var(--accent-soft)] transition duration-300 hover:-translate-y-0.5"
              >
                Download CV
                <Download className="h-4 w-4" />
              </Link>
            </div>

            <button
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--border)] bg-[var(--surface-muted)] text-[color:var(--foreground)] shadow-[inset_0_1px_0_var(--surface-inset)] transition duration-300 active:scale-[0.97] lg:hidden"
              onClick={() => setMenuOpen((current) => !current)}
              type="button"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {menuOpen ? (
            <div className="border-t border-[color:var(--border)] px-4 pb-4 pt-4 lg:hidden">
              <div className="grid gap-3">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-2xl border px-4 py-3 text-sm font-semibold transition duration-300",
                      isActive(item.href)
                        ? "border-[color:var(--accent-soft-strong)] bg-[var(--accent-soft)] text-[color:var(--foreground)]"
                        : "border-[color:var(--border)] bg-[var(--surface-muted)] text-[color:var(--muted)] hover:border-[color:var(--accent-soft-strong)] hover:text-[color:var(--foreground)]"
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="mt-2 flex items-center gap-3">
                  <ThemeToggle />
                  <Link
                    href={siteConfig.resumePath}
                    download
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[color:var(--accent-soft-strong)] bg-[linear-gradient(135deg,var(--accent),var(--accent-secondary))] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_var(--accent-soft)]"
                    onClick={() => setMenuOpen(false)}
                  >
                    Download CV
                    <Download className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
