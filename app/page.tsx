import { Hero } from "@/components/home/Hero";
import { ServiceFinder } from "@/components/home/ServiceFinder";
import { staff } from "@/lib/data/staff";
import { services } from "@/lib/data/services";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Frizerski i beauty salon",
  description:
    "Ženske i muške frizure, farbanje, mikropigmentacija obrva i usana, šminkanje i trepavice — upoznajte naš tim i pronađite uslugu koja vam treba.",
  path: "/",
});

const HOME_HERO_ORDER = ["nena", "vladimir", "jovana", "iva"];

export default function Home() {
  const heroPeople = HOME_HERO_ORDER.map((slug) =>
    staff.find((person) => person.slug === slug),
  ).filter((person): person is (typeof staff)[number] => person !== undefined);

  return (
    <>
      <Hero people={heroPeople} />
      <ServiceFinder services={services} staff={staff} />
    </>
  );
}
