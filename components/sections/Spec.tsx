"use client";

import { motion } from "framer-motion";
import { spec } from "@/lib/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealText } from "@/components/ui/RevealText";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";

export function Spec() {
  return (
    <section id="specification" className="bg-paper py-[clamp(88px,10vw,160px)] text-ink">
      <div className="container grid items-start gap-14 lg:grid-cols-[minmax(340px,0.75fr)_minmax(0,1.25fr)]">
        <motion.figure
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative m-0 overflow-hidden rounded-[var(--radius-lg)] lg:sticky lg:top-24"
        >
          <MediaSlot
            media={spec.prototype.media}
            ratio="3/4"
            sizes="(max-width: 1100px) 100vw, 480px"
            className="size-full"
          />
          <figcaption className="absolute inset-x-4 bottom-4 flex justify-between gap-4 rounded-2xl bg-[rgba(8,10,9,0.86)] px-5 py-4 text-xs text-chalk backdrop-blur-md">
            <span>{spec.prototype.label}</span>
            <span className="text-acid">{spec.prototype.note}</span>
          </figcaption>
        </motion.figure>

        <div>
          <Eyebrow no={spec.no} dark>
            {spec.eyebrow}
          </Eyebrow>
          <RevealText
            text={spec.title}
            className="font-display m-0 text-[length:var(--fs-h2)] leading-[1.02] tracking-normal"
          />
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-7 max-w-[640px] text-[length:var(--fs-lead)] leading-relaxed text-[#555b56]"
          >
            {spec.lead}
          </motion.p>

          <motion.div
            variants={staggerChildren(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-12 grid border-t border-line-dark sm:grid-cols-2"
          >
            {spec.items.map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className={`group border-b border-line-dark py-6 pr-6 transition-colors duration-300 hover:bg-black/[0.03] ${
                  i % 2 === 1 ? "sm:border-l sm:pl-6" : ""
                }`}
              >
                <small className="font-mono-label block text-[#686e68]">{item.label}</small>
                <b className="mt-3.5 block text-[clamp(20px,1.9vw,27px)] font-medium leading-tight tracking-tight">
                  {item.value}
                </b>
                <span className="mt-2 block text-[13px] leading-normal text-[#626862]">{item.note}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
