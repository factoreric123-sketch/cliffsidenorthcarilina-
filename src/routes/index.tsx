import { createFileRoute } from "@tanstack/react-router";
import {
  Flame,
  Waves,
  BedDouble,
  Mountain,
  CookingPot,
  Wifi,
  type LucideIcon,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Cliffside — Blue Ridge Mountain Cabin | Leatherwood Mountains, NC",
      },
      {
        name: "description",
        content:
          "Private 2-bedroom, 2-bath cabin for 4 in gated Leatherwood Mountains Resort, NC. Long-range Blue Ridge views, private hot tub, stone gas fireplace, pet friendly. 30 minutes from Boone and Blowing Rock.",
      },
      {
        property: "og:title",
        content: "Cliffside — Blue Ridge Mountain Cabin",
      },
      {
        property: "og:description",
        content:
          "A private 2BR/2BA mountain cabin in Leatherwood Mountains Resort, NC. Sleeps 4, pet friendly, private hot tub and long-range Blue Ridge views.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features: { Icon: LucideIcon; title: string; text: string }[] = [
  {
    Icon: Flame,
    title: "Stone gas fireplace",
    text: "Unwind by the stone gas fireplace in the comfortable living space after a day on the trails.",
  },
  {
    Icon: Waves,
    title: "Private hot tub",
    text: "Soak under the stars with long-range Blue Ridge Mountain views from the spacious deck.",
  },
  {
    Icon: BedDouble,
    title: "King primary suite",
    text: "Upper-level suite with double vanity, walk-in shower, and a two-person whirlpool tub.",
  },
  {
    Icon: Mountain,
    title: "Queen guest bedroom",
    text: "Main-level bedroom with mountain views and a comfortable queen bed — two full bathrooms.",
  },
  {
    Icon: CookingPot,
    title: "Fully equipped kitchen",
    text: "Kitchen, dining area, and living space with everything needed for a relaxing stay.",
  },
  {
    Icon: Wifi,
    title: "Fiber WiFi & Roku TVs",
    text: "High-speed fiber optic WiFi, Roku Smart TVs, DVD player, plus washer and dryer.",
  },
];

const resort = [
  {
    title: "Miles of trails",
    text: "Wander the resort's trail network straight from the cabin's doorstep.",
    tag: "On site",
  },
  {
    title: "Horseback riding",
    text: "Guided rides through the Leatherwood Mountains community.",
    tag: "In the resort",
  },
  {
    title: "Fishing & tubing",
    text: "Creek and stream fun for the whole family, including the dog.",
    tag: "In the resort",
  },
  {
    title: "On-site restaurant",
    text: "Dine out without leaving the gates, when the restaurant is open.",
    tag: "Seasonal",
  },
];

const policies = [
  "Check-in after 4:00 PM, check-out before 11:00 AM",
  "Minimum rental age is 25",
  "No smoking, events, or large gatherings",
  "Pet friendly — a pet fee applies",
  "Reservations within 24 hours of arrival require verbal confirmation by phone",
  "Security cameras at the gated entrance and home exteriors only — never directed at private areas",
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      {/* HERO */}
      <section className="bg-gradient-to-b from-cream to-cream-deep">
        <div className="mx-auto max-w-6xl px-6 pt-6 pb-20">
          <nav className="flex items-center justify-between text-sm">
            <span className="font-semibold tracking-[0.18em] text-pine uppercase">
              Cliffside
            </span>
            <div className="hidden items-center gap-8 text-ash md:flex">
              <a href="#stay" className="transition-colors hover:text-pine">
                Stay
              </a>
              <a href="#features" className="transition-colors hover:text-pine">
                Features
              </a>
              <a href="#resort" className="transition-colors hover:text-pine">
                Resort
              </a>
              <a href="#policies" className="transition-colors hover:text-pine">
                Policies
              </a>
              <a
                href="#inquire"
                className="inline-flex items-center rounded-[min(1vw,10px)] bg-pine px-4 py-2 text-cream ring-1 ring-pine-deep transition-colors hover:bg-pine-deep"
              >
                Inquire
              </a>
            </div>
          </nav>

          <div className="mt-20 grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow text-xs font-medium text-timber uppercase">
                945 Wagon Ridge Lane · Leatherwood Mountains, North Carolina
              </p>
              <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.98] font-semibold text-balance text-pine-deep">
                Welcome to a Cliffside escape
              </h1>
              <p className="mt-6 max-w-[46ch] text-base leading-relaxed font-light text-pretty text-ash md:text-lg">
                A private mountain cabin in the gated Leatherwood Mountains
                Resort, with long-range Blue Ridge views, a spacious deck, and a
                peaceful setting for couples, small families, or guests
                traveling with a dog.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-[min(1.4vw,16px)] bg-cream/55 p-6 ring-1 ring-black/10 backdrop-blur-md">
                <p className="eyebrow text-xs text-ash uppercase">The cabin</p>
                <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
                  <div>
                    <dt className="text-ash/70">Sleeps</dt>
                    <dd className="font-medium text-pine-deep">4 guests</dd>
                  </div>
                  <div>
                    <dt className="text-ash/70">Layout</dt>
                    <dd className="font-medium text-pine-deep">2 bedrooms</dd>
                  </div>
                  <div>
                    <dt className="text-ash/70">Bathrooms</dt>
                    <dd className="font-medium text-pine-deep">2 full</dd>
                  </div>
                  <div>
                    <dt className="text-ash/70">Size</dt>
                    <dd className="font-medium text-pine-deep">2,279 sq ft</dd>
                  </div>
                  <div>
                    <dt className="text-ash/70">Pets</dt>
                    <dd className="font-medium text-pine-deep">
                      Welcome · fee applies
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECS STRIP */}
      <section className="bg-pine text-cream">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="grid grid-cols-2 divide-cream/10 gap-6 text-center md:grid-cols-4 md:divide-x">
            <div className="px-2">
              <p className="font-display text-3xl font-semibold">2,279</p>
              <p className="eyebrow mt-1 text-xs text-cream/60 uppercase">
                Square feet
              </p>
            </div>
            <div className="px-2">
              <p className="font-display text-3xl font-semibold">4</p>
              <p className="eyebrow mt-1 text-xs text-cream/60 uppercase">
                Guests
              </p>
            </div>
            <div className="px-2">
              <p className="font-display text-3xl font-semibold">2 / 2</p>
              <p className="eyebrow mt-1 text-xs text-cream/60 uppercase">
                Bedrooms / baths
              </p>
            </div>
            <div className="px-2">
              <p className="font-display text-3xl font-semibold">30 min</p>
              <p className="eyebrow mt-1 text-xs text-cream/60 uppercase">
                To Boone &amp; Blowing Rock
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section id="stay" className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="reveal md:col-span-4">
              <p className="eyebrow text-xs font-medium text-timber uppercase">
                01 — Welcome
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold text-balance text-pine-deep">
                Comfort, privacy, and mountain air
              </h2>
            </div>
            <div className="reveal md:col-span-8">
              <p className="text-lg leading-relaxed font-light text-pretty text-ash">
                Cliffside combines comfort and privacy with easy access to
                outdoor adventure in North Carolina's High Country. Enjoy the
                mountain scenery from the spacious deck and covered porch, relax
                in the private hot tub, or unwind by the stone gas fireplace
                inside. Paved road access allows for easy year-round arrival.
              </p>
              <p className="mt-6 text-lg leading-relaxed font-light text-pretty text-ash">
                The upper-level primary suite offers a king bed, double vanity,
                walk-in shower, and a two-person whirlpool tub, while the
                main-level guest bedroom holds a queen bed with mountain views.
                Inside the gated resort community, the neighborhood is very safe
                and the property very secluded.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-cream-deep">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="reveal">
            <p className="eyebrow text-xs font-medium text-timber uppercase">
              02 — The cabin
            </p>
            <h2 className="mt-4 max-w-[38ch] font-display text-4xl font-semibold text-balance text-pine-deep">
              Everything a mountain stay needs
            </h2>
          </div>
          <div className="mt-12 grid gap-px bg-black/10 md:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="reveal bg-cream p-8">
                <f.Icon className="size-6 text-timber" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-5 font-display text-xl font-semibold text-pine-deep">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed font-light text-pretty text-ash">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESORT */}
      <section id="resort" className="bg-pine-deep text-cream">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="reveal flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-xs font-medium text-ember uppercase">
                03 — The resort
              </p>
              <h2 className="mt-4 max-w-[34ch] font-display text-4xl font-semibold text-balance text-cream">
                Days on the ridge, evenings by the fire
              </h2>
            </div>
            <p className="max-w-[34ch] text-sm leading-relaxed font-light text-cream/60">
              Cliffside sits inside Leatherwood Mountains Resort, about 30
              minutes from Boone and Blowing Rock, with easy access to the Blue
              Ridge Parkway.
            </p>
          </div>
          <div className="mt-14 divide-y divide-cream/10">
            {resort.map((r, i) => (
              <div key={r.title} className="reveal flex items-baseline gap-6 py-6">
                <span className="w-10 font-display text-sm font-semibold text-ember">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-semibold text-cream">
                    {r.title}
                  </h3>
                  <p className="text-sm font-light text-cream/60">{r.text}</p>
                </div>
                <span className="eyebrow hidden text-xs text-cream/40 uppercase sm:block">
                  {r.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POLICIES */}
      <section id="policies" className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="reveal md:col-span-4">
              <p className="eyebrow text-xs font-medium text-timber uppercase">
                04 — Policies
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold text-balance text-pine-deep">
                A few ground rules
              </h2>
            </div>
            <div className="reveal md:col-span-8">
              <ul className="grid gap-x-10 gap-y-6 text-sm sm:grid-cols-2">
                {policies.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="text-timber">•</span>
                    <span className="leading-relaxed font-light text-ash">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING INQUIRY CTA */}
      <section id="inquire" className="bg-gradient-to-b from-pine to-pine-deep text-cream">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="grid items-center gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow text-xs font-medium text-ember uppercase">
                05 — Book or inquire
              </p>
              <h2 className="mt-5 max-w-[30ch] font-display text-5xl font-semibold text-balance text-cream">
                Come up to the ridge
              </h2>
              <p className="mt-6 max-w-[44ch] text-lg leading-relaxed font-light text-pretty text-cream/70">
                Check availability on our Airbnb listing, or reach out with your
                dates — we'll confirm everything for your stay.
              </p>
              <a
                href="https://www.airbnb.com/s/Leatherwood-Mountains--NC/homes"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center rounded-[min(1vw,10px)] bg-ember px-5 py-3 text-sm text-cream ring-1 ring-ember transition-colors hover:bg-timber"
              >
                View our Airbnb listing
              </a>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-[min(1.4vw,16px)] bg-cream/10 p-7 ring-1 ring-cream/15 backdrop-blur-md">
                <p className="eyebrow text-xs text-cream/50 uppercase">
                  Find us
                </p>
                <div className="mt-5 space-y-4 text-sm">
                  <p className="flex items-baseline gap-2">
                    <span className="text-cream/50">Address</span>
                    <span className="font-medium text-cream">
                      945 Wagon Ridge Lane, NC
                    </span>
                  </p>
                  <p className="flex items-baseline gap-2">
                    <span className="text-cream/50">Setting</span>
                    <span className="font-medium text-cream">
                      Gated resort · paved access year-round
                    </span>
                  </p>
                  <p className="flex items-baseline gap-2">
                    <span className="text-cream/50">Nearby</span>
                    <span className="font-medium text-cream">
                      Boone · Blowing Rock · Blue Ridge Parkway
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-pine-deep text-cream/50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
          <span className="text-sm font-semibold tracking-[0.18em] text-cream/80 uppercase">
            Cliffside
          </span>
          <p className="text-xs font-light">
            Leatherwood Mountains Resort · Blue Ridge, North Carolina · © 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
