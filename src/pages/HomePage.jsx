import React from "react";
import HeroSection from "../components/HeroSection";
import ShowCard from "../components/ShowCard";
import NumericCard from "../components/NumericCard";

function HomePage() {
  const shows = [
    {
      title: "Heartstopper",
      image:
        "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=300&fit=crop",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      rating: "U/A 16+",
      seasons: "4 Seasons",
      genres: ["Nostalgic", "Ominous", "Sci-Fi TV"],
      isNew: true,
    },
    {
      title: "Money Heist",
      image:
        "https://images.unsplash.com/photo-1489599142406-ba4bb7abaa98?w=400&h=300&fit=crop",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      rating: "U/A 16+",
      seasons: "5 Seasons",
      genres: ["Crime", "Thriller", "Drama"],
      isNew: false,
    },
    {
      title: "Stranger Things",
      image:
        "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=300&fit=crop",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      rating: "U/A 16+",
      seasons: "4 Seasons",
      genres: ["Nostalgic", "Ominous", "Sci-Fi TV"],
      isNew: false,
    },
    {
      title: "Stranger Things",
      image:
        "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=300&fit=crop",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      rating: "U/A 16+",
      seasons: "4 Seasons",
      genres: ["Nostalgic", "Ominous", "Sci-Fi TV"],
      isNew: false,
    },
    {
      title: "The Crown",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      rating: "U/A 13+",
      seasons: "6 Seasons",
      genres: ["Period Drama", "Historical", "Royal"],
      isNew: true,
    },
  ];

  return (
    <div className=" min-h-[100vh]">
      <HeroSection />

      <section className="p-10">
        <h1 className="text-5xl text-white py-5 ">TV Action & Adventure</h1>
        <div className="flex gap-5 ">
          {shows.map((item, index) => (
            <ShowCard
              key={index}
              data={item}
              listTitle={"TV Action & Adventure"}
            />
          ))}
        </div>
      </section>

      <NumericCard />

      <section className="p-10">
        <h1 className="text-5xl text-white py-5 ">TV Action & Adventure</h1>
        <div className="flex gap-5 ">
          {shows.map((item, index) => (
            <ShowCard
              key={index}
              data={item}
              listTitle={"TV Action & Adventure"}
            />
          ))}
        </div>
      </section>
      <section className="p-10">
        <h1 className="text-5xl text-white py-5 ">TV Action & Adventure</h1>
        <div className="flex gap-5 ">
          {shows.map((item, index) => (
            <ShowCard
              key={index}
              data={item}
              listTitle={"TV Action & Adventure"}
            />
          ))}
        </div>
      </section>
      <section className="p-10">
        <h1 className="text-5xl text-white py-5 ">TV Action & Adventure</h1>
        <div className="flex gap-5 ">
          {shows.map((item, index) => (
            <ShowCard
              key={index}
              data={item}
              listTitle={"TV Action & Adventure"}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
