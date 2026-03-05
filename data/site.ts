import type { NavItem, SocialItem } from "@/types/portfolio";

export const siteConfig = {
  name: "Shukreal",
  role: "Senior Software Engineer",
  intro:
    "I build performant digital products with elegant interfaces, clean architecture, and measurable business impact.",
  email: "aarav.mehta.dev@gmail.com",
  location: "Seattle, WA",
  availability: "Available for senior frontend and full-stack opportunities.",
  resumePath: "/resume.txt"
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" }
];

export const socialLinks: SocialItem[] = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Email", href: `mailto:${siteConfig.email}` }
];

export const keyTech = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "AWS"
];

export const impactStats = [
  { label: "Years Experience", value: "8+" },
  { label: "Projects Shipped", value: "25+" },
  { label: "Mentored Engineers", value: "12" }
];

export const aboutParagraphs = [
  "I am a product-minded engineer focused on turning complex requirements into robust, maintainable software. My work spans architecture, frontend systems, and delivery practices that help teams ship confidently.",
  "Over the last several years, I have led frontend modernization efforts, built reusable design systems, and optimized performance for high-traffic applications used by thousands of users daily.",
  "I value pragmatic engineering: clear tradeoffs, measurable outcomes, and codebases that stay readable long after launch."
];

export const principles = [
  "Design for change with composable architecture and clear boundaries.",
  "Prioritize product impact, accessibility, and performance from day one.",
  "Raise team velocity through standards, tooling, and thoughtful mentorship."
];
