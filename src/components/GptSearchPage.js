import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import {BackgroundImage} from "../utilities/constants"
const GptSearchPage = () => {
  return (
    <div>
     <div className="fixed -z-10 w-screen min-h-screen bg-cover" style={{ backgroundImage: `url(${BackgroundImage})` }}></div>
        {/* Overlay */}
        <div className="fixed inset-0 bg-black bg-opacity-20 pointer-events-none "></div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearchPage;
