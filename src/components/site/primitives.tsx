import type { ComponentProps } from "react";

import { imageSrcSet, imageUrl, type Photo } from "@/content/photos";
import { cn } from "@/lib/utils";

export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)} {...props} />;
}

/** Responsive, lazy-loaded photo. Pass `priority` for the above-the-fold image. */
export function Img({
  photo,
  sizes = "100vw",
  priority = false,
  className,
  ...props
}: { photo: Photo; sizes?: string; priority?: boolean } & Omit<
  ComponentProps<"img">,
  "src" | "alt"
>) {
  return (
    <img
      src={imageUrl(photo.src, 1280)}
      srcSet={imageSrcSet(photo.src)}
      sizes={sizes}
      alt={photo.alt}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
      className={cn("h-full w-full object-cover", className)}
      {...props}
    />
  );
}

/** A photo at a fixed 3:2 crop with an optional caption. */
export function Figure({
  photo,
  caption,
  sizes = "100vw",
  className,
}: {
  photo: Photo;
  caption?: string;
  sizes?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="aspect-[3/2] overflow-hidden rounded-lg bg-cream">
        <Img photo={photo} sizes={sizes} />
      </div>
      {caption && <figcaption className="type-caption mt-2">{caption}</figcaption>}
    </figure>
  );
}

/** One primary, one secondary, one text-link style, used everywhere. */
export const button = {
  primary:
    "inline-flex items-center justify-center rounded-lg bg-copper px-5 py-3 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-copper-hover",
  secondary:
    "inline-flex items-center justify-center rounded-lg border border-forest px-5 py-3 text-[0.9375rem] font-semibold text-forest transition-colors hover:bg-forest hover:text-ivory",
  link: "font-semibold underline decoration-2 underline-offset-4 transition-colors hover:decoration-copper",
};

/** Term/detail rows with dividers: facts, drive times, house rules. */
export function DetailList({
  items,
  className,
}: {
  items: { term: string; detail: string }[];
  className?: string;
}) {
  return (
    <dl className={cn("border-t border-stone", className)}>
      {items.map((it) => (
        <div
          key={it.term}
          className="grid gap-0.5 border-b border-stone py-3 sm:grid-cols-[minmax(9rem,13rem)_1fr] sm:gap-6"
        >
          <dt className="type-label">{it.term}</dt>
          <dd>{it.detail}</dd>
        </div>
      ))}
    </dl>
  );
}
