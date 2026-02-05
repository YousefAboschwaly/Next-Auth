export const Nav_Links = [
  { name: "Home", icon: "/icons/home.svg" },
  { name: "Our Category", icon: "/icons/apps.svg" },
  { name: "About Us", icon: "/icons/interactive.svg" },
  { name: "Contact Us", icon: "/icons/idCard.svg" },
  { name: "FAQs", icon: "/icons/faq.svg" },
]

export const Nav_Right_Links = [
  { name: "Shopping Bag", icon: "/icons/shopping_bag.svg" },
  { name: "Notifications", icon: "/icons/notification.svg" },
  { name: "Wishlist", icon: "/icons/love.svg" },
  
]
export const Colors = [
  {
    name: 'Red',
    class: '#D90202',
  },
  {
    name: 'Blue',
    class: '#B8CCDA',
  },
  {
    name: 'Olive',
    class: '#988755',
  },
  {
    name: 'Sky',
    class: '#7198C8',
  },
  {
    name: 'Charcoal',
    class: '#5D5D5B',
  },
]
export const Images = [
  '/blue-shirt.svg',
  '/white-shirt.svg',
  '/red-shirt.svg', // Black
  '/black-shirt.svg',
]

export const Reviews = Array.from({ length: 4 }, (_, i) => (
  {
    id: i + 1,
    author: 'Alex Daewn',
    rating: 4,
    date: '4 months ago',
    content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
  }
))

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
          ]