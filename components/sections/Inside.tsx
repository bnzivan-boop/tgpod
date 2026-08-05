"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { inside } from "@/lib/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealText } from "@/components/ui/RevealText";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { EASE, fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";

type ModeKey = keyof typeof inside.modes;

export function Inside() {
  const [mode, setMode] = useState<ModeKey>("work");
  const active = inside.modes[mode];

  return (
    <section id="product" className="relative py-[clamp(88px,10vw,160px)]">
      <div className="container">
        <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Eyebrow no={inside.no}>{inside.eyebrow}</Eyebrow>
            <RevealText
              text={inside.title}
              className="font-display m-0 max-w-[900px] text-[length:var(--fs-h2)] leading-[1.02] tracking-normal text-chalk"
            />
          </div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="m-0 max-w-[560px] text-[length:var(--fs-lead)] leading-relaxed text-muted lg:justify-self-end"
          >
            {inside.lead}
          </motion.p>
        </div>

        {/* mode switch + big visual */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-14 overflow-hidden rounded-[var(--radius-xl)] border border-line bg-ink-2"
        >
          <div className="relative h-[clamp(420px,62vh,680px)]">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={mode}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
                className="absolute inset-0"
              >
                <MediaSlot media={active.media} sizes="(max-width: 1100px) 100vw, 1400px" className="size-full" />
              </motion.div>
            </AnimatePresence>
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(3,4,3,0.78), transparent 45%)" }}
            />

            <div
              role="tablist"
              aria-label="Interior mode"
              className="glass absolute left-5 top-5 z-[2] flex rounded-full !p-1"
            >
              {(Object.keys(inside.modes) as ModeKey[]).map((key) => (
                <button
                  key={key}
                  role="tab"
                  aria-selected={mode === key}
                  onClick={() => setMode(key)}
                  className={`rounded-full px-4 py-2.5 text-xs transition-colors duration-300 ${
                    mode === key ? "bg-chalk text-ink" : "text-muted hover:text-chalk"
                  }`}
                >
                  {inside.modes[key].switch}
                </button>
              ))}
            </div>

            <div className="absolute inset-x-6 bottom-6 z-[2] flex flex-wrap items-end justify-between gap-5">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={mode}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  <b className="font-display block text-[clamp(20px,2.4vw,34px)] font-normal leading-tight tracking-normal text-chalk">
                    {active.title}
                  </b>
                  <span className="mt-2 block text-[13px] text-muted">{active.caption}</span>
                </motion.div>
              </AnimatePresence>
              <div className="flex flex-wrap justify-end gap-2">
                {inside.chips.map((chip) => (
                  <i
                    key={chip}
                    className="font-mono-label rounded-full border border-line bg-[rgba(8,10,9,0.5)] px-3 py-2 not-italic !text-[9px] !tracking-[0.08em] text-chalk/80"
                  >
                    {chip}
                  </i>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* four glass blocks */}
        <motion.div
          variants={staggerChildren(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-6 grid gap-5 md:grid-cols-2"
        >
          {inside.blocks.map((block) => (
            <motion.article key={block.no} variants={fadeUp} className="glass group p-8 transition-colors duration-300 hover:border-line-hi">
              <div className="font-mono-label flex items-center justify-between text-acid">
                <span>
                  {block.no} / {block.label}
                </span>
                <span aria-hidden className="h-px w-2/5 bg-current opacity-40" />
              </div>
              <h3 className="font-display mt-10 text-[clamp(19px,1.9vw,27px)] font-normal leading-snug tracking-normal text-chalk">
                {block.title}
              </h3>
              <p className="mt-4 max-w-[520px] text-[15px] leading-relaxed text-muted">{block.text}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {block.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-line px-3 py-2 text-[11px] text-chalk/85">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
