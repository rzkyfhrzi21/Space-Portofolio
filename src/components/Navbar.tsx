"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Menu, X, Download, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, resumeHref } from "@/lib/content";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setScrolled,
  toggleMobileMenu,
  setMobileMenu,
  setActiveSection,
} from "@/store/uiSlice";

export function Navbar() {
  const dispatch = useAppDispatch();
  const scrolled = useAppSelector((s) => s.ui.scrolled);
  const activeSection = useAppSelector((s) => s.ui.activeSection);
  const mobileMenuOpen = useAppSelector((s) => s.ui.mobileMenuOpen);

  useEffect(() => {
    const onScroll = () => dispatch(setScrolled(window.scrollY > 40));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dispatch]);

  useEffect(() => {
    const ids = ["home", "projects", "experience", "thoughts", "contact"];
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

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <nav
        className={cn(
          "pointer-events-auto flex w-full max-w-[1180px] items-center justify-between rounded-full border px-3 py-2.5 transition-all duration-500 md:px-4",
          scrolled
            ? "border-stroke bg-black/70 shadow-[0_8px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            : "border-white/5 bg-black/30 backdrop-blur-md",
        )}
      >
        <Link
          href="#home"
          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-stroke bg-surface/80 font-heading text-sm font-semibold tracking-tight text-text transition-colors hover:border-accent/60"
        >
          AIZ
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const active = activeSection === id;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-xs font-medium uppercase tracking-[0.14em] transition-colors",
                  active ? "text-text" : "text-muted hover:text-text",
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-accent" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center rounded-full border border-stroke bg-surface/60 p-0.5 text-[11px] font-semibold sm:flex">
            <span className="rounded-full px-2.5 py-1 text-muted">EN</span>
            <span className="rounded-full bg-surface-2 px-2.5 py-1 text-text">
              ID
            </span>
          </div>

          <Link
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-text transition-colors hover:bg-accent/20 sm:flex"
          >
            Hubungi Saya
            <ArrowUpRight className="size-3.5" />
          </Link>

          <a
            href={resumeHref}
            className="hidden items-center gap-1.5 rounded-full border border-stroke px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted transition-colors hover:text-text md:flex"
          >
            <Download className="size-3.5" />
            Resume
          </a>

          <button
            type="button"
            aria-label="Menu"
            onClick={() => dispatch(toggleMobileMenu())}
            className="flex size-11 items-center justify-center rounded-full border border-stroke bg-surface/60 text-text lg:hidden"
          >
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed inset-0 top-0 z-40 flex flex-col bg-bg/95 px-6 pt-28 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => dispatch(setMobileMenu(false))}
                className="border-b border-stroke py-4 font-heading text-2xl font-semibold text-text"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={resumeHref}
              className="mt-4 flex items-center justify-center gap-2 rounded-full border border-stroke py-4 text-sm font-semibold uppercase tracking-[0.12em] text-text"
            >
              <Download className="size-4" />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
