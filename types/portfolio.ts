export type NavItem = {
  label: string;
  href: string;
};

export type SocialItem = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  stack: string[];
  github: string;
  demo?: string;
};
