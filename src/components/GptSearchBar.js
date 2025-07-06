import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utilities/LanguageConstants'

const GptSearchBar = () => {
  const langKey=useSelector(store=>store.config.lang)
  return (
    <div className='pt-[8%] flex justify-center'>
      <form onClick={(e)=>e.preventDefault()}
      className='w-1/2 bg-black grid grid-cols-12 rounded-lg'>
        <input type='text' className='p-4 m-4 col-span-9 rounded-lg'  placeholder={lang[langKey].gptSearchPlaceholder}>
        </input>
        <button className='col-span-3 m-4 py-2 px-4 bg-red-700 rounded-lg text-white'> {lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
