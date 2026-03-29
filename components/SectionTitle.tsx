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
      <div className={cn("flex items-center gap-3", centered && "justify-center")}>
        <span className="h-px w-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-400 dark:text-purple-300">
          {eyebrow}
        </p>
        <span className="h-px w-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
      </div>
      <h2 className="font-display text-3xl leading-tight sm:text-4xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-slate-300 dark:text-slate-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
