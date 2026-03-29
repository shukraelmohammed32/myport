import { type ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  download?: boolean;
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  download = false
}: ButtonLinkProps) {
  if (variant === "primary") {
    return (
      <Link
        className={cn(
          "inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-[0.97]",
          className
        )}
        style={{
          backgroundColor: "var(--ink)",
          color: "var(--bg)"
        }}
        download={download}
        href={href}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.82")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
      >
        {children}
      </Link>
    );
  }

  if (variant === "secondary") {
    return (
      <Link
        className={cn(
          "inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-[0.97]",
          className
        )}
        style={{
          borderColor: "var(--border)",
          color: "var(--ink)",
          backgroundColor: "transparent"
        }}
        download={download}
        href={href}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.backgroundColor = "var(--ink)";
          (e.currentTarget as HTMLElement).style.color = "var(--bg)";
          (e.currentTarget as HTMLElement).style.borderColor = "var(--ink)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
          (e.currentTarget as HTMLElement).style.color = "var(--ink)";
          (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        }}
      >
        {children}
      </Link>
    );
  }

  /* ghost */
  return (
    <Link
      className={cn(
        "link-hover inline-flex items-center gap-2 rounded-xl px-2 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-[0.97]",
        className
      )}
      style={{ color: "var(--muted)" }}
      download={download}
      href={href}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--ink)")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
    >
      {children}
    </Link>
  );
}
