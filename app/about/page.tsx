import type { Metadata } from "next";

import { AboutSection } from "@/components/AboutSection";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillsSection } from "@/components/SkillsSection";

export const metadata: Metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <section className="section-gap pt-12 sm:pt-16">
        <Container>
          <FadeIn>
            <SectionTitle
              description="Engineer, mentor, and systems thinker focused on building software that stays elegant under scale."
              eyebrow="About"
              title="Crafting software with technical depth and product empathy"
            />
          </FadeIn>
        </Container>
      </section>
      <AboutSection sectionId="about-details" showTitle={false} />
      <SkillsSection preview={false} sectionId="about-skills" />
    </>
  );
}
