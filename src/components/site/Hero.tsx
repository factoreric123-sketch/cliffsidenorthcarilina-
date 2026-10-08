import { photos } from "@/content/photos";
import { quickFacts, reviewSummary, site } from "@/content/site";
import { cn } from "@/lib/utils";

import { button, Container, Img } from "./primitives";

export function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <div id="hero-photo" className="h-[100svh] w-full bg-forest-deep">
        <Img
          photo={photos.sunsetHotTub}
          priority
          className="object-[62%_center] sm:object-center"
        />
      </div>

      <Container className="py-12 text-center sm:py-16">
        <p className="type-caption">{site.locationLine}</p>
        <h1 id="hero-title" className="type-title mx-auto mt-4 max-w-[20ch]">
          Your Blue Ridge cabin, above it all.
        </h1>
        <p className="mx-auto mt-5 max-w-[46ch] text-lg text-muted-foreground sm:text-xl">
          Long-range mountain views. A private hot tub. Room for four.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
          <a id="hero-booking" href={site.bookingUrl} className={button.primary}>
            Check availability
          </a>
          <a href="/cliffside" className={cn(button.link, "text-forest decoration-stone")}>
            See photos
          </a>
        </div>
        <p className="type-caption mt-4">
          Check dates and pricing with Leatherwood Mountains Resort.
        </p>
        <ul className="mx-auto mt-9 flex max-w-3xl flex-wrap justify-center gap-x-7 gap-y-6 sm:gap-x-0">
          {quickFacts.map(({ Icon, label }) => (
            <li
              key={label}
              className="flex min-w-24 flex-col items-center gap-2 text-sm text-forest sm:flex-1 sm:border-r sm:border-stone sm:last:border-r-0"
            >
              <Icon className="size-7" strokeWidth={1.5} aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
        <div className="mx-auto mt-8 max-w-3xl border-t border-stone pt-5">
          <a
            href="/#reviews"
            className="inline-flex min-h-11 flex-wrap items-center justify-center gap-3 text-sm text-forest underline-offset-4 hover:underline"
          >
            <strong className="text-xl">{reviewSummary.score}</strong>
            <span>Guest rating · {reviewSummary.count} reviews</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
