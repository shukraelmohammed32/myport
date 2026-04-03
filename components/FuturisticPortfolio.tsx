"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Cloud,
  Database,
  Download,
  ExternalLink,
  FileText,
  GitBranch,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  MonitorSmartphone,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
  MessageSquareQuote,
  X,
  Cpu,
  Play,
  Users
} from "lucide-react";

import { projects as defaultProjects } from "@/data/projects";
import { siteConfig, socialLinks } from "@/data/site";
import { cn } from "@/lib/cn";
import { getStoredProjects } from "@/lib/projectStore";
import type { Project } from "@/types/portfolio";
import type { LucideIcon } from "lucide-react";

type SkillItem = {
  label: string;
  percentage: number;
};

type SkillGroup = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: SkillItem[];
};

type TimelineEntry = {
  period: string;
  title: string;
  organization: string;
  description: string;
  outcome: string;
  tags: string[];
  icon: LucideIcon;
};

type ServiceCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type CertificateCard = {
  title: string;
  issuer: string;
  issued: string;
  summary: string;
  verification: string;
  category: string;
  icon: LucideIcon;
};

type TestimonialCard = {
  quote: string;
  role: string;
  highlight: string;
  initials: string;
};

type FloatingTech = {
  label: string;
  icon: LucideIcon;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  delay: number;
};

const shellClass = "section-shell";

const heroStats = [
  {
    value: 20,
    suffix: "+",
    label: "Projects launched with product-level polish"
  },
  {
    value: 1000,
    suffix: "+",
    label: "GitHub commits invested in clean shipping"
  },
  {
    value: 7,
    suffix: "+",
    label: "Stack layers blended into one delivery system"
  },
  {
    value: 99,
    suffix: "%",
    label: "Focus on performance, clarity, and reliability"
  }
] as const;

const heroSignals: FloatingTech[] = [
  { label: "React", icon: Code2, top: "12%", left: "-3%", delay: 0.15 },
  { label: "Node", icon: Server, top: "18%", right: "-2%", delay: 0.4 },
  { label: "Git", icon: GitBranch, bottom: "18%", left: "-4%", delay: 0.65 },
  { label: "Cloud", icon: Cloud, bottom: "10%", right: "6%", delay: 0.9 }
];

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Interfaces that feel fast, clear, and premium under real product pressure.",
    icon: MonitorSmartphone,
    items: [
      { label: "React", percentage: 96 },
      { label: "Next.js", percentage: 94 },
      { label: "TypeScript", percentage: 95 },
      { label: "Tailwind CSS", percentage: 97 }
    ]
  },
  {
    title: "Backend",
    description: "API design, auth flows, and service logic that stay dependable at scale.",
    icon: Server,
    items: [
      { label: "Node.js", percentage: 92 },
      { label: "REST APIs", percentage: 93 },
      { label: "Authentication", percentage: 90 },
      { label: "Performance", percentage: 88 }
    ]
  },
  {
    title: "Database",
    description: "Structured data flows with an eye on integrity, speed, and maintainability.",
    icon: Database,
    items: [
      { label: "PostgreSQL", percentage: 90 },
      { label: "MySQL", percentage: 88 },
      { label: "MongoDB", percentage: 85 },
      { label: "Prisma", percentage: 89 }
    ]
  },
  {
    title: "Tools",
    description: "Shipping workflows, testing, deployments, and developer experience.",
    icon: Workflow,
    items: [
      { label: "Git & GitHub", percentage: 95 },
      { label: "Docker", percentage: 84 },
      { label: "Testing", percentage: 86 },
      { label: "CI/CD", percentage: 82 }
    ]
  }
];

const experienceTimeline: TimelineEntry[] = [
  {
    period: "2024 - Present",
    title: "Full-Stack Developer",
    organization: "Independent / Client Delivery",
    description:
      "Designing and shipping secure product experiences, modern dashboards, and conversion-focused interfaces with a consistent visual system.",
    outcome: "Better handoff, clearer architecture, and faster launch cycles.",
    tags: ["Next.js", "TypeScript", "UI Systems", "APIs"],
    icon: Rocket
  },
  {
    period: "2022 - 2024",
    title: "Frontend Engineer",
    organization: "Product Interfaces",
    description:
      "Built reusable component systems, refined motion patterns, and turned static mockups into polished responsive experiences.",
    outcome: "Faster design-to-code delivery and stronger UX consistency.",
    tags: ["React", "Motion", "Accessibility", "Design Systems"],
    icon: Layers3
  },
  {
    period: "2020 - 2022",
    title: "Backend & Integration Work",
    organization: "Internal Tools",
    description:
      "Focused on APIs, database relationships, admin tooling, and dependable feature delivery that supported day-to-day operations.",
    outcome: "Cleaner data flows and fewer operational bottlenecks.",
    tags: ["Node.js", "Databases", "Auth", "Automation"],
    icon: ShieldCheck
  }
];

const serviceCards: ServiceCard[] = [
  {
    title: "Product UI Engineering",
    description:
      "High-end interface systems, responsive layouts, motion design, and visual hierarchy tuned for SaaS and portfolio builds.",
    icon: Layers3
  },
  {
    title: "Full-Stack Delivery",
    description:
      "Feature planning, API implementation, authentication, and data modeling that keeps product delivery predictable.",
    icon: Cpu
  },
  {
    title: "Data & Platform Systems",
    description:
      "Database modeling, dashboard logic, and integration work designed to keep applications stable and fast.",
    icon: Database
  },
  {
    title: "Motion & Launch Polish",
    description:
      "Micro-interactions, page transitions, QA cleanup, and visual refinement that make the final product feel expensive.",
    icon: Sparkles
  }
];

const certificateCards: CertificateCard[] = [
  {
    title: "Advanced React Systems",
    issuer: "Verified credential preview",
    issued: "2025",
    summary: "Component architecture, reusable UI patterns, and production-ready frontend structure.",
    verification: "https://example.com/verify/react-systems",
    category: "Frontend",
    icon: BadgeCheck
  },
  {
    title: "Secure API Design",
    issuer: "Verified credential preview",
    issued: "2025",
    summary: "Authentication, authorization, and resilient backend interfaces for modern applications.",
    verification: "https://example.com/verify/api-design",
    category: "Backend",
    icon: ShieldCheck
  },
  {
    title: "Cloud Deployment Foundations",
    issuer: "Verified credential preview",
    issued: "2024",
    summary: "Deployment workflows, environment setup, and release stability for client-facing applications.",
    verification: "https://example.com/verify/cloud-deployment",
    category: "DevOps",
    icon: Cloud
  },
  {
    title: "Motion-Driven Interface Design",
    issuer: "Verified credential preview",
    issued: "2024",
    summary: "High-fidelity interaction design, spatial layering, and motion systems for immersive products.",
    verification: "https://example.com/verify/motion-design",
    category: "UX",
    icon: Sparkles
  }
];

const testimonials: TestimonialCard[] = [
  {
    quote:
      "The delivery felt deliberate from the first sprint. The UI was sharper than expected, the structure was clean, and the handoff was easy to maintain.",
    role: "Product Lead, SaaS Platform",
    highlight: "Fast communication, excellent polish, dependable execution.",
    initials: "PL"
  },
  {
    quote:
      "He translated a rough brief into a premium interface system and made the product feel much more mature without slowing the build.",
    role: "Founder, Startup Product",
    highlight: "Strong design judgment and practical full-stack thinking.",
    initials: "FD"
  },
  {
    quote:
      "The backend logic and UI consistency were both handled carefully. The final result looked polished and behaved like a real product, not a template.",
    role: "Engineering Lead, Internal Tooling",
    highlight: "Reliable delivery with thoughtful architecture.",
    initials: "EL"
  }
];

const contributionHeatmap = Array.from({ length: 56 }, (_, index) => (index * 7 + Math.floor(index / 3)) % 5);

function SectionHeading({
  eyebrow,
  title,
  description,
  center = false
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("space-y-4", center ? "mx-auto max-w-3xl text-center" : "max-w-3xl") }>
      <div className={cn("flex items-center gap-4", center ? "justify-center" : "justify-start") }>
        <span className="section-kicker">
          <Sparkles className="h-3.5 w-3.5" />
          {eyebrow}
        </span>
        <span className="section-rule" />
      </div>
      <h2 className="font-display text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function AnimatedCounter({
  value,
  suffix = "+",
  duration = 1100
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const reduceMotion = useReducedMotion() ?? false;
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) {
      return;
    }

    if (reduceMotion) {
      setDisplayValue(value);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(step);
      }
    };

    frame = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(frame);
  }, [duration, inView, reduceMotion, value]);

  return (
    <span ref={ref}>
      {new Intl.NumberFormat("en-US").format(displayValue)}{suffix}
    </span>
  );
}

function SkillMeter({ item }: { item: SkillItem }) {
  return (
    <motion.div
      className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:border-cyan-300/25 hover:bg-white/[0.06]"
      whileHover={{ y: -3, scale: 1.01 }}
    >
      <div className="flex items-center gap-4">
        <div
          className="relative h-16 w-16 shrink-0 rounded-full p-[2px]"
          style={{
            background: `conic-gradient(rgba(0, 224, 255, 0.92) ${item.percentage}%, rgba(255,255,255,0.08) 0)`
          }}
        >
          <div className="grid h-full w-full place-items-center rounded-full bg-[var(--background)] text-sm font-semibold text-white">
            {item.percentage}%
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <p className="truncate text-sm font-semibold text-white">{item.label}</p>
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/40">
              level
            </span>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/8">
            <motion.div
              className="h-full rounded-full bg-[linear-gradient(90deg,rgba(0,224,255,0.92),rgba(90,230,255,0.84),rgba(255,45,85,0.82))]"
              initial={{ width: 0 }}
              whileInView={{ width: `${item.percentage}%` }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 1, ease: [0.2, 0.7, 0.3, 1] }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      className="tilt-card group overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02)),rgba(8,14,28,0.72)]"
      style={{ perspective: 1600 }}
      whileHover={{ y: -10, rotateX: 6, rotateY: index % 2 === 0 ? -6 : 6, scale: 1.01 }}
      transition={{ duration: 0.35, ease: [0.2, 0.7, 0.3, 1] }}
    >
      <div className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(0,224,255,0.16),transparent_60%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-4">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] border border-white/10 bg-black/30">
          <Image
            alt={`${project.title} preview`}
            className="object-cover transition duration-700 group-hover:scale-105"
            fill
            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
            src={project.image}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1)_40%,rgba(3,8,18,0.92)_100%)]" />
          <div className="absolute left-4 top-4">
            <span className="section-kicker bg-black/35 text-white/80">
              Case 0{index + 1}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
            <div className="rounded-2xl border border-white/10 bg-black/45 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/60 backdrop-blur-xl">
              {project.stack.slice(0, 2).join(" / ")}
            </div>
            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-400/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Live Ready
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-white">
              {project.title}
            </h3>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/46">
              Product
            </span>
          </div>
          <p className="text-sm leading-7 text-white/64">
            {project.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span className="chip text-[0.68rem]" key={item}>
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            className="inline-flex items-center gap-2 rounded-2xl border border-cyan-300/25 bg-[linear-gradient(135deg,rgba(0,224,255,0.88),rgba(0,122,255,0.72))] px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(0,224,255,0.18)] transition duration-300 hover:-translate-y-0.5"
            href={project.demo || project.github}
            rel="noreferrer"
            target="_blank"
          >
            Live Demo
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/84 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:text-white"
            href={project.github}
            rel="noreferrer"
            target="_blank"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
          <Link
            className="ml-auto inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition duration-300 hover:text-white"
            href={`/projects/${project.slug}`}
          >
            Details
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

function TimelineCard({ entry }: { entry: TimelineEntry }) {
  const Icon = entry.icon;

  return (
    <motion.article
      className="timeline-dot glass-panel rounded-[28px] p-6 sm:p-7"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.3, 1] }}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span className="section-kicker">
          <CalendarDays className="h-3.5 w-3.5" />
          {entry.period}
        </span>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/52">
          <Icon className="h-3.5 w-3.5 text-cyan-200" />
          {entry.organization}
        </div>
      </div>

      <div className="mt-5 flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-400/10 text-cyan-200 shadow-[0_0_24px_rgba(0,224,255,0.1)]">
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-white">
            {entry.title}
          </h3>
          <p className="mt-2 text-sm leading-7 text-white/64">
            {entry.description}
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-[22px] border border-white/10 bg-black/25 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
          Outcome
        </p>
        <p className="mt-2 text-sm leading-7 text-white/76">
          {entry.outcome}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {entry.tags.map((tag) => (
          <span className="chip text-[0.68rem]" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

function CertificateTile({
  certificate,
  onOpen
}: {
  certificate: CertificateCard;
  onOpen: () => void;
}) {
  const Icon = certificate.icon;

  return (
    <motion.button
      className="group w-full rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02)),rgba(8,14,28,0.7)] p-6 text-left transition duration-300 hover:border-cyan-300/24"
      onClick={onOpen}
      style={{ perspective: 1200 }}
      type="button"
      whileHover={{ y: -8, rotateX: 5, rotateY: -5, scale: 1.01 }}
      transition={{ duration: 0.3, ease: [0.2, 0.7, 0.3, 1] }}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="section-kicker">
          <BadgeCheck className="h-3.5 w-3.5" />
          {certificate.category}
        </span>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-200">
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-white">
        {certificate.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-white/64">
        {certificate.summary}
      </p>

      <div className="mt-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
            Issued
          </p>
          <p className="mt-1 text-sm font-semibold text-white/82">
            {certificate.issuer}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
            Year
          </p>
          <p className="mt-1 text-sm font-semibold text-cyan-200">
            {certificate.issued}
          </p>
        </div>
      </div>

      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition duration-300 group-hover:text-white">
        View Preview
        <ArrowUpRight className="h-4 w-4" />
      </div>
    </motion.button>
  );
}

function TestimonialFrame({
  testimonial,
  index,
  total
}: {
  testimonial: TestimonialCard;
  index: number;
  total: number;
}) {
  return (
    <motion.div
      key={testimonial.role}
      className="glass-panel overflow-hidden rounded-[32px] p-6 sm:p-8"
      initial={{ opacity: 0, x: 40, scale: 0.98 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: -30, scale: 0.98 }}
      transition={{ duration: 0.45, ease: [0.2, 0.7, 0.3, 1] }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="section-kicker">
          <MessageSquareQuote className="h-3.5 w-3.5" />
          Testimonial {index + 1} / {total}
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-400/10 text-sm font-bold text-cyan-100 shadow-[0_0_20px_rgba(0,224,255,0.1)]">
          {testimonial.initials}
        </div>
      </div>

      <p className="mt-6 text-lg leading-8 text-white/84 sm:text-xl">
        “{testimonial.quote}”
      </p>

      <div className="mt-6 rounded-[22px] border border-white/10 bg-black/25 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
          Feedback highlight
        </p>
        <p className="mt-2 text-sm leading-7 text-cyan-100/90">
          {testimonial.highlight}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="chip bg-cyan-400/10 text-cyan-100">
          <CheckCircle2 className="h-3.5 w-3.5" />
          Verified response
        </span>
        <span className="chip">{testimonial.role}</span>
      </div>
    </motion.div>
  );
}

export function FuturisticPortfolio() {
  const reduceMotion = useReducedMotion() ?? false;
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [booting, setBooting] = useState(true);
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [contactState, setContactState] = useState<"idle" | "sending" | "success">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setProjects(getStoredProjects());
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => setBooting(false), reduceMotion ? 0 : 1200);
    return () => window.clearTimeout(timeout);
  }, [reduceMotion]);

  useEffect(() => {
    if (selectedCertificate === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedCertificate]);

  useEffect(() => {
    if (reduceMotion || testimonials.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  const featuredProjects = useMemo(() => projects.slice(0, 3), [projects]);
  const activeCertificate = selectedCertificate === null ? null : certificateCards[selectedCertificate];
  const activeTestimonialData = testimonials[activeTestimonial];

  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactState("sending");

    window.setTimeout(() => {
      setContactState("success");
      formRef.current?.reset();

      window.setTimeout(() => {
        setContactState("idle");
      }, 2800);
    }, 1100);
  };

  const closeCertificate = () => setSelectedCertificate(null);

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence>
        {booting ? (
          <motion.div
            className="modal-backdrop fixed inset-0 z-[80] flex items-center justify-center px-4"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.2, 0.7, 0.3, 1] }}
          >
            <motion.div
              className="glass-panel relative w-full max-w-md overflow-hidden rounded-[32px] p-8 text-center"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.2, 0.7, 0.3, 1] }}
            >
              <div className="absolute inset-0 surface-grid opacity-20" />
              <div className="absolute -left-20 top-4 h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl" />
              <div className="absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-pink-500/12 blur-3xl" />
              <div className="relative flex flex-col items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-400/10 text-cyan-100 shadow-[0_0_30px_rgba(0,224,255,0.18)]">
                  <Sparkles className="h-7 w-7" />
                </div>
                <div>
                  <p className="section-kicker justify-center">
                    <Rocket className="h-3.5 w-3.5" />
                    Boot sequence
                  </p>
                  <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-white">
                    Initializing premium portfolio experience
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-white/68">
                    Loading holographic interface layers, motion systems, and high-contrast visuals.
                  </p>
                </div>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-[linear-gradient(90deg,rgba(0,224,255,0.92),rgba(255,45,85,0.84))]"
                    initial={{ width: "18%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: reduceMotion ? 0.2 : 0.9, ease: "easeInOut" }}
                  />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/42">
                  cinematic mode online
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <section id="home" className="relative pt-8 sm:pt-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top,rgba(0,224,255,0.18),transparent_36%),radial-gradient(circle_at_80%_15%,rgba(255,45,85,0.14),transparent_32%),radial-gradient(circle_at_50%_40%,rgba(0,224,255,0.08),transparent_55%)]" />
        <div className="pointer-events-none absolute left-1/2 top-20 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,224,255,0.18)_0%,rgba(0,224,255,0.06)_36%,transparent_70%)] blur-3xl" />
        <div className="pointer-events-none absolute -left-20 top-36 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-64 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />

        <div className={cn(shellClass, "relative") }>
          <div className="grid items-center gap-12 xl:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] xl:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.3, 1] }}
            >
              <span className="section-kicker">
                <Rocket className="h-3.5 w-3.5" />
                Futuristic full-stack portfolio
              </span>

              <div className="mt-8 space-y-6">
                <h1 className="max-w-4xl font-display text-[clamp(3.5rem,10vw,7rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-white">
                  Full-Stack Developer
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
                  I design and build scalable, secure, and high-performance applications with a premium interface language, cinematic lighting, and an immersive product feel.
                </p>
                <p className="max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
                  {siteConfig.name} blends frontend craftsmanship, backend systems, and launch-ready delivery into one polished experience tuned for modern SaaS, portfolios, and product-driven teams.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-300/25 bg-[linear-gradient(135deg,rgba(0,224,255,0.95),rgba(0,122,255,0.72))] px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(0,224,255,0.18)] transition duration-300 hover:-translate-y-0.5"
                  href="#projects"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white/88 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:text-white"
                  href={`mailto:${siteConfig.email}`}
                >
                  Hire Me
                  <Mail className="h-4 w-4" />
                </Link>
                <Link
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-pink-300/20 bg-[linear-gradient(135deg,rgba(255,45,85,0.9),rgba(17,24,39,0.95))] px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(255,45,85,0.16)] transition duration-300 hover:-translate-y-0.5"
                  href={siteConfig.resumePath}
                  download
                >
                  Download CV
                  <Download className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {heroStats.map((stat) => (
                  <motion.div
                    className="metric-chip rounded-[24px] p-5"
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: [0.2, 0.7, 0.3, 1] }}
                  >
                    <p className="text-3xl font-semibold tracking-[-0.04em] text-white">
                      <AnimatedCounter suffix={stat.suffix} value={stat.value} />
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/64">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-white/56">
                <span className="chip">
                  <CheckCircle2 className="h-3.5 w-3.5 text-cyan-300" />
                  Dark mode first
                </span>
                <span className="chip">
                  <Zap className="h-3.5 w-3.5 text-cyan-300" />
                  Motion-rich UI
                </span>
                <span className="chip">
                  <Globe2 className="h-3.5 w-3.5 text-cyan-300" />
                  SaaS-ready systems
                </span>
              </div>
            </motion.div>

            <div className="relative min-h-[46rem]">
              <div className="absolute inset-0 rounded-[40px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015)),rgba(5,10,20,0.72)] shadow-[0_30px_90px_rgba(0,0,0,0.42)] backdrop-blur-3xl" />
              <div className="absolute inset-0 surface-grid rounded-[40px] opacity-25" />
              <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_top,rgba(0,224,255,0.14),transparent_42%),radial-gradient(circle_at_bottom,rgba(255,45,85,0.1),transparent_40%)]" />

              <motion.div
                className="relative z-10 flex h-full min-h-[46rem] flex-col gap-5 p-4 sm:p-5"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.2, 0.7, 0.3, 1], delay: 0.08 }}
              >
                <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="glass-panel relative overflow-hidden rounded-[32px] p-3">
                    <div className="absolute inset-0 hero-scanline opacity-25" />
                    <div className="absolute inset-0 surface-grid opacity-20" />
                    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/40">
                      <Image
                        alt={siteConfig.profileImageAlt}
                        className="object-cover object-center"
                        fill
                        priority
                        sizes="(min-width: 1280px) 40vw, 100vw"
                        src={siteConfig.profileImage}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,224,255,0.12),transparent_28%,transparent_62%,rgba(4,8,18,0.9)_100%)]" />
                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <div className="flex items-end justify-between gap-4">
                          <div>
                            <span className="section-kicker bg-black/35 text-white/80">
                              Elite mode
                            </span>
                            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                              {siteConfig.name}
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-white/72 sm:text-base">
                              {siteConfig.role}
                            </p>
                          </div>
                          <div className="rounded-2xl border border-cyan-300/18 bg-cyan-400/10 px-4 py-3 text-right">
                            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-white/42">
                              Availability
                            </p>
                            <p className="mt-1 text-sm font-semibold text-cyan-200">
                              Open for projects
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {heroSignals.map((signal) => {
                      const Icon = signal.icon;

                      return (
                        <motion.div
                          className="absolute hidden rounded-full border border-white/10 bg-black/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/74 shadow-[0_18px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl lg:flex lg:items-center lg:gap-2"
                          key={signal.label}
                          style={{
                            top: signal.top,
                            bottom: signal.bottom,
                            left: signal.left,
                            right: signal.right
                          }}
                          animate={reduceMotion ? { opacity: 1 } : { y: [0, -8, 0] }}
                          transition={{
                            duration: 4.5,
                            repeat: reduceMotion ? 0 : Infinity,
                            ease: "easeInOut",
                            delay: signal.delay
                          }}
                        >
                          <Icon className="h-3.5 w-3.5 text-cyan-200" />
                          {signal.label}
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="space-y-5">
                    <div className="glass-panel rounded-[30px] p-5">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/42">
                            Mission control
                          </p>
                          <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.03em] text-white">
                            Premium build system
                          </h3>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-400/10 text-cyan-200">
                          <Terminal className="h-5 w-5" />
                        </div>
                      </div>

                      <div className="mt-5 rounded-[24px] border border-white/10 bg-black/35 p-4 font-mono text-[0.82rem] leading-7 text-white/80">
                        <p><span className="text-cyan-300">&gt;</span> design scalable interfaces</p>
                        <p><span className="text-cyan-300">&gt;</span> build secure APIs and data flows</p>
                        <p><span className="text-cyan-300">&gt;</span> ship high-performance products</p>
                      </div>

                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {[
                          { label: "Frontend", value: "Motion-rich, accessible UI" },
                          { label: "Backend", value: "Stable logic and APIs" },
                          { label: "Database", value: "Fast, structured data" },
                          { label: "Delivery", value: "Launch-ready polish" }
                        ].map((item) => (
                          <div
                            className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4"
                            key={item.label}
                          >
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
                              {item.label}
                            </p>
                            <p className="mt-2 text-sm leading-6 text-white/72">
                              {item.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="glass-panel rounded-[30px] p-5">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/42">
                            Dev stack
                          </p>
                          <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white">
                            Floating tech signals
                          </h3>
                        </div>
                        <Sparkles className="h-5 w-5 text-cyan-200" />
                      </div>
                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {[
                          { icon: Code2, label: "React / Next.js" },
                          { icon: Server, label: "Node / APIs" },
                          { icon: Database, label: "SQL / NoSQL" },
                          { icon: GitBranch, label: "Git / GitHub" }
                        ].map((item) => {
                          const Icon = item.icon;

                          return (
                            <div
                              className="flex items-center gap-3 rounded-[20px] border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:border-cyan-300/20 hover:bg-white/[0.06]"
                              key={item.label}
                            >
                              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-400/10 text-cyan-200">
                                <Icon className="h-4.5 w-4.5" />
                              </div>
                              <p className="text-sm font-semibold text-white/82">{item.label}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-panel rounded-[30px] p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/42">
                        Profile matrix
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
                        Holographic presence with layered depth
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-cyan-300/18 bg-cyan-400/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
                      <Play className="h-3.5 w-3.5" />
                      motion active
                    </div>
                  </div>
                  <div className="mt-5 grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                    <div className="rounded-[26px] border border-white/10 bg-black/25 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
                        Terminal status
                      </p>
                      <div className="mt-4 space-y-3 font-mono text-sm text-white/72">
                        <p>&gt; focus: scalable apps</p>
                        <p>&gt; mode: secure and maintainable</p>
                        <p>&gt; output: premium user experiences</p>
                      </div>
                    </div>
                    <div className="rounded-[26px] border border-white/10 bg-[linear-gradient(135deg,rgba(0,224,255,0.12),rgba(255,45,85,0.08))] p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
                        Delivery stance
                      </p>
                      <p className="mt-4 text-sm leading-7 text-white/74">
                        Product thinking, interface craft, and backend discipline all move together. The outcome is a site that feels expensive without losing clarity.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-gap relative">
        <div className={shellClass}>
          <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
            <motion.div
              className="glass-panel overflow-hidden rounded-[34px]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-18% 0px" }}
              transition={{ duration: 0.65, ease: [0.2, 0.7, 0.3, 1] }}
            >
              <div className="relative min-h-[34rem]">
                <Image
                  alt={siteConfig.profileImageAlt}
                  className="object-cover object-center"
                  fill
                  sizes="(min-width: 1280px) 42vw, 100vw"
                  src={siteConfig.profileImage}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,224,255,0.06),transparent_28%,transparent_58%,rgba(3,8,18,0.9)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="rounded-[28px] border border-white/10 bg-black/40 p-5 backdrop-blur-2xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
                      {siteConfig.location}
                    </p>
                    <p className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-white">
                      {siteConfig.name}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/70">
                      {siteConfig.role} focused on modern products, visual clarity, and dependable engineering.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-18% 0px" }}
              transition={{ duration: 0.65, ease: [0.2, 0.7, 0.3, 1] }}
            >
              <SectionHeading
                eyebrow="About Me"
                title="Clean structure, immersive visuals, and practical delivery in one portfolio system."
                description="I combine product thinking with engineering discipline so the final result is not just attractive, but stable, scalable, and easy to keep evolving."
              />

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Globe2,
                    title: "Product-first thinking",
                    description:
                      "I organize work around clarity, user flow, and what the product actually needs to do."
                  },
                  {
                    icon: ShieldCheck,
                    title: "Secure implementation",
                    description:
                      "Authentication, permissions, and data safety are considered early, not after launch."
                  },
                  {
                    icon: Layers3,
                    title: "Reusable design systems",
                    description:
                      "Components, tokens, and interaction patterns are structured for consistent scaling."
                  },
                  {
                    icon: Zap,
                    title: "Fast execution",
                    description:
                      "I move quickly without sacrificing quality, which keeps product momentum high."
                  }
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      className="glass-panel rounded-[24px] p-5"
                      key={item.title}
                      whileHover={{ y: -4, scale: 1.01 }}
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-400/10 text-cyan-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-white/62">{item.description}</p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="glass-panel rounded-[28px] p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
                      What I bring
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
                      A sharp interface sense with delivery-minded engineering.
                    </h3>
                  </div>
                  <div className="hidden rounded-2xl border border-cyan-300/18 bg-cyan-400/10 p-3 text-cyan-200 sm:flex">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Premium visual polish with a grounded product mindset",
                    "Scalable component architecture that stays readable",
                    "Responsive full-stack delivery from idea to deployment",
                    "Strong communication and clean implementation habits"
                  ].map((item) => (
                    <div
                      className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4"
                      key={item}
                    >
                      <p className="flex items-start gap-3 text-sm leading-7 text-white/72">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-gap relative">
        <div className={shellClass}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-16% 0px" }}
            transition={{ duration: 0.65, ease: [0.2, 0.7, 0.3, 1] }}
          >
            <SectionHeading
              eyebrow="Skills"
              title="Interactive skill layers with circular meters, motion, and category depth."
              description="Each group is organized around the part of the stack it serves, giving the page a cleaner information hierarchy and a better visual rhythm."
            />
          </motion.div>

          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {skillGroups.map((group) => {
              const Icon = group.icon;

              return (
                <motion.div
                  className="glass-panel rounded-[30px] p-6 sm:p-7"
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-16% 0px" }}
                  transition={{ duration: 0.55, ease: [0.2, 0.7, 0.3, 1] }}
                  whileHover={{ y: -5, scale: 1.01 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="section-kicker">
                        <Icon className="h-3.5 w-3.5" />
                        {group.title}
                      </span>
                      <p className="mt-4 max-w-xl text-sm leading-7 text-white/62">
                        {group.description}
                      </p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-400/10 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4">
                    {group.items.map((item) => (
                      <SkillMeter item={item} key={item.label} />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="section-gap relative">
        <div className={shellClass}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Projects"
              title="3D-style showcase cards built for visual impact and practical proof."
              description="The featured projects section highlights product thinking, polished layout systems, and the kind of build quality that makes a portfolio feel credible at first glance."
            />
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white/84 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:text-white"
              href="/projects"
            >
              View all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard index={index} key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section-gap relative">
        <div className={shellClass}>
          <SectionHeading
            eyebrow="Experience"
            title="Vertical timeline storytelling for career depth and delivery history."
            description="The timeline keeps the focus on outcomes, not just job titles, so visitors can quickly understand how the work has evolved over time."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="timeline-rail space-y-6 pl-10">
              {experienceTimeline.map((entry) => (
                <TimelineCard entry={entry} key={entry.period + entry.title} />
              ))}
            </div>

            <motion.div
              className="glass-panel rounded-[32px] p-6 sm:p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-16% 0px" }}
              transition={{ duration: 0.65, ease: [0.2, 0.7, 0.3, 1] }}
            >
              <span className="section-kicker">
                <BriefcaseBusiness className="h-3.5 w-3.5" />
                Current focus
              </span>
              <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-white">
                Building systems that feel sharp on the surface and durable underneath.
              </h3>
              <p className="mt-4 text-base leading-8 text-white/66">
                The work here is intentionally balanced between visual impact and execution quality. That means clean handoff, maintainable structure, and interfaces that feel expensive on day one.
              </p>

              <div className="mt-6 space-y-4 rounded-[26px] border border-white/10 bg-black/25 p-5">
                {[
                  "Design systems shaped for modern SaaS and premium personal brands",
                  "Authentication, data handling, and performance tuned early",
                  "Delivery habits that keep scope visible and launches predictable"
                ].map((item) => (
                  <p className="flex items-start gap-3 text-sm leading-7 text-white/72" key={item}>
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                    {item}
                  </p>
                ))}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
                    Stack discipline
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/72">
                    React, Next.js, Node, databases, and visual systems kept in sync.
                  </p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
                    Delivery mode
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/72">
                    Quietly intense, detail-oriented, and built to ship.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="section-gap relative">
        <div className={shellClass}>
          <SectionHeading
            eyebrow="Services"
            title="Icon-based service cards with hover lift and neon glow."
            description="These are the engagement types that fit best when the goal is a premium web experience with technical depth behind it."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((service) => {
              const Icon = service.icon;

              return (
                <motion.article
                  className="glass-panel rounded-[28px] p-6"
                  key={service.title}
                  whileHover={{ y: -6, scale: 1.01 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-14% 0px" }}
                  transition={{ duration: 0.55, ease: [0.2, 0.7, 0.3, 1] }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-400/10 text-cyan-200 shadow-[0_0_24px_rgba(0,224,255,0.08)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/64">
                    {service.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="certificates" className="section-gap relative">
        <div className={shellClass}>
          <SectionHeading
            eyebrow="Certificates"
            title="Glass cards with 3D hover, modal previews, and verification links."
            description="The certificate wall is designed like a premium vault: clean thumbnails, verification cues, and an expanded preview that feels like a dedicated exhibit."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {certificateCards.map((certificate, index) => (
              <CertificateTile
                certificate={certificate}
                key={certificate.title}
                onOpen={() => setSelectedCertificate(index)}
              />
            ))}
          </div>
        </div>

        <AnimatePresence>
          {activeCertificate ? (
            <motion.div
              className="modal-backdrop fixed inset-0 z-[70] flex items-center justify-center px-4 py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="glass-panel relative w-full max-w-5xl overflow-hidden rounded-[34px] p-4 sm:p-5"
                initial={{ scale: 0.94, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.96, opacity: 0, y: 16 }}
                transition={{ duration: 0.45, ease: [0.2, 0.7, 0.3, 1] }}
              >
                <button
                  aria-label="Close certificate preview"
                  className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/45 text-white/76 transition duration-300 hover:text-white"
                  onClick={closeCertificate}
                  type="button"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02)),rgba(6,10,20,0.92)] p-6 sm:p-8">
                    <div className="absolute inset-0 surface-grid opacity-15" />
                    <div className="absolute -left-20 top-4 h-48 w-48 rounded-full bg-cyan-400/12 blur-3xl" />
                    <div className="absolute -right-12 bottom-0 h-52 w-52 rounded-full bg-pink-500/10 blur-3xl" />
                    <div className="relative flex h-full min-h-[28rem] flex-col justify-between">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="section-kicker">
                            <BadgeCheck className="h-3.5 w-3.5" />
                            Certificate preview
                          </span>
                          <h3 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                            {activeCertificate.title}
                          </h3>
                          <p className="mt-3 max-w-xl text-sm leading-7 text-white/64 sm:text-base">
                            {activeCertificate.summary}
                          </p>
                        </div>
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-400/10 text-cyan-100">
                          <activeCertificate.icon className="h-6 w-6" />
                        </div>
                      </div>

                      <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        {[
                          { label: "Issuer", value: activeCertificate.issuer },
                          { label: "Issued", value: activeCertificate.issued },
                          { label: "Category", value: activeCertificate.category },
                          { label: "Status", value: "Verified credential" }
                        ].map((item) => (
                          <div
                            className="rounded-[24px] border border-white/10 bg-black/25 p-4"
                            key={item.label}
                          >
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
                              {item.label}
                            </p>
                            <p className="mt-2 text-sm leading-7 text-white/78">{item.value}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[24px] border border-cyan-300/16 bg-cyan-400/10 p-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
                            Verification
                          </p>
                          <p className="mt-2 text-sm leading-7 text-cyan-100/88">
                            Open the credential link or replace it with your verified URL.
                          </p>
                        </div>
                        <Link
                          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25"
                          href={activeCertificate.verification}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Verify
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5 rounded-[28px] border border-white/10 bg-black/25 p-6 sm:p-8">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
                        Details
                      </p>
                      <h4 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                        Designed to feel like a premium credential vault.
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-white/64">
                        This modal is built as a reusable preview surface, so actual PDF or image assets can be dropped in without changing the interaction model.
                      </p>
                    </div>

                    <div className="grid gap-3">
                      {[
                        "Large preview area with a cinematic glass frame",
                        "Zoom-style modal transition with dimmed backdrop",
                        "Verification badge and external link treatment",
                        "Ready to swap in PDF or image previews later"
                      ].map((item) => (
                        <div
                          className="flex items-start gap-3 rounded-[22px] border border-white/10 bg-white/[0.03] p-4"
                          key={item}
                        >
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                          <p className="text-sm leading-7 text-white/72">{item}</p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(0,224,255,0.1),rgba(255,45,85,0.06))] p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
                        Badge stack
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="chip bg-cyan-400/10 text-cyan-100">
                          <FileText className="h-3.5 w-3.5" />
                          pdf-ready
                        </span>
                        <span className="chip">
                          <BadgeCheck className="h-3.5 w-3.5" />
                          verified
                        </span>
                        <span className="chip">
                          <Award className="h-3.5 w-3.5" />
                          premium
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </section>

      <section id="achievements" className="section-gap relative">
        <div className={shellClass}>
          <SectionHeading
            eyebrow="Achievements"
            title="Count-up metrics and a GitHub-style contribution graph for social proof."
            description="This area adds a quick credibility scan: shipped work, commit volume, and the kind of consistency that keeps momentum visible."
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { value: 20, suffix: "+", label: "Projects shipped" },
                { value: 1000, suffix: "+", label: "GitHub commits" },
                { value: 14, suffix: "+", label: "Reusable systems" },
                { value: 99, suffix: "%", label: "Launch readiness" }
              ].map((item) => (
                <motion.div
                  className="glass-panel rounded-[28px] p-6"
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-14% 0px" }}
                  transition={{ duration: 0.55, ease: [0.2, 0.7, 0.3, 1] }}
                >
                  <p className="text-4xl font-semibold tracking-[-0.05em] text-white">
                    <AnimatedCounter suffix={item.suffix} value={item.value} />
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/64">{item.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="glass-panel rounded-[32px] p-6 sm:p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-14% 0px" }}
              transition={{ duration: 0.6, ease: [0.2, 0.7, 0.3, 1] }}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
                    GitHub contribution graph
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                    Visual consistency over time
                  </h3>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-400/10 text-cyan-200">
                  <Github className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-[24px] border border-white/10 bg-black/25 p-4">
                <div className="grid grid-cols-7 gap-2">
                  {contributionHeatmap.map((level, index) => (
                    <span
                      className="aspect-square rounded-[6px]"
                      key={`${level}-${index}`}
                      style={{
                        background:
                          level === 0
                            ? "rgba(255,255,255,0.04)"
                            : level === 1
                              ? "rgba(0, 224, 255, 0.18)"
                              : level === 2
                                ? "rgba(0, 224, 255, 0.32)"
                                : level === 3
                                  ? "rgba(0, 224, 255, 0.5)"
                                  : "rgba(255, 45, 85, 0.72)"
                      }}
                    />
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/42">
                  <span>Less</span>
                  <div className="flex items-center gap-2">
                    {[
                      "rgba(255,255,255,0.04)",
                      "rgba(0, 224, 255, 0.18)",
                      "rgba(0, 224, 255, 0.32)",
                      "rgba(0, 224, 255, 0.5)",
                      "rgba(255, 45, 85, 0.72)"
                    ].map((color) => (
                      <span
                        className="h-3 w-3 rounded-[4px]"
                        key={color}
                        style={{ background: color }}
                      />
                    ))}
                  </div>
                  <span>More</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="section-gap relative">
        <div className={shellClass}>
          <SectionHeading
            eyebrow="Testimonials"
            title="A carousel that feels smooth, restrained, and production-grade."
            description="The slider keeps the focus on the message while still feeling tactile and motion-aware."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative">
              <AnimatePresence mode="wait">
                <TestimonialFrame
                  index={activeTestimonial}
                  testimonial={activeTestimonialData}
                  total={testimonials.length}
                  key={activeTestimonialData.role}
                />
              </AnimatePresence>

              <div className="mt-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <button
                    aria-label="Previous testimonial"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/80 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:text-white"
                    onClick={() =>
                      setActiveTestimonial((current) => (current - 1 + testimonials.length) % testimonials.length)
                    }
                    type="button"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    aria-label="Next testimonial"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/80 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:text-white"
                    onClick={() => setActiveTestimonial((current) => (current + 1) % testimonials.length)}
                    type="button"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      aria-label={`Show testimonial ${index + 1}`}
                      className={cn(
                        "h-2.5 rounded-full transition-all duration-300",
                        index === activeTestimonial ? "w-10 bg-cyan-300" : "w-2.5 bg-white/20 hover:bg-white/40"
                      )}
                      onClick={() => setActiveTestimonial(index)}
                      type="button"
                    />
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              className="glass-panel rounded-[32px] p-6 sm:p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-14% 0px" }}
              transition={{ duration: 0.6, ease: [0.2, 0.7, 0.3, 1] }}
            >
              <p className="section-kicker">
                <Users className="h-3.5 w-3.5" />
                Social proof
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
                The page is designed to feel like an elite product launch, not a template.
              </h3>
              <p className="mt-4 text-base leading-8 text-white/66">
                Testimonials, metrics, and motion are all aligned around a single idea: premium work should feel calm, confident, and memorable.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  "Tighter framing around outcomes and credibility",
                  "Auto-advancing slider with manual controls",
                  "Supporting cards that remain readable and elegant"
                ].map((item) => (
                  <div
                    className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4"
                    key={item}
                  >
                    <p className="flex items-start gap-3 text-sm leading-7 text-white/72">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-gap relative pb-24 sm:pb-28">
        <div className={shellClass}>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              className="glass-panel rounded-[32px] p-6 sm:p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-14% 0px" }}
              transition={{ duration: 0.65, ease: [0.2, 0.7, 0.3, 1] }}
            >
              <SectionHeading
                eyebrow="Contact"
                title="Need a full-stack developer for a premium product build?"
                description="If the brief involves interfaces, backend logic, and a polished delivery standard, this is where the conversation starts."
              />

              <div className="mt-8 space-y-4">
                <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
                    Email
                  </p>
                  <Link
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition duration-300 hover:text-white"
                    href={`mailto:${siteConfig.email}`}
                  >
                    {siteConfig.email}
                    <Mail className="h-4 w-4" />
                  </Link>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
                    Location
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/72">
                    {siteConfig.location}
                  </p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
                    Availability
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/72">
                    {siteConfig.availability}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-[28px] border border-cyan-300/16 bg-[linear-gradient(135deg,rgba(0,224,255,0.1),rgba(255,45,85,0.06))] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
                  Quick links
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {socialLinks.map((link) => {
                    const isExternal = link.href.startsWith("http") || link.href.startsWith("mailto:");
                    const Icon = link.label === "GitHub" ? Github : link.label === "LinkedIn" ? Linkedin : Mail;

                    return (
                      <Link
                        className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/82 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:text-white"
                        href={link.href}
                        key={link.label}
                        rel={isExternal ? "noreferrer" : undefined}
                        target={isExternal && !link.href.startsWith("mailto:") ? "_blank" : undefined}
                      >
                        <Icon className="h-4 w-4" />
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass-panel rounded-[32px] p-6 sm:p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-14% 0px" }}
              transition={{ duration: 0.65, ease: [0.2, 0.7, 0.3, 1] }}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
                    Message form
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
                    Send a project brief or role opening.
                  </h3>
                </div>
                <div className="rounded-2xl border border-cyan-300/18 bg-cyan-400/10 p-3 text-cyan-200">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>

              <form className="mt-6 space-y-4" onSubmit={handleContactSubmit} ref={formRef}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className="input-field" name="name" placeholder="Your name" required />
                  <input className="input-field" name="email" placeholder="Email address" required type="email" />
                </div>
                <input className="input-field" name="subject" placeholder="Project or role subject" required />
                <textarea
                  className="input-field min-h-[160px] resize-y"
                  name="message"
                  placeholder="Tell me about the product, timeline, and goals..."
                  required
                />

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    className={cn(
                      "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-semibold transition duration-300 active:scale-[0.98]",
                      contactState === "success"
                        ? "border border-emerald-300/25 bg-emerald-400/15 text-emerald-100"
                        : "border border-cyan-300/25 bg-[linear-gradient(135deg,rgba(0,224,255,0.95),rgba(0,122,255,0.72))] text-white"
                    )}
                    type="submit"
                  >
                    {contactState === "sending" ? (
                      <>
                        <Sparkles className="h-4 w-4 animate-pulse" />
                        Sending...
                      </>
                    ) : contactState === "success" ? (
                      <>
                        <CheckCircle2 className="h-4 w-4" />
                        Message sent
                      </>
                    ) : (
                      <>
                        <Mail className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                  <Link
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white/84 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:text-white"
                    href={siteConfig.resumePath}
                    download
                  >
                    <Download className="h-4 w-4" />
                    Download CV
                  </Link>
                </div>
              </form>

              <AnimatePresence>
                {contactState === "success" ? (
                  <motion.div
                    className="mt-6 rounded-[24px] border border-emerald-300/20 bg-emerald-400/10 p-5 text-emerald-50"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-100/70">
                      Success
                    </p>
                    <p className="mt-2 text-sm leading-7 text-emerald-50/90">
                      Your message is staged with a polished success animation. Replace this with a real API or form service when you wire up production delivery.
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <div className="mt-6 rounded-[28px] border border-white/10 bg-black/25 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
                      Delivery style
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/72">
                      Responsive communication, sharp visuals, and clean implementation from first call to launch.
                    </p>
                  </div>
                  <div className="hidden rounded-2xl border border-cyan-300/18 bg-cyan-400/10 p-3 text-cyan-200 sm:flex">
                    <Terminal className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
