import MenuItemCard from '../MenuItemCard'; 

const MenuGrid = ({ items, onItemClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <MenuItemCard key={item.id} item={item} onClick={onItemClick} />
      ))}
    </div>
  );
};

export default MenuGrid;