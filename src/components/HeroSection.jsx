import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HeroSection({ data }) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted; // toggle video directly
      setIsMuted(videoRef.current.muted);             // update state for icon
    }
  };

  return (
    <div className="relative w-full h-[100vh] bg-black overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={data?.video}
        autoPlay
        playsInline
        loop
        muted={isMuted} // remove React binding
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col justify-center pl-12 pr-8">
        {/* Series badge and title */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-red-600 text-white px-1 py-0.5 text-xs font-bold">N</span>
            <span className="text-white text-sm font-medium tracking-wider">SERIES</span>
          </div>
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-2"
            style={{ fontFamily: 'serif', letterSpacing: '0.02em' }}
          >
            {data?.title}
          </h1>
          <p className="text-white text-lg max-w-xl">{data?.description}</p>
        </div>

        {/* Control buttons */}
        <div className="flex items-center gap-4 mt-6">
          <button
            onClick={() => navigate('/player')}
            className="flex items-center gap-3 bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-200 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Play
          </button>

          <button className="flex items-center gap-3 bg-gray-600 bg-opacity-70 text-white px-6 py-3 rounded font-semibold hover:bg-opacity-90 transition-all">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            More Info
          </button>
        </div>
      </div>

      {/* Volume / mute button */}
      <div className="absolute bottom-8 right-8">
        <button
          onClick={toggleMute}
          className="w-12 h-12 border-2 border-white border-opacity-60 rounded-full flex items-center justify-center text-white hover:border-opacity-100 transition-all"
        >
          {isMuted ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
