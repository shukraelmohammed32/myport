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
    "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition duration-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

  if (variant === "primary") {
    return (
      <Link
        className={cn(
          base,
          "border border-cyan-300/25 bg-[linear-gradient(135deg,rgba(0,224,255,0.95),rgba(0,122,255,0.72))] text-white shadow-[0_16px_36px_rgba(0,224,255,0.16)] hover:-translate-y-0.5",
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
          "border border-white/10 bg-white/[0.04] text-white/84 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-white/[0.06] hover:text-white",
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
        "link-hover px-2 text-white/62 hover:text-white",
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
