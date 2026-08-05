"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { hero } from "@/lib/content";
import { CircleButton } from "@/components/ui/CircleButton";
import { StatBadge } from "@/components/ui/StatBadge";
import { EASE } from "@/lib/motion";

/**
 * Layered hero, ZEUS-X style:
 *  z-0 — moon scene with the pod (full-bleed cover)
 *  z-1 — mega wordmark, slides behind the pod
 *  z-2 — pod cutout (same scene, alpha), pixel-aligned over the background
 *  z-3 — floating glass satellites
 * The bg and cutout share the same 2752×1536 frame, so identical cover
 * sizing keeps them perfectly registered at any viewport.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yWordmark = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -110]);
  const yBadges = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 110]);

  return (
    <section ref={ref} id="top" className="arch-cut relative min-h-svh overflow-hidden bg-[#020302]">
      <h1 className="sr-only">{hero.seoH1}</h1>

      {/* z-0 — background scene */}
      <div className="absolute inset-0">
        <Image
          src={hero.bg.src}
          alt={hero.bg.alt}
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* vignette for nav & hint legibility — under the text, over the bg */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(2,3,2,0.6), transparent 18%), linear-gradient(to top, rgba(2,3,2,0.55), transparent 26%)",
        }}
      />

      {/* z-1 — mega wordmark behind the pod: the two words hug the edges,
          the pod buries the middle, like the reference */}
      <motion.div
        style={{ y: yWordmark }}
        initial={{ opacity: 0, y: 46 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[36%] z-[1] select-none"
      >
        <div className="relative mx-auto flex max-w-[1760px] items-baseline justify-between px-[4%]">
          <span className="font-display whitespace-nowrap text-[clamp(64px,15vw,270px)] leading-[0.95] tracking-[-0.02em] text-chalk">
            TG
          </span>
          <span className="font-display text-metal whitespace-nowrap text-[clamp(64px,15vw,270px)] leading-[0.95] tracking-[-0.02em]">
            POD
          </span>
        </div>
      </motion.div>

      {/* z-2 — pod cutout, aligned over the same scene */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[2]">
        <Image src={hero.cutout.src} alt="" fill priority quality={90} sizes="100vw" className="object-cover" />
      </div>

      {/* z-3 — floating satellites (desktop): the two fact cards sit on one
          line, flanking the pod symmetrically */}
      <motion.div style={{ y: yBadges }} className="pointer-events-none absolute inset-0 z-[3] hidden lg:block">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
          className="pointer-events-auto absolute left-[calc(50%-450px)] top-[63%] w-44"
        >
          <div className="glass p-4">
            <div className="text-lg font-semibold tracking-tight text-chalk">{hero.installCard.value}</div>
            <div className="font-mono-label mt-1 !text-[9px] text-muted">{hero.installCard.label}</div>
          </div>
          <Link
            href={hero.installCard.link.href}
            className="mt-3 inline-block text-[13px] text-muted underline decoration-line underline-offset-4 transition-colors hover:text-chalk"
          >
            {hero.installCard.link.label}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.75 }}
          className="pointer-events-auto absolute left-1/2 top-[77%] -translate-x-1/2"
        >
          <CircleButton href={hero.circle.href} label={hero.circle.label} magnetic />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.85 }}
          className="pointer-events-auto absolute right-[calc(50%-450px)] top-[45%]"
        >
          <StatBadge value={hero.statBadge.value} label={hero.statBadge.label} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.95 }}
          className="absolute right-[7%] top-[13%] flex items-start justify-end gap-5 text-right"
        >
          <p className="m-0 text-[clamp(22px,1.8vw,32px)] font-light leading-tight tracking-tight text-muted">
            {hero.subtitle[0]}
            <br />
            <span className="text-chalk">{hero.subtitle[1]}</span>
          </p>
          <svg
            width="26"
            height="34"
            viewBox="0 0 11 14"
            fill="none"
            aria-hidden
            className="glow-accent mt-1.5 text-acid"
          >
            <path d="M6.5 0 0 8h4l-1 6 8-9H6.5l0-5Z" fill="currentColor" />
          </svg>
        </motion.div>
      </motion.div>

      {/* mobile satellites */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
        className="absolute inset-x-0 bottom-24 z-[3] flex flex-wrap items-center justify-center gap-3 px-6 lg:hidden"
      >
        <StatBadge value={hero.statBadge.value} label={hero.statBadge.label} />
        <StatBadge value={hero.installCard.value} label={hero.installCard.label} />
      </motion.div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="font-mono-label absolute bottom-24 left-1/2 z-[3] flex -translate-x-1/2 items-center gap-3 text-muted max-lg:hidden"
      >
        <span>{hero.scroll}</span>
        <motion.span
          aria-hidden
          animate={reduce ? {} : { y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
      </motion.div>

      {/* accent ornament above the arch cut */}
      <div aria-hidden className="glow-accent absolute bottom-7 left-1/2 z-[3] -translate-x-1/2 text-acid">
        <svg width="26" height="12" viewBox="0 0 26 12" fill="none">
          <path d="M1 11 13 1l12 10" stroke="currentColor" strokeWidth="1.4" />
          <path d="M7 11l6-5 6 5" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </div>
    </section>
  );
}
