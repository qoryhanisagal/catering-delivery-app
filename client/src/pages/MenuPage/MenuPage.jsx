import { useState } from 'react';
import CategoryTabs from '../../components/CategoryTabs';
import MenuGrid from '../../components/MenuGrid';
import MenuModal from '../../components/MenuModal';
import menu from '../../data/menu'; 

const MenuPage = () => {
  const [category, setCategory] = useState('All Items');
  const [selectedItem, setSelectedItem] = useState(null);

  // Filter menu items based on selected category
  const filteredItems =
    category === 'All Items'
      ? menu
      : menu.filter((item) => item.category === category);

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <CategoryTabs selected={category} onChange={setCategory} />

      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Our Menu</h1>
        <p className="text-primary-content">Crafted with soul and smoke.</p>
      </div>

      <MenuGrid items={filteredItems} onItemClick={setSelectedItem} />

      <MenuModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
};

export default MenuPage;