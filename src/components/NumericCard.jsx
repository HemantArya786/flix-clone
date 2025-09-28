import React from 'react';

const NumericCard = ({ number, title, label, additionalLabel, image }) => {
  const NumberSVG = ({ num }) => {
    const svgs = {
      1: (
        <svg width="100%" height="100%" viewBox="0 0 81 154" className="w-32 h-40">
          <path stroke="#595959" strokeWidth="4" fill="none" d="M35.377 152H72.887V2.875L2 19.615V49.646L35.377 38.231V152Z"></path>
        </svg>
      ),
      2: (
        <svg width="100%" height="100%" viewBox="0 0 81 154" className="w-32 h-40">
          <path stroke="#595959" strokeWidth="4" fill="none" d="M2 152h77V122.769L49.425 93.224c-8.481-8.481-13.077-18.357-13.077-28.133 0-11.644 9.228-20.872 20.872-20.872s20.872 9.228 20.872 20.872H106c0-32.32-26.552-58.872-58.872-58.872S-11.744 32.771-11.744 65.091c0 19.904 7.834 38.657 22.048 52.871L37.256 122H2v30z"></path>
        </svg>
      ),
      3: (
        <svg width="100%" height="100%" viewBox="0 0 81 154" className="w-32 h-40">
          <path stroke="#595959" strokeWidth="4" fill="none" d="M81 42.816c0-11.593-4.017-21.169-12.051-28.728C60.914 6.529 50.455 2.75 37.747 2.75c-11.844 0-22.161 3.779-30.951 11.338C-1.339 21.647-5.356 31.223-5.356 42.816c0 8.124 2.42 15.307 7.26 21.549 4.84 6.242 11.454 10.637 19.842 13.185v.744c-9.632 2.548-17.277 7.315-22.935 14.301C-6.827 99.581-9.748 108.081-9.748 118.062c0 12.587 4.388 23.046 13.164 31.377 8.776 8.331 20.235 12.497 34.377 12.497s25.601-4.166 34.377-12.497C81.146 141.108 85.534 130.649 85.534 118.062c0-9.981-2.921-18.481-8.759-25.467-5.838-6.986-13.483-11.753-22.935-14.301v-.744c8.388-2.548 15.002-6.943 19.842-13.185C78.58 58.123 81 50.94 81 42.816z"></path>
        </svg>
      ),
      4: (
        <svg width="100%" height="100%" viewBox="0 0 81 154" className="w-32 h-40">
          <path stroke="#595959" strokeWidth="4" fill="none" d="M81 101.5h-15.5V152h-30V101.5H0V76.207L35.5 2h30v74.5H81v25zM35.5 76.5V31.5L17 76.5h18.5z"></path>
        </svg>
      ),
      5: (
        <svg width="100%" height="100%" viewBox="0 0 81 154" className="w-32 h-40">
          <path stroke="#595959" strokeWidth="4" fill="none" d="M105.588 32.174V2H13.534l-8.3 88.357h32.463c2.145-2.362 4.866-4.254 8.143-5.675 3.585-1.554 7.543-2.328 11.859-2.328 6.247 0 11.418 1.745 15.418 5.255 4.061 3.564 6.104 8.37 6.104 14.265 0 6.041-2.044 10.89-6.121 14.387-3.999 3.43-9.162 5.132-15.401 5.132-4.299 0-8.17-.694-11.601-2.095-3.11-1.268-5.577-2.946-7.368-5.042H2.592c3.308 11.593 9.782 20.623 19.46 27.164C32.472 148.464 45.64 152 61.602 152c10.12 0 19.294-1.99 27.548-5.966 8.198-3.949 14.711-9.718 19.572-17.335 4.844-7.59 7.278-16.95 7.278-28.123 0-9.182-2.013-17.314-6.032-24.431-4.02-7.118-9.514-12.7-16.51-16.775-6.99-4.072-14.849-6.109-23.612-6.109-11.06 0-20.099 3.483-27.234 10.461l-3.892 3.806 3.273-35.354h63.595z"></path>
        </svg>
      )
    };
    return svgs[num] || svgs[1];
  };

  return (
    <div className={`relative rounded-lg overflow-hidden w-96 h-52  border border-yellow-300 flex items-center`}>
      {/* Large SVG number on the left */}
      <div className="absolute left-4 top-1/2 w-1/2 transform -translate-y-1/2 z-10 opacity-60">
        <NumberSVG num={number} />
      </div>
      
      {/* Show poster image on the right */}
      <div className="absolute right-4 border border-red-500 top-4 w-1/2 h-64 rounded-md overflow-hidden shadow-xl">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Labels stacked vertically */}
      <div className="absolute bottom-4 right-4 space-y-1">
        <div className="bg-red-600 px-3 py-1 text-white text-sm font-bold rounded">
          {label}
        </div>
        {additionalLabel && (
          <div className="bg-gray-700 bg-opacity-90 px-3 py-1 text-white text-sm font-medium rounded">
            {additionalLabel}
          </div>
        )}
      </div>
    </div>
  );
};

const ShowCards = () => {
  const cards = [
    {
      number: 1,
      title: "The Fabulous Lives of Bollywood Wives",
      label: "Recently added",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=600&fit=crop",
    },
    {
      number: 2,
      title: "Alice in Borderland",
      label: "New Season",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
    },
    {
      number: 3,
      title: "WWE SmackDown",
      label: "Live",
      additionalLabel: "Saturday",
      image: "https://images.unsplash.com/photo-1544737151-6e4b6999de8a?w=400&h=600&fit=crop",
    }
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-6 justify-center">
          {cards.map((card, index) => (
            <NumericCard
              key={index}
              number={card.number}
              title={card.title}
              label={card.label}
              additionalLabel={card.additionalLabel}
              image={card.image}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowCards;