import Link from "next/link";

import { navigation, socialLinks, siteConfig } from "@/data/site";
import { Container } from "@/components/Container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-16 border-t border-orange-700/80 bg-gradient-to-b from-orange-900/85 to-orange-800/70 py-10 dark:border-orange-800 dark:from-orange-950/72 dark:to-orange-950/38">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-600/45 to-orange-500/45 dark:via-orange-500/50 dark:to-orange-400/50" />

      <Container className="relative space-y-8">
        <div className="grid gap-8 border-b border-orange-700/80 pb-8 dark:border-orange-800 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-3">
            <p className="inline-flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-orange-100 dark:text-orange-100">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-orange-600 to-orange-500" />
              {siteConfig.name}
            </p>
            <p className="max-w-md text-sm text-orange-200 dark:text-orange-300">{siteConfig.availability}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-400 dark:text-orange-400">
              Navigate
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-sm font-medium text-orange-200 transition hover:text-orange-100 dark:text-orange-300 dark:hover:text-orange-100"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-400 dark:text-orange-400">
              Connect
            </h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => {
                const isExternal = link.href.startsWith("http");

                return (
                  <li key={link.label}>
                    <Link
                      className="inline-flex items-center rounded-full border border-orange-700/90 bg-orange-800/80 px-3 py-1.5 text-sm font-medium text-orange-200 transition hover:border-orange-600/45 hover:bg-orange-600/10 hover:text-orange-100 dark:border-orange-700/80 dark:bg-orange-900/70 dark:text-orange-300 dark:hover:border-orange-500/40 dark:hover:bg-orange-600/10 dark:hover:text-orange-200"
                      href={link.href}
                      rel={isExternal ? "noreferrer" : undefined}
                      target={isExternal ? "_blank" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm text-orange-400 dark:text-orange-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            (c) {year} {siteConfig.name}. Crafted with Next.js and Tailwind CSS.
          </p>
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-orange-400 dark:text-orange-400">
            {siteConfig.role}
          </p>
        </div>
      </Container>
    </footer>
  );
}
