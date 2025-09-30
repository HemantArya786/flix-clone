import React from "react";
import { createPortal } from "react-dom";
import PreviewHeroSection from "./PreviewHeroSection";
import EpisodeCard from "./EpisodeCard";
import { useShow } from "../hooks/useShow";

function ShowPreview() {

    const {
      data,
   
    } = useShow();




  const modalContent = (
    <div className="fixed inset-0 z-[9999] bg-[] bg-opacity-80 flex items-start justify-center overflow-y-auto">
      <div className="relative w-full max-w-6xl bg-zinc-900 text-white shadow-2xl min-h-screen">
        <div className="w-full">
          <PreviewHeroSection />
          {data.seasonsData[0].episodes.map((episodeData)=> <EpisodeCard data={episodeData} />)}
         
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

export default ShowPreview;