"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { navigation, siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { ThemeToggle } from "@/components/ThemeToggle";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-900/60 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-800/70">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-600/30 to-slate-500/30 dark:via-slate-500/40 dark:to-slate-400/40" />

      <Container className="relative flex h-[4.5rem] items-center justify-between">
        <Link
          href="/"
          className="group inline-flex items-center gap-3"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-slate-400 to-slate-500 shadow-[0_0_0_6pxrgba(148,163,184,0.15)] dark:shadow-[0_0_0_6pxrgba(100,116,139,0.20)]" />
          <span className="font-display text-lg font-semibold tracking-tight text-slate-100 transition-colors group-hover:text-slate-300 dark:text-slate-100 dark:group-hover:text-slate-300">
            {siteConfig.name}
          </span>
          <span className="hidden rounded-full border border-slate-600/30 bg-slate-700/40 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300 dark:border-slate-600/40 dark:bg-slate-700/50 dark:text-slate-300 lg:inline-flex">
            {siteConfig.role}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-700/60 bg-slate-800/60 p-1 shadow-sm shadow-slate-900/20 dark:border-slate-600/60 dark:bg-slate-700/60 dark:shadow-none md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                isActive(item.href)
                  ? "bg-gradient-to-r from-slate-600 to-slate-500 text-white shadow-sm shadow-slate-700/30 dark:from-slate-500 dark:to-slate-400 dark:text-slate-900 dark:shadow-slate-600/20"
                  : "text-slate-300 hover:bg-slate-700/50 hover:text-slate-100 dark:text-slate-300 dark:hover:bg-slate-600/50 dark:hover:text-slate-100"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle className="rounded-full" />
          <ButtonLink
            className="rounded-full border-slate-600/30 bg-slate-700/40 text-slate-300 hover:border-slate-600/50 hover:bg-slate-700/60 dark:border-slate-600/40 dark:bg-slate-700/50 dark:text-slate-300 dark:hover:border-slate-500/50 dark:hover:bg-slate-600/60"
            href={siteConfig.resumePath}
            variant="secondary"
            download
          >
            Download Resume
          </ButtonLink>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-slate-200 transition hover:border-slate-600/50 hover:bg-slate-700 hover:text-slate-100 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:border-slate-500/50 dark:hover:bg-slate-600 dark:hover:text-slate-100"
            onClick={() => setMenuOpen((previous) => !previous)}
            type="button"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      {menuOpen ? (
        <div className="border-t border-slate-700/60 bg-slate-800/80 backdrop-blur-xl dark:border-slate-600/60 dark:bg-slate-700/80 md:hidden">
          <Container className="flex flex-col gap-2 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm font-medium",
                  isActive(item.href)
                    ? "bg-gradient-to-r from-slate-600 to-slate-500 text-white shadow-sm shadow-slate-700/30 dark:from-slate-500 dark:to-slate-400 dark:text-slate-900 dark:shadow-slate-600/20"
                    : "text-slate-300 hover:bg-slate-700/60 dark:text-slate-300 dark:hover:bg-slate-600/60"
                )}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink
              className="mt-2 w-full justify-center"
              href={siteConfig.resumePath}
              variant="secondary"
              download
            >
              Download Resume
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
