import { Play, Plus, ThumbsUp, ChevronDown, Divide } from "lucide-react";
import ShowPreview from "./ShowPreview";
import { useShow } from "../hooks/useShow";

export default function HoverCard() {
  const {
    data,
    positionClass,
    videoError,
    isShowPreviewOpen,
    openShowPreview,
    handleVideoError,
    handleVideoLoadStart
  } = useShow();

  return (
    <div className={`bg-zinc-900 w-[500px] h-[400px] absolute ${positionClass} top-0 z-50 rounded-lg shadow-2xl transform transition-all duration-300 ease-out animate-in fade-in zoom-in-95`}>
      <div className="relative h-[250px] overflow-hidden rounded-t-lg">
        {data?.video && !videoError ? (
          <video
            src={data.video}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            onError={handleVideoError}
            onLoadStart={handleVideoLoadStart}
          />
        ) : (
          <img
            src={data?.image}
            alt={data?.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="p-4 space-y-3 text-white">
        <div className="flex items-center space-x-2">
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
            <Play className="w-4 h-4 text-black ml-1" fill="black" />
          </button>
          <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition-colors">
            <Plus className="w-4 h-4 text-gray-300" />
          </button>
          <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition-colors">
            <ThumbsUp className="w-4 h-4 text-gray-300" />
          </button>
          <div className="flex-1"></div>
          <button
            className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition-colors"
            onClick={openShowPreview}
          >
            <ChevronDown className="w-4 h-4 text-gray-300" />
          </button>
        </div>

        <div className="flex items-center space-x-2 text-sm">
          <span className="bg-gray-700 px-2 py-1 rounded text-xs font-semibold text-white">
            {data?.rating}
          </span>
          <span className="text-gray-300">{data?.seasons}</span>
          <span className="bg-gray-700 px-2 py-1 rounded text-xs text-white">HD</span>
        </div>

        <div className="text-sm text-gray-300">{data?.genres.join(" • ")}</div>
      </div>

      {/* ShowPreview Modal */}
      {isShowPreviewOpen && <ShowPreview />}
    </div>
  );
}
