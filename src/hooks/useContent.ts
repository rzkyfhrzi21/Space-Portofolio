"use client";

import { useCallback, useEffect, useState } from "react";
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
  const [locale, setLocaleState] = useState<Locale>(() =>
    normalize(i18n.resolvedLanguage ?? i18n.language),
  );

  useEffect(() => {
    const handler = (lng: string) => setLocaleState(normalize(lng));
    i18n.on("languageChanged", handler);
    setLocaleState(normalize(i18n.resolvedLanguage ?? i18n.language));
    return () => {
      i18n.off("languageChanged", handler);
    };
  }, [i18n]);

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
