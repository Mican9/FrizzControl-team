import Link from "next/link";
import { SITE } from "@/lib/data/site";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-4 px-6 py-32 text-center">
      <h1 className="text-4xl font-extrabold text-foreground">Stranica nije pronađena</h1>
      <p className="text-muted">
        Stranica koju tražite ne postoji ili je premeštena.
      </p>
      <Link
        href="/"
        className="rounded-full bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-dark"
      >
        Nazad na {SITE.businessName}
      </Link>
    </div>
  );
}
