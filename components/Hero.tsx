"use client";

import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import { impactStats, siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] }
  };
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col overflow-hidden"
      style={{ minHeight: "calc(100dvh - 4.25rem)" }}
    >
      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(circle, var(--border) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          opacity: 0.75
        }}
      />

      <Container className="flex flex-col justify-center py-14 sm:py-20">

        {/* ── Status bar ─────────────────────────────────── */}
        <motion.div
          {...fadeUp(0)}
          className="flex items-center justify-between pb-6 mb-12 sm:mb-14"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden />
            <span
              className="text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: "var(--muted)" }}
            >
              {siteConfig.availability}
            </span>
          </div>
          <div
            className="hidden sm:flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em]"
            style={{ color: "var(--muted)" }}
          >
            <MapPin className="h-3.5 w-3.5" />
            {siteConfig.location}
          </div>
        </motion.div>

        {/* ── Main grid ──────────────────────────────────── */}
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1fr_400px] lg:items-center">

          {/* ── Left — text content ── */}
          <div className="space-y-10">

            {/* Mobile image */}
            <motion.div {...fadeUp(0.06)} className="lg:hidden">
              <div
                className="relative w-full overflow-hidden"
                style={{
                  maxWidth: 340,
                  aspectRatio: "4 / 5",
                  borderRadius: "1.25rem",
                  border: "1px solid var(--border)"
                }}
              >
                <Image
                  alt={siteConfig.profileImageAlt}
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 1024px) 80vw, 0px"
                  src={siteConfig.profileImage}
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.1)}
              className="font-display font-bold leading-[0.88] tracking-[-0.03em]"
              style={{ fontSize: "clamp(3.4rem, 9vw, 8.5rem)", color: "var(--ink)" }}
            >
              <span className="block">{siteConfig.name}</span>
              <span
                className="block font-light"
                style={{ color: "var(--muted)", fontStyle: "italic", fontSize: "0.8em" }}
              >
                {siteConfig.role}
              </span>
            </motion.h1>

            {/* Tagline + CTAs */}
            <motion.div
              {...fadeUp(0.22)}
              className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-12"
            >
              <p
                className="max-w-[28ch] text-base leading-relaxed sm:text-[1.05rem]"
                style={{ color: "var(--muted)" }}
              >
                {siteConfig.intro}
              </p>
              <div className="flex items-center gap-3 shrink-0">
                <ButtonLink href="/projects">
                  View Work <ArrowUpRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="/contact" variant="ghost">
                  Contact Me
                </ButtonLink>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fadeUp(0.35)}
              className="pt-8 grid grid-cols-3"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              {impactStats.map((stat, i) => (
                <div
                  key={stat.label}
                  style={
                    i !== 0
                      ? { borderLeft: "1px solid var(--border)", paddingLeft: "1.75rem" }
                      : { paddingRight: "1.75rem" }
                  }
                >
                  <p
                    className="font-display font-bold leading-none tracking-tight"
                    style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", color: "var(--ink)" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: "var(--muted)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Credibility */}
            <motion.p
              {...fadeUp(0.45)}
              className="text-xs font-medium uppercase tracking-[0.2em]"
              style={{ color: "var(--muted)", opacity: 0.65 }}
            >
              Helping brands grow online · Based in East Africa · Open to remote work
            </motion.p>
          </div>

          {/* ── Right — large profile photo (desktop) ── */}
          <motion.div
            {...fadeUp(0.12)}
            className="hidden lg:block"
          >
            <div
              className="relative w-full overflow-hidden"
              style={{
                aspectRatio: "3 / 4",
                borderRadius: "1.5rem",
                border: "1px solid var(--border)"
              }}
            >
              <Image
                alt={siteConfig.profileImageAlt}
                fill
                priority
                quality={90}
                sizes="400px"
                src={siteConfig.profileImage}
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
              {/* Name overlay at bottom */}
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 px-6 py-5"
                style={{
                  background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)",
                  paddingTop: "4rem"
                }}
              >
                <p
                  className="font-display text-sm font-semibold tracking-wide"
                  style={{ color: "var(--ink)" }}
                >
                  {siteConfig.name}
                </p>
                <p
                  className="text-xs mt-0.5 uppercase tracking-[0.15em]"
                  style={{ color: "var(--muted)" }}
                >
                  {siteConfig.location}
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
