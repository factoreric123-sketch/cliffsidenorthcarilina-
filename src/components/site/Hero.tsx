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
        <h1 id="hero-title" className="type-title max-w-[24ch] text-white">
          A two-bedroom log cabin in Leatherwood Mountains
        </h1>
        <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-white/90">
          Cliffside is inside the gated Leatherwood Mountains Resort in North Carolina's High
          Country, about 30 minutes from Boone and Blowing Rock. It sleeps 4, has a private hot tub
          and a stone gas fireplace, and pets are welcome.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
          <a href={site.bookingUrl} className={button.primary}>
            Check availability
          </a>
          <a href="/cliffside" className={cn(button.link, "text-white decoration-white/50")}>
            See photos
          </a>
        </div>
        <p className="type-caption mt-4 text-white/75">
          Bookings are made on leatherwoodmountains.com.
        </p>
      </Container>
    </section>
  );
}
