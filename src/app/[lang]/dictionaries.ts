import "server-only";
import type { Locale } from "@/i18n-config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () =>
    import("@/i18n-dictionaries/en.json").then((module) => module.default),
  no: () =>
    import("@/i18n-dictionaries/no.json").then((module) => module.default),
};

// @ts-ignore
export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
