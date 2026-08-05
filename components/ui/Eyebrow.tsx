export function Eyebrow({
  no,
  children,
  center = false,
  dark = false,
  className = "",
}: {
  no?: string;
  children: React.ReactNode;
  center?: boolean;
  dark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`font-mono-label flex items-center gap-3 ${center ? "justify-center" : ""} ${
        dark ? "text-acid-dim" : "text-acid"
      } ${className}`}
    >
      <span aria-hidden className="h-px w-9 bg-current" />
      <span>
        {no ? `${no} / ` : ""}
        {children}
      </span>
    </p>
  );
}
