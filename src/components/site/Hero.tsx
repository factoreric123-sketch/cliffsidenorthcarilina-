import { photos } from "@/content/photos";
import { quickFacts, site } from "@/content/site";
import { cn } from "@/lib/utils";

import { button, Container, Img } from "./primitives";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-end bg-forest-deep text-white"
    >
      <div className="absolute inset-0 -z-10">
        <Img photo={photos.mistyRidges} priority />
        <div className="absolute inset-0 bg-linear-to-t from-forest-deep/95 via-forest-deep/35 to-forest-deep/40" />
      </div>

      <Container className="pt-28 pb-14 sm:pb-20">
        <p className="text-[0.9375rem] font-medium text-white/85">{site.locationLine}</p>
        <h1 id="hero-title" className="type-title mt-3 max-w-[16ch] text-white">
          Your Blue Ridge cabin, above it all.
        </h1>
        <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-white/90 sm:text-xl">
          Long-range mountain views, a private hot tub and room for four. Come for the scenery. Stay
          for the quiet.
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-[0.9375rem] font-medium text-white/90">
          {quickFacts.map(({ Icon, label }) => (
            <li key={label} className="flex items-center gap-2">
              <Icon className="size-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
          <a href={site.bookingUrl} className={button.primary}>
            Check availability
          </a>
          <a href="/cliffside" className={cn(button.link, "text-white decoration-white/50")}>
            See photos
          </a>
        </div>
        <p className="mt-4 text-sm text-white/85">
          Check dates and pricing with Leatherwood Mountains Resort.
        </p>
      </Container>
    </section>
  );
}
