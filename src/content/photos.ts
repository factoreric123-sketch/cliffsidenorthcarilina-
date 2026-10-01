/**
 * Site photography.
 * Cliffside photos live in /public/images/cliffside (originals) with resized WebP copies in
 * /public/images/cliffside/web (NN-640/1280/1920.webp) — regenerate those if an original changes.
 * The few remaining Unsplash images (dog, nearby towns, Parkway, waterfall) are stock placeholders.
 */

export type GalleryCategory =
  | "Mountain Views"
  | "Exterior"
  | "Living Areas"
  | "Bedrooms"
  | "Kitchen"
  | "Outdoor Spaces"
  | "Hot Tub";

export type Photo = {
  src: string;
  alt: string;
  category?: GalleryCategory;
};

const LOCAL_PREFIX = "/images/cliffside/web/";
const LOCAL_WIDTHS = [640, 1280, 1920];

const cabin = (n: string) => `${LOCAL_PREFIX}${n}`;
const unsplash = (id: string) => `https://images.unsplash.com/${id}`;

export const photos = {
  // Cliffside
  hotTubView: {
    src: cabin("01"),
    alt: "Private hot tub on the deck overlooking long-range mountain views",
    category: "Hot Tub",
  },
  exteriorFront: {
    src: cabin("06"),
    alt: "Cliffside log cabin with green metal roof and dormers among the trees",
    category: "Exterior",
  },
  exteriorFrontAlt: {
    src: cabin("02"),
    alt: "Front of Cliffside with its covered porch",
    category: "Exterior",
  },
  exteriorRear: {
    src: cabin("27"),
    alt: "Rear of the cabin with its two levels of decks",
    category: "Exterior",
  },
  summerView: {
    src: cabin("04"),
    alt: "Summer view across green Blue Ridge ridgelines",
    category: "Mountain Views",
  },
  livingFireplace: {
    src: cabin("13"),
    alt: "Living room with stone gas fireplace, Smart TV, and comfortable seating",
    category: "Living Areas",
  },
  livingStairs: {
    src: cabin("14"),
    alt: "Living room with sofa, mountain-view windows, and stairs to the primary suite",
    category: "Living Areas",
  },
  stoneFireplace: {
    src: cabin("03"),
    alt: "Stone gas fireplace with armchairs and windows onto the trees",
    category: "Living Areas",
  },
  dining: {
    src: cabin("10"),
    alt: "Round dining table beside windows with a view of the woods",
    category: "Living Areas",
  },
  kitchen: {
    src: cabin("08"),
    alt: "Fully equipped kitchen with stainless steel appliances and granite counters",
    category: "Kitchen",
  },
  kitchenSink: {
    src: cabin("09"),
    alt: "Kitchen sink beneath a window with pine cabinetry",
    category: "Kitchen",
  },
  kitchenGalley: {
    src: cabin("11"),
    alt: "Kitchen with dishwasher and refrigerator",
    category: "Kitchen",
  },
  kitchenRange: {
    src: cabin("12"),
    alt: "Kitchen range, microwave, and coffee station",
    category: "Kitchen",
  },
  primarySuite: {
    src: cabin("19"),
    alt: "Upper-level primary suite with king bed, sitting area, and TV",
    category: "Bedrooms",
  },
  primarySuiteBed: {
    src: cabin("18"),
    alt: "King bed in the primary suite with a sleigh-style frame",
    category: "Bedrooms",
  },
  primaryBath: {
    src: cabin("20"),
    alt: "Primary bath with double vanity and two-person whirlpool tub",
    category: "Bedrooms",
  },
  guestBedroom: {
    src: cabin("15"),
    alt: "Main-level guest bedroom with queen bed and windows",
    category: "Bedrooms",
  },
  guestBathVanity: {
    src: cabin("16"),
    alt: "Bathroom vanity with a round mirror",
    category: "Bedrooms",
  },
  guestBath: {
    src: cabin("17"),
    alt: "Bathroom with tub and shower combination",
    category: "Bedrooms",
  },
  frontPorch: {
    src: cabin("07"),
    alt: "Covered front porch along the log cabin",
    category: "Outdoor Spaces",
  },
  porchDining: {
    src: cabin("21"),
    alt: "Covered porch with outdoor dining table and grill",
    category: "Outdoor Spaces",
  },
  hotTubPorch: {
    src: cabin("22"),
    alt: "Hot tub and Adirondack chairs on the covered porch",
    category: "Hot Tub",
  },
  deck: {
    src: cabin("23"),
    alt: "Open deck along the side of the cabin",
    category: "Outdoor Spaces",
  },
  porchWalk: {
    src: cabin("24"),
    alt: "Covered porch with a view toward the mountains",
    category: "Outdoor Spaces",
  },
  deckView: {
    src: cabin("25"),
    alt: "Adirondack chairs on the deck facing the mountains",
    category: "Mountain Views",
  },
  hotTubJets: {
    src: cabin("26"),
    alt: "Hot tub bubbling under a clear blue sky with mountain views",
    category: "Hot Tub",
  },
  ridgeView: {
    src: cabin("29"),
    alt: "Wooded ridge with layered mountains beyond",
    category: "Mountain Views",
  },

  // Leatherwood Mountains Resort
  mistyRidges: {
    src: cabin("30"),
    alt: "Sun breaking over misty Blue Ridge ridgelines above the Leatherwood valley",
    category: "Mountain Views",
  },
  resortValley: {
    src: cabin("36"),
    alt: "Aerial view of the Leatherwood Mountains valley and pond",
    category: "Mountain Views",
  },
  resortSunset: {
    src: cabin("41"),
    alt: "Sunset over Leatherwood Mountains Resort and the surrounding ridges",
    category: "Mountain Views",
  },
  resortMeadow: {
    src: cabin("31"),
    alt: "Creek-side meadow at Leatherwood Mountains Resort",
    category: "Outdoor Spaces",
  },
  horseback: {
    src: cabin("34"),
    alt: "Guests on a horseback ride through a meadow at Leatherwood Mountains",
    category: "Outdoor Spaces",
  },
  pavilion: {
    src: cabin("35"),
    alt: "Picnic pavilion on the resort grounds",
    category: "Outdoor Spaces",
  },
  lodge: {
    src: cabin("38"),
    alt: "The Leatherwood lodge at sunset",
    category: "Outdoor Spaces",
  },
  resortPool: {
    src: cabin("40"),
    alt: "Leatherwood Mountains Resort's communal pool",
    category: "Outdoor Spaces",
  },
  restaurant: {
    src: cabin("37"),
    alt: "The resort's on-site restaurant dining room",
  },
  deer: {
    src: cabin("39"),
    alt: "A white-tailed deer in a field at Leatherwood",
  },

  // Stock placeholders (no matching property photos yet)
  dogPorch: {
    src: unsplash("photo-1619999311576-76fc4e1089c6"),
    alt: "A dog relaxing on a wooden porch bench",
  },
  autumnRoad: {
    src: unsplash("photo-1667684595629-4310c10d5972"),
    alt: "Autumn foliage along a winding mountain road",
  },
  blowingRockSunset: {
    src: unsplash("photo-1693930851049-a6e45df27b6a"),
    alt: "Sunset from a High Country overlook",
  },
  parkway: {
    src: unsplash("photo-1641489009958-49df5c15769e"),
    alt: "The Blue Ridge Parkway curving along the mountainside",
  },
  waterfall: {
    src: unsplash("photo-1606323269981-8e901a83728c"),
    alt: "Cascading waterfall framed by autumn trees",
  },
} satisfies Record<string, Photo>;

/** Picks a sized image URL for a target display width. */
export function imageUrl(src: string, width: number) {
  if (src.startsWith(LOCAL_PREFIX)) {
    const w = LOCAL_WIDTHS.find((lw) => lw >= width) ?? LOCAL_WIDTHS[LOCAL_WIDTHS.length - 1];
    return `${src}-${w}.webp`;
  }
  if (src.startsWith("https://images.unsplash.com/")) {
    return `${src}?auto=format&fit=crop&w=${width}&q=72`;
  }
  return src;
}

export function imageSrcSet(src: string) {
  if (src.startsWith(LOCAL_PREFIX)) {
    return LOCAL_WIDTHS.map((w) => `${src}-${w}.webp ${w}w`).join(", ");
  }
  if (src.startsWith("https://images.unsplash.com/")) {
    return [480, 768, 1080, 1600, 2200].map((w) => `${imageUrl(src, w)} ${w}w`).join(", ");
  }
  return undefined;
}

/** Order shown in the gallery — the first five fill the featured grid. */
export const galleryPhotos: Photo[] = [
  photos.hotTubView,
  photos.livingFireplace,
  photos.exteriorFront,
  photos.primarySuite,
  photos.deckView,
  photos.summerView,
  photos.stoneFireplace,
  photos.livingStairs,
  photos.dining,
  photos.kitchen,
  photos.kitchenSink,
  photos.kitchenRange,
  photos.kitchenGalley,
  photos.primarySuiteBed,
  photos.primaryBath,
  photos.guestBedroom,
  photos.guestBathVanity,
  photos.guestBath,
  photos.hotTubPorch,
  photos.hotTubJets,
  photos.porchDining,
  photos.frontPorch,
  photos.deck,
  photos.porchWalk,
  photos.exteriorFrontAlt,
  photos.exteriorRear,
  photos.ridgeView,
  photos.mistyRidges,
  photos.resortValley,
  photos.resortSunset,
  photos.horseback,
  photos.resortMeadow,
  photos.pavilion,
  photos.lodge,
  photos.resortPool,
];

export const galleryCategories: ("All" | GalleryCategory)[] = [
  "All",
  "Mountain Views",
  "Exterior",
  "Living Areas",
  "Bedrooms",
  "Kitchen",
  "Outdoor Spaces",
  "Hot Tub",
];
