import Image from "next/image";

import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionTitle } from "@/components/SectionTitle";
import { resume } from "@/data/resume";
import { siteConfig } from "@/data/site";
import {
  BriefcaseBusiness,
  Download,
  Github,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Star
} from "lucide-react";

export const metadata = {
  title: "Resume"
};

export default function ResumePage() {
  return (
    <section className="section-gap">
      <Container className="space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            eyebrow="CV"
            title="Resume"
            description="A clean, modern CV layout with a neon-glass accent — designed to read fast and look premium."
          />
          <ButtonLink href="/Shukrael_Resume.pdf" download variant="primary">
            Download PDF
            <Download className="h-4 w-4" />
          </ButtonLink>
        </div>

        <div className="grid gap-6 lg:grid-cols-[22rem_1fr]">
          <aside className="glass-panel rounded-[28px] p-6 sm:p-7">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border border-[color:var(--accent-soft-strong)] bg-[linear-gradient(135deg,var(--accent-soft),var(--accent-soft-strong))] p-1 shadow-[0_0_30px_var(--accent-soft)]">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  alt={siteConfig.profileImageAlt}
                  className="object-cover"
                  fill
                  priority
                  sizes="96px"
                  src={siteConfig.profileImage}
                />
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="font-display text-2xl font-bold tracking-tight text-[color:var(--foreground)] sm:text-3xl">
                {resume.name}
              </h1>
              <p className="text-sm font-semibold tracking-wide text-[color:var(--accent-strong)]">
                {resume.headline}
              </p>
            </div>

            <div className="mt-6 space-y-3 text-sm text-[color:var(--muted)]">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[color:var(--accent)]" />
                <span>{resume.location}</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-[color:var(--accent)]" />
                <a className="link-hover" href={`mailto:${resume.email}`}>
                  {resume.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Github className="mt-0.5 h-4 w-4 text-[color:var(--accent)]" />
                <a className="link-hover" href={resume.links.github} rel="noreferrer" target="_blank">
                  {resume.links.github.replace(/^https?:\/\//, "")}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Linkedin className="mt-0.5 h-4 w-4 text-[color:var(--accent)]" />
                <a className="link-hover" href={resume.links.linkedin} rel="noreferrer" target="_blank">
                  {resume.links.linkedin.replace(/^https?:\/\//, "")}
                </a>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="section-kicker">
                    <Sparkles className="h-3.5 w-3.5" />
                    Skills
                  </span>
                  <span className="section-rule" />
                </div>
                <div className="space-y-4">
                  {resume.skills.map((group) => (
                    <div key={group.group} className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
                        {group.group}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span key={item} className="chip">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="section-kicker">
                    <Languages className="h-3.5 w-3.5" />
                    Languages
                  </span>
                  <span className="section-rule" />
                </div>
                <div className="grid gap-2 text-sm text-[color:var(--muted)]">
                  {resume.languages.map((language) => (
                    <div key={language.name} className="flex items-center justify-between gap-4">
                      <span className="font-semibold text-[color:var(--foreground)]">{language.name}</span>
                      <span className="chip">{language.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="section-kicker">
                    <Star className="h-3.5 w-3.5" />
                    Interests
                  </span>
                  <span className="section-rule" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {resume.interests.map((interest) => (
                    <span key={interest} className="chip">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="space-y-6">
            <article className="glass-panel rounded-[28px] p-6 sm:p-7">
              <div className="flex items-center gap-4">
                <span className="section-kicker">
                  <Sparkles className="h-3.5 w-3.5" />
                  Profile
                </span>
                <span className="section-rule" />
              </div>
              <div className="mt-5 space-y-3 text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
                {resume.summary.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </article>

            <article className="glass-panel rounded-[28px] p-6 sm:p-7">
              <div className="flex items-center gap-4">
                <span className="section-kicker">
                  <BriefcaseBusiness className="h-3.5 w-3.5" />
                  Experience
                </span>
                <span className="section-rule" />
              </div>

              <div className="mt-5 space-y-6">
                {resume.experience.map((item) => (
                  <div key={item.title} className="space-y-3">
                    <h3 className="font-display text-xl font-semibold tracking-tight text-[color:var(--foreground)]">
                      {item.title}
                    </h3>
                    <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>

            <article className="glass-panel rounded-[28px] p-6 sm:p-7">
              <div className="flex items-center gap-4">
                <span className="section-kicker">
                  <Sparkles className="h-3.5 w-3.5" />
                  Projects
                </span>
                <span className="section-rule" />
              </div>

              <div className="mt-5 grid gap-4">
                {resume.projects.map((project) => (
                  <div key={project.title} className="panel-muted rounded-[22px] p-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-2">
                        <h3 className="font-display text-lg font-semibold tracking-tight text-[color:var(--foreground)]">
                          {project.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                          {project.summary}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 sm:max-w-[16rem] sm:justify-end">
                        {project.stack.map((item) => (
                          <span key={item} className="chip">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="glass-panel rounded-[28px] p-6 sm:p-7">
              <div className="flex items-center gap-4">
                <span className="section-kicker">
                  <GraduationCap className="h-3.5 w-3.5" />
                  Education
                </span>
                <span className="section-rule" />
              </div>

              <div className="mt-5 grid gap-4">
                {resume.education.map((edu) => (
                  <div key={edu.degree} className="panel-muted rounded-[22px] p-5">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-[color:var(--foreground)]">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 text-sm text-[color:var(--muted)]">
                      {edu.school} • {edu.location}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">{edu.note}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="glass-panel rounded-[28px] p-6 sm:p-7">
              <div className="flex items-center gap-4">
                <span className="section-kicker">
                  <Sparkles className="h-3.5 w-3.5" />
                  Highlights
                </span>
                <span className="section-rule" />
              </div>

              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
                {resume.achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="mt-7 border-t border-[color:var(--border)] pt-5 text-sm text-[color:var(--muted)]">
                <p className="font-semibold text-[color:var(--foreground)]">References</p>
                <p className="mt-2 leading-relaxed">{resume.references}</p>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
