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
              <h3 className="font-display text-2xl font-semibold text-slate-100">
                Open to high-impact engineering roles
              </h3>
              <p className="mt-2 max-w-xl text-sm text-slate-300 sm:text-base">
                Reach out for collaboration, consulting, or full-time opportunities.
              </p>
            </div>
            <ButtonLink href="/contact">Start a Conversation</ButtonLink>
          </FadeIn>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <FadeIn className="panel p-6 sm:p-8">
              <form action="#" className="space-y-4" method="post">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      className="mb-2 block text-sm font-medium text-slate-300"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input className="input-field" id="name" name="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label
                      className="mb-2 block text-sm font-medium text-slate-300"
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
                    className="mb-2 block text-sm font-medium text-slate-300"
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
                    className="mb-2 block text-sm font-medium text-slate-300"
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
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition hover:from-purple-500 hover:to-pink-500 hover:shadow-xl hover:shadow-purple-800/40 active:scale-[0.98]"
                  type="submit"
                >
                  <SendHorizontal className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </FadeIn>

            <FadeIn className="panel-muted space-y-6 p-6 sm:p-8" delay={0.08}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                  Professional Links
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Prefer direct outreach? Connect through email or social platforms.
                </p>
              </div>

              <div className="space-y-3">
                {socialLinks.map((link) => {
                  const Icon = iconByLabel[link.label as keyof typeof iconByLabel] ?? Mail;

                  return (
                    <Link
                      className="flex items-center justify-between rounded-2xl border border-purple-500/30 bg-purple-800/40 px-4 py-3 text-sm font-medium text-purple-200 transition hover:border-purple-400/50 hover:bg-purple-700/50 hover:text-purple-100"
                      href={link.href}
                      key={link.label}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span>{link.label}</span>
                      <Icon className="h-4 w-4" />
                    </Link>
                  );
                })}
              </div>

              <div className="rounded-2xl border border-purple-500/20 bg-purple-900/30 p-4 text-sm text-slate-300">
                <p>
                  Email:{" "}
                  <Link
                    className="font-semibold text-purple-300 hover:text-purple-200 transition"
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
