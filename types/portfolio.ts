export type NavItem = {
  label: string;
  href: string;
};

export type SocialItem = {
  label: string;
  href: string;
};

export type SkillCategory = {
  title: string;
  summary: string;
  tools: string[];
};

export type Project = {
  title: string;
  summary: string;
  image: string;
  stack: string[];
  github: string;
  demo?: string;
};
