import { useState, useEffect, useRef, useCallback } from 'react';
import homeSlides from '../../data/homeSlides';

export default function HeroCarousel({
  slides = homeSlides, // If no slides are passed in, use the default homeSlides data
  height = 'h-96 lg:h-[500px]', // Default height - medium on mobile, larger on desktop
}) {
  // STATE: Keep track of which slide is currently showing (starts at 0 = first slide)
  const [currentSlide, setCurrentSlide] = useState(0);

  // REF: Store the auto-advance timer so we can cancel it when needed
  const timerRef = useRef();

  // FUNCTION: Move to the next slide (with wraparound - after last slide, go to first)
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  // FUNCTION: Move to the previous slide (with wraparound - before first slide, go to last)
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // FUNCTION: Jump directly to a specific slide (used by pagination dots)
  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  // AUTO-ADVANCE LOGIC: Automatically move to next slide every 3 seconds
  useEffect(() => {
    // Don't start timer if there are no slides
    if (!slides || slides.length === 0) return;

    // Set up a 3-second timer to advance to next slide
    timerRef.current = setTimeout(() => {
      nextSlide();
    }, 3000);

    // CLEANUP: Cancel the timer when component unmounts or slide changes
    // This prevents memory leaks and multiple timers running
    return () => clearTimeout(timerRef.current);
  }, [currentSlide, slides, nextSlide]); // Re-run when slide changes

  // SAFETY CHECK: Don't render anything if no slides are available
  if (!slides || slides.length === 0) {
    return <div>No slides available</div>;
  }

  return (
    // MAIN CONTAINER: Full width with custom height, positioned relative for absolute children
    <div className={`relative w-full ${height}`}>
      {/* CAROUSEL WRAPPER: Uses daisyUI carousel classes */}
      <div className="carousel w-full h-full">
        {/* RENDER EACH SLIDE: Loop through all slides but only show the current one */}
        {slides.map((slide, index) => (
          <div
            key={slide.id} // Unique key for React rendering
            id={slide.id} // HTML id for potential anchor linking
            className={`hero carousel-item relative w-full h-full ${
              // VISIBILITY LOGIC: Only show current slide, hide others
              index === currentSlide ? 'block' : 'hidden'
            }`}
            style={{
              // BACKGROUND IMAGE: Set slide image as background with proper sizing
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover', // Image covers entire area
              backgroundPosition: 'center', // Center the image
            }}
          >
            {/* OVERLAY: Semi-transparent layer over background image for text readability */}
            <div className="hero-overlay bg-opacity-5"></div>

            {/* SLIDE CONTENT: Text and button positioned absolutely over the image */}
            <div className="absolute inset-0 flex items-center text-white">
              <div className="w-full px-8 lg:px-28">
                {' '}
                {/* Responsive padding */}
                <div className="max-w-lg">
                  {' '}
                  {/* Limit content width for readability */}
                  {/* SLIDE TITLE: Large, bold heading with text shadow for visibility */}
                  <h1
                    className="text-2xl lg:text-6xl font-bold mb-4"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                  >
                    {slide.title}
                  </h1>
                  {/* SLIDE SUBTITLE: Smaller text with lighter shadow */}
                  <p
                    className="text-lg lg:text-xl mb-6"
                    style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}
                  >
                    {slide.subtitle}
                  </p>
                  {/* PRICE BADGE: Only show if slide has a price */}
                  {slide.price && (
                    <div className="mb-6">
                      <span className="badge badge-primary badge-lg">
                        {slide.price}
                      </span>
                    </div>
                  )}
                  {/* CALL-TO-ACTION BUTTON: Primary button with custom styling */}
                  <button className="btn btn-primary font-bold px-8 py-3 rounded-full text-lg shadow-lg">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>

            {/* NAVIGATION ARROWS: Left and right arrows to manually control slides */}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              {/* PREVIOUS BUTTON: Goes to previous slide when clicked */}
              <button
                onClick={prevSlide}
                className="btn btn-circle btn-ghost btn-xl bg-white bg-opacity-20 hover:bg-opacity-30"
              >
                <i className="bi bi-caret-left-fill text-xl"></i>{' '}
                {/* Bootstrap icon */}
              </button>

              {/* NEXT BUTTON: Goes to next slide when clicked */}
              <button
                onClick={nextSlide}
                className="btn btn-circle btn-ghost btn-xl bg-white bg-opacity-20 hover:bg-opacity-30"
              >
                <i className="bi bi-caret-right-fill text-xl"></i>{' '}
                {/* Bootstrap icon */}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION DOTS: Small circles at bottom showing which slide is active */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)} // Jump to specific slide when dot is clicked
            className={`btn btn-xs btn-circle ${
              // ACTIVE STATE: Highlight current slide's dot
              index === currentSlide
                ? 'btn-primary' // Active dot is primary color
                : 'btn-ghost bg-white bg-opacity-30 hover:btn-primary' // Inactive dots are translucent
            }`}
          >
            {/* SCREEN READER TEXT: Hidden text for accessibility */}
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
