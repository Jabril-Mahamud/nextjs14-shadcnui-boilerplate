// For app/[locale]/guide/page.tsx
'use client'
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription 
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
  LineChart,
  Terminal,
  Video,
  Layout,
  Rocket,
  Cpu,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-dropdown-menu";

export default function GuidePage() {
  const t = useTranslations("Guide");
  const locale = useLocale();
  
  return (
    <div className="space-y-10">
      {/* Header with gradient background */}
      <section className="text-center space-y-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-8 rounded-lg shadow-sm">
        <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">{t("title")}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t("intro")}
        </p>
        <div className="border-t border-blue-200 dark:border-blue-800 w-1/4 mx-auto my-6"></div>
      </section>
      
      {/* Guide Steps with visual progression */}
      <section className="space-y-12 relative">
        {/* Vertical timeline connector */}
        <div className="absolute left-6 lg:left-[4.5rem] top-12 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-600 hidden lg:block"></div>
        
        {/* Step 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
          <div className="lg:col-span-2 flex justify-center z-10">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-md">1</div>
          </div>
          <div className="lg:col-span-10">
            <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">{t("steps.step1.title")}</h2>
            <p className="mb-4">{t("steps.step1.content")}</p>
            <Card className="mb-4 border-l-4 border-l-blue-500 shadow-sm hover:shadow transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Video className="h-5 w-5 text-blue-500" />
                  {t("steps.step1.options.option1")}
                </CardTitle>
              </CardHeader>
            </Card>
            <Card className="border-l-4 border-l-blue-500 shadow-sm hover:shadow transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-500" />
                  {t("steps.step1.options.option2")}
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
        
        {/* Step 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
          <div className="lg:col-span-2 flex justify-center z-10">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-md">2</div>
          </div>
          <div className="lg:col-span-10">
            <Card className="border-none shadow-sm bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">{t("steps.step2.title")}</h2>
                <p>{t("steps.step2.content")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Step 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
          <div className="lg:col-span-2 flex justify-center z-10">
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-md">3</div>
          </div>
          <div className="lg:col-span-10">
            <h2 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-indigo-400">{t("steps.step3.title")}</h2>
            <p className="text-gray-700 dark:text-gray-300 p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 rounded">{t("steps.step3.content")}</p>
          </div>
        </div>
        
        {/* Step 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
          <div className="lg:col-span-2 flex justify-center z-10">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-500 text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-md">4</div>
          </div>
          <div className="lg:col-span-10">
            <h2 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-indigo-400">{t("steps.step4.title")}</h2>
            <p className="mb-4">{t("steps.step4.content")}</p>
            
            <div className="space-y-4">
              <Card className="shadow-sm hover:shadow border-l-4 border-l-indigo-500 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-indigo-500" />
                    {t("steps.step4.details.detail1")}
                  </CardTitle>
                </CardHeader>
              </Card>
              
              <Card className="shadow-sm hover:shadow border-l-4 border-l-indigo-500 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-indigo-500" />
                    {t("steps.step4.details.detail2")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 p-2 rounded bg-indigo-50 dark:bg-indigo-950/30">
                      <Package className="h-4 w-4 flex-shrink-0 text-indigo-500" />
                      <span>{t("steps.step4.details.concepts.packages")}</span>
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded">
                      <Boxes className="h-4 w-4 flex-shrink-0 text-indigo-500" />
                      <span>{t("steps.step4.details.concepts.oop")}</span>
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded bg-indigo-50 dark:bg-indigo-950/30">
                      <Database className="h-4 w-4 flex-shrink-0 text-indigo-500" />
                      <span>{t("steps.step4.details.concepts.sql")}</span>
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded">
                      <Globe className="h-4 w-4 flex-shrink-0 text-indigo-500" />
                      <span>{t("steps.step4.details.concepts.api")}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm hover:shadow border-l-4 border-l-indigo-500 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Rocket className="h-5 w-5 text-indigo-500" />
                    {t("steps.step4.details.examples.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 p-2 rounded bg-indigo-50 dark:bg-indigo-950/30">
                      <Globe className="h-4 w-4 flex-shrink-0 text-indigo-500" />
                      <span>{t("steps.step4.details.examples.example1")}</span>
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded">
                      <Layout className="h-4 w-4 flex-shrink-0 text-indigo-500" />
                      <span>{t("steps.step4.details.examples.example2")}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Step 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
          <div className="lg:col-span-2 flex justify-center z-10">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-md">5</div>
          </div>
          <div className="lg:col-span-10">
            <Card className="border-none shadow-sm bg-gradient-to-r from-indigo-50/80 to-purple-50/80 dark:from-indigo-950/20 dark:to-purple-950/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-400">{t("steps.step5.title")}</h2>
                <p>{t("steps.step5.content")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Step 6 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
          <div className="lg:col-span-2 flex justify-center z-10">
            <div className="bg-gradient-to-r from-purple-600 to-violet-500 text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-md">6</div>
          </div>
          <div className="lg:col-span-10">
            <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-400">{t("steps.step6.title")}</h2>
            <div className="p-4 border border-purple-200 dark:border-purple-800 rounded-lg bg-purple-50/50 dark:bg-purple-950/20">
              <p>{t("steps.step6.content")}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Resources section with colorful cards */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">{t("resources.title")}</h2>
        
        <div className="space-y-8">
          {/* YouTube Channels */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-400 flex items-center gap-2">
              <Video className="h-5 w-5" />
              {t("resources.channels.title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/30 border-t-4 border-t-blue-500 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-blue-500" />
                    Fireship
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">{t("resources.channels.fireship")}</p>
                  <Link href="https://www.youtube.com/@Fireship" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/50">
                      <ExternalLink className="h-4 w-4" />
                      {t("resources.visitChannel")}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/30 border-t-4 border-t-blue-500 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-blue-500" />
                    Tech with Tim
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">{t("resources.channels.techwithTim")}</p>
                  <Link href="https://www.youtube.com/watch?v=VchuKL44s6E" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/50">
                      <ExternalLink className="h-4 w-4" />
                      {t("resources.watchTutorial")}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/30 border-t-4 border-t-blue-500 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-blue-500" />
                    Mosh
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">{t("resources.channels.mosh")}</p>
                  <Link href="https://www.youtube.com/watch?v=_uQrJ0TkZlc" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/50">
                      <ExternalLink className="h-4 w-4" />
                      {t("resources.watchCourse")}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/30 border-t-4 border-t-blue-500 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-blue-500" />
                    Bro Code
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">{t("resources.channels.brocode")}</p>
                  <Link href="https://www.youtube.com/watch?v=XKHEtdqhLK8" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/50">
                      <ExternalLink className="h-4 w-4" />
                      {t("resources.watchCourse")}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Git Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-700 dark:text-indigo-400 flex items-center gap-2">
              <Github className="h-5 w-5" />
              {t("resources.git.title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-950/30 border-t-4 border-t-indigo-500 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Github className="h-5 w-5 text-indigo-500" />
                    {t("resources.git.explanation")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Link href="https://www.youtube.com/watch?v=hwP7WQkmECE" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2 border-indigo-200 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950/50">
                      <ExternalLink className="h-4 w-4" />
                      {t("resources.watchVideo")}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-950/30 border-t-4 border-t-indigo-500 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Github className="h-5 w-5 text-indigo-500" />
                    {t("resources.git.tutorial")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Link href="https://www.youtube.com/watch?v=hwP7WQkmECE" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2 border-indigo-200 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950/50">
                      <ExternalLink className="h-4 w-4" />
                      {t("resources.watchTutorial")}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Practice Platforms */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-400 flex items-center gap-2">
              <Cpu className="h-5 w-5" />
              {t("resources.practice.title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-950/30 border-t-4 border-t-purple-500 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-purple-500" />
                    LeetCode
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">{t("resources.practice.leetcode")}</p>
                  <Link href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2 border-purple-200 hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950/50">
                      <ExternalLink className="h-4 w-4" />
                      {t("resources.visitPlatform", { platform: "LeetCode" })}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-950/30 border-t-4 border-t-purple-500 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-purple-500" />
                    NeetCode
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">{t("resources.practice.neetcode")}</p>
                  <Link href="https://neetcode.io/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2 border-purple-200 hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950/50">
                      <ExternalLink className="h-4 w-4" />
                      {t("resources.visitPlatform", { platform: "NeetCode" })}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Recommended Courses */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-violet-700 dark:text-violet-400 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              {t("resources.courses.title")}
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <Card className="bg-gradient-to-br from-white to-violet-50 dark:from-gray-900 dark:to-violet-950/30 border-t-4 border-t-violet-500 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-violet-500" />
                    {t("resources.courses.harvard")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Link href="https://pll.harvard.edu/course/cs50-introduction-computer-science" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2 border-violet-200 hover:border-violet-500 hover:bg-violet-50 dark:hover:bg-violet-950/50">
                      <ExternalLink className="h-4 w-4" />
                      {t("resources.viewCourse")}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}