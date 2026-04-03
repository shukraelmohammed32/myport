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
    <article className="tilt-card group overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02)),rgba(8,14,28,0.72)] transition-all duration-300">
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
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.18)_40%,rgba(3,8,18,0.9)_100%)]" />
        <div className="absolute left-4 top-4">
          <span className="section-kicker bg-black/35 text-white/80">Featured case</span>
        </div>
      </Link>

      <div className="space-y-5 p-6">
        <div>
          <h3 className="font-display text-2xl font-semibold leading-snug tracking-[-0.03em] text-white">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-7 text-white/64">
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
              className="inline-flex items-center gap-1.5 rounded-2xl border border-cyan-300/25 bg-[linear-gradient(135deg,rgba(0,224,255,0.95),rgba(0,122,255,0.72))] px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(0,224,255,0.16)] transition duration-300 hover:-translate-y-0.5"
              href={project.github}
              rel="noreferrer"
              target="_blank"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
            {project.demo ? (
              <Link
                className="inline-flex items-center gap-1.5 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/84 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:text-white"
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
            className="ml-auto text-sm font-semibold text-cyan-200 transition duration-300 hover:text-white"
          >
            Details &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}
