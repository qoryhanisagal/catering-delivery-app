import FAQs from '../../components/FAQs/FAQs';
import HeroLayout from '../../components/HeroLayout/HeroLayout';
import { menuFAQs, cateringFAQs, generalFAQs } from '../../data/faqs';
import {
  heroBackgrounds,
  contentBackgrounds,
} from '../../data/backgroundImages';

export default function FAQsPage() {
  return (
    <div data-theme="lofi">
      <HeroLayout
        allowStacking={false}
        heroImage={heroBackgrounds.hero1}
        heroTitle="FAQs"
        heroSubtitle="Find answers to commonly asked questions about our BBQ, menu, catering, and more."
        contentBackgroundImage={contentBackgrounds.woodTexture}
        heroTitleClass="text-accent text-left font-stardos-stencil-bold"
        heroSubtitleClass="text-left font-stardos-stencil-normal text-accent-content"
      >
        {/* FAQ Sections */}
        <div className="container mx-auto px-4 py-8 space-y-16 text-left">
          {/* General FAQs */}
          <section>
            <FAQs faqs={generalFAQs} title="General Questions" />
          </section>

          {/* Menu FAQs */}
          <section>
            <FAQs faqs={menuFAQs} title="Menu & Food" />
          </section>

          {/* Catering FAQs */}
          <section>
            <FAQs faqs={cateringFAQs} title="Catering Services" />
          </section>
        </div>
      </HeroLayout>
    </div>
  );
}
