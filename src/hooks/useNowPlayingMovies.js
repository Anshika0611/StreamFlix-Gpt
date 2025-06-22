import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addnowPlayingMovies } from "../utilities/movieSlice";
import { API_OPTIONS } from "../utilities/constants";

//fetching the now playing movies from the API and putting them to the redux store

const useNowPlayingMovies = () => {
const dispatch = useDispatch();
  useEffect(() => {
    const getPlayingMovies= async()=>{
    const data=await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?page=1',
     API_OPTIONS
    )
    const json=await data.json();
    // console.log(json.results);
    dispatch(addnowPlayingMovies(json.results));
  }
    getPlayingMovies();
  }, [dispatch])
}

export default useNowPlayingMovies;