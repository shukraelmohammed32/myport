import { type ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  download?: boolean;
  target?: string;
  rel?: string;
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  download = false,
  target,
  rel
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-[0.97]";

  if (variant === "primary") {
    return (
      <Link
        className={cn(base, "bg-[var(--ink)] text-[var(--bg)] hover:opacity-80", className)}
        download={download}
        href={href}
        rel={rel}
        target={target}
      >
        {children}
      </Link>
    );
  }

  if (variant === "secondary") {
    return (
      <Link
        className={cn(
          base,
          "border border-[var(--border)] bg-transparent text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--bg)] hover:border-[var(--ink)]",
          className
        )}
        download={download}
        href={href}
        rel={rel}
        target={target}
      >
        {children}
      </Link>
    );
  }

  /* ghost */
  return (
    <Link
      className={cn(
        base,
        "link-hover px-2 text-[var(--muted)] hover:text-[var(--ink)]",
        className
      )}
      download={download}
      href={href}
      rel={rel}
      target={target}
    >
      {children}
    </Link>
  );
}
