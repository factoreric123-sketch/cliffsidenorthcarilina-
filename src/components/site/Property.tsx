import * as TabsPrimitive from "@radix-ui/react-tabs";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";

import { galleryCategories, galleryPhotos, imageSrcSet, imageUrl } from "@/content/photos";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

import { Lightbox } from "./Lightbox";
import { Container } from "./primitives";
import { AmenityList, ArrivalAndRules, CabinText, LocationDetails, ReviewList } from "./Sections";
import { intro } from "@/content/site";

const tabs = ["Description", "Reviews", "Amenities", "Location", "House rules"] as const;
type Tab = (typeof tabs)[number];

const iconButton =
  "grid size-11 place-items-center rounded-lg bg-ivory/90 text-forest transition-colors hover:bg-ivory";

/** Large photo with arrows, swipe, and a scrollable strip of every thumbnail. */
function PhotoViewer() {
  const [index, setIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [category, setCategory] = useState<(typeof galleryCategories)[number]>("All");
  const stripRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const count = galleryPhotos.length;
  const photo = galleryPhotos[index]!;

  const filteredIndices = galleryPhotos.flatMap((p, i) =>
    category === "All" || p.category === category ? [i] : [],
  );
  const go = (dir: 1 | -1) =>
    setIndex(
      (i) =>
        filteredIndices[
          (filteredIndices.indexOf(i) + dir + filteredIndices.length) % filteredIndices.length
        ] ?? i,
    );

  // Keep the active thumbnail centred in the strip without moving the page.
  useEffect(() => {
    const strip = stripRef.current;
    const thumb = strip?.children[index] as HTMLElement | undefined;
    if (!strip || !thumb) return;
    strip.scrollTo({
      left: thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
    for (const d of [1, -1]) {
      const next = galleryPhotos[(index + d + count) % count];
      if (next) new Image().src = imageUrl(next.src, 1920);
    }
  }, [index, count]);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      go(e.key === "ArrowRight" ? 1 : -1);
    }
  };

  return (
    <div>
      <label className="mb-4 flex items-center gap-3 text-sm font-semibold text-forest sm:hidden">
        Photo category
        <select
          value={category}
          onChange={(event) => {
            const next = event.target.value as typeof category;
            setCategory(next);
            setIndex(next === "All" ? 0 : galleryPhotos.findIndex((p) => p.category === next));
          }}
          className="min-h-11 min-w-0 flex-1 rounded-lg border border-stone bg-ivory px-3"
        >
          {galleryCategories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>
      <div
        role="group"
        aria-label="Photo categories"
        className="mb-4 hidden flex-wrap gap-2 sm:flex"
      >
        {galleryCategories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={category === c}
            onClick={() => {
              setCategory(c);
              setIndex(c === "All" ? 0 : galleryPhotos.findIndex((p) => p.category === c));
            }}
            className={cn(
              "min-h-11 rounded-lg border px-3 py-2 text-sm font-semibold",
              category === c
                ? "border-forest bg-forest text-ivory"
                : "border-stone text-forest hover:bg-cream",
            )}
          >
            {c}
          </button>
        ))}
      </div>
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
        className="relative overflow-hidden rounded-lg bg-forest-deep"
      >
        <div className="aspect-[3/2] w-full sm:max-h-[calc(100svh-15rem)] sm:min-h-[22rem]">
          <img
            src={imageUrl(photo.src, 1920)}
            srcSet={imageSrcSet(photo.src)}
            sizes="(min-width: 1152px) 1088px, 100vw"
            alt={photo.alt}
            fetchPriority={index === 0 ? "high" : "auto"}
            className="h-full w-full object-cover"
          />
        </div>
        <button
          type="button"
          onClick={() => setFullscreen(true)}
          aria-label="View full screen"
          className={cn(iconButton, "absolute top-3 right-3")}
        >
          <Expand className="size-5" strokeWidth={1.75} />
        </button>
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous photo"
          className={cn(iconButton, "absolute top-1/2 left-3 -translate-y-1/2")}
        >
          <ChevronLeft className="size-6" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next photo"
          className={cn(iconButton, "absolute top-1/2 right-3 -translate-y-1/2")}
        >
          <ChevronRight className="size-6" />
        </button>
      </div>

      <p className="type-caption mt-2 flex justify-between gap-4">
        <span>{photo.alt}</span>
        <span aria-live="polite" className="shrink-0 tabular-nums">
          {filteredIndices.indexOf(index) + 1} of {filteredIndices.length}
        </span>
      </p>

      <div
        ref={stripRef}
        className="snap-row relative mt-3 gap-2 pb-1"
        aria-label="Photo thumbnails"
      >
        {galleryPhotos.map((p, i) => (
          <button
            key={p.src}
            hidden={!filteredIndices.includes(i)}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show photo ${i + 1}: ${p.alt}`}
            aria-current={i === index ? "true" : undefined}
            className={cn(
              "aspect-[3/2] w-24 shrink-0 overflow-hidden rounded-lg border-2 sm:w-32",
              i === index ? "border-copper" : "border-transparent opacity-70 hover:opacity-100",
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

      <Lightbox
        open={fullscreen}
        onOpenChange={setFullscreen}
        startIndex={filteredIndices.indexOf(index)}
        startCategory={category}
      />
    </div>
  );
}

export function PropertyPage() {
  return (
    <main id="main" className="pt-22 pb-20 sm:pt-26">
      <Container>
        <PhotoViewer />

        <div className="mt-10 border-b border-stone pb-8">
          <h1 className="type-title">Cliffside</h1>
          <p className="mt-3">2 bedrooms · 2 bathrooms · Sleeps 4 · 2,279 sq ft · Pets welcome</p>
          <p className="type-caption mt-1">{site.locationLine}</p>
        </div>

        <TabsPrimitive.Root defaultValue="Description" className="mt-8">
          <TabsPrimitive.List
            aria-label="Cabin details"
            className="flex flex-wrap gap-x-2 border-b border-stone"
          >
            {tabs.map((t) => (
              <TabsPrimitive.Trigger
                key={t}
                value={t}
                className="-mb-px shrink-0 border-b-2 border-transparent px-3 py-3 text-[0.9375rem] font-semibold whitespace-nowrap text-muted-foreground transition-colors first:pl-0 hover:text-forest data-[state=active]:border-copper data-[state=active]:text-forest sm:px-5"
              >
                {t}
              </TabsPrimitive.Trigger>
            ))}
          </TabsPrimitive.List>

          <TabsPrimitive.Content value="Description" className="pt-8 outline-none">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
              <p className="max-w-[56ch] text-lg leading-relaxed">{intro.text}</p>
              <CabinText />
            </div>
          </TabsPrimitive.Content>
          <TabsPrimitive.Content value="Reviews" className="pt-8 outline-none">
            <ReviewList />
          </TabsPrimitive.Content>
          <TabsPrimitive.Content value="Amenities" className="pt-8 outline-none">
            <AmenityList />
          </TabsPrimitive.Content>
          <TabsPrimitive.Content value="Location" className="pt-8 outline-none">
            <LocationDetails />
          </TabsPrimitive.Content>
          <TabsPrimitive.Content value="House rules" className="pt-8 outline-none">
            <ArrivalAndRules />
          </TabsPrimitive.Content>
        </TabsPrimitive.Root>
      </Container>
    </main>
  );
}
