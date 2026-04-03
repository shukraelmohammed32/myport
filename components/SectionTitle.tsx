import { cn } from "@/lib/cn";
import { Sparkles } from "lucide-react";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionTitle({ eyebrow, title, description, centered = false }: SectionTitleProps) {
  return (
    <div className={cn("space-y-4", centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl")}>
      <div className={cn("flex items-center gap-4", centered ? "justify-center" : "justify-start")}>
        <span className="section-kicker">
          <Sparkles className="h-3.5 w-3.5" />
          {eyebrow}
        </span>
        <span className="section-rule" />
      </div>
      <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.04em] text-[color:var(--foreground)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
