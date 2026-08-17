import Image from "next/image";
import type { Staff } from "@/lib/data/staff";
import { InstagramButton } from "@/components/shared/InstagramButton";

export function StaffBio({ person }: { person: Staff }) {
  return (
    <section className="mx-auto max-w-md px-4 py-10 sm:px-6 sm:py-16">
      <div className="overflow-hidden rounded-2xl bg-black text-white shadow-lg transition-transform hover:scale-[1.02]">
        <div className="relative overflow-hidden">
          <Image
            src={person.heroPhoto.src}
            alt={person.heroPhoto.alt}
            width={400}
            height={400}
            priority
            className="h-64 w-full object-cover object-top sm:h-80"
            style={{
              objectPosition: person.heroPhoto.focalPosition ?? "center",
              transform: person.heroPhoto.zoom ? `scale(${person.heroPhoto.zoom})` : undefined,
            }}
          />
          <div className="pointer-events-none absolute bottom-0 h-40 w-full bg-gradient-to-t from-black to-transparent" />
        </div>
        <div className="px-6 pb-6">
          <p className="border-b border-gray-600 pb-4 pt-3 text-sm text-gray-200">
            {person.fullBio}
          </p>
          <p className="mt-4 text-2xl font-bold">{person.name}</p>
          <p className="bg-gradient-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] bg-clip-text text-sm font-medium text-transparent">
            {person.role}
          </p>
          <div className="mt-6">
            <InstagramButton href={person.instagramUrl} />
          </div>
        </div>
      </div>
    </section>
  );
}
