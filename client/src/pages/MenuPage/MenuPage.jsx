import { useState, useMemo } from 'react';
import CategoryTabs from '../../components/CategoryTabs';
import MenuCarousel from '../../components/MenuCarousel';
import MenuModal from '../../components/MenuModal';
import SectionDivider from '../../components/SectionDivider';
import menu from '../../data/menu';
import FAQs from '../../components/FAQs/FAQs';
import { menuFAQs } from '../../data/faqs';
import HeroLayout from '../../components/HeroLayout/HeroLayout';
import {
  heroBackgrounds,
  contentBackgrounds,
} from '../../data/backgroundImages';

const categories = [
  'SIGNATURE BBQ',
  'BBQ SANDWICHES',
  'PITMASTER LUNCH PLATES',
  'BBQ BY THE POUND',
  'FAMILY MEALS',
  "GARDEN OF EATIN'",
  'PITMASTER PICKS',
  'SIDEKICKS',
  'DESSERTS',
  'BEVERAGES',
  'SAUCES & RUBS',
];

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('SIGNATURE BBQ');
  const [selectedItem, setSelectedItem] = useState(null);

  // Group menu items by category
  const menuByCategory = useMemo(() => {
    return categories.reduce((acc, category) => {
      acc[category] = menu.filter((item) => item.category === category);
      return acc;
    }, {});
  }, []);

  const handleOrderClick = (item) => {
    console.log('Ordering:', item);
  };

  // Generate section ID from category name
  const getSectionId = (category) => {
    return category.toLowerCase().replace(/[^a-z0-9]/g, '-');
  };

  return (
    <div data-theme="lofi">
      <HeroLayout
        heroImage={heroBackgrounds.hero1}
        heroTitle="Our Menu"
        heroSubtitle="Authentic BBQ crafted with passion. From smoky brisket to tender ribs, discover the flavors that make us legendary."
        contentBackgroundImage={contentBackgrounds.smokeTexture}
        contentAlignment="center"
        heroTitleClass="text-accent text-center font-stardos-stencil-bold"
        heroSubtitleClass="text-center font-stardos-stencil-normal text-accent-content"
        allowStacking={true}
      >
        <div className="container mx-auto px-4 py-8">
          {/* Two Column Layout: CategoryTabs on left, Content on right */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sidebar - Category Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-4">
                <CategoryTabs
                  selected={selectedCategory}
                  onChange={setSelectedCategory}
                />
              </div>
            </div>

            {/* Right Content Area */}
            <div className="lg:col-span-3">
              {/* Render all category sections */}
              {categories.map((category, index) => {
                const categoryItems = menuByCategory[category];

                // Only render if there are items in this category
                if (!categoryItems || categoryItems.length === 0) {
                  return null;
                }

                return (
                  <div key={category}>
                    <section
                      id={getSectionId(category)}
                      className="mb-8 scroll-mt-20"
                    >
                      <h2 className="text-5xl font-stardos-stencil-bold mb-4 text-left">
                        {category}
                      </h2>
                      <MenuCarousel
                        items={categoryItems}
                        onItemClick={setSelectedItem}
                        onOrderClick={handleOrderClick}
                      />
                    </section>

                    {/* Add divider between sections, but not after the last one */}
                    {index < categories.length - 1 && <SectionDivider />}
                  </div>
                );
              })}
            </div>
          </div>

          <MenuModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />

          {/* <FAQs faqs={menuFAQs} title="Menu FAQs" /> */}
        </div>
      </HeroLayout>
    </div>
  );
};

export default MenuPage;
