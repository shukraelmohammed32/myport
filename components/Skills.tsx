import { skillCategories } from "@/data/skills";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

type SkillsSectionProps = {
  preview?: boolean;
  sectionId?: string;
  showTitle?: boolean;
};

export function SkillsSection({
  preview = false,
  sectionId = "skills",
  showTitle = true
}: SkillsSectionProps) {
  const categories = preview ? skillCategories.slice(0, 3) : skillCategories;

  return (
    <section className="section-gap" id={sectionId}>
      <Container className="space-y-10">
        {showTitle ? (
          <FadeIn>
            <SectionTitle
              description="A curated stack focused on product velocity, reliability, and long-term maintainability."
              eyebrow="Skills & Technologies"
              title="Modern engineering toolkit"
            />
          </FadeIn>
        ) : null}

        <div className="grid gap-5 md:grid-cols-2">
          {categories.map((category, index) => (
            <FadeIn className="panel p-6 sm:p-7" delay={index * 0.05} key={category.title}>
              <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">
                {category.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {category.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.tools.map((tool) => (
                  <span className="chip" key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
