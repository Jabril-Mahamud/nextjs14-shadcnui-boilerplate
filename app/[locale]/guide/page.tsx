// app/[locale]/guide/page.tsx
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl"; // Import useLocale
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  ArrowRight, 
  BookOpen, 
  Sparkles, 
  Github, 
  Code,
  Database,
  Globe,
  Package,
  Boxes,
  Library,
  LineChart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-dropdown-menu";

export default function GuidePage() {
  const t = useTranslations("Guide");
  const locale = useLocale(); // Get current locale
  
  return (
    <div className="space-y-10">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t("title")}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t("intro")}
        </p>
        <Separator className="my-8" />
      </section>
      
      {/* Rest of the page content as before, all using translation keys */}
      {/* Guide Steps */}
      <section className="space-y-12">
        {/* Step 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-2 flex justify-center">
            <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">1</div>
          </div>
          <div className="lg:col-span-10">
            <h2 className="text-2xl font-bold mb-4">{t("steps.step1.title")}</h2>
            <p className="mb-4">{t("steps.step1.content")}</p>
            <Card className="mb-4">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  {t("steps.step1.options.option1")}
                </CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  {t("steps.step1.options.option2")}
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
        
        {/* Step 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-2 flex justify-center">
            <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">2</div>
          </div>
          <div className="lg:col-span-10">
            <h2 className="text-2xl font-bold mb-4">{t("steps.step2.title")}</h2>
            <p>{t("steps.step2.content")}</p>
          </div>
        </div>
        
        {/* Steps 3-6 follow the same pattern */}
        {/* ... */}
        
      </section>
      
      {/* Resources section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8">{t("resources.title")}</h2>
        
        {/* Resources content using t() for translations */}
        {/* ... */}
      </section>
    </div>
  );
}