// app/[locale]/page.tsx
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
import { useLocale } from "next-intl"; // Import useLocale

export default function Home() {
  const t = useTranslations("Home");
  const nav = useTranslations("Navigation");
  const locale = useLocale(); // Get current locale
  
  return (
    <div className="space-y-12 py-4">
      {/* Hero section */}
      <section className="text-center space-y-6 py-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          {t("title")}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
        <div className="max-w-xl mx-auto text-center">
          <p className="mb-6 text-lg">{t("description")}</p>
          <Link href={`/${locale}/guide`}>
            <Button size="lg" className="gap-2">
              {t("getStartedButton")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Features section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Lightbulb className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>{t("features.beginner.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{t("features.beginner.description")}</CardDescription>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Code className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>{t("features.practical.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{t("features.practical.description")}</CardDescription>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <GraduationCap className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>{t("features.comprehensive.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{t("features.comprehensive.description")}</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{nav("guide")}</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          {t("description")}
        </p>
        <Link href={`/${locale}/guide`}>
          <Button size="lg">
            {t("getStartedButton")}
          </Button>
        </Link>
      </section>
    </div>
  );
}