import { SITE } from "@/lib/data/site";
import { copy } from "@/lib/content/copy";
import { InstagramButton } from "@/components/shared/InstagramButton";
import { MapEmbed } from "./MapEmbed";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-secondary/40 bg-surface">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-12 sm:grid-cols-2">
        <div>
          <h3 className="mb-2 font-bold text-foreground">{copy.footer.hoursHeading}</h3>
          <p className="text-muted">{SITE.workingHours.closedDay}: ne radimo</p>
          <p className="text-muted">
            {SITE.workingHours.openDaysLabel}: {SITE.workingHours.openHours}
          </p>
          {SITE.addressLine ? <p className="mt-3 text-muted">{SITE.addressLine}</p> : null}
          <div className="mt-4">
            <InstagramButton />
          </div>
        </div>
        <div>
          <h3 className="mb-2 font-bold text-foreground">{copy.footer.locationHeading}</h3>
          <MapEmbed />
        </div>
      </div>
      <div className="border-t border-secondary/30 py-4 text-center text-sm text-muted">
        © {new Date().getFullYear()} {SITE.businessName}
      </div>
    </footer>
  );
}
