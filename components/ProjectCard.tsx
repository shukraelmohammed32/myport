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
    <article
      className="group overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--background-accent)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image */}
      <Link
        aria-label={`Open project link for ${project.title}`}
        className="relative block h-52 overflow-hidden"
        href={imageTarget}
        rel="noreferrer"
        target="_blank"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        {isDataImage ? (
          <img
            alt={`${project.title} project preview`}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            onError={() => setImageSrc("/images/project-ecommerce.svg")}
            src={imageSrc}
          />
        ) : (
          <Image
            alt={`${project.title} project preview`}
            className="object-cover transition duration-700 group-hover:scale-105"
            fill
            onError={() => setImageSrc("/images/project-ecommerce.svg")}
            src={imageSrc}
          />
        )}
        <div
          aria-hidden
          className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5"
        />
      </Link>

      {/* Content */}
      <div className="space-y-5 p-6">
        <div>
          <h3
            className="font-display text-xl font-bold leading-snug"
            style={{ color: "var(--foreground)" }}
          >
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            {project.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span className="chip text-xs" key={item}>{item}</span>
          ))}
        </div>

        <div
          className="flex items-center justify-between gap-5 pt-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-4">
            <Link
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              href={project.github}
              rel="noreferrer"
              target="_blank"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
            {project.demo ? (
              <Link
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] transition-colors hover:text-[var(--foreground)]"
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
            className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            Details &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}
