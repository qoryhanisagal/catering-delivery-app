const categories = ['All Items', 'Meats', 'Sides', 'Drinks', 'Desserts'];

const CategoryTabs = ({ selected, onChange }) => {
  return (
    <div className="tabs tabs-boxed mb-6 flex-wrap justify-center">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`tab ${selected === cat ? 'tab-active' : ''}`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;