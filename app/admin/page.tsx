"use client";

import { useEffect, useState } from "react";

import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import { addStoredProject, getStoredProjects } from "@/lib/projectStore";

type FormState = {
  title: string;
  summary: string;
  image: string;
  stack: string;
  github: string;
  demo: string;
};

const initialForm: FormState = {
  title: "",
  summary: "",
  image: "/images/project-ecommerce.svg",
  stack: "Next.js, TypeScript, Tailwind CSS",
  github: "",
  demo: ""
};

export default function AdminPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [projectCount, setProjectCount] = useState(0);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setProjectCount(getStoredProjects().length);
  }, []);

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((previous) => ({
      ...previous,
      [field]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    setError("");

    if (!form.title.trim() || !form.summary.trim() || !form.github.trim()) {
      setError("Title, summary, and GitHub URL are required.");
      return;
    }

    if (!form.image.trim().startsWith("/")) {
      setError("Image path should start with /. Example: /images/my-project.svg");
      return;
    }

    const stack = form.stack
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    if (stack.length === 0) {
      setError("Add at least one technology in stack.");
      return;
    }

    const nextProjects = addStoredProject({
      title: form.title.trim(),
      summary: form.summary.trim(),
      image: form.image.trim(),
      stack,
      github: form.github.trim(),
      demo: form.demo.trim() || undefined
    });

    setProjectCount(nextProjects.length);
    setMessage(`Project added. Total projects: ${nextProjects.length}`);
    setForm(initialForm);
  };

  return (
    <section className="section-gap pt-12 sm:pt-16">
      <Container className="space-y-8">
        <FadeIn>
          <SectionTitle
            description="Add new projects to your portfolio list. Saved projects appear on Home and Projects pages for this browser."
            eyebrow="Admin"
            title="Manage portfolio projects"
          />
        </FadeIn>

        <FadeIn>
          <div className="panel p-6 sm:p-8">
            <p className="text-sm text-slate-300">Current saved projects: {projectCount}</p>

            <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
              <input
                className="input-field"
                onChange={(event) => handleChange("title", event.target.value)}
                placeholder="Project title"
                required
                value={form.title}
              />

              <textarea
                className="input-field min-h-[110px]"
                onChange={(event) => handleChange("summary", event.target.value)}
                placeholder="Project summary"
                required
                value={form.summary}
              />

              <input
                className="input-field"
                onChange={(event) => handleChange("image", event.target.value)}
                placeholder="Image path (example: /images/project-name.svg)"
                required
                value={form.image}
              />

              <input
                className="input-field"
                onChange={(event) => handleChange("stack", event.target.value)}
                placeholder="Tech stack separated by commas"
                required
                value={form.stack}
              />

              <input
                className="input-field"
                onChange={(event) => handleChange("github", event.target.value)}
                placeholder="GitHub URL"
                required
                type="url"
                value={form.github}
              />

              <input
                className="input-field"
                onChange={(event) => handleChange("demo", event.target.value)}
                placeholder="Live demo URL (optional)"
                type="url"
                value={form.demo}
              />

              <button className="mt-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-500" type="submit">
                Add Project
              </button>
            </form>

            {message ? <p className="mt-4 text-sm text-emerald-300">{message}</p> : null}
            {error ? <p className="mt-4 text-sm text-red-300">{error}</p> : null}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
