import React from "react";
import HeroSection from "../components/HeroSection";
import ShowCard from "../components/ShowCard";
import NumericCard from "../components/NumericCard";
import { useShows } from "../context/ShowsContext";

function HomePage() {
  const { shows, loading, error } = useShows();

  if (loading) {
    return (
      <div className="min-h-[100vh] flex items-center justify-center bg-black">
        <div className="text-white text-xl">Loading shows...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[100vh] flex items-center justify-center bg-black">
        <div className="text-red-500 text-xl">Error loading shows: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-[100vh] bg-black ">
      <HeroSection />

      <section className="p-10">
        <h1 className="text-xl text-white py-5">TV Action & Adventure</h1>
        <div className="flex gap-7">
          {shows?.map((item, index) => (
            <ShowCard
              key={item.id || index}
              data={item}
              listTitle={"TV Action & Adventure"}
            />
          ))}
        </div>
      </section>

      <NumericCard />
    </div>
  );
}

export default HomePage;