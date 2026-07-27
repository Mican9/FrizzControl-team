import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { JsonLd } from "@/components/shared/JsonLd";
import { buildLocalBusinessJsonLd } from "@/lib/seo/jsonld";
import { SITE } from "@/lib/data/site";

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
    <html lang="sr" className={`${nunito.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <JsonLd data={buildLocalBusinessJsonLd()} />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
