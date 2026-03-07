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
    <header className="sticky top-0 z-50 border-b border-purple-800/50 bg-purple-900/60 backdrop-blur-xl dark:border-purple-700/60 dark:bg-purple-800/70">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-600/30 to-purple-500/30 dark:via-purple-500/40 dark:to-purple-400/40" />

      <Container className="relative flex h-[4.5rem] items-center justify-between">
        <Link
          href="/"
          className="group inline-flex items-center gap-3"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 shadow-[0_0_0_6pxrgba(139,92,246,0.15)] dark:shadow-[0_0_0_6pxrgba(167,139,250,0.20)]" />
          <span className="font-display text-lg font-semibold tracking-tight text-purple-100 transition-colors group-hover:text-purple-300 dark:text-purple-100 dark:group-hover:text-purple-300">
            {siteConfig.name}
          </span>
          <span className="hidden rounded-full border border-purple-600/30 bg-purple-700/40 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-purple-300 dark:border-purple-600/40 dark:bg-purple-700/50 dark:text-purple-300 lg:inline-flex">
            {siteConfig.role}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-purple-700/60 bg-purple-800/60 p-1 shadow-sm shadow-purple-900/20 dark:border-purple-600/60 dark:bg-purple-700/60 dark:shadow-none md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                isActive(item.href)
                  ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-sm shadow-purple-700/30 dark:from-purple-500 dark:to-purple-400 dark:text-purple-900 dark:shadow-purple-600/20"
                  : "text-purple-300 hover:bg-purple-700/50 hover:text-purple-100 dark:text-purple-300 dark:hover:bg-purple-600/50 dark:hover:text-purple-100"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle className="rounded-full" />
          <ButtonLink
            className="rounded-full border-purple-600/30 bg-purple-700/40 text-purple-300 hover:border-purple-600/50 hover:bg-purple-700/60 dark:border-purple-600/40 dark:bg-purple-700/50 dark:text-purple-300 dark:hover:border-purple-500/50 dark:hover:bg-purple-600/60"
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-purple-700 bg-purple-800 text-purple-200 transition hover:border-purple-600/50 hover:bg-purple-700 hover:text-purple-100 dark:border-purple-600 dark:bg-purple-700 dark:text-purple-200 dark:hover:border-purple-500/50 dark:hover:bg-purple-600 dark:hover:text-purple-100"
            onClick={() => setMenuOpen((previous) => !previous)}
            type="button"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      {menuOpen ? (
        <div className="border-t border-purple-700/60 bg-purple-800/80 backdrop-blur-xl dark:border-purple-600/60 dark:bg-purple-700/80 md:hidden">
          <Container className="flex flex-col gap-2 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm font-medium",
                  isActive(item.href)
                    ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-sm shadow-purple-700/30 dark:from-purple-500 dark:to-purple-400 dark:text-purple-900 dark:shadow-purple-600/20"
                    : "text-purple-300 hover:bg-purple-700/60 dark:text-purple-300 dark:hover:bg-purple-600/60"
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
