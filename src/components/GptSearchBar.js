import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import lang from '../utilities/LanguageConstants'
import {API_KEY,API_OPTIONS} from '../utilities/constants'
import { addGptMovieResult } from "../utilities/gptSlice";
import { useRef } from 'react';


const GptSearchBar = () => {
  const langKey=useSelector(store=>store.config.lang)
  const gptSearchTxt = useRef(null);
// console.log(gptSearchTxt.current.value);

  const dispatch = useDispatch();

  // SEARCH MOVIES IN TMDB API
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  // make an api call to Gemini API to get movie suggestions
  const handleGptSearchClick = async () => {
    const searchQuery =
      "Act as movie recommendation system and suggest movies for the query: " +
      gptSearchTxt.current.value +
      ". only give me names of 5 movies, comma separated like the given result ahead. Example Result: Avatar, Sholay, Bahubali, Singham, Krish";
  const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

  const result = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: searchQuery }],
        },
      ],
    }),
  });

  const data = await result.json();
  // console.log(data);
  if (data.error) {
  console.error("Gemini API error:", data.error.message);
  alert("Gemini AI is temporarily overloaded. Please try again in a few minutes.");
  return;
}

  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    // TODO: error handling
    console.error("No text returned from Gemini API");
    return;
  }

  const gptMovies = text.split(", ").map((movie) => movie.trim());

  // For each movie, search TMDB API
  const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
  const tmdbResults = await Promise.all(promiseArray);

  dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
};
return (
    <div className='pt-[8%] flex justify-center'>
      <form onSubmit={(e)=>
      {e.preventDefault()
       handleGptSearchClick()
      }}
      className='w-1/2 bg-black grid grid-cols-12 rounded-lg'>
        <input ref={gptSearchTxt}
        type='text' className='p-4 m-4 col-span-9 rounded-lg'  placeholder={lang[langKey].gptSearchPlaceholder}>
        </input>
        <button type='submit'
        className='col-span-3 m-4 py-2 px-4 bg-red-700 rounded-lg text-white'> {lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
