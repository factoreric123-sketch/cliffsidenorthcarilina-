import { ArrowDown } from "lucide-react";

import { photos } from "@/content/photos";
import { quickFacts, reviewSummary, site } from "@/content/site";
import { cn } from "@/lib/utils";

import { button, Container, Img } from "./primitives";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[90svh] items-end bg-forest-deep text-white"
    >
      <div className="absolute inset-0 -z-10">
        <Img photo={photos.mistyRidges} priority />
        <div className="absolute inset-0 bg-linear-to-t from-forest-deep/95 via-forest-deep/35 to-forest-deep/40" />
      </div>

      <Container className="grid items-end gap-8 pt-28 pb-10 sm:pb-14 lg:grid-cols-[1fr_260px]">
        <div>
          <p className="text-[0.9375rem] font-medium text-white/85">{site.locationLine}</p>
          <h1 id="hero-title" className="type-title mt-3 max-w-[16ch] text-white">
            Your Blue Ridge cabin, above it all.
          </h1>
          <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-white/90 sm:text-xl">
            Long-range mountain views, a private hot tub and room for four. Come for the scenery.
            Stay for the quiet.
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
            <a id="hero-booking" href={site.bookingUrl} className={button.primary}>
              Check availability
            </a>
            <a href="/cliffside" className={cn(button.link, "text-white decoration-white/50")}>
              See photos
            </a>
          </div>
          <p className="mt-4 text-sm text-white/85">
            Check dates and pricing with Leatherwood Mountains Resort.
          </p>
          <a
            href="/#reviews"
            className="mt-5 inline-flex min-h-11 items-center gap-3 text-sm underline-offset-4 hover:underline"
          >
            <strong className="rounded-lg bg-ivory px-2.5 py-1.5 text-base text-forest">
              {reviewSummary.score}
            </strong>
            <span>{reviewSummary.count} guest reviews</span>
          </a>
        </div>
        <a
          href="/#cabin"
          className="group flex items-center gap-4 rounded-lg border border-white/30 bg-forest-deep/70 p-3 lg:block"
        >
          <div className="h-20 w-28 shrink-0 overflow-hidden rounded-lg lg:h-auto lg:w-full lg:aspect-[3/2]">
            <Img photo={photos.hotTubView} sizes="260px" />
          </div>
          <span className="flex items-center justify-between gap-3 text-sm font-semibold lg:mt-3">
            Explore the cabin
            <ArrowDown className="size-5" aria-hidden="true" />
          </span>
        </a>
      </Container>
    </section>
  );
}
