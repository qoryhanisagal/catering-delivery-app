const MenuCarousel = ({ items, onItemClick, onOrderClick }) => {
  return (
    <div className="w-full mb-8">
      {/* Carousel container */}
      <div className="carousel carousel-center w-full space-x-4 bg-neutral rounded-box p-4">
        {items.map((item) => (
          <div key={item.id} className="carousel-item">
            <div
              className="card bg-base-100 shadow-lg cursor-pointer hover:shadow-xl transition-shadow w-80 flex-shrink-0"
              onClick={() => onItemClick?.(item)}
            >
              {/* Image with NEW badge */}
              <figure className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {item.isNew && (
                  <div className="badge bg-neutral text-white border-neutral absolute top-4 left-4 font-bold">
                    NEW
                  </div>
                )}
              </figure>

              {/* Card body */}
              <div className="card-body p-6">
                <h2 className="card-title text-xl font-bold mb-2">
                  {item.title}
                </h2>
                <p className="text-base-content/70 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Price */}
                {item.price && (
                  <div className="text-lg font-semibold text-primary mb-4">
                    ${item.price.toFixed(2)}
                  </div>
                )}

                {/* Order button */}
                <div className="card-actions justify-center">
                  <button
                    className="btn btn-primary btn-wide text-white font-bold"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOrderClick?.(item);
                    }}
                  >
                    🛒 ORDER NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Navigation dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {items.slice(0, 3).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === 0 ? 'bg-primary' : 'bg-base-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuCarousel;
