import { useEffect, useState } from "react";

import { nav, site } from "@/content/site";
import { cn } from "@/lib/utils";

import { button, Container } from "./primitives";

export function Footer() {
  return (
    <footer className="bg-forest pt-14 pb-24 text-ivory sm:pb-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="text-xl font-extrabold tracking-[0.2em]">CLIFFSIDE</p>
            <p className="mt-1 text-ivory/80">{site.region}</p>
            <p className="mt-6 max-w-[44ch] text-ivory/90">
              {site.bookingNote} For questions about dates or your stay, email{" "}
              <a
                href={`mailto:${site.managerEmail}`}
                className={cn(button.link, "text-ivory decoration-white/40")}
              >
                {site.managerEmail}
              </a>
              .
            </p>
            <a href={site.bookingUrl} className={cn(button.primary, "mt-6")}>
              Check availability
            </a>
          </div>
          <nav aria-label="Footer" className="md:col-span-3 md:col-start-10">
            <ul className="space-y-2">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-ivory/85 hover:text-white hover:underline">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/#rules" className="text-ivory/85 hover:text-white hover:underline">
                  House rules
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="mt-12 border-t border-white/15 pt-6 text-sm text-ivory/70">
          © {new Date().getFullYear()} Cliffside
        </p>
      </Container>
    </footer>
  );
}

/** Booking link pinned to the bottom of small screens, once the hero has scrolled away. */
export function MobileBookingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 border-t border-stone bg-ivory px-5 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-transform duration-300 sm:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!visible}
    >
      <div className="flex items-center justify-between gap-4">
        <p className="type-caption">Booking opens on leatherwoodmountains.com</p>
        <a
          href={site.bookingUrl}
          tabIndex={visible ? 0 : -1}
          className={cn(button.primary, "shrink-0 px-4 py-2.5")}
        >
          Check availability
        </a>
      </div>
    </div>
  );
}
