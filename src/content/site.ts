import { photos, type Photo } from "./photos";

/*
 * All site copy lives here. Sources:
 * - Property facts, amenities, rules: the owner's brief and the Leatherwood Mountains listing
 *   (https://leatherwoodmountains.com/vrp/unit/Cliffside-10-15).
 * - Pet fee: the Leatherwood "Pet-friendly unit" graphic (public/images/cliffside/28.png).
 * Don't add claims here without a source.
 */

export const site = {
  name: "Cliffside",
  region: "Leatherwood Mountains, North Carolina",
  /** Bookings are made on the property manager's site. */
  bookingUrl: "https://leatherwoodmountains.com/vrp/unit/Cliffside-10-15",
  manager: "Leatherwood Mountains",
  managerEmail: "info@leatherwoodmountains.com",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Leatherwood+Mountains+Resort%2C+North+Carolina",
};

export const nav = [
  { label: "The cabin", href: "/#cabin" },
  { label: "Photos", href: "/cliffside" },
  { label: "Amenities", href: "/#amenities" },
  { label: "Location", href: "/#location" },
  { label: "Questions", href: "/#faq" },
];

export const about = [
  "Cliffside is a two-story log cabin inside Leatherwood Mountains Resort, a gated community in North Carolina's High Country. From the deck and the covered porch you look out over long-range Blue Ridge views.",
  "It's set up for a couple or a small family, and pets are welcome. The cabin has paved road access, so getting there is easy in any season.",
];

export const facts: { term: string; detail: string }[] = [
  { term: "Bedrooms", detail: "2: a king upstairs, a queen on the main level" },
  { term: "Bathrooms", detail: "2 full" },
  { term: "Sleeps", detail: "4" },
  { term: "Size", detail: "2,279 sq ft" },
  { term: "Pets", detail: "Welcome, $75 per pet, up to 2" },
  { term: "Check-in / out", detail: "After 4:00 PM / before 11:00 AM" },
];

export const floors: { title: string; rooms: { name: string; text: string }[]; photos: Photo[] }[] =
  [
    {
      title: "Upper level",
      rooms: [
        {
          name: "Primary suite",
          text: "King bed, double vanity, walk-in shower, and a two-person whirlpool tub.",
        },
      ],
      photos: [photos.primarySuite, photos.primaryBath],
    },
    {
      title: "Main level",
      rooms: [
        {
          name: "Living room",
          text: "Set around a stone gas fireplace, with a Roku Smart TV and room for everyone to sit.",
        },
        {
          name: "Kitchen and dining",
          text: "Full-size appliances, a dishwasher, and both drip and single-serve coffee makers. The dining table is by the windows.",
        },
        {
          name: "Guest bedroom",
          text: "Queen bed and mountain views, a few steps from the living room and kitchen.",
        },
      ],
      photos: [photos.livingFireplace, photos.kitchen, photos.dining, photos.guestBedroom],
    },
    {
      title: "Porch and deck",
      rooms: [
        {
          name: "Covered porch",
          text: "The private hot tub, Adirondack chairs, a gas grill, and an outdoor dining table.",
        },
        { name: "Deck", text: "Uncovered, facing the mountains." },
      ],
      photos: [photos.hotTubView, photos.porchDining, photos.deckView],
    },
  ];

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

export const resortActivities = [
  "Horseback riding",
  "Hiking trails",
  "Fishing",
  "Tubing",
  "Swimming in the communal pool",
  "Tennis",
  "Basketball court",
  "Playground",
  "Pond",
  "On-site restaurant, when open",
];

export const resortPhotos: { photo: Photo; caption: string }[] = [
  { photo: photos.horseback, caption: "Horseback riding" },
  { photo: photos.resortPool, caption: "The communal pool" },
  { photo: photos.restaurant, caption: "The on-site restaurant" },
];

export const driveTimes: { place: string; time: string }[] = [
  { place: "Boone", time: "About 30 minutes" },
  { place: "Blowing Rock", time: "About 30 minutes" },
  { place: "Blue Ridge Parkway", time: "Easy access" },
];

export const nearby =
  "Around the area you'll find waterfalls, winery tours, skiing and snowboarding, rafting, boating, antique shops, outlet shopping, museums, festivals, and restaurants.";

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
  { q: "Is the road to the cabin paved?", a: "Yes, the cabin has paved road access." },
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
