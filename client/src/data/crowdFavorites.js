import favimg1 from '../assets/img/crowd-fav-1.png';
import favimg2 from '../assets/img/crowd-fav-2.png';
import favimg3 from '../assets/img/crowd-fav-3.png';
import favimg4 from '../assets/img/crowd-fav-4.png';  
import favimg5 from '../assets/img/crowd-fav-5.png';

const crowdFavorites = [
  {
    id: 1,
    name: 'Deep-Dish Cobbler',
    description:'Seasonal fruit topped with a sweet caramelized cake topping, vanilla bean ice cream and a drizzle of caramel',
    category: 'Dessert',
    price: "$8.99",
    image: favimg1,
    tags: ['Gluten-Free', 'Popular'],
  },
  {
    id: 2,
    name: 'Cuban Pulled Pork',
    description: 'Slow-cooked pulled pork with a tangy citrus marinade, served with pickled onions and cilantro',
    category: 'Sandwich',
    price: "$14.99",
    image: favimg2,
    tags: ['Popular', 'Spicy'],
  },
  {
    id: 3,
    name: 'Nashville Hot Chicken',
    description: 'Spicy fried chicken breast, pickles, and slaw on a brioche bun',
    category: 'Sandwich',
    price: "$12.99",
    image: favimg3,
    tags: ['Spicy', 'Popular'],
  },
  {
    id: 4,
    name: 'Shrimp Po Boy',
    description: 'Crispy shrimp, lettuce, tomato, and remoulade sauce on a toasted hoagie roll',
    category: 'Sandwich',
    price: "$16.99",
    image: favimg4,
    tags: ['Seafood', 'Popular'],
  },
  {
    id : 5,
    name: 'BBQ Brisket',
    description: 'Tender brisket smothered in tangy BBQ sauce, topped with coleslaw on a toasted bun',
    category: 'Sandwich',
    price: "$15.99",
    image: favimg5,
    tags: ['Beef', 'Popular'],
  }
];

export default crowdFavorites;