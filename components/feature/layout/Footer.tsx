"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const common = useTranslations("Common");
  const aboutT = useTranslations("About");
  const navT = useTranslations("Navigation");
  const locale = useLocale();

  return (
    <footer className="bg-secondary py-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{common("websiteTitle")}</h3>
            <p className="text-muted-foreground">
              {aboutT("biography").substring(0, 100)}...
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{navT("home")}</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href={`/${locale}`} 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {navT("home")}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/guide`} 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {navT("guide")}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/about`} 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {navT("about")}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{aboutT("contact.title")}</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} {common("websiteTitle")}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}