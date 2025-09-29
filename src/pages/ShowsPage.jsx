import React from 'react';
import { useShows } from '../context/ShowsContext';
import ShowCard from '../components/ShowCard';

function ShowsPage() {
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
    <div className='min-h-[100vh] bg-black pt-24'>
      <div className="px-20 py-10">
        <h1 className="text-3xl text-white mb-8">TV Shows</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {shows.map((item, index) => (
            <ShowCard
              key={index}
              data={item}
              listTitle={"TV Shows"}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShowsPage
