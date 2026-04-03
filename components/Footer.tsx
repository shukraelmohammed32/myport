import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { navigation, socialLinks, siteConfig } from "@/data/site";
import { Container } from "@/components/Container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-8 pt-4 sm:pb-10">
      <Container>
        <div className="glass-panel rounded-[34px] px-6 py-8 sm:px-8">
          <div className="grid gap-8 border-b border-[color:var(--border)] pb-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--accent-soft-strong)] bg-[linear-gradient(135deg,var(--accent-soft),var(--accent-soft-strong))]">
                  <span className="absolute inset-1 rounded-[14px] bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))]" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_18px_var(--glow-a)]" />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold tracking-tight text-[color:var(--foreground)]">
                    {siteConfig.name}
                  </p>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted)]">
                    Futuristic full-stack portfolio
                  </p>
                </div>
              </div>

              <p className="max-w-md text-sm leading-7 text-[color:var(--muted)]">
                {siteConfig.availability}
              </p>

              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--accent-soft-strong)] bg-[var(--accent-soft)] px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-strong)]">
                <Sparkles className="h-3.5 w-3.5" />
                {siteConfig.role}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[color:var(--accent)]">
                Navigation
              </p>
              <div className="mt-4 grid gap-3">
                {navigation.map((item) => (
                  <Link
                    className="text-sm font-medium text-[color:var(--muted)] transition duration-300 hover:text-[color:var(--foreground)]"
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[color:var(--accent)]">
                Connect
              </p>
              <div className="mt-4 grid gap-3">
                {socialLinks.map((link) => {
                  const isExternal = link.href.startsWith("http");

                  return (
                    <Link
                      className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--muted)] transition duration-300 hover:text-[color:var(--foreground)]"
                      href={link.href}
                      key={link.label}
                      rel={isExternal ? "noreferrer" : undefined}
                      target={isExternal ? "_blank" : undefined}
                    >
                      {link.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-6 text-xs text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between">
            <p>
              (c) {year} {siteConfig.name}. Built with Next.js, Tailwind CSS, Framer Motion, and neon glass styling.
            </p>
            <p className="font-semibold uppercase tracking-[0.22em] text-[color:var(--accent)]">
              Premium Full-Stack Portfolio
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
