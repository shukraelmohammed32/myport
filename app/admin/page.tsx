"use client";

import { useEffect, useState } from "react";

import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { SectionTitle } from "@/components/SectionTitle";
import { addStoredProject, getStoredProjects, removeStoredProjectAt } from "@/lib/projectStore";
import type { Project } from "@/types/portfolio";

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
  const [storedProjects, setStoredProjects] = useState<Project[]>([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [uploadInfo, setUploadInfo] = useState("");

  useEffect(() => {
    const projects = getStoredProjects();
    setStoredProjects(projects);
    setProjectCount(projects.length);
  }, []);

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((previous) => ({
      ...previous,
      [field]: value
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setError("Image is too large. Use an image under 2MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";

      if (!result) {
        setError("Could not read uploaded image.");
        return;
      }

      setError("");
      setUploadInfo(`Uploaded: ${file.name}`);
      handleChange("image", result);
    };

    reader.onerror = () => {
      setError("Could not read uploaded image.");
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    setError("");

    if (!form.title.trim() || !form.summary.trim() || !form.github.trim()) {
      setError("Title, summary, and GitHub URL are required.");
      return;
    }

    const isDataImage = form.image.trim().startsWith("data:image/");

    if (!isDataImage && !form.image.trim().startsWith("/")) {
      setError("Image path should start with /. Example: /images/my-project.svg");
      return;
    }

    if (
      !isDataImage &&
      /(\.png\.png|\.jpg\.jpg|\.jpeg\.jpeg|\.webp\.webp|\.svg\.svg)$/i.test(form.image.trim())
    ) {
      setError("Image path has a duplicate extension. Use single extension like /images/project.png");
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

    setStoredProjects(nextProjects);
    setProjectCount(nextProjects.length);
    setMessage(`Project added. Total projects: ${nextProjects.length}`);
    setUploadInfo("");
    setForm(initialForm);
  };

  const handleDeleteProject = (index: number) => {
    const confirmed = window.confirm("Delete this project?");

    if (!confirmed) {
      return;
    }

    const nextProjects = removeStoredProjectAt(index);
    setStoredProjects(nextProjects);
    setProjectCount(nextProjects.length);
    setMessage("Project deleted.");
    setError("");
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
                placeholder="Image path (example: /images/project-name.svg) or upload below"
                required
                value={form.image}
              />

              <input
                accept="image/png,image/jpeg,image/jpg,image/webp,image/svg+xml"
                className="input-field"
                onChange={handleImageUpload}
                type="file"
              />

              {uploadInfo ? <p className="text-xs text-slate-300">{uploadInfo}</p> : null}

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

            <div className="mt-8 space-y-3">
              <p className="text-sm font-semibold text-slate-200">Saved projects</p>
              {storedProjects.map((project, index) => (
                <div
                  className="flex items-center justify-between gap-3 rounded-xl border border-slate-700/70 bg-slate-900/40 px-4 py-3"
                  key={`${project.title}-${index}`}
                >
                  <div>
                    <p className="text-sm font-medium text-slate-100">{project.title}</p>
                    <p className="text-xs text-slate-300">{project.image.startsWith("data:image/") ? "Uploaded image" : project.image}</p>
                  </div>
                  <button
                    className="rounded-lg border border-red-500/40 bg-red-600/20 px-3 py-1.5 text-xs font-semibold text-red-200 transition hover:bg-red-600/30"
                    onClick={() => handleDeleteProject(index)}
                    type="button"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
