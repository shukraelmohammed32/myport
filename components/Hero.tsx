"use client";

import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import { impactStats, siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: [0.22, 0.61, 0.36, 1] as [number, number, number, number] }
  };
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col overflow-hidden"
      style={{ minHeight: "calc(100dvh - 4.25rem)" }}
    >
      {/* Animated background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage: "linear-gradient(to bottom, var(--background) 0%, var(--background-accent) 100%)",
        }}
      />
      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(circle, var(--border) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          opacity: 0.7
        }}
      />

      {/* Container fills full remaining height */}
      <Container className="flex-1 flex flex-col py-10 sm:py-14">

        {/* ── Status bar ──────────────────────────────────────── */}
        <motion.div
          {...fadeUp(0)}
          className="flex items-center justify-between pb-5 mb-8 shrink-0"
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
            className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em]"
            style={{ color: "var(--muted)" }}
          >
            <MapPin className="h-3.5 w-3.5" />
            {siteConfig.location}
          </div>
        </motion.div>

        {/* ── Main grid — fills remaining height ──────────────── */}
        <div className="flex-1 grid lg:grid-cols-[1fr_42%] gap-8 lg:gap-12 lg:items-stretch">

          {/* ── Left: text spread top-to-bottom ── */}
          <div className="flex flex-col justify-between gap-8 py-2">

            {/* TOP: mobile image + headline */}
            <div className="space-y-7">

              {/* Mobile image — circular avatar inline */}
              <motion.div {...fadeUp(0.05)} className="flex items-center gap-4 lg:hidden">
                <div
                  className="relative shrink-0 overflow-hidden"
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "9999px",
                    border: "2px solid var(--border)"
                  }}
                >
                  <Image
                    alt={siteConfig.profileImageAlt}
                    fill
                    priority
                    quality={90}
                    sizes="64px"
                    src={siteConfig.profileImage}
                    style={{ objectFit: "cover", objectPosition: "center 15%" }}
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                    {siteConfig.name}
                  </p>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>
                    <Typewriter
                      options={{
                        strings: siteConfig.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </p>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                {...fadeUp(0.1)}
                className="font-display font-bold leading-[0.88] tracking-[-0.03em]"
                style={{ fontSize: "clamp(2.8rem, 7vw, 7.5rem)", color: "var(--ink)" }}
              >
                <span className="block">{siteConfig.name}</span>
                <span
                  className="block font-light"
                  style={{ color: "var(--muted)", fontStyle: "italic", fontSize: "0.78em" }}
                >
                  {siteConfig.role}
                </span>
              </motion.h1>
            </div>

            {/* MIDDLE: tagline + CTAs */}
            <motion.div
              {...fadeUp(0.2)}
              className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-10"
            >
              <p
                className="max-w-[30ch] text-base leading-relaxed"
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

            {/* BOTTOM: stats + credibility */}
            <div className="space-y-4">
              <motion.div
                {...fadeUp(0.32)}
                className="pt-6 grid grid-cols-3"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                {impactStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    style={
                      i !== 0
                        ? { borderLeft: "1px solid var(--border)", paddingLeft: "1.5rem" }
                        : { paddingRight: "1.5rem" }
                    }
                  >
                    <p
                      className="font-display font-bold leading-none tracking-tight"
                      style={{ fontSize: "clamp(1.6rem, 3vw, 2.8rem)", color: "var(--ink)" }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="mt-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em]"
                      style={{ color: "var(--muted)" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>

              <motion.p
                {...fadeUp(0.4)}
                className="text-[0.7rem] font-medium uppercase tracking-[0.2em]"
                style={{ color: "var(--muted)", opacity: 0.6 }}
              >
                Helping brands grow online · East Africa · Open to remote
              </motion.p>
            </div>
          </div>

          {/* ── Right: profile photo fills full column height ── */}
          <motion.div
            {...fadeUp(0.08)}
            className="hidden lg:block relative min-h-[480px]"
          >
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                borderRadius: "1.5rem",
                border: "1px solid var(--border)"
              }}
            >
              <Image
                alt={siteConfig.profileImageAlt}
                fill
                priority
                quality={90}
                sizes="42vw"
                src={siteConfig.profileImage}
                style={{ objectFit: "cover", objectPosition: "center 15%" }}
              />

              {/* Bottom name badge */}
              <div
                className="absolute inset-x-0 bottom-0 px-6 pb-6"
                style={{
                  background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)",
                  paddingTop: "5rem"
                }}
              >
                <p
                  className="font-display text-sm font-bold tracking-wide"
                  style={{ color: "var(--ink)" }}
                >
                  {siteConfig.name}
                </p>
                <p
                  className="text-xs mt-0.5 uppercase tracking-[0.14em]"
                  style={{ color: "var(--muted)" }}
                >
                  {siteConfig.role} · {siteConfig.location}
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
