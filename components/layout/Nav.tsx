"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "@/lib/content";
import { Logo } from "@/components/ui/Logo";
import { PillButton } from "@/components/ui/PillButton";
import { EASE } from "@/lib/motion";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[110] transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-[rgba(11,13,12,0.86)] backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="container flex h-[72px] items-center justify-between gap-6">
        <div className="flex min-w-0 items-center gap-4">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line transition-colors hover:border-line-hi md:hidden"
          >
            <span className="relative block h-3 w-[18px]">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-chalk transition-transform duration-300 ${open ? "translate-y-[5.5px] rotate-45" : ""}`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-full bg-chalk transition-transform duration-300 ${open ? "-translate-y-[5.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
          <span aria-hidden className="hidden flex-col gap-1.5 md:flex">
            <span className="block h-px w-6 bg-chalk" />
            <span className="block h-px w-4 bg-chalk" />
          </span>
          <Logo variant="horizontal" height={22} href="#top" ariaLabel={nav.logoAria} />
          <span className="font-mono-label hidden items-center gap-3 border-l border-line pl-4 !text-[9px] text-muted lg:flex">
            {nav.by}
          </span>
        </div>

        <nav aria-label={nav.ariaLabel} className="hidden items-center gap-8 md:flex">
          {nav.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group relative text-[13px] text-muted transition-colors hover:text-chalk"
            >
              {l.label}
              <span
                aria-hidden
                className="absolute -bottom-2 left-0 h-px w-0 bg-acid transition-all duration-300 group-hover:w-full"
              />
            </Link>
          ))}
        </nav>

        <PillButton href={nav.cta.href} size="sm" className="hidden sm:inline-flex">
          {nav.cta.label}
        </PillButton>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label={nav.ariaLabel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-x-0 bottom-0 top-[72px] flex flex-col bg-[rgba(5,6,5,0.97)] px-[var(--pad)] pt-8 backdrop-blur-2xl md:hidden"
          >
            {nav.links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.06 * i }}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display block border-b border-line py-6 text-[clamp(26px,8vw,40px)] leading-none tracking-normal text-chalk"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
              className="mt-8"
            >
              <PillButton href={nav.cta.href} variant="accent" className="w-full" size="md">
                <span onClick={() => setOpen(false)}>{nav.cta.label}</span>
              </PillButton>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
