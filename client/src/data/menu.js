import brisketImg from '../assets/img/brisket.png';
import ribsImg from '../assets/img/ribs.png';
import macImg from '../assets/img/mac.png';
import teaImg from '../assets/img/tea.png';
import cobblerImg from '../assets/img/cobbler.png';
import beansImg from '../assets/img/beans.png'; 

const menu = [
  {
    id: 'brisket',
    title: 'Smoked Brisket',
    description: '12-hour smoked Angus brisket with bark and juicy inside.',
    category: 'Meats',
    price: 18.99,
    image: brisketImg,
    tags: ['Gluten-Free', 'Popular'],
  },
  {
    id: 'ribs',
    title: 'BBQ Ribs',
    description: 'Slow-cooked pork ribs glazed with house BBQ sauce.',
    category: 'Meats',
    price: 16.5,
    image: ribsImg,
    tags: ['House Special'],
  },
  {
    id: 'mac',
    title: 'Mac & Cheese',
    description: 'Creamy baked mac with cheddar crust.',
    category: 'Sides',
    price: 6.99,
    image: macImg,
    tags: ['Vegetarian'],
  },
  {
    id: 'tea',
    title: 'Sweet Tea',
    description: 'Cold-brewed Southern sweet tea.',
    category: 'Drinks',
    price: 2.5,
    image: teaImg,
    tags: ['Iced'],
  },
  {
    id: 'cake',
    title: 'Peach Cobbler',
    description: 'Warm peach cobbler with flaky crust.',
    category: 'Desserts',
    price: 5.99,
    image: cobblerImg,
    tags: ['Dessert', 'Warm'],
  },
  {
    id: 'beans',
    title: 'Baked Beans',
    description: 'Slow-cooked BBQ beans with smoky flavor and a hint of brown sugar.',
    category: 'Sides',
    price: 4.99,
    image: beansImg,
    tags: ['Classic', 'Smoky'],
  }
];

export default menu;