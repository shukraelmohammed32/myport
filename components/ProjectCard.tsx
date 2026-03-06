import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="panel perspective-wrap tilt-surface group overflow-hidden transition duration-300 hover:shadow-lg dark:hover:shadow-none">
      <div className="relative h-52 overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <Image
          alt={`${project.title} project preview`}
          className="object-cover transition duration-700 group-hover:scale-[1.06]"
          fill
          src={project.image}
        />
      </div>

      <div className="space-y-4 p-6">
        <div>
          <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {project.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
            href={project.github}
            rel="noreferrer"
            target="_blank"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
          {project.demo ? (
            <Link
              className="inline-flex items-center gap-1 text-sm font-semibold text-teal-700 transition hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-200"
              href={project.demo}
              rel="noreferrer"
              target="_blank"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
