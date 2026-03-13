import type { Skill } from "@/types/portfolio";

export const skills: Skill[] = [
  // Programming Languages
  { name: "JavaScript", category: "Programming Languages", percentage: 92, icon: "/images/skills/javascript.png" },
  { name: "TypeScript", category: "Programming Languages", percentage: 90, icon: "/images/skills/typescript.png" },
  { name: "Go", category: "Programming Languages", percentage: 74, icon: "/images/skills/go.svg" },
  { name: "HTML5", category: "Markup Languages", percentage: 95, icon: "/images/skills/html.png" },
  { name: "CSS3", category: "Markup Languages", percentage: 93, icon: "/images/skills/css.png" },

  // Frontend Frameworks & Libraries
  { name: "React", category: "Frontend Frameworks", percentage: 90, icon: "/images/skills/react.png" },
  { name: "Next.js", category: "Frontend Frameworks", percentage: 88, icon: "/images/skills/nextjs.png" },
  { name: "React Native", category: "Frontend Frameworks", percentage: 75, icon: "/images/skills/react-native.png" },
  { name: "Tailwind CSS", category: "CSS Frameworks", percentage: 87, icon: "/images/skills/tailwind.png" },
  { name: "Bootstrap", category: "CSS Frameworks", percentage: 82, icon: "/images/skills/bootstrap.png" },

  // Backend Frameworks & Runtime
  { name: "Node.js", category: "Backend Runtime", percentage: 86, icon: "/images/skills/nodejs.png" },
  { name: "Express.js", category: "Backend Frameworks", percentage: 84, icon: "/images/skills/express.png" },
  { name: "Flutter", category: "Mobile Development", percentage: 78, icon: "/images/skills/flutter.png" },
  { name: "Dart", category: "Programming Languages", percentage: 76, icon: "/images/skills/dart.png" },

  // Database Technologies
  { name: "MySQL", category: "Databases", percentage: 86, icon: "/images/skills/mysql.png" },
  { name: "MongoDB", category: "Databases", percentage: 83, icon: "/images/skills/mongodb.png" },
  { name: "PostgreSQL", category: "Databases", percentage: 81, icon: "/images/skills/postgresql.png" },
  { name: "Redis", category: "Databases", percentage: 76, icon: "/images/skills/redis.png" },
  { name: "Prisma", category: "Database Tools", percentage: 79, icon: "/images/skills/prisma.png" },

  // API & Integration
  { name: "REST API", category: "API Development", percentage: 87, icon: "/images/skills/rest-api.png" },
  { name: "GraphQL", category: "API Development", percentage: 72, icon: "/images/skills/graphql.png" },

  // Development Tools & DevOps
  { name: "Git", category: "Version Control", percentage: 88, icon: "/images/skills/git.png" },
  { name: "Docker", category: "DevOps", percentage: 78, icon: "/images/skills/docker.png" },
  { name: "GitHub Actions", category: "DevOps", percentage: 75, icon: "/images/skills/github-actions.png" },
  { name: "AWS", category: "Cloud Services", percentage: 75, icon: "/images/skills/aws.png" },

  // Testing & Quality
  { name: "Jest", category: "Testing Tools", percentage: 77, icon: "/images/skills/jest.png" }
];
