import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies= useSelector((store) => store.movie);
  console.log(movies);
  console.log("All movies from Redux:", movies);
console.log("Now Playing Movies:", movies?.nowPlayingMovies);

  return (
    <div className="bg-black">
      <div className='-mt-24 relative z-20'>
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
         <MovieList title={"Popular"} movies={movies?.popularMovies}/>
         <MovieList title={"Top Rated"} movies={movies?.topRated}/>
         
           <MovieList title={"Upcoming"} movies={movies?.upcomingMovies}/>
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
