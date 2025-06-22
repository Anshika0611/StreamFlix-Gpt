import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';
const Videobg = ({movieId}) => {
  const trailerVideo=useSelector((store) => store.movie?.trailerVideo);
  useMovieTrailer(movieId)
  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden z-0">
      <div className="absolute top-0 left-0 w-full h-full">
        <iframe
  className="absolute top-0 left-0 w-[130vw] h-[130vh] -translate-x-[15vw] -translate-y-[15vh] border-none"
  src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}&start=0&end=60&modestbranding=1&rel=0&showinfo=0`}
  title="YouTube video"
  allow="autoplay; encrypted-media"
  
  allowFullScreen
></iframe>

      </div>
    </div>


  )
}

export default Videobg
