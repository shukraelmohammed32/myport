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
    <header className="sticky top-0 z-50 border-b border-amber-700/70 bg-amber-900/75 backdrop-blur-xl dark:border-amber-800/80 dark:bg-amber-950/78">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-600/45 to-orange-600/45 dark:via-amber-500/50 dark:to-orange-500/50" />

      <Container className="relative flex h-[4.5rem] items-center justify-between">
        <Link
          href="/"
          className="group inline-flex items-center gap-3"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 shadow-[0_0_0_6pxrgba(217,119,6,0.12)] dark:shadow-[0_0_0_6pxrgba(245,158,11,0.18)]" />
          <span className="font-display text-lg font-semibold tracking-tight text-amber-100 transition-colors group-hover:text-amber-300 dark:text-amber-100 dark:group-hover:text-amber-300">
            {siteConfig.name}
          </span>
          <span className="hidden rounded-full border border-amber-600/20 bg-amber-600/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-amber-700 dark:border-amber-400/25 dark:bg-amber-400/10 dark:text-amber-200 lg:inline-flex">
            {siteConfig.role}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-amber-700/80 bg-amber-800/80 p-1 shadow-sm shadow-amber-900/35 dark:border-amber-700/80 dark:bg-amber-900/80 dark:shadow-none md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                isActive(item.href)
                  ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-sm shadow-amber-800/25 dark:from-amber-500 dark:to-orange-500 dark:text-amber-950 dark:shadow-amber-600/20"
                  : "text-amber-200 hover:bg-amber-700/50 hover:text-amber-100 dark:text-amber-200 dark:hover:bg-amber-800/80 dark:hover:text-amber-100"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle className="rounded-full" />
          <ButtonLink
            className="rounded-full border-amber-600/20 bg-amber-600/10 text-amber-700 hover:border-amber-600/35 hover:bg-amber-600/15 dark:border-amber-400/25 dark:bg-amber-400/10 dark:text-amber-200 dark:hover:border-amber-400/40 dark:hover:bg-amber-400/15"
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-amber-700 bg-amber-800 text-amber-100 transition hover:border-amber-600/40 hover:bg-amber-700 hover:text-amber-200 dark:border-amber-700 dark:bg-amber-900 dark:text-amber-200 dark:hover:border-amber-500/40 dark:hover:bg-amber-800 dark:hover:text-amber-100"
            onClick={() => setMenuOpen((previous) => !previous)}
            type="button"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      {menuOpen ? (
        <div className="border-t border-amber-700/80 bg-amber-800/90 backdrop-blur-xl dark:border-amber-800 dark:bg-amber-950/90 md:hidden">
          <Container className="flex flex-col gap-2 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm font-medium",
                  isActive(item.href)
                    ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-sm shadow-amber-800/25 dark:from-amber-500 dark:to-orange-500 dark:text-amber-950 dark:shadow-amber-600/20"
                    : "text-amber-200 hover:bg-amber-700/80 dark:text-amber-200 dark:hover:bg-amber-800"
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
