import Link from "next/link";

import { navigation, socialLinks, siteConfig } from "@/data/site";
import { Container } from "@/components/Container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-16 border-t border-slate-800/50 bg-gradient-to-b from-slate-900/60 to-slate-800/50 py-10 dark:border-slate-700/60 dark:from-slate-800/70 dark:to-slate-700/50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-600/30 to-slate-500/30 dark:via-slate-500/40 dark:to-slate-400/40" />

      <Container className="relative space-y-8">
        <div className="grid gap-8 border-b border-slate-700/50 pb-8 dark:border-slate-600/50 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-3">
            <p className="inline-flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-slate-100 dark:text-slate-100">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-slate-400 to-slate-500" />
              {siteConfig.name}
            </p>
            <p className="max-w-md text-sm text-slate-300 dark:text-slate-300">{siteConfig.availability}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-400">
              Navigate
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-sm font-medium text-slate-300 transition hover:text-slate-100 dark:text-slate-300 dark:hover:text-slate-100"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-400">
              Connect
            </h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => {
                const isExternal = link.href.startsWith("http");

                return (
                  <li key={link.label}>
                    <Link
                      className="inline-flex items-center rounded-full border border-slate-700/60 bg-slate-800/60 px-3 py-1.5 text-sm font-medium text-slate-300 transition hover:border-slate-600/50 hover:bg-slate-700/50 hover:text-slate-100 dark:border-slate-600/60 dark:bg-slate-700/60 dark:text-slate-300 dark:hover:border-slate-500/50 dark:hover:bg-slate-600/50 dark:hover:text-slate-100"
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

        <div className="flex flex-col gap-2 text-sm text-slate-400 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            (c) {year} {siteConfig.name}. Crafted with Next.js and Tailwind CSS.
          </p>
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-slate-400 dark:text-slate-400">
            {siteConfig.role}
          </p>
        </div>
      </Container>
    </footer>
  );
}
