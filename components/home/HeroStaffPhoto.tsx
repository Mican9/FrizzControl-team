import Image from "next/image";
import Link from "next/link";
import type { Staff } from "@/lib/data/staff";

export function HeroStaffPhoto({
  person,
  variant = "small",
}: {
  person: Staff;
  variant?: "large" | "small";
}) {
  const isLarge = variant === "large";
  const frameSize = isLarge
    ? "w-[140px] h-[172px] sm:w-[180px] sm:h-[222px] md:w-[220px] md:h-[271px] lg:w-[260px] lg:h-[320px]"
    : "w-[106px] h-[106px] sm:w-[123px] sm:h-[123px] md:w-[141px] md:h-[141px] lg:w-[176px] lg:h-[176px]";
  const frameShape = isLarge ? "rounded-3xl" : "rounded-full";

  return (
    <Link
      href={`/tim/${person.slug}`}
      className="group flex flex-col items-center gap-2 sm:gap-3"
    >
      <div
        className={`overflow-hidden border-4 border-surface shadow-lg ring-2 ring-secondary/50 transition-transform group-hover:scale-105 ${frameShape} ${frameSize}`}
      >
        <Image
          src={person.heroPhoto.src}
          alt={person.heroPhoto.alt}
          width={400}
          height={400}
          priority={isLarge}
          className="h-full w-full object-cover"
          style={{
            objectPosition: person.heroPhoto.focalPosition ?? "center",
            transform: person.heroPhoto.zoom ? `scale(${person.heroPhoto.zoom})` : undefined,
          }}
        />
      </div>
      <span className="text-sm font-bold text-foreground group-hover:text-primary sm:text-base">
        {person.name}
      </span>
      <span className="text-xs text-muted sm:text-sm">{person.role}</span>
    </Link>
  );
}
