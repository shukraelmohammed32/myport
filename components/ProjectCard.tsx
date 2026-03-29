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
      className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
      style={{
        borderRadius: "1rem",
        border: "1px solid var(--border)",
        backgroundColor: "var(--surface)"
      }}
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
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
            onError={() => setImageSrc("/images/project-ecommerce.svg")}
            src={imageSrc}
          />
        ) : (
          <Image
            alt={`${project.title} project preview`}
            className="object-cover transition duration-700 group-hover:scale-[1.05]"
            fill
            onError={() => setImageSrc("/images/project-ecommerce.svg")}
            src={imageSrc}
          />
        )}
        <div
          aria-hidden
          className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"
        />
      </Link>

      {/* Content */}
      <div className="space-y-4 p-6">
        <div>
          <h3
            className="font-display text-lg font-bold leading-snug"
            style={{ color: "var(--ink)" }}
          >
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            {project.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((item) => (
            <span className="chip" key={item}>{item}</span>
          ))}
        </div>

        <div
          className="flex flex-wrap gap-5 pt-3"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <Link
            className="link-hover inline-flex items-center gap-1.5 text-sm font-medium opacity-60 transition-opacity hover:opacity-100"
            style={{ color: "var(--ink)" }}
            href={project.github}
            rel="noreferrer"
            target="_blank"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
          {project.demo ? (
            <Link
              className="link-hover inline-flex items-center gap-1.5 text-sm font-semibold"
              style={{ color: "var(--ink)" }}
              href={project.demo}
              rel="noreferrer"
              target="_blank"
            >
              <ArrowUpRight className="h-4 w-4" />
              Live Demo
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
