"use client";

import Link from "next/link";
import { Player } from "@remotion/player";
import type { Staff } from "@/lib/data/staff";
import { StaffCardComposition } from "./StaffCardComposition";

const FPS = 30;
const DURATION_IN_FRAMES = 200;
const WIDTH = 1080;
const HEIGHT = 1350;

export function AnimatedStaffCard({
  person,
  className = "",
}: {
  person: Staff;
  className?: string;
}) {
  return (
    <Link
      href={`/tim/${person.slug}`}
      className={`group block overflow-hidden rounded-2xl bg-black text-white shadow-lg transition-transform hover:scale-105 ${className}`}
    >
      <Player
        component={StaffCardComposition}
        durationInFrames={DURATION_IN_FRAMES}
        fps={FPS}
        compositionWidth={WIDTH}
        compositionHeight={HEIGHT}
        style={{ width: "100%" }}
        autoPlay
        loop
        showPosterWhenUnplayed
        clickToPlay={false}
        inputProps={{
          photoSrc: person.heroPhoto.src,
          focalPosition: person.heroPhoto.focalPosition,
          quote: person.shortBio,
          name: person.name,
          role: person.role,
          ctaText: "Pogledaj profil",
        }}
      />
    </Link>
  );
}
