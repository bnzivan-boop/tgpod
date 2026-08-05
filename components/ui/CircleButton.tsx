"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CircleButton({
  href,
  label,
  magnetic = false,
  className = "",
}: {
  href: string;
  label: string;
  /** follows the cursor within a radius, spring-tethered to its anchor point */
  magnetic?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 140, damping: 14, mass: 0.35 });
  const y = useSpring(my, { stiffness: 140, damping: 14, mass: 0.35 });

  useEffect(() => {
    if (!magnetic) return;
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const R = 220; // attraction radius
    const MAX = 34; // px the button may stray from its anchor
    const onMove = (e: PointerEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2) - x.get();
      const dy = e.clientY - (r.top + r.height / 2) - y.get();
      const d = Math.hypot(dx, dy);
      if (d < R) {
        const pull = (1 - d / R) * 0.55;
        mx.set(Math.max(-MAX, Math.min(MAX, dx * pull)));
        my.set(Math.max(-MAX, Math.min(MAX, dy * pull)));
      } else {
        mx.set(0);
        my.set(0);
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [magnetic, mx, my, x, y]);

  return (
    <motion.div
      ref={ref}
      style={magnetic ? { x, y } : undefined}
      whileHover={{ scale: 1.06 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <Link
        href={href}
        className="group relative grid size-[110px] place-items-center rounded-full bg-chalk text-ink shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
      >
        <span className="font-mono-label !tracking-[0.14em]">{label}</span>
        <svg
          aria-hidden
          viewBox="0 0 110 110"
          className="absolute inset-0 size-full animate-[spin_18s_linear_infinite] opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:hidden"
        >
          <circle cx="55" cy="55" r="50" fill="none" stroke="rgba(8,10,9,.25)" strokeWidth="1" strokeDasharray="2 6" />
        </svg>
      </Link>
    </motion.div>
  );
}
