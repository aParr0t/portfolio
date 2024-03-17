import { match } from "@formatjs/intl-localematcher";
// i18n implementation taken from https://github.com/vercel/next.js/tree/canary/examples/app-dir-i18n-routing

export const i18n = {
  defaultLocale: "en",
  locales: ["en", "no"],
} as const;

export function matchLocale(languages: string[]) {
  return match(languages, i18n.locales, i18n.defaultLocale);
}

export type Locale = (typeof i18n)["locales"][number];
