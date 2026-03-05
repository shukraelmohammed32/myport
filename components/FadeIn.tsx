"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
};

export function FadeIn({ children, className, delay = 0, distance = 18 }: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: distance }}
      transition={{ duration: 0.55, delay, ease: [0.2, 0.7, 0.3, 1] }}
      viewport={{ once: true, margin: "-80px" }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
