const categories = [
  { label: 'SUMMER SEASONAL MENU', value: 'Summer Seasonal' },
  { label: 'APPETIZERS', value: 'Appetizers' },
  { label: 'SIGNATURE BBQ', value: 'Signature BBQ' },
  { label: 'PITMASTER PICKS', value: 'Pitmaster Picks' },
  { label: 'BBQ SANDWICHES', value: 'BBQ Sandwiches' },
  { label: 'FAMILY MEALS', value: 'Family Meals' },
  { label: "GARDEN OF EATIN'", value: 'Garden of Eatin' },
  { label: 'BEVERAGES', value: 'Beverages' },
  { label: 'SIDEKICKS', value: 'Sidekicks' },
  { label: 'DESSERTS', value: 'Desserts' },
  { label: 'KIDS MEALS', value: 'Kids Meals' },
  { label: 'PITMASTER LUNCH PLATES', value: 'Pitmaster Lunch Plates' },
  { label: 'BBQ BY THE POUND', value: 'BBQ by the Pound' },
  { label: 'SAUCES & RUBS', value: 'Sauces & Rubs' },
  { label: 'NUTRITION', value: 'Nutrition' },
];

const CategoryTabs = ({ selected, onChange }) => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-lg font-stardos-stencil-bold text-base-content tracking-wider">
          JUMP TO A CATEGORY
        </h2>
      </div>

      {/* Category List */}
      <div className="space-y-0">
        {categories.map(({ label, value }) => (
          <button
            key={value}
            className={`w-full text-left px-6 py-4 border-l-4 font-stardos-stencil-bold text-sm tracking-wider transition-all duration-150 ${
              selected === value
                ? 'border-primary bg-primary text-primary-content'
                : 'border-base-300 bg-base-100 text-base-content hover:bg-base-200 hover:border-base-300'
            }`}
            onClick={() => onChange(value)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
