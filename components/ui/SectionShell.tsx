export function SectionShell({
  id,
  children,
  className = "",
  paper = false,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  paper?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative py-[clamp(88px,10vw,160px)] ${paper ? "bg-paper text-ink" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
