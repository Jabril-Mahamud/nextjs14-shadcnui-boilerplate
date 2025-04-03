'use client'
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";

export default function AboutPage() {
  const t = useTranslations("About");
  
  return (
    <div className="space-y-10">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t("title")}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
        <Separator className="my-8" />
      </section>
      
      {/* Bio Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4 flex flex-col items-center space-y-4">
          <div className="w-40 h-40 rounded-full bg-muted flex items-center justify-center">
            {/* Placeholder for profile image */}
            <span className="text-5xl font-bold">P</span>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold">Python Guide Creator</h2>
            <p className="text-muted-foreground">Software Developer & Educator</p>
          </div>
        </div>
        
        <div className="md:col-span-8">
          <h2 className="text-2xl font-bold mb-4">Biography</h2>
          <p className="text-lg mb-6">{t("biography")}</p>
          
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <p className="text-3xl font-bold">5+</p>
              <p className="text-muted-foreground">{t("experience.years")}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">20+</p>
              <p className="text-muted-foreground">{t("experience.projects")}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">100+</p>
              <p className="text-muted-foreground">{t("experience.students")}</p>
            </div>
          </div>
          
          <Card className="bg-muted">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-2">{t("contact.title")}</h3>
              <p className="mb-4">{t("contact.description")}</p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" className="gap-2">
                  <Mail className="h-4 w-4" />
                  {t("contact.email")}
                </Button>
                <Button variant="outline" className="gap-2">
                  <Github className="h-4 w-4" />
                  {t("contact.github")}
                </Button>
                <Button variant="outline" className="gap-2">
                  <Twitter className="h-4 w-4" />
                  {t("contact.twitter")}
                </Button>
                <Button variant="outline" className="gap-2">
                  <Linkedin className="h-4 w-4" />
                  {t("contact.linkedin")}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Experience Cards */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Experience & Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Python Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>Web Applications with Django & Flask</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>Data Analysis with Pandas & NumPy</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>API Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>Database Integration</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}