import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies= useSelector((store) => store.movie);
  

  return (
    <div className="bg-black">
      <div className='-mt-24 relative z-20'>
        <MovieList title={"Now Playing Movies"} movies={movies?.nowPlayingMovies}/>
         <MovieList title={"Popular Movies"} movies={movies?.popularMovies}/>
         <MovieList title={"Top Rated Movies"} movies={movies?.topRated}/>
         
           <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies}/>
</div>

      {/*
      Movielist-popular
        - movie cards*n
      Movielist-now playing
      Movielist-Trending
      Movielist-upcoming
      Movielist-horror

      */}
     </div>

  )
}

export default SecondaryContainer
