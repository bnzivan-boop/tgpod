import Link from "next/link";

export function PillButton({
  href,
  children,
  variant = "solid",
  size = "md",
  className = "",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost" | "accent" | "dark";
  size?: "sm" | "md";
  className?: string;
  external?: boolean;
}) {
  const variants: Record<string, string> = {
    solid: "bg-chalk text-ink hover:bg-white",
    ghost: "border border-line text-chalk hover:border-line-hi bg-white/[0.02]",
    accent: "bg-acid text-ink hover:bg-[#9affae]",
    dark: "bg-ink text-chalk hover:bg-ink-3",
  };
  const sizes: Record<string, string> = {
    sm: "min-h-11 px-5 text-[13px]",
    md: "min-h-[52px] px-7 text-sm",
  };
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      className={`inline-flex items-center justify-center gap-3 rounded-full font-medium tracking-tight transition-all duration-200 hover:-translate-y-0.5 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
