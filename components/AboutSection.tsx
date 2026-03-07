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
          <FadeIn className="panel p-6 sm:p-7">
            <h3 className="font-display text-xl font-semibold text-slate-100 dark:text-slate-100">
              Professional background
            </h3>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-300 dark:text-slate-300 sm:text-base">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="panel-muted p-6 sm:p-7" delay={0.08}>
            <h3 className="font-display text-xl font-semibold text-slate-100 dark:text-slate-100">
              Working principles
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300 dark:text-slate-300 sm:text-base">
              {values.map((principle) => (
                <li className="flex gap-3" key={principle}>
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-purple-500 dark:bg-purple-400" />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
