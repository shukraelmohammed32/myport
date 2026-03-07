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
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-sky-50/75 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/78">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-teal-500/45 to-orange-400/45 dark:via-teal-400/50 dark:to-orange-300/50" />

      <Container className="relative flex h-[4.5rem] items-center justify-between">
        <Link
          href="/"
          className="group inline-flex items-center gap-3"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-teal-500 to-orange-400 shadow-[0_0_0_6px_rgba(15,118,110,0.12)] dark:shadow-[0_0_0_6px_rgba(45,212,191,0.18)]" />
          <span className="font-display text-lg font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-teal-700 dark:text-slate-100 dark:group-hover:text-teal-300">
            {siteConfig.name}
          </span>
          <span className="hidden rounded-full border border-teal-600/20 bg-teal-600/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-teal-700 dark:border-teal-300/25 dark:bg-teal-300/10 dark:text-teal-200 lg:inline-flex">
            {siteConfig.role}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-sky-100/80 p-1 shadow-sm shadow-slate-300/35 dark:border-slate-700/80 dark:bg-slate-900/80 dark:shadow-none md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                isActive(item.href)
                  ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-sm shadow-teal-800/25 dark:from-teal-400 dark:to-sky-300 dark:text-slate-950 dark:shadow-teal-400/20"
                  : "text-slate-600 hover:bg-sky-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-slate-100"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle className="rounded-full" />
          <ButtonLink
            className="rounded-full border-teal-600/20 bg-teal-600/10 text-teal-700 hover:border-teal-600/35 hover:bg-teal-600/15 dark:border-teal-300/25 dark:bg-teal-300/10 dark:text-teal-200 dark:hover:border-teal-300/40 dark:hover:bg-teal-300/15"
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-sky-50 text-slate-700 transition hover:border-teal-500/40 hover:bg-sky-100 hover:text-teal-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-teal-300/40 dark:hover:bg-slate-800 dark:hover:text-teal-200"
            onClick={() => setMenuOpen((previous) => !previous)}
            type="button"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      {menuOpen ? (
        <div className="border-t border-slate-200/80 bg-sky-50/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90 md:hidden">
          <Container className="flex flex-col gap-2 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm font-medium",
                  isActive(item.href)
                    ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-sm shadow-teal-800/25 dark:from-teal-400 dark:to-sky-300 dark:text-slate-950 dark:shadow-teal-400/20"
                    : "text-slate-700 hover:bg-sky-100/80 dark:text-slate-300 dark:hover:bg-slate-800"
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
