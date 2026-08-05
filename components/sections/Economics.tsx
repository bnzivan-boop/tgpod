"use client";

import { motion } from "framer-motion";
import { economics } from "@/lib/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealText } from "@/components/ui/RevealText";
import { Gauge } from "@/components/ui/Gauge";
import { Counter } from "@/components/ui/Counter";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";

export function Economics() {
  return (
    <section id="economics" className="relative overflow-hidden py-[clamp(88px,10vw,160px)]">
      {/* concentric accent rings, echoing the reference circle motif */}
      <div
        aria-hidden
        className="absolute -right-44 -top-64 size-[680px] rounded-full border border-line"
        style={{ boxShadow: "0 0 0 80px rgba(255,255,255,0.02), 0 0 0 160px rgba(255,255,255,0.015)" }}
      />
      <div className="container relative">
        <Eyebrow no={economics.no}>{economics.eyebrow}</Eyebrow>
        <RevealText
          text={economics.title}
          className="font-display m-0 max-w-[920px] text-[length:var(--fs-h2)] leading-[1.02] tracking-normal text-chalk"
        />

        <motion.div
          variants={staggerChildren(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]"
        >
          {/* payback ring — the key Gauge of the page */}
          <motion.div variants={fadeUp} className="glass flex flex-wrap items-center justify-center gap-10 p-[clamp(28px,4vw,56px)]">
            <Gauge percent={economics.payback.percent} number={economics.payback.value} unit={economics.payback.unit} size={230} />
            <div className="max-w-[240px]">
              <div className="font-display text-[clamp(30px,3.4vw,52px)] font-normal leading-none tracking-normal text-chalk">
                <Counter to={economics.payback.value} />
                <span className="text-metal"> {economics.payback.unit}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">{economics.payback.note}</p>
            </div>
          </motion.div>

          {/* three metric cards */}
          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1 lg:grid-rows-3">
            {economics.metrics.map((m) => (
              <motion.div
                key={m.label}
                variants={fadeUp}
                className="glass flex items-center justify-between gap-4 px-6 py-5"
              >
                <div>
                  <div className="font-mono-label text-muted">{m.label}</div>
                  {m.note && <div className="mt-1 text-[11px] text-faint">{m.note}</div>}
                </div>
                <Gauge percent={m.percent} number={m.number} prefix={m.prefix ?? ""} suffix={m.suffix} size={104} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* model cards */}
        <motion.div
          variants={staggerChildren(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-9 grid gap-5 lg:grid-cols-2"
        >
          {economics.models.map((model) => (
            <motion.article
              key={model.label}
              variants={fadeUp}
              className={`min-h-[250px] rounded-[var(--radius-lg)] p-9 ${
                model.dark ? "bg-ink-3 text-chalk ring-1 ring-line" : "bg-acid text-ink"
              }`}
            >
              <small className="font-mono-label mb-14 block">{model.label}</small>
              <h3 className="font-display m-0 text-[clamp(21px,2.4vw,33px)] font-normal leading-[1.08] tracking-normal">
                {model.title}
              </h3>
              <p className={`mb-0 mt-4 max-w-[560px] text-[15px] leading-relaxed ${model.dark ? "text-muted" : "text-[#253129]"}`}>
                {model.text}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <p className="mt-8 max-w-[1000px] text-[11px] leading-relaxed text-faint">{economics.disclaimer}</p>
      </div>
    </section>
  );
}
