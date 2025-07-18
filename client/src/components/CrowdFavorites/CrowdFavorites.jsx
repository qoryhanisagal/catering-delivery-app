import crowdFavorites from '../../data/crowdFavorites';

export default function CrowdFavorites() {
  return (
    <section className="relative py-16 bg-gradient-to-tl from-primary via-secondary to-accent overflow-hidden">
      {/* Bottom accent glow */}
      <div className="absolute bottom-2 right-2 left-1/2 transform -translate-x-1/2 w-full h-12 bg-accent/30 blur-xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* SECTION TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-primary-content text-4xl lg:text-5xl font-bold mb-4">
            Try Our Crowd Favorites
          </h2>
          <p className="text-primary-content/80 text-lg max-w-2xl mx-auto">
            Discover the dishes our customers can't stop talking about
          </p>
        </div>

        {/* FAVORITES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {crowdFavorites.map((item) => (
            <div key={item.id} className="group">
              {/* CARD - Using daisyUI 5 card component */}
              <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-80 flex flex-col">
                {/* IMAGE CONTAINER - Using daisyUI 5 avatar with mask */}
                <figure className="pt-6 pb-4 flex justify-center">
                  <div className="avatar">
                    <div className="w-48 h-48 rounded-full">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="mask mask-squircle object-cover"
                      />
                    </div>
                  </div>
                </figure>

                {/* CARD CONTENT - Using daisyUI 5 card parts */}
                <div className="card-body text-center pt-0 px-4 pb-6">
                  <h3 className="card-title text-lg font-bold justify-center leading-tight">
                    {item.name}
                  </h3>

                  {/* ACTION BUTTON - Using daisyUI 5 card-actions part */}
                  <div className="card-actions justify-center mt-4">
                    <button className="btn btn-primary btn-lg group-hover:btn-secondary transition-colors duration-300">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
