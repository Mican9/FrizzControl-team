import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { JsonLd } from "@/components/shared/JsonLd";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { SiteBackground } from "@/components/shared/SiteBackground";
import { buildLocalBusinessJsonLd } from "@/lib/seo/jsonld";
import { SITE } from "@/lib/data/site";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.businessName} — frizerski i beauty salon`,
    template: `%s | ${SITE.businessName}`,
  },
  description:
    "Frizerske usluge, mikropigmentacija (PMU) i šminkanje — upoznajte naš tim, pogledajte cenovnik i galeriju radova.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={cn("h-full", "antialiased", nunito.variable, "font-sans", inter.variable)}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <ThemeProvider>
          <SiteBackground />
          <div className="relative z-10 flex min-h-full flex-1 flex-col">
            <JsonLd data={buildLocalBusinessJsonLd()} />
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
