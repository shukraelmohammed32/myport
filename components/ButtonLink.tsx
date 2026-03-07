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

const variantClasses: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "bg-slate-900 text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/30 dark:bg-teal-500 dark:text-slate-950 dark:shadow-teal-500/20 dark:hover:bg-teal-400 dark:hover:shadow-teal-400/30",
  secondary:
    "border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-800",
  ghost: "text-slate-700 hover:text-slate-900 hover:bg-slate-100/50 dark:text-slate-300 dark:hover:text-slate-100 dark:hover:bg-slate-800/50"
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  download = false
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-[0.98]",
        variantClasses[variant],
        className
      )}
      download={download}
      href={href}
    >
      {children}
    </Link>
  );
}
