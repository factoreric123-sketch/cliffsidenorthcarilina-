import * as Dialog from "@radix-ui/react-dialog";
import { Ban, Cctv, Clock, KeyRound, PawPrint, Phone, X } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { photos } from "@/content/photos";
import { faqs, importantInfo, nav, petPolicy, site } from "@/content/site";
import { cn } from "@/lib/utils";

import { buttonStyles, Container, Img, Reveal, SectionHeading } from "./primitives";

export function ImportantInfo() {
  const times = [
    { Icon: Clock, label: "Check-In", value: importantInfo.checkIn },
    { Icon: Clock, label: "Check-Out", value: importantInfo.checkOut },
    { Icon: KeyRound, label: "Minimum Rental Age", value: importantInfo.minimumAge },
  ];

  return (
    <section aria-labelledby="info-title" className="py-24 sm:py-32">
      <Container>
        <SectionHeading id="info-title" eyebrow="Good to Know" title="Important Information" />

        <dl className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-stone/80 bg-stone/80 sm:grid-cols-3">
          {times.map(({ Icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-4 bg-card p-6 sm:flex-col sm:items-start sm:p-8"
            >
              <Icon className="size-6 shrink-0 text-copper" strokeWidth={1.4} aria-hidden="true" />
              <div>
                <dt className="eyebrow text-muted-foreground">{label}</dt>
                <dd className="mt-1 font-display text-[1.9rem] leading-tight font-medium text-forest">
                  {value}
                </dd>
              </div>
            </div>
          ))}
        </dl>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-stone/80 bg-card p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <Ban className="size-5 text-copper" strokeWidth={1.6} aria-hidden="true" />
              <h3 className="font-display text-2xl font-medium">House Rules</h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {importantInfo.houseRules.map((r) => (
                <li
                  key={r}
                  className="rounded-full bg-cream px-4 py-2 text-sm font-semibold text-forest"
                >
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-6 flex gap-3 text-[0.95rem] leading-relaxed text-muted-foreground">
              <Phone className="mt-1 size-4 shrink-0 text-sage-deep" aria-hidden="true" />
              {importantInfo.lateBooking}
            </p>
          </Reveal>
          <Reveal delay={100} className="rounded-3xl border border-stone/80 bg-card p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <Cctv className="size-5 text-copper" strokeWidth={1.6} aria-hidden="true" />
              <h3 className="font-display text-2xl font-medium">Security</h3>
            </div>
            <ul className="mt-5 space-y-3 text-[0.95rem] leading-relaxed text-muted-foreground">
              {importantInfo.security.map((s) => (
                <li key={s} className="flex gap-3">
                  <span
                    className="mt-[0.6em] size-1 shrink-0 rounded-full bg-sage"
                    aria-hidden="true"
                  />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function PetFriendly() {
  return (
    <section aria-labelledby="pets-title" className="pb-24 sm:pb-32">
      <Container>
        <Reveal className="grid overflow-hidden rounded-3xl bg-cream md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto md:min-h-[420px]">
            <Img photo={photos.dogPorch} sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <PawPrint className="size-7 text-copper" strokeWidth={1.4} aria-hidden="true" />
            <h2
              id="pets-title"
              className="mt-5 text-[clamp(2.2rem,4vw,3.25rem)] leading-[1.05] font-medium"
            >
              Bring Your Best Friend
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Cliffside is pet friendly, so your dog can enjoy the mountain getaway too.
            </p>
            <p className="mt-2 text-sm font-semibold text-forest">
              Pet fee applies ($75 per pet, up to 2 pets).
            </p>

            <Dialog.Root>
              <Dialog.Trigger
                className={cn(buttonStyles.base, buttonStyles.outline, "mt-8 self-start")}
              >
                View Pet Policy
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
                <Dialog.Content className="fixed inset-x-4 top-1/2 z-50 mx-auto max-w-md -translate-y-1/2 rounded-3xl bg-ivory p-8 shadow-2xl data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
                  <Dialog.Close
                    className="absolute top-4 right-4 grid size-10 place-items-center rounded-full text-forest hover:bg-cream"
                    aria-label="Close"
                  >
                    <X className="size-5" />
                  </Dialog.Close>
                  <PawPrint className="size-6 text-copper" strokeWidth={1.4} aria-hidden="true" />
                  <Dialog.Title className="mt-4 font-display text-3xl font-medium text-forest">
                    Pet Policy
                  </Dialog.Title>
                  <Dialog.Description className="sr-only">
                    Guidelines for bringing pets to Cliffside
                  </Dialog.Description>
                  <ul className="mt-5 space-y-3 text-[0.98rem] leading-relaxed text-charcoal">
                    {petPolicy.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span
                          className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-copper"
                          aria-hidden="true"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Dialog.Close asChild>
                    <a
                      href="#availability"
                      className={cn(buttonStyles.base, buttonStyles.copper, "mt-8 w-full")}
                    >
                      Check Availability
                    </a>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function Faq() {
  return (
    <section aria-labelledby="faq-title" className="bg-cream py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            id="faq-title"
            eyebrow="FAQ"
            title="Questions, Answered"
            intro="Everything you might want to know before your stay."
          />
        </div>
        <Reveal delay={100} className="lg:col-span-8">
          <Accordion type="single" collapsible className="border-t border-stone">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-stone">
                <AccordionTrigger className="gap-6 py-6 text-left font-display text-[1.35rem] leading-snug font-medium text-forest hover:text-copper-deep hover:no-underline sm:text-2xl [&>svg]:size-5 [&>svg]:text-copper">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="max-w-2xl pb-6 text-base leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </section>
  );
}

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Img photo={photos.resortSunset} />
        <div className="absolute inset-0 bg-black/45" />
      </div>
      <Container className="flex min-h-[80svh] flex-col items-center justify-center py-28 text-center">
        <Reveal className="max-w-3xl">
          <h2
            id="cta-title"
            className="text-[clamp(2.6rem,7vw,5.25rem)] leading-[0.98] font-medium text-white"
          >
            Your Mountain Escape Is Waiting
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Wake up to Blue Ridge Mountain views and experience the peaceful side of North
            Carolina's High Country.
          </p>
          <a
            href="#availability"
            className={cn(buttonStyles.base, buttonStyles.copper, "mt-10 px-10 py-4 text-base")}
          >
            Book Cliffside
          </a>
        </Reveal>
      </Container>
    </section>
  );
}

export function Footer() {
  const links = [
    ...nav.filter((n) => n.href !== "#home"),
    { label: "Contact", href: `mailto:${site.contactEmail}` },
  ];
  return (
    <footer className="bg-forest pt-20 pb-28 text-ivory lg:pb-12">
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="font-display text-4xl font-semibold tracking-[0.18em]">CLIFFSIDE</p>
            <p className="mt-2 text-sm tracking-wide text-ivory/70">{site.region}</p>
            <p className="mt-6 text-sm font-medium tracking-[0.1em] text-stone uppercase">
              {site.summary}
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-14 gap-y-3 sm:grid-cols-4 lg:grid-cols-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-ivory/80 transition-colors hover:text-[#d9a27c]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="#availability"
            className={cn(buttonStyles.base, buttonStyles.copper, "self-start")}
          >
            Book Your Stay
          </a>
        </div>
        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-ivory/55 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Cliffside. All rights reserved.</p>
          <p>A private mountain cabin in the Blue Ridge.</p>
        </div>
      </Container>
    </footer>
  );
}
