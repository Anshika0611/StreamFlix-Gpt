import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';
const Videobg = ({movieId}) => {
  const trailerVideo=useSelector((store) => store.movie?.trailerVideo);
  useMovieTrailer(movieId)
  return (
    <div className="w-full">
      <iframe 
      className=" w-screen aspect-video" 
      src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
      </iframe>
    </div>
  )
}

export default Videobg
