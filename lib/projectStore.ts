import { projects as defaultProjects } from "@/data/projects";
import type { Project } from "@/types/portfolio";

const STORAGE_KEY = "portfolio.projects";

function isValidProject(value: unknown): value is Project {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Record<string, unknown>;

  return (
    typeof candidate.title === "string" &&
    typeof candidate.summary === "string" &&
    typeof candidate.image === "string" &&
    Array.isArray(candidate.stack) &&
    candidate.stack.every((item) => typeof item === "string") &&
    typeof candidate.github === "string" &&
    (typeof candidate.demo === "string" || typeof candidate.demo === "undefined")
  );
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

    const validProjects = parsed.filter(isValidProject);
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

export function addStoredProject(project: Project): Project[] {
  const currentProjects = getStoredProjects();
  const nextProjects = [project, ...currentProjects];
  saveProjects(nextProjects);
  return nextProjects;
}
