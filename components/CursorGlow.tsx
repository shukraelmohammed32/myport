"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (!supportsFinePointer) {
      return;
    }

    setEnabled(true);

    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <div
      aria-hidden
      className="cursor-glow"
      style={{
        transform: `translate3d(${position.x - 140}px, ${position.y - 140}px, 0)`
      }}
    />
  );
}
