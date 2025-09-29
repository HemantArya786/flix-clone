import React, { useEffect } from 'react'

function MoviesPage() {

     useEffect(() => {
      document.title = "Movies | Netflix"; // Set the title for this page
    }, []);
  return (
    <div className='border'>
      MoviesPage
    </div>
  )
}

export default MoviesPage
