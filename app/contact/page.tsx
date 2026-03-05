import type { Metadata } from "next";

import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <>
      <section className="section-gap pt-12 sm:pt-16">
        <Container>
          <FadeIn>
            <SectionTitle
              description="Have a project, leadership opportunity, or technical challenge in mind? Let’s connect."
              eyebrow="Contact"
              title="Start a conversation"
            />
          </FadeIn>
        </Container>
      </section>
      <ContactSection sectionId="contact-form" showTitle={false} />
    </>
  );
}
