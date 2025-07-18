import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import OrderButtons from '../../components/OrderButtons';
import homeSlides from '../../data/homeSlides';

export default function HomePage() {
  return (
    <div>
      <HeroCarousel slides={homeSlides} />
      <OrderButtons />
      {/* Rest of homepage content */}
    </div>
  );
}
