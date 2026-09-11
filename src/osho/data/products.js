// Product catalogue for OSHO ENTERPRISE cocopeat powder
export const formatINR = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export const PRODUCTS = [
  {
    id: "cocopeat-5kg",
    name: "Cocopeat Powder 5 KG",
    weight: "5 KG",
    price: 149,
    mrp: 249,
    rating: 4.8,
    reviews: 132,
    badge: "Starter",
    image: "/osho/cocopeat-5kg.jpg",
    short: "Perfect trial pack for pots, seed-starting and small home gardens.",
    tags: ["Low EC", "Double washed"],
  },
  {
    id: "cocopeat-7kg",
    name: "Cocopeat Powder 7 KG",
    weight: "7 KG",
    price: 199,
    mrp: 349,
    rating: 4.9,
    reviews: 208,
    badge: "Bestseller",
    image: "/osho/cocopeat-7kg.jpg",
    short: "The all-rounder pack for terrace gardens and mid-size planters.",
    tags: ["100% Natural", "High quality"],
  },
  {
    id: "cocopeat-10kg",
    name: "Cocopeat Powder 10 KG",
    weight: "10 KG",
    price: 279,
    mrp: 449,
    rating: 4.9,
    reviews: 176,
    badge: "Value",
    image: "/osho/cocopeat-10kg.jpg",
    short: "Best value for nurseries, raised beds and serious growers.",
    tags: ["Eco-friendly", "Rich growth"],
  },
  {
    id: "cocopeat-value-10kg",
    name: "Cocopeat Powder 10 KG — Premium",
    weight: "10 KG",
    price: 299,
    mrp: 499,
    rating: 5.0,
    reviews: 94,
    badge: "Premium",
    image: "/osho/cocopeat-value-10kg.jpg",
    short: "Extra-fine, low-EC premium grade for sensitive crops and hydroponics.",
    tags: ["Premium grade", "Low EC"],
  },
];

export const getById = (id) => PRODUCTS.find((p) => p.id === id);

export const BENEFITS = [
  {
    icon: "water",
    title: "Superb Water Retention",
    text: "Holds up to 8× its weight in water, so roots stay moist longer.",
  },
  {
    icon: "root",
    title: "Stronger Root Growth",
    text: "Light, airy structure lets roots breathe and spread freely.",
  },
  {
    icon: "leaf",
    title: "100% Natural & Organic",
    text: "Made from pure coconut coir — no chemicals, fully renewable.",
  },
  {
    icon: "shield",
    title: "Low EC, Double Washed",
    text: "Balanced pH and low salts, safe even for delicate seedlings.",
  },
];

export const USES = [
  "Seed starting & germination",
  "Potting & planting mix",
  "Soil conditioner",
  "Terrace & kitchen gardens",
  "Hydroponics & nurseries",
  "Lawn & bed preparation",
];
