import { useState } from 'react';
import homeSlides from '../../data/homeSlides';

export default function HeroCarousel({
  slides = homeSlides,
  height = 'h-96 lg:h-[500px]',
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Debugging logs to check the current slide and slides data
  console.log('Current slide index:', currentSlide);
  console.log('Total slides:', slides.length);
  console.log('Slides data:', slides);
  
  if (!slides || slides.length === 0) {
    return <div>No slides available</div>;
  }
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={`relative w-full ${height} overflow-hidden`}>
      {/* Carousel Container */}
      <div className="carousel w-full h-full">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          
          return (
            <div
              key={slide.id}
              id={slide.id}
              className={`carousel-item relative w-full h-full ${
                isActive ? 'block' : 'hidden'
              }`}
              style={{ display: isActive ? 'block' : 'none' }}
            >
              {/* Background Image */}
              <img
                className="w-full h-full object-cover"
                src={slide.image}
                alt={slide.title}
              />
              
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-start px-8 lg:px-16">
                <div className="text-white max-w-lg">
                  <h1 className="text-4xl lg:text-6xl font-anton-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg lg:text-xl mb-6 font-medium">
                    {slide.subtitle}
                  </p>
                  {slide.price && (
                    <div className="mb-6">
                      <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-lg font-bold">
                        {slide.price}
                      </span>
                    </div>
                  )}
                  <button
                    className={`btn text-white font-bold px-8 py-3 rounded-full text-lg ${slide.buttonColor}`}
                  >
                    {slide.buttonText}
                  </button>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <button
                  onClick={prevSlide}
                  className="btn btn-circle bg-white bg-opacity-20 hover:bg-opacity-30 border-white text-white"
                >
                  <i className="bi bi-chevron-left text-xl"></i>
                </button>
                <button
                  onClick={nextSlide}
                  className="btn btn-circle bg-white bg-opacity-20 hover:bg-opacity-30 border-white text-white"
                >
                  <i className="bi bi-chevron-right text-xl"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-200 ${
              index === currentSlide
                ? 'text-primary text-xl'
                : 'text-white hover:text-primary text-lg'
            }`}
          >
            <i
              className={
                index === currentSlide ? 'bi bi-circle-fill' : 'bi bi-circle'
              }
            ></i>
          </button>
        ))}
      </div>
    </div>
  );
}
