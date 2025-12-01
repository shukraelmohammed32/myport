"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Code2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MessageSquareQuote,
  ShieldCheck,
  Sparkles,
  Star,
  UserRound,
  Wrench
} from "lucide-react";
import {
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";

import { Container } from "@/components/Container";
import {
  aboutHighlights,
  achievementMetrics,
  certificateShowcase,
  experienceTimeline,
  floatingTech,
  serviceHighlights,
  skillGroups,
  testimonialSlides
} from "@/data/portfolioShowcase";
import { projects as defaultProjects } from "@/data/projects";
import { siteConfig, socialLinks } from "@/data/site";
import { cn } from "@/lib/cn";
import { getStoredProjects } from "@/lib/projectStore";
import type { Project } from "@/types/portfolio";

type CertificateItem = (typeof certificateShowcase)[number];
type TestimonialItem = (typeof testimonialSlides)[number];

const sectionEntry = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
};

const socialIconByLabel = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail
} as const;

function Reveal({
  children,
  className,
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={sectionEntry.initial}
      transition={{ ...sectionEntry.transition, delay }}
      viewport={sectionEntry.viewport}
      whileInView={sectionEntry.whileInView}
    >
      {children}
    </motion.div>
  );
}

function CountUpMetric({
  value,
  suffix,
  label
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) {
      return;
    }

    let frame = 0;
    const duration = 1200;
    const start = performance.now();

    const tick = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      setDisplayValue(Math.round(value * (1 - Math.pow(1 - progress, 3))));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <div ref={ref} className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--panel-shadow)] backdrop-blur-xl">
      <p className="font-display text-4xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
        {displayValue}
        {suffix}
      </p>
      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{label}</p>
    </div>
  );
}

function TiltCard({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  const [transform, setTransform] = useState(
    "perspective(1600px) rotateX(0deg) rotateY(0deg) translateY(0px)"
  );

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (event.clientY - rect.top) / rect.height - 0.5;

    setTransform(
      `perspective(1600px) rotateX(${offsetY * -8}deg) rotateY(${offsetX * 10}deg) translateY(-10px)`
    );
  };

  const resetTilt = () => {
    setTransform("perspective(1600px) rotateX(0deg) rotateY(0deg) translateY(0px)");
  };

  return (
    <div className="perspective-[1600px]" onMouseLeave={resetTilt} onMouseMove={handleMove}>
      <div
        className={cn(
          "transform-gpu transition-transform duration-200 [transform-style:preserve-3d]",
          className
        )}
        style={{ transform }}
      >
        {children}
      </div>
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left"
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("space-y-4", align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl")}>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-[var(--muted)] sm:text-lg">{description}</p>
    </div>
  );
}

function CertificateModal({
  item,
  onClose
}: {
  item: CertificateItem | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="w-full max-w-3xl overflow-hidden rounded-[32px] border border-white/10 bg-[var(--background-accent)] shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            onClick={(event) => event.stopPropagation()}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative overflow-hidden border-b border-white/8 p-8 lg:border-b-0 lg:border-r">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,224,255,0.16),transparent_34%),radial-gradient(circle_at_bottom,rgba(255,42,42,0.18),transparent_36%)]" />
                <div className="certificate-preview relative mx-auto flex min-h-[22rem] max-w-[22rem] flex-col justify-between rounded-[28px] border border-white/12 p-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent-secondary)]">
                      Certificate Preview
                    </p>
                    <h3 className="mt-5 font-display text-3xl font-semibold tracking-[-0.04em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-white/72">{item.summary}</p>
                  </div>
                  <div className="space-y-3 rounded-[22px] border border-white/10 bg-black/25 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/50">{item.issuer}</p>
                    <p className="text-sm text-white/70">{item.year}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">
                    Certificates
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    This modal is ready for your real PDF or image preview. Replace the placeholder
                    content with your verified certificate asset and URL when you&apos;re ready.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-secondary)]">
                    Checklist
                  </p>
                  <div className="mt-4 grid gap-3">
                    {item.checkpoints.map((point) => (
                      <div className="flex items-center gap-3" key={point}>
                        <ShieldCheck className="h-4 w-4 text-[var(--accent)]" />
                        <span className="text-sm text-[var(--muted)]">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button className="cta-button-secondary" onClick={onClose} type="button">
                    Close Preview
                  </button>
                  <button className="cta-button-primary opacity-80" disabled type="button">
                    Add Verification Link
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function TestimonialSlider({ active }: { active: TestimonialItem }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={active.title}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--panel-shadow)] backdrop-blur-xl"
        exit={{ opacity: 0, y: -20 }}
        initial={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.35 }}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[linear-gradient(135deg,rgba(255,42,42,0.22),rgba(0,224,255,0.14))]">
            <MessageSquareQuote className="h-5 w-5 text-[var(--foreground)]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--foreground)]">{active.title}</p>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">{active.role}</p>
          </div>
        </div>

        <div className="mt-6 flex gap-1">
          {[...Array(5)].map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-[var(--accent)] text-[var(--accent)]" />
          ))}
        </div>

        <p className="mt-6 text-lg leading-8 text-[var(--foreground)]/90">
          &ldquo;{active.quote}&rdquo;
        </p>
      </motion.div>
    </AnimatePresence>
  );
}

export function PortfolioLanding() {
  const [portfolioProjects, setPortfolioProjects] = useState<Project[]>(defaultProjects);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setPortfolioProjects(getStoredProjects());
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonialSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const featuredProjects = useMemo(
    () => portfolioProjects.slice(0, 3),
    [portfolioProjects]
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
    window.setTimeout(() => setSubmitted(false), 3200);
  };

  return (
    <div className="relative overflow-hidden">
      <CertificateModal item={selectedCertificate} onClose={() => setSelectedCertificate(null)} />

      <section className="relative isolate overflow-hidden pb-20 pt-10 sm:pb-24 lg:pb-28" id="home">
        <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(255,42,42,0.18),transparent_48%),radial-gradient(circle_at_top_right,rgba(0,224,255,0.12),transparent_36%)]" />
        <div className="mesh-orb mesh-orb--blue left-[6%] top-[14%]" />
        <div className="mesh-orb mesh-orb--red right-[8%] top-[8%]" />

        <Container className="relative">
          <div className="grid gap-12 xl:grid-cols-[1fr_0.95fr] xl:items-center">
            <Reveal className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--muted)] shadow-[var(--panel-shadow)] backdrop-blur-xl">
                <Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" />
                {siteConfig.name}
              </div>

              <div className="space-y-6">
                <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[var(--accent-secondary)]">
                  Premium Full-Stack Developer Portfolio
                </p>
                <h1 className="max-w-4xl font-display text-[clamp(3.4rem,9vw,7.2rem)] font-semibold leading-[0.88] tracking-[-0.06em] text-[var(--foreground)]">
                  Full-Stack
                  <span className="block bg-[linear-gradient(135deg,var(--accent),var(--accent-secondary))] bg-clip-text text-transparent">
                    Developer
                  </span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
                  I design and build scalable, secure, and high-performance applications.
                </p>
                <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">
                  From polished interfaces to backend systems and data flow, I build web products
                  that feel modern, perform well, and stay maintainable as they grow.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link className="cta-button-primary" href="/#projects">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link className="cta-button-secondary" href={`mailto:${siteConfig.email}`}>
                  Hire Me
                  <Mail className="h-4 w-4" />
                </Link>
                <Link className="cta-button-secondary" download href={siteConfig.resumePath}>
                  Download CV
                  <Download className="h-4 w-4" />
                </Link>
              </div>

              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "Node.js", "PostgreSQL", "TypeScript"].map((item) => (
                  <span className="skill-pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal className="relative min-h-[42rem]" delay={0.06}>
              <div className="hero-shell">
                <div className="hero-shell__grid" />
                <div className="hero-shell__glow hero-shell__glow--red" />
                <div className="hero-shell__glow hero-shell__glow--blue" />

                <div className="hero-orbit hero-orbit--outer" />
                <div className="hero-orbit hero-orbit--inner" />

                {floatingTech.map((tech, index) => (
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    className={cn("floating-tech", tech.position)}
                    key={tech.label}
                    transition={{
                      duration: 4 + index * 0.6,
                      delay: index * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="floating-tech__icon" style={{ boxShadow: `0 0 30px ${tech.accent}35` }}>
                      <Image alt={tech.label} height={24} src={tech.icon} width={24} />
                    </div>
                    <span>{tech.label}</span>
                  </motion.div>
                ))}

                <div className="hero-profile">
                  <div className="hero-profile__scan" />
                  <div className="relative h-full w-full overflow-hidden rounded-[34px]">
                    <Image
                      alt={siteConfig.profileImageAlt}
                      className="object-cover object-center"
                      fill
                      priority
                      sizes="(min-width: 1280px) 34rem, 90vw"
                      src={siteConfig.profileImage}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,42,42,0.08),transparent_26%,transparent_56%,rgba(0,0,0,0.86))]" />
                    <div className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-24">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/52">
                        {siteConfig.location}
                      </p>
                      <p className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-white">
                        {siteConfig.name}
                      </p>
                      <p className="mt-2 text-sm text-white/70">{siteConfig.role}</p>
                    </div>
                  </div>
                </div>

                <div className="hero-metric hero-metric--top">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--muted)]">
                    Quick Snapshot
                  </p>
                  <div className="mt-4 grid gap-3">
                    <div className="rounded-[20px] border border-[var(--border)] bg-[var(--surface)] p-4">
                      <p className="font-display text-3xl font-semibold text-[var(--foreground)]">25+</p>
                      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">projects shipped across product-focused builds</p>
                    </div>
                    <div className="rounded-[20px] border border-[var(--border)] bg-[var(--surface)] p-4">
                      <p className="font-display text-3xl font-semibold text-[var(--foreground)]">4+</p>
                      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">years focused on practical full-stack delivery</p>
                    </div>
                  </div>
                </div>

                <div className="hero-metric hero-metric--bottom">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent-secondary)]">
                    Core Focus
                  </p>
                  <div className="mt-3 grid gap-2">
                    {["Responsive UI", "Backend Logic", "Secure Features"].map((item) => (
                      <div className="flex items-center gap-3" key={item}>
                        <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_14px_var(--accent)]" />
                        <p className="text-sm text-[var(--muted)]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-gap" id="about">
        <Container className="space-y-10">
          <Reveal>
            <SectionIntro
              description="A clean developer-focused introduction with product thinking, visual polish, and strong full-stack execution at the center."
              eyebrow="About Me"
              title="I build modern applications that connect strong frontend experience with dependable backend systems."
            />
          </Reveal>

          <div className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
            <Reveal className="rounded-[34px] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--panel-shadow)] backdrop-blur-xl">
              <div className="relative min-h-[28rem] overflow-hidden rounded-[28px] border border-[var(--border)]">
                <Image
                  alt={siteConfig.profileImageAlt}
                  className="object-cover object-center"
                  fill
                  sizes="(min-width: 1280px) 30rem, 100vw"
                  src={siteConfig.profileImage}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.82))]" />
              </div>
            </Reveal>

            <Reveal className="rounded-[34px] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--panel-shadow)] backdrop-blur-xl" delay={0.05}>
              <div className="grid gap-6">
                <p className="text-lg leading-8 text-[var(--muted)]">
                  I&apos;m a full-stack developer focused on building products that feel refined on
                  the surface and dependable underneath. My work sits at the intersection of visual
                  craft, frontend systems, backend architecture, and delivery that stays practical.
                </p>
                <p className="text-base leading-8 text-[var(--muted)]">
                  Whether the goal is a business dashboard, a responsive marketing site, or a
                  feature-rich application, I aim for clear structure, strong UX, and code that
                  remains maintainable well beyond launch.
                </p>

                <div className="grid gap-4 sm:grid-cols-3">
                  {aboutHighlights.map((point) => (
                    <div
                      className="rounded-[24px] border border-[var(--border)] bg-[var(--surface-strong)] p-5"
                      key={point}
                    >
                      <p className="text-sm leading-7 text-[var(--foreground)]/88">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-gap" id="achievements">
        <Container className="space-y-8">
          <Reveal>
            <SectionIntro
              align="center"
              description="A few quick portfolio metrics brought to life with animated counters."
              eyebrow="Achievements"
              title="Numbers that summarize the work, consistency, and growth behind the portfolio."
            />
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {achievementMetrics.map((metric, index) => (
              <Reveal delay={index * 0.06} key={metric.label}>
                <CountUpMetric label={metric.label} suffix={metric.suffix} value={metric.value} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-gap" id="skills">
        <Container className="space-y-10">
          <Reveal>
            <SectionIntro
              description="Interactive skill categories with animated meters, hover glow, and a cleaner full-stack overview."
              eyebrow="Skills"
              title="Frontend, backend, database, and tooling strengths organized for quick scanning."
            />
          </Reveal>

          <div className="grid gap-6 xl:grid-cols-2">
            {skillGroups.map((group, index) => (
              <Reveal delay={index * 0.06} key={group.title}>
                <div className="rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--panel-shadow)] backdrop-blur-xl">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent-secondary)]">
                        {group.title}
                      </p>
                      <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                        {group.summary}
                      </h3>
                    </div>
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                      {group.skills.length} skills
                    </div>
                  </div>

                  <div className="mt-8 grid gap-5">
                    {group.skills.map((skill) => (
                      <div
                        className="rounded-[24px] border border-[var(--border)] bg-[var(--surface-strong)] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,224,255,0.08)]"
                        key={skill.name}
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background-accent)]">
                            <Image alt={skill.name} height={24} src={skill.icon} width={24} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between gap-3">
                              <p className="text-sm font-semibold text-[var(--foreground)]">{skill.name}</p>
                              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="skill-track mt-4">
                              <motion.div
                                className="skill-fill"
                                initial={{ width: 0 }}
                                transition={{ duration: 0.9, delay: 0.1 }}
                                viewport={{ once: true }}
                                whileInView={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-gap" id="projects">
        <Container className="space-y-10">
          <Reveal>
            <SectionIntro
              description="Production-focused builds shown in 3D-leaning cards with hover depth and strong visual hierarchy."
              eyebrow="Projects"
              title="Selected projects that show how I approach frontend systems, backend logic, and product execution."
            />
          </Reveal>

          <div className="grid gap-6 xl:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Reveal delay={index * 0.06} key={project.slug}>
                <TiltCard>
                  <article className="project-showcase-card group h-full overflow-hidden rounded-[30px]">
                    <div className="relative border-b border-[var(--border)] p-6">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,42,42,0.12),transparent_44%),radial-gradient(circle_at_bottom_right,rgba(0,224,255,0.12),transparent_34%)]" />
                      <div className="relative h-52 overflow-hidden rounded-[22px] border border-[var(--border)]">
                        <Image
                          alt={project.title}
                          className="object-cover transition duration-500 group-hover:scale-[1.04]"
                          fill
                          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                          src={project.image}
                        />
                      </div>
                      <div className="relative mt-6 flex items-center justify-between gap-4">
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                          0{index + 1}
                        </span>
                        <span className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                          Full-Stack Build
                        </span>
                      </div>
                    </div>

                    <div className="space-y-5 p-6">
                      <div>
                        <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                          {project.title}
                        </h3>
                        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{project.summary}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.stack.slice(0, 4).map((item) => (
                          <span className="skill-pill" key={item}>
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3 pt-2">
                        {project.demo ? (
                          <Link
                            className="cta-button-primary !px-4 !py-3"
                            href={project.demo}
                            rel="noreferrer"
                            target="_blank"
                          >
                            Live Demo
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        ) : null}

                        <Link
                          className="cta-button-secondary !px-4 !py-3"
                          href={project.github}
                          rel="noreferrer"
                          target="_blank"
                        >
                          GitHub
                          <Github className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-gap" id="experience">
        <Container className="space-y-10">
          <Reveal>
            <SectionIntro
              description="A timeline-style view of the development focus areas that shape how I work across projects."
              eyebrow="Experience"
              title="Development experience expressed through systems, interfaces, delivery, and steady iteration."
            />
          </Reveal>

          <div className="relative grid gap-6 before:absolute before:left-[1.05rem] before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-[linear-gradient(180deg,var(--accent),rgba(0,224,255,0.2))] lg:grid-cols-2 lg:before:left-1/2 lg:before:-translate-x-1/2">
            {experienceTimeline.map((entry, index) => (
              <Reveal
                className={cn("relative lg:w-[calc(50%-1.5rem)]", index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto")}
                delay={index * 0.06}
                key={entry.title}
              >
                <div className="timeline-card">
                  <span className="timeline-dot" />
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent-secondary)]">
                    {entry.phase}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                    {entry.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{entry.summary}</p>
                  <div className="mt-5 grid gap-3">
                    {entry.points.map((point) => (
                      <div className="flex items-start gap-3" key={point}>
                        <BriefcaseBusiness className="mt-0.5 h-4 w-4 text-[var(--accent)]" />
                        <p className="text-sm leading-6 text-[var(--foreground)]/84">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-gap" id="services">
        <Container className="space-y-10">
          <Reveal>
            <SectionIntro
              description="A service-style section that presents the portfolio with a polished, SaaS-inspired layout."
              eyebrow="Services"
              title="How I help shape, build, and polish digital products across the full stack."
            />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceHighlights.map((service, index) => (
              <Reveal delay={index * 0.05} key={service.title}>
                <div
                  className="rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--panel-shadow)] backdrop-blur-xl transition duration-300 hover:-translate-y-2"
                  style={{ boxShadow: `0 22px 50px rgba(0,0,0,0.16), 0 0 0 1px ${service.accent}18` }}
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)]"
                    style={{ background: `linear-gradient(135deg, ${service.accent}24, rgba(255,255,255,0.06))` }}
                  >
                    <Wrench className="h-5 w-5 text-[var(--foreground)]" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
