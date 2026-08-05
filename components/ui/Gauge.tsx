"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { Counter } from "./Counter";

const R = 52;
const CIRC = 2 * Math.PI * R;

export function Gauge({
  percent,
  value,
  number,
  prefix = "",
  suffix = "",
  unit,
  size = 150,
  className = "",
}: {
  percent: number;
  /** static value string; ignored when `number` is provided */
  value?: string;
  number?: number;
  prefix?: string;
  suffix?: string;
  unit?: string;
  size?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const offset = CIRC * (1 - percent / 100);

  return (
    <div ref={ref} className={`relative grid place-items-center ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 120 120" className="absolute inset-0 size-full -rotate-90">
        <circle cx="60" cy="60" r={R} fill="none" stroke="var(--color-line)" strokeWidth="3" />
        <motion.circle
          cx="60"
          cy="60"
          r={R}
          fill="none"
          stroke="var(--color-acid)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={CIRC}
          initial={{ strokeDashoffset: CIRC }}
          animate={inView ? { strokeDashoffset: reduce ? offset : offset } : {}}
          transition={{ duration: reduce ? 0 : 1.4, ease: EASE }}
          style={{ filter: "drop-shadow(0 0 10px var(--color-glow))" }}
        />
      </svg>
      <div className="text-center">
        <div className="text-[clamp(22px,2vw,30px)] font-semibold leading-none tracking-tight text-chalk">
          {number !== undefined ? <Counter to={number} prefix={prefix} suffix={suffix} /> : value}
        </div>
        {unit && <div className="font-mono-label mt-1.5 text-muted">{unit}</div>}
      </div>
    </div>
  );
}
