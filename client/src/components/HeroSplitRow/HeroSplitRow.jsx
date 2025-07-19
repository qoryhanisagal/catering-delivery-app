// This component creates a flexible two-column layout with text on one side and an image/video on the other
// It can flip the layout order for storytelling sections
export default function HeroSplitRow({
  title, // Main heading text
  subtitle, // Description paragraph
  buttonText, // Optional button text (won't show if empty)
  buttonAction, // What happens when button is clicked
  visual, // Image URL or video embed link
  visualType = 'image', // Either 'image' or 'video' - defaults to image
  reverse = false, // Flips layout: false = text→visual, true = visual→text
}) {
  // Figure out which direction to arrange things on large screens
  // Normal: text comes first, then visual (left to right)
  // Reversed: visual comes first, then text (right to left)
  const contentOrder = reverse ? 'lg:flex-row-reverse' : 'lg:flex-row';

  return (
    // Main container - stacks vertically on mobile, side-by-side on desktop
    // py-12 adds nice spacing above and below
    <div
      className={`flex flex-col ${contentOrder} items-center justify-between gap-8 lg:gap-12 py-12`}
    >
      {/* LEFT SIDE: Text content section */}
      {/* Takes half the width on large screens, full width on mobile */}
      <div className="lg:w-1/2 text-center lg:text-left px-4">
        {/* Main heading - uses daisyUI's primary brand color */}
        {/* Responsive text size: smaller on mobile, bigger on desktop */}
        <h2 className="text-primary text-3xl lg:text-4xl font-bold mb-4">
          {title}
        </h2>

        {/* Subtitle with slightly faded color for visual hierarchy */}
        {/* max-w-md keeps text readable, centers on mobile, left-aligns on desktop */}
        <p className="text-base-content/80 text-lg mb-6 max-w-md mx-auto lg:mx-0">
          {subtitle}
        </p>

        {/* Button only shows up if buttonText is provided */}
        {buttonText && (
          <button className="btn btn-primary btn-lg" onClick={buttonAction}>
            {buttonText}
          </button>
        )}
      </div>

      {/* RIGHT SIDE: Visual content section */}
      {/* Also takes half width on large screens */}
      <div className="lg:w-1/2 px-4">
        {/* daisyUI card wrapper - gives it a nice elevated look */}
        <div className="card bg-base-200 shadow-xl">
          {/* Check if we're showing a video or image */}
          {visualType === 'video' ? (
            // VIDEO: YouTube/Vimeo embed
            // aspect-video keeps it at 16:9 ratio, overflow-hidden keeps it tidy
            <figure className="aspect-video overflow-hidden">
              <iframe
                className="w-full h-full" // Fill the container completely
                src={visual} // Video embed URL
                title={title} // For screen readers
                // Security permissions for embedded videos
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen // Let users go fullscreen
              ></iframe>
            </figure>
          ) : (
            // IMAGE: Regular photo
            // figure tag is proper HTML for images
            <figure>
              <img
                src={visual} // Image URL
                alt={title} // Screen reader description
                // Responsive image: full width, auto height, fills container nicely
                className="w-full h-auto object-cover rounded-lg"
              />
            </figure>
          )}
        </div>
      </div>
    </div>
  );
}
