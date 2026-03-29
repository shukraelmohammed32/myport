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
  const frontendCategories = ["Frontend Frameworks", "CSS Frameworks", "Markup Languages"];
  const backendCategories = [
    "Programming Languages",
    "Backend Runtime",
    "Backend Frameworks",
    "Databases",
    "Database Tools",
    "API Development",
    "Mobile Development"
  ];

  const groupedSkills = [
    {
      category: "Frontend",
      items: skills
        .filter((s) => frontendCategories.includes(s.category))
        .sort((a, b) => a.name.localeCompare(b.name))
    },
    {
      category: "Backend",
      items: skills
        .filter((s) => backendCategories.includes(s.category))
        .sort((a, b) => a.name.localeCompare(b.name))
    },
    {
      category: "Tools & DevOps",
      items: skills
        .filter((s) => !frontendCategories.includes(s.category) && !backendCategories.includes(s.category))
        .sort((a, b) => a.name.localeCompare(b.name))
    }
  ];

  const visibleCategories = preview ? groupedSkills.slice(0, 3) : groupedSkills;

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

        <div className="space-y-14">
          {visibleCategories.map(({ category, items }, categoryIndex) => (
            <FadeIn key={category} delay={categoryIndex * 0.06}>
              <div className="space-y-5">
                <h2
                  className="font-display text-xl font-bold pb-3"
                  style={{
                    color: "var(--ink)",
                    borderBottom: "1px solid var(--border)"
                  }}
                >
                  {category}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {items.map((skill) => (
                    <div
                      key={skill.name}
                      className="panel p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
                    >
                      <div className="flex items-center gap-3">
                        <Image
                          alt={`${skill.name} icon`}
                          className="rounded-lg"
                          height={44}
                          src={skill.icon}
                          width={44}
                          style={{ border: "1px solid var(--border)" }}
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h3
                              className="truncate font-display text-sm font-semibold"
                              style={{ color: "var(--ink)" }}
                            >
                              {skill.name}
                            </h3>
                            <span
                              className="text-xs font-semibold tabular-nums"
                              style={{ color: "var(--muted)" }}
                            >
                              {skill.percentage}%
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Skill bar */}
                      <div
                        className="mt-3 h-1.5 rounded-full overflow-hidden"
                        style={{ backgroundColor: "var(--border)" }}
                      >
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${skill.percentage}%`,
                            backgroundColor: "var(--ink)"
                          }}
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
