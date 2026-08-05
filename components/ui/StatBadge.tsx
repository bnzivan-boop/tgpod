export function StatBadge({
  value,
  label,
  className = "",
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`glass inline-flex items-center gap-3 rounded-2xl px-4 py-3 ${className}`}>
      <div>
        <div className="text-[15px] font-semibold leading-none tracking-tight text-chalk">{value}</div>
        <div className="mt-1.5 text-[11px] leading-none text-muted">{label}</div>
      </div>
      <span
        aria-hidden
        className="glow-accent grid size-7 shrink-0 place-items-center rounded-lg bg-acid text-ink"
      >
        <svg width="11" height="14" viewBox="0 0 11 14" fill="none" aria-hidden>
          <path d="M6.5 0 0 8h4l-1 6 8-9H6.5l0-5Z" fill="currentColor" />
        </svg>
      </span>
    </div>
  );
}
