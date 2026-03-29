import { aboutParagraphs, principles } from "@/data/site";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

type AboutSectionProps = {
  compact?: boolean;
  showTitle?: boolean;
  sectionId?: string;
};

export function AboutSection({
  compact = false,
  showTitle = true,
  sectionId = "about"
}: AboutSectionProps) {
  const paragraphs = compact ? aboutParagraphs.slice(0, 2) : aboutParagraphs;
  const values = compact ? principles.slice(0, 2) : principles;

  return (
    <section className="section-gap" id={sectionId}>
      <Container className="space-y-10">
        {showTitle ? (
          <FadeIn>
            <SectionTitle
              description="Experienced in shipping complex product initiatives with a strong focus on maintainability, quality, and team velocity."
              eyebrow="About"
              title="Engineering with clarity and long-term thinking"
            />
          </FadeIn>
        ) : null}

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Background */}
          <FadeIn className="panel p-6 sm:p-8">
            <h3
              className="font-display text-xl font-semibold"
              style={{ color: "var(--ink)" }}
            >
              Professional background
            </h3>
            <div
              className="mt-4 space-y-4 text-sm leading-relaxed sm:text-base"
              style={{ color: "var(--muted)" }}
            >
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>

          {/* Principles */}
          <FadeIn className="panel-muted p-6 sm:p-8" delay={0.08}>
            <h3
              className="font-display text-xl font-semibold"
              style={{ color: "var(--ink)" }}
            >
              Working principles
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed sm:text-base">
              {values.map((principle) => (
                <li className="flex gap-3" key={principle}>
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                  <span style={{ color: "var(--muted)" }}>{principle}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
