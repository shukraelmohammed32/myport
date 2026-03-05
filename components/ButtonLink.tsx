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
    "bg-slate-900 text-white shadow-[0_10px_26px_-18px_rgba(15,23,42,0.9)] hover:bg-slate-800",
  secondary: "border border-slate-300 bg-white text-slate-900 hover:border-slate-400",
  ghost: "text-slate-700 hover:text-slate-900"
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
        "inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition duration-200",
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
