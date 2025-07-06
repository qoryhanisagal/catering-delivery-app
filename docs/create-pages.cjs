// create-pages.js
const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'client/src/pages');

const pages = [
  'LandingPage', 'HomePage', 'AboutPage', 'ContactPage', 'ServicesPage',
  'MenuPage', 'ReservationPage', 'DeliverPage', 'FAQsPage',
  'MeetChefPage', 'ChefProfilePage', 'UserProfilePage',
  'LoginPage', 'RegisterPage', 'ShopPage', 'ShopDetailPage',
  'ShopCartPage', 'BlogStandardPage', 'BlogDetailPage'
];

pages.forEach((page) => {
  const pageFolder = path.join(pagesDir, page);
  const jsxFile = path.join(pageFolder, `${page}.jsx`);
  const indexFile = path.join(pageFolder, `index.jsx`);

  console.log(`Creating folder and files for: ${page}`);

  // Create folder if it doesn't exist
  if (!fs.existsSync(pageFolder)) {
    fs.mkdirSync(pageFolder, { recursive: true });
  }

  // Create JSX file
  const jsxContent = `export default function ${page}() {
  return <div>${page}</div>;
}
`;
  fs.writeFileSync(jsxFile, jsxContent);

  // Create index.jsx
  const indexContent = `export { default } from './${page}';\n`;
  fs.writeFileSync(indexFile, indexContent);

  console.log(`✅ Created: client/src/pages/${page}/${page}.jsx`);
  console.log(`✅ Created: client/src/pages/${page}/index.jsx\n`);
});