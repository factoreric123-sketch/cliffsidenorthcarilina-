import { createFileRoute } from "@tanstack/react-router";

import { Amenities } from "@/components/site/Amenities";
import { HighCountry, Leatherwood, Location } from "@/components/site/Area";
import { Booking, MobileBookingBar } from "@/components/site/Booking";
import { Faq, FinalCta, Footer, ImportantInfo, PetFriendly } from "@/components/site/Closing";
import { Gallery } from "@/components/site/Gallery";
import { Header } from "@/components/site/Header";
import { Hero, QuickDetails } from "@/components/site/Hero";
import { Reviews } from "@/components/site/Reviews";
import { Experiences, Intro, TheCabin } from "@/components/site/Story";
import { imageUrl, photos } from "@/content/photos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Cliffside — Blue Ridge Mountain Cabin | Leatherwood Mountains, NC",
      },
      {
        name: "description",
        content:
          "Private 2-bedroom, 2-bath cabin for 4 in gated Leatherwood Mountains Resort, NC. Long-range Blue Ridge views, private hot tub, stone gas fireplace, pet friendly. About 30 minutes from Boone and Blowing Rock.",
      },
      { property: "og:title", content: "Cliffside — Blue Ridge Mountain Cabin" },
      {
        property: "og:description",
        content:
          "A private 2BR/2BA mountain cabin in Leatherwood Mountains Resort, NC. Sleeps 4, pet friendly, private hot tub and long-range Blue Ridge views.",
      },
      { property: "og:image", content: imageUrl(photos.mistyRidges.src, 1200) },
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
        className="sr-only z-50 rounded-full bg-forest px-5 py-3 text-ivory focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <QuickDetails />
        <Intro />
        <Experiences />
        <TheCabin />
        <Amenities />
        <Gallery />
        <Leatherwood />
        <HighCountry />
        <Reviews />
        <Booking />
        <ImportantInfo />
        <PetFriendly />
        <Location />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileBookingBar />
    </>
  );
}
