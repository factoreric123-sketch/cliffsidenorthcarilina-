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
          "All 41 photos of Cliffside, a two-bedroom log cabin with a private hot tub inside Leatherwood Mountains Resort, NC.",
      },
    ],
  }),
  component: CliffsidePage,
});

function CliffsidePage() {
  return (
    <>
      <Header solid current="/cliffside" />
      <PropertyPage />
      <Footer />
      <MobileBookingBar />
    </>
  );
}
