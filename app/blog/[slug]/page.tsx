import { notFound } from "next/navigation";
import { Container } from "@/components/Container";

const blogPosts = [
  {
    slug: "mastering-react-hooks",
    title: "Mastering React Hooks: A Deep Dive",
    date: "2024-03-15",
    summary: "Explore the power of React Hooks and learn how to write cleaner, more efficient, and more reusable functional components.",
    content: `
<p>React Hooks have revolutionized the way we write components. In this post, we'll take a deep dive into the most important Hooks and how to use them effectively.</p>
<h2>useState</h2>
<p>The <code>useState</code> Hook is the most basic and essential Hook. It allows you to add state to your functional components.</p>
<h2>useEffect</h2>
<p>The <code>useEffect</code> Hook lets you perform side effects in your components. This can be anything from fetching data to directly manipulating the DOM.</p>
<h2>useContext</h2>
<p>The <code>useContext</code> Hook allows you to subscribe to React context without introducing nesting.</p>
`
  },
  {
    slug: "nextjs-vs-remix",
    title: "Next.js vs. Remix: A Developer's Perspective",
    date: "2024-02-28",
    summary: "A comprehensive comparison of two of the most popular React frameworks. Which one is right for your next project?",
    content: `
<p>Next.js and Remix are two of the most popular React frameworks. In this post, we'll compare them and help you decide which one is right for your next project.</p>
<h2>Server-Side Rendering</h2>
<p>Both Next.js and Remix offer server-side rendering, but they approach it in different ways. We'll explore the differences and the pros and cons of each approach.</p>
<h2>Data Loading</h2>
<p>Data loading is another area where Next.js and Remix differ. We'll look at how each framework handles data loading and how it affects performance and developer experience.</p>
`
  },
  {
    slug: "tailwind-css-best-practices",
    title: "Tailwind CSS Best Practices for Scalable Projects",
    date: "2024-01-20",
    summary: "Learn how to structure your Tailwind CSS projects for maximum scalability and maintainability, with tips and tricks from the pros.",
    content: `
<p>Tailwind CSS is a utility-first CSS framework that has taken the web development world by storm. In this post, we'll share some best practices for using Tailwind CSS in scalable projects.</p>
<h2>Configuration</h2>
<p>One of the keys to a scalable Tailwind CSS project is a well-structured configuration file. We'll show you how to set up your <code>tailwind.config.js</code> file for success.</p>
<h2>Component-Based Styling</h2>
<p>While Tailwind is a utility-first framework, that doesn't mean you can't create reusable components. We'll show you how to use Tailwind's <code>@apply</code> directive to create component classes.</p>
`
  }
];

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="section-gap">
      <Container>
        <article className="prose prose-lg mx-auto dark:prose-invert">
          <h1 className="font-display text-4xl font-bold tracking-tight">{post.title}</h1>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Published on {post.date}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </Container>
    </main>
  );
}
