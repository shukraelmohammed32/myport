"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { navigation, siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";
import { Container } from "@/components/Container";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) => {
    const [basePath, hash] = href.split("#");
    const normalizedBasePath = basePath || "/";

    if (hash) {
      return href === "/#home" ? pathname === "/" : false;
    }

    return normalizedBasePath === "/"
      ? pathname === normalizedBasePath
      : pathname.startsWith(normalizedBasePath);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <Container className="max-w-[84rem] px-0">
        <div
          className="rounded-[28px] border border-white/10 bg-black/55 shadow-[0_20px_50px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl transition duration-300"
          style={{
            boxShadow: scrolled
              ? "0 24px 60px rgba(0, 0, 0, 0.42), inset 0 1px 0 rgba(255,255,255,0.05)"
              : "0 16px 38px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255,255,255,0.05)"
          }}
        >
          <div className="flex min-h-[5rem] items-center justify-between px-5 sm:px-6">
            <Link href="/#home" className="group flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inset-0 rounded-full bg-[#ff2a2a] blur-[6px]" />
                <span className="relative rounded-full bg-[#ff4a4a]" />
              </span>
              <div>
                <span className="block font-display text-lg font-semibold tracking-tight text-white">
                  {siteConfig.name}
                </span>
                <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-white/40">
                  AI Sprint Studio
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors duration-300",
                    isActive(item.href) ? "text-white" : "text-white/58 hover:text-white/92"
                  )}
                >
                  {item.label}
                  {isActive(item.href) ? (
                    <span className="absolute -bottom-2 left-0 h-px w-full bg-[linear-gradient(90deg,transparent,#ff4d4d,transparent)]" />
                  ) : null}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Link
                href={siteConfig.resumePath}
                download
                className="inline-flex items-center justify-center rounded-2xl border border-[#ff6b6b]/40 bg-[linear-gradient(135deg,rgba(255,42,42,0.88),rgba(110,0,0,0.96))] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(255,42,42,0.24),inset_0_1px_0_rgba(255,255,255,0.16)] transition duration-300 hover:-translate-y-0.5"
              >
                View Resume
              </Link>
            </div>

            <button
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition duration-300 active:scale-[0.97] lg:hidden"
              onClick={() => setMenuOpen((current) => !current)}
              type="button"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {menuOpen ? (
            <div className="border-t border-white/10 px-5 pb-5 pt-3 lg:hidden">
              <div className="grid gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-2xl border px-4 py-3 text-sm font-semibold transition duration-300",
                      isActive(item.href)
                        ? "border-[#ff6b6b]/30 bg-[#ff2a2a]/10 text-white"
                        : "border-white/8 bg-white/[0.03] text-white/76 hover:border-white/12 hover:text-white"
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href={siteConfig.resumePath}
                  download
                  className="mt-2 inline-flex items-center justify-center rounded-2xl border border-[#ff6b6b]/40 bg-[linear-gradient(135deg,rgba(255,42,42,0.88),rgba(110,0,0,0.96))] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(255,42,42,0.22)]"
                  onClick={() => setMenuOpen(false)}
                >
                  View Resume
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
