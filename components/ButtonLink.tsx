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
    "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-900/30 hover:from-purple-500 hover:to-pink-500 hover:shadow-xl hover:shadow-purple-800/40 dark:from-purple-500 dark:to-pink-500 dark:shadow-purple-500/25 dark:hover:from-purple-400 dark:hover:to-pink-400",
  secondary:
    "border border-purple-600/40 bg-purple-800/50 text-purple-200 hover:border-purple-500/60 hover:bg-purple-700/60 hover:text-purple-100 dark:border-purple-500/40 dark:bg-purple-800/50 dark:text-purple-200 dark:hover:border-purple-400/60 dark:hover:bg-purple-700/60 dark:hover:text-purple-100",
  ghost: "text-purple-300 hover:text-purple-100 hover:bg-purple-800/50 dark:text-purple-300 dark:hover:text-purple-100 dark:hover:bg-purple-800/60"
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
