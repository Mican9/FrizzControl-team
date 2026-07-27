import { SITE } from "@/lib/data/site";

export function MapEmbed() {
  return (
    <iframe
      title={`Lokacija — ${SITE.businessName}`}
      src={SITE.mapsEmbedUrl}
      className="h-64 w-full rounded-2xl border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
