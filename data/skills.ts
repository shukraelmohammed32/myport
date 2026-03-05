import type { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    summary:
      "Building highly interactive and accessible interfaces with strong performance fundamentals.",
    tools: [
      "TypeScript",
      "React",
      "Next.js App Router",
      "Redux Toolkit",
      "Tailwind CSS",
      "Framer Motion"
    ]
  },
  {
    title: "Backend & APIs",
    summary:
      "Designing scalable services and APIs with predictable contracts and observability.",
    tools: ["Node.js", "Express", "NestJS", "PostgreSQL", "Prisma", "GraphQL"]
  },
  {
    title: "Dev Experience",
    summary:
      "Improving delivery speed and reliability through automation, tooling, and strong CI practices.",
    tools: ["Jest", "Playwright", "GitHub Actions", "Docker", "ESLint", "Turborepo"]
  },
  {
    title: "Cloud & Architecture",
    summary:
      "Deploying resilient systems with clear operational visibility and performance monitoring.",
    tools: ["AWS", "Vercel", "Terraform", "Redis", "Sentry", "Datadog"]
  }
];
