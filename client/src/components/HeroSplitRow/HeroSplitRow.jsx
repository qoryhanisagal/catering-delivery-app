export default function HeroSplitRow({
  title,
  subtitle,
  buttonText,
  buttonAction,
  visual,
  visualType = 'image',
  reverse = false,
}) {
  const contentOrder = reverse ? 'lg:flex-row-reverse' : 'lg:flex-row';

  return (
    <div
      className={`flex flex-col ${contentOrder} items-center justify-between gap-8 lg:gap-12 py-12`}
    >
      {/* TEXT CONTENT */}
      <div className="lg:w-1/2 text-center lg:text-left px-4">
        <h2 className="text-primary text-3xl lg:text-4xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-base-content/80 text-lg mb-6 max-w-md mx-auto lg:mx-0">
          {subtitle}
        </p>
        {buttonText && (
          <button className="btn btn-primary btn-lg" onClick={buttonAction}>
            {buttonText}
          </button>
        )}
      </div>

      {/* VISUAL CONTENT */}
      <div className="lg:w-1/2 px-4">
        <div className="card bg-base-200 shadow-xl">
          {visualType === 'video' ? (
            <figure className="aspect-video overflow-hidden">
              <iframe
                className="w-full h-full"
                src={visual}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </figure>
          ) : (
            <figure>
              <img
                src={visual}
                alt={title}
                className="w-full h-auto object-cover rounded-lg"
              />
            </figure>
          )}
        </div>
      </div>
    </div>
  );
}
