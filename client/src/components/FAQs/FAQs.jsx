export default function FAQs({ faqs, title = 'Frequently Asked Questions' }) {
  if (!faqs || faqs.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-base-content/70">No FAQs available</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        {title}
      </h2>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-medium">
              {faq.question}
            </div>
            <div className="collapse-content">
              <p className="text-base-content/80">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
