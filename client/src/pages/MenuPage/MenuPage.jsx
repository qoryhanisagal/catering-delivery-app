import { useState } from 'react';
import CategoryTabs from '../../components/CategoryTabs';
import MenuGrid from '../../components/MenuGrid';
import MenuCarousel from '../../components/MenuCarousel'; // Add this import
import MenuModal from '../../components/MenuModal';
import menu from '../../data/menu';
import FAQs from '../../components/FAQs/FAQs';
import { menuFAQs } from '../../data/faqs';
import HeroLayout from '../../components/HeroLayout/HeroLayout';
import {
  heroBackgrounds,
  contentBackgrounds,
} from '../../data/backgroundImages';

const MenuPage = () => {
  const [category, setCategory] = useState('All Items');
  const [selectedItem, setSelectedItem] = useState(null);

  // Filter menu items based on selected category
  const filteredItems =
    category === 'All Items'
      ? menu
      : menu.filter((item) => item.category === category);

  // Get featured/new items for carousel
  const featuredItems = menu.filter(item => item.isNew || item.featured).slice(0, 6);

  const handleOrderClick = (item) => {
    // Add your order logic here
    console.log('Ordering:', item);
  };

  return (
    <div data-theme="lofi">
      <HeroLayout
        heroImage={heroBackgrounds.hero1}
        heroTitle="Our Menu"
        heroSubtitle="Authentic BBQ crafted with passion. From smoky brisket to tender ribs, discover the flavors that make us legendary."
        contentBackgroundImage={contentBackgrounds.woodTexture}
        contentAlignment="center"
        heroTitleClass="text-accent text-center font-stardos-stencil-bold"
        heroSubtitleClass="text-center font-stardos-stencil-normal text-accent-content"
        allowStacking={true}
      >
        <div className="container mx-auto px-4 py-8">
          {/* Featured Items Carousel */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 font-stardos-stencil-bold">
              Featured Items
            </h2>
            <MenuCarousel 
              items={featuredItems}
              onItemClick={setSelectedItem}
              onOrderClick={handleOrderClick}
            />
          </section>

          <CategoryTabs selected={category} onChange={setCategory} />

          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold">Our Menu</h1>
            <p className="text-primary-content">Crafted with soul and smoke.</p>
          </div>

          <MenuGrid items={filteredItems} onItemClick={setSelectedItem} />

          <MenuModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />

          <FAQs faqs={menuFAQs} title="Menu FAQs" />
        </div>
      </HeroLayout>
    </div>
  );
};

export default MenuPage;
