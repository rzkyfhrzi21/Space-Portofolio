import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { locales } from "@/lib/content";

export const defaultLocale = "id";

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        id: { translation: {} },
        en: { translation: {} },
      },
      fallbackLng: defaultLocale,
      supportedLngs: locales as unknown as string[],
      load: "languageOnly",
      interpolation: { escapeValue: false },
      detection: {
        order: ["localStorage", "navigator", "htmlTag"],
        lookupLocalStorage: "locale",
        caches: ["localStorage"],
      },
      react: { useSuspense: false },
    });
}

export default i18n;
