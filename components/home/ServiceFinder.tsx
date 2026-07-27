"use client";

import { useState } from "react";
import type { Service } from "@/lib/data/services";
import type { Staff } from "@/lib/data/staff";
import {
  SERVICE_CATEGORY_LABELS,
  SERVICE_CATEGORY_ORDER,
  type ServiceCategorySlug,
} from "@/lib/data/categories";
import { copy } from "@/lib/content/copy";
import { formatPrice } from "@/lib/utils/services";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceModal } from "./ServiceModal";

export function ServiceFinder({
  services,
  staff,
}: {
  services: Service[];
  staff: Staff[];
}) {
  const [activeCategory, setActiveCategory] = useState<ServiceCategorySlug | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const visibleServices = activeCategory
    ? services.filter((service) => service.category === activeCategory)
    : [];

  const performerOf = (service: Service) =>
    staff.find((person) => person.slug === service.staffSlug);

  return (
    <section className="mx-auto max-w-5xl px-[19px] py-[51px]">
      <SectionHeading subheading={copy.serviceFinder.subheading}>
        {copy.serviceFinder.heading}
      </SectionHeading>

      <div className="flex flex-wrap justify-center gap-3">
        {SERVICE_CATEGORY_ORDER.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() =>
              setActiveCategory(activeCategory === category ? null : category)
            }
            className={`rounded-full border px-5 py-2 font-medium transition-colors ${
              activeCategory === category
                ? "border-primary bg-primary text-white"
                : "border-secondary text-foreground hover:bg-secondary/30"
            }`}
          >
            {SERVICE_CATEGORY_LABELS[category]}
          </button>
        ))}
      </div>

      {activeCategory ? (
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service) => {
            const performer = performerOf(service);
            return (
              <li key={service.id}>
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="flex w-full flex-col items-start gap-1 rounded-2xl border border-secondary/50 bg-surface p-5 text-left shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="font-bold text-foreground">{service.name}</span>
                  <span className="text-sm text-muted">{performer?.name}</span>
                  <span className="mt-2 font-semibold text-primary">
                    {formatPrice(service)}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}

      {selectedService ? (
        <ServiceModal
          service={selectedService}
          performer={performerOf(selectedService)}
          onClose={() => setSelectedService(null)}
        />
      ) : null}
    </section>
  );
}
