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
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import Link from "next/link";

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();

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
        <Button variant="outline" className="w-9 px-0">
          <Globe size={20} />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href={getPathWithLocale("en")} locale="en">
            English
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={getPathWithLocale("so")} locale="so">
            Somali
          </Link>
        </DropdownMenuItem>
        {/* Add more languages as needed */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
