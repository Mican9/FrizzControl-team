import { SITE } from "../data/site";

// Ne emitovati adresu/telefon dok su TBD — bolje izostaviti polje nego objaviti lažan podatak.
export function buildLocalBusinessJsonLd() {
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: SITE.businessName,
    url: SITE.baseUrl,
    sameAs: [SITE.instagramUrl],
    openingHours: [`Tu-Su ${SITE.workingHours.openHours}`],
  };

  if (SITE.city && SITE.addressLine) {
    jsonLd.address = {
      "@type": "PostalAddress",
      streetAddress: SITE.addressLine,
      addressLocality: SITE.city,
      addressCountry: "RS",
    };
  }

  if (SITE.phone) {
    jsonLd.telephone = SITE.phone;
  }

  return jsonLd;
}
