import type { NavItem, SocialItem } from "@/types/portfolio";

export const siteConfig = {
  name: "Shukrael Mohammed",
  role: "Full-Stack Developer",
  email: "shukraelmohammed32@gmail.com",
  profileImage: "/images/profile-picture.png",
  profileImageAlt: "Shukrael Mohammed profile photo",
  location: "Dire Dawa, Ethiopia",
  availability: "Available for full-stack web development roles, freelance projects, and collaborative product work.",
  resumePath: "/Shukrael_Resume.pdf"
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Certificates", href: "/#certificates" },
  { label: "Contact", href: "/#contact" }
];

export const socialLinks: SocialItem[] = [
  { label: "GitHub", href: "https://github.com/shukraelmohammed32" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shukrael" },
  { label: "Email", href: `mailto:${siteConfig.email}` }
];
