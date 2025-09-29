import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Play, Pause, Volume2, VolumeX, Maximize, SkipBack, SkipForward } from 'lucide-react';
// import { useParams } from 'react-router-dom';

export default function MoviePlayerPage() {
  const handleBackClick = () => {
    window.location.href = '/home';
  };
  const videoRef = useRef(null);
  const controlsTimeoutRef = useRef(null);
  const titleTimeoutRef = useRef(null);
//   const { id } = useParams();

  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [showTitle, setShowTitle] = useState(true);
  const [isHoveringControls, setIsHoveringControls] = useState(false);

  const movieTitle = "Sample Movie Title";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      titleTimeoutRef.current = setTimeout(() => {
        setShowTitle(false);
      }, 3000);
    }

    return () => {
      if (titleTimeoutRef.current) {
        clearTimeout(titleTimeoutRef.current);
      }
    };
  }, [isPlaying]);

  const handleMouseMove = () => {
    setShowControls(true);
    
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }

    if (isPlaying && !isHoveringControls) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    const seekTime = (e.target.value / 100) * duration;
    video.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === '0');
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (isMuted) {
      video.volume = volume || 0.5;
      setIsMuted(false);
    } else {
      video.volume = 0;
      setIsMuted(true);
    }
  };

  const skip = (seconds) => {
    const video = videoRef.current;
    video.currentTime = Math.max(0, Math.min(video.currentTime + seconds, duration));
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current.parentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div 
      className="relative w-full h-screen bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && !isHoveringControls && setShowControls(false)}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
        onClick={togglePlayPause}
      />

      {/* Back Button - Top Left */}
      <div 
        className={`absolute top-0 left-0 p-6 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={handleBackClick}
          className="w-12 h-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 flex items-center justify-center transition-all"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Title - Top Right (appears when playing, fades after 3s) */}
      <div 
        className={`absolute top-0 right-0 p-6 transition-opacity duration-500 ${
          showTitle && isPlaying ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1 className="text-white text-2xl font-bold drop-shadow-lg">{movieTitle}</h1>
      </div>

      {/* Controls Overlay */}
      <div 
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
        onMouseEnter={() => setIsHoveringControls(true)}
        onMouseLeave={() => setIsHoveringControls(false)}
      >
        {/* Seek Bar */}
        <div className="px-8 pt-4">
          <div className="relative group">
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSeek}
              className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer seek-bar group-hover:h-2 transition-all"
              style={{
                background: `linear-gradient(to right, #e50914 0%, #e50914 ${progress}%, #4a4a4a ${progress}%, #4a4a4a 100%)`
              }}
            />
          </div>
        </div>

        {/* Controls Bar */}
        <div className="flex items-center justify-between px-8 py-4">
          {/* Left Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlayPause}
              className="text-white hover:scale-110 transition-transform"
            >
              {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
            </button>

            <button
              onClick={() => skip(-10)}
              className="text-white hover:scale-110 transition-transform"
            >
              <SkipBack className="w-6 h-6" />
            </button>

            <button
              onClick={() => skip(10)}
              className="text-white hover:scale-110 transition-transform"
            >
              <SkipForward className="w-6 h-6" />
            </button>

            {/* Volume Control */}
            <div className="flex items-center gap-2 group">
              <button
                onClick={toggleMute}
                className="text-white hover:scale-110 transition-transform"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-6 h-6" />
                ) : (
                  <Volume2 className="w-6 h-6" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-0 group-hover:w-20 transition-all duration-300 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer volume-bar"
              />
            </div>

            {/* Time Display */}
            <div className="text-white text-sm font-medium">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          {/* Center - Title */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h2 className="text-white text-lg font-semibold">{movieTitle}</h2>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleFullscreen}
              className="text-white hover:scale-110 transition-transform"
            >
              <Maximize className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .seek-bar::-webkit-slider-thumb {
          appearance: none;
          width: 0;
          height: 0;
          background: #e50914;
          cursor: pointer;
          border-radius: 50%;
          transition: all 0.2s;
        }

        .seek-bar:hover::-webkit-slider-thumb {
          width: 16px;
          height: 16px;
        }

        .volume-bar::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          background: white;
          cursor: pointer;
          border-radius: 50%;
        }

        .seek-bar::-moz-range-thumb {
          width: 0;
          height: 0;
          background: #e50914;
          cursor: pointer;
          border: none;
          border-radius: 50%;
          transition: all 0.2s;
        }

        .seek-bar:hover::-moz-range-thumb {
          width: 16px;
          height: 16px;
        }

        .volume-bar::-moz-range-thumb {
          width: 12px;
          height: 12px;
          background: white;
          cursor: pointer;
          border: none;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
}