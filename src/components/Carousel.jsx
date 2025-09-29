import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ children, title }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollAmount = 310; // Adjust this value as needed
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust this value as needed
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    const current = scrollRef.current;
    if (current) {
      const handleScroll = () => checkScrollButtons();
      current.addEventListener('scroll', handleScroll);

      // Check initial state
      checkScrollButtons();

      return () => current.removeEventListener('scroll', handleScroll);
    }
  }, [children]);

  return (
    <section className="p-10">
      {title && <h1 className="text-xl text-white py-5">{title}</h1>}
      <div className="relative carousel-container" style={{ minHeight: '400px' }}>
        {/* Carousel Content */}
        <div
          ref={scrollRef}
          className="flex pb-4 px-1 scrollbar-hide carousel-content"
          onScroll={checkScrollButtons}
        >
          {React.Children.map(children, (child, index) => (
            <div key={index} className="flex-none mr-6" >
              {child}
            </div>
          ))}
          {/* Spacer to ensure last item is partially visible */}
          <div className="flex-none w-16"></div>
        </div>

        {/* Left Arrow Hover Area */}
        {canScrollLeft && (
          <div className="absolute left-0 top-0 bottom-4 w-16 z-20 flex items-center justify-center group">
            <button
              onClick={scrollLeft}
              className="bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
        )}

        {/* Right Arrow Hover Area */}
        {canScrollRight && (
          <div className="absolute right-0 top-0 bottom-4 w-16 z-20 flex items-center justify-center group">
            <button
              onClick={scrollRight}
              className="bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Carousel;