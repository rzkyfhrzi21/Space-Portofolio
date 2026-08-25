"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Download, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { resumeHref, locales } from "@/lib/content";
import { useContent, useLocale } from "@/hooks/useContent";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleMobileMenu, setMobileMenu, setActiveSection } from "@/store/uiSlice";

export function Navbar() {
  const dispatch = useAppDispatch();
  const content = useContent();
  const { locale, setLocale } = useLocale();
  const activeSection = useAppSelector((s) => s.ui.activeSection);
  const mobileMenuOpen = useAppSelector((s) => s.ui.mobileMenuOpen);
  const chatOpen = useAppSelector((s) => s.ui.chatOpen);

  useEffect(() => {
    const ids = ["home", "projects", "experience", "thoughts"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) dispatch(setActiveSection(entry.target.id));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [dispatch]);

  const localeOrder = [...locales].reverse();

  if (chatOpen) return null;

  return (
    <>
      <div className="pointer-events-none fixed left-0 right-0 top-0 z-[105] h-28 bg-gradient-to-b from-black/80 via-black/35 to-transparent" />

      <nav className="pointer-events-auto fixed left-0 right-0 top-0 z-[110] flex justify-center px-4 pt-3 transition-all duration-300 ease-in-out md:pt-6">
        <div className="relative">
          <div
            className="absolute inset-0 -z-10 rounded-full opacity-[0.06] blur-2xl transition-opacity duration-300"
            style={{
              background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
            }}
          />
          <div className="inline-flex max-w-[calc(100vw-32px)] items-center overflow-hidden rounded-full border border-white/20 bg-black/40 bg-surface/90 px-2 py-2 shadow-lg shadow-black/40 backdrop-blur-xl [box-shadow:0_0_0_1px_rgba(255,255,255,0.08),0_8px_32px_rgba(0,0,0,0.5),0_0_8px_rgba(137,170,204,0.04)]">
            <Link
              href="#home"
              className="group relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full transition-transform duration-300 hover:scale-110"
            >
              <div
                className="absolute inset-0 accent-gradient transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px] [animation:gradient-shift_6s_linear_infinite] [background-size:200%_100%]"
              />
              <div className="absolute inset-[-3px] rounded-full opacity-0 blur-sm accent-gradient transition-opacity duration-300 group-hover:opacity-40" />
              <div className="absolute inset-[1px] z-10 flex items-center justify-center rounded-full bg-bg">
                <span className="font-display text-[13px] italic text-text-primary">
                  AIZ
                </span>
              </div>
            </Link>

            <div className="mx-1 hidden h-5 w-px shrink-0 bg-stroke md:block" />

            <div className="hidden shrink-0 items-center md:flex">
              {content.nav.links.map((link) => {
                const id = link.href.replace("#", "");
                const active = activeSection === id;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative inline-flex items-center justify-center rounded-full px-3 py-1.5 text-[12px] font-medium uppercase tracking-[0.05em] transition-all duration-300 sm:px-4 sm:py-2",
                      active
                        ? "font-semibold text-text-primary"
                        : "text-white/75 hover:text-white",
                    )}
                  >
                    {link.label}
                    <span className="absolute bottom-1 left-1/2 h-[3px] w-4 -translate-x-1/2">
                      {active && (
                        <span className="block h-full w-full rounded-full accent-gradient" />
                      )}
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="mx-2 hidden h-5 w-px shrink-0 bg-white/10 sm:mx-3 md:block" />

            <div className="relative mr-1 hidden shrink-0 items-center rounded-full bg-white/5 p-0.5 md:flex">
              <div
                className="absolute bottom-0.5 top-0.5 rounded-full bg-white/15 transition-all duration-300"
                style={{
                  left: locale === localeOrder[0] ? "2px" : "50%",
                  width: "calc(50% - 2px)",
                }}
              />
              {localeOrder.map((lng) => (
                <button
                  key={lng}
                  type="button"
                  onClick={() => setLocale(lng)}
                  aria-pressed={locale === lng}
                  className={cn(
                    "relative z-10 flex min-w-[28px] items-center justify-center rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider transition-colors duration-200",
                    locale === lng
                      ? "text-text-primary"
                      : "text-white/75 hover:text-white",
                  )}
                >
                  {lng}
                </button>
              ))}
            </div>

            <Link
              href="#contact"
              className="group relative hidden h-[30px] shrink-0 items-center rounded-full text-[9px] font-semibold uppercase tracking-[0.12em] sm:h-[36px] sm:text-[11px] md:inline-flex"
            >
              <span className="absolute inset-[-1px] rounded-full opacity-30 accent-gradient transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative flex h-full items-center gap-1 rounded-full border border-white/10 bg-surface px-3 text-text-primary backdrop-blur-md transition-all group-hover:[text-shadow:0_0_12px_rgba(137,170,204,0.6)] sm:gap-1.5 sm:px-4">
                {content.nav.hireMe}
                <ArrowUpRight className="h-3 w-3 opacity-70 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100 sm:h-3.5 sm:w-3.5" />
              </span>
            </Link>

            <a
              href={resumeHref}
              className="group ml-1 hidden h-[30px] shrink-0 items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 text-[11px] font-semibold uppercase tracking-wider text-white/80 transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-text-primary sm:h-[36px] md:inline-flex"
            >
              <Download className="h-3 w-3 opacity-70 transition-opacity group-hover:opacity-100" />
              {content.nav.resume}
            </a>

            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => dispatch(toggleMobileMenu())}
              className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 md:hidden"
            >
              <div className="flex flex-col items-center justify-center gap-1">
                <span className="block h-px w-4 bg-text-primary" />
                <span className="block h-px w-4 bg-text-primary" />
                <span className="block h-px w-3 bg-text-primary" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-bg/95 px-6 pt-28 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">
            {content.nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => dispatch(setMobileMenu(false))}
                className="border-b border-stroke py-4 font-display text-2xl italic text-text"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => dispatch(setMobileMenu(false))}
              className="mt-4 flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-text"
            >
              {content.nav.hireMe}
              <ArrowUpRight className="size-4" />
            </Link>
            <a
              href={resumeHref}
              className="flex items-center justify-center gap-2 rounded-full border border-stroke py-4 text-sm font-semibold uppercase tracking-[0.12em] text-text"
            >
              <Download className="size-4" />
              {content.nav.resume}
            </a>
            <div className="mt-4 flex items-center gap-2">
              {locales.map((lng) => (
                <button
                  key={lng}
                  type="button"
                  onClick={() => setLocale(lng)}
                  aria-pressed={locale === lng}
                  className={cn(
                    "flex-1 rounded-full border py-3 text-sm font-bold uppercase tracking-[0.12em] transition-colors",
                    locale === lng
                      ? "border-white/25 bg-white/15 text-text-primary"
                      : "border-stroke text-muted",
                  )}
                >
                  {lng}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
