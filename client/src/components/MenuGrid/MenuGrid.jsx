import menu from '../data/menu.json';
import MenuItemCard from './MenuItemCard';

const MenuGrid = ({ category, onItemClick }) => {
  const filtered =
    category === 'All Items' ? menu : menu.filter((item) => item.category === category);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filtered.map((item) => (
        <MenuItemCard key={item.id} item={item} onClick={onItemClick} />
      ))}
    </div>
  );
};

export default MenuGrid;