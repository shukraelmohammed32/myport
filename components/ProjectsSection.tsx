import { ArrowRight } from "lucide-react";

import { projects } from "@/data/projects";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";

type ProjectsSectionProps = {
  limit?: number;
  showTitle?: boolean;
  sectionId?: string;
};

export function ProjectsSection({
  limit,
  showTitle = true,
  sectionId = "projects"
}: ProjectsSectionProps) {
  const visibleProjects = typeof limit === "number" ? projects.slice(0, limit) : projects;
  const hasMoreProjects = typeof limit === "number" && projects.length > limit;

  return (
    <section className="section-gap" id={sectionId}>
      <Container className="space-y-10">
        {showTitle ? (
          <FadeIn>
            <SectionTitle
              description="A selection of production-focused projects showcasing architecture, visual craft, and measurable outcomes."
              eyebrow="Projects"
              title="Selected product engineering work"
            />
          </FadeIn>
        ) : null}

        <div className="grid gap-6 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <FadeIn delay={index * 0.05} key={project.title}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>

        {hasMoreProjects ? (
          <FadeIn className="flex justify-center pt-2">
            <ButtonLink href="/projects" variant="secondary">
              Explore All Projects
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </FadeIn>
        ) : null}
      </Container>
    </section>
  );
}
