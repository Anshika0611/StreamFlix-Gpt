import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const Videobg = ({movieId}) => {
  const trailerVideo=useSelector((store) => store.movie?.trailerVideo);
  useMovieTrailer(movieId)
  return (
   <div className=" relative w-full h-screen overflow-hidden">
      {/* Zoomed video to remove black bars, but fully visible */}
      <iframe
        className="absolute top-0 left-0 w-[150vw] h-[150vh] -translate-x-[20vw] -translate-y-[20vh] pointer-events-none"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}&start=0&end=30&modestbranding=1&rel=0&showinfo=0`}
        title="YouTube trailer"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Videobg
