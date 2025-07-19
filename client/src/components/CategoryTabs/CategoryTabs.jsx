const categories = [
  { label: 'SIGNATURE BBQ', value: 'SIGNATURE BBQ' },
  { label: 'BBQ SANDWICHES', value: 'BBQ SANDWICHES' },
  { label: 'PITMASTER LUNCH PLATES', value: 'PITMASTER LUNCH PLATES' },
  { label: 'BBQ BY THE POUND', value: 'BBQ BY THE POUND' },
  { label: 'FAMILY MEALS', value: 'FAMILY MEALS' },
  { label: "GARDEN OF EATIN'", value: "GARDEN OF EATIN'" },
  { label: 'PITMASTER PICKS', value: 'PITMASTER PICKS' },
  { label: 'SIDEKICKS', value: 'SIDEKICKS' },
  { label: 'DESSERTS', value: 'DESSERTS' },
  { label: 'BEVERAGES', value: 'BEVERAGES' },
  { label: 'SAUCES & RUBS', value: 'SAUCES & RUBS' },
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
            onClick={() => handleCategoryClick(value)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
