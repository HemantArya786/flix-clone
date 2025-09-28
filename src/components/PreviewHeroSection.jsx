import { useState } from "react";
import { Play, Plus, ThumbsUp, X, Volume2, VolumeX } from "lucide-react";
import { useShow } from "../hooks/useShow";

export default function PreviewHeroSection() {
  const { data, closeShowPreview } = useShow();
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      >
      <video src={data?.video} autoPlay />
      </div>

      {/* Close ShowPreview Button */}
      <button
        onClick={closeShowPreview}
        className="absolute top-4 right-4 z-50 w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-all duration-200 shadow-lg"
      >
        <X size={20} />
      </button>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute top-4 right-16 z-50 w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-200"
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-end min-h-screen p-8 md:p-16">
        <div className="max-w-2xl">
          {/* Title */}
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              {data?.title ? data.title.toUpperCase() : "THE ROOKIE"}
            </h1>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 mb-8">
            <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors duration-200">
              <Play size={20} fill="black" />
              Play
            </button>
            <button className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition-colors duration-200">
              <Plus size={24} />
            </button>
            <button className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition-colors duration-200">
              <ThumbsUp size={20} />
            </button>
          </div>

          {/* Show Info */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4 text-sm">
              <span className="bg-red-600 px-2 py-1 text-xs font-semibold">
                U/A 16+
              </span>
              <span>gore, sexual content, suicide, violence</span>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span className="font-semibold text-white">2024</span>
              <span>6 Seasons</span>
              <span className="border px-2 py-1 text-xs">HD</span>
              <span className="border px-2 py-1 text-xs">🎵</span>
              <span className="border px-2 py-1 text-xs">💬</span>
            </div>

            <p className="text-lg max-w-xl leading-relaxed">
              In this engaging police procedural, a 45-year-old man becomes the
              LAPD's oldest rookie.
            </p>
          </div>

          {/* Cast and Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div>
              <div className="mb-4">
                <span className="text-gray-400">Cast: </span>
                <span>Nathan Fillion, Alyssa Diaz, Richard T. Jones, </span>
                <span className="text-gray-400 italic">more</span>
              </div>
            </div>

            <div>
              <div className="mb-4">
                <span className="text-gray-400">Genres: </span>
                <span>TV Dramas, TV Action & Adventure, Crime TV Shows</span>
              </div>

              <div>
                <span className="text-gray-400">This Show Is: </span>
                <span>Heartfelt, Exciting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
