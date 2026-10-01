import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { nav, site } from "@/content/site";
import { cn } from "@/lib/utils";

import { buttonStyles, Container } from "./primitives";

function Logo() {
  return (
    <a
      href="#home"
      className="group flex flex-col leading-none"
      aria-label="Cliffside — back to top"
    >
      <span className="font-display text-[1.6rem] font-semibold tracking-[0.18em] text-white">
        CLIFFSIDE
      </span>
      <span className="mt-1 text-[0.62rem] font-medium tracking-[0.32em] text-white/75 uppercase">
        {site.area}
      </span>
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector(n.href))
      .filter((el): el is Element => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,padding] duration-500",
        scrolled
          ? "bg-forest/97 py-3 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)]"
          : "bg-gradient-to-b from-black/40 to-transparent py-5",
      )}
    >
      <Container className="flex items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-5 xl:gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active === item.href ? "true" : undefined}
                  className={cn(
                    "relative py-2 text-[0.82rem] font-medium tracking-wide whitespace-nowrap text-white/80 transition-colors hover:text-white",
                    "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-copper after:transition-transform after:duration-300 hover:after:scale-x-100",
                    active === item.href && "text-white after:scale-x-100",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#availability"
            className={cn(
              buttonStyles.base,
              buttonStyles.copper,
              "px-4 py-2.5 text-sm whitespace-nowrap sm:px-5",
            )}
          >
            <span className="sm:hidden">Book</span>
            <span className="hidden sm:inline">Book Your Stay</span>
          </a>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger
              className="grid size-11 place-items-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-6" strokeWidth={1.5} />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-forest px-7 pt-6 pb-[max(2rem,env(safe-area-inset-bottom))] text-ivory shadow-2xl duration-500 data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:animate-in data-[state=open]:slide-in-from-right">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="font-display text-2xl font-semibold tracking-[0.18em] text-ivory">
                    CLIFFSIDE
                  </Dialog.Title>
                  <Dialog.Close
                    className="grid size-11 place-items-center rounded-full hover:bg-white/10"
                    aria-label="Close menu"
                  >
                    <X className="size-6" strokeWidth={1.5} />
                  </Dialog.Close>
                </div>
                <Dialog.Description className="sr-only">Site navigation</Dialog.Description>
                <nav aria-label="Mobile" className="mt-10 flex-1">
                  <ul className="space-y-1">
                    {nav.map((item, i) => (
                      <li
                        key={item.href}
                        className="animate-in fade-in-0 slide-in-from-right-4 fill-mode-both duration-500"
                        style={{ animationDelay: `${120 + i * 45}ms` }}
                      >
                        <a
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "block border-b border-white/10 py-4 font-display text-3xl transition-colors hover:text-stone",
                            active === item.href ? "text-white" : "text-ivory/80",
                          )}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <a
                  href="#availability"
                  onClick={() => setOpen(false)}
                  className={cn(buttonStyles.base, buttonStyles.copper, "w-full py-4")}
                >
                  Book Your Stay
                </a>
                <p className="mt-4 text-center text-xs tracking-wide text-ivory/60">
                  {site.summary}
                </p>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </Container>
    </header>
  );
}
