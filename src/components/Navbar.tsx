"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CiGlobe } from "react-icons/ci";
import { Locale, i18n } from "@/i18n-config";
import { useRouter, usePathname } from "next/navigation";

type Props = {
  lang: Locale;
  className?: string;
};

export default function Navbar({ lang, className }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  // get nativeName from i18n.locales, where code === lang
  const nativeName = i18n.locales.find(
    (locale) => locale.code === lang
  )?.nativeName;

  function onChange(value: string) {
    // Build the new path with the selected locale
    // Assuming your pathname always starts with the current locale, we should remove it first
    const pathWithoutLocale = pathname.replace(/^\/[a-zA-Z-]+/, ""); // Removes the current locale from path
    const newPath = `/${value}${pathWithoutLocale}`; // Creates the new path with the selected locale

    router.push(newPath);
  }

  return (
    <div className={`flex flex-row gap-8 ml-auto ${className}`}>
      <Select defaultValue={lang} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue>
            <div className="flex flex-row items-center px-2 gap-3">
              <CiGlobe size={28} />{" "}
              <span className="text-lg">{nativeName}</span>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {i18n.locales.map((locale) => (
              <SelectItem
                key={locale.code}
                value={locale.code}
                className="!bg-white"
              >
                {locale.nativeName}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
