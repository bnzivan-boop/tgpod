export function Marquee({ items, className = "" }: { items: string[]; className?: string }) {
  const Group = ({ hidden = false }: { hidden?: boolean }) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <span key={item} className="font-mono-label flex items-center whitespace-nowrap text-muted">
          {item}
          <span aria-hidden className="glow-accent mx-7 text-acid">
            ✦
          </span>
        </span>
      ))}
    </div>
  );
  return (
    <div className={`group overflow-hidden ${className}`}>
      <div className="flex w-max animate-[marquee_26s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        <Group />
        <Group hidden />
      </div>
      <style>{`@keyframes marquee { to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}
