"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { demand } from "@/lib/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealText } from "@/components/ui/RevealText";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { EASE, fadeUp, viewportOnce } from "@/lib/motion";

export function Demand() {
  const [activeKey, setActiveKey] = useState(demand.locations[0].key);
  const active = demand.locations.find((l) => l.key === activeKey) ?? demand.locations[0];

  return (
    <section id="locations" className="bg-ink-2 py-[clamp(88px,10vw,160px)]">
      <div className="container">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.62fr]">
          <div>
            <Eyebrow no={demand.no}>{demand.eyebrow}</Eyebrow>
            <RevealText
              text={demand.title}
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
            {demand.lead}
          </motion.p>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid overflow-hidden rounded-[var(--radius-xl)] border border-line lg:min-h-[660px] lg:grid-cols-[minmax(280px,0.38fr)_minmax(0,0.62fr)]"
        >
          {/* numbered tabs */}
          <div
            role="tablist"
            aria-label="TG Pod locations"
            className="flex flex-col overflow-x-auto bg-ink max-lg:grid max-lg:grid-cols-2 max-sm:flex max-sm:flex-row max-sm:snap-x"
          >
            {demand.locations.map((loc) => {
              const isActive = loc.key === activeKey;
              return (
                <button
                  key={loc.key}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveKey(loc.key)}
                  className={`relative flex flex-1 items-center gap-4 border-b border-line px-6 py-6 text-left transition-colors duration-300 last:border-b-0 max-sm:min-w-[76%] max-sm:snap-start max-sm:border-b-0 max-sm:border-r ${
                    isActive ? "bg-ink-3 text-chalk" : "text-muted hover:bg-ink-3/60 hover:text-chalk"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="demand-active"
                      aria-hidden
                      className="absolute inset-y-0 left-0 w-[3px] bg-acid shadow-[0_0_16px_var(--color-glow)]"
                    />
                  )}
                  <small className={`font-mono-label !text-[10px] ${isActive ? "text-acid" : "text-faint"}`}>
                    {loc.no}
                  </small>
                  <b className="flex-1 text-[15px] font-medium tracking-tight">{loc.tab}</b>
                  <i aria-hidden className={`not-italic transition-transform duration-300 ${isActive ? "translate-x-0 text-acid" : "-translate-x-1 text-faint"}`}>
                    →
                  </i>
                </button>
              );
            })}
          </div>

          {/* active screen */}
          <div className="relative min-h-[560px] overflow-hidden bg-ink-3">
            <div aria-hidden className="grid-texture absolute inset-0 opacity-60 [mask-image:linear-gradient(120deg,black,transparent_72%)]" />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ background: "radial-gradient(80% 90% at 85% 100%, rgba(111,255,139,0.09), transparent 60%)" }}
            />

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.key}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="relative z-[2] max-w-[500px] p-[clamp(26px,4vw,56px)]"
              >
                <span className="font-mono-label glow-accent text-acid">{active.kicker}</span>
                <h3 className="font-display mb-4 mt-6 text-[clamp(26px,3.2vw,46px)] font-normal leading-[1.05] tracking-normal text-chalk">
                  {active.title}
                </h3>
                <p className="m-0 max-w-[430px] text-[16px] leading-relaxed text-muted">{active.text}</p>
                <div className="mt-7 flex flex-wrap gap-2.5">
                  {active.meta.map((m) => (
                    <span key={m} className="rounded-full border border-line bg-black/20 px-3 py-2 text-[11px] text-chalk/85">
                      {m}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* pod render */}
            <motion.div
              key={`pod-${active.key}`}
              initial={{ opacity: 0.5, x: 24, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.55, ease: EASE }}
              className="pointer-events-none absolute -bottom-8 -right-6 z-[1] w-[54%] max-w-[430px] max-sm:relative max-sm:bottom-0 max-sm:right-0 max-sm:mx-auto max-sm:mt-2 max-sm:w-[82%]"
            >
              <MediaSlot
                media={demand.media}
                ratio="1200/1186"
                sizes="(max-width: 700px) 82vw, 430px"
                className="rounded-t-3xl shadow-[0_35px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/10 max-sm:rounded-3xl"
              />
            </motion.div>

            {/* daypart strip */}
            <div className="absolute inset-x-[clamp(26px,4vw,56px)] bottom-9 z-[2] flex items-end justify-between gap-5 border-t border-line pt-5 max-sm:relative max-sm:inset-x-0 max-sm:bottom-0 max-sm:mx-6 max-sm:mb-8 max-sm:mt-6">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.key}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <b className="block text-[clamp(19px,2vw,26px)] font-semibold leading-none tracking-tight text-chalk">
                    {active.day}
                  </b>
                  <span className="mt-1.5 block text-xs text-muted">{active.dayText}</span>
                </motion.div>
              </AnimatePresence>
              <span className="whitespace-nowrap text-xs text-muted">{demand.aside}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
