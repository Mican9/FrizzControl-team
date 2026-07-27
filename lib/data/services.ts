import { SERVICE_CATEGORIES, type ServiceCategorySlug } from "./categories";

export interface ServiceImage {
  src: string;
  alt: string;
}

export interface Service {
  id: string;
  name: string;
  category: ServiceCategorySlug;
  staffSlug: string;
  // Cena kao tekst (ne broj) jer neke usluge imaju tarifne cene po dužini kose, npr. "1000/1100/1200".
  price: string;
  currency: "RSD";
  description?: string;
  featuredImages?: ServiceImage[];
  isSignature?: boolean;
}

// Pravi cenovnik iz zvaničnih PDF dokumenata (Cenovnik 2026) za svako od zaposlenih.
// Dodavanje novih/izmena postojećih usluga: samo izmeniti/dodati objekte u ovaj niz.
export const services: Service[] = [
  // ---- Vladimir Todorović — frizer ----
  {
    id: "vladimir-zensko-sisanje",
    name: "Žensko šišanje",
    category: SERVICE_CATEGORIES.zenskeFrizure,
    staffSlug: "vladimir",
    price: "1000/1100/1200",
    currency: "RSD",
    featuredImages: [{ src: "/gallery/vladimir/zenske-frizure/zensko-sisanje.png", alt: "Žensko šišanje" }],
  },
  { id: "vladimir-musko-sisanje", name: "Muško šišanje", category: SERVICE_CATEGORIES.muskeFrizure, staffSlug: "vladimir", price: "700/800/900", currency: "RSD" },
  {
    id: "vladimir-feniranje",
    name: "Feniranje",
    category: SERVICE_CATEGORIES.zenskeFrizure,
    staffSlug: "vladimir",
    price: "800/900/1000",
    currency: "RSD",
    featuredImages: [{ src: "/gallery/vladimir/zenske-frizure/feniranje.png", alt: "Feniranje" }],
  },
  { id: "vladimir-feniranje-presa", name: "Feniranje + presa", category: SERVICE_CATEGORIES.zenskeFrizure, staffSlug: "vladimir", price: "1000", currency: "RSD" },
  {
    id: "vladimir-sisanje-feniranje",
    name: "Šišanje i feniranje",
    category: SERVICE_CATEGORIES.zenskeFrizure,
    staffSlug: "vladimir",
    price: "1500",
    currency: "RSD",
    featuredImages: [{ src: "/gallery/vladimir/zenske-frizure/feniranje.png", alt: "Šišanje i feniranje" }],
  },
  {
    id: "vladimir-talasi",
    name: "Talasi",
    category: SERVICE_CATEGORIES.zenskeFrizure,
    staffSlug: "vladimir",
    price: "2000",
    currency: "RSD",
    featuredImages: [{ src: "/gallery/vladimir/zenske-frizure/talasi.jpg", alt: "Talasi" }],
  },
  {
    id: "vladimir-podignuta-kosa",
    name: "Podignuta kosa",
    category: SERVICE_CATEGORIES.zenskeFrizure,
    staffSlug: "vladimir",
    price: "2000",
    currency: "RSD",
    featuredImages: [{ src: "/gallery/vladimir/zenske-frizure/podignuta-kosa.jpg", alt: "Podignuta kosa" }],
  },
  {
    id: "vladimir-umetak-iznajmljivanje",
    name: "Umetak za iznajmljivanje",
    category: SERVICE_CATEGORIES.zenskeFrizure,
    staffSlug: "vladimir",
    price: "2000",
    currency: "RSD",
    featuredImages: [{ src: "/gallery/vladimir/zenske-frizure/umetak-za-iznajmljivanje.jpg", alt: "Umetak za iznajmljivanje" }],
  },
  {
    id: "vladimir-umetak-iznajmljivanje-1",
    name: "Umetak za iznajmljivanje 1",
    category: SERVICE_CATEGORIES.zenskeFrizure,
    staffSlug: "vladimir",
    price: "2000",
    currency: "RSD",
    featuredImages: [{ src: "/gallery/vladimir/zenske-frizure/umetak-za-iznajmljivanje-1.jpg", alt: "Umetak za iznajmljivanje 1" }],
  },
  { id: "vladimir-korekcija-mesec-dana", name: "Korekcija posle mesec dana", category: SERVICE_CATEGORIES.farbanjeBlansiranje, staffSlug: "vladimir", price: "2400", currency: "RSD" },
  {
    id: "vladimir-bojenje-korena-sisanje",
    name: "Bojenje korena i šišanje",
    category: SERVICE_CATEGORIES.farbanjeBlansiranje,
    staffSlug: "vladimir",
    price: "3000",
    currency: "RSD",
    featuredImages: [{ src: "/gallery/vladimir/farbanje-blansiranje/farbanje-01.svg", alt: "Bojenje korena i šišanje" }],
  },
  {
    id: "vladimir-preliv",
    name: "Preliv",
    category: SERVICE_CATEGORIES.farbanjeBlansiranje,
    staffSlug: "vladimir",
    price: "2500",
    currency: "RSD",
    featuredImages: [{ src: "/gallery/vladimir/farbanje-blansiranje/preliv.jpg", alt: "Preliv" }],
  },
  {
    id: "vladimir-sminka-frizura-1",
    name: "Šminka i frizura 1",
    category: SERVICE_CATEGORIES.zenskeFrizure,
    staffSlug: "vladimir",
    price: "5500",
    currency: "RSD",
    featuredImages: [{ src: "/gallery/vladimir/zenske-frizure/sminka-i-frizura-1.jpg", alt: "Šminka i frizura 1" }],
  },
  {
    id: "vladimir-sminka-frizura",
    name: "Šminka i frizura",
    category: SERVICE_CATEGORIES.zenskeFrizure,
    staffSlug: "vladimir",
    price: "5000",
    currency: "RSD",
    featuredImages: [{ src: "/gallery/vladimir/zenske-frizure/sminka-i-frizura.jpg", alt: "Šminka i frizura" }],
  },
  {
    id: "vladimir-sminka-za-mladu",
    name: "Šminka za mladu",
    category: SERVICE_CATEGORIES.zenskeFrizure,
    staffSlug: "vladimir",
    price: "3500",
    currency: "RSD",
    featuredImages: [{ src: "/gallery/vladimir/zenske-frizure/sminka-za-mladu.jpg", alt: "Šminka za mladu" }],
  },

  // ---- Jovana Barunović — PMU umetnica ----
  { id: "jovana-korekcija-shading-liner", name: "Korekcija shading liner", category: SERVICE_CATEGORIES.obrvePmu, staffSlug: "jovana", price: "12000", currency: "RSD" },
  { id: "jovana-sminkanje", name: "Šminkanje", category: SERVICE_CATEGORIES.smiska, staffSlug: "jovana", price: "3500", currency: "RSD" },
  {
    id: "jovana-mikropigmentacija-obrva",
    name: "Mikropigmentacija obrva",
    category: SERVICE_CATEGORIES.obrvePmu,
    staffSlug: "jovana",
    price: "20300",
    currency: "RSD",
    description: "Rađeno Jovaninom autorskom tehnikom Soft Elegance Hairstroke — za prirodan, fin izgled obrva.",
    featuredImages: [
      { src: "/gallery/jovana/obrve-pmu/puder-obrve.jpg", alt: "Mikropigmentacija obrva — puder tehnika" },
      { src: "/gallery/jovana/obrve-pmu/hairstroke.jpg", alt: "Soft Elegance Hairstroke tehnika obrva" },
    ],
    isSignature: true,
  },
  { id: "jovana-korekcija-godinu-dana", name: "Korekcija posle godinu dana", category: SERVICE_CATEGORIES.obrvePmu, staffSlug: "jovana", price: "12000", currency: "RSD" },
  { id: "jovana-lasersko-skidanje-obrva", name: "Lasersko skidanje obrva (1 tretman)", category: SERVICE_CATEGORIES.obrvePmu, staffSlug: "jovana", price: "4000", currency: "RSD" },
  {
    id: "jovana-perfect-lips",
    name: "Perfect Lips",
    category: SERVICE_CATEGORIES.obrvePmu,
    staffSlug: "jovana",
    price: "20300",
    currency: "RSD",
    featuredImages: [{ src: "/gallery/jovana/obrve-pmu/usne.jpg", alt: "Perfect Lips mikropigmentacija usana" }],
  },
  { id: "jovana-shading-liner", name: "Shading Liner", category: SERVICE_CATEGORIES.obrvePmu, staffSlug: "jovana", price: "21500", currency: "RSD" },
  { id: "jovana-sminka-frizura", name: "Šminka i frizura", category: SERVICE_CATEGORIES.smiska, staffSlug: "jovana", price: "5000", currency: "RSD" },
  { id: "jovana-sminka-za-mladu", name: "Šminka za mladu", category: SERVICE_CATEGORIES.smiska, staffSlug: "jovana", price: "3500", currency: "RSD" },

  // ---- Iva Ignjatović — šminkerka ----
  { id: "iva-nadogradnja-1-1", name: "Nadogradnja trepavica 1:1", category: SERVICE_CATEGORIES.trepavice, staffSlug: "iva", price: "3500", currency: "RSD" },
  { id: "iva-korekcija-1-1", name: "Korekcija 1:1", category: SERVICE_CATEGORIES.trepavice, staffSlug: "iva", price: "2500", currency: "RSD" },
  {
    id: "iva-nadogradnja-ruski-volume",
    name: "Nadogradnja ruski volume",
    category: SERVICE_CATEGORIES.trepavice,
    staffSlug: "iva",
    price: "4500",
    currency: "RSD",
    featuredImages: [{ src: "/gallery/iva/trepavice/ruski-volumen-01.svg", alt: "Nadogradnja ruski volumen trepavica" }],
  },
  { id: "iva-korekcija-ruski-volume", name: "Korekcija ruski volume", category: SERVICE_CATEGORIES.trepavice, staffSlug: "iva", price: "3000", currency: "RSD" },
  { id: "iva-usluzno-skidanje-trepavica", name: "Uslužno skidanje trepavica", category: SERVICE_CATEGORIES.trepavice, staffSlug: "iva", price: "500", currency: "RSD" },
  {
    id: "iva-sminka",
    name: "Šminka Iva",
    category: SERVICE_CATEGORIES.smiska,
    staffSlug: "iva",
    price: "2500",
    currency: "RSD",
    featuredImages: [{ src: "/gallery/iva/smiska/smiska-iva-01.svg", alt: "Šminka — Iva Ignjatović" }],
  },
  { id: "iva-lash-lift", name: "Lash lift", category: SERVICE_CATEGORIES.trepavice, staffSlug: "iva", price: "2000", currency: "RSD" },
  { id: "iva-brow-lift", name: "Brow lift", category: SERVICE_CATEGORIES.trepavice, staffSlug: "iva", price: "2000", currency: "RSD" },
];
