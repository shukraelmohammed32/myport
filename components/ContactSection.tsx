import Link from "next/link";
import { Github, Linkedin, Mail, SendHorizontal } from "lucide-react";

import { socialLinks, siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";

type ContactSectionProps = {
  compact?: boolean;
  showTitle?: boolean;
  sectionId?: string;
};

const iconByLabel = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail
} as const;

export function ContactSection({
  compact = false,
  showTitle = true,
  sectionId = "contact"
}: ContactSectionProps) {
  return (
    <section className="section-gap" id={sectionId}>
      <Container className="space-y-10">
        {showTitle ? (
          <FadeIn>
            <SectionTitle
              description="Let's discuss impactful products, architecture challenges, or team leadership opportunities."
              eyebrow="Contact"
              title="Let's build something meaningful"
            />
          </FadeIn>
        ) : null}

        {compact ? (
          <FadeIn className="panel flex flex-col items-start justify-between gap-5 p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h3
                className="font-display text-2xl font-semibold"
                style={{ color: "var(--ink)" }}
              >
                Open to high-impact engineering roles
              </h3>
              <p className="mt-2 max-w-xl text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                Reach out for collaboration, consulting, or full-time opportunities.
              </p>
            </div>
            <ButtonLink href="/contact">Start a Conversation</ButtonLink>
          </FadeIn>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Form */}
            <FadeIn className="panel p-6 sm:p-8">
              <form action="#" className="space-y-4" method="post">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      className="mb-2 block text-sm font-medium"
                      style={{ color: "var(--muted)" }}
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input className="input-field" id="name" name="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label
                      className="mb-2 block text-sm font-medium"
                      style={{ color: "var(--muted)" }}
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="input-field"
                      id="email"
                      name="email"
                      placeholder="name@company.com"
                      type="email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="mb-2 block text-sm font-medium"
                    style={{ color: "var(--muted)" }}
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <input
                    className="input-field"
                    id="subject"
                    name="subject"
                    placeholder="How can I help?"
                  />
                </div>
                <div>
                  <label
                    className="mb-2 block text-sm font-medium"
                    style={{ color: "var(--muted)" }}
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="input-field min-h-[140px] resize-y"
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or role..."
                  />
                </div>
                <button
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--ink)] px-5 py-2.5 text-sm font-semibold text-[var(--bg)] transition-all duration-200 hover:opacity-80 active:scale-[0.97]"
                  type="submit"
                >
                  <SendHorizontal className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </FadeIn>

            {/* Sidebar */}
            <FadeIn className="panel-muted space-y-6 p-6 sm:p-8" delay={0.08}>
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.22em]"
                  style={{ color: "var(--muted)" }}
                >
                  Professional Links
                </p>
                <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                  Prefer direct outreach? Connect via email or social platforms.
                </p>
              </div>

              <div className="space-y-2.5">
                {socialLinks.map((link) => {
                  const Icon = iconByLabel[link.label as keyof typeof iconByLabel] ?? Mail;
                  return (
                    <Link
                      className="flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-medium transition-colors hover:bg-[var(--surface)]"
                      style={{ borderColor: "var(--border)", color: "var(--ink)" }}
                      href={link.href}
                      key={link.label}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span>{link.label}</span>
                      <Icon className="h-4 w-4" style={{ color: "var(--muted)" }} />
                    </Link>
                  );
                })}
              </div>

              <div
                className="rounded-xl border p-4 text-sm"
                style={{ borderColor: "var(--border)", color: "var(--muted)" }}
              >
                <p>
                  Email:{" "}
                  <Link
                    className="link-hover font-semibold"
                    style={{ color: "var(--ink)" }}
                    href={`mailto:${siteConfig.email}`}
                  >
                    {siteConfig.email}
                  </Link>
                </p>
                <p className="mt-2">Location: {siteConfig.location}</p>
              </div>
            </FadeIn>
          </div>
        )}
      </Container>
    </section>
  );
}
