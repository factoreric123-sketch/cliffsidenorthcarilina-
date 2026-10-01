import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import { reviews } from "@/content/site";

import { Container, Reveal, SectionHeading, Stars } from "./primitives";

export function Reviews() {
  const rowRef = useRef<HTMLUListElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = rowRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 320) + 20), behavior: "smooth" });
  };

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="overflow-hidden bg-cream py-24 sm:py-32"
    >
      <Container>
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            id="reviews-title"
            eyebrow="Guest Reviews"
            title="What Guests Are Saying"
          />
          {reviews.length > 3 && (
            <Reveal className="hidden gap-2 md:flex">
              <button
                type="button"
                onClick={() => scroll(-1)}
                aria-label="Previous reviews"
                className="grid size-12 place-items-center rounded-full border border-forest/20 text-forest transition-colors hover:border-forest hover:bg-forest hover:text-ivory"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll(1)}
                aria-label="Next reviews"
                className="grid size-12 place-items-center rounded-full border border-forest/20 text-forest transition-colors hover:border-forest hover:bg-forest hover:text-ivory"
              >
                <ChevronRight className="size-5" />
              </button>
            </Reveal>
          )}
        </div>

        <ul
          ref={rowRef}
          className="snap-row -mx-5 mt-12 gap-5 scroll-px-5 px-5 pb-4 sm:-mx-8 sm:scroll-px-8 sm:px-8"
        >
          {reviews.map((r, i) => (
            <Reveal
              as="li"
              key={i}
              delay={Math.min(i, 2) * 100}
              className="w-[85%] shrink-0 sm:w-[60%] lg:w-[calc((100%-2.5rem)/3)]"
            >
              <figure className="flex h-full flex-col rounded-3xl bg-ivory p-8 shadow-[0_24px_48px_-40px_rgba(35,55,45,0.6)] sm:p-10">
                <span
                  aria-hidden="true"
                  className="font-display text-[5.5rem] leading-[0.6] text-copper/70"
                >
                  &ldquo;
                </span>
                <Stars rating={r.rating} className="mt-4" />
                <blockquote className="mt-5 flex-1 font-display text-[1.45rem] leading-snug text-charcoal">
                  {r.text}
                </blockquote>
                <figcaption className="mt-8 border-t border-stone/70 pt-5">
                  <p className="font-semibold text-forest">{r.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {r.location} · {r.date}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
