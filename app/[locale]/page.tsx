"use client"
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Code, 
  Lightbulb, 
  GraduationCap,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocale } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");
  const nav = useTranslations("Navigation");
  const locale = useLocale();
  
  return (
    <div className="space-y-12 py-4">
      {/* Hero section with gradient background */}
      <section className="text-center space-y-6 py-12 rounded-xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/30 dark:via-indigo-950/30 dark:to-purple-950/30 px-4 sm:px-8 shadow-sm">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
          {t("title")}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
        <div className="max-w-xl mx-auto text-center">
          <p className="mb-6 text-lg">{t("description")}</p>
          <Link href={`/${locale}/guide`}>
            <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg dark:from-blue-600 dark:to-indigo-600 dark:hover:from-blue-500 dark:hover:to-indigo-500">
              {t("getStartedButton")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Features section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-t-4 border-t-blue-500 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/30 shadow-sm hover:shadow-md transition-all">
            <CardHeader>
              <Lightbulb className="h-8 w-8 mb-2 text-blue-500" />
              <CardTitle className="text-blue-700 dark:text-blue-400">{t("features.beginner.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 dark:text-gray-300 text-base">{t("features.beginner.description")}</CardDescription>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-indigo-500 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-950/30 shadow-sm hover:shadow-md transition-all">
            <CardHeader>
              <Code className="h-8 w-8 mb-2 text-indigo-500" />
              <CardTitle className="text-indigo-700 dark:text-indigo-400">{t("features.practical.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 dark:text-gray-300 text-base">{t("features.practical.description")}</CardDescription>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-purple-500 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-950/30 shadow-sm hover:shadow-md transition-all">
            <CardHeader>
              <GraduationCap className="h-8 w-8 mb-2 text-purple-500" />
              <CardTitle className="text-purple-700 dark:text-purple-400">{t("features.comprehensive.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 dark:text-gray-300 text-base">{t("features.comprehensive.description")}</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* CTA section with more visual appeal */}
      <section className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-lg p-8 text-center shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-700 dark:text-indigo-400">{nav("guide")}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          {t("description")}
        </p>
        <Link href={`/${locale}/guide`}>
          <Button size="lg" className="gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg dark:from-indigo-600 dark:to-purple-600 dark:hover:from-indigo-500 dark:hover:to-purple-500">
            {t("getStartedButton")}
            <ArrowRight className="h-4 w-4 animate-pulse" />
          </Button>
        </Link>
      </section>
    </div>
  );
}