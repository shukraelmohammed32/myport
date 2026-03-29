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
      className="relative flex flex-col justify-center overflow-hidden"
      style={{ minHeight: "calc(100dvh - 4.25rem)" }}
    >
      {/* Subtle dot grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(circle, var(--border) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          opacity: 0.8
        }}
      />

      <Container className="py-14 sm:py-20">

        {/* ── Status bar ─────────────────────────────────── */}
        <motion.div
          {...fadeUp(0)}
          className="flex items-center justify-between pb-6 mb-12 sm:mb-16"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-2.5">
            <span
              className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"
              aria-hidden
            />
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
        <div className="grid lg:grid-cols-[1fr_200px] lg:items-end gap-10 lg:gap-0">

          {/* Left — headline + sub + CTA */}
          <div className="space-y-10 sm:space-y-12">

            {/* Mobile avatar */}
            <motion.div {...fadeUp(0.08)} className="lg:hidden">
              <div
                style={{
                  position: "relative",
                  width: 72,
                  height: 72,
                  borderRadius: "9999px",
                  overflow: "hidden",
                  border: "2px solid var(--border)"
                }}
              >
                <Image
                  alt={siteConfig.profileImageAlt}
                  fill
                  priority
                  quality={85}
                  sizes="72px"
                  src={siteConfig.profileImage}
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.1)}
              className="font-display font-bold leading-[0.88] tracking-[-0.03em] select-none"
              style={{
                fontSize: "clamp(3.6rem, 11vw, 9.5rem)",
                color: "var(--ink)"
              }}
            >
              <span className="block">{siteConfig.name}</span>
              <span
                className="block font-light"
                style={{
                  color: "var(--muted)",
                  fontStyle: "italic",
                  fontSize: "0.8em"
                }}
              >
                {siteConfig.role}
              </span>
            </motion.h1>

            {/* Tagline + CTAs */}
            <motion.div
              {...fadeUp(0.22)}
              className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-14"
            >
              <p
                className="max-w-[30ch] text-base leading-relaxed sm:text-[1.05rem]"
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
          </div>

          {/* Right — profile photo */}
          <motion.div
            {...fadeUp(0.15)}
            className="hidden lg:block lg:self-end"
          >
            <div
              style={{
                position: "relative",
                width: 210,
                height: 268,
                borderRadius: "1.25rem",
                overflow: "hidden",
                border: "1px solid var(--border)"
              }}
            >
              <Image
                alt={siteConfig.profileImageAlt}
                fill
                priority
                quality={90}
                sizes="210px"
                src={siteConfig.profileImage}
                style={{
                  objectFit: "cover",
                  objectPosition: "center top"
                }}
              />
              {/* Subtle bottom fade */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to bottom, transparent 60%, var(--bg) 100%)",
                  opacity: 0.4
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* ── Stats bar ──────────────────────────────────── */}
        <motion.div
          {...fadeUp(0.35)}
          className="mt-16 sm:mt-20 pt-8 grid grid-cols-3"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {impactStats.map((stat, i) => (
            <div
              key={stat.label}
              style={
                i !== 0
                  ? { borderLeft: "1px solid var(--border)", paddingLeft: "2rem" }
                  : { paddingRight: "2rem" }
              }
            >
              <p
                className="font-display font-bold leading-none tracking-tight"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                  color: "var(--ink)"
                }}
              >
                {stat.value}
              </p>
              <p
                className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em]"
                style={{ color: "var(--muted)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ── Credibility line ───────────────────────────── */}
        <motion.p
          {...fadeUp(0.45)}
          className="mt-8 text-xs font-medium uppercase tracking-[0.2em]"
          style={{ color: "var(--muted)", opacity: 0.7 }}
        >
          Helping brands grow online · Based in East Africa · Open to remote work
        </motion.p>

      </Container>
    </section>
  );
}
