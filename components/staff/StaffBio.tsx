import Image from "next/image";
import type { Staff } from "@/lib/data/staff";
import { InstagramButton } from "@/components/shared/InstagramButton";

export function StaffBio({ person }: { person: Staff }) {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-10 text-center sm:flex-row sm:px-6 sm:py-16 sm:text-left">
      <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-surface shadow-lg ring-2 ring-secondary/50 sm:h-48 sm:w-48">
        <Image
          src={person.heroPhoto.src}
          alt={person.heroPhoto.alt}
          width={240}
          height={240}
          priority
          className="h-full w-full object-cover"
          style={{
            objectPosition: person.heroPhoto.focalPosition ?? "center",
            transform: person.heroPhoto.zoom ? `scale(${person.heroPhoto.zoom})` : undefined,
          }}
        />
      </div>
      <div className="flex-1">
        <h1 className="text-2xl font-extrabold text-foreground sm:text-3xl">{person.name}</h1>
        <p className="mt-1 font-semibold text-primary">{person.role}</p>
        <p className="mt-4 text-muted">{person.fullBio}</p>
        <div className="mt-6">
          <InstagramButton href={person.instagramUrl} />
        </div>
      </div>
    </section>
  );
}
