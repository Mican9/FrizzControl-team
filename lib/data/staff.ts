import { SERVICE_CATEGORIES, type ServiceCategorySlug } from "./categories";

export interface Staff {
  slug: string;
  name: string;
  role: string;
  shortBio: string;
  fullBio: string;
  heroPhoto: { src: string; alt: string; focalPosition?: string; zoom?: number };
  categories: ServiceCategorySlug[];
  instagramUrl?: string;
  homePhotoVariant?: "large" | "small";
}

// TODO(client): fotografije i pune biografije osoblja još nisu dostavljene — placeholder ispod.
export const staff: Staff[] = [
  {
    slug: "vladimir",
    name: "Vladimir Todorović",
    role: "Hairstylist",
    shortBio: "Ženske i muške frizure, farbanje i blanš.",
    fullBio:
      "Vladimir se bavi kompletnom frizerskom uslugom — od ženskih i muških šišanja, preko farbanja u jednoj boji, do blanš (balayage) tehnika. Svaku uslugu prilagođava tipu i stanju kose klijenta.",
    heroPhoto: { src: "/staff/placeholder-vladimir.svg", alt: "Vladimir Todorović, hairstylist" },
    categories: [
      SERVICE_CATEGORIES.zenskeFrizure,
      SERVICE_CATEGORIES.muskeFrizure,
      SERVICE_CATEGORIES.farbanjeBlansiranje,
    ],
    instagramUrl: "https://www.instagram.com/frizzcontrol87/",
    homePhotoVariant: "large",
  },
  {
    slug: "jovana",
    name: "Jovana Barunović",
    role: "PMU & Make Up Artist",
    shortBio: "Mikropigmentacija obrva, usana i ajlajnera.",
    fullBio:
      "Jovana radi mikropigmentaciju obrva (puder tehnika i hairstroke), usana i ajlajnera. Autorka je sopstvene hairstroke tehnike pod nazivom Soft Elegance Hairstroke, poznate po prirodnom i finom izgledu obrva.",
    heroPhoto: {
      src: "/staff/IMG_0719.png",
      alt: "Jovana Barunović, PMU & Make Up Artist",
      focalPosition: "50% 25%",
    },
    categories: [SERVICE_CATEGORIES.obrvePmu],
    instagramUrl: "https://www.instagram.com/jovanabarunovic/",
    homePhotoVariant: "large",
  },
  {
    slug: "nena",
    name: "Nena Todorović",
    role: "Hairstylist",
    shortBio: "Ženske i muške frizure, farbanje i blanš.",
    fullBio:
      "Nena se bavi kompletnom frizerskom uslugom — od ženskih i muških šišanja, preko farbanja u jednoj boji, do blanš (balayage) tehnika. Svaku uslugu prilagođava tipu i stanju kose klijenta.",
    heroPhoto: { src: "/staff/placeholder-nena.svg", alt: "Nena Todorović, hairstylist" },
    categories: [
      SERVICE_CATEGORIES.zenskeFrizure,
      SERVICE_CATEGORIES.muskeFrizure,
      SERVICE_CATEGORIES.farbanjeBlansiranje,
    ],
  },
  {
    slug: "iva",
    name: "Iva Ignjatović",
    role: "Make Up & Lash Artist",
    shortBio: "Šminkanje, trepavice, lash lift i ruski volumen.",
    fullBio:
      "Iva radi profesionalno šminkanje za sve prilike, kao i sve tehnike trepavica — klasične 1:1, ruski volumen i lash lift, prilagođene obliku oka i željama klijentkinje.",
    heroPhoto: { src: "/staff/iva-ignjatovic.jpg", alt: "Iva Ignjatović, Make Up & Lash Artist" },
    categories: [SERVICE_CATEGORIES.trepavice, SERVICE_CATEGORIES.smiska],
    instagramUrl: "https://www.instagram.com/by.ivaignjatovic/",
  },
];

export function getStaffBySlug(slug: string): Staff | undefined {
  return staff.find((person) => person.slug === slug);
}
