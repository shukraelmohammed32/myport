import Image from "next/image";
import { ArrowRight, Download, MapPin } from "lucide-react";

import { impactStats, keyTech, siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden pb-12 pt-16 sm:pt-24" id="home">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-purple-900/50 via-purple-950/20 to-transparent"
      />
      <Container className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <FadeIn className="space-y-8">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <p className="chip relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                {siteConfig.availability}
              </span>
            </p>
            <span className="inline-flex items-center gap-1 text-slate-400">
              <MapPin className="h-4 w-4" />
              {siteConfig.featuredPlace}
            </span>
          </div>

          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-400">
              Designing resilient product systems
            </p>
            <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              <span className="text-slate-100">{siteConfig.name}</span>
              <span className="text-gradient mt-2 block">{siteConfig.role}</span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {siteConfig.intro}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/projects">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href={siteConfig.resumePath} variant="secondary" download>
              Download Resume
              <Download className="h-4 w-4" />
            </ButtonLink>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Core Stack
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {keyTech.map((tech) => (
                <span className="chip" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn className="profile-float perspective-wrap relative" delay={0.08}>
          <div className="relative">
            <div aria-hidden className="hero-orb hero-orb-a" />
            <div aria-hidden className="hero-orb hero-orb-b" />
            <div aria-hidden className="hero-orb hero-orb-c" />
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.35),transparent_55%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.28),transparent_52%)] blur-3xl"
            />
            <div className="tilt-surface relative isolate mx-auto aspect-[4/5] w-full max-w-[17rem] overflow-hidden rounded-[2.7rem] border border-purple-500/40 bg-purple-950/30 shadow-glow sm:max-w-[19rem] lg:max-w-[21rem]">
              <Image
                alt={siteConfig.profileImageAlt}
                className="object-cover object-center"
                fill
                priority
                quality={95}
                sizes="(max-width: 1024px) 100vw, 480px"
                src={siteConfig.profileImage}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/35"
              />

              <div className="panel absolute left-6 top-6 flex items-center gap-3 border-purple-500/30 bg-slate-800/85 px-4 py-3 text-sm text-slate-100 shadow-lg dark:border-purple-400/30 dark:bg-slate-900/90 dark:text-slate-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-300 dark:bg-purple-400/20 dark:text-purple-300">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-400">
                    Profile Place
                  </p>
                  <p className="font-semibold text-slate-100 dark:text-slate-100">{siteConfig.featuredPlace}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-400">{siteConfig.location}</p>
                </div>
              </div>

              <div className="panel absolute left-6 right-6 bottom-6 bg-slate-800/90 p-5 text-slate-100 shadow-xl dark:bg-slate-900/95 dark:text-slate-100">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400 dark:text-slate-400">
                  Impact
                </p>
                <dl className="mt-4 grid grid-cols-3 gap-3">
                  {impactStats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="text-xs text-slate-400 dark:text-slate-400">{stat.label}</dt>
                      <dd className="font-display text-lg font-semibold text-slate-100 dark:text-slate-100">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
