import { Outlet, useLocation } from 'react-router-dom';
// Based on my own research: I’m using react-router-dom’s Outlet and useLocation
// to dynamically render page content and detect the current route path for theme switching.
// Reference: https://reactrouter.com/en/main/components/outlet
// Outlet lets me nest routes inside a shared layout component
// Reference: https://reactrouter.com/en/main/hooks/use-location
// useLocation gives me access to the current path for route-specific styling or logic


// I’m importing the components that will appear across all pages
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

const Layout = () => {
  // I use useLocation to get the current route path (e.g., /delivery, /about)
  const location = useLocation();

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        {/* I’m rendering the banner across all pages */}
        <Banner />
        
        {/* Navbar appears across all pages */}
        <Navbar />

        {/* Outlet renders the specific content of the route (like delivery, about, etc.) */}
        <Outlet />
      </div>
      {/* Footer is consistent across all pages
      <Footer /> */}
    </>
  );
};

// I’m exporting the Layout so it can be used in my router as a wrapper for all pages
export default Layout;