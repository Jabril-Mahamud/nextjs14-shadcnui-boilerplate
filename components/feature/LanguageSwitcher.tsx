"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

// Language configuration with flags
const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "so", name: "Somali", flag: "🇸🇴" }
];

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('LanguageSwitcher');
  
  // Get current language details
  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  // Function to get path with new locale
  const getPathWithLocale = (newLocale: string) => {
    // Handle paths by replacing the current locale with the new one
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-auto px-2 sm:px-3 gap-2">
          <span className="text-base">{currentLanguage.flag}</span>
          <span className="hidden sm:inline">{currentLanguage.code.toUpperCase()}</span>
          <Globe size={16} className="ml-1" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem key={language.code} asChild className={locale === language.code ? "bg-accent" : ""}>
            <Link 
              href={getPathWithLocale(language.code)} 
              locale={language.code}
              className="flex items-center gap-2"
            >
              <span className="text-base">{language.flag}</span>
              <span>{t(language.code === 'en' ? 'english' : 'somali')}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};