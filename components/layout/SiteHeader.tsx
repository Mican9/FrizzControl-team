import Link from "next/link";
import { SITE } from "@/lib/data/site";
import { staff } from "@/lib/data/staff";
import { copy } from "@/lib/content/copy";
import { NavMenu } from "./NavMenu";

export function SiteHeader() {
  const staffLinks = staff.map((person) => ({
    href: `/tim/${person.slug}`,
    label: person.name,
  }));

  return (
    <header className="sticky top-0 z-40 border-b border-secondary/40 bg-background/90 backdrop-blur">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="text-sm font-medium hover:text-primary sm:text-base">
          {copy.nav.home}
        </Link>
        <NavMenu items={staffLinks} />
        <Link href="/" className="text-xl font-extrabold text-primary">
          {SITE.businessName}
        </Link>
      </div>
    </header>
  );
}
