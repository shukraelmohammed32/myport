import Link from "next/link";

import { socialLinks, siteConfig } from "@/data/site";
import { Container } from "@/components/Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/80 py-8 dark:border-slate-800">
      <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          (c) {new Date().getFullYear()} {siteConfig.name}. Crafted with Next.js and Tailwind CSS.
        </p>
        <ul className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <Link
                className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                href={link.href}
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
