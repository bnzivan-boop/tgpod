"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { asset } from "@/lib/asset";
import { EASE } from "@/lib/motion";

const LOGO = asset("/brand/tgpod-stacked.svg");
const FILL_MS = 1700;
const FADE_MS = 600;

/**
 * Boot sequence: the TG POD logo sits faint in the centre, fills up with
 * acid green bottom-to-top, and the page fades straight in.
 */
export function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const doneRef = useRef(false);

  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    onDone();
  };

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(100);
      const t = setTimeout(finish, 400);
      return () => clearTimeout(t);
    }
    let raf = 0;
    let fadeTimer: ReturnType<typeof setTimeout>;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / FILL_MS);
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setLeaving(true);
        fadeTimer = setTimeout(finish, FADE_MS);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fadeTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const maskStyle: React.CSSProperties = {
    WebkitMaskImage: `url("${LOGO}")`,
    maskImage: `url("${LOGO}")`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskPosition: "center",
    maskPosition: "center",
  };

  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 z-[200] grid place-items-center bg-void"
      animate={leaving ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: FADE_MS / 1000, ease: EASE }}
    >
      <motion.div
        className="relative aspect-[424/283] w-[min(56vw,300px)]"
        animate={leaving ? { scale: 1.04, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: FADE_MS / 1000, ease: EASE }}
      >
        <div className="absolute inset-0 bg-chalk opacity-[0.08]" style={maskStyle} />
        <div
          className="absolute inset-0 bg-acid"
          style={{
            ...maskStyle,
            clipPath: `inset(${100 - progress}% 0 0 0)`,
            filter: "drop-shadow(0 0 26px rgba(111,255,139,0.5))",
          }}
        />
      </motion.div>
      <motion.div
        className="font-mono-label absolute bottom-[12%] left-1/2 -translate-x-1/2 text-faint tabular-nums"
        animate={{ opacity: leaving ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {progress}%
      </motion.div>
    </motion.div>
  );
}
