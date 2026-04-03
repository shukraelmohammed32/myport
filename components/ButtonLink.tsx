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
    "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition duration-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-soft-strong)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

  if (variant === "primary") {
    return (
      <Link
        className={cn(
          base,
          "border border-[color:var(--accent-soft-strong)] bg-[linear-gradient(135deg,var(--accent),var(--accent-secondary))] text-white shadow-[0_16px_36px_var(--accent-soft)] hover:-translate-y-0.5",
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

  if (variant === "secondary") {
    return (
      <Link
        className={cn(
          base,
          "border border-[color:var(--border)] bg-[var(--surface-muted)] text-[color:var(--foreground)] hover:-translate-y-0.5 hover:border-[color:var(--accent-soft-strong)] hover:bg-[var(--surface)] hover:text-[color:var(--foreground)]",
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
        "link-hover px-2 text-[color:var(--muted)] hover:text-[color:var(--foreground)]",
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
