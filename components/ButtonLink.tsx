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
    "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg shadow-teal-800/20 hover:from-teal-500 hover:to-cyan-500 hover:shadow-xl hover:shadow-teal-800/30 dark:from-teal-500 dark:to-sky-400 dark:text-slate-950 dark:shadow-teal-500/25 dark:hover:from-teal-400 dark:hover:to-sky-300 dark:hover:shadow-teal-400/30",
  secondary:
    "border border-slate-300 bg-sky-50 text-slate-900 hover:border-slate-400 hover:bg-sky-100/80 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-800",
  ghost: "text-slate-700 hover:text-slate-900 hover:bg-sky-100/70 dark:text-slate-300 dark:hover:text-slate-100 dark:hover:bg-slate-800/60"
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
