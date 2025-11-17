import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { navigation, socialLinks, siteConfig } from "@/data/site";
import { Container } from "@/components/Container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-10 pt-4">
      <Container>
        <div className="neo-panel rounded-[32px] px-6 py-8 sm:px-8">
          <div className="grid gap-8 border-b border-white/8 pb-8 lg:grid-cols-[1.4fr_1fr_1fr]">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inset-0 rounded-full bg-[#ff2a2a] blur-[6px]" />
                  <span className="relative rounded-full bg-[#ff5b5b]" />
                </span>
                <p className="font-display text-lg font-semibold tracking-tight text-white">
                  {siteConfig.name}
                </p>
              </div>
              <p className="max-w-md text-sm leading-7 text-white/62">{siteConfig.availability}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
                {siteConfig.role}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#ff7a7a]">
                Navigation
              </p>
              <div className="mt-4 grid gap-3">
                {navigation.map((item) => (
                  <Link
                    className="text-sm font-medium text-white/62 transition duration-300 hover:text-white"
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#ff7a7a]">
                Connect
              </p>
              <div className="mt-4 grid gap-3">
                {socialLinks.map((link) => {
                  const isExternal = link.href.startsWith("http");

                  return (
                    <Link
                      className="inline-flex items-center gap-2 text-sm font-medium text-white/62 transition duration-300 hover:text-white"
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

          <div className="flex flex-col gap-2 pt-6 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
            <p>
              (c) {year} {siteConfig.name}. Built with Next.js, Tailwind CSS, and a sharp red glow.
            </p>
            <p className="font-semibold uppercase tracking-[0.22em]">Premium AI Portfolio</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
