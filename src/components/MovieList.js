import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {

  return (
    <div>
      <div className="py-1 mx-10">
        <h1 className="text-2xl font-bold text-white my-2 mx-2">{title}</h1>
        <div className="flex overflow-x-auto">
          {movies?.length > 0 &&
            movies
              .filter((movie) => movie?.poster_path)
              .map((movie) => (
                <div key={movie.id} className="flex-shrink-0 w-48 p-2">
                  <MovieCard posterPath={movie.poster_path} />
                </div>
              ))}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default MovieList;
