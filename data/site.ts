import type { NavItem, SocialItem } from "@/types/portfolio";

export const siteConfig = {
  name: "Shukreal",
  role: "AI Product Engineer",
  roles: ["AI Product Engineer", "Full-Stack Developer", "UI Systems Builder"],
  intro:
    "I build AI-native web experiences with premium UI direction, strong frontend systems, and dependable full-stack delivery.",
  email: "shukraelmohammed32@gmail.com",
  profileImage: "/images/profile-picture.png",
  profileImageAlt: "Shukreal profile photo",
  location: "Dire Dawa, Ethiopia",
  featuredPlace: "East Africa Tech Hub",
  availability: "Available for AI product sprints, modern full-stack builds, and design-forward delivery work.",
  resumePath: "/Shukrael_Resume.pdf"
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Works", href: "/#works" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" }
];

export const socialLinks: SocialItem[] = [
  { label: "GitHub", href: "https://github.com/shukraelmohammed32" },
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
