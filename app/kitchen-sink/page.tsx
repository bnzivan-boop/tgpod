import { Eyebrow } from "@/components/ui/Eyebrow";
import { GlassCard } from "@/components/ui/GlassCard";
import { StatBadge } from "@/components/ui/StatBadge";
import { Gauge } from "@/components/ui/Gauge";
import { PillButton } from "@/components/ui/PillButton";
import { CircleButton } from "@/components/ui/CircleButton";
import { Marquee } from "@/components/ui/Marquee";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Logo } from "@/components/ui/Logo";

export const metadata = { title: "Kitchen sink — TG Pod", robots: { index: false } };

/** Internal primitives gallery — approve type scale and components here. */
export default function KitchenSink() {
  return (
    <div className="frame min-h-svh space-y-16 p-10">
      <section>
        <Eyebrow no="00">Type scale / Michroma live</Eyebrow>
        <p className="font-display m-0 text-[length:var(--fs-mega)] leading-[0.95] tracking-[-0.02em]">
          TG <span className="text-metal">POD</span>
        </p>
        <h2 className="font-display m-0 text-[length:var(--fs-h2)] leading-[1.02]">Specification</h2>
        <h3 className="font-display m-0 text-[length:var(--fs-h3)] leading-[1.05]">Installation H3</h3>
        <p className="font-display m-0 text-[length:var(--fs-stat)] leading-none">1 / 30 / 10+</p>
        <p className="m-0 mt-6 max-w-[720px] text-[length:var(--fs-display-light)] font-light leading-[1.12] tracking-tight">
          People wait. <span className="text-faint">The pod</span> <span className="text-metal">earns.</span>
        </p>
        <p className="mt-4 max-w-[620px] text-[length:var(--fs-lead)] text-muted">
          Lead / Archivo 400 — an airport, a mall, a business centre, a campus.
        </p>
        <p className="font-mono-label text-muted">Mono label 11px / .19em / uppercase</p>
      </section>

      <section className="flex flex-wrap items-center gap-6">
        <PillButton href="#">Get the business plan</PillButton>
        <PillButton href="#" variant="ghost">
          Ghost
        </PillButton>
        <PillButton href="#" variant="accent">
          Accent
        </PillButton>
        <CircleButton href="#" label="GET PLAN" />
        <StatBadge value="220V + LAN" label="All it needs" />
      </section>

      <section className="grid max-w-4xl gap-5 md:grid-cols-3">
        <GlassCard label="Floor space needed" value="2–4 m²" note="Glass card primitive" />
        <div className="glass grid place-items-center p-6">
          <Gauge percent={66} number={18} unit="months" size={170} />
        </div>
        <div className="glass grid place-items-center p-6">
          <Gauge percent={60} number={60} prefix="~" suffix="%" size={140} />
        </div>
      </section>

      <section className="space-y-4">
        <Eyebrow no="01">Logos</Eyebrow>
        <div className="flex flex-wrap items-center gap-10 rounded-2xl border border-line p-8">
          <Logo variant="horizontal" height={26} />
          <Logo variant="stacked" height={56} />
          <Logo variant="truegamers" height={34} />
        </div>
      </section>

      <section>
        <Marquee items={["Airports", "Shopping malls", "Business centres", "Universities", "Hotels", "Dealerships"]} />
      </section>

      <section className="max-w-md">
        <MediaSlot media={{ id: "demo-empty-slot", alt: "Empty placeholder demo" }} ratio="16/10" className="rounded-2xl" />
      </section>
    </div>
  );
}
