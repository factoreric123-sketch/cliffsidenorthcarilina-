import { differenceInCalendarDays, format, startOfToday } from "date-fns";
import { Minus, Plus } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import type { DateRange } from "react-day-picker";

import { Calendar } from "@/components/ui/calendar";
import { photos } from "@/content/photos";
import { site } from "@/content/site";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

import { buttonStyles, Container, Img, Reveal } from "./primitives";

const MAX_GUESTS = 4;
const MAX_PETS = 2;

function Stepper({
  label,
  hint,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  hint: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-4">
      <div>
        <p className="font-semibold text-forest">{label}</p>
        <p className="text-sm text-muted-foreground">{hint}</p>
      </div>
      <div className="flex items-center gap-3" role="group" aria-label={label}>
        <button
          type="button"
          onClick={() => onChange(value - 1)}
          disabled={value <= min}
          aria-label={`Fewer ${label.toLowerCase()}`}
          className="grid size-10 place-items-center rounded-full border border-stone text-forest transition-colors hover:border-forest disabled:opacity-35 disabled:hover:border-stone"
        >
          <Minus className="size-4" />
        </button>
        <output
          aria-live="polite"
          className="w-5 text-center text-lg font-semibold tabular-nums text-forest"
        >
          {value}
        </output>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          disabled={value >= max}
          aria-label={`More ${label.toLowerCase()}`}
          className="grid size-10 place-items-center rounded-full border border-stone text-forest transition-colors hover:border-forest disabled:opacity-35 disabled:hover:border-stone"
        >
          <Plus className="size-4" />
        </button>
      </div>
    </div>
  );
}

function DateField({ label, date }: { label: string; date: Date | undefined }) {
  return (
    <div className="rounded-xl border border-stone bg-ivory px-4 py-3">
      <p className="eyebrow text-[0.62rem] text-muted-foreground">{label}</p>
      <p className={cn("mt-1 font-semibold", date ? "text-forest" : "text-muted-foreground/80")}>
        {date ? format(date, "EEE, MMM d") : "Add date"}
      </p>
    </div>
  );
}

export function BookingForm({ className }: { className?: string }) {
  const isMobile = useIsMobile();
  const [range, setRange] = useState<DateRange | undefined>();
  const [guests, setGuests] = useState(2);
  const [pets, setPets] = useState(0);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const nights = range?.from && range.to ? differenceInCalendarDays(range.to, range.from) : 0;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!range?.from || !range.to || nights < 1) {
      setError("Please choose your check-in and check-out dates on the calendar.");
      return;
    }
    setError("");
    const subject = `Availability request: ${format(range.from, "MMM d")} – ${format(range.to, "MMM d, yyyy")}`;
    const body = [
      "Hello,",
      "",
      "I'd like to check availability at Cliffside:",
      "",
      `Check-in: ${format(range.from, "EEEE, MMMM d, yyyy")}`,
      `Check-out: ${format(range.to, "EEEE, MMMM d, yyyy")} (${nights} night${nights > 1 ? "s" : ""})`,
      `Guests: ${guests}`,
      `Pets: ${pets}`,
      "",
      "Thank you!",
    ].join("\n");
    window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form
      onSubmit={submit}
      noValidate
      className={cn(
        "rounded-3xl bg-card p-5 text-charcoal shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)] sm:p-8",
        className,
      )}
    >
      <div className="grid grid-cols-2 gap-3">
        <DateField label="Check-in" date={range?.from} />
        <DateField label="Check-out" date={range?.to} />
      </div>

      <div className="mt-5 flex justify-center rounded-2xl border border-stone/70 bg-ivory/60 px-1 py-3 sm:px-4">
        <Calendar
          mode="range"
          selected={range}
          onSelect={(r) => {
            setRange(r);
            setError("");
            setSent(false);
          }}
          numberOfMonths={isMobile ? 1 : 2}
          disabled={{ before: startOfToday() }}
          startMonth={startOfToday()}
          excludeDisabled
          className="w-full bg-transparent p-0 [--cell-size:2.6rem] sm:[--cell-size:2.75rem]"
          classNames={{
            root: "w-full",
            months: "relative flex flex-col gap-8 md:flex-row",
            caption_label: "font-display text-xl font-semibold text-forest select-none",
          }}
        />
      </div>
      <p className="mt-3 text-center text-sm text-muted-foreground" aria-live="polite">
        {nights > 0
          ? `${nights} night${nights > 1 ? "s" : ""} selected`
          : range?.from
            ? "Now select your check-out date"
            : "Select your check-in date"}
        {range?.from && (
          <button
            type="button"
            onClick={() => setRange(undefined)}
            className="ml-3 font-semibold text-copper-deep underline-offset-4 hover:underline"
          >
            Clear dates
          </button>
        )}
      </p>

      <div className="mt-4 divide-y divide-stone/70 border-y border-stone/70">
        <Stepper
          label="Guests"
          hint={`Up to ${MAX_GUESTS} guests`}
          value={guests}
          min={1}
          max={MAX_GUESTS}
          onChange={setGuests}
        />
        <Stepper
          label="Pets"
          hint="$75 per pet · max 2"
          value={pets}
          min={0}
          max={MAX_PETS}
          onChange={setPets}
        />
      </div>

      {error && (
        <p role="alert" className="mt-4 text-sm font-medium text-copper-deep">
          {error}
        </p>
      )}

      <button
        type="submit"
        className={cn(buttonStyles.base, buttonStyles.copper, "mt-6 w-full py-4 text-base")}
      >
        Check Availability
      </button>
      <p className="mt-3 text-center text-xs leading-relaxed text-muted-foreground">
        {sent
          ? "Your email app should open with your request ready to send."
          : "No payment needed to check availability. Minimum rental age 25."}
      </p>
    </form>
  );
}

export function Booking() {
  return (
    <section
      id="availability"
      aria-labelledby="availability-title"
      className="bg-forest py-24 text-ivory sm:py-32"
    >
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow text-stone">Availability</p>
            <h2
              id="availability-title"
              className="mt-4 text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.02] font-medium text-ivory"
            >
              Ready for a Mountain Escape?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ivory/80">
              Choose your dates and we'll confirm availability and your total directly.
            </p>
            <p className="mt-6 text-sm font-semibold tracking-[0.12em] text-stone uppercase">
              2 Bedrooms · Sleeps 4 · Pet Friendly
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-10 hidden overflow-hidden rounded-3xl lg:block">
            <div className="aspect-[4/5]">
              <Img photo={photos.porchDining} sizes="33vw" />
            </div>
          </Reveal>
        </div>

        <Reveal delay={100} className="lg:col-span-8">
          <BookingForm />
        </Reveal>
      </Container>
    </section>
  );
}

/** Persistent bottom bar on phones/tablets; hides at the top of the page and over the booking section. */
export function MobileBookingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const booking = document.getElementById("availability");
    let bookingInView = false;
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.6 && !bookingInView);
    const io = new IntersectionObserver(([e]) => {
      bookingInView = e?.isIntersecting ?? false;
      update();
    });
    if (booking) io.observe(booking);
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 border-t border-stone/80 bg-ivory/97 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-12px_30px_-20px_rgba(0,0,0,0.4)] transition-transform duration-500 lg:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!visible}
    >
      <div className="mx-auto flex max-w-xl items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="font-display text-xl leading-tight font-semibold text-forest">Cliffside</p>
          <p className="truncate text-xs text-muted-foreground">Sleeps 4 · Pet Friendly</p>
        </div>
        <a
          href="#availability"
          tabIndex={visible ? 0 : -1}
          className={cn(buttonStyles.base, buttonStyles.copper, "shrink-0 px-5 py-3 text-sm")}
        >
          Check Availability
        </a>
      </div>
    </div>
  );
}
