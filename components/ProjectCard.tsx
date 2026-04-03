"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";

import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [imageSrc, setImageSrc] = useState(project.image);
  const isDataImage = imageSrc.startsWith("data:image/");
  const imageTarget = project.demo || project.github || imageSrc;

  useEffect(() => {
    setImageSrc(project.image);
  }, [project.image]);

  return (
    <article className="tilt-card group overflow-hidden rounded-[30px] border border-[color:var(--border)] bg-[linear-gradient(180deg,var(--surface-glint),var(--surface-glint-soft)),var(--surface-strong)] transition-all duration-300">
      <Link
        aria-label={`Open project link for ${project.title}`}
        className="relative block aspect-[16/10] overflow-hidden"
        href={imageTarget}
        rel="noreferrer"
        target="_blank"
      >
        <Image
          alt={`${project.title} project preview`}
          className="object-cover transition duration-700 group-hover:scale-105"
          fill
          onError={() => setImageSrc("/images/project-ecommerce.svg")}
          src={imageSrc}
          unoptimized={isDataImage}
        />
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.18)_40%,var(--backdrop)_100%)]" />
        <div className="absolute left-4 top-4">
          <span className="section-kicker">Featured case</span>
        </div>
      </Link>

      <div className="space-y-5 p-6">
        <div>
          <h3 className="font-display text-2xl font-semibold leading-snug tracking-[-0.03em] text-[color:var(--foreground)]">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
            {project.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span className="chip text-[0.68rem]" key={item}>
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-4">
          <div className="flex items-center gap-4">
            <Link
              className="inline-flex items-center gap-1.5 rounded-2xl border border-[color:var(--accent-soft-strong)] bg-[linear-gradient(135deg,var(--accent),var(--accent-secondary))] px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_var(--accent-soft)] transition duration-300 hover:-translate-y-0.5"
              href={project.github}
              rel="noreferrer"
              target="_blank"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
            {project.demo ? (
              <Link
                className="inline-flex items-center gap-1.5 rounded-2xl border border-[color:var(--border)] bg-[var(--surface-muted)] px-4 py-3 text-sm font-semibold text-[color:var(--foreground)] transition duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent-soft-strong)] hover:text-[color:var(--foreground)]"
                href={project.demo}
                rel="noreferrer"
                target="_blank"
              >
                Live Demo
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            ) : null}
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="ml-auto text-sm font-semibold text-[color:var(--accent-strong)] transition duration-300 hover:text-[color:var(--foreground)]"
          >
            Details &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}
