"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CircleButton({
  href,
  label,
  className = "",
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <motion.div
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
