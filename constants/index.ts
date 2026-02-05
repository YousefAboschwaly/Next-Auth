export const Nav_Links = [
  { name: "Home", icon: "/icons/home.svg" },
  { name: "Our Category", icon: "/icons/apps.svg" },
  { name: "About Us", icon: "/icons/interactive.svg" },
  { name: "Contact Us", icon: "/icons/idCard.svg" },
  { name: "FAQs", icon: "/icons/faq.svg" },
];

export const Nav_Right_Links = [
  { name: "Shopping Bag", icon: "/icons/shopping_bag.svg" },
  { name: "Notifications", icon: "/icons/notification.svg" },
  { name: "Wishlist", icon: "/icons/love.svg" },
];
export const Colors = [
  {
    name: "Red",
    class: "#D90202",
  },
  {
    name: "Blue",
    class: "#B8CCDA",
  },
  {
    name: "Olive",
    class: "#988755",
  },
  {
    name: "Sky",
    class: "#7198C8",
  },
  {
    name: "Charcoal",
    class: "#5D5D5B",
  },
];
export const Images = [
  "/blue-shirt.svg",
  "/white-shirt.svg",
  "/red-shirt.svg", // Black
  "/black-shirt.svg",
];

export const Reviews = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  author: "Alex Daewn",
  rating: 4,
  date: "4 months ago",
  content:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
}));

export const RatingDistribution = [
  {
    stars: 5,
    pct: 67,
  },
  {
    stars: 4,
    pct: 15,
  },
  {
    stars: 3,
    pct: 6,
  },
  {
    stars: 2,
    pct: 3,
  },
  {
    stars: 1,
    pct: 9,
  },
];

export const Products = [
  {
    id: 1,
    image:
      "/prod-1.svg",
    category: "Dresses",
    title:
      "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ...",
    price: 900,
    originalPrice: null,
    rating: 4.5,
    reviews: 2910,
    colors: ["bg-[#1a1a1a]", "bg-gray-800", "bg-gray-400"],
    extraColors: 2,
    discount: null,
    isFavorite: false,
  },
  {
    id: 2,
    image: "/prod-2.svg",
    category: "Dresses",
    title:
      "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ...",
    price: 900,
    originalPrice: 1300,
    rating: 4.5,
    reviews: 2910,
    colors: ["bg-[#8B4513]", "bg-gray-800", "bg-gray-400"],
    extraColors: 2,
    discount: "25% OFF",
    isFavorite: false,
  },
  {
    id: 3,
    image: "/prod-3.svg",
    category: "Dresses",
    title:
      "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ...",
    price: 900,
    originalPrice: null,
    rating: 4.5,
    reviews: 2910,
    colors: ["bg-blue-200", "bg-gray-800", "bg-gray-400"],
    extraColors: 2,
    discount: null,
    isFavorite: true,
  },
  {
    id: 4,
    image: "/prod-4.svg",
    category: "Dresses",
    title:
      "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ...",
    price: 900,
    originalPrice: 1300,
    rating: 4.5,
    reviews: 2910,
    colors: ["bg-[#8B4513]", "bg-gray-800", "bg-gray-400"],
    extraColors: 2,
    discount: "25% OFF",
    isFavorite: false,
  },
  {
    id: 5,
    image: "/prod-4.svg",
    category: "Dresses",
    title:
      "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ...",
    price: 900,
    originalPrice: 1300,
    rating: 4.5,
    reviews: 2910,
    colors: ["bg-[#8B4513]", "bg-gray-800", "bg-gray-400"],
    extraColors: 2,
    discount: "25% OFF",
    isFavorite: false,
  },
  {
    id: 6,
    image: "/prod-1.svg",
    title:
      "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ...",
    price: 900,
    originalPrice: null,
    rating: 4.5,
    reviews: 2910,
    colors: ["bg-gray-300", "bg-gray-800", "bg-blue-400"],
    extraColors: 2,
    discount: "25% OFF",
    isFavorite: false,
  },
];