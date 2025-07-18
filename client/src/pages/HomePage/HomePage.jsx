import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import OrderButtons from '../../components/OrderButtons';
import CrowdFavorites from '../../components/CrowdFavorites';
import homeSlides from '../../data/homeSlides';

export default function HomePage() {
  return (
    <div>
      <HeroCarousel slides={homeSlides} />
      <OrderButtons />
      <CrowdFavorites />
      {/* Rest of homepage content */}
    </div>
  );
}
