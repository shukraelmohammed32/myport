import { projects as defaultProjects } from "@/data/projects";
import type { Project } from "@/types/portfolio";

const STORAGE_KEY = "portfolio.projects";

type ProjectInput = Omit<Project, "slug"> & {
  slug?: string;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeProject(value: unknown): Project | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const candidate = value as Record<string, unknown>;
  const title = typeof candidate.title === "string" ? candidate.title : null;
  const summary = typeof candidate.summary === "string" ? candidate.summary : null;
  const image = typeof candidate.image === "string" ? candidate.image : null;
  const github = typeof candidate.github === "string" ? candidate.github : null;
  const demo = typeof candidate.demo === "string" || typeof candidate.demo === "undefined"
    ? candidate.demo
    : null;
  const stack =
    Array.isArray(candidate.stack) && candidate.stack.every((item) => typeof item === "string")
      ? candidate.stack
      : null;
  const slug =
    typeof candidate.slug === "string" && candidate.slug.trim().length > 0
      ? candidate.slug
      : title
        ? slugify(title)
        : null;

  if (!title || !summary || !image || !github || !stack || !slug || demo === null) {
    return null;
  }

  return {
    slug,
    title,
    summary,
    image,
    stack,
    github,
    demo
  };
}

export function getStoredProjects(): Project[] {
  if (typeof window === "undefined") {
    return defaultProjects;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return defaultProjects;
    }

    const parsed = JSON.parse(raw) as unknown;

    if (!Array.isArray(parsed)) {
      return defaultProjects;
    }

    const validProjects = parsed
      .map((project) => normalizeProject(project))
      .filter((project): project is Project => project !== null);
    return validProjects.length > 0 ? validProjects : defaultProjects;
  } catch {
    return defaultProjects;
  }
}

export function saveProjects(projectList: Project[]) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(projectList));
}

export function addStoredProject(project: ProjectInput): Project[] {
  const currentProjects = getStoredProjects();
  const normalizedProject = normalizeProject(project);

  if (!normalizedProject) {
    return currentProjects;
  }

  const nextProjects = [normalizedProject, ...currentProjects];
  saveProjects(nextProjects);
  return nextProjects;
}

export function removeStoredProjectAt(index: number): Project[] {
  const currentProjects = getStoredProjects();

  if (index < 0 || index >= currentProjects.length) {
    return currentProjects;
  }

  const nextProjects = currentProjects.filter((_, currentIndex) => currentIndex !== index);
  saveProjects(nextProjects);
  return nextProjects;
}
