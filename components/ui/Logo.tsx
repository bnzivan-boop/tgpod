import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";

/**
 * Brand logos from public/brand — used as-is, never recoloured or redrawn.
 * horizontal: one-line TG POD wordmark (864×135)
 * stacked:    two-line TG POD wordmark (424×283)
 * truegamers: True Gamers partner logo
 */
const FILES = {
  horizontal: { src: "/brand/tgpod-horizontal.svg", w: 864, h: 135 },
  stacked: { src: "/brand/tgpod-stacked.svg", w: 424, h: 283 },
  truegamers: { src: "/brand/truegamers.svg", w: 193, h: 70 },
} as const;

export function Logo({
  variant = "horizontal",
  height = 26,
  href,
  ariaLabel = "TG Pod — home",
  className = "",
}: {
  variant?: keyof typeof FILES;
  height?: number;
  href?: string;
  ariaLabel?: string;
  className?: string;
}) {
  const f = FILES[variant];
  const width = Math.round((f.w / f.h) * height);
  const img = (
    <Image
      src={asset(f.src)}
      alt={href ? "" : "TG Pod"}
      width={width}
      height={height}
      className={`object-contain ${className}`}
      style={{ height, width: "auto" }}
    />
  );
  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className="inline-flex shrink-0 items-center">
        {img}
      </Link>
    );
  }
  return img;
}
