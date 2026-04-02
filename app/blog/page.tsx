import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { FadeIn } from "@/components/FadeIn";

const blogPosts = [
  {
    slug: "mastering-react-hooks",
    title: "Mastering React Hooks: A Deep Dive",
    date: "2024-03-15",
    summary: "Explore the power of React Hooks and learn how to write cleaner, more efficient, and more reusable functional components.",
  },
  {
    slug: "nextjs-vs-remix",
    title: "Next.js vs. Remix: A Developer's Perspective",
    date: "2024-02-28",
    summary: "A comprehensive comparison of two of the most popular React frameworks. Which one is right for your next project?",
  },
  {
    slug: "tailwind-css-best-practices",
    title: "Tailwind CSS Best Practices for Scalable Projects",
    date: "2024-01-20",
    summary: "Learn how to structure your Tailwind CSS projects for maximum scalability and maintainability, with tips and tricks from the pros.",
  },
];

export default function BlogPage() {
  return (
    <main className="section-gap">
      <Container>
        <FadeIn>
          <SectionTitle
            eyebrow="Blog"
            title="Thoughts on Code and Design"
            description="I write about web development, design, and the things I learn along the way."
            centered
          />
        </FadeIn>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <FadeIn key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <div className="panel h-full p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-sm" style={{ color: "var(--muted)" }}>{post.date}</p>
                  <h3 className="mt-2 font-display text-xl font-bold" style={{ color: "var(--foreground)" }}>
                    {post.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                    {post.summary}
                  </p>
                  <p className="mt-6 text-sm font-semibold text-accent">Read more &rarr;</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </main>
  );
}
