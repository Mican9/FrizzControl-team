"use client";

import { useState } from "react";
import type { Service } from "@/lib/data/services";
import { SERVICE_CATEGORY_LABELS, type ServiceCategorySlug } from "@/lib/data/categories";
import { copy } from "@/lib/content/copy";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StaffGalleryImage } from "./StaffGalleryImage";

export function StaffGallery({
  categories,
  photographedServices,
}: {
  categories: ServiceCategorySlug[];
  photographedServices: Service[];
}) {
  const [activeTab, setActiveTab] = useState<ServiceCategorySlug>(categories[0]);

  const visible = photographedServices.filter((service) => service.category === activeTab);

  if (categories.length === 0) return null;

  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <SectionHeading>{copy.staffPage.galleryHeading}</SectionHeading>

      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveTab(category)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              activeTab === category
                ? "border-primary bg-primary text-white"
                : "border-secondary text-foreground hover:bg-secondary/30"
            }`}
          >
            {SERVICE_CATEGORY_LABELS[category]}
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.flatMap((service) =>
            (service.featuredImages ?? []).map((image, index) => (
              <StaffGalleryImage
                key={`${service.id}-${index}`}
                image={image}
                caption={service.name}
              />
            )),
          )}
        </div>
      ) : (
        <p className="mt-8 text-center text-muted">{copy.staffPage.noImageNote}</p>
      )}
    </section>
  );
}
