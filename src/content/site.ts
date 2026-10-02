import { Bath, BedDouble, PawPrint, Users, Waves, type LucideIcon } from "lucide-react";

import { photos, type Photo } from "./photos";

/*
 * All site copy lives here. Sources:
 * - Property facts, amenities, rules: the owner's brief and the Leatherwood Mountains listing
 *   (https://leatherwoodmountains.com/vrp/unit/Cliffside-10-15).
 * - Positioning, headlines and arrival wording: the owner's
 *   "Cliffside Landing Page Rewrite & Conversion Recommendations" (Oct 2026).
 * - Pet fee: the Leatherwood "Pet-friendly unit" graphic (public/images/cliffside/28.png).
 * - Reviews and rating: verified guest reviews on the Expedia/Vrbo listing (reviewsUrl below),
 *   checked Oct 1, 2026. Re-check the rating and count before changing them.
 * - Sunset from the deck: a verified guest review and the host's Booking.com description.
 * Don't add claims here without a source.
 */

export const site = {
  name: "Cliffside",
  region: "Leatherwood Mountains, North Carolina",
  locationLine: "Cliffside at Leatherwood Mountains · Ferguson, North Carolina",
  /** Bookings are made on the property manager's site. */
  bookingUrl: "https://leatherwoodmountains.com/vrp/unit/Cliffside-10-15",
  bookingNote:
    "Cliffside is professionally managed and booked through Leatherwood Mountains Resort.",
  manager: "Leatherwood Mountains",
  managerEmail: "info@leatherwoodmountains.com",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Leatherwood+Mountains+Resort%2C+North+Carolina",
};

export const quickFacts: { Icon: LucideIcon; label: string }[] = [
  { Icon: Users, label: "Sleeps 4" },
  { Icon: BedDouble, label: "2 bedrooms" },
  { Icon: Bath, label: "2 baths" },
  { Icon: Waves, label: "Private hot tub" },
  { Icon: PawPrint, label: "Pet friendly" },
];

export const nav = [
  { label: "The cabin", href: "/#cabin" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Leatherwood", href: "/#leatherwood" },
  { label: "Photos", href: "/cliffside" },
  { label: "Plan your stay", href: "/#faq" },
];

export const intro = {
  title: "Two bedrooms. A mountain view all to yourself.",
  text: "Settle into a log cabin for four in gated Leatherwood Mountains Resort. Share breakfast on the porch, explore the trails, then come home to your private hot tub and stone gas fireplace. An upstairs king suite and a main-level queen bedroom give everyone room to unwind.",
  perfectFor: ["Couples' getaways", "Dog-friendly escapes", "Small families", "Outdoor adventures"],
};

export const reasons: { title: string; text: string; photo: Photo }[] = [
  {
    title: "Mountain views",
    text: "Long-range Blue Ridge scenery from the cabin and deck.",
    photo: photos.summerView,
  },
  {
    title: "Private hot tub",
    text: "Soak under the stars while taking in the mountain landscape.",
    photo: photos.hotTubJets,
  },
  {
    title: "Cozy fireplace",
    text: "A warm, inviting place to unwind after a day outside.",
    photo: photos.stoneFireplace,
  },
  {
    title: "Private and peaceful",
    text: "A quiet log cabin in the trees, inside a gated resort.",
    photo: photos.exteriorFront,
  },
  {
    title: "Pet friendly",
    text: "Bring your four-legged family member along.",
    photo: photos.frontPorch,
  },
  {
    title: "Leatherwood Mountains",
    text: "Trails, horseback riding, fishing, pool, tennis and more.",
    photo: photos.horseback,
  },
];

export const reviewSummary = {
  score: "9.6 out of 10",
  count: 42,
  source: "Expedia and Vrbo",
  url: "https://www.expedia.com/Ferguson-Hotels-Pet-Friendly-Cabin.h21863690.Hotel-Information",
};

/** Short excerpts from verified 10/10 reviews on the listing above. */
export const reviews: { quote: string; name: string; stay: string }[] = [
  {
    quote: "Relaxing in the jacuzzi while taking in the view was amazing.",
    name: "Carrie D.",
    stay: "Stayed Oct 2024",
  },
  {
    quote: "The sunset views off the deck were wonderful! Everything was clean and cozy.",
    name: "Jessica G.",
    stay: "Stayed Nov 2024",
  },
  {
    quote: "The cabin is really cozy, private, the view from the porch and hot tub is wonderful.",
    name: "Marius I.",
    stay: "Stayed Aug 2020",
  },
  {
    quote: "We had the perfect time being able to just be us on our anniversary.",
    name: "David W.",
    stay: "Stayed Jan 2025",
  },
];

export const petReview = {
  quote: "My wife, puppy and I had a great stay!",
  name: "Ryan T.",
  stay: "Stayed Nov 2023",
};

export const slowingDown = [
  "Morning coffee overlooking the mountains.",
  "Afternoons exploring Leatherwood.",
  "Sunset from the deck.",
  "A soak in the hot tub.",
  "A fire and a glass of wine at night.",
];

export const cabinTour: { title: string; text: string; photos: Photo[] }[] = [
  {
    title: "Upstairs",
    text: "A private primary suite with a king bed, double vanity, walk-in shower and a two-person whirlpool tub.",
    photos: [photos.primarySuite, photos.primaryBath],
  },
  {
    title: "Main level",
    text: "A comfortable gathering space with the stone gas fireplace, a fully equipped kitchen, and the second bedroom with a queen bed.",
    photos: [photos.livingFireplace, photos.kitchen, photos.guestBedroom],
  },
  {
    title: "Outdoor living",
    text: "Your deck, mountain views and private hot tub are the heart of the experience. The covered porch also has a gas grill and an outdoor dining table.",
    photos: [photos.hotTubView, photos.porchDining],
  },
];

export const leatherwood = {
  title: "Explore Leatherwood Mountains",
  text: "Step beyond the cabin for hiking, horseback riding, fishing and tubing at Leatherwood Mountains Resort. Ask the resort about activity availability, reservations and any additional fees when planning your stay.",
  cards: [
    {
      title: "Horseback riding",
      text: "Explore the mountains on horseback.",
      photo: photos.horseback,
    },
    {
      title: "Trails and adventure",
      text: "Hike, fish, tube and explore.",
      photo: photos.resortMeadow,
    },
    {
      title: "Slow down",
      text: "Enjoy the pool, tennis, scenic drives and peaceful mountain surroundings.",
      photo: photos.resortPool,
    },
  ],
};

export const location = {
  title: "Secluded enough to escape. Close enough to explore.",
  places: [
    {
      place: "Boone",
      time: "About 30 minutes",
      text: "Restaurants, shopping, Appalachian State and downtown.",
    },
    {
      place: "Blowing Rock",
      time: "About 30 minutes",
      text: "Mountain-town dining, shopping and outdoor activities.",
    },
    {
      place: "Blue Ridge Parkway",
      time: "Easy access",
      text: "One of America's most scenic drives.",
    },
  ],
  closing: "Return to your private mountain retreat at the end of the day.",
};

export const pets = {
  title: "A getaway with your pet",
  text: "Bring your companion along for porch mornings and mountain air. Up to two pets are welcome; include them when arranging your reservation.",
  fee: "$75 per pet, up to 2 pets.",
};

export const arrival = [
  "Cliffside has paved access to the cabin. Because you're in the mountains, some roads within Leatherwood are steep and winding. Follow the arrival directions supplied for your reservation.",
  "Use Google Maps to explore the area, but follow your arrival directions for the final drive to the cabin.",
];

export const finalCta = {
  title: "Ready for a mountain escape?",
  text: "Choose your dates on the Leatherwood Mountains booking site to check availability and pricing.",
};

export const amenityHighlights = [
  "Private hot tub",
  "Long-range mountain views",
  "Stone gas fireplace",
  "High-speed fiber optic Wi-Fi",
  "Roku Smart TVs and DVD player",
  "Washer and dryer",
  "Central air and heating",
  "Gas grill",
  "Deck and covered porch",
  "Paved road access",
  "Gated resort community",
  "Private entrance",
];

export const amenityGroups: { title: string; items: string[] }[] = [
  {
    title: "Kitchen and dining",
    items: [
      "Full-size refrigerator and freezer",
      "Oven and stove",
      "Microwave",
      "Dishwasher",
      "Toaster",
      "Drip coffee maker",
      "Single-serve coffee maker",
      "Dishes and utensils",
      "Baking sheet",
      "Wine glasses",
      "Dining table",
    ],
  },
  {
    title: "Living room",
    items: [
      "Stone gas fireplace",
      "Roku Smart TVs",
      "DVD player and movies",
      "Books and games",
      "Telephone",
      "Ceiling fans",
    ],
  },
  {
    title: "Bedrooms and laundry",
    items: [
      "Linens and towels provided",
      "Clothing storage",
      "Hair dryer",
      "Iron",
      "Washer",
      "Dryer",
    ],
  },
  {
    title: "Comfort and safety",
    items: [
      "Central air",
      "Heating",
      "Hot water",
      "Free Wi-Fi",
      "Cleaning products",
      "Enhanced cleaning practices",
      "Smoke detectors",
      "Carbon monoxide detectors",
      "Fire extinguisher",
      "Hospital nearby",
    ],
  },
  {
    title: "Outside",
    items: [
      "Private hot tub",
      "Deck and covered porch",
      "Outdoor seating",
      "Gas grill",
      "Outdoor lighting",
      "Parking",
    ],
  },
];

export const policies: { term: string; detail: string }[] = [
  { term: "Check-in", detail: "After 4:00 PM" },
  { term: "Check-out", detail: "Before 11:00 AM" },
  { term: "Minimum age", detail: "25 to rent" },
  { term: "Smoking", detail: "Not allowed" },
  { term: "Events and large gatherings", detail: "Not allowed" },
  { term: "Pets", detail: "Welcome. $75 per pet, up to 2 pets." },
  {
    term: "Bookings within 24 hours",
    detail: "Need verbal confirmation by phone before arrival.",
  },
  {
    term: "Security cameras",
    detail:
      "The resort has cameras at the gated entrance and in common areas, and individual cabins may have cameras on the outside. None point at private areas such as hot tub porches.",
  },
];

export const faqs: { q: string; a: string }[] = [
  { q: "Is Cliffside pet friendly?", a: "Yes. The pet fee is $75 per pet, with up to 2 pets." },
  { q: "Does the cabin have a hot tub?", a: "Yes, a private hot tub on the covered porch." },
  { q: "Does the cabin have Wi-Fi?", a: "Yes, high-speed fiber optic Wi-Fi." },
  {
    q: "How many guests can stay?",
    a: "Up to 4: a king bed in the upstairs suite and a queen bed in the main-level bedroom.",
  },
  {
    q: "Is the road to the cabin paved?",
    a: "Yes, Cliffside has paved access. Some roads within Leatherwood are steep and winding, so please follow the arrival directions we provide rather than GPS alone.",
  },
  {
    q: "Is the property inside a gated community?",
    a: "Yes. Cliffside is inside the gated Leatherwood Mountains Resort.",
  },
  { q: "How far is Cliffside from Boone?", a: "About 30 minutes by car." },
  { q: "How far is Cliffside from Blowing Rock?", a: "About 30 minutes by car." },
  { q: "Does the cabin have air conditioning?", a: "Yes, central air and heating." },
  {
    q: "Does the kitchen have everything needed to cook?",
    a: "It's fully equipped: full-size appliances, a dishwasher, coffee makers, dishes, and utensils.",
  },
  { q: "Is there a washer and dryer?", a: "Yes, both are in the cabin." },
  {
    q: "What time is check-in and check-out?",
    a: "Check-in is after 4:00 PM. Check-out is before 11:00 AM.",
  },
  {
    q: "How do I book?",
    a: "Cliffside is managed and booked by Leatherwood Mountains. Use Check availability to see dates and book on their site, or email info@leatherwoodmountains.com.",
  },
];
