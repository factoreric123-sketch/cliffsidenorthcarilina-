import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/site/Closing";
import { Header } from "@/components/site/Header";
import { PropertyPage } from "@/components/site/Property";

export const Route = createFileRoute("/cliffside")({
  head: () => ({
    meta: [
      { title: "Photos & Details — Cliffside | Leatherwood Mountains, NC" },
      {
        name: "description",
        content:
          "Browse all photos of Cliffside, a 2-bedroom, 2-bath pet-friendly cabin with a private hot tub in Leatherwood Mountains Resort, NC.",
      },
    ],
  }),
  component: CliffsidePage,
});

function CliffsidePage() {
  return (
    <>
      <Header solid />
      <PropertyPage />
      <Footer />
    </>
  );
}
