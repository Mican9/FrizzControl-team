export const SITE = {
  businessName: "FrizzControl",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://frizzcontrol.vercel.app",
  city: "Pirot",
  addressLine: "Trg slobode 5",
  phone: undefined as string | undefined, // TODO(client): telefon — samo za schema/footer, nikad kao CTA dugme
  instagramUrl: "https://www.instagram.com/frizzcontrol87/",
  workingHours: {
    closedDay: "Ponedeljak",
    openDaysLabel: "Utorak–Nedelja",
    openHours: "10:00–18:00",
  },
  mapsEmbedUrl:
    "https://www.google.com/maps?q=FrizzControl,+Trg+slobode+5,+Pirot&output=embed",
} as const;
