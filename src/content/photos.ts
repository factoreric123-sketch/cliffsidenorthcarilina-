/**
 * Site photography: the 41 Cliffside listing photos.
 * Originals are in /public/images/cliffside; resized WebP copies are in
 * /public/images/cliffside/web (NN-640/1280/1920.webp). Regenerate those if an original changes.
 */

export type GalleryCategory =
  "The view" | "The cabin" | "The bedrooms" | "Outdoor living" | "Leatherwood";

export type Photo = {
  src: string;
  alt: string;
  category?: GalleryCategory;
};

const LOCAL_PREFIX = "/images/cliffside/web/";
const LOCAL_WIDTHS = [640, 1280, 1920];

const cabin = (n: string) => `${LOCAL_PREFIX}${n}`;

export const photos = {
  // Cliffside
  hotTubView: {
    src: cabin("01"),
    alt: "Private hot tub on the deck overlooking long-range mountain views",
    category: "Outdoor living",
  },
  exteriorFront: {
    src: cabin("06"),
    alt: "Cliffside log cabin with green metal roof and dormers among the trees",
    category: "The cabin",
  },
  exteriorFrontAlt: {
    src: cabin("02"),
    alt: "Front of Cliffside with its covered porch",
    category: "The cabin",
  },
  exteriorRear: {
    src: cabin("27"),
    alt: "Rear of the cabin with its two levels of decks",
    category: "The cabin",
  },
  summerView: {
    src: cabin("04"),
    alt: "Summer view across green Blue Ridge ridgelines",
    category: "The view",
  },
  livingFireplace: {
    src: cabin("13"),
    alt: "Living room with stone gas fireplace, Smart TV, and comfortable seating",
    category: "The cabin",
  },
  livingStairs: {
    src: cabin("14"),
    alt: "Living room with sofa, mountain-view windows, and stairs to the primary suite",
    category: "The cabin",
  },
  stoneFireplace: {
    src: cabin("03"),
    alt: "Stone gas fireplace with armchairs and windows onto the trees",
    category: "The cabin",
  },
  dining: {
    src: cabin("10"),
    alt: "Round dining table beside windows with a view of the woods",
    category: "The cabin",
  },
  kitchen: {
    src: cabin("08"),
    alt: "Fully equipped kitchen with stainless steel appliances and granite counters",
    category: "The cabin",
  },
  kitchenSink: {
    src: cabin("09"),
    alt: "Kitchen sink beneath a window with pine cabinetry",
    category: "The cabin",
  },
  kitchenGalley: {
    src: cabin("11"),
    alt: "Kitchen with dishwasher and refrigerator",
    category: "The cabin",
  },
  kitchenRange: {
    src: cabin("12"),
    alt: "Kitchen range, microwave, and coffee station",
    category: "The cabin",
  },
  primarySuite: {
    src: cabin("19"),
    alt: "Upper-level primary suite with king bed, sitting area, and TV",
    category: "The bedrooms",
  },
  primarySuiteBed: {
    src: cabin("18"),
    alt: "King bed in the primary suite with a sleigh-style frame",
    category: "The bedrooms",
  },
  primaryBath: {
    src: cabin("20"),
    alt: "Primary bath with double vanity and two-person whirlpool tub",
    category: "The bedrooms",
  },
  guestBedroom: {
    src: cabin("15"),
    alt: "Main-level guest bedroom with queen bed and windows",
    category: "The bedrooms",
  },
  guestBathVanity: {
    src: cabin("16"),
    alt: "Bathroom vanity with a round mirror",
    category: "The bedrooms",
  },
  guestBath: {
    src: cabin("17"),
    alt: "Bathroom with tub and shower combination",
    category: "The bedrooms",
  },
  frontPorch: {
    src: cabin("07"),
    alt: "Covered front porch along the log cabin",
    category: "Outdoor living",
  },
  porchDining: {
    src: cabin("21"),
    alt: "Covered porch with outdoor dining table and grill",
    category: "Outdoor living",
  },
  hotTubPorch: {
    src: cabin("22"),
    alt: "Hot tub and Adirondack chairs on the covered porch",
    category: "Outdoor living",
  },
  deck: {
    src: cabin("23"),
    alt: "Open deck along the side of the cabin",
    category: "Outdoor living",
  },
  porchWalk: {
    src: cabin("24"),
    alt: "Covered porch with a view toward the mountains",
    category: "Outdoor living",
  },
  deckView: {
    src: cabin("25"),
    alt: "Adirondack chairs on the deck facing the mountains",
    category: "The view",
  },
  hotTubJets: {
    src: cabin("26"),
    alt: "Hot tub bubbling under a clear blue sky with mountain views",
    category: "Outdoor living",
  },
  ridgeView: {
    src: cabin("29"),
    alt: "Wooded ridge with layered mountains beyond",
    category: "The view",
  },

  // Leatherwood Mountains Resort
  mistyRidges: {
    src: cabin("30"),
    alt: "Sun breaking over misty Blue Ridge ridgelines above the Leatherwood valley",
    category: "The view",
  },
  resortValley: {
    src: cabin("36"),
    alt: "Aerial view of the Leatherwood Mountains valley and pond",
    category: "Leatherwood",
  },
  resortSunset: {
    src: cabin("41"),
    alt: "Sunset over Leatherwood Mountains Resort and the surrounding ridges",
    category: "Leatherwood",
  },
  resortMeadow: {
    src: cabin("31"),
    alt: "Creek-side meadow at Leatherwood Mountains Resort",
    category: "Leatherwood",
  },
  horseback: {
    src: cabin("34"),
    alt: "Guests on a horseback ride through a meadow at Leatherwood Mountains",
    category: "Leatherwood",
  },
  pavilion: {
    src: cabin("35"),
    alt: "Picnic pavilion on the resort grounds",
    category: "Leatherwood",
  },
  lodge: {
    src: cabin("38"),
    alt: "The Leatherwood lodge at sunset",
    category: "Leatherwood",
  },
  resortPool: {
    src: cabin("40"),
    alt: "Leatherwood Mountains Resort's communal pool",
    category: "Leatherwood",
  },
  restaurant: {
    src: cabin("37"),
    alt: "The resort's on-site restaurant dining room",
    category: "Leatherwood",
  },
  deer: {
    src: cabin("39"),
    alt: "A white-tailed deer in a field at Leatherwood",
    category: "Leatherwood",
  },
  welcomeSign: {
    src: cabin("05"),
    alt: "Leatherwood Mountains welcome sign at the resort entrance",
    category: "Leatherwood",
  },
  giftShop: {
    src: cabin("32"),
    alt: "The Leatherwood Mountains general store and gift shop",
    category: "Leatherwood",
  },
  horse: {
    src: cabin("33"),
    alt: "A rider with one of the Leatherwood stable horses",
    category: "Leatherwood",
  },
  petPolicyGraphic: {
    src: cabin("28"),
    alt: "Pet-friendly unit: pets welcome for an additional $75 per pet, 2 pet maximum",
    category: "Leatherwood",
  },
} satisfies Record<string, Photo>;

/** Picks a sized image URL for a target display width. */
export function imageUrl(src: string, width: number) {
  if (src.startsWith(LOCAL_PREFIX)) {
    const w = LOCAL_WIDTHS.find((lw) => lw >= width) ?? LOCAL_WIDTHS[LOCAL_WIDTHS.length - 1];
    return `${src}-${w}.webp`;
  }
  return src;
}

export function imageSrcSet(src: string) {
  if (src.startsWith(LOCAL_PREFIX)) {
    return LOCAL_WIDTHS.map((w) => `${src}-${w}.webp ${w}w`).join(", ");
  }
  return undefined;
}

/** Order of the 41 photos on the Photos page: the view and the hot tub first. */
export const galleryPhotos: Photo[] = [
  photos.hotTubView,
  photos.deckView,
  photos.hotTubJets,
  photos.summerView,
  photos.ridgeView,
  photos.mistyRidges,
  photos.hotTubPorch,
  photos.porchDining,
  photos.frontPorch,
  photos.deck,
  photos.porchWalk,
  photos.exteriorFront,
  photos.livingFireplace,
  photos.stoneFireplace,
  photos.livingStairs,
  photos.dining,
  photos.kitchen,
  photos.kitchenSink,
  photos.kitchenRange,
  photos.kitchenGalley,
  photos.exteriorFrontAlt,
  photos.exteriorRear,
  photos.primarySuite,
  photos.primarySuiteBed,
  photos.primaryBath,
  photos.guestBedroom,
  photos.guestBathVanity,
  photos.guestBath,
  photos.horseback,
  photos.resortValley,
  photos.resortSunset,
  photos.resortMeadow,
  photos.pavilion,
  photos.lodge,
  photos.resortPool,
  photos.restaurant,
  photos.giftShop,
  photos.horse,
  photos.deer,
  photos.welcomeSign,
  photos.petPolicyGraphic,
];

export const galleryCategories: ("All" | GalleryCategory)[] = [
  "All",
  "The view",
  "Outdoor living",
  "The cabin",
  "The bedrooms",
  "Leatherwood",
];
