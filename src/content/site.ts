import {
  AirVent,
  Armchair,
  Bath,
  BedDouble,
  BookOpen,
  Car,
  Coffee,
  Compass,
  DoorOpen,
  Fence,
  Fish,
  Flame,
  Footprints,
  Goal,
  LandPlot,
  LifeBuoy,
  MapPin,
  Mountain,
  MountainSnow,
  PawPrint,
  Route,
  Ruler,
  ShieldCheck,
  Sofa,
  Trees,
  Tv,
  Users,
  UtensilsCrossed,
  WashingMachine,
  Waves,
  Wifi,
  type LucideIcon,
} from "lucide-react";

import { photos, type Photo } from "./photos";

export const site = {
  name: "Cliffside",
  area: "Leatherwood Mountains",
  region: "Leatherwood Mountains, North Carolina",
  summary: "2 Bedrooms · 2 Bathrooms · Sleeps 4 · Pet Friendly",
  /**
   * TODO: replace with the real booking inbox before launch.
   * Every "Check Availability" request and the footer Contact link go here.
   */
  contactEmail: "bookings@example.com",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "The Cabin", href: "#cabin" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Reviews", href: "#reviews" },
  { label: "Availability", href: "#availability" },
];

type IconItem = { Icon: LucideIcon; label: string };

export const quickDetails: IconItem[] = [
  { Icon: BedDouble, label: "2 Bedrooms" },
  { Icon: Bath, label: "2 Bathrooms" },
  { Icon: Users, label: "Sleeps 4" },
  { Icon: Ruler, label: "2,279 sq. ft." },
  { Icon: PawPrint, label: "Pet Friendly" },
  { Icon: Waves, label: "Private Hot Tub" },
  { Icon: Mountain, label: "Mountain Views" },
];

export const experiences: { title: string; text: string; photo: Photo }[] = [
  {
    title: "Wake Up to Mountain Views",
    text: "Enjoy long-range Blue Ridge Mountain views directly from the property.",
    photo: photos.deckView,
  },
  {
    title: "Relax in the Hot Tub",
    text: "Unwind outdoors in your private hot tub after a day exploring the mountains.",
    photo: photos.hotTubJets,
  },
  {
    title: "Cozy Up by the Fire",
    text: "Relax beside the cabin's beautiful stone gas fireplace.",
    photo: photos.stoneFireplace,
  },
  {
    title: "Explore Leatherwood",
    text: "Enjoy hiking, horseback riding, fishing, tubing, swimming, and other activities inside the resort.",
    photo: photos.horseback,
  },
];

export const rooms: {
  eyebrow: string;
  title: string;
  intro: string;
  features: string[];
  photo: Photo;
}[] = [
  {
    eyebrow: "Upper Level",
    title: "Primary Suite",
    intro: "A private retreat at the top of the cabin.",
    features: [
      "King bed",
      "Double vanity",
      "Walk-in shower",
      "Two-person whirlpool tub",
      "Private and comfortable atmosphere",
    ],
    photo: photos.primarySuite,
  },
  {
    eyebrow: "Main Level",
    title: "Guest Bedroom",
    intro: "Comfortable, bright, and steps from everything.",
    features: ["Queen bed", "Mountain views", "Convenient access to the main living areas"],
    photo: photos.guestBedroom,
  },
  {
    eyebrow: "Gather",
    title: "Living Area",
    intro: "Room to settle in after a day outdoors.",
    features: [
      "Spacious living room",
      "Stone gas fireplace",
      "Comfortable seating",
      "Roku Smart TV",
      "Mountain cabin atmosphere",
    ],
    photo: photos.livingFireplace,
  },
  {
    eyebrow: "Cook & Dine",
    title: "Kitchen & Dining",
    intro: "Everything you need for slow breakfasts and long dinners.",
    features: [
      "Fully equipped kitchen",
      "Dining table",
      "Full-size appliances",
      "Coffee makers",
      "Everything needed for meals at the cabin",
    ],
    photo: photos.kitchen,
  },
];

export const amenityHighlights: IconItem[] = [
  { Icon: Waves, label: "Private Hot Tub" },
  { Icon: MountainSnow, label: "Long-Range Mountain Views" },
  { Icon: Flame, label: "Stone Gas Fireplace" },
  { Icon: Wifi, label: "High-Speed Fiber Optic Wi-Fi" },
  { Icon: PawPrint, label: "Pet Friendly" },
  { Icon: Car, label: "Paved Road Access" },
  { Icon: ShieldCheck, label: "Gated Resort Community" },
  { Icon: Fence, label: "Spacious Deck & Covered Porch" },
  { Icon: UtensilsCrossed, label: "Outdoor Grill" },
  { Icon: WashingMachine, label: "Washer & Dryer" },
  { Icon: AirVent, label: "Central Air & Heating" },
  { Icon: DoorOpen, label: "Private Entrance" },
];

export const amenityCategories: { Icon: LucideIcon; title: string; items: string[] }[] = [
  {
    Icon: Coffee,
    title: "Kitchen",
    items: [
      "Full Kitchen",
      "Dining Room Table",
      "Coffee Maker",
      "Drip Coffee Maker",
      "Single Serve Coffee Maker",
      "Dishwasher",
      "Refrigerator",
      "Freezer",
      "Oven",
      "Stove",
      "Microwave",
      "Toaster",
      "Dishes & Utensils",
      "Baking Sheet",
      "Wine Glasses",
    ],
  },
  {
    Icon: Sofa,
    title: "Living Room",
    items: [
      "Living Room",
      "Fireplace",
      "Television",
      "Air Conditioning",
      "Washer",
      "Dryer",
      "Telephone",
    ],
  },
  {
    Icon: BookOpen,
    title: "Entertainment",
    items: ["Roku Smart TVs", "Books", "Games", "Movies", "DVD Player"],
  },
  {
    Icon: Armchair,
    title: "Standard Amenities",
    items: [
      "Free Wi-Fi",
      "Linens Provided",
      "Towels Provided",
      "Hair Dryer",
      "Iron",
      "Heating",
      "Central Air",
      "Hot Water",
      "Ceiling Fan",
      "Clothing Storage",
      "Cleaning Products",
      "Private Entrance",
      "Resort Access",
      "Enhanced Cleaning Practices",
      "Smoke Detectors",
      "Carbon Monoxide Detectors",
      "Fire Extinguisher",
      "Hospital Nearby",
    ],
  },
  {
    Icon: Trees,
    title: "Outdoor",
    items: [
      "Private Hot Tub",
      "Mountain Views",
      "Mountain Setting",
      "Deck / Patio",
      "Outdoor Seating",
      "Outdoor Grill",
      "BBQ Area",
      "Outdoor Lighting",
      "Parking",
      "Hiking",
      "Walking",
      "Horseback Riding",
      "Fishing",
      "Swimming",
      "Communal Pool",
      "Tubing",
      "Tennis",
      "Basketball Court",
      "Playground",
      "Pond",
      "Meadow",
      "Forests",
      "Bicycles",
      "Bird Watching",
      "Autumn Foliage",
      "Scenic Drives",
      "Sight Seeing",
      "Snow Sledding",
    ],
  },
  {
    Icon: Compass,
    title: "Nearby Attractions",
    items: [
      "Restaurants",
      "Waterfalls",
      "Winery Tours",
      "Skiing / Snowboarding",
      "Rafting",
      "Boating",
      "Eco Tourism",
      "Antiquing",
      "Outlet Mall Shopping",
      "Museums",
      "Cinemas",
      "Festivals",
      "Tourist Attractions",
    ],
  },
];

export const resortActivities: IconItem[] = [
  { Icon: Trees, label: "Horseback Riding" },
  { Icon: Footprints, label: "Hiking Trails" },
  { Icon: Fish, label: "Fishing" },
  { Icon: LifeBuoy, label: "Tubing" },
  { Icon: Waves, label: "Swimming" },
  { Icon: LandPlot, label: "Tennis" },
  { Icon: Goal, label: "Basketball" },
  { Icon: Route, label: "Scenic Drives" },
  { Icon: UtensilsCrossed, label: "On-Site Restaurant When Open" },
];

export const destinations: { title: string; note: string; text: string; photo: Photo }[] = [
  {
    title: "Boone",
    note: "≈ 30 minutes",
    text: "Downtown shops, dining, and the energy of a classic mountain college town.",
    photo: photos.autumnRoad,
  },
  {
    title: "Blowing Rock",
    note: "≈ 30 minutes",
    text: "A charming village of galleries, cafés, and sweeping overlooks.",
    photo: photos.blowingRockSunset,
  },
  {
    title: "Blue Ridge Parkway",
    note: "Easy access",
    text: "One of America's most scenic drives, with overlooks at every turn.",
    photo: photos.parkway,
  },
  {
    title: "Waterfalls & Trails",
    note: "Across the High Country",
    text: "Explore the natural beauty of North Carolina's High Country.",
    photo: photos.waterfall,
  },
];

/**
 * PLACEHOLDER REVIEWS — illustrative copy only.
 * Replace with real guest reviews (e.g. copied from your Airbnb/VRBO listing) before launch.
 * Add or remove entries freely; the section adapts to any count.
 */
export const reviews: {
  name: string;
  location: string;
  date: string;
  rating: number;
  text: string;
}[] = [
  {
    name: "Guest Name",
    location: "City, State",
    date: "Month Year",
    rating: 5,
    text: "The views from the deck were even better than the photos. We spent every evening in the hot tub watching the ridgelines fade — exactly the quiet getaway we needed.",
  },
  {
    name: "Guest Name",
    location: "City, State",
    date: "Month Year",
    rating: 5,
    text: "Spotless, comfortable, and thoughtfully stocked. Our dog loved it as much as we did, and the paved road made arriving easy.",
  },
  {
    name: "Guest Name",
    location: "City, State",
    date: "Month Year",
    rating: 5,
    text: "The primary suite and whirlpool tub were a treat. Close enough to Boone for dinner, but it felt a world away.",
  },
  {
    name: "Guest Name",
    location: "City, State",
    date: "Month Year",
    rating: 5,
    text: "Cozy fireplace, fast Wi-Fi, and a kitchen with everything we needed. We're already planning our fall trip back.",
  },
];

export const importantInfo = {
  checkIn: "After 4:00 PM",
  checkOut: "Before 11:00 AM",
  minimumAge: "25",
  houseRules: ["No smoking", "No events", "No large gatherings"],
  lateBooking: "Reservations made within 24 hours of arrival require verbal confirmation by phone.",
  security: [
    "Leatherwood Mountains uses surveillance or recording devices around the gated entrance and common areas for security.",
    "Individual properties may also have exterior security cameras.",
    "Cameras are not directed toward private areas such as hot tub porches or other private guest spaces.",
  ],
};

export const petPolicy = [
  "Dogs are welcome at Cliffside.",
  "Pet fee of $75 per pet.",
  "Maximum of 2 pets.",
  "Please include the number of pets when you request your dates.",
];

export const locationPoints = [
  {
    Icon: MapPin,
    title: "Leatherwood Mountains",
    text: "Gated resort community in the High Country",
  },
  { Icon: Compass, title: "Boone", text: "Approximately 30 minutes" },
  { Icon: Compass, title: "Blowing Rock", text: "Approximately 30 minutes" },
  { Icon: Car, title: "Blue Ridge Parkway", text: "Easy access for scenic drives" },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "Is Cliffside pet friendly?",
    a: "Yes. Dogs are welcome at Cliffside. The pet fee is $75 per pet, with a maximum of 2 pets.",
  },
  {
    q: "Does the cabin have a hot tub?",
    a: "Yes. Cliffside has a private hot tub outdoors, perfect after a day exploring the mountains.",
  },
  {
    q: "Does the cabin have Wi-Fi?",
    a: "Yes. The cabin has high-speed fiber optic Wi-Fi, plus Roku Smart TVs.",
  },
  {
    q: "How many guests can stay?",
    a: "Cliffside sleeps up to 4 guests across two bedrooms — a king primary suite and a queen guest bedroom.",
  },
  {
    q: "Is the road to the cabin paved?",
    a: "Yes. Cliffside has paved road access, making arrival easy throughout the year.",
  },
  {
    q: "Is the property inside a gated community?",
    a: "Yes. Cliffside is located inside the gated Leatherwood Mountains Resort.",
  },
  {
    q: "How far is Cliffside from Boone?",
    a: "Boone is approximately 30 minutes away by car.",
  },
  {
    q: "How far is Cliffside from Blowing Rock?",
    a: "Blowing Rock is approximately 30 minutes away by car.",
  },
  {
    q: "Does the cabin have air conditioning?",
    a: "Yes. The cabin has central air conditioning and heating.",
  },
  {
    q: "Does the kitchen have everything needed to cook?",
    a: "Yes. The fully equipped kitchen has full-size appliances, a dishwasher, coffee makers, dishes, and utensils.",
  },
  {
    q: "Is there a washer and dryer?",
    a: "Yes. A washer and dryer are available for guests.",
  },
  {
    q: "What time is check-in and check-out?",
    a: "Check-in is after 4:00 PM and check-out is before 11:00 AM.",
  },
];
