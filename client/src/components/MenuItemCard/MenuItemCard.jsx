const MenuItemCard = ({ item, onClick }) => {
  return (
    <div
      className="card bg-base-100 shadow-md cursor-pointer hover:shadow-xl transition"
      onClick={() => onClick(item)}
    >
      <figure className="h-48 overflow-hidden">
        <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg">{item.title}</h2>
        <p className="text-sm text-gray-600">{item.description}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-primary font-bold">${item.price.toFixed(2)}</span>
          <div className="flex gap-1">
            {item.tags?.map((tag) => (
              <span key={tag} className="badge badge-outline text-xs">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;