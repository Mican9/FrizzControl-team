import Image from "next/image";
import Link from "next/link";
import type { Staff } from "@/lib/data/staff";

export function HeroStaffPhoto({ person }: { person: Staff }) {
  return (
    <Link
      href={`/tim/${person.slug}`}
      className="group w-44 shrink-0 overflow-hidden rounded-2xl bg-black text-white shadow-lg sm:w-52 lg:w-56"
    >
      <div className="relative -mt-px overflow-hidden rounded-2xl transition-transform duration-300 group-hover:scale-105">
        <Image
          src={person.heroPhoto.src}
          alt={person.heroPhoto.alt}
          width={400}
          height={400}
          priority
          className="h-[150px] w-full object-cover object-top sm:h-[180px] lg:h-[200px]"
          style={{
            objectPosition: person.heroPhoto.focalPosition ?? "center",
            transform: person.heroPhoto.zoom ? `scale(${person.heroPhoto.zoom})` : undefined,
          }}
        />
        <div className="pointer-events-none absolute bottom-0 z-10 h-24 w-full bg-gradient-to-t from-black to-transparent" />
      </div>
      <div className="px-3 pb-3">
        <p className="border-b border-gray-600 pb-3 pt-2 text-xs text-gray-200">
          {person.shortBio}
        </p>
        <p className="mt-3 text-sm font-semibold">{person.name}</p>
        <p className="bg-gradient-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] bg-clip-text text-xs font-medium text-transparent">
          {person.role}
        </p>
        <p className="mt-2 text-xs font-medium text-gray-300 underline-offset-2 group-hover:underline">
          Pogledaj profil
        </p>
      </div>
    </Link>
  );
}
