"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GlassCard } from "@/components/ui/GlassCard";
import { Gauge } from "@/components/ui/Gauge";
import { Marquee } from "@/components/ui/Marquee";
import { Logo } from "@/components/ui/Logo";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";

const TONE: Record<string, string> = {
  chalk: "text-chalk",
  dim: "text-faint",
  accent: "text-metal",
};

export function About() {
  return (
    <section id="about" className="relative py-[clamp(88px,10vw,150px)]">
      <div className="container">
        <Eyebrow center>About TG Pod</Eyebrow>

        {/* the reference move: airy Archivo Light phrase with mixed highlights */}
        <motion.p
          variants={staggerChildren(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-8 max-w-[900px] text-center text-[length:var(--fs-display-light)] font-light leading-[1.12] tracking-tight"
        >
          {about.phrase.map((part, i) => (
            <motion.span key={i} variants={fadeUp} className={`inline-block ${TONE[part.tone]}`}>
              {part.text}
              {i < about.phrase.length - 1 ? "  " : ""}
            </motion.span>
          ))}
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-7 max-w-[680px] text-center text-[length:var(--fs-lead)] leading-relaxed text-muted"
        >
          {about.lead}
        </motion.p>

        {/* side glass cards, like the reference */}
        <motion.div
          variants={staggerChildren(0.09)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-5 md:grid-cols-3"
        >
          <motion.div variants={fadeUp} className="grid gap-5">
            {about.cardLeft.map((c) => (
              <GlassCard key={c.value} label={c.label} value={c.value} />
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="glass grid place-items-center p-8 md:row-span-1">
            <Gauge percent={about.gaugeCard.percent} value={about.gaugeCard.value} unit={about.gaugeCard.label} size={190} />
          </motion.div>
          <motion.div variants={fadeUp} className="glass flex flex-col justify-between p-6">
            <div className="font-mono-label text-muted">{about.supported.label}</div>
            <div className="flex items-center gap-6 opacity-55 transition-opacity duration-300 hover:opacity-100">
              <Logo variant="truegamers" height={34} />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-20 border-y border-line py-4">
        <Marquee items={about.marquee} />
      </div>
    </section>
  );
}
