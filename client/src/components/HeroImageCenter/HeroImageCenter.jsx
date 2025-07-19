// This component shows a big image in the center of the page
// It takes 3 props: image (the image URL), alt (description for screen readers), and caption (optional text under the image)
export default function HeroImageCenter({ image, alt, caption }) {
  return (
    // Main container that takes full width and adds some padding top and bottom
    <div className="w-full py-12">
      {/* Content wrapper that centers everything and limits the maximum width */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Card component from daisyUI that makes a nice box with shadow */}
        <div className="card bg-base-200 shadow-xl">
          {/* Figure tag is the correct HTML element for images with captions */}
          <figure>
            {/* The actual image element */}
            <img
              src={image} // Gets the image URL from props
              alt={alt} // Gets the alt text from props (important for accessibility!)
              className="w-full h-auto object-cover rounded-lg" // Makes image responsive and covers the container
            />
          </figure>
          {/* Only show the caption section if caption prop exists */}
          {caption && (
            // Card body section with centered text and some padding
            <div className="card-body text-center py-4">
              {/* Caption text with slightly faded color */}
              <p className="text-base-content/70">{caption}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
