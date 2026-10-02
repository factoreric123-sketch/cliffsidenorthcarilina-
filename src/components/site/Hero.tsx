import { photos } from "@/content/photos";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

import { button, Container, Img } from "./primitives";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[88svh] items-end bg-forest-deep text-white"
    >
      <div className="absolute inset-0 -z-10">
        <Img photo={photos.mistyRidges} priority />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <Container className="pt-28 pb-14 sm:pb-20">
        <p className="text-[0.9375rem] font-medium text-white/85">{site.locationLine}</p>
        <h1 id="hero-title" className="type-title mt-3 max-w-[16ch] text-white">
          Your private mountain escape
        </h1>
        <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-white/90 sm:text-xl">
          Spectacular Blue Ridge views. A private hot tub. A cozy log cabin made for slowing down.
        </p>
        <p className="mt-5 text-[0.9375rem] font-medium text-white/85">{site.quickFacts}</p>
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
