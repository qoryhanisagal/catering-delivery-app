import brisketImg from '../assets/img/brisket.png';
import ribsImg from '../assets/img/ribs.png';
import macImg from '../assets/img/mac.png';
import teaImg from '../assets/img/tea.png';
import cobblerImg from '../assets/img/cobbler.png';
import beansImg from '../assets/img/beans.png'; 

const menu = [
  {
    id: 1,
    title: "BBQ Street Corn Dip",
    description: "A smoky, creamy blend of roasted corn, red onion, red pepper, tomato,...",
    price: 8.99,
    image: "/path/to/corn-dip-image.jpg",
    category: "Sides",
    isNew: true, // Add this for items that should show NEW badge
    featured: false, // Add this for items that should appear in carousel
    tags: ["Popular", "Vegetarian"]
  },
  {
    id: 2,
    title: "Seasonal Wings",
    description: "Our Smoked Wings tossed in a Tennessee Vinegar or Sonny's...",
    price: 12.99,
    image: "/path/to/wings-image.jpg",
    category: "Meats",
    isNew: true, // Shows NEW badge and appears in carousel
    featured: true, // Also marked as featured
    tags: ["New", "Spicy"]
  },
  {
    id: 3,
    title: "BBQ Wedge",
    description: "Iceberg lettuce topped with blue cheese, bacon crumbles, red onions,...",
    price: 9.99,
    image: "/path/to/wedge-image.jpg",
    category: "Sides",
    isNew: true, // Shows NEW badge and appears in carousel
    featured: false,
    tags: ["Fresh", "Salad"]
  },
  {
    id: 4,
    title: "Classic Brisket",
    description: "Slow-smoked beef brisket with our signature dry rub",
    price: 16.99,
    image: "/path/to/brisket-image.jpg",
    category: "Meats",
    isNew: false, // Won't show NEW badge
    featured: true, // Will appear in carousel without NEW badge
    tags: ["Signature", "Classic"]
  }
];

export default menu;