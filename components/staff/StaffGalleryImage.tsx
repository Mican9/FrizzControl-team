import Image from "next/image";
import type { ServiceImage } from "@/lib/data/services";

export function StaffGalleryImage({
  image,
  caption,
}: {
  image: ServiceImage;
  caption: string;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl bg-secondary/20">
      <Image
        src={image.src}
        alt={image.alt}
        width={400}
        height={300}
        className="h-full w-full object-cover"
      />
      <figcaption className="p-3 text-sm font-medium text-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}
