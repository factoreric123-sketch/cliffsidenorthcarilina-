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
        <div className="absolute inset-0 bg-black/35 sm:bg-black/20" />
      </div>

      <Container className="pt-28 pb-14 sm:pb-20">
        <p className="text-[0.9375rem] font-medium text-white/85">{site.locationLine}</p>
        <h1 id="hero-title" className="type-title mt-3 max-w-[16ch] text-white">
          Your private mountain escape
        </h1>
        <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-white/90 sm:text-xl">
          Spectacular Blue Ridge views. A private hot tub. A cozy log cabin made for slowing down.
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
      </Container>
    </section>
  );
}
