const categories = [
  { label: 'All Items', value: 'All Items' },
  { label: 'Meats', value: 'Meats' },
  { label: 'Sides', value: 'Sides' },
  { label: 'Drinks', value: 'Drinks' },
  { label: 'Desserts', value: 'Desserts' }
];

const CategoryTabs = ({ selected, onChange }) => {
  return (
    <div
      className="tabs tabs-boxed mb-6 flex-wrap justify-center"
      role="tablist"
      aria-label="Menu categories"
    >
      {categories.map(({ label, value }) => (
        <button
          key={value}
          role="tab"
          className={`tab ${selected === value ? 'tab-active' : ''}`}
          aria-selected={selected === value}
          onClick={() => onChange(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;