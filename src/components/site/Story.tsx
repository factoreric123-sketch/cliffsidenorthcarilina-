import { Check } from "lucide-react";

import { photos } from "@/content/photos";
import { experiences, rooms } from "@/content/site";
import { cn } from "@/lib/utils";

import { Container, Img, Reveal, SectionHeading } from "./primitives";

export function Intro() {
  return (
    <section aria-labelledby="intro-title" className="py-24 sm:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <SectionHeading
            id="intro-title"
            eyebrow="Welcome to Cliffside"
            title="Your Private Mountain Escape"
          />
          <Reveal
            delay={120}
            className="mt-8 space-y-5 text-[1.05rem] leading-[1.8] text-muted-foreground"
          >
            <p>
              Welcome to Cliffside, a private mountain cabin located in the gated Leatherwood
              Mountains Resort. Surrounded by the beauty of North Carolina's High Country, Cliffside
              combines peaceful seclusion, long-range Blue Ridge Mountain views, and the comforts of
              home.
            </p>
            <p>
              Spend mornings overlooking the mountains, afternoons exploring the trails, and
              evenings relaxing in the private hot tub or beside the stone gas fireplace.
            </p>
            <p>
              Whether you're planning a romantic getaway, a small family trip, or a mountain escape
              with your dog, Cliffside offers a comfortable and relaxing place to slow down.
            </p>
          </Reveal>
        </div>

        <Reveal delay={150} className="relative lg:col-span-7">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_30px_60px_-30px_rgba(35,55,45,0.45)] sm:aspect-[5/4]">
            <Img photo={photos.exteriorFront} sizes="(min-width: 1024px) 58vw, 100vw" />
          </div>
          <div className="absolute -bottom-8 -left-4 hidden w-56 overflow-hidden rounded-2xl border-[6px] border-ivory shadow-xl sm:block lg:-left-12 lg:w-64">
            <div className="aspect-[4/5]">
              <Img photo={photos.hotTubView} sizes="260px" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function Experiences() {
  return (
    <section aria-labelledby="experiences-title" className="bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="experiences-title"
          eyebrow="The Cliffside Experience"
          title="Days Made for Slowing Down"
          align="center"
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:gap-6">
          {experiences.map((exp, i) => (
            <Reveal as="li" key={exp.title} delay={(i % 2) * 120}>
              <article className="group relative isolate aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-[5/6] lg:aspect-[4/3]">
                <Img
                  photo={exp.photo}
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="-z-10 transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="flex h-full flex-col justify-end p-7 sm:p-9">
                  <h3 className="text-3xl leading-tight font-medium text-white sm:text-[2.1rem]">
                    {exp.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[0.98rem] leading-relaxed text-white/85">
                    {exp.text}
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

export function TheCabin() {
  return (
    <section id="cabin" aria-labelledby="cabin-title" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="cabin-title"
          eyebrow="The Cabin"
          title="Comfort in the Mountains"
          intro="Two bedrooms, two baths, and 2,279 square feet of space designed for rest."
          align="center"
        />

        <div className="mt-16 space-y-20 sm:mt-20 lg:space-y-28">
          {rooms.map((room, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={room.title}
                className="grid items-center gap-9 lg:grid-cols-12 lg:gap-16"
              >
                <Reveal className={cn("lg:col-span-7", flip && "lg:order-2")}>
                  <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_30px_60px_-34px_rgba(35,55,45,0.5)]">
                    <Img
                      photo={room.photo}
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="transition-transform duration-[1.4s] ease-out hover:scale-[1.03]"
                    />
                  </div>
                </Reveal>
                <Reveal delay={120} className={cn("lg:col-span-5", flip && "lg:order-1")}>
                  <p className="eyebrow text-copper-deep">{room.eyebrow}</p>
                  <h3 className="mt-3 text-4xl font-medium sm:text-[2.75rem]">{room.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{room.intro}</p>
                  <ul className="mt-7 divide-y divide-stone/70 border-y border-stone/70">
                    {room.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 py-3.5 text-[0.98rem] text-charcoal"
                      >
                        <Check
                          className="size-4 shrink-0 text-copper"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
