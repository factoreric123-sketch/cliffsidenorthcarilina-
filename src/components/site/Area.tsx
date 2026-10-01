import { photos } from "@/content/photos";
import { destinations, locationPoints, resortActivities } from "@/content/site";

import { Container, Img, Reveal, SectionHeading } from "./primitives";

export function Leatherwood() {
  return (
    <section
      aria-labelledby="leatherwood-title"
      className="relative isolate overflow-hidden bg-forest py-24 sm:py-36"
    >
      <div className="absolute inset-0 -z-10">
        <Img photo={photos.resortValley} className="opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/95 via-forest-deep/80 to-forest-deep/30" />
      </div>
      <Container className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionHeading
            id="leatherwood-title"
            eyebrow="Leatherwood Mountains Resort"
            title="Adventure Outside Your Door"
            tone="dark"
            intro="Cliffside is located within the gated Leatherwood Mountains Resort, giving guests access to miles of trails and outdoor activities while still providing the privacy of a secluded mountain cabin."
          />
        </div>
        <ul className="grid grid-cols-2 gap-3 self-end sm:grid-cols-3 lg:col-span-6">
          {resortActivities.map(({ Icon, label }, i) => (
            <Reveal
              as="li"
              key={label}
              delay={(i % 3) * 80}
              className="flex flex-col gap-3 rounded-2xl border border-white/15 bg-forest-deep/50 p-5 text-ivory transition-colors duration-300 hover:border-copper/70"
            >
              <Icon className="size-6 text-[#d9a27c]" strokeWidth={1.4} aria-hidden="true" />
              <span className="text-[0.95rem] leading-snug font-semibold">{label}</span>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function HighCountry() {
  return (
    <section aria-labelledby="highcountry-title" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="highcountry-title"
          eyebrow="Beyond the Gates"
          title="Explore the High Country"
          intro="Charming mountain towns, scenic byways, and waterfalls are all within an easy drive."
        />
        <ul className="snap-row -mx-5 mt-12 gap-4 scroll-px-5 px-5 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {destinations.map((d, i) => (
            <Reveal as="li" key={d.title} delay={i * 90} className="w-[78%] shrink-0 sm:w-auto">
              <article className="group h-full overflow-hidden rounded-3xl bg-card shadow-[0_24px_48px_-36px_rgba(35,55,45,0.6)] transition-transform duration-500 hover:-translate-y-1.5">
                <div className="aspect-[4/3] overflow-hidden">
                  <Img
                    photo={d.photo}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 80vw"
                    className="transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="eyebrow text-copper-deep">{d.note}</p>
                  <h3 className="mt-2 text-[1.9rem] leading-tight font-medium">{d.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                    {d.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** Stylized, approximate regional map — intentionally not a pin on the exact address. */
function RegionMap() {
  const ridges = [
    "M0 380 C80 340 140 360 220 320 S380 300 460 260 560 250 600 230",
    "M0 300 C90 270 150 290 230 240 S380 210 470 170 560 150 600 140",
    "M0 210 C70 190 160 200 240 160 S390 120 460 90 560 60 600 50",
    "M0 120 C80 100 150 120 230 80 S380 40 450 20",
  ];
  return (
    <svg
      viewBox="0 0 600 440"
      className="h-auto w-full"
      role="img"
      aria-labelledby="map-title map-desc"
    >
      <title id="map-title">Approximate location of Cliffside</title>
      <desc id="map-desc">
        Cliffside is in Leatherwood Mountains, roughly 30 minutes from both Boone and Blowing Rock,
        near the Blue Ridge Parkway.
      </desc>
      <rect width="600" height="440" fill="var(--color-cream)" />
      {ridges.map((d) => (
        <path key={d} d={d} fill="none" stroke="var(--color-stone)" strokeWidth="1.5" />
      ))}

      {/* Blue Ridge Parkway */}
      <path
        d="M0 316 C60 290 90 275 120 261 S165 205 180 179 S250 135 290 124 S350 85 380 69 S480 15 520 0"
        fill="none"
        stroke="var(--color-sage)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="1 9"
      />
      <text
        x="300"
        y="100"
        fill="var(--color-sage-deep)"
        fontSize="13"
        fontWeight="600"
        letterSpacing="2.5"
        transform="rotate(-24 300 100)"
      >
        BLUE RIDGE PARKWAY
      </text>

      {/* Drive lines */}
      <path
        d="M380 302 C300 260 200 170 125 142"
        fill="none"
        stroke="var(--color-copper)"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeDasharray="5 6"
      />
      <path
        d="M380 302 C300 300 200 280 122 254"
        fill="none"
        stroke="var(--color-copper)"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeDasharray="5 6"
      />
      <text x="245" y="200" fill="var(--color-copper-deep)" fontSize="12" fontWeight="600">
        ≈ 30 min
      </text>
      <text x="240" y="296" fill="var(--color-copper-deep)" fontSize="12" fontWeight="600">
        ≈ 30 min
      </text>

      {/* Towns */}
      {[
        { x: 125, y: 142, label: "Boone" },
        { x: 122, y: 254, label: "Blowing Rock" },
      ].map((t) => (
        <g key={t.label}>
          <circle cx={t.x} cy={t.y} r="6" fill="var(--color-forest)" />
          <text
            x={t.x - 14}
            y={t.y + 5}
            textAnchor="end"
            fill="var(--color-forest)"
            fontSize="16"
            fontWeight="700"
          >
            {t.label}
          </text>
        </g>
      ))}

      {/* Leatherwood (approximate area) */}
      <circle cx="380" cy="302" r="46" fill="var(--color-copper)" fillOpacity="0.12" />
      <circle cx="380" cy="302" r="26" fill="var(--color-copper)" fillOpacity="0.18" />
      <circle cx="380" cy="302" r="8" fill="var(--color-copper)" stroke="white" strokeWidth="3" />
      <text
        x="380"
        y="372"
        textAnchor="middle"
        fill="var(--color-forest)"
        fontSize="17"
        fontWeight="700"
      >
        Leatherwood Mountains
      </text>
      <text
        x="380"
        y="392"
        textAnchor="middle"
        fill="var(--color-sage-deep)"
        fontSize="12"
        fontWeight="600"
        letterSpacing="1.5"
      >
        CLIFFSIDE · APPROX. AREA
      </text>

      {/* North arrow */}
      <g transform="translate(560 400)" fill="var(--color-forest)">
        <path d="M0 -18 L6 0 L0 -4 L-6 0 Z" />
        <text y="16" textAnchor="middle" fontSize="11" fontWeight="700">
          N
        </text>
      </g>
    </svg>
  );
}

export function Location() {
  return (
    <section id="location" aria-labelledby="location-title" className="py-24 sm:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            id="location-title"
            eyebrow="Location"
            title="Hidden in the Mountains. Close to Everything."
            intro="Tucked away inside a gated resort, yet an easy drive to the High Country's favorite towns and overlooks."
          />
          <ul className="mt-10 space-y-1">
            {locationPoints.map(({ Icon, title, text }, i) => (
              <Reveal
                as="li"
                key={title}
                delay={i * 70}
                className="flex items-center gap-4 border-b border-stone/70 py-4"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-cream text-copper">
                  <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-forest">{title}</p>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal delay={120} className="lg:col-span-7">
          <div className="overflow-hidden rounded-3xl border border-stone/80 shadow-[0_30px_60px_-40px_rgba(35,55,45,0.6)]">
            <RegionMap />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
