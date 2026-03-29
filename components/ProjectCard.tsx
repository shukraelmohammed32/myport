"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

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
    <article className="panel perspective-wrap tilt-surface group overflow-hidden transition duration-300 hover:shadow-glow-lg">
      <Link
        aria-label={`Open project link for ${project.title}`}
        className="relative block h-52 overflow-hidden border-b border-purple-500/20"
        href={imageTarget}
        rel="noreferrer"
        target="_blank"
      >
        {isDataImage ? (
          <img
            alt={`${project.title} project preview`}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
            onError={() => setImageSrc("/images/project-ecommerce.svg")}
            src={imageSrc}
          />
        ) : (
          <Image
            alt={`${project.title} project preview`}
            className="object-cover transition duration-700 group-hover:scale-[1.06]"
            fill
            onError={() => setImageSrc("/images/project-ecommerce.svg")}
            src={imageSrc}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      <div className="space-y-4 p-6">
        <div>
          <h3 className="font-display text-xl font-semibold text-slate-100">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
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

        <div className="flex flex-wrap gap-3 pt-1 border-t border-purple-500/20">
          <Link
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-300 transition hover:text-purple-100"
            href={project.github}
            rel="noreferrer"
            target="_blank"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
          {project.demo ? (
            <Link
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-pink-300 transition hover:text-pink-100"
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
