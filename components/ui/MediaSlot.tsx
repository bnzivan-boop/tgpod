import Image from "next/image";
import { asset } from "@/lib/asset";

export type Media = { id: string; src?: string; alt: string };

/**
 * Renders a media asset from public/media, or a labelled placeholder
 * when the file has not been provided yet. Never a broken <img>.
 */
export function MediaSlot({
  media,
  ratio,
  sizes = "100vw",
  priority = false,
  fit = "cover",
  className = "",
  imgClassName = "",
}: {
  media: Media;
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
  className?: string;
  imgClassName?: string;
}) {
  if (!media.src) {
    return (
      <div
        className={`grid-texture relative grid place-items-center overflow-hidden bg-ink-2 ${className}`}
        style={ratio ? { aspectRatio: ratio } : undefined}
        role="img"
        aria-label={media.alt}
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "radial-gradient(60% 60% at 50% 55%, rgba(111,255,139,.08), transparent 70%)" }}
        />
        <span className="font-mono-label relative text-faint">RENDER SLOT · {media.id}</span>
      </div>
    );
  }
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <Image
        src={asset(media.src)}
        alt={media.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`${fit === "cover" ? "object-cover" : "object-contain"} ${imgClassName}`}
      />
    </div>
  );
}
