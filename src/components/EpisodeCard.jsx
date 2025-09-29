// import { useShow } from "../hooks/useShow";

import {  useNavigate } from "react-router-dom";

export default function EpisodeCard({data}) {


const navigate = useNavigate()

  // const { data } = useShow();
  return (
    <div className=" text-white  p-4 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 border-b pb-5 border-gray-200">
        {/* Episode Number */}
        <div className="text-2xl font-light text-gray-300 min-w-[45px]">
          {data?.episodeNumber}
        </div>
        
        {/* Thumbnail */}
        <div className="relative w-40 h-20  rounded overflow-hidden flex-shrink-0" onClick={()=> navigate(`/player`)}>
          <img 
            src={data?.image} 
            alt="Episode thumbnail"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-medium text-white">
              {data?.title}
            </h3>
            <span className="text-gray-400 text-sm ml-4 flex-shrink-0">
              {data?.duration}
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