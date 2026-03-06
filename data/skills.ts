import type { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    summary:
      "Building responsive, user-friendly interfaces with clean layouts and reusable UI components.",
    tools: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Bootstrap",
      "Tailwind CSS"
    ]
  },
  {
    title: "Mobile Development",
    summary:
      "Creating smooth cross-platform mobile apps with shared logic, strong performance, and modern tooling.",
    tools: ["React Native", "Expo", "Dart", "Flutter", "Firebase"]
  },
  {
    title: "Backend & APIs",
    summary:
      "Designing APIs and backend services for authentication, business logic, and scalable application workflows.",
    tools: ["Node.js", "Express.js", "REST APIs", "JWT", "Prisma", "GraphQL"]
  },
  {
    title: "Databases & Storage",
    summary:
      "Working with SQL and NoSQL databases to store data efficiently and support real-world app requirements.",
    tools: ["MySQL", "MongoDB", "PostgreSQL", "Firebase Firestore", "Redis"]
  },
  {
    title: "Tools & Workflow",
    summary:
      "Shipping projects with version control, debugging tools, and deployment platforms for reliable delivery.",
    tools: ["Git", "GitHub", "Postman", "Vercel", "Docker", "Figma"]
  }
];
