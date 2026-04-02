import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { navigation, socialLinks, siteConfig } from "@/data/site";
import { Container } from "@/components/Container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-20 py-12"
      style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--background)" }}
    >
      <Container className="space-y-10">

        {/* Top grid */}
        <div
          className="grid gap-10 pb-10 md:grid-cols-[1.5fr_1fr_1fr]"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          {/* Brand */}
          <div className="space-y-3">
            <p
              className="flex items-center gap-2.5 font-display text-base font-semibold"
              style={{ color: "var(--foreground)" }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: "var(--foreground)" }}
                aria-hidden
              />
              {siteConfig.name}
            </p>
            <p className="max-w-xs text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              {siteConfig.availability}
            </p>
            <p className="text-xs" style={{ color: "var(--muted)", opacity: 0.65 }}>
              {siteConfig.email}
            </p>
          </div>

          {/* Navigate */}
          <div className="space-y-4">
            <h3
              className="text-[0.7rem] font-bold uppercase tracking-[0.2em]"
              style={{ color: "var(--muted)" }}
            >
              Navigate
            </h3>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="link-hover text-sm font-medium opacity-60 transition-opacity hover:opacity-100"
                    style={{ color: "var(--foreground)" }}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3
              className="text-[0.7rem] font-bold uppercase tracking-[0.2em]"
              style={{ color: "var(--muted)" }}
            >
              Connect
            </h3>
            <ul className="space-y-2.5">
              {socialLinks.map((link) => {
                const isExternal = link.href.startsWith("http");
                return (
                  <li key={link.label}>
                    <Link
                      className="link-hover inline-flex items-center gap-1.5 text-sm font-medium opacity-60 transition-opacity hover:opacity-100"
                      style={{ color: "var(--foreground)" }}
                      href={link.href}
                      rel={isExternal ? "noreferrer" : undefined}
                      target={isExternal ? "_blank" : undefined}
                    >
                      {link.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col gap-1 text-xs sm:flex-row sm:items-center sm:justify-between"
          style={{ color: "var(--muted)" }}
        >
          <p>
            © {year} {siteConfig.name}. Crafted with Next.js &amp; Tailwind CSS.
          </p>
          <p className="uppercase tracking-[0.12em] font-medium">{siteConfig.role}</p>
        </div>

      </Container>
    </footer>
  );
}
