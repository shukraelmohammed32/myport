import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "Atlas Commerce Platform",
    summary:
      "Multi-tenant B2B commerce platform with role-based workflows, analytics, and enterprise-grade performance.",
    image: "/images/project-atlas.svg",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    github: "https://github.com/",
    demo: "https://example.com"
  },
  {
    title: "Pulse Observability Dashboard",
    summary:
      "Real-time monitoring suite that consolidates logs, traces, and product metrics into a single operational workspace.",
    image: "/images/project-pulse.svg",
    stack: ["React", "D3", "Node.js", "Redis", "WebSockets"],
    github: "https://github.com/",
    demo: "https://example.com"
  },
  {
    title: "Flow Board Collaboration Suite",
    summary:
      "Collaborative planning application with drag-and-drop workflows, comments, and robust permission controls.",
    image: "/images/project-flow.svg",
    stack: ["Next.js", "Prisma", "tRPC", "Framer Motion", "Zod"],
    github: "https://github.com/",
    demo: "https://example.com"
  },
  {
    title: "Insight Design System",
    summary:
      "Reusable component library and documentation platform that standardized UI delivery across multiple products.",
    image: "/images/project-insight.svg",
    stack: ["Storybook", "TypeScript", "Tailwind CSS", "Vitest", "Changesets"],
    github: "https://github.com/"
  }
];
