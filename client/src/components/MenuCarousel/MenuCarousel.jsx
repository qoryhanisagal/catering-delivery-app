const MenuCarousel = ({ items, onItemClick, onOrderClick }) => {
  return (
    <div className="w-full mb-8">
      {/* Carousel container */}
      <div className="carousel carousel-vertical sm:carousel-horizontal carousel-center w-full space-y-2 sm:space-y-0 sm:space-x-4 p-2 sm:p-4">
        {items.map((item) => (
          <div key={item.id} className="carousel-item w-full sm:w-auto">
            <div
              className="card bg-base-100 shadow-lg cursor-pointer hover:shadow-xl transition-shadow w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 flex-shrink-0"
              onClick={() => onItemClick?.(item)}
            >
              {/* Image with NEW badge */}
              <figure className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover rounded-t-lg"
                />
                {item.isNew && (
                  <div className="badge bg-neutral text-white border-neutral absolute top-2 left-2 sm:top-4 sm:left-4 font-bold text-xs sm:text-sm">
                    NEW
                  </div>
                )}
              </figure>

              {/* Card body */}
              <div className="card-body p-3 sm:p-4">
                <h2 className="card-title text-xl sm:text-2xl md:text-3xl font-stardos-stencil-bold">
                  {item.title}
                </h2>
                <p className="text-base-content/70 text-xs sm:text-sm md:text-md line-clamp-2 text-left font-stardos-stencil-normal">
                  {item.description}
                </p>

                {/* Divider */}
                <div className="divider my-2 sm:my-3"></div>

                {/* Order button */}
                <div className="card-actions justify-center">
                  <button
                    className="btn btn-wide bg-transparent border-none text-base-content font-stardos-stencil-bold hover:bg-transparent rounded-none text-sm sm:text-lg md:text-xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOrderClick?.(item);
                    }}
                  >
                    <i className="bi bi-bag-fill text-primary text-sm sm:text-lg md:text-xl"></i>
                    ORDER NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {items.slice(0, 3).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              index === 0 ? 'bg-primary' : 'bg-base-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuCarousel;
