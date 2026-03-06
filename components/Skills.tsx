import Image from "next/image";

import { skills } from "@/data/skills";
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
  const visibleSkills = preview ? skills.slice(0, 8) : skills;

  return (
    <section className="section-gap" id={sectionId}>
      <Container className="space-y-10">
        {showTitle ? (
          <FadeIn>
            <SectionTitle
              description="Skill cards with practical proficiency scores based on projects, production work, and daily usage."
              eyebrow="Skills & Technologies"
              title="Technical skills with proficiency percentage"
            />
          </FadeIn>
        ) : null}

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visibleSkills.map((skill, index) => (
            <FadeIn className="panel tilt-surface p-5" delay={index * 0.03} key={skill.name}>
              <div className="flex items-center gap-4">
                <Image
                  alt={`${skill.name} icon`}
                  className="rounded-xl border border-slate-200/70 dark:border-slate-700/80"
                  height={56}
                  src={skill.icon}
                  width={56}
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="truncate font-display text-lg font-semibold text-slate-900 dark:text-slate-100">
                      {skill.name}
                    </h3>
                    <span className="text-sm font-semibold text-teal-700 dark:text-teal-300">
                      {skill.percentage}%
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                    {skill.category}
                  </p>
                </div>
              </div>

              <div className="skill-meter mt-4 h-2.5 rounded-full bg-slate-200/80 dark:bg-slate-700/60">
                <div
                  aria-hidden
                  className="skill-meter-fill h-full rounded-full bg-gradient-to-r from-teal-500 via-sky-500 to-orange-400"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
