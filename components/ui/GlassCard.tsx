export function GlassCard({
  label,
  value,
  note,
  className = "",
  children,
}: {
  label?: string;
  value?: string;
  note?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`glass p-5 ${className}`}>
      {label && <div className="font-mono-label text-muted">{label}</div>}
      {value && (
        <div className="mt-3 text-[clamp(20px,1.8vw,28px)] font-medium tracking-tight text-chalk">
          {value}
        </div>
      )}
      {note && <div className="mt-1.5 text-[13px] leading-snug text-muted">{note}</div>}
      {children}
    </div>
  );
}
