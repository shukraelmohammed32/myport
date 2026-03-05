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
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl leading-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
