import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Projects"
};

export default function ProjectsPage() {
  return (
    <>
      <section className="section-gap pt-12 sm:pt-16">
        <Container>
          <FadeIn>
            <SectionTitle
              description="A portfolio of production-oriented applications across commerce, collaboration, observability, and design systems."
              eyebrow="Projects"
              title="Engineering work across product and platform domains"
            />
          </FadeIn>
        </Container>
      </section>
      <ProjectsSection sectionId="project-gallery" showTitle={false} />
    </>
  );
}
