"use client";

import { motion } from "framer-motion";
import { cta } from "@/lib/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealText } from "@/components/ui/RevealText";
import { PillButton } from "@/components/ui/PillButton";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-paper py-[clamp(110px,13vw,200px)] text-ink">
      <div
        aria-hidden
        className="absolute -bottom-72 -right-44 size-[580px] rounded-full bg-acid"
        style={{ filter: "blur(2px)" }}
      />
      <div className="container relative z-[2] grid items-end gap-14 lg:grid-cols-[1.18fr_0.82fr]">
        <div>
          <Eyebrow dark>{cta.eyebrow}</Eyebrow>
          <RevealText
            text={cta.title}
            className="font-display m-0 text-[clamp(30px,5.4vw,88px)] leading-[1.0] tracking-normal"
          />
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-7 max-w-[720px] text-[length:var(--fs-lead)] leading-relaxed text-[#555d56]"
          >
            {cta.lead}
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-9 flex flex-wrap gap-3"
          >
            <PillButton href={cta.primary.href} variant="dark">
              {cta.primary.label} <span aria-hidden>→</span>
            </PillButton>
            <PillButton href={cta.secondary.href} variant="dark" external>
              {cta.secondary.label}
            </PillButton>
          </motion.div>
        </div>

        <motion.aside
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="border-y border-line-dark py-8"
        >
          <span className="font-mono-label mb-8 block text-[#646b64]">{cta.receive.label}</span>
          <ul className="m-0 grid list-none gap-4 p-0">
            {cta.receive.items.map((item) => (
              <li key={item} className="flex items-center gap-3.5 text-[15px]">
                <span aria-hidden className="grid size-5 shrink-0 place-items-center rounded-full bg-acid-dim text-[10px] text-acid">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${cta.email}`}
            className="mt-9 inline-block text-[15px] underline decoration-line-dark underline-offset-[5px] transition-colors hover:text-acid-deep"
          >
            {cta.email}
          </a>
        </motion.aside>
      </div>
    </section>
  );
}
