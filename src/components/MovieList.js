import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    // console.log(movies);
    
  return (
    <div>
      <div>  
         <h1 className='text-6xl text-white mb-5'>{title}</h1>
        <div>
           {movies?.length > 0 && (
    <MovieCard posterPath={movies[0].poster_path}/>
  )}
  
        </div>
      </div>
    </div>
  )
}

export default MovieList
