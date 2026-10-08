import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { nav, site } from "@/content/site";
import { cn } from "@/lib/utils";

import { button, Container } from "./primitives";

/**
 * Transparent over the home hero, solid forest once scrolled (or always, with `solid`).
 * `current` marks the nav item for the page being viewed.
 */
export function Header({ solid = false, current }: { solid?: boolean; current?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showBooking, setShowBooking] = useState(solid);

  useEffect(() => {
    const action = document.getElementById("hero-booking");
    if (solid || !action) {
      setShowBooking(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) setShowBooking(!entry.isIntersecting && entry.boundingClientRect.top < 72);
      },
      { rootMargin: "-72px 0px 0px 0px" },
    );
    observer.observe(action);
    return () => observer.disconnect();
  }, [solid]);

  useEffect(() => {
    const onScroll = () => {
      const photo = document.getElementById("hero-photo");
      setScrolled(photo ? photo.getBoundingClientRect().bottom <= 72 : window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled || solid ? "bg-forest" : "bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6 sm:h-18">
        <a href="/" className="leading-none text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.65)]">
          <span className="text-xl font-extrabold tracking-[0.2em]">CLIFFSIDE</span>
          <span className="sr-only">, home</span>
        </a>

        <nav aria-label="Primary" className={cn("hidden", (scrolled || solid) && "lg:block")}>
          <ul className="flex items-center gap-5">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={current === item.href ? "page" : undefined}
                  className="text-[0.9375rem] font-medium text-white/85 underline-offset-8 transition-colors hover:text-white hover:underline aria-[current=page]:text-white aria-[current=page]:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {/* Hidden while the hero's own button is on screen: one primary action per view. */}
          <a
            href={site.bookingUrl}
            tabIndex={showBooking ? undefined : -1}
            aria-hidden={!showBooking}
            className={cn(
              button.primary,
              "hidden py-2.5 sm:inline-flex transition-opacity",
              !showBooking && "invisible pointer-events-none opacity-0",
            )}
          >
            Check availability
          </a>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger
              className={cn(
                "-mr-2 grid size-11 place-items-center rounded-lg bg-black/20 text-white hover:bg-black/35",
                (scrolled || solid) && "lg:hidden",
              )}
              aria-label="Open menu"
            >
              <Menu className="size-6" strokeWidth={1.5} />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-forest px-6 pt-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-ivory shadow-xl duration-300 data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:animate-in data-[state=open]:slide-in-from-right">
                <div className="flex h-12 items-center justify-between">
                  <Dialog.Title className="text-xl font-extrabold tracking-[0.2em] text-ivory">
                    CLIFFSIDE
                  </Dialog.Title>
                  <Dialog.Close
                    className="-mr-2 grid size-11 place-items-center rounded-lg hover:bg-white/10"
                    aria-label="Close menu"
                  >
                    <X className="size-6" strokeWidth={1.5} />
                  </Dialog.Close>
                </div>
                <Dialog.Description className="sr-only">Site navigation</Dialog.Description>
                <nav aria-label="Mobile" className="mt-6 flex-1">
                  <ul>
                    {nav.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          onClick={() => setOpen(false)}
                          aria-current={current === item.href ? "page" : undefined}
                          className="block border-b border-white/15 py-4 text-lg font-medium text-ivory/90 hover:text-white aria-[current=page]:text-white"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <a href={site.bookingUrl} className={cn(button.primary, "w-full py-3.5")}>
                  Check availability
                </a>
                <p className="type-caption mt-3 text-center text-ivory/75">
                  Booking opens on leatherwoodmountains.com
                </p>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </Container>
    </header>
  );
}
