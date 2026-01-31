import { notFound } from "next/navigation";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

import { projects } from "@/data/projects";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="section-gap pt-12 sm:pt-16">
      <Container>
        <div className="space-y-8">
          <div className="glass-panel rounded-[34px] p-6 sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="section-kicker">Project spotlight</span>
              <ButtonLink href="/projects" variant="secondary">
                Back to Gallery
              </ButtonLink>
            </div>

            <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">{project.summary}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span className="chip text-[0.68rem]" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="glass-panel overflow-hidden rounded-[34px]">
              <div className="relative min-h-[28rem]">
                <Image alt={project.title} className="object-cover" fill src={project.image} />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,224,255,0.08),transparent_30%,transparent_60%,rgba(3,8,18,0.94)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="rounded-[28px] border border-white/10 bg-black/45 p-5 backdrop-blur-2xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">About the project</p>
                    <p className="mt-3 text-base leading-8 text-white/72">
                      This project is presented as a polished case-study surface, with room for expanded narrative,
                      live metrics, or screenshots from a real production release.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-panel rounded-[32px] p-6 sm:p-8">
                <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">Technologies Used</h2>
                <div className="mt-5 grid gap-3">
                  {project.stack.map((tech) => (
                    <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-3" key={tech}>
                      <p className="text-sm font-medium text-white/72">{tech}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-panel rounded-[32px] p-6 sm:p-8">
                <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">Project Actions</h2>
                <div className="mt-5 flex flex-col gap-4">
                  <ButtonLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    View on GitHub
                  </ButtonLink>
                  {project.demo ? (
                    <ButtonLink href={project.demo} target="_blank" rel="noopener noreferrer" variant="secondary">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </ButtonLink>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
