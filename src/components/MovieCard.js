import React from 'react'
import { CardPoster } from '../utilities/constants'

const MovieCard = ({posterPath}) => { 
 
  return (
    <div>
      <img alt="movie card" src={CardPoster + posterPath} />
    </div>
  )
}

export default MovieCard;
