import { notFound } from "next/navigation";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

import { projects } from "@/data/projects";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="py-12">
      <Container>
        <div className="space-y-8">
          <h1 className="text-4xl font-bold tracking-tight text-center font-display">
            {project.title}
          </h1>

          <div className="relative h-96 w-full overflow-hidden rounded-lg border border-[var(--border)]">
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold font-display">About the project</h2>
              <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
                {project.summary}
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold font-display">Technologies Used</h2>
              <ul className="space-y-2">
                {project.stack.map((tech) => (
                  <li key={tech} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-lg" style={{ color: "var(--muted)" }}>{tech}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <ButtonLink href={project.github} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View on GitHub
                </ButtonLink>
                {project.demo && (
                  <ButtonLink href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Live Demo
                  </ButtonLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
