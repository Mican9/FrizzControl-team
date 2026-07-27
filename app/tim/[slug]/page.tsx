import { notFound } from "next/navigation";
import { staff, getStaffBySlug } from "@/lib/data/staff";
import { getServicesByStaff, getFeaturedServices } from "@/lib/utils/services";
import { StaffBio } from "@/components/staff/StaffBio";
import { StaffPriceList } from "@/components/staff/StaffPriceList";
import { StaffGallery } from "@/components/staff/StaffGallery";
import { buildMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return staff.map((person) => ({ slug: person.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const person = getStaffBySlug(slug);

  if (!person) {
    return buildMetadata({
      title: "Član tima",
      description: "Upoznajte naš tim.",
      path: `/tim/${slug}`,
    });
  }

  return buildMetadata({
    title: `${person.name} — ${person.role}`,
    description: person.shortBio,
    path: `/tim/${person.slug}`,
  });
}

export default async function StaffPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const person = getStaffBySlug(slug);

  if (!person) {
    notFound();
  }

  const personServices = getServicesByStaff(person.slug);
  const featuredForPerson = getFeaturedServices().filter(
    (service) => service.staffSlug === person.slug,
  );

  return (
    <>
      <StaffBio person={person} />
      <StaffPriceList services={personServices} />
      <StaffGallery categories={person.categories} photographedServices={featuredForPerson} />
    </>
  );
}
