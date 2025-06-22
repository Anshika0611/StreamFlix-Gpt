import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utilities/constants'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utilities/movieSlice';

const usePopularMovies = () => {
    const dispatch=useDispatch();
  useEffect(()=>{
    const getPopularMovie= async ()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
        const json=await data.json();
        dispatch(addPopularMovies(json.results));
    }
    getPopularMovie()
  },[])    
}

export default usePopularMovies;
