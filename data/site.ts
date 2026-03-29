import type { NavItem, SocialItem } from "@/types/portfolio";

export const siteConfig = {
  name: "Shukreal",
  role: "Full-Stack Developer",
  intro:
    "I build modern full-stack web applications with clean frontend architecture, robust backend APIs, and reliable database design.",
  email: "shukrael.dev@gmail.com",
  profileImage: "/images/profile-photo.png",
  profileImageAlt: "Shukreal profile photo",
  location: "Dire Dawa, Ethiopia",
  featuredPlace: "East Africa Tech Hub",
  availability: "Available for full-stack web development opportunities.",
  resumePath: "/Shukrael_Resume.pdf"
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Admin", href: "/admin" },
  { label: "Contact", href: "/contact" }
];

export const socialLinks: SocialItem[] = [
  { label: "GitHub", href: "https://github.com/shukrael" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shukrael" },
  { label: "Email", href: `mailto:${siteConfig.email}` }
];

export const keyTech = [
  "HTML5",
  "JavaScript",
  "CSS3",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "REST API",
  "MySQL",
  "MongoDB",
  "Git"
];

export const impactStats = [
  { label: "Years Experience", value: "4+" },
  { label: "Projects Shipped", value: "25+" },
  { label: "Mentored Engineers", value: "12" }
];

export const aboutParagraphs = [
  "I am a product-minded engineer based in Dire Dawa, Ethiopia, focused on turning complex requirements into robust, maintainable software. My work spans architecture, frontend systems, and delivery practices that help teams ship confidently.",
  "Over the last several years, I have led frontend modernization efforts, built reusable design systems, and optimized performance for high-traffic applications used by thousands of users daily across East Africa and beyond.",
  "I value pragmatic engineering: clear tradeoffs, measurable outcomes, and codebases that stay readable long after launch."
];

export const principles = [
  "Design for change with composable architecture and clear boundaries.",
  "Prioritize product impact, accessibility, and performance from day one.",
  "Raise team velocity through standards, tooling, and thoughtful mentorship."
];
