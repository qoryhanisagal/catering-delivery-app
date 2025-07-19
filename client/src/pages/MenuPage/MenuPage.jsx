import { useState, useMemo, useEffect } from 'react';
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

  // Group menu items by category for easy section display
  const menuByCategory = useMemo(() => {
    return categories.reduce((acc, category) => {
      acc[category] = menu.filter((item) => item.category === category);
      return acc;
    }, {});
  }, []);

  const handleOrderClick = (item) => {
    console.log('Ordering:', item);
  };

  // Create a unique HTML id for each category section for scroll navigation
  const getSectionId = (category) => {
    return category.toLowerCase().replace(/[^a-z0-9]/g, '-');
  };

  // When the selected category changes, scroll the right content area to show that section
  useEffect(() => {
    const sectionId = getSectionId(selectedCategory);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedCategory]);

  return (
    <div data-theme="lofi" className="overflow-x-hidden">
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
        <div className="container mx-auto max-w-full px-4 py-8 h-[calc(100vh-4rem)]">
          {/* Two-column layout: left is category navigation, right is menu content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 h-full">
            {/* Sidebar with all category buttons, always visible while scrolling */}
            <div className="lg:col-span-1 h-full">
              <div className="sticky top-4">
                <CategoryTabs
                  selected={selectedCategory}
                  onChange={setSelectedCategory}
                />
              </div>
            </div>

            {/* Main menu area, scrolls independently from the rest of the page */}
            <div className="lg:col-span-3 h-full overflow-y-auto pr-2">
              {/* Render each category and its menu items in a section */}
              {categories.map((category, index) => {
                const categoryItems = menuByCategory[category];

                // Skip categories with no items
                if (!categoryItems || categoryItems.length === 0) {
                  return null;
                }

                return (
                  <div key={category}>
                    <section
                      id={getSectionId(category)}
                      className="mb-8 scroll-mt-20"
                    >
                      {/* Category title */}
                      <h2 className="text-5xl font-stardos-stencil-bold mb-4 text-left">
                        {category}
                      </h2>
                      {/* All menu items for the current category */}
                      <MenuCarousel
                        items={categoryItems}
                        onItemClick={setSelectedItem}
                        onOrderClick={handleOrderClick}
                      />
                    </section>

                    {/* Divider line between categories, except after the last one */}
                    {index < categories.length - 1 && <SectionDivider />}
                  </div>
                );
              })}
            </div>
          </div>
          {/* Modal popup for menu item details */}
          <MenuModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
          {/* To show menu FAQs, uncomment the line below */}
          {/* <FAQs faqs={menuFAQs} title="Menu FAQs" /> */}
        </div>
      </HeroLayout>
    </div>
  );
};

export default MenuPage;
