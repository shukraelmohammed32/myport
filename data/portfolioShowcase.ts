export const floatingTech = [
  {
    label: "React",
    icon: "/images/skills/react.png",
    accent: "#00e0ff",
    position: "left-[6%] top-[10%]"
  },
  {
    label: "Node.js",
    icon: "/images/skills/nodejs.png",
    accent: "#7dff94",
    position: "right-[8%] top-[18%]"
  },
  {
    label: "Git",
    icon: "/images/skills/git.png",
    accent: "#ff7a4d",
    position: "left-[10%] bottom-[18%]"
  },
  {
    label: "TypeScript",
    icon: "/images/skills/typescript.png",
    accent: "#6bb8ff",
    position: "right-[12%] bottom-[12%]"
  }
] as const;

export const aboutHighlights = [
  "Full-stack delivery from UI architecture to backend logic and data flow.",
  "Responsive design systems that stay clean across desktop and mobile.",
  "Reliable product thinking focused on maintainability, speed, and polish."
] as const;

export const skillGroups = [
  {
    title: "Frontend",
    summary: "Interfaces built for clarity, responsiveness, and product polish.",
    skills: [
      { name: "React", level: 95, icon: "/images/skills/react.png" },
      { name: "Next.js", level: 93, icon: "/images/skills/nextjs.png" },
      { name: "TypeScript", level: 91, icon: "/images/skills/typescript.png" },
      { name: "Tailwind CSS", level: 92, icon: "/images/skills/tailwind.png" }
    ]
  },
  {
    title: "Backend",
    summary: "APIs, auth flows, business logic, and dependable server-side features.",
    skills: [
      { name: "Node.js", level: 90, icon: "/images/skills/nodejs.png" },
      { name: "Express.js", level: 88, icon: "/images/skills/express.png" },
      { name: "REST API", level: 90, icon: "/images/skills/rest-api.png" },
      { name: "GraphQL", level: 76, icon: "/images/skills/graphql.png" }
    ]
  },
  {
    title: "Database",
    summary: "Structured data layers that support scale, performance, and clean querying.",
    skills: [
      { name: "PostgreSQL", level: 84, icon: "/images/skills/postgresql.png" },
      { name: "MySQL", level: 86, icon: "/images/skills/mysql.png" },
      { name: "MongoDB", level: 88, icon: "/images/skills/mongodb.png" },
      { name: "Prisma", level: 80, icon: "/images/skills/prisma.png" }
    ]
  },
  {
    title: "Tools",
    summary: "Modern tooling for deployment, collaboration, and smoother engineering workflows.",
    skills: [
      { name: "Git", level: 92, icon: "/images/skills/git.png" },
      { name: "Docker", level: 78, icon: "/images/skills/docker.png" },
      { name: "AWS", level: 74, icon: "/images/skills/aws.png" },
      { name: "GitHub Actions", level: 73, icon: "/images/skills/github-actions.png" }
    ]
  }
] as const;

export const experienceTimeline = [
  {
    phase: "Current Focus",
    title: "Full-Stack Product Delivery",
    summary:
      "Building complete web products that connect strong interfaces, backend logic, and scalable structure.",
    points: [
      "Plan feature architecture before implementation gets noisy.",
      "Bridge UI decisions with business logic and API design."
    ]
  },
  {
    phase: "System Work",
    title: "APIs, Auth, and Data Flows",
    summary:
      "Designing server-side logic, secure user flows, and database-backed functionality for real product use.",
    points: [
      "Work across REST endpoints, validation, and database relationships.",
      "Keep application logic maintainable as projects grow."
    ]
  },
  {
    phase: "Interface Craft",
    title: "Responsive UI and Visual Polish",
    summary:
      "Creating modern frontend systems with careful spacing, motion, accessibility, and visual hierarchy.",
    points: [
      "Build reusable sections and design patterns for faster iteration.",
      "Improve usability without losing speed or clarity."
    ]
  },
  {
    phase: "Collaboration",
    title: "Iteration, Support, and Delivery",
    summary:
      "Turning requirements into shipped features with cleaner communication, practical tradeoffs, and steady progress.",
    points: [
      "Break down work into delivery-friendly slices.",
      "Support teammates and improve confidence during execution."
    ]
  }
] as const;

export const serviceHighlights = [
  {
    title: "Web Application Development",
    description:
      "From landing pages to full dashboards, I build responsive web experiences with modern frontend architecture.",
    accent: "#00e0ff"
  },
  {
    title: "Backend Engineering",
    description:
      "Server-side features, APIs, authentication, and business logic built to support real product workflows.",
    accent: "#ff2a2a"
  },
  {
    title: "UI Systems and Design Polish",
    description:
      "Reusable sections, strong typography, motion detail, and visual consistency that raise the quality of the product.",
    accent: "#00e0ff"
  },
  {
    title: "Performance and Launch Readiness",
    description:
      "Cleanup, optimization, and final product polish so the application is ready for production delivery.",
    accent: "#ff2a2a"
  }
] as const;

export const certificateShowcase = [
  {
    id: "frontend-certificate-slot",
    title: "Frontend Certificate Slot",
    issuer: "Add your verified frontend credential",
    year: "PDF or image preview ready",
    summary:
      "Use this card to showcase a real frontend certificate with a clean modal preview and verification link.",
    checkpoints: ["Certificate title", "Issuer name", "Verification URL"]
  },
  {
    id: "backend-certificate-slot",
    title: "Backend Certificate Slot",
    issuer: "Add your verified backend credential",
    year: "PDF or image preview ready",
    summary:
      "Use this card for backend, API, security, or database certifications you want highlighted in the portfolio.",
    checkpoints: ["Credential details", "Credential date", "Verification URL"]
  },
  {
    id: "tools-certificate-slot",
    title: "Cloud and Tools Slot",
    issuer: "Add your verified tooling credential",
    year: "PDF or image preview ready",
    summary:
      "Use this card for DevOps, cloud, workflow, or tooling certificates with a polished modal presentation.",
    checkpoints: ["Credential summary", "Issuer details", "Verification URL"]
  }
] as const;

export const achievementMetrics = [
  { label: "Years Experience", value: 4, suffix: "+" },
  { label: "Projects Shipped", value: 25, suffix: "+" },
  { label: "Mentored Engineers", value: 12, suffix: "" },
  { label: "Core Technologies", value: 16, suffix: "+" }
] as const;

export const testimonialSlides = [
  {
    title: "Communication",
    role: "Collaboration Strength",
    quote:
      "Clear updates, practical tradeoffs, and a process that keeps the build moving without confusion."
  },
  {
    title: "Execution",
    role: "Collaboration Strength",
    quote:
      "Interfaces stay thoughtful, backend features stay dependable, and the final product feels carefully finished."
  },
  {
    title: "Reliability",
    role: "Collaboration Strength",
    quote:
      "From planning to polish, the work stays organized, maintainable, and focused on real product outcomes."
  }
] as const;
