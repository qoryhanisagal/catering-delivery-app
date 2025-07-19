import HeroLayout from '../../components/HeroLayout/HeroLayout';
import OrderButtons from '../../components/OrderButtons';
import {
  heroBackgrounds,
  contentBackgrounds,
} from '../../data/backgroundImages';

export default function ContactPage() {
  return (
    <div data-theme="lofi">
      <HeroLayout
        allowStacking={false}
        heroImage={heroBackgrounds.hero1}
        heroTitle="Contact Us"
        heroSubtitle="Get in touch with our team."
        contentBackgroundImage={contentBackgrounds.woodTexture}
        heroTitleClass="text-accent text-center font-stardos-stencil-bold"
        heroSubtitleClass="text-primary-content font-stardos-stencil-normal text-accent-content"
      >
        {/* Simple content to test the layout */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-stardos-stencil-bold text-primary mb-4">
            Stencil Font Test
          </h2>
          <p className="text-base-content mb-4">
            This page is testing if the stencil font works properly in the hero
            section.
          </p>
          <p className="font-stardos-stencil-normal text-lg text-accent">
            This text also uses the stencil font with normal weight.
          </p>
        </div>
      </HeroLayout>
      <OrderButtons />
      {/* Rest of homepage content */}
    </div>
  );
}
