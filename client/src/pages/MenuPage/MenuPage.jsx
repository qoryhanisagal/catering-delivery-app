import { useState } from 'react';
import CategoryTabs from '../../components/CategoryTabs';
import MenuGrid from '../../components/MenuGrid';
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

  return (
    <div data-theme="lofi">
      <HeroLayout
        heroImage={heroBackgrounds.hero1} // or whichever hero image you prefer
        heroTitle="Our Menu"
        heroSubtitle="Authentic BBQ crafted with passion. From smoky brisket to tender ribs, discover the flavors that make us legendary."
        contentBackgroundImage={contentBackgrounds.woodTexture}
        contentAlignment="center"
        heroTitleClass="text-accent text-center font-stardos-stencil-bold"
        heroSubtitleClass="text-center font-stardos-stencil-normal text-accent-content"
        allowStacking={true}
      >
        <div className="container mx-auto px-4 py-8">
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

          {/* Menu sections */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 font-stardos-stencil-bold">
              BBQ Favorites
            </h2>
            {/* Menu items */}
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 font-stardos-stencil-bold">
              Sides & Extras
            </h2>
            {/* Menu items */}
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 font-stardos-stencil-bold">
              Beverages
            </h2>
            {/* Menu items */}
          </section>
        </div>
      </HeroLayout>
    </div>
  );
};

export default MenuPage;
