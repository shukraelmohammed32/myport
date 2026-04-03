"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left"
      style={{
        background: "linear-gradient(90deg, rgba(0, 224, 255, 0.95), rgba(255, 45, 85, 0.9))",
        boxShadow: "0 0 20px rgba(0, 224, 255, 0.22)",
        scaleX
      }}
    />
  );
}
