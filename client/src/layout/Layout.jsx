import { Outlet, useLocation } from 'react-router-dom';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {
  const location = useLocation();

  return (
    <>
      {/* Full-width layout container */}
      <div className="w-full">
        {/* Banner and Navbar */}
        <Banner />
        <Navbar />

        {/* Full-width content - no container constraints */}
        <div className="w-full">
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
