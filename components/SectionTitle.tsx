import { cn } from "@/lib/cn";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionTitle({ eyebrow, title, description, centered = false }: SectionTitleProps) {
  return (
    <div className={cn("space-y-4", centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl")}>
      <p
        className="text-xs font-bold uppercase tracking-[0.26em]"
        style={{ color: "var(--muted)" }}
      >
        {eyebrow}
      </p>
      <h2
        className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
        style={{ color: "var(--ink)" }}
      >
        {title}
      </h2>
      {description ? (
        <p
          className="text-base leading-relaxed sm:text-lg"
          style={{ color: "var(--muted)" }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
