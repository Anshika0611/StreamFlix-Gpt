import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import {BackgroundImage} from "../utilities/constants"
const GptSearchPage = () => {
  return (
    <div>
     <div className="absolute -z-10 w-screen min-h-screen bg-cover " style={{ backgroundImage: `url(${BackgroundImage})` }}></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearchPage;
