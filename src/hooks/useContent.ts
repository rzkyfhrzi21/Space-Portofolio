"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import { useTranslation } from "react-i18next";
import { content, defaultContent, locales, type Locale } from "@/lib/content";

function normalize(lng: string | undefined): Locale {
  const base = (lng ?? "").split("-")[0];
  return (locales as readonly string[]).includes(base)
    ? (base as Locale)
    : "id";
}

export function useLocale() {
  const { i18n } = useTranslation();

  const subscribe = useCallback(
    (onChange: () => void) => {
      i18n.on("languageChanged", onChange);
      return () => {
        i18n.off("languageChanged", onChange);
      };
    },
    [i18n],
  );

  const getSnapshot = useCallback(
    (): Locale => normalize(i18n.resolvedLanguage ?? i18n.language),
    [i18n],
  );

  const getServerSnapshot = useCallback((): Locale => "id", []);

  const locale = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = useCallback(
    (next: Locale) => {
      i18n.changeLanguage(next);
    },
    [i18n],
  );

  return { locale, setLocale };
}

export function useContent() {
  const { locale } = useLocale();
  return content[locale] ?? defaultContent;
}
