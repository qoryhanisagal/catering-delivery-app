export default function HeroImageCenter({ image, alt, caption }) {
  return (
    <div className="w-full py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="card bg-base-200 shadow-xl">
          <figure>
            <img
              src={image}
              alt={alt}
              className="w-full h-auto object-cover rounded-lg"
            />
          </figure>
          {caption && (
            <div className="card-body text-center py-4">
              <p className="text-base-content/70">{caption}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
