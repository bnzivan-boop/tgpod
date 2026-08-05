"use client";

import { useEffect, useRef } from "react";

/** Accent dot cursor, desktop pointers only; disabled for reduced motion. */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const dot = ref.current;
    if (!dot) return;
    let raf = 0;
    let x = -100;
    let y = -100;
    let tx = x;
    let ty = y;
    let scale = 1;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      const target = e.target as HTMLElement | null;
      scale = target?.closest("a,button,[role=tab]") ? 2.4 : 1;
    };
    const loop = () => {
      x += (tx - x) * 0.24;
      y += (ty - y) * 0.24;
      dot.style.transform = `translate(${x - 5}px, ${y - 5}px) scale(${scale})`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} aria-hidden className="cursor-dot" style={{ transform: "translate(-100px,-100px)" }} />;
}
