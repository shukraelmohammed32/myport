import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "student-management-system",
    title: "Student Management System",
    summary:
      "A web-based student management portal that easy to control and manage student records, attendance, grades, and communication between students, teachers, and administrators.",
    image: "/images/portal.png",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQLphp"],
    github: "https://github.com/shukraelmohammed32/advancedb",
    demo: "https://student-managment-system.free.nf/"
  },
  {
    slug: "kalid-barber-studio",
    title: "Kalid Barber Studio",
    summary:
      "A premium barber studio landing page with services, gallery, pricing, and contact — built for a clean, modern, conversion-focused experience.",
    image: "/images/kalid.png",
    stack: ["HTML", "CSS", " javascript", "Tailwind CSS"],
    github: "https://github.com/shukraelmohammed32/kalid",
    demo: "https://kalid-lo4p.vercel.app/"
  },
  {
    slug: "mohashukra-garage-website",
    title: "MohaShukra Garage Website",
    summary:
      "A modern garage website with all car service that easy for customers to book appointments, view services, and contact the garage for inquiries.",
    image: "/images/garage.png",
    stack: ["JavaScript", "React", "Bootstrap", "postgresql", "Express.js"],
    github: "https://github.com/shukraelmohammed32/AbeGarageMainApp",
    demo: "https://abe-garage-main-app.vercel.app/"
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
