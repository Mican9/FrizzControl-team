import type { Service } from "@/lib/data/services";
import { SERVICE_CATEGORY_LABELS, SERVICE_CATEGORY_ORDER } from "@/lib/data/categories";
import { copy } from "@/lib/content/copy";
import { formatPrice } from "@/lib/utils/services";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function StaffPriceList({ services }: { services: Service[] }) {
  const categoriesPresent = SERVICE_CATEGORY_ORDER.filter((category) =>
    services.some((service) => service.category === category),
  );

  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <SectionHeading>{copy.staffPage.priceListHeading}</SectionHeading>

      <div className="space-y-8">
        {categoriesPresent.map((category) => (
          <div key={category}>
            <h3 className="mb-3 font-bold text-primary">
              {SERVICE_CATEGORY_LABELS[category]}
            </h3>
            <dl className="divide-y divide-secondary/40 rounded-2xl border border-secondary/40 bg-surface">
              {services
                .filter((service) => service.category === category)
                .map((service) => (
                  <div
                    key={service.id}
                    className="flex items-center justify-between px-5 py-3"
                  >
                    <dt className="text-foreground">{service.name}</dt>
                    <dd className="font-semibold text-primary">{formatPrice(service)}</dd>
                  </div>
                ))}
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
}
