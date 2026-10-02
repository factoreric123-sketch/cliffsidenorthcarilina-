import { createFileRoute } from "@tanstack/react-router";

import { Footer, MobileBookingBar } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { PropertyPage } from "@/components/site/Property";

export const Route = createFileRoute("/cliffside")({
  head: () => ({
    meta: [
      { title: "Photos — Cliffside, Leatherwood Mountains, NC" },
      {
        name: "description",
        content:
          "Photos of Cliffside, a two-bedroom log cabin with a private hot tub inside Leatherwood Mountains Resort, NC.",
      },
    ],
  }),
  component: CliffsidePage,
});

function CliffsidePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-lg bg-forest px-4 py-2 text-ivory focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Header solid current="/cliffside" />
      <PropertyPage />
      <Footer />
      <MobileBookingBar alwaysVisible />
    </>
  );
}
