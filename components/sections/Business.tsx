"use client";

import { motion } from "framer-motion";
import { business } from "@/lib/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealText } from "@/components/ui/RevealText";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";

export function Business() {
  return (
    <section id="business" className="bg-paper py-[clamp(88px,10vw,160px)] text-ink">
      <div className="container">
        <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Eyebrow no={business.no} dark>
              {business.eyebrow}
            </Eyebrow>
            <RevealText
              text={business.title}
              className="font-display m-0 text-[length:var(--fs-h2)] leading-[1.02] tracking-normal"
            />
          </div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="m-0 max-w-[560px] text-[length:var(--fs-lead)] leading-relaxed text-[#555b56] lg:justify-self-end"
          >
            {business.lead}
          </motion.p>
        </div>

        {/* mega figures 1 / 30 / 10+ */}
        <motion.div
          variants={staggerChildren(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 grid border-y border-line-dark md:grid-cols-3"
        >
          {business.steps.map((step, i) => (
            <motion.article
              key={step.label}
              variants={fadeUp}
              className={`relative min-h-[340px] py-9 pr-8 max-md:border-b max-md:border-line-dark max-md:last:border-b-0 ${
                i > 0 ? "md:border-l md:border-line-dark md:pl-8" : ""
              }`}
            >
              <small className="font-mono-label block text-[#687069]">{step.label}</small>
              <b className="font-display mb-5 mt-14 block text-[length:var(--fs-stat)] font-normal leading-[0.9] tracking-normal">
                {step.value}
              </b>
              <h3 className="m-0 mb-2.5 text-[21px] font-semibold tracking-tight">{step.title}</h3>
              <p className="m-0 max-w-[330px] text-[14px] leading-relaxed text-[#606760]">{step.text}</p>
            </motion.article>
          ))}
        </motion.div>

        {/* move note */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid items-center gap-8 rounded-[var(--radius-lg)] bg-ink p-[clamp(28px,4vw,48px)] text-chalk lg:grid-cols-2"
        >
          <strong className="font-display text-[clamp(22px,3vw,44px)] font-normal leading-[1.05] tracking-normal">
            {business.note.title}
          </strong>
          <div className="max-w-[520px] lg:justify-self-end">
            <p className="m-0 text-[16px] leading-relaxed text-muted">{business.note.text}</p>
            <span className="font-mono-label mt-5 block !text-[10px] !leading-relaxed text-acid">
              {business.note.tags}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
