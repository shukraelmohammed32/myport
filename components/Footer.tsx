import Link from "next/link";

import { navigation, socialLinks, siteConfig } from "@/data/site";
import { Container } from "@/components/Container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-16 border-t border-slate-200/80 bg-gradient-to-b from-white/75 to-slate-100/60 py-10 dark:border-slate-800 dark:from-slate-950/70 dark:to-slate-950/30">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-500/45 to-orange-400/45 dark:via-teal-400/50 dark:to-orange-300/50" />

      <Container className="relative space-y-8">
        <div className="grid gap-8 border-b border-slate-200/80 pb-8 dark:border-slate-800 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-3">
            <p className="inline-flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-teal-500 to-orange-400" />
              {siteConfig.name}
            </p>
            <p className="max-w-md text-sm text-slate-600 dark:text-slate-300">{siteConfig.availability}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
              Navigate
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-sm font-medium text-slate-600 transition hover:text-teal-700 dark:text-slate-300 dark:hover:text-teal-300"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
              Connect
            </h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => {
                const isExternal = link.href.startsWith("http");

                return (
                  <li key={link.label}>
                    <Link
                      className="inline-flex items-center rounded-full border border-slate-200/90 px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:border-teal-500/45 hover:bg-teal-500/10 hover:text-teal-700 dark:border-slate-700/80 dark:text-slate-300 dark:hover:border-teal-300/40 dark:hover:bg-teal-300/10 dark:hover:text-teal-200"
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

        <div className="flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            (c) {year} {siteConfig.name}. Crafted with Next.js and Tailwind CSS.
          </p>
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-slate-500 dark:text-slate-400">
            {siteConfig.role}
          </p>
        </div>
      </Container>
    </footer>
  );
}
