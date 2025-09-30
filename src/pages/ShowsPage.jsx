// import React, { useEffect } from 'react';
// import { useShows } from '../context/ShowsContext';
// import ShowCard from '../components/ShowCard';
// import HeroSection from '../components/HeroSection';

// function ShowsPage() {
//   const { shows, loading, error } = useShows();

//      useEffect(() => {
//       document.title = "TV Shows| Netflix"; // Set the title for this page
//     }, []);

//   if (loading) {
//     return (
//       <div className="min-h-[100vh] flex items-center justify-center bg-[#141414]">
//         <div className="text-white text-xl">Loading shows...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-[100vh] flex items-center justify-center bg-[#141414]">
//         <div className="text-red-500 text-xl">Error loading shows: {error}</div>
//       </div>
//     );
//   }

//   return (
//     <div className='min-h-[100vh] bg-[#141414] pt-24'>
//       <div className="px-20 py-10">
    
//         <h1 className="text-3xl text-white mb-8">TV Shows</h1>
// .        
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
//           {shows.map((item, index) => (
//             <ShowCard
//               key={index}
//               data={item}
//               listTitle={"TV Shows"}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ShowsPage



import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import ShowCard from "../components/ShowCard";
import NumericCard from "../components/NumericCard";
import MultiCarousel from "../components/MultiCarousel";
import { useShows } from "../context/ShowsContext";

function ShowsPage() {
  const { shows, loading, error } = useShows();


   useEffect(() => {
    document.title = "Home | Netflix"; // Set the title for this page
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
      <HeroSection data={shows[9]} />

      <MultiCarousel title="TV Action & Adventure">
        {shows?.map((item, index) => (
          <ShowCard
            key={item.id || index}
            data={item}
            listTitle={"TV Action & Adventure"}
          />
        ))}
      </MultiCarousel>
       <div className="flex overflow-x-auto py-10 my-10" >
            {
                [1,2,3,4,5,6,7,8,9,10].map((item, index) => (<NumericCard data={shows} index={item} key={index} />))
            }
        </div>
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

export default ShowsPage;
