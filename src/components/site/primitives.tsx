import { useEffect, useRef, type ComponentProps, type CSSProperties, type ReactNode } from "react";

import { imageSrcSet, imageUrl, type Photo } from "@/content/photos";
import { cn } from "@/lib/utils";

export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)} {...props} />;
}

/** Responsive, lazy-loaded photo. Pass `priority` for above-the-fold images. */
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
      src={imageUrl(photo.src, 1600)}
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

/** Fades content up once it scrolls into view. Visible by default without JS. */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "article";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  id,
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  id?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn(align === "center" && "mx-auto text-center", "max-w-2xl", className)}>
      {eyebrow && (
        <p className={cn("eyebrow", tone === "dark" ? "text-stone" : "text-copper-deep")}>
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          "mt-4 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] font-medium tracking-[-0.01em]",
          tone === "dark" && "text-ivory",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed text-pretty sm:text-lg",
            tone === "dark" ? "text-ivory/80" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}

export const buttonStyles = {
  base: "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[0.95rem] font-semibold tracking-wide transition-all duration-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60",
  copper:
    "bg-copper text-white shadow-[0_8px_24px_-12px_rgba(182,106,60,0.8)] hover:bg-copper-hover hover:-translate-y-0.5",
  forest: "bg-forest text-ivory hover:bg-forest-deep hover:-translate-y-0.5",
  outlineLight:
    "border border-white/60 text-white hover:bg-white hover:text-forest hover:border-white",
  outline:
    "border border-forest/25 text-forest hover:border-forest hover:bg-forest hover:text-ivory",
};

export function Stars({ rating, className }: { rating: number; className?: string }) {
  return (
    <div
      className={cn("flex gap-0.5", className)}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={cn("size-4", i < rating ? "fill-copper" : "fill-stone")}
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.25 4.1 1 5.85L10 14.9l-5.25 2.75 1-5.85L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}
