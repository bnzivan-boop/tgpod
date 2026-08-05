import Link from "next/link";
import { footer } from "@/lib/content";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink py-10 text-muted">
      <div className="container flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
        <div className="flex items-center gap-6">
          <Logo variant="stacked" height={36} />
          <p className="m-0 text-[11px] leading-relaxed">
            {footer.line1}
            <br />
            {footer.line2}
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-6 text-xs">
          {footer.links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-chalk">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
