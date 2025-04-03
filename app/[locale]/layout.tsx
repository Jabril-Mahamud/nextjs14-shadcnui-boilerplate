// app/[locale]/layout.tsx
import "../globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import clsx from "clsx";
import Footer from "@/components/feature/layout/Footer";
import Navbar from "@/components/feature/layout/navbar/navbar";
import { ThemeProvider } from "@/src/theme/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Python Learning Guide",
  description: "A comprehensive guide to learning Python programming",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "so" }];
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className="h-full">
      <body className={clsx(inter.className, "min-h-screen flex flex-col")}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
