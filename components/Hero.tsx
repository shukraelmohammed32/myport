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
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-teal-50/70 via-white to-transparent dark:from-slate-900/70 dark:via-slate-950"
      />
      <Container className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <FadeIn className="space-y-8">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
            <p className="chip">{siteConfig.availability}</p>
            <span className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400">
              <MapPin className="h-4 w-4" />
              {siteConfig.featuredPlace}
            </span>
          </div>

          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
              Designing resilient product systems
            </p>
            <h1 className="font-display text-4xl leading-tight text-slate-900 dark:text-slate-100 sm:text-5xl lg:text-6xl">
              {siteConfig.name}
              <span className="text-gradient mt-2 block">{siteConfig.role}</span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
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

        <FadeIn className="profile-float relative" delay={0.08}>
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-[radial-gradient(circle_at_top,rgba(15,118,110,0.35),transparent_55%),radial-gradient(circle_at_bottom,rgba(249,115,22,0.25),transparent_52%)] blur-3xl dark:opacity-80"
            />
            <div className="relative isolate mx-auto max-w-sm overflow-hidden rounded-[2.7rem] border border-slate-200/60 bg-slate-950/80 shadow-2xl sm:max-w-md dark:border-slate-800">
              <Image
                alt="Shukreal collaborating with a product team"
                className="object-cover object-top"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                src="/images/hero-visual.svg"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-slate-950/60"
              />

              <div className="panel absolute left-6 top-6 flex items-center gap-3 border-slate-200/70 bg-white/85 px-4 py-3 text-sm text-slate-900 shadow-lg dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-600 dark:bg-teal-400/15 dark:text-teal-300">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                    Profile Place
                  </p>
                  <p className="font-semibold">{siteConfig.featuredPlace}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{siteConfig.location}</p>
                </div>
              </div>

              <div className="panel absolute left-6 right-6 bottom-6 bg-white/90 p-5 text-slate-900 shadow-xl dark:bg-slate-900/90 dark:text-slate-100">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
                  Impact
                </p>
                <dl className="mt-4 grid grid-cols-3 gap-3">
                  {impactStats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</dt>
                      <dd className="font-display text-lg font-semibold text-slate-900 dark:text-slate-100">
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
