import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import { homeSlides } from '../../data/homeSlides';

export default function HomePage() {
  return (
    <div>
      <HeroCarousel slides={homeSlides} />
      {/* Rest of homepage content */}
    </div>
  );
}
