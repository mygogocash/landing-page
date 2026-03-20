// Store data with official logos
// Add your official store logos to /public/stores/ directory
// Logo files should be named: {storeSlug}.svg or {storeSlug}.png

export interface Store {
  id: string;
  name: string;
  slug: string;
  logoUrl: string;
  cashbackRate: number;
  category: "all" | "popular" | "travel" | "shopping";
  url?: string;
}

export const STORES: Store[] = [
  // Popular stores
  {
    id: "1",
    name: "Shopee",
    slug: "shopee",
    logoUrl: "/stores/shopee.svg",
    cashbackRate: 8,
    category: "popular",
  },
  {
    id: "2",
    name: "Lazada",
    slug: "lazada",
    logoUrl: "/stores/lazada.svg",
    cashbackRate: 7,
    category: "popular",
  },
  {
    id: "3",
    name: "Agoda",
    slug: "agoda",
    logoUrl: "/stores/agoda.svg",
    cashbackRate: 6,
    category: "travel",
  },
  {
    id: "4",
    name: "Trip.com",
    slug: "trip-com",
    logoUrl: "/stores/trip-com.svg",
    cashbackRate: 5,
    category: "travel",
  },
  {
    id: "5",
    name: "Central",
    slug: "central",
    logoUrl: "/stores/central.svg",
    cashbackRate: 4,
    category: "shopping",
  },
  {
    id: "6",
    name: "The Mall",
    slug: "the-mall",
    logoUrl: "/stores/the-mall.svg",
    cashbackRate: 3,
    category: "shopping",
  },
  {
    id: "7",
    name: "Big C",
    slug: "big-c",
    logoUrl: "/stores/big-c.svg",
    cashbackRate: 5,
    category: "shopping",
  },
  {
    id: "8",
    name: "7-Eleven",
    slug: "7-eleven",
    logoUrl: "/stores/7-eleven.svg",
    cashbackRate: 2,
    category: "popular",
  },
  {
    id: "9",
    name: "Tesco Lotus",
    slug: "tesco-lotus",
    logoUrl: "/stores/tesco-lotus.svg",
    cashbackRate: 4,
    category: "shopping",
  },
  {
    id: "10",
    name: "Makro",
    slug: "makro",
    logoUrl: "/stores/makro.svg",
    cashbackRate: 3,
    category: "shopping",
  },
  {
    id: "11",
    name: "Booking.com",
    slug: "booking-com",
    logoUrl: "/stores/booking-com.svg",
    cashbackRate: 6,
    category: "travel",
  },
  {
    id: "12",
    name: "Expedia",
    slug: "expedia",
    logoUrl: "/stores/expedia.svg",
    cashbackRate: 5,
    category: "travel",
  },
];
