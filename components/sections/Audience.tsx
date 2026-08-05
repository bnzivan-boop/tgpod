"use client";

import { motion } from "framer-motion";
import { audience } from "@/lib/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealText } from "@/components/ui/RevealText";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";

export function Audience() {
  return (
    <section id="buyers" className="bg-ink-2 py-[clamp(88px,10vw,160px)]">
      <div className="container">
        <div className="grid items-end gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Eyebrow no={audience.no}>{audience.eyebrow}</Eyebrow>
            <RevealText
              text={audience.title}
              className="font-display m-0 text-[length:var(--fs-h2)] leading-[1.02] tracking-normal text-chalk"
            />
          </div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="m-0 max-w-[560px] text-[length:var(--fs-lead)] leading-relaxed text-muted lg:justify-self-end"
          >
            {audience.lead}
          </motion.p>
        </div>

        <motion.div
          variants={staggerChildren(0.09)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {audience.cards.map((card, i) => (
            <motion.article
              key={card.title}
              variants={fadeUp}
              className={`glass group flex flex-col overflow-hidden !rounded-[var(--radius-lg)] !p-0 ${
                i === 1 ? "xl:mt-14" : i === 2 ? "xl:mt-28" : ""
              }`}
            >
              <div className="relative h-60 overflow-hidden">
                <MediaSlot
                  media={card.media}
                  sizes="(max-width: 760px) 100vw, 440px"
                  className="size-full transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span className="font-mono-label glow-accent absolute left-4 top-4 rounded-full bg-[rgba(8,10,9,0.82)] px-3.5 py-2.5 !text-[9px] text-acid backdrop-blur-md">
                  {card.kicker}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display m-0 mb-3 text-[clamp(18px,1.8vw,24px)] font-normal leading-tight tracking-normal text-chalk">
                  {card.title}
                </h3>
                <p className="m-0 text-[14px] leading-relaxed text-muted">{card.text}</p>
                <div className="font-mono-label mt-auto pt-6 !text-[9px] text-faint">{card.meta}</div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
