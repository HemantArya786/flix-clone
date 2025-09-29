import { useShow } from "../hooks/useShow";

export default function EpisodeCard() {
  const { data } = useShow();
  return (
    <div className="bg-[#333333] text-white p-4 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        {/* Episode Number */}
        <div className="text-2xl font-light text-gray-300 min-w-[45px]">
          3
        </div>
        
        {/* Thumbnail */}
        <div className="relative w-30 h-20 bg-gray-800 rounded overflow-hidden flex-shrink-0">
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=face" 
            alt="Episode thumbnail"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-medium text-white">
              Episode 3
            </h3>
            <span className="text-gray-400 text-sm ml-4 flex-shrink-0">
              40m
            </span>
          </div>
          
          <p className="text-gray-300 text-sm leading-relaxed">
            While doing volunteer work as punishment for fighting, Si-eun begins to form a bond with new friends — but trouble continues to find him.
          </p>
        </div>
      </div>
    </div>
  );
}