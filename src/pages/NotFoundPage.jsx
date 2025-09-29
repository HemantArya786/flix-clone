import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Background - placeholder for user to add URL */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/pages/errors/bg-lost-in-space.png')`, // User will add the background URL here
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* Main heading */}
        <h1 className="text-6xl md:text-7xl font-light mb-8 tracking-wide">
          Lost your way?
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-light mb-12 leading-relaxed max-w-lg mx-auto">
          Sorry, we can't find that page. You'll find lots to explore on the home page.
        </p>

        {/* Netflix Home button */}
        <button
          onClick={handleHomeClick}
          className="bg-white text-black px-8 py-3 text-lg font-medium rounded transition-colors duration-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50"
        >
          Netflix Home
        </button>

        {/* Error code */}
        <div className="mt-16">
          <p className="text-lg font-light text-gray-300">
            Error Code <span className="font-medium">NSES-404</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;