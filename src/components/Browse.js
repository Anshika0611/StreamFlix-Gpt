import React from 'react'
import Header from './Header'
import  useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {  
  useNowPlayingMovies();
  return (
    <div>
     <Header/>
      <MainContainer/>
      <SecondaryContainer/>
     {/*
        main conatiner
          -playing video
          -movie title desc and button

        secondary cont
          -movie list *n
          -movie cards *n


     */}
    </div>
  )
}

export default Browse
