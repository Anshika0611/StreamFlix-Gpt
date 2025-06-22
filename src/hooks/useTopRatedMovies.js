import React from "react"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { API_OPTIONS } from "../utilities/constants"
import {addTopRatedMovies} from "../utilities/movieSlice"

const useTopRatedMovies=()=>{
     const dispatch=useDispatch();
     useEffect(()=>{
    const getTopRatedMovies=async ()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
        const json=await data.json()
        dispatch(addTopRatedMovies(json.results))
    }
    getTopRatedMovies();
},[])
}
export default useTopRatedMovies;