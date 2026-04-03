import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "campus-connect-portal",
    title: "Campus Connect Portal",
    summary:
      "A role-based web portal for students and teachers with course updates, assignment tracking, and secure authentication.",
    image: "/images/project-campus-connect.svg",
    stack: ["React", "TypeScript", "Bootstrap", "Node.js", "MySQL"],
    github: "https://github.com/",
    demo: "https://example.com"
  },
  {
    slug: "kalid-barber-studio",
    title: "Kalid Barber Studio",
    summary:
      "A premium barber studio landing page with services, gallery, pricing, and contact — built for a clean, modern, conversion-focused experience.",
    image: "/images/kalid.png",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/shukraelmohammed32/kalid",
    demo: "https://kalid-lo4p.vercel.app/"
  },
  {
    slug: "devforum-community",
    title: "DevForum Community",
    summary:
      "A discussion platform with topic channels, threaded comments, and moderation tools for developer communities.",
    image: "/images/project-devforum.svg",
    stack: ["JavaScript", "React", "Bootstrap", "MongoDB", "Express.js"],
    github: "https://github.com/",
    demo: "https://example.com"
  },
  {
    slug: "portfolio-builder-cms",
    title: "Portfolio Builder CMS",
    summary:
      "A content management tool to create portfolio pages with editable sections, media uploads, and instant preview.",
    image: "/images/project-portfolio-cms.svg",
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Cloudinary"],
    github: "https://github.com/",
    demo: "https://example.com"
  },
  {
    slug: "opsdesk-crm-platform",
    title: "OpsDesk CRM Platform",
    summary:
      "A full-stack CRM platform for managing leads, sales pipelines, follow-ups, and team activity dashboards in one workspace.",
    image: "/images/project-opsdesk.svg",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    github: "https://github.com/",
    demo: "https://example.com"
  },
  {
    slug: "e-commerce-website",
    title: "E-commerce Website",
    summary:
      "A modern online store with product catalog, cart management, and secure checkout flow for a smooth customer experience.",
    image: "/images/project-ecommerce.svg",
    stack: ["Next.js", "Node.js", "MySQL"],
    github: "https://github.com/",
    demo: "https://example.com"
  }
];
