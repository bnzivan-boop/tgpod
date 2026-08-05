"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { install } from "@/lib/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealText } from "@/components/ui/RevealText";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";

export function Install() {
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: lineRef, offset: ["start 80%", "end 45%"] });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="setup" className="py-[clamp(88px,10vw,160px)]">
      <div className="container">
        <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Eyebrow no={install.no}>{install.eyebrow}</Eyebrow>
            <RevealText
              text={install.title}
              className="font-display m-0 text-[length:var(--fs-h2)] leading-[1.02] tracking-normal text-chalk"
            />
          </div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="m-0 max-w-[540px] text-[length:var(--fs-lead)] leading-relaxed text-muted lg:justify-self-end"
          >
            {install.lead}
          </motion.p>
        </div>

        {/* horizontal timeline with accent fill on scroll */}
        <div ref={lineRef} className="mt-16">
          <div className="relative h-px w-full bg-line">
            <motion.div
              className="absolute inset-y-0 left-0 w-full origin-left bg-acid shadow-[0_0_14px_var(--color-glow)]"
              style={{ scaleX }}
            />
          </div>
          <motion.div
            variants={staggerChildren(0.09)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4"
          >
            {install.steps.map((step, i) => (
              <motion.article
                key={step.label}
                variants={fadeUp}
                className={`relative min-h-[230px] border-line py-7 pr-6 max-sm:border-b max-sm:pr-0 ${
                  i > 0 ? "lg:border-l lg:pl-6" : ""
                } ${i % 2 === 1 ? "sm:max-lg:border-l sm:max-lg:pl-6" : ""}`}
              >
                <span aria-hidden className="glow-accent absolute -top-[3px] left-0 size-[7px] rounded-full bg-acid max-sm:hidden" />
                <small className="font-mono-label block text-acid">{step.label}</small>
                <b className="font-display mb-3.5 mt-12 block text-[clamp(21px,2.2vw,32px)] font-normal leading-[1.05] tracking-normal text-chalk">
                  {step.value}
                </b>
                <p className="m-0 max-w-[300px] text-[14px] leading-relaxed text-muted">{step.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>

        {/* service block */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid items-center gap-8 rounded-[var(--radius-lg)] bg-acid p-[clamp(28px,4vw,48px)] text-ink lg:grid-cols-[0.9fr_1.1fr]"
        >
          <strong className="font-display text-[clamp(20px,2.6vw,36px)] font-normal leading-[1.08] tracking-normal">
            {install.service.title}
          </strong>
          <div>
            <p className="m-0 max-w-[560px] text-[15px] leading-relaxed">{install.service.text}</p>
            <ul className="m-0 mt-5 flex list-none flex-wrap gap-2 p-0">
              {install.service.chips.map((chip) => (
                <li key={chip} className="font-mono-label rounded-full border border-[rgba(8,10,9,0.24)] px-3.5 py-2 !text-[10px] !tracking-[0.1em]">
                  {chip}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
