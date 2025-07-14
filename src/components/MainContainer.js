import React from 'react'
import { useSelector } from 'react-redux';
import Videobg from './Videobg';
import VideoTitle from './VideoTitle';


const MainContainer = () => {
  
    const movies=useSelector(store => store.movie?.nowPlayingMovies);
   if (!movies || movies.length === 0) return null;


    const mainMovie=movies[0];
    
    const { original_title, overview,id } = mainMovie;
   
 
 
    return (
    <div className=' bg-black pt-[%] sm:pt-[12%] md:pt-0'>
      <VideoTitle title={original_title} overview={overview}/>
      <Videobg movieId={id}/>
    </div>
  )
}

export  default MainContainer
