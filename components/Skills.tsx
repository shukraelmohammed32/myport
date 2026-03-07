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
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  // If preview, show only first few categories
  const visibleCategories = preview 
    ? Object.entries(skillsByCategory).slice(0, 3) 
    : Object.entries(skillsByCategory);

  return (
    <section className="section-gap" id={sectionId}>
      <Container className="space-y-10">
        {showTitle ? (
          <FadeIn>
            <SectionTitle
              description="Skills organized by technology categories with practical proficiency scores based on projects, production work, and daily usage."
              eyebrow="Skills & Technologies"
              title="Technical skills by category"
            />
          </FadeIn>
        ) : null}

        <div className="space-y-12">
          {visibleCategories.map(([category, categorySkills], categoryIndex) => (
            <FadeIn key={category} delay={categoryIndex * 0.05}>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-purple-100 dark:text-purple-100 border-b border-purple-500/30 dark:border-purple-400/30 pb-2">
                  {category}
                </h2>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {categorySkills.map((skill, skillIndex) => (
                    <div 
                      className="panel tilt-surface p-5 transition-all duration-300 hover:scale-105 hover:shadow-glow-lg" 
                      key={skill.name}
                      style={{
                        animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <Image
                          alt={`${skill.name} icon`}
                          className="rounded-xl border border-purple-500/30 transition-transform duration-300 hover:scale-110"
                          height={56}
                          src={skill.icon}
                          width={56}
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <h3 className="truncate font-display text-lg font-semibold text-purple-100 dark:text-purple-100">
                              {skill.name}
                            </h3>
                            <span className="text-sm font-semibold text-purple-400 dark:text-purple-300">
                              {skill.percentage}%
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="skill-meter mt-4 h-2.5 rounded-full bg-purple-900/60 dark:bg-purple-800/60">
                        <div
                          aria-hidden
                          className="skill-meter-fill h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 transition-all duration-300"
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
