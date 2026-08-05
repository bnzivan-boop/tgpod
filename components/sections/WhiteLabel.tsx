"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { whiteLabel } from "@/lib/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealText } from "@/components/ui/RevealText";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function WhiteLabel() {
  const railRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const cards = [...whiteLabel.cards, ...whiteLabel.cards];

  return (
    <section id="branding" className="overflow-hidden bg-ink-2 py-[clamp(88px,10vw,160px)]">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <Eyebrow no={whiteLabel.no}>{whiteLabel.eyebrow}</Eyebrow>
            <RevealText
              text={whiteLabel.title}
              className="font-display m-0 max-w-[850px] text-[length:var(--fs-h2)] leading-[1.02] tracking-normal text-chalk"
            />
          </div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="m-0 max-w-[360px] text-sm leading-relaxed text-muted lg:text-right"
          >
            {whiteLabel.note}
          </motion.p>
        </div>
      </div>

      {/* auto-scrolling drag rail */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="group mt-14 cursor-grab overflow-hidden active:cursor-grabbing"
        ref={railRef}
      >
        <motion.div
          drag="x"
          dragConstraints={railRef}
          className={`flex w-max gap-4 pl-[var(--pad)] ${
            reduce ? "" : "animate-[wlScroll_36s_linear_infinite] group-hover:[animation-play-state:paused]"
          }`}
        >
          {cards.map((card, i) => (
            <figure
              key={`${card.media.id}-${i}`}
              aria-hidden={i >= whiteLabel.cards.length || undefined}
              className="relative m-0 w-[min(72vw,440px)] shrink-0 overflow-hidden rounded-[var(--radius-lg)] border border-line bg-black"
            >
              <MediaSlot media={card.media} ratio="1" sizes="440px" className="size-full" imgClassName="pointer-events-none" />
              <figcaption className="absolute inset-x-4 bottom-4 flex justify-between gap-3 rounded-xl bg-[rgba(8,10,9,0.8)] px-4 py-3 text-[11px] text-chalk backdrop-blur-md">
                <span>{card.label}</span>
                <span className="text-muted">{whiteLabel.disclaimer}</span>
              </figcaption>
            </figure>
          ))}
        </motion.div>
        <style>{`@keyframes wlScroll { to { transform: translateX(calc(-50% - 8px)); } }`}</style>
      </motion.div>
    </section>
  );
}
