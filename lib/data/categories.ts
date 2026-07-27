export const SERVICE_CATEGORIES = {
  zenskeFrizure: "zenske-frizure",
  muskeFrizure: "muske-frizure",
  farbanjeBlansiranje: "farbanje-blansiranje",
  obrvePmu: "obrve-pmu",
  trepavice: "trepavice",
  smiska: "smiska",
} as const;

export type ServiceCategorySlug =
  (typeof SERVICE_CATEGORIES)[keyof typeof SERVICE_CATEGORIES];

export const SERVICE_CATEGORY_LABELS: Record<ServiceCategorySlug, string> = {
  [SERVICE_CATEGORIES.zenskeFrizure]: "Ženske frizure",
  [SERVICE_CATEGORIES.muskeFrizure]: "Muške frizure",
  [SERVICE_CATEGORIES.farbanjeBlansiranje]: "Farbanje / Blanš",
  [SERVICE_CATEGORIES.obrvePmu]: "Obrve / PMU",
  [SERVICE_CATEGORIES.trepavice]: "Trepavice",
  [SERVICE_CATEGORIES.smiska]: "Šminka",
};

export const SERVICE_CATEGORY_ORDER: ServiceCategorySlug[] = [
  SERVICE_CATEGORIES.zenskeFrizure,
  SERVICE_CATEGORIES.muskeFrizure,
  SERVICE_CATEGORIES.farbanjeBlansiranje,
  SERVICE_CATEGORIES.obrvePmu,
  SERVICE_CATEGORIES.trepavice,
  SERVICE_CATEGORIES.smiska,
];
