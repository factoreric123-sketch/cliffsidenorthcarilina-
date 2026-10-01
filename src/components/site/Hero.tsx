import { ChevronDown } from "lucide-react";

import { photos } from "@/content/photos";
import { quickDetails, site } from "@/content/site";
import { cn } from "@/lib/utils";

import { buttonStyles, Container, Img, Reveal } from "./primitives";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-forest-deep"
    >
      <div className="absolute inset-0 -z-10">
        <Img photo={photos.mistyRidges} priority className="hero-zoom" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/30" />
      </div>

      <Container className="pt-32 pb-20 sm:pb-24 lg:pb-28">
        <div className="max-w-3xl text-white">
          <p className="eyebrow animate-in fade-in-0 slide-in-from-bottom-3 fill-mode-both text-white/80 duration-1000">
            {site.region}
          </p>
          <h1
            id="hero-title"
            className="mt-5 animate-in fade-in-0 slide-in-from-bottom-4 fill-mode-both text-[clamp(2.9rem,8vw,6.25rem)] leading-[0.95] font-medium tracking-[-0.015em] text-white delay-150 duration-1000"
          >
            Escape to the Blue Ridge Mountains
          </h1>
          <p className="mt-6 max-w-xl animate-in fade-in-0 slide-in-from-bottom-4 fill-mode-both text-lg leading-relaxed text-white/85 delay-300 duration-1000 sm:text-xl">
            Private mountain views, peaceful surroundings, and everything you need to slow down.
          </p>
          <p className="mt-6 animate-in fade-in-0 fill-mode-both text-sm font-medium tracking-[0.12em] text-white/75 uppercase delay-500 duration-1000">
            {site.summary}
          </p>
          <div className="mt-9 flex animate-in flex-col gap-3 fade-in-0 slide-in-from-bottom-4 fill-mode-both delay-700 duration-1000 sm:flex-row">
            <a href="#availability" className={cn(buttonStyles.base, buttonStyles.copper, "px-8")}>
              Book Your Stay
            </a>
            <a href="#cabin" className={cn(buttonStyles.base, buttonStyles.outlineLight, "px-8")}>
              Explore the Cabin
            </a>
          </div>
        </div>
      </Container>

      <a
        href="#details"
        aria-label="Scroll to property details"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/70 transition-colors hover:text-white md:block"
      >
        <ChevronDown className="size-6 animate-bounce" strokeWidth={1.25} />
      </a>
    </section>
  );
}

export function QuickDetails() {
  return (
    <section
      id="details"
      aria-label="Property details"
      className="border-b border-stone/70 bg-ivory"
    >
      <Container>
        <ul className="grid grid-cols-2 gap-px bg-stone/60 md:grid-cols-7">
          {quickDetails.map(({ Icon, label }, i) => (
            <Reveal
              as="li"
              key={label}
              delay={i * 60}
              className={cn(
                "flex flex-col items-center gap-3 bg-ivory px-2 py-7 text-center lg:py-9",
                // Odd count: let the last tile span the row on the 2-column mobile grid.
                i === quickDetails.length - 1 && "col-span-2 md:col-span-1",
              )}
            >
              <Icon className="size-6 text-copper" strokeWidth={1.4} aria-hidden="true" />
              <span className="text-sm font-semibold tracking-wide text-forest">{label}</span>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
