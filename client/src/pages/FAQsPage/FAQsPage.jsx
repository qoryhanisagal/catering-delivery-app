import FAQs from '../../components/FAQs/FAQs';
import { menuFAQs, cateringFAQs, generalFAQs } from '../../data/faqs';

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="hero bg-base-200 py-16">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-primary">FAQ</h1>
            <p className="py-6 text-base-content/80">
              Find answers to commonly asked questions about our BBQ, menu,
              catering, and more.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Sections */}
      <div className="container mx-auto px-4 py-8 space-y-16">
        {/* General FAQs */}
        <section>
          <div className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-accent">
              General Questions
            </h2>
            <FAQs faqs={generalFAQs} title="" />
          </div>
        </section>

        {/* Menu FAQs */}
        <section>
          <div className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-accent">
              Menu & Food
            </h2>
            <FAQs faqs={menuFAQs} title="" />
          </div>
        </section>

        {/* Catering FAQs */}
        <section>
          <div className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-accent">
              Catering Services
            </h2>
            <FAQs faqs={cateringFAQs} title="" />
          </div>
        </section>
      </div>
    </div>
  );
}
