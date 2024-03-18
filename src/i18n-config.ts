import { match } from "@formatjs/intl-localematcher";
// i18n implementation taken from https://github.com/vercel/next.js/tree/canary/examples/app-dir-i18n-routing

export const i18n = {
  defaultLocale: "en",
  locales: [
    {
      code: "en",
      nativeName: "English",
    },
    {
      code: "no",
      nativeName: "Norsk",
    },
  ],
} as const;

export function matchLocale(languages: string[]) {
  return match(
    languages,
    i18n.locales.map((locale) => locale.code),
    i18n.defaultLocale
  );
}

export type Locale = (typeof i18n)["locales"][number]["code"];
