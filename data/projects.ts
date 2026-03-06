import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "Campus Connect Portal",
    summary:
      "A role-based web portal for students and teachers with course updates, assignment tracking, and secure authentication.",
    image: "/images/project-campus-connect.svg",
    stack: ["React", "TypeScript", "Bootstrap", "Node.js", "MySQL"],
    github: "https://github.com/",
    demo: "https://example.com"
  },
  {
    title: "Foodie Finder App",
    summary:
      "A cross-platform mobile app for discovering local restaurants with location search, ratings, and favorites.",
    image: "/images/project-foodie-finder.svg",
    stack: ["React Native", "TypeScript", "Expo", "MongoDB", "Node.js"],
    github: "https://github.com/",
    demo: "https://example.com"
  },
  {
    title: "Freelance Invoice Manager",
    summary:
      "A full-stack dashboard that helps freelancers generate invoices, track payments, and export monthly reports.",
    image: "/images/project-invoice-manager.svg",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL", "Prisma"],
    github: "https://github.com/",
    demo: "https://example.com"
  },
  {
    title: "DevForum Community",
    summary:
      "A discussion platform with topic channels, threaded comments, and moderation tools for developer communities.",
    image: "/images/project-devforum.svg",
    stack: ["JavaScript", "React", "Bootstrap", "MongoDB", "Express.js"],
    github: "https://github.com/",
    demo: "https://example.com"
  },
  {
    title: "LinguaGo Mobile",
    summary:
      "A language learning mobile app with daily lessons, progress tracking, and quiz-based revision.",
    image: "/images/project-linguago.svg",
    stack: ["Dart", "Flutter", "Firebase", "REST API", "Provider"],
    github: "https://github.com/",
    demo: "https://example.com"
  },
  {
    title: "Portfolio Builder CMS",
    summary:
      "A content management tool to create portfolio pages with editable sections, media uploads, and instant preview.",
    image: "/images/project-portfolio-cms.svg",
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Cloudinary"],
    github: "https://github.com/",
    demo: "https://example.com"
  }
];
