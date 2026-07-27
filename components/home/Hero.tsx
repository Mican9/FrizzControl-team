import type { Staff } from "@/lib/data/staff";
import { copy } from "@/lib/content/copy";
import { HeroStaffPhoto } from "./HeroStaffPhoto";

export function Hero({ people }: { people: Staff[] }) {
  return (
    <section className="bg-gradient-to-b from-secondary/30 to-background px-[13px] py-8 text-center sm:px-[19px] sm:py-[51px] md:py-[40px]">
      <h1 className="text-2xl font-extrabold text-foreground sm:text-4xl md:text-5xl">
        {copy.hero.title}
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
        {copy.hero.subtitle}
      </p>

      <div className="team-container mx-auto mt-8 flex max-w-5xl flex-row flex-nowrap items-center justify-center gap-6 overflow-x-auto px-2 sm:mt-12 sm:gap-8">
        {people.map((person) => (
          <HeroStaffPhoto
            key={person.slug}
            person={person}
            variant={person.homePhotoVariant ?? "small"}
          />
        ))}
      </div>
    </section>
  );
}
