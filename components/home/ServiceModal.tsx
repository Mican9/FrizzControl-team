"use client";

import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/data/services";
import type { Staff } from "@/lib/data/staff";
import { copy } from "@/lib/content/copy";
import { formatPrice } from "@/lib/utils/services";

export function ServiceModal({
  service,
  performer,
  onClose,
}: {
  service: Service;
  performer?: Staff;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={service.name}
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-surface p-6 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 aspect-[4/3] overflow-hidden rounded-xl bg-secondary/30">
          <Image
            src={service.featuredImages?.[0]?.src ?? performer?.heroPhoto.src ?? "/staff/placeholder-vladimir.svg"}
            alt={service.featuredImages?.[0]?.alt ?? service.name}
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>

        <h3 className="text-2xl font-bold text-foreground">{service.name}</h3>
        {service.description ? (
          <p className="mt-1 text-muted">{service.description}</p>
        ) : null}

        <dl className="mt-4 space-y-1 text-sm">
          <div className="flex justify-between">
            <dt className="text-muted">{copy.serviceModal.priceLabel}</dt>
            <dd className="font-semibold text-foreground">{formatPrice(service)}</dd>
          </div>
          {performer ? (
            <div className="flex justify-between">
              <dt className="text-muted">{copy.serviceModal.staffLabel}</dt>
              <dd className="font-semibold text-foreground">{performer.name}</dd>
            </div>
          ) : null}
        </dl>

        <div className="mt-6 flex items-center justify-between gap-3">
          {performer ? (
            <Link
              href={`/tim/${performer.slug}`}
              className="rounded-full bg-primary px-5 py-2 font-semibold text-white hover:bg-primary-dark"
            >
              {copy.serviceFinder.ctaViewProfile}
            </Link>
          ) : (
            <span />
          )}
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-secondary px-5 py-2 font-semibold text-foreground hover:bg-secondary/30"
          >
            {copy.serviceModal.close}
          </button>
        </div>
      </div>
    </div>
  );
}
