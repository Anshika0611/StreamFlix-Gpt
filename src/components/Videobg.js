import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';
import useMovieImage from '../hooks/UseMovieImage';

const Videobg = ({movieId}) => {
  const trailerVideo=useSelector((store) => store.movie?.trailerVideo); 
  useMovieTrailer(movieId)
  useMovieImage(movieId)
  const movieImage=useSelector((store)=>store.movie?.movieImage);
 
  
    const [showVideo, setShowVideo] = useState(false);
     // Delay showing the video
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 1000); // show video after 1 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
   <div className=" relative w-full h-screen overflow-hidden">
    {movieImage?.file_path &&(
     <img
        src={`https://image.tmdb.org/t/p/original${movieImage.file_path}`} 
        // ideally a backdrop_path
        alt="Movie background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
   )}
      {/* Zoomed video to remove black bars, but fully visible */}
       {showVideo && trailerVideo?.key && (
      <iframe
        className="absolute top-0 left-0 w-[150vw] h-[150vh] -translate-x-[20vw] -translate-y-[20vh] pointer-events-none"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}&start=0&end=30&modestbranding=1&rel=0&showinfo=0`}
        title="YouTube trailer"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>)}
    </div>
  )
}

export default Videobg
