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
              ? "0 26px 72px rgba(0, 0, 0, 0.42), inset 0 1px 0 rgba(255,255,255,0.06)"
              : "0 18px 44px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255,255,255,0.06)"
          }}
        >
          <div className="flex min-h-[5.1rem] items-center justify-between gap-4 px-5 sm:px-6">
            <Link href="/#home" className="group flex items-center gap-3">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/18 bg-[linear-gradient(135deg,rgba(0,224,255,0.18),rgba(255,45,85,0.08))] shadow-[0_0_24px_rgba(0,224,255,0.08)]">
                <span className="absolute inset-1 rounded-[14px] bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))]" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(0,224,255,0.5)]" />
              </span>
              <div>
                <span className="block font-display text-lg font-semibold tracking-tight text-white">
                  {siteConfig.name}
                </span>
                <span className="block text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-white/42">
                  Full-Stack Developer
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-black/20 p-2 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition duration-300",
                    isActive(item.href)
                      ? "bg-cyan-400/12 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                      : "text-white/58 hover:bg-white/[0.04] hover:text-white"
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
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-300/25 bg-[linear-gradient(135deg,rgba(0,224,255,0.95),rgba(0,122,255,0.72))] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(0,224,255,0.16)] transition duration-300 hover:-translate-y-0.5"
              >
                Download CV
                <Download className="h-4 w-4" />
              </Link>
            </div>

            <button
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-300 active:scale-[0.97] lg:hidden"
              onClick={() => setMenuOpen((current) => !current)}
              type="button"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {menuOpen ? (
            <div className="border-t border-white/10 px-4 pb-4 pt-4 lg:hidden">
              <div className="grid gap-3">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-2xl border px-4 py-3 text-sm font-semibold transition duration-300",
                      isActive(item.href)
                        ? "border-cyan-300/25 bg-cyan-400/10 text-white"
                        : "border-white/10 bg-white/[0.03] text-white/76 hover:border-cyan-300/25 hover:text-white"
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
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-cyan-300/25 bg-[linear-gradient(135deg,rgba(0,224,255,0.95),rgba(0,122,255,0.72))] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(0,224,255,0.16)]"
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
