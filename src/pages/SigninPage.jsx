import React, { useState } from 'react';
import Navbar from '../components/Navbar';

export default function SigninPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log('Sign in with:', { email, password, rememberMe });
  };

  const handleSignInCode = () => {
    console.log('Use sign-in code');
  };

  return (
    <div className="min-h-screen b-black text-white">

      {/* Background with same hero image */}
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/bebd95d0-65f9-41a9-9d12-4794db63653e/web/IN-en-20250922-TRIFECTA-perspective_5e75cfb4-3797-4f17-866b-181ff91a51dd_medium.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Sign In Form */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="w-full max-w-md bg-black/80 p-8 rounded-lg">
            <h1 className="text-3xl font-bold mb-8">Sign In</h1>

            <form onSubmit={handleSignIn} className="space-y-4">
              {/* Email/Mobile Input */}
              <div>
                <input
                  type="text"
                  placeholder="Email or mobile number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-white focus:bg-gray-600/60"
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-white focus:bg-gray-600/60"
                  required
                />
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition-colors"
              >
                Sign In
              </button>
            </form>

            {/* OR divider */}
            <div className="text-center my-6">
              <span className="text-gray-400">OR</span>
            </div>

            {/* Use sign-in code button */}
            <button
              onClick={handleSignInCode}
              className="w-full py-3 bg-gray-600/60 hover:bg-gray-500/70 text-white font-semibold rounded transition-colors"
            >
              Use a sign-in code
            </button>

            {/* Forgot password link */}
            <div className="text-center mt-4">
              <a href="#" className="text-white hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Remember me checkbox */}
            <div className="flex items-center mt-6">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-red-600 bg-gray-700 border-gray-600 rounded focus:ring-red-500"
              />
              <label htmlFor="rememberMe" className="ml-2 text-white">
                Remember me
              </label>
            </div>

            {/* Sign up link */}
            <div className="mt-8 text-gray-400">
              <span>New to Netflix? </span>
              <a href="#" className="text-white hover:underline">
                Sign up now.
              </a>
            </div>

            {/* reCAPTCHA notice */}
            <div className="mt-6 text-xs text-gray-500">
              <p>
                This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
                <a href="#" className="text-blue-400 hover:underline">
                  Learn more.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}