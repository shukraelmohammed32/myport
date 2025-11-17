import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Sparkles,
  WandSparkles,
  Workflow
} from "lucide-react";

import { Container } from "@/components/Container";
import { projects } from "@/data/projects";
import { siteConfig, socialLinks } from "@/data/site";

const heroStats = [
  {
    value: "3M+",
    label: "tokens and prompts mapped into rapid prototypes, automations, and launch-ready AI flows"
  },
  {
    value: "95%",
    label: "sprint clarity across strategy, UX, development, and polish before handoff"
  },
  {
    value: "88%",
    label: "design-to-development fidelity when turning concepts into high-contrast production UI"
  }
] as const;

const clientWordmarks = [
  "OpsDesk",
  "CampusConnect",
  "InvoiceFlow",
  "DevForum",
  "Portfolio CMS",
  "Library Store"
] as const;

const serviceCards = [
  {
    icon: BrainCircuit,
    title: "AI Strategy",
    description:
      "Turn rough ideas into a focused roadmap with product discovery, workflow mapping, prompt direction, and launch priorities."
  },
  {
    icon: Layers3,
    title: "AI Interface Design",
    description:
      "Craft premium AI-native dashboards, onboarding flows, and design systems that feel clear, cinematic, and conversion-ready."
  },
  {
    icon: Workflow,
    title: "Automation Systems",
    description:
      "Connect APIs, back-office workflows, and operational tooling so AI features create real business speed, not just demos."
  },
  {
    icon: WandSparkles,
    title: "Full-Stack Delivery",
    description:
      "Ship polished web products with modern frontend architecture, robust backend services, and a production-minded handoff."
  }
] as const;

const featuredProjects = [projects[4]!, projects[1]!, projects[3]!];

const socialIconByLabel = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail
} as const;

const particles = [
  { left: "18%", top: "25%", delay: "0s", duration: "7s", size: 8 },
  { left: "26%", top: "55%", delay: "0.9s", duration: "8s", size: 6 },
  { left: "34%", top: "33%", delay: "1.2s", duration: "6.5s", size: 10 },
  { left: "42%", top: "68%", delay: "0.6s", duration: "7.5s", size: 6 },
  { left: "50%", top: "20%", delay: "1.4s", duration: "8.2s", size: 12 },
  { left: "58%", top: "58%", delay: "0.4s", duration: "6.8s", size: 7 },
  { left: "66%", top: "30%", delay: "1.8s", duration: "7.6s", size: 9 },
  { left: "72%", top: "64%", delay: "0.2s", duration: "6.9s", size: 6 },
  { left: "78%", top: "42%", delay: "1.1s", duration: "8.4s", size: 8 }
] as const;

function HeroProfileVisual() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,42,42,0.3)_0%,rgba(255,42,42,0.1)_36%,transparent_72%)] blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-[23rem] w-[23rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(255,255,255,0.16)_0%,rgba(255,42,42,0.12)_48%,transparent_76%)] blur-2xl" />
      <div className="absolute left-1/2 top-[14%] h-[7rem] w-[7rem] -translate-x-1/2 rounded-full bg-[#ff5b5b]/30 blur-3xl" />

      {particles.map((particle) => (
        <span
          aria-hidden
          className="particle-orb absolute rounded-full bg-[#ff6b6b]/80 shadow-[0_0_18px_rgba(255,42,42,0.9)]"
          key={`${particle.left}-${particle.top}`}
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration
          }}
        />
      ))}

      <div className="hero-float absolute left-1/2 top-[10%] h-[29rem] w-[21rem] -translate-x-1/2 sm:h-[31rem] sm:w-[23rem]">
        <div className="absolute inset-0 rounded-[34px] border border-[#ff8a8a]/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_0_80px_rgba(255,42,42,0.14),0_28px_80px_rgba(0,0,0,0.44),inset_0_1px_0_rgba(255,255,255,0.12)]" />
        <div className="absolute inset-[5%] overflow-hidden rounded-[28px] border border-white/12 bg-black/40 shadow-[0_22px_60px_rgba(0,0,0,0.45)]">
          <Image
            alt={siteConfig.profileImageAlt}
            className="object-cover object-center"
            fill
            priority
            sizes="(min-width: 1280px) 24rem, (min-width: 640px) 23rem, 80vw"
            src={siteConfig.profileImage}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,42,42,0.2),transparent_28%,transparent_54%,rgba(0,0,0,0.88)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-20">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/52">
              {siteConfig.location}
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-white">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm leading-6 text-white/70">{siteConfig.role}</p>
          </div>
        </div>

        <div className="absolute -left-8 top-10 hidden rounded-full border border-white/10 bg-black/42 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/72 shadow-[0_14px_32px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:block">
          Premium AI Build
        </div>
        <div className="absolute -right-8 bottom-14 hidden rounded-[20px] border border-[#ff6b6b]/20 bg-[linear-gradient(135deg,rgba(255,42,42,0.24),rgba(255,255,255,0.04))] px-4 py-3 text-sm font-medium text-white shadow-[0_18px_40px_rgba(255,42,42,0.18)] backdrop-blur-xl sm:block">
          Open for sprints
        </div>
      </div>
    </div>
  );
}

export function AISprintLanding() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative isolate pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pb-24" id="home">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(255,42,42,0.2),transparent_62%)]" />
        <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-[#ff2a2a]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-[#ff2a2a]/10 blur-3xl" />

        <Container className="relative">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl">
                <Sparkles className="h-3.5 w-3.5 text-[#ff6b6b]" />
                Full-Stack Portfolio
              </div>

              <div className="space-y-6">
                <p className="max-w-xl text-sm font-medium uppercase tracking-[0.32em] text-[#ff7a7a]">
                  Modern web apps, premium UI, and scalable backend delivery
                </p>
                <h1 className="max-w-4xl font-display text-[clamp(3.2rem,8vw,6.8rem)] font-semibold leading-[0.88] tracking-[-0.06em] text-white">
                  <span className="block text-white">Shukrael</span>
                  <span className="block bg-[linear-gradient(180deg,#ffffff_0%,#ffb3b3_46%,#ff5b5b_100%)] bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(255,42,42,0.28)]">
                    Mohammed
                  </span>
                  <span className="mt-4 block text-base font-medium uppercase tracking-[0.42em] text-[#ff7a7a] sm:text-lg">
                    Full-Stack Developer
                  </span>
                </h1>
                <p className="max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                  Design-forward interfaces, solid frontend architecture, and dependable backend
                  systems brought together in one polished portfolio. {siteConfig.name} blends visual
                  craft, product thinking, and engineering depth to turn ideas into launch-ready web
                  experiences.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#ff6b6b]/45 bg-[linear-gradient(135deg,rgba(255,42,42,0.9),rgba(110,0,0,0.96))] px-6 py-4 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,84,84,0.2),0_16px_40px_rgba(255,42,42,0.28),inset_0_1px_0_rgba(255,255,255,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(255,84,84,0.28),0_24px_48px_rgba(255,42,42,0.34),inset_0_1px_0_rgba(255,255,255,0.22)]"
                  href="/#services"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white/86 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_18px_48px_rgba(0,0,0,0.34)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[#ff6b6b]/30 hover:text-white"
                  href="/#pricing"
                >
                  View Pricing Plans
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {heroStats.map((stat) => (
                  <div className="neo-panel p-5" key={stat.value}>
                    <p className="text-3xl font-bold tracking-tight text-white">{stat.value}</p>
                    <p className="mt-3 text-sm leading-6 text-white/58">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="neo-panel flex flex-col gap-5 rounded-[28px] p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#ff7f7f]/30 bg-[radial-gradient(circle,rgba(255,116,116,0.38),rgba(255,42,42,0.12))] text-sm font-semibold text-white shadow-[0_0_28px_rgba(255,42,42,0.3)]">
                    AY
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/50">
                      Client Note
                    </p>
                    <p className="mt-1 max-w-xl text-sm leading-6 text-white/76 sm:text-base">
                      &quot;We moved from idea to polished AI workflow in two tight iterations and the
                      product finally looked as sharp as the strategy deck.&quot;
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-right shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                  <p className="text-sm font-semibold text-white">Amina Yusuf</p>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                    Product Lead
                  </p>
                </div>
              </div>
            </div>

            <div className="relative min-h-[42rem]">
              <div className="pointer-events-none absolute left-0 top-24 hidden xl:flex xl:flex-col xl:gap-3">
                {socialLinks.map((link) => {
                  const Icon = socialIconByLabel[link.label as keyof typeof socialIconByLabel] ?? Mail;
                  const isExternal = link.href.startsWith("http") || link.href.startsWith("mailto:");

                  return (
                    <Link
                      aria-label={link.label}
                      className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_18px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[#ff6b6b]/30 hover:text-[#ff8a8a]"
                      href={link.href}
                      key={link.label}
                      rel={isExternal ? "noreferrer" : undefined}
                      target={isExternal && !link.href.startsWith("mailto:") ? "_blank" : undefined}
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  );
                })}
              </div>

              <div className="neo-panel relative overflow-hidden rounded-[36px] px-6 pb-8 pt-10 sm:px-8 sm:pb-10">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,42,42,0.16),transparent_56%)]" />
                <div className="absolute inset-x-8 top-8 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)]" />

                <div className="relative z-20 ml-auto max-w-[15rem] rounded-[28px] border border-white/10 bg-black/35 p-5 shadow-[0_18px_46px_rgba(0,0,0,0.44),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/45">
                    Sprint Dashboard
                  </p>
                  <div className="mt-5 grid gap-4">
                    <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                      <p className="text-3xl font-bold tracking-tight text-white">230+</p>
                      <p className="mt-2 text-sm leading-6 text-white/56">
                        automation blocks, prompt flows, and product-ready components launched
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                      <p className="text-3xl font-bold tracking-tight text-white">400+</p>
                      <p className="mt-2 text-sm leading-6 text-white/56">
                        delivery tasks accelerated across discovery, build, QA, and launch polish
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative mt-6 min-h-[31rem] overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(0,0,0,0.16),rgba(0,0,0,0.42))]">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,42,42,0.12),transparent_50%,rgba(255,255,255,0.04))]" />
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                      backgroundSize: "40px 40px"
                    }}
                  />
                  <HeroProfileVisual />

                  <div className="relative z-10 flex min-h-[31rem] items-end p-5 sm:p-6">
                    <div className="max-w-xs rounded-[26px] border border-white/10 bg-black/32 p-5 shadow-[0_18px_42px_rgba(0,0,0,0.48),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
                        Delivery Rhythm
                      </p>
                      <div className="mt-4 grid gap-3">
                        {[
                          "Discovery and product framing",
                          "AI UX prototype and workflow design",
                          "Launch-ready development and iteration"
                        ].map((item) => (
                          <div className="flex items-center gap-3" key={item}>
                            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5c5c] shadow-[0_0_14px_rgba(255,42,42,0.9)]" />
                            <p className="text-sm text-white/72">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="neo-panel mt-10 rounded-[28px] px-6 py-5 sm:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
                  Selected Works
                </p>
                <p className="mt-2 text-sm leading-6 text-white/64 sm:text-base">
                  Monochrome wordmarks inspired by your shipped projects, styled like a premium
                  client strip for the landing page.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-center sm:grid-cols-3 lg:grid-cols-6">
                {clientWordmarks.map((wordmark) => (
                  <div
                    className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/42"
                    key={wordmark}
                  >
                    {wordmark}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-gap relative" id="services">
        <Container className="space-y-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff7a7a]">
              Services
            </p>
            <h2 className="font-display text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
              End-to-End AI Services
            </h2>
            <p className="max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              Strategy, interface design, automation thinking, and production development working
              together in one red-lit sprint system. The goal is simple: fewer handoff gaps and
              faster momentum from concept to release.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="neo-panel rounded-[34px] p-7 sm:p-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#ff7f7f]/25 bg-[#ff2a2a]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#ff8e8e]">
                    <BrainCircuit className="h-3.5 w-3.5" />
                    AI Strategy Card
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/46">
                    Rounded corners + soft neon shadows
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display text-3xl font-bold tracking-[-0.03em] text-white">
                    Shape the roadmap before the build sprint burns time.
                  </h3>
                  <p className="max-w-2xl text-sm leading-7 text-white/64 sm:text-base">
                    Every engagement starts with product framing, technical choices, and the exact
                    user flow that AI needs to support. That means cleaner prompts, sharper UX, and
                    a build plan that fits startup speed without feeling improvised.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Opportunity mapping for AI features and workflow automation",
                    "Prompt, data, and system requirements aligned early",
                    "Premium UI direction before implementation starts",
                    "Delivery slices sized for tight, high-output sprints"
                  ].map((item) => (
                    <div
                      className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                      key={item}
                    >
                      <p className="text-sm leading-6 text-white/74">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-[28px] border border-[#ff5b5b]/18 bg-[linear-gradient(135deg,rgba(255,42,42,0.18),rgba(255,255,255,0.02))] p-6 shadow-[0_18px_40px_rgba(255,42,42,0.12)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
                    Best For
                  </p>
                  <p className="mt-3 text-base leading-7 text-white/76">
                    Founders shaping a new AI product, agencies that need a technical design partner,
                    and internal teams pushing for a faster design-to-development loop.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {serviceCards.map((service) => {
                const Icon = service.icon;

                return (
                  <div className="neo-panel rounded-[30px] p-6" key={service.title}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#ff7f7f]/25 bg-[#ff2a2a]/10 text-[#ff8080] shadow-[0_0_24px_rgba(255,42,42,0.14)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/62">{service.description}</p>
                  </div>
                );
              })}

              <div className="neo-panel rounded-[30px] p-6 sm:col-span-2" id="pricing">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#ff7a7a]">
                      Pricing Plans
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      Flexible sprint models for different stages of the build.
                    </h3>
                  </div>
                  <p className="max-w-md text-sm leading-7 text-white/58">
                    Rates stay tailored to scope, but the structure stays clear so teams know how
                    discovery, delivery, and iteration fit together.
                  </p>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-3">
                  {[
                    {
                      title: "Discovery Sprint",
                      detail: "Fast product framing, AI opportunity mapping, and UX direction."
                    },
                    {
                      title: "Build Sprint",
                      detail: "High-focus design and development for a polished release slice."
                    },
                    {
                      title: "Ongoing Partner",
                      detail: "Retainer-style support for teams shipping AI features continuously."
                    }
                  ].map((plan) => (
                    <div
                      className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5"
                      key={plan.title}
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                        {plan.title}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-white/56">{plan.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-gap relative" id="works">
        <Container className="space-y-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff7a7a]">
                Works
              </p>
              <h2 className="font-display text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
                Portfolio work, reframed like a premium AI product studio.
              </h2>
              <p className="text-base leading-8 text-white/66 sm:text-lg">
                A few standout builds that connect the futuristic landing-page concept back to your
                actual portfolio and project detail pages.
              </p>
            </div>

            <Link
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white/82 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition duration-300 hover:border-[#ff6b6b]/30 hover:text-white"
              href="/projects"
            >
              Explore All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Link
                className="neo-panel group overflow-hidden rounded-[30px] transition duration-300 hover:-translate-y-1"
                href={`/projects/${project.slug}`}
                key={project.slug}
              >
                <div className="relative overflow-hidden border-b border-white/8 bg-[radial-gradient(circle_at_top,rgba(255,42,42,0.22),transparent_62%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-8">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,42,42,0.12),transparent_50%,rgba(255,255,255,0.04))]" />
                  <div className="relative h-44 overflow-hidden rounded-[22px] border border-white/10 bg-black/30">
                    <Image
                      alt={project.title}
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      fill
                      sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                      src={project.image}
                    />
                  </div>
                  <div className="relative mt-6 flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ff7a7a]">
                      0{index + 1}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/46">
                      Case Study
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold tracking-[-0.02em] text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/62">{project.summary}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((item) => (
                      <span
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/52"
                        key={item}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-gap relative" id="about">
        <Container>
          <div className="grid gap-6 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div className="neo-panel overflow-hidden rounded-[34px]">
              <div className="relative h-full min-h-[25rem]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,42,42,0.16),transparent_52%)]" />
                <Image
                  alt={siteConfig.profileImageAlt}
                  className="object-cover object-center"
                  fill
                  sizes="(min-width: 1280px) 32vw, 100vw"
                  src={siteConfig.profileImage}
                />
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(5,5,5,0.92))] px-6 pb-6 pt-20">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/50">
                    {siteConfig.location}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-white">{siteConfig.name}</p>
                  <p className="mt-2 text-sm leading-6 text-white/68">{siteConfig.role}</p>
                </div>
              </div>
            </div>

            <div className="neo-panel rounded-[34px] p-7 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff7a7a]">
                About
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
                A portfolio-first identity with a sharper AI agency edge.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/66 sm:text-lg">
                This landing page keeps your personal brand visible while presenting you as the kind
                of modern operator who can guide strategy, shape the interface, and build the system
                without losing speed or taste.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Product-minded execution with a strong UI and UX lens",
                  "Modern frontend systems paired with dependable backend delivery",
                  "Fast iteration for startups, internal tools, and AI-native products",
                  "Clean communication, premium visuals, and portfolio-backed credibility"
                ].map((item) => (
                  <div
                    className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5"
                    key={item}
                  >
                    <p className="text-sm leading-6 text-white/72">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#ff6b6b]/45 bg-[linear-gradient(135deg,rgba(255,42,42,0.88),rgba(110,0,0,0.96))] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(255,42,42,0.26)]"
                  href={siteConfig.resumePath}
                >
                  View Resume
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white/82"
                  href="/about"
                >
                  Read Full Story
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-24 pt-8 sm:pb-28" id="contact">
        <Container>
          <div className="neo-panel rounded-[36px] p-7 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff7a7a]">
                  Contact
                </p>
                <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
                  Need a high-speed AI product sprint with premium UI polish?
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/66 sm:text-lg">
                  Let&apos;s shape the next release around stronger UX, sharper execution, and a build
                  plan that actually ships.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <Link
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#ff6b6b]/45 bg-[linear-gradient(135deg,rgba(255,42,42,0.9),rgba(110,0,0,0.96))] px-6 py-4 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(255,42,42,0.28)]"
                  href={`mailto:${siteConfig.email}`}
                >
                  Email Me
                  <Mail className="h-4 w-4" />
                </Link>
                <Link
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white/84"
                  href="/contact"
                >
                  Open Contact Page
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_1fr_1fr]">
              <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/46">
                  Email
                </p>
                <p className="mt-3 text-sm leading-6 text-white/78">{siteConfig.email}</p>
              </div>
              <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/46">
                  Location
                </p>
                <p className="mt-3 text-sm leading-6 text-white/78">{siteConfig.location}</p>
              </div>
              <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/46">
                  Availability
                </p>
                <p className="mt-3 text-sm leading-6 text-white/78">{siteConfig.availability}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
