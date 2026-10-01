import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

import { amenityCategories, amenityHighlights } from "@/content/site";
import { cn } from "@/lib/utils";

import { Container, Reveal, SectionHeading } from "./primitives";

const PREVIEW_COUNT = 6;

function AmenityCategory({ category }: { category: (typeof amenityCategories)[number] }) {
  const [open, setOpen] = useState(false);
  const listId = useId();
  const { Icon, title, items } = category;
  const hidden = items.length - PREVIEW_COUNT;

  return (
    <div className="flex flex-col rounded-2xl border border-stone/80 bg-card p-7 transition-shadow duration-300 hover:shadow-[0_20px_40px_-28px_rgba(35,55,45,0.45)]">
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-full bg-cream text-forest">
          <Icon className="size-[1.15rem]" strokeWidth={1.5} aria-hidden="true" />
        </span>
        <h3 className="font-display text-2xl font-medium">{title}</h3>
        <span className="ml-auto text-xs font-semibold text-muted-foreground">{items.length}</span>
      </div>
      <ul
        id={listId}
        className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 text-[0.95rem] text-charcoal sm:grid-cols-2"
      >
        {items.map((item, i) => (
          <li
            key={item}
            className={cn(
              "flex items-baseline gap-2.5",
              i >= PREVIEW_COUNT && !open && "hidden",
              i >= PREVIEW_COUNT && open && "animate-in fade-in-0 duration-500",
            )}
          >
            <span
              className="size-1 shrink-0 translate-y-[-0.2em] rounded-full bg-sage"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
      {hidden > 0 && (
        <button
          type="button"
          aria-expanded={open}
          aria-controls={listId}
          onClick={() => setOpen((o) => !o)}
          className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-copper-deep transition-colors hover:text-copper"
        >
          {open ? "Show less" : `View all ${items.length}`}
          <ChevronDown
            className={cn("size-4 transition-transform duration-300", open && "rotate-180")}
            aria-hidden="true"
          />
        </button>
      )}
    </div>
  );
}

export function Amenities() {
  return (
    <section id="amenities" aria-labelledby="amenities-title" className="bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="amenities-title"
          eyebrow="Amenities"
          title="Everything You Need, Nothing You Don't"
          intro="Thoughtful comforts for a relaxed stay, from the hot tub on the deck to fiber Wi-Fi inside."
        />

        <ul className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {amenityHighlights.map(({ Icon, label }, i) => (
            <Reveal
              as="li"
              key={label}
              delay={(i % 4) * 70}
              className="group flex flex-col gap-4 rounded-2xl bg-ivory p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_-24px_rgba(35,55,45,0.5)] sm:flex-row sm:items-center sm:p-6"
            >
              <Icon
                className="size-7 shrink-0 text-forest transition-colors group-hover:text-copper"
                strokeWidth={1.3}
                aria-hidden="true"
              />
              <span className="text-[0.95rem] leading-snug font-semibold text-forest">{label}</span>
            </Reveal>
          ))}
        </ul>

        <div className="mt-20">
          <Reveal>
            <h3 className="font-display text-3xl font-medium sm:text-4xl">All Amenities</h3>
          </Reveal>
          <div className="mt-8 grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
            {amenityCategories.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 90}>
                <AmenityCategory category={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
