'use client'
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Mail, Server, Database, Code, Globe, Phone } from "lucide-react";

// Define types for our translations
type Responsibility = string;
type ProjectDescription = string;

export default function AboutPage() {
  const t = useTranslations("About");
  
  // Manually define job responsibilities for each role
  const engineerResponsibilities: Responsibility[] = [
    t("jobs.engineer.responsibilities.0", { fallback: "Developed backend microservices with C# and Node.js" }),
    t("jobs.engineer.responsibilities.1", { fallback: "Designed RESTful APIs handling 10,000+ requests/sec" })
  ];
  
  const apprenticeResponsibilities: Responsibility[] = [
    t("jobs.apprentice.responsibilities.0", { fallback: "Built full-stack applications using Python, Django, and JavaScript" }),
    t("jobs.apprentice.responsibilities.1", { fallback: "Optimized Amazon EC2 systems, reducing annual costs" })
  ];
  
  // Manually define project descriptions
  const energyProjectDescription: ProjectDescription[] = [
    t("projects.energy.description.0", { fallback: "Designed scalable microservices in Node.js & C#" }),
    t("projects.energy.description.1", { fallback: "Integrated Azure Serverless functions with Data Warehouse" }),
    t("projects.energy.description.2", { fallback: "Developed React dashboards for data visualization" }),
    t("projects.energy.description.3", { fallback: "Tech: Node.js, React, TypeScript, C#, Azure" })
  ];
  
  const pipelineProjectDescription: ProjectDescription[] = [
    t("projects.pipeline.description.0", { fallback: "Built a Python-based EC2 monitoring system" }),
    t("projects.pipeline.description.1", { fallback: "Developed real-time analytics dashboards using React & Django" }),
    t("projects.pipeline.description.2", { fallback: "Tech: AWS, Python, React, Django, PostgreSQL" })
  ];
  
  return (
    <div className="space-y-10">
      {/* Header with gradient */}
      <section className="text-center p-8 rounded-lg bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 dark:from-blue-950/30 dark:via-indigo-950/30 dark:to-blue-950/30">
        <h1 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
          {t("title")}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {t("name", { fallback: "Jabril Mahamud" })}
        </p>
        <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
      </section>
      
      {/* Bio Section with improved layout */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Profile area */}
        <div className="md:col-span-4 flex flex-col items-center space-y-6">
          {/* Profile avatar */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 blur-lg opacity-20"></div>
            <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
              <span className="text-6xl font-bold text-white">J</span>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{t("name", { fallback: "Jabril Mahamud" })}</h2>
            <p className="text-indigo-600 dark:text-indigo-400 font-medium">{t("jobs.engineer.title", { fallback: "Software Engineer - BP | London" })}</p>
          </div>
          
          {/* Experience stats */}
          <div className="grid grid-cols-2 w-full gap-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 text-center">
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">4+</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{t("experience.years")}</p>
            </div>
            <div className="p-4 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 text-center">
              <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">21</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{t("age", { fallback: "Age" })}</p>
            </div>
          </div>

          {/* Contact */}
          <Card className="w-full bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-950/20 border-t-4 border-t-indigo-500 shadow-sm hover:shadow transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4 text-indigo-700 dark:text-indigo-400">{t("contact.title")}</h3>
              <div className="flex flex-col gap-3">
                <a href="mailto:Jabrilmahamud2907@gmail.com">
                  <Button variant="outline" size="sm" className="w-full justify-start gap-2 border-indigo-200 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors">
                    <Mail className="h-4 w-4 text-indigo-500" />
                    Jabrilmahamud2907@gmail.com
                  </Button>
                </a>
                <a href="https://github.com/Jabril-Mahamud" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="w-full justify-start gap-2 border-indigo-200 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors">
                    <Github className="h-4 w-4 text-indigo-500" />
                    GitHub
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/jabril-mahamud/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="w-full justify-start gap-2 border-indigo-200 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors">
                    <Linkedin className="h-4 w-4 text-indigo-500" />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Bio content */}
        <div className="md:col-span-8">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 mb-6 border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">{t("biographyHeading", { fallback: "About Me" })}</h2>
            <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">{t("biography")}</p>
            
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
              <h3 className="text-xl font-bold mb-3 text-indigo-700 dark:text-indigo-400">{t("siteReason.title", { fallback: "Why I Made This Site" })}</h3>
              <p className="text-gray-700 dark:text-gray-300">{t("siteReason.description", { fallback: "I often get asked by people around me how to get into programming and software engineering. I'm not a teacher, but I built this site because I get asked this question often enough and wanted to provide a structured resource for beginners." })}</p>
            </div>
          </div>
          
          {/* Technical skills with improved visual hierarchy */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 mb-6 border-l-4 border-indigo-500">
            <h3 className="text-xl font-bold mb-4 text-indigo-700 dark:text-indigo-400">{t("skills.title", { fallback: "Technical Skills" })}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                <p className="font-semibold flex items-center gap-2 mb-2 text-blue-600 dark:text-blue-400">
                  <Code className="h-4 w-4" />
                  {t("skills.languages.title", { fallback: "Languages" })}
                </p>
                <p className="ml-6 text-gray-700 dark:text-gray-300">{t("skills.languages.description", { fallback: "JavaScript, TypeScript, Python, C#" })}</p>
              </div>
              
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-md">
                <p className="font-semibold flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400">
                  <Globe className="h-4 w-4" />
                  {t("skills.frameworks.title", { fallback: "Web Frameworks" })}
                </p>
                <p className="ml-6 text-gray-700 dark:text-gray-300">{t("skills.frameworks.description", { fallback: "Next.js, React, Express, Django" })}</p>
              </div>
              
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                <p className="font-semibold flex items-center gap-2 mb-2 text-blue-600 dark:text-blue-400">
                  <Server className="h-4 w-4" />
                  {t("skills.cloud.title", { fallback: "Cloud Platforms" })}
                </p>
                <p className="ml-6 text-gray-700 dark:text-gray-300">{t("skills.cloud.description", { fallback: "AWS, Azure, Google Cloud" })}</p>
              </div>
              
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-md">
                <p className="font-semibold flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400">
                  <Database className="h-4 w-4" />
                  {t("skills.databases.title", { fallback: "Databases" })}
                </p>
                <p className="ml-6 text-gray-700 dark:text-gray-300">{t("skills.databases.description", { fallback: "SQL (MySQL), NoSQL (MongoDB, DynamoDB)" })}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Work Experience with timeline design */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-2 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{t("experience.title")}</h2>
        </div>
        
        <div className="relative border-l-2 border-indigo-200 dark:border-indigo-800 pl-8 ml-4 space-y-8">
          {/* Position 1 */}
          <div className="relative">
            <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center shadow-md">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
            
            <Card className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/20 shadow-sm hover:shadow-md transition-shadow border-0">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400">{t("jobs.engineer.title", { fallback: "Software Engineer - BP | London" })}</h3>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm rounded-full">
                    {t("jobs.engineer.period", { fallback: "09/2023 - 09/2025" })}
                  </span>
                </div>
                
                <ul className="mt-4 space-y-2">
                  {engineerResponsibilities.map((responsibility: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/40 flex-shrink-0 flex items-center justify-center mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Position 2 */}
          <div className="relative">
            <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center shadow-md">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
            
            <Card className="bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-950/20 shadow-sm hover:shadow-md transition-shadow border-0">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400">{t("jobs.apprentice.title", { fallback: "Software Engineer Apprentice - BP | London" })}</h3>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-sm rounded-full">
                    {t("jobs.apprentice.period", { fallback: "09/2021 - 09/2023" })}
                  </span>
                </div>
                
                <ul className="mt-4 space-y-2">
                  {apprenticeResponsibilities.map((responsibility: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex-shrink-0 flex items-center justify-center mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Projects with improved visual design */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-2 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{t("projects.title", { fallback: "Project Highlights" })}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <Card className="overflow-hidden bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow border-0">
            <div className="h-3 bg-gradient-to-r from-indigo-400 to-purple-500"></div>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400">{t("projects.energy.title", { fallback: "Energy Market Analytics Platform" })}</h3>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-sm rounded-full">
                  {t("projects.energy.role", { fallback: "Developer" })}
                </span>
              </div>
              
              <ul className="mt-4 space-y-2 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                {energyProjectDescription.map((desc: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="h-5 w-5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">{desc}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          {/* Project 2 */}
          <Card className="overflow-hidden bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow border-0">
            <div className="h-3 bg-gradient-to-r from-purple-400 to-violet-500"></div>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400">{t("projects.pipeline.title", { fallback: "Real-time Data Processing Pipeline" })}</h3>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-sm rounded-full">
                  {t("projects.pipeline.role", { fallback: "Developer" })}
                </span>
              </div>
              
              <ul className="mt-4 space-y-2 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                {pipelineProjectDescription.map((desc: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="h-5 w-5 rounded-full bg-purple-100 dark:bg-purple-900/40 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">{desc}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}