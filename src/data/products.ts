export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: "complete-meals" | "starter-boxes" | "raw-bones" | "natural-treats" | "supplements";
  protein: string;
  price: number;
  compareAtPrice?: number;
  weight: string;
  ratio: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  isPopular?: boolean;
  lifeStage: "All Life Stages" | "Adult" | "Puppy" | "Senior";
  description: string;
  ingredients: string[];
  AnalyticalConstituents: {
    protein: string;
    fat: string;
    moisture: string;
    ash: string;
    fibre: string;
  };
  accentColor: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "grass-fed-beef-complete",
    slug: "grass-fed-beef-complete-80-10-10",
    name: "Grass-Fed Beef Complete",
    subtitle: "80/10/10 Prey Model Raw Mince",
    category: "complete-meals",
    protein: "Beef",
    price: 4.25,
    weight: "500g",
    ratio: "80% Meat · 10% Bone · 10% Offal",
    rating: 4.9,
    reviewsCount: 342,
    badge: "Best Seller",
    isPopular: true,
    lifeStage: "All Life Stages",
    description:
      " ethically sourced 100% British pasture-raised beef muscle meat, finely ground bone, nutrient-dense beef liver, and kidney. Zero grains, fillers, or synthetic preservatives.",
    ingredients: [
      "80% British Beef (Chuck, Heart, Tripe, Tongue)",
      "10% Finely Ground Beef Bone",
      "5% Beef Liver",
      "5% Beef Kidney",
    ],
    AnalyticalConstituents: {
      protein: "16.8%",
      fat: "11.2%",
      moisture: "68.5%",
      ash: "2.4%",
      fibre: "0.4%",
    },
    accentColor: "from-terracotta-700 to-terracotta-900",
  },
  {
    id: "free-range-turkey-duck",
    slug: "free-range-turkey-duck-complete",
    name: "Free-Range Turkey & Duck",
    subtitle: "Complete Balanced BARF Formula",
    category: "complete-meals",
    protein: "Poultry",
    price: 4.5,
    weight: "500g",
    ratio: "80% Meat · 10% Bone · 10% Offal",
    rating: 4.8,
    reviewsCount: 218,
    badge: "Hypoallergenic",
    isPopular: true,
    lifeStage: "All Life Stages",
    description:
      "Lean free-range turkey paired with rich duck meat and natural chondroitin-packed cartilage to support healthy joints and shiny coats.",
    ingredients: [
      "50% Free-Range Turkey Breast & Thigh",
      "30% Whole Duck Meat & Heart",
      "10% Duck & Turkey Bone",
      "5% Turkey Liver",
      "5% Duck Kidney",
    ],
    AnalyticalConstituents: {
      protein: "17.4%",
      fat: "9.8%",
      moisture: "69.2%",
      ash: "2.6%",
      fibre: "0.3%",
    },
    accentColor: "from-forest-700 to-forest-900",
  },
  {
    id: "wild-scottish-venison",
    slug: "wild-scottish-venison-complete",
    name: "Wild Scottish Venison & Blueberry",
    subtitle: "Novel Protein Superfood Blend",
    category: "complete-meals",
    protein: "Venison",
    price: 5.4,
    weight: "500g",
    ratio: "80% Meat · 10% Bone · 10% Offal + Botanicals",
    rating: 5.0,
    reviewsCount: 164,
    badge: "Sensitive Tummies",
    isPopular: true,
    lifeStage: "Adult",
    description:
      "Wild-harvested Scottish highland venison blended with organic hedgerow blueberries and kelp for dogs with food sensitivities or allergies.",
    ingredients: [
      "80% Wild Venison Haunch & Trim",
      "10% Ground Venison Bone",
      "5% Venison Liver",
      "3% Venison Spleen",
      "2% Organic Blueberries & Hebridean Kelp",
    ],
    AnalyticalConstituents: {
      protein: "19.1%",
      fat: "7.4%",
      moisture: "70.1%",
      ash: "2.2%",
      fibre: "0.6%",
    },
    accentColor: "from-amber-800 to-stone-900",
  },
  {
    id: "atlantic-salmon-tripe",
    slug: "atlantic-salmon-green-tripe",
    name: "Wild Salmon & Green Lamb Tripe",
    subtitle: "Omega-3 & Probiotic Gut Booster",
    category: "complete-meals",
    protein: "Fish & Lamb",
    price: 4.65,
    weight: "500g",
    ratio: "80% Meat/Tripe · 10% Bone · 10% Offal",
    rating: 4.9,
    reviewsCount: 289,
    badge: "Skin & Coat",
    isPopular: true,
    lifeStage: "All Life Stages",
    description:
      "Unbleached grass-fed green lamb tripe packed with natural digestive enzymes and lactobacillus, combined with oily wild Atlantic salmon.",
    ingredients: [
      "55% Unbleached Green Lamb Tripe",
      "25% Whole Wild Atlantic Salmon",
      "10% Ground Lamb Bone",
      "5% Lamb Liver",
      "5% Lamb Kidney",
    ],
    AnalyticalConstituents: {
      protein: "15.9%",
      fat: "12.6%",
      moisture: "68.0%",
      ash: "2.3%",
      fibre: "0.5%",
    },
    accentColor: "from-teal-800 to-forest-950",
  },
  {
    id: "2-week-transition-starter-box",
    slug: "raw-transition-starter-box-14-packs",
    name: "14-Pack Raw Transition Starter Box",
    subtitle: "Curated Gentle Switch Bundle (7kg Total)",
    category: "starter-boxes",
    protein: "Multi-Protein",
    price: 54.0,
    compareAtPrice: 63.5,
    weight: "7kg (14 × 500g)",
    ratio: "Complete Step-by-Step Transition Guide Included",
    rating: 5.0,
    reviewsCount: 512,
    badge: "Save 15%",
    isPopular: true,
    lifeStage: "All Life Stages",
    description:
      "Everything you need to switch your dog to raw effortlessly over 14 days. Includes gentle single-protein chicken, turkey, green tripe, and beef packs plus our printed transition schedule.",
    ingredients: [
      "4× Free-Range Chicken & Tripe (500g)",
      "4× Free-Range Turkey Complete (500g)",
      "3× Grass-Fed Beef Complete (500g)",
      "3× Lamb & Green Tripe Complete (500g)",
    ],
    AnalyticalConstituents: {
      protein: "17.0%",
      fat: "10.5%",
      moisture: "69.0%",
      ash: "2.4%",
      fibre: "0.4%",
    },
    accentColor: "from-terracotta-600 to-forest-800",
  },
  {
    id: "puppy-growth-complete",
    slug: "puppy-growth-fine-mince-complete",
    name: "Puppy Growth Fine-Mince Formula",
    subtitle: "Extra Fine Grind for Weaning & Young Pups",
    category: "complete-meals",
    protein: "Chicken & Salmon",
    price: 4.35,
    weight: "500g",
    ratio: "78% Meat · 12% Fine Bone · 10% Offal",
    rating: 4.9,
    reviewsCount: 147,
    badge: "Puppy 8w–12m",
    lifeStage: "Puppy",
    description:
      "Specially formulated with optimal Calcium-to-Phosphorus ratios and DHA-rich salmon oil to fuel healthy bone development and cognitive training in growing puppies.",
    ingredients: [
      "65% Free-Range British Chicken",
      "13% Scottish Salmon",
      "12% Extra-Finely Ground Chicken Bone",
      "5% Chicken Liver",
      "5% Beef Kidney",
    ],
    AnalyticalConstituents: {
      protein: "17.2%",
      fat: "11.0%",
      moisture: "68.8%",
      ash: "2.5%",
      fibre: "0.3%",
    },
    accentColor: "from-forest-600 to-forest-800",
  },
  {
    id: "raw-meaty-marrow-bones",
    slug: "grass-fed-beef-recreational-marrow-bones",
    name: "Grass-Fed Beef Canoe Marrow Bones",
    subtitle: "Natural Dental Hygiene & Mental Enrichment",
    category: "raw-bones",
    protein: "Beef",
    price: 6.95,
    weight: "2 Pack (~650g)",
    ratio: "100% Raw Meaty Bone",
    rating: 4.8,
    reviewsCount: 193,
    badge: "Dental Care",
    lifeStage: "Adult",
    description:
      "Flash-frozen raw beef marrow bones that naturally scrape away plaque and tartar while keeping your dog happily occupied with nutrient-dense marrow.",
    ingredients: ["100% British Grass-Fed Beef Femur Canoe Bones"],
    AnalyticalConstituents: {
      protein: "14.5%",
      fat: "18.0%",
      moisture: "42.0%",
      ash: "24.0%",
      fibre: "0.2%",
    },
    accentColor: "from-stone-700 to-charcoal-900",
  },
  {
    id: "air-dried-venison-tendons",
    slug: "air-dried-scottish-venison-tendons",
    name: "Air-Dried Highland Venison Tendons",
    subtitle: "Long-Lasting Single-Ingredient Chew",
    category: "natural-treats",
    protein: "Venison",
    price: 7.5,
    weight: "150g Pack",
    ratio: "100% Pure Air-Dried Venison",
    rating: 4.9,
    reviewsCount: 129,
    badge: "Grain-Free Chew",
    lifeStage: "All Life Stages",
    description:
      "Gently dehydrated at low temperatures in small batches to lock in natural collagen and glucosamine. Low odor, non-greasy, and high in protein.",
    ingredients: ["100% Scottish Wild Venison Achilles Tendons"],
    AnalyticalConstituents: {
      protein: "81.2%",
      fat: "3.4%",
      moisture: "9.5%",
      ash: "4.1%",
      fibre: "1.2%",
    },
    accentColor: "from-terracotta-800 to-charcoal-900",
  },
  {
    id: "slow-simmered-bone-broth",
    slug: "organic-beef-turmeric-bone-broth",
    name: "24-Hour Simmered Beef & Turmeric Broth",
    subtitle: "Collagen-Rich Meal Topper & Hydration Boost",
    category: "supplements",
    protein: "Beef",
    price: 5.95,
    weight: "500ml Pouch",
    ratio: "Collagen + Curcumin + Black Pepper",
    rating: 4.9,
    reviewsCount: 98,
    badge: "Joint Support",
    lifeStage: "All Life Stages",
    description:
      "Slow-simmered for 24 hours with grass-fed marrow bones, organic apple cider vinegar, and anti-inflammatory golden turmeric.",
    ingredients: [
      "Filtered Spring Water",
      "Grass-Fed Beef Marrow & Knuckle Bones (38%)",
      "Organic Carrots & Celery",
      "Organic Turmeric Root (1%)",
      "Raw Apple Cider Vinegar",
      "Cracked Black Pepper",
    ],
    AnalyticalConstituents: {
      protein: "4.2%",
      fat: "0.6%",
      moisture: "94.5%",
      ash: "0.4%",
      fibre: "0.1%",
    },
    accentColor: "from-amber-700 to-terracotta-900",
  },
];

export const CATEGORIES = [
  { id: "all", label: "All Products" },
  { id: "complete-meals", label: "80/10/10 Complete Meals" },
  { id: "starter-boxes", label: "Starter Boxes" },
  { id: "raw-bones", label: "Raw Meaty Bones" },
  { id: "natural-treats", label: "Air-Dried Treats" },
  { id: "supplements", label: "Broths & Supplements" },
] as const;
