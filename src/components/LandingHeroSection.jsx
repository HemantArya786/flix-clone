import React, { useState } from 'react';

export default function LandingHeroSection() {
  const [email, setEmail] = useState('');

  const handleGetStarted = (e) => {
    e.preventDefault();
    console.log('Get started with email:', email);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background with movie posters collage */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/bebd95d0-65f9-41a9-9d12-4794db63653e/web/IN-en-20250922-TRIFECTA-perspective_5e75cfb4-3797-4f17-866b-181ff91a51dd_medium.jpg')`, // Empty as requested
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Unlimited movies,<br />
            TV shows and<br />
            more
          </h1>

          <p className="text-xl md:text-2xl mb-2">
            Starts at ₹149. Cancel at any time.
          </p>

          <p className="text-lg mb-8">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          {/* Email signup form */}
          <form onSubmit={handleGetStarted} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 bg-black bg-opacity-50 border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:border-white"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold rounded transition-colors whitespace-nowrap"
            >
              Get Started &gt;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}