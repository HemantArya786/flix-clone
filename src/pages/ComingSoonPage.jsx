import { useNavigate } from "react-router-dom";

const ComingSoonPage = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/bebd95d0-65f9-41a9-9d12-4794db63653e/web/IN-en-20250922-TRIFECTA-perspective_5e75cfb4-3797-4f17-866b-181ff91a51dd_medium.jpg')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* Heading */}
        <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-wide animate-pulse">
          Coming Soon
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-light mb-10 leading-relaxed max-w-lg mx-auto">
          Something exciting is on the way. Stay tuned!
        </p>

        {/* Home button */}
        <button
          onClick={handleHomeClick}
          className="bg-white text-black px-8 py-3 text-lg font-medium rounded transition-colors duration-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50"
        >
          Back to Home
        </button>

      
      </div>
    </div>
  );
};

export default ComingSoonPage;
