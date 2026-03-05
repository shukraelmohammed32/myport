import Image from "next/image";
import { ArrowRight, Download, MapPin } from "lucide-react";

import { impactStats, keyTech, siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-14 sm:pt-20" id="home">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <FadeIn className="space-y-8">
          <p className="chip">{siteConfig.availability}</p>

          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Elite Software Engineer
            </p>
            <h1 className="font-display text-4xl leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {siteConfig.name}
              <span className="text-gradient mt-2 block">{siteConfig.role}</span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
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

          <div className="flex flex-wrap gap-2">
            {keyTech.map((tech) => (
              <span className="chip" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="profile-float relative" delay={0.08}>
          <div className="panel relative overflow-hidden p-6 sm:p-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,118,110,0.2),transparent_48%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.15),transparent_55%)]" />
            <div className="relative space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <Image
                    alt={`${siteConfig.name} profile illustration`}
                    className="object-cover"
                    fill
                    priority
                    src="/images/profile.svg"
                  />
                </div>
                <div>
                  <p className="font-display text-xl font-semibold text-slate-900">{siteConfig.name}</p>
                  <p className="text-sm text-slate-600">{siteConfig.role}</p>
                  <p className="mt-1 inline-flex items-center gap-1 text-xs text-slate-500">
                    <MapPin className="h-3.5 w-3.5" />
                    {siteConfig.location}
                  </p>
                </div>
              </div>

              <dl className="grid grid-cols-3 gap-3">
                {impactStats.map((stat) => (
                  <div
                    className="rounded-2xl border border-slate-200 bg-white/90 px-3 py-3 text-center"
                    key={stat.label}
                  >
                    <dt className="text-xs text-slate-500">{stat.label}</dt>
                    <dd className="mt-1 font-display text-lg font-semibold text-slate-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
