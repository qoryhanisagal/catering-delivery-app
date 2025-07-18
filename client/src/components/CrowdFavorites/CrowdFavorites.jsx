import crowdFavorites from '../../data/crowdFavorites';

export default function CrowdFavorites() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        
        {/* SECTION TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Try out our crowd favorites
          </h2>
        </div>

        {/* FAVORITES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {crowdFavorites.map((item) => (
            <div key={item.id} className="group">
              
              {/* CARD - Using daisyUI 5 card component */}
              <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                
                {/* IMAGE CONTAINER - Circular background */}
                <figure className="pt-8 pb-4">
                  <div className="w-32 h-32 bg-base-300 rounded-full flex items-center justify-center p-3">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </figure>
                
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}