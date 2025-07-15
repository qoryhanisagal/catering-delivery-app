import { Routes, Route, useLocation } from 'react-router-dom';
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage/HomePage";

// Page imports
import Contact from "./pages/ContactPage";
import About from "./pages/AboutPage";
import Login from "./pages/LoginPage";
import Shop from "./pages/ShopPage";
import Reservation from "./pages/ReservationPage";
import './index.css'; // Tailwind CSS styles

// Global styles and icons
import 'bootstrap-icons/font/bootstrap-icons.css'; 

function App() {
  const location = useLocation();

  return (
    <>
      {/* Top Banner and Navbar appear on all pages */}
      <Banner />
      <Navbar />

      {/* Main content rendered via routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>

      {/* Footer logic here
      {location.pathname !== "/newsletter" && <Footer />} */}
    </>
  );
}

export default App;