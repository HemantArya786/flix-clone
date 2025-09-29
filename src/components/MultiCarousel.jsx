import { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const MultiCarousel = ({ children, title }) => {
  const [responsive, setResponsive] = useState({});

  useEffect(() => {
    const calculateItemsPerScreen = () => {
      const screenWidth = window.innerWidth;
      const padding = 80; // 40px padding on each side (p-10 = 40px)
      const cardWidth = 330; // ShowCard width (updated)
      const gap = 24; // Gap between items (6 * 4px = 24px in Tailwind)

      const availableWidth = screenWidth - padding;
      const itemsWithGaps = Math.floor((availableWidth + gap) / (cardWidth + gap));
      const maxItems = Math.max(1, itemsWithGaps); // Ensure at least 1 item

      // Create responsive breakpoints dynamically
      const newResponsive = {};

      // Generate breakpoints for different screen sizes
      for (let width = 320; width <= 4000; width += 100) {
        const availWidth = width - padding;
        const items = Math.max(1, Math.floor((availWidth + gap) / (cardWidth + gap)));

        newResponsive[`breakpoint_${width}`] = {
          breakpoint: { max: width + 100, min: width },
          items: Math.min(items, 8) // Cap at 8 items max for very large screens
        };
      }

      setResponsive(newResponsive);
    };

    calculateItemsPerScreen();
    window.addEventListener('resize', calculateItemsPerScreen);

    return () => window.removeEventListener('resize', calculateItemsPerScreen);
  }, []);

  const CustomLeftArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{ zIndex: 10001 }}
      aria-label="Previous"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{ zIndex: 10001 }}
      aria-label="Next"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );

  return (
    <section className="p-10">
      {title && <h1 className="text-xl text-white py-5">{title}</h1>}
      <div className="group relative" style={{ overflow: 'visible' }}>
        <Carousel
          responsive={responsive}
          infinite={false}
          autoPlay={false}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={300}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="px-3"
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          renderArrowsWhenDisabled={false}
        >
          {children}
        </Carousel>
      </div>
    </section>
  );
};

export default MultiCarousel;