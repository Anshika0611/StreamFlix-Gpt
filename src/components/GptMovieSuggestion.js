import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  const {movieNames, movieResults} = useSelector((store) => store.gpt);
  if(!movieNames) return null;
  console.log(movieResults);
  
  return (
    <div className='bg-black bg-opacity-80 text-white p-4 m-4'>
      <div>
        {movieNames.map((movieName,index)=><MovieList key={movieName} title={movieName} movies={movieResults[index]} />)}
      </div>
     
      
    </div>
  )
}

export default GptMovieSuggestion
