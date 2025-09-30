import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react"; // construction-like icon

const UnderConstructionPage = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/bebd95d0-65f9-41a9-9d12-4794db63653e/web/IN-en-20250922-TRIFECTA-perspective_5e75cfb4-3797-4f17-866b-181ff91a51dd_medium.jpg')`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <AlertTriangle size={80} className="text-white animate-bounce" />
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide text-white">
          Under Construction
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl font-light mb-10 leading-relaxed max-w-lg mx-auto text-gray-200">
          We’re working hard to bring you something awesome.  
          Please check back soon!
        </p>

        {/* Home button */}
        <button
          onClick={handleHomeClick}
          className="bg-white text-black px-8 py-3 text-lg font-semibold rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-white/70"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default UnderConstructionPage;
