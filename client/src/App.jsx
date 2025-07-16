import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './layout/Layout';
// Page imports
import Home from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
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
      {/* Main content rendered via routes */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/reservation" element={<Reservation />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;