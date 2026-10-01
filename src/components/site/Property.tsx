import * as TabsPrimitive from "@radix-ui/react-tabs";
import {
  Bath,
  BedDouble,
  ChevronLeft,
  ChevronRight,
  Expand,
  MapPin,
  PawPrint,
  Ruler,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";

import { galleryPhotos, imageSrcSet, imageUrl } from "@/content/photos";
import { description, reviews, rooms } from "@/content/site";
import { cn } from "@/lib/utils";

import { AmenityCategories, AmenityHighlights } from "./Amenities";
import { LocationList, RegionMap } from "./Area";
import { BookingForm } from "./Booking";
import { Lightbox } from "./Gallery";
import { buttonStyles, Container } from "./primitives";
import { ReviewCard } from "./Reviews";

const stats = [
  { Icon: BedDouble, label: "2 Bedrooms" },
  { Icon: Bath, label: "2 Bathrooms" },
  { Icon: Users, label: "Sleeps 4" },
  { Icon: Ruler, label: "2,279 sq. ft." },
  { Icon: MapPin, label: "Leatherwood Mountains, NC" },
  { Icon: PawPrint, label: "Pet Friendly" },
];

const tabs = ["Description", "Amenities", "Reviews", "Calendar", "Location"] as const;
type Tab = (typeof tabs)[number];

/** Large photo with arrows, swipe, and a scrollable strip of every thumbnail. */
function PhotoViewer() {
  const [index, setIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const stripRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const count = galleryPhotos.length;
  const photo = galleryPhotos[index]!;

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + count) % count);

  // Keep the active thumbnail centred in the strip without moving the page.
  useEffect(() => {
    const strip = stripRef.current;
    const thumb = strip?.children[index] as HTMLElement | undefined;
    if (!strip || !thumb) return;
    strip.scrollTo({
      left: thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2,
      behavior: "smooth",
    });
    for (const d of [1, -1]) {
      const next = galleryPhotos[(index + d + count) % count];
      if (next) new Image().src = imageUrl(next.src, 1920);
    }
  }, [index, count]);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  };

  return (
    <div>
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Cliffside photos"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onTouchStart={(e) => (touchX.current = e.touches[0]?.clientX ?? null)}
        onTouchEnd={(e) => {
          const endX = e.changedTouches[0]?.clientX;
          if (touchX.current === null || endX === undefined) return;
          const dx = endX - touchX.current;
          if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
        className="group relative overflow-hidden rounded-2xl bg-forest-deep sm:rounded-3xl"
      >
        <div className="aspect-[4/3] w-full sm:aspect-[3/2] sm:max-h-[calc(100svh-17rem)] sm:min-h-[22rem]">
          <img
            key={photo.src}
            src={imageUrl(photo.src, 1920)}
            srcSet={imageSrcSet(photo.src)}
            sizes="(min-width: 1280px) 1216px, 100vw"
            alt={photo.alt}
            fetchPriority={index === 0 ? "high" : "auto"}
            className="h-full w-full animate-in object-cover fade-in-0 duration-500"
          />
        </div>

        <button
          type="button"
          onClick={() => setFullscreen(true)}
          aria-label="View full screen"
          className="absolute top-3 left-3 grid size-11 place-items-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60 sm:top-4 sm:left-4"
        >
          <Expand className="size-5" strokeWidth={1.75} />
        </button>
        <p
          aria-live="polite"
          className="absolute right-3 bottom-3 rounded-full bg-black/45 px-3 py-1.5 text-xs font-semibold text-white tabular-nums sm:right-4 sm:bottom-4"
        >
          {index + 1} / {count}
        </p>
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous photo"
          className="absolute top-1/2 left-3 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-forest shadow-lg transition hover:bg-white sm:left-4 sm:size-12"
        >
          <ChevronLeft className="size-6" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next photo"
          className="absolute top-1/2 right-3 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-forest shadow-lg transition hover:bg-white sm:right-4 sm:size-12"
        >
          <ChevronRight className="size-6" />
        </button>
      </div>

      <p className="mt-3 text-sm text-muted-foreground">{photo.alt}</p>

      <div ref={stripRef} className="snap-row mt-3 gap-2 pb-1" aria-label="Photo thumbnails">
        {galleryPhotos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show photo ${i + 1}: ${p.alt}`}
            aria-current={i === index ? "true" : undefined}
            className={cn(
              "relative aspect-[3/2] w-24 shrink-0 overflow-hidden rounded-lg transition-opacity duration-300 sm:w-32 lg:w-36",
              i === index
                ? "opacity-100 ring-2 ring-copper ring-offset-2 ring-offset-ivory"
                : "opacity-60 hover:opacity-100",
            )}
          >
            <img
              src={imageUrl(p.src, 320)}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      <Lightbox open={fullscreen} onOpenChange={setFullscreen} startIndex={index} />
    </div>
  );
}

export function PropertyPage() {
  const [tab, setTab] = useState<Tab>("Description");
  const tabsRef = useRef<HTMLDivElement>(null);

  const openCalendar = () => {
    setTab("Calendar");
    // Wait for the tab panel to render, then scroll so the tabs sit below the fixed header.
    setTimeout(() => {
      const el = tabsRef.current;
      if (el)
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - 96,
          behavior: "smooth",
        });
    }, 0);
  };

  return (
    <main id="main" className="pt-24 pb-24 sm:pt-28">
      <Container>
        <PhotoViewer />

        <div className="mt-12 text-center">
          <h1 className="text-[clamp(2.75rem,6vw,4.5rem)] leading-none font-medium">Cliffside</h1>
          <ul className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[0.95rem] text-charcoal">
            {stats.map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="size-[1.15rem] text-copper" strokeWidth={1.6} aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={openCalendar}
            className={cn(buttonStyles.base, buttonStyles.copper, "mt-8 px-8")}
          >
            Check Availability
          </button>
        </div>

        <TabsPrimitive.Root
          ref={tabsRef}
          value={tab}
          onValueChange={(v) => setTab(v as Tab)}
          className="mt-14"
        >
          <TabsPrimitive.List
            aria-label="Property details"
            className="snap-row gap-1 border-b border-stone"
          >
            {tabs.map((t) => (
              <TabsPrimitive.Trigger
                key={t}
                value={t}
                className="relative shrink-0 px-3 py-3.5 text-sm sm:text-[0.95rem] font-semibold whitespace-nowrap text-muted-foreground transition-colors after:absolute after:inset-x-3 after:-bottom-px after:h-0.5 after:scale-x-0 after:bg-copper after:transition-transform hover:text-forest data-[state=active]:text-forest data-[state=active]:after:scale-x-100 sm:px-6"
              >
                {t}
              </TabsPrimitive.Trigger>
            ))}
          </TabsPrimitive.List>

          <TabsPrimitive.Content value="Description" className="pt-10 outline-none">
            <div className="max-w-3xl space-y-5 text-[1.05rem] leading-[1.8] text-muted-foreground">
              {description.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {rooms.map((room) => (
                <div key={room.title} className="rounded-2xl border border-stone/80 bg-card p-7">
                  <p className="eyebrow text-copper-deep">{room.eyebrow}</p>
                  <h2 className="mt-2 text-3xl font-medium">{room.title}</h2>
                  <ul className="mt-4 space-y-2 text-[0.95rem] text-charcoal">
                    {room.features.map((f) => (
                      <li key={f} className="flex items-baseline gap-2.5">
                        <span
                          className="size-1.5 shrink-0 -translate-y-0.5 rounded-full bg-sage"
                          aria-hidden="true"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TabsPrimitive.Content>

          <TabsPrimitive.Content value="Amenities" className="pt-10 outline-none">
            <AmenityHighlights />
            <AmenityCategories className="mt-10" />
          </TabsPrimitive.Content>

          <TabsPrimitive.Content value="Reviews" className="pt-10 outline-none">
            <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r, i) => (
                <li key={i}>
                  <ReviewCard review={r} />
                </li>
              ))}
            </ul>
          </TabsPrimitive.Content>

          <TabsPrimitive.Content value="Calendar" className="pt-10 outline-none">
            <BookingForm className="mx-auto max-w-4xl border border-stone/80 shadow-none" />
          </TabsPrimitive.Content>

          <TabsPrimitive.Content value="Location" className="pt-10 outline-none">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <LocationList className="lg:col-span-5" />
              <div className="overflow-hidden rounded-3xl border border-stone/80 lg:col-span-7">
                <RegionMap />
              </div>
            </div>
          </TabsPrimitive.Content>
        </TabsPrimitive.Root>
      </Container>
    </main>
  );
}
