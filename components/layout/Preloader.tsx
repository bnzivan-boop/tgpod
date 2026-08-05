"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";

const LOGO = asset("/brand/tgpod-stacked.svg");
const FILL_MS = 1900;
const BURST_MS = 1100;

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  life: number;
};

/**
 * Boot sequence: the TG POD logo sits faint in the centre and fills up
 * with acid green bottom-to-top; at 100% it bursts into particles sampled
 * from the logo's own pixels, and the page underneath is revealed.
 */
export function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"fill" | "burst">("fill");
  const rootRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const doneRef = useRef(false);

  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    onDone();
  };

  // lock scroll while the loader is up
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // phase 1 — fill 0 → 100
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(100);
      const t = setTimeout(finish, 500);
      return () => clearTimeout(t);
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / FILL_MS);
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setPhase("burst");
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // phase 2 — sample the logo's pixels and blow them apart
  useEffect(() => {
    if (phase !== "burst") return;
    const canvas = canvasRef.current;
    const logoEl = logoRef.current;
    const root = rootRef.current;
    if (!canvas || !logoEl || !root) {
      finish();
      return;
    }
    const rect = logoEl.getBoundingClientRect();
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      finish();
      return;
    }
    ctx.scale(dpr, dpr);

    let raf = 0;
    const img = new Image();
    img.src = LOGO;
    img.onload = () => {
      const off = document.createElement("canvas");
      off.width = Math.ceil(rect.width);
      off.height = Math.ceil(rect.height);
      const octx = off.getContext("2d");
      if (!octx) {
        finish();
        return;
      }
      octx.drawImage(img, 0, 0, rect.width, rect.height);
      const data = octx.getImageData(0, 0, off.width, off.height).data;

      const particles: Particle[] = [];
      const STEP = 5;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      for (let y = 0; y < off.height; y += STEP) {
        for (let x = 0; x < off.width; x += STEP) {
          if (data[(y * off.width + x) * 4 + 3] > 128) {
            const dx = x - cx;
            const dy = y - cy;
            const d = Math.hypot(dx, dy) || 1;
            const speed = 2.2 + Math.random() * 4.5;
            particles.push({
              x: rect.left + x,
              y: rect.top + y,
              vx: (dx / d) * speed + (Math.random() - 0.5) * 2.4,
              vy: (dy / d) * speed + (Math.random() - 0.5) * 2.4 - 1.2,
              size: 1.5 + Math.random() * 2,
              color: Math.random() < 0.82 ? "#6fff8b" : "#f4f6f4",
              life: 0.75 + Math.random() * 0.25,
            });
          }
        }
      }

      logoEl.style.visibility = "hidden";
      const start = performance.now();
      const tick = (now: number) => {
        const t = (now - start) / BURST_MS;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (t >= 1) {
          finish();
          return;
        }
        // the black curtain thins out while the particles fly
        root.style.opacity = String(Math.max(0, 1 - Math.max(0, t - 0.25) / 0.6));
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.965;
          p.vy = p.vy * 0.965 + 0.05;
          const alpha = Math.max(0, p.life - t);
          if (alpha <= 0) continue;
          ctx.globalAlpha = alpha;
          ctx.fillStyle = p.color;
          ctx.fillRect(p.x, p.y, p.size, p.size);
        }
        ctx.globalAlpha = 1;
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    img.onerror = finish;
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

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
    <div
      ref={rootRef}
      aria-hidden
      className="fixed inset-0 z-[200] grid place-items-center bg-void"
    >
      <div ref={logoRef} className="relative aspect-[424/283] w-[min(56vw,300px)]">
        {/* faint ghost of the logo */}
        <div className="absolute inset-0 bg-chalk opacity-[0.08]" style={maskStyle} />
        {/* green fill rising bottom-to-top */}
        <div
          className="absolute inset-0 bg-acid"
          style={{
            ...maskStyle,
            clipPath: `inset(${100 - progress}% 0 0 0)`,
            filter: "drop-shadow(0 0 26px rgba(111,255,139,0.5))",
          }}
        />
      </div>
      <div className="font-mono-label absolute bottom-[12%] left-1/2 -translate-x-1/2 text-faint tabular-nums">
        {progress}%
      </div>
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 size-full" />
    </div>
  );
}
