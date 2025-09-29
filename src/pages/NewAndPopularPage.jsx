




import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import ShowCard from "../components/ShowCard";
import NumericCard from "../components/NumericCard";
import MultiCarousel from "../components/MultiCarousel";
import { useShows } from "../context/ShowsContext";

function NewAndPopularPage() {
  const { shows, loading, error } = useShows();

   useEffect(() => {
    document.title = "Movies | Netflix"; // Set the title for this page
  }, []);

  if (loading) {
    return (
      <div className="min-h-[100vh] flex items-center justify-center bg-[#141414]">
        <div className="text-white text-xl">Loading shows...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[100vh] flex items-center justify-center bg-[#141414]">
        <div className="text-red-500 text-xl">Error loading shows: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-[100vh] bg-[#141414]  ">
      <HeroSection />

      <MultiCarousel title="TV Action & Adventure">
        {shows?.map((item, index) => (
          <ShowCard
            key={item.id || index}
            data={item}
            listTitle={"TV Action & Adventure"}
          />
        ))}
      </MultiCarousel>
        <MultiCarousel title="TV Action & Adventure">
        {shows?.map((item, index) => (
          <ShowCard
            key={item.id || index}
            data={item}
            listTitle={"TV Action & Adventure"}
          />
        ))}
      </MultiCarousel>
        <MultiCarousel title="TV Action & Adventure">
        {shows?.map((item, index) => (
          <ShowCard
            key={item.id || index}
            data={item}
            listTitle={"TV Action & Adventure"}
          />
        ))}
      </MultiCarousel>
        <MultiCarousel title="TV Action & Adventure">
        {shows?.map((item, index) => (
          <ShowCard
            key={item.id || index}
            data={item}
            listTitle={"TV Action & Adventure"}
          />
        ))}
      </MultiCarousel>
        <MultiCarousel title="TV Action & Adventure">
        {shows?.map((item, index) => (
          <ShowCard
            key={item.id || index}
            data={item}
            listTitle={"TV Action & Adventure"}
          />
        ))}
      </MultiCarousel>
    </div>
  );
}

export default NewAndPopularPage;

