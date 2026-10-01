import { createFileRoute } from "@tanstack/react-router";

import { Footer, MobileBookingBar } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import {
  About,
  Amenities,
  Cabin,
  Faq,
  HouseRules,
  Location,
  Resort,
} from "@/components/site/Sections";
import { imageUrl, photos } from "@/content/photos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Cliffside — Log cabin in Leatherwood Mountains, NC",
      },
      {
        name: "description",
        content:
          "Cliffside is a two-bedroom, two-bath log cabin for up to 4 inside the gated Leatherwood Mountains Resort, NC. Private hot tub, stone gas fireplace, long-range Blue Ridge views, pets welcome. About 30 minutes from Boone and Blowing Rock.",
      },
      { property: "og:title", content: "Cliffside — Log cabin in Leatherwood Mountains, NC" },
      {
        property: "og:description",
        content:
          "Two-bedroom log cabin inside Leatherwood Mountains Resort, NC. Sleeps 4, private hot tub, pets welcome.",
      },
      { property: "og:image", content: imageUrl(photos.mistyRidges.src, 1280) },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-lg bg-forest px-4 py-2 text-ivory focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Cabin />
        <Amenities />
        <Resort />
        <Location />
        <HouseRules />
        <Faq />
      </main>
      <Footer />
      <MobileBookingBar />
    </>
  );
}
