const MenuItemCard = ({ item, onClick }) => {
  return (
    <div
      className="card bg-base-100 shadow-md cursor-pointer hover:shadow-xl transition rounded-md overflow-hidden"
      onClick={() => onClick(item)}
    >
      <figure className="h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-semibold mb-1">{item.title}</h2>
        <p className="text-sm text-primary-content line-clamp-2 mb-3">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-primary font-bold text-lg">
            ${item.price.toFixed(2)}
          </span>
          <div className="flex gap-2 flex-wrap">
            {item.tags?.map((tag) => (
              <span key={tag} className="badge badge-outline text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;