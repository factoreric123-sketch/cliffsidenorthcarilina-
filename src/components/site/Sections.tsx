import { ChevronDown } from "lucide-react";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { galleryCategories, galleryPhotos, photos, type GalleryCategory } from "@/content/photos";
import {
  amenityGroups,
  amenityHighlights,
  arrival,
  cabinTour,
  faqs,
  finalCta,
  intro,
  leatherwood,
  location,
  petReview,
  pets,
  policies,
  reasons,
  reviews,
  reviewSummary,
  site,
  slowingDown,
} from "@/content/site";
import { cn } from "@/lib/utils";

import { Lightbox } from "./Lightbox";
import { button, Container, DetailList, Figure, Img } from "./primitives";

/* ---------- Reusable blocks (home sections and the /cliffside tabs) ---------- */

export function BookButton({ className }: { className?: string }) {
  return (
    <a href={site.bookingUrl} className={cn(button.primary, className)}>
      Check availability
    </a>
  );
}

export function ReviewList({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p>
        Rated <strong>{reviewSummary.score}</strong> from {reviewSummary.count} verified guest
        reviews on{" "}
        <a href={reviewSummary.url} className={cn(button.link, "text-forest decoration-stone")}>
          {reviewSummary.source}
        </a>
        .
      </p>
      <ul className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
        {reviews.map((r) => (
          <li key={r.name} className="border-l-2 border-copper pl-5">
            <figure>
              <blockquote className="text-xl leading-snug font-medium text-forest">
                “{r.quote}”
              </blockquote>
              <figcaption className="type-caption mt-3">
                {r.name} · {r.stay} · 10/10
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CabinText() {
  return (
    <div className="space-y-6">
      {cabinTour.map((c) => (
        <div key={c.title}>
          <h3 className="type-subheading">{c.title}</h3>
          <p className="mt-1">{c.text}</p>
        </div>
      ))}
    </div>
  );
}

export function AmenityList() {
  const total = amenityGroups.reduce((n, g) => n + g.items.length, 0);
  return (
    <div>
      <ul className="grid border-t border-stone sm:grid-cols-2 sm:gap-x-10">
        {amenityHighlights.map((a) => (
          <li key={a} className="border-b border-stone py-2.5">
            {a}
          </li>
        ))}
      </ul>
      <details className="group mt-8">
        <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 font-semibold text-forest underline decoration-stone decoration-2 underline-offset-4 hover:decoration-copper [&::-webkit-details-marker]:hidden">
          Full amenity list ({total})
          <ChevronDown
            className="size-4 transition-transform group-open:rotate-180"
            aria-hidden="true"
          />
        </summary>
        <div className="mt-6 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {amenityGroups.map((g) => (
            <div key={g.title}>
              <h3 className="type-subheading">{g.title}</h3>
              <ul className="mt-2 space-y-1 text-[0.9375rem]">
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </details>
    </div>
  );
}

export function LocationDetails() {
  return (
    <div>
      <dl className="border-t border-stone">
        {location.places.map((p) => (
          <div
            key={p.place}
            className="grid gap-0.5 border-b border-stone py-4 sm:grid-cols-[minmax(9rem,13rem)_1fr] sm:gap-6"
          >
            <dt>
              <span className="font-semibold text-forest">{p.place}</span>
              <span className="type-caption block">{p.time}</span>
            </dt>
            <dd>{p.text}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-6">{location.closing}</p>
      <p className="mt-4">
        <a href={site.mapsUrl} className={cn(button.link, "text-forest decoration-stone")}>
          Open Leatherwood Mountains Resort in Google Maps
        </a>
      </p>
    </div>
  );
}

export function ArrivalAndRules() {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
      <div>
        <h3 className="type-subheading">Getting there</h3>
        <div className="mt-2 max-w-[56ch] space-y-3">
          {arrival.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
      <div>
        <h3 className="type-subheading mb-3">House rules</h3>
        <DetailList items={policies} />
      </div>
    </div>
  );
}

/* ---------- Home page sections, in page order ---------- */

export function Intro() {
  return (
    <section aria-labelledby="intro-title" className="py-16 sm:py-24">
      <Container>
        <div className="max-w-3xl">
          <h2 id="intro-title" className="type-heading">
            {intro.title}
          </h2>
          <p className="mt-6 text-xl leading-relaxed sm:text-[1.375rem]">{intro.text}</p>
        </div>
        <div className="mt-10 border-t border-stone pt-5">
          <h3 className="type-label">Perfect for</h3>
          <ul className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
            {intro.perfectFor.map((p, i) => (
              <li key={p}>
                {p}
                {i < intro.perfectFor.length - 1 && (
                  <span className="ml-2 text-stone" aria-hidden="true">
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function Reasons() {
  return (
    <section aria-labelledby="reasons-title" className="bg-cream py-16 sm:py-24">
      <Container>
        <h2 id="reasons-title" className="type-heading">
          Six reasons to book Cliffside
        </h2>
        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3">
          {reasons.map((r) => (
            <li key={r.title}>
              <div className="aspect-[3/2] overflow-hidden rounded-lg">
                <Img
                  photo={r.photo}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <h3 className="type-subheading mt-3 sm:mt-4">{r.title}</h3>
              <p className="mt-1 text-[0.9375rem] sm:text-base">{r.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="py-16 sm:py-24">
      <Container>
        <h2 id="reviews-title" className="type-heading max-w-2xl">
          Guests can't stop talking about the view
        </h2>
        <ReviewList className="mt-5" />
        <BookButton className="mt-10" />
      </Container>
    </section>
  );
}

export function SlowingDown() {
  return (
    <section aria-labelledby="slow-title" className="bg-forest text-ivory">
      <div className="grid lg:grid-cols-2">
        <div className="aspect-[3/2] lg:aspect-auto">
          <Img photo={photos.deckView} sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
        <div className="flex items-center px-5 py-14 sm:px-12 lg:px-16 lg:py-20">
          <div>
            <h2 id="slow-title" className="type-heading text-ivory">
              Made for slowing down
            </h2>
            <ul className="mt-6 space-y-3 text-xl leading-snug font-medium sm:text-2xl">
              {slowingDown.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CabinTour() {
  return (
    <section id="cabin" aria-labelledby="cabin-title" className="py-16 sm:py-24">
      <Container>
        <h2 id="cabin-title" className="type-heading">
          Explore Cliffside
        </h2>
        <div className="mt-10 space-y-14">
          {cabinTour.map((c, i) => (
            <div key={c.title}>
              <div
                className={cn(
                  "grid gap-4",
                  c.photos.length === 2 && "sm:grid-cols-2",
                  c.photos.length === 3 && "sm:grid-cols-2 lg:grid-cols-3",
                )}
              >
                {c.photos.map((p, j) => (
                  <Figure
                    key={p.src}
                    photo={p}
                    sizes={
                      c.photos.length === 3
                        ? "(min-width: 1024px) 33vw, 50vw"
                        : "(min-width: 640px) 50vw, 100vw"
                    }
                    // On phones, show only the lead photo of each area to keep the tour short.
                    className={cn(
                      j > 0 && "hidden sm:block",
                      i === 1 && j === 2 && "sm:hidden lg:block",
                    )}
                  />
                ))}
              </div>
              <div className="mt-4 max-w-2xl">
                <h3 className="type-subheading">{c.title}</h3>
                <p className="mt-1">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Leatherwood() {
  return (
    <section
      id="leatherwood"
      aria-labelledby="leatherwood-title"
      className="bg-cream py-16 sm:py-24"
    >
      <Container>
        <div className="max-w-2xl">
          <h2 id="leatherwood-title" className="type-heading">
            {leatherwood.title}
          </h2>
          <p className="mt-5">{leatherwood.text}</p>
        </div>
        <ul className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-3">
          {leatherwood.cards.map((c) => (
            <li key={c.title}>
              <div className="aspect-[3/2] overflow-hidden rounded-lg md:aspect-[4/5]">
                <Img photo={c.photo} sizes="(min-width: 768px) 33vw, 100vw" />
              </div>
              <h3 className="type-subheading mt-4">{c.title}</h3>
              <p className="mt-1">{c.text}</p>
            </li>
          ))}
        </ul>
        <BookButton className="mt-10" />
      </Container>
    </section>
  );
}

export function Location() {
  return (
    <section id="location" aria-labelledby="location-title" className="py-16 sm:py-24">
      <Container className="grid gap-8 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
          <h2 id="location-title" className="type-heading">
            {location.title}
          </h2>
          <div className="mt-8">
            <LocationDetails />
          </div>
        </div>
        <Figure
          photo={photos.resortSunset}
          caption="Leatherwood Mountains Resort and the ridges around it, at sunset."
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="lg:col-span-6 lg:pt-2"
        />
      </Container>
    </section>
  );
}

export function Pets() {
  return (
    <section aria-labelledby="pets-title" className="bg-cream py-16 sm:py-20">
      <Container className="grid gap-8 md:grid-cols-2 md:gap-14">
        <div>
          <h2 id="pets-title" className="type-heading">
            {pets.title}
          </h2>
          <p className="mt-5 max-w-[46ch]">{pets.text}</p>
          <p className="mt-3 font-semibold">{pets.fee}</p>
        </div>
        <figure className="self-center border-l-2 border-copper pl-5">
          <blockquote className="text-xl leading-snug font-medium text-forest">
            “{petReview.quote}”
          </blockquote>
          <figcaption className="type-caption mt-3">
            {petReview.name} · {petReview.stay} · 10/10
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}

export function PhotoGallery() {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState<GalleryCategory>("The view");
  const groups = galleryCategories.filter((c): c is GalleryCategory => c !== "All");

  return (
    <section id="photos" aria-labelledby="photos-title" className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="photos-title" className="type-heading">
            Photos
          </h2>
          <a href="/cliffside" className={cn(button.link, "text-forest decoration-stone")}>
            See photos
          </a>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {groups.map((g, i) => {
            const inGroup = galleryPhotos.filter((p) => p.category === g);
            const cover = inGroup[0];
            if (!cover) return null;
            return (
              <li key={g} className={cn(i === 0 && "col-span-2 md:col-span-1")}>
                <button
                  type="button"
                  onClick={() => {
                    setCategory(g);
                    setOpen(true);
                  }}
                  className="group block w-full text-left"
                >
                  <div className="aspect-[3/2] overflow-hidden rounded-lg md:aspect-[4/5]">
                    <Img photo={cover} sizes="(min-width: 1024px) 20vw, 50vw" />
                  </div>
                  <span className="mt-2 block font-semibold text-forest group-hover:underline">
                    {g}
                  </span>
                  <span className="type-caption block">{inGroup.length} photos</span>
                </button>
              </li>
            );
          })}
        </ul>
      </Container>
      <Lightbox open={open} onOpenChange={setOpen} startIndex={null} startCategory={category} />
    </section>
  );
}

export function Amenities() {
  return (
    <section id="amenities" aria-labelledby="amenities-title" className="bg-cream py-16 sm:py-24">
      <Container className="grid gap-8 lg:grid-cols-12 lg:gap-14">
        <h2 id="amenities-title" className="type-heading lg:col-span-4">
          Amenities
        </h2>
        <div className="lg:col-span-8">
          <AmenityList />
        </div>
      </Container>
    </section>
  );
}

export function Arrival() {
  return (
    <section id="rules" aria-labelledby="rules-title" className="py-16 sm:py-24">
      <Container>
        <h2 id="rules-title" className="type-heading">
          Arrival and house rules
        </h2>
        <div className="mt-8">
          <ArrivalAndRules />
        </div>
      </Container>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-cream py-16 sm:py-24">
      <Container className="grid gap-8 lg:grid-cols-12 lg:gap-14">
        <h2 id="faq-title" className="type-heading lg:col-span-4">
          Questions
        </h2>
        <Accordion type="single" collapsible className="border-t border-stone lg:col-span-8">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q} className="border-stone">
              <AccordionTrigger className="gap-6 py-4 text-left text-base font-semibold text-forest hover:no-underline [&>svg]:size-5 [&>svg]:text-forest">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="max-w-[60ch] pb-5 text-base">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="book" aria-labelledby="book-title" className="py-20 sm:py-28">
      <Container>
        <h2 id="book-title" className="type-heading">
          {finalCta.title}
        </h2>
        <p className="mt-4 text-lg">{finalCta.text}</p>
        <BookButton className="mt-8" />
        <p className="type-caption mt-4">{site.bookingNote}</p>
      </Container>
    </section>
  );
}
