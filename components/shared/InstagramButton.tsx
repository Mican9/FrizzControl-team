import { SITE } from "@/lib/data/site";
import { copy } from "@/lib/content/copy";

export function InstagramButton({
  href,
  className = "",
}: {
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href ?? SITE.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark ${className}`}
    >
      {copy.cta.instagram}
    </a>
  );
}
