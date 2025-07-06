// create-components.js
const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'client/src/components');

const components = [
  'AboutHero', 'Accordion', 'Avatar', 'Badge', 'Banner', 'Button', 'CartModal', 'Catering',
  'CateringGallery', 'CateringHero', 'CateringPackages', 'ChefCard', 'ChefGallery', 'ChefQuote',
  'ClientTestimonials', 'Comments', 'Contact', 'ContactGrid', 'Deals', 'DeliveryInfoForm', 'Discounts',
  'Events', 'FAQs', 'FoodCategories', 'Footer', 'GridFlexWrapper', 'Hero', 'JoinTeam', 'LatestBlogGallery',
  'Layout', 'LocationMap', 'LoginModal', 'MainServicesList', 'MenuItem', 'MenuReel', 'Menucard',
  'Navbar', 'NewsBlog', 'OnlineOrder', 'OrderSummary', 'OurApps', 'PageContainer', 'Pagination',
  'PaymentMethodForm', 'PhotoGallery', 'PopularPost', 'PopularTags', 'QuantitySelector', 'QuickLinks',
  'RatingStars', 'Receipt', 'RecipeGallery', 'Reservation', 'ReservationCard', 'SectionWrapper',
  'ShopGallery', 'ShopItemDetail', 'SignupModal', 'Spinner', 'Subscribe', 'TabGroup', 'Tags',
  'Testimonials', 'ThemeToggle', 'ToastNotification'
];

components.forEach((component) => {
  const componentFolder = path.join(componentsDir, component);
  const jsxFile = path.join(componentFolder, `${component}.jsx`);
  const indexFile = path.join(componentFolder, `index.jsx`);

  console.log(`🔧 Creating folder and files for: ${component}`);

  // Create folder if it doesn't exist
  if (!fs.existsSync(componentFolder)) {
    fs.mkdirSync(componentFolder, { recursive: true });
  }

  // Create JSX file
  const jsxContent = `export default function ${component}() {
  return <div>${component} Component</div>;
}
`;
  fs.writeFileSync(jsxFile, jsxContent);

  // Create index.jsx
  const indexContent = `export { default } from './${component}';\n`;
  fs.writeFileSync(indexFile, indexContent);

  console.log(`✅ Created: src/components/${component}/${component}.jsx`);
  console.log(`✅ Created: src/components/${component}/index.jsx\n`);
});