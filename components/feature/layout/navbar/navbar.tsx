"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocale } from "next-intl";
import { LanguageSwitcher } from "../../LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const common = useTranslations("Common");
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Pages for navigation
  const pages = [
    { name: t("home"), href: `/${locale}` },
    { name: t("guide"), href: `/${locale}/guide` },
    { name: t("about"), href: `/${locale}/about` },
  ];

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              href={`/${locale}`}
              className="flex-shrink-0 flex items-center font-bold text-xl"
            >
              {common("websiteTitle")}
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-4">
              {pages.map((page) => (
                <Link
                  key={page.name}
                  href={page.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === page.href
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary hover:text-secondary-foreground"
                  }`}
                >
                  {page.name}
                </Link>
              ))}
            </div>
            <LanguageSwitcher />
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              className="ml-2 inline-flex items-center justify-center rounded-md p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {pages.map((page) => (
              <Link
                key={page.name}
                href={page.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === page.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary hover:text-secondary-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {page.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}