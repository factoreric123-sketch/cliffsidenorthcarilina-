import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeft, ChevronLeft, ChevronRight, Grid2x2, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { galleryCategories, galleryPhotos, imageUrl, type Photo } from "@/content/photos";
import { cn } from "@/lib/utils";

import { buttonStyles, Container, Img, Reveal, SectionHeading } from "./primitives";

type Category = (typeof galleryCategories)[number];

function PhotoButton({
  photo,
  onClick,
  className,
  sizes,
}: {
  photo: Photo;
  onClick: () => void;
  className?: string;
  sizes: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`View photo: ${photo.alt}`}
      className={cn("group relative block overflow-hidden rounded-2xl bg-cream", className)}
    >
      <Img
        photo={photo}
        sizes={sizes}
        className="transition-transform duration-[1.2s] ease-out group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
    </button>
  );
}

function Lightbox({
  open,
  onOpenChange,
  startIndex,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** null opens the thumbnail grid; a number opens that photo directly. */
  startIndex: number | null;
}) {
  const [category, setCategory] = useState<Category>("All");
  const [index, setIndex] = useState<number | null>(startIndex);
  const [cameFromGrid, setCameFromGrid] = useState(false);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    if (open) {
      setCategory("All");
      setIndex(startIndex);
      setCameFromGrid(false);
    }
  }, [open, startIndex]);

  const list = useMemo(
    () =>
      category === "All" ? galleryPhotos : galleryPhotos.filter((p) => p.category === category),
    [category],
  );

  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + list.length) % list.length)),
    [list.length],
  );

  useEffect(() => {
    if (!open || index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, step]);

  // Preload neighbours so swiping feels instant.
  useEffect(() => {
    if (index === null) return;
    for (const d of [1, -1]) {
      const p = list[(index + d + list.length) % list.length];
      if (p) new Image().src = imageUrl(p.src, 1600);
    }
  }, [index, list]);

  const current = index !== null ? list[index] : null;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-forest-deep data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content
          className="fixed inset-0 z-50 flex flex-col text-ivory outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0"
          onEscapeKeyDown={(e) => {
            if (current && cameFromGrid) {
              e.preventDefault();
              setIndex(null);
            }
          }}
        >
          <Dialog.Title className="sr-only">Cliffside photo gallery</Dialog.Title>
          <Dialog.Description className="sr-only">
            Browse photos of Cliffside by category. Use the arrow keys to move between photos.
          </Dialog.Description>

          {/* Top bar */}
          <div className="flex items-center gap-3 px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-3 sm:px-6">
            {current ? (
              <button
                type="button"
                onClick={() => setIndex(null)}
                className="inline-flex h-11 items-center gap-2 rounded-full px-3 text-sm font-semibold hover:bg-white/10"
              >
                <Grid2x2 className="size-4" aria-hidden="true" />
                All photos
              </button>
            ) : (
              <p className="px-2 font-display text-2xl">Gallery</p>
            )}
            {current && (
              <p className="ml-auto text-sm tabular-nums text-ivory/70" aria-live="polite">
                {index! + 1} / {list.length}
              </p>
            )}
            <Dialog.Close
              className={cn(
                "grid size-11 place-items-center rounded-full hover:bg-white/10",
                !current && "ml-auto",
              )}
              aria-label="Close gallery"
            >
              <X className="size-6" strokeWidth={1.5} />
            </Dialog.Close>
          </div>

          {current ? (
            /* Single-photo viewer */
            <div
              className="relative flex min-h-0 flex-1 flex-col"
              onTouchStart={(e) => (touchX.current = e.touches[0]?.clientX ?? null)}
              onTouchEnd={(e) => {
                const endX = e.changedTouches[0]?.clientX;
                if (touchX.current === null || endX === undefined) return;
                const dx = endX - touchX.current;
                if (Math.abs(dx) > 45) step(dx < 0 ? 1 : -1);
                touchX.current = null;
              }}
            >
              <div className="flex min-h-0 flex-1 items-center justify-center px-0 sm:px-20">
                <img
                  key={current.src}
                  src={imageUrl(current.src, 2200)}
                  alt={current.alt}
                  className="max-h-full max-w-full animate-in object-contain fade-in-0 duration-500 sm:rounded-lg"
                />
              </div>
              <p className="px-5 py-4 text-center text-sm text-ivory/75 sm:pb-6">
                {current.alt}
                {current.category && <span className="text-ivory/45"> · {current.category}</span>}
              </p>
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className="absolute top-1/2 left-3 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20 sm:grid"
              >
                <ChevronLeft className="size-6" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next photo"
                className="absolute top-1/2 right-3 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20 sm:grid"
              >
                <ChevronRight className="size-6" />
              </button>
              {/* Thumb-friendly controls on phones */}
              <div className="flex justify-center gap-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:hidden">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous photo"
                  className="grid size-12 place-items-center rounded-full bg-white/10"
                >
                  <ArrowLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next photo"
                  className="grid size-12 place-items-center rounded-full bg-white/10"
                >
                  <ArrowLeft className="size-5 rotate-180" />
                </button>
              </div>
            </div>
          ) : (
            /* Category grid */
            <div className="flex min-h-0 flex-1 flex-col">
              <div
                role="tablist"
                aria-label="Photo categories"
                className="snap-row shrink-0 gap-2 px-4 pb-4 sm:px-6"
              >
                {galleryCategories.map((c) => {
                  const count =
                    c === "All"
                      ? galleryPhotos.length
                      : galleryPhotos.filter((p) => p.category === c).length;
                  return (
                    <button
                      key={c}
                      type="button"
                      role="tab"
                      aria-selected={category === c}
                      onClick={() => setCategory(c)}
                      className={cn(
                        "shrink-0 rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors",
                        category === c
                          ? "border-ivory bg-ivory text-forest"
                          : "border-white/20 text-ivory/80 hover:border-white/50 hover:text-ivory",
                      )}
                    >
                      {c} <span className="opacity-60">{count}</span>
                    </button>
                  );
                })}
              </div>
              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-6">
                <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
                  {list.map((p, i) => (
                    <li
                      key={p.src}
                      className={cn(
                        "animate-in fade-in-0 duration-500",
                        // Every fifth photo spans wide for rhythm.
                        i % 5 === 0 && "col-span-2",
                      )}
                    >
                      <PhotoButton
                        photo={p}
                        onClick={() => {
                          setCameFromGrid(true);
                          setIndex(i);
                        }}
                        sizes={
                          i % 5 === 0
                            ? "(min-width: 768px) 66vw, 100vw"
                            : "(min-width: 768px) 33vw, 50vw"
                        }
                        className={cn("w-full", i % 5 === 0 ? "aspect-[16/9]" : "aspect-[4/3]")}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function Gallery() {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);

  const openAt = (i: number | null) => {
    setStartIndex(i);
    setOpen(true);
  };

  const featured = galleryPhotos.slice(0, 5);
  const mobileSlides = galleryPhotos.slice(0, 8);

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading id="gallery-title" eyebrow="Gallery" title="A Closer Look" />
          <Reveal className="hidden sm:block">
            <button
              type="button"
              onClick={() => openAt(null)}
              className={cn(buttonStyles.base, buttonStyles.outline)}
            >
              <Grid2x2 className="size-4" aria-hidden="true" />
              View All Photos
            </button>
          </Reveal>
        </div>

        {/* Desktop/tablet mosaic: one feature + four supporting */}
        <Reveal className="mt-12 hidden h-[min(70vh,640px)] grid-cols-4 grid-rows-2 gap-3 md:grid">
          {featured.map((p, i) => (
            <PhotoButton
              key={p.src}
              photo={p}
              onClick={() => openAt(i)}
              sizes={i === 0 ? "50vw" : "25vw"}
              className={cn(i === 0 && "col-span-2 row-span-2")}
            />
          ))}
        </Reveal>
      </Container>

      {/* Phone: swipeable full-bleed carousel */}
      <div className="mt-10 md:hidden">
        <ul
          className="snap-row gap-3 scroll-px-5 px-5"
          onScroll={(e) => {
            const el = e.currentTarget;
            const w = (el.firstElementChild as HTMLElement | null)?.offsetWidth ?? 1;
            setSlide(Math.round(el.scrollLeft / (w + 12)));
          }}
        >
          {mobileSlides.map((p, i) => (
            <li key={p.src} className="w-[86%] shrink-0">
              <PhotoButton
                photo={p}
                onClick={() => openAt(i)}
                sizes="86vw"
                className="aspect-[4/5] w-full"
              />
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-center justify-between px-5">
          <div className="flex gap-1.5" aria-hidden="true">
            {mobileSlides.map((p, i) => (
              <span
                key={p.src}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === slide ? "w-5 bg-forest" : "w-1.5 bg-stone",
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => openAt(null)}
            className={cn(buttonStyles.base, buttonStyles.outline, "px-5 py-3 text-sm")}
          >
            <Grid2x2 className="size-4" aria-hidden="true" />
            View All Photos
          </button>
        </div>
      </div>

      <Lightbox open={open} onOpenChange={setOpen} startIndex={startIndex} />
    </section>
  );
}
