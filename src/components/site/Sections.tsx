import { ChevronDown } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { photos } from "@/content/photos";
import {
  about,
  amenityGroups,
  amenityHighlights,
  driveTimes,
  facts,
  faqs,
  floors,
  nearby,
  policies,
  resortActivities,
  resortPhotos,
  site,
} from "@/content/site";
import { cn } from "@/lib/utils";

import { button, Container, DetailList, Figure } from "./primitives";

/* ---------- Reusable content blocks (home sections and the /cliffside tabs) ---------- */

export function AboutText() {
  return (
    <div className="max-w-[60ch] space-y-4">
      {about.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  );
}

export function RoomList({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-8", className)}>
      {floors.map((floor) => (
        <div key={floor.title}>
          <h3 className="type-subheading">{floor.title}</h3>
          <dl className="mt-2 space-y-2">
            {floor.rooms.map((r) => (
              <div key={r.name}>
                <dt className="inline font-semibold">{r.name}: </dt>
                <dd className="inline">{r.text}</dd>
              </div>
            ))}
          </dl>
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
    <div className="space-y-8">
      <div className="max-w-[56ch] space-y-4">
        <p>
          Cliffside is inside Leatherwood Mountains Resort, a gated community in North Carolina's
          High Country.
        </p>
        <p>{nearby}</p>
        <p>
          <a href={site.mapsUrl} className={cn(button.link, "text-forest decoration-stone")}>
            Open the resort in Google Maps
          </a>
        </p>
      </div>
      <div>
        <h3 className="type-subheading mb-3">Driving times</h3>
        <DetailList items={driveTimes.map((d) => ({ term: d.place, detail: d.time }))} />
      </div>
    </div>
  );
}

export function PolicyList() {
  return <DetailList items={policies} className="max-w-3xl" />;
}

/* ---------- Home page sections ---------- */

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-16 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
          <h2 id="about-title" className="type-heading">
            About Cliffside
          </h2>
          <div className="mt-5">
            <AboutText />
          </div>
          <DetailList items={facts} className="mt-8" />
        </div>
        <Figure
          photo={photos.exteriorFront}
          caption="Cliffside from outside, with the covered porch on the main level."
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="order-first lg:order-none lg:col-span-6 lg:pt-2"
        />
      </Container>
    </section>
  );
}

export function Cabin() {
  const [upper, main, outside] = floors;
  return (
    <section id="cabin" aria-labelledby="cabin-title" className="bg-cream py-16 sm:py-24">
      <Container>
        <h2 id="cabin-title" className="type-heading">
          The cabin, floor by floor
        </h2>

        {/* Upper level: one room, two photos. */}
        {upper && (
          <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <h3 className="type-subheading">{upper.title}</h3>
              {upper.rooms.map((r) => (
                <p key={r.name} className="mt-2">
                  <span className="font-semibold">{r.name}.</span> {r.text}
                </p>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
              {upper.photos.map((p) => (
                <Figure
                  key={p.src}
                  photo={p}
                  caption={p.alt}
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
              ))}
            </div>
          </div>
        )}

        {/* Main level: three rooms side by side, photos in a row beneath. */}
        {main && (
          <div className="mt-16 border-t border-stone pt-10">
            <h3 className="type-subheading">{main.title}</h3>
            <div className="mt-3 grid gap-5 md:grid-cols-3 md:gap-10">
              {main.rooms.map((r) => (
                <p key={r.name}>
                  <span className="font-semibold">{r.name}.</span> {r.text}
                </p>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {main.photos.map((p) => (
                <Figure
                  key={p.src}
                  photo={p}
                  caption={p.alt}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              ))}
            </div>
          </div>
        )}

        {/* Outside: the hot tub photo leads. */}
        {outside && (
          <div className="mt-16 grid gap-6 border-t border-stone pt-10 lg:grid-cols-3 lg:gap-8">
            {outside.photos[0] && (
              <Figure
                photo={outside.photos[0]}
                caption={outside.photos[0].alt}
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="lg:col-span-2"
              />
            )}
            <div>
              <h3 className="type-subheading">{outside.title}</h3>
              {outside.rooms.map((r) => (
                <p key={r.name} className="mt-2">
                  <span className="font-semibold">{r.name}.</span> {r.text}
                </p>
              ))}
              <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-1">
                {outside.photos.slice(1).map((p) => (
                  <Figure
                    key={p.src}
                    photo={p}
                    caption={p.alt}
                    sizes="(min-width: 1024px) 30vw, 50vw"
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <p className="mt-12">
          <a href="/cliffside" className={cn(button.link, "text-forest decoration-stone")}>
            See all 41 photos
          </a>
        </p>
      </Container>
    </section>
  );
}

export function Amenities() {
  return (
    <section id="amenities" aria-labelledby="amenities-title" className="py-16 sm:py-24">
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

export function Resort() {
  return (
    <section
      id="resort"
      aria-labelledby="resort-title"
      className="bg-forest py-16 text-ivory sm:py-24"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <h2 id="resort-title" className="type-heading text-ivory">
              Leatherwood Mountains Resort
            </h2>
            <p className="mt-5 max-w-[48ch] text-ivory/90">
              Staying at Cliffside gives you access to the resort around it: a gated community with
              miles of trails and the activities listed here.
            </p>
          </div>
          <ul className="grid border-t border-white/20 sm:grid-cols-2 sm:gap-x-10 lg:col-span-7">
            {resortActivities.map((a) => (
              <li key={a} className="border-b border-white/20 py-2.5">
                {a}
              </li>
            ))}
          </ul>
        </div>
        <div className="snap-row -mx-5 mt-12 gap-4 px-5 sm:mx-0 sm:grid sm:grid-cols-3 sm:px-0">
          {resortPhotos.map(({ photo, caption }) => (
            <Figure
              key={photo.src}
              photo={photo}
              caption={caption}
              sizes="(min-width: 640px) 33vw, 100vw"
              className="w-[78%] shrink-0 sm:w-auto [&_figcaption]:text-ivory/80"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Location() {
  return (
    <section id="location" aria-labelledby="location-title" className="py-16 sm:py-24">
      <Container className="grid gap-8 lg:grid-cols-12 lg:gap-14">
        <Figure
          photo={photos.resortSunset}
          caption="Leatherwood Mountains Resort and the ridges around it, at sunset."
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="lg:col-span-7"
        />
        <div className="lg:col-span-5">
          <h2 id="location-title" className="type-heading">
            Location
          </h2>
          <div className="mt-5">
            <LocationDetails />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function HouseRules() {
  return (
    <section id="rules" aria-labelledby="rules-title" className="bg-cream py-16 sm:py-20">
      <Container>
        <h2 id="rules-title" className="type-heading">
          House rules
        </h2>
        <div className="mt-8">
          <PolicyList />
        </div>
      </Container>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-16 sm:py-24">
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
