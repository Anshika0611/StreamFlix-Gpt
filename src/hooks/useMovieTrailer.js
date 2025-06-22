import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utilities/constants';
import { addTrailerVideo } from '../utilities/movieSlice';

// fetched trailer video for a movie using the TMDB API and dispatches it to the Redux store

const useMovieTrailer=(movieId)=>{

 const dispatch=useDispatch();

  const getMovieVideo=async ()=>{
       const data=await fetch('https://api.themoviedb.org/3/movie/'+movieId+
        '/videos?language=en-US', API_OPTIONS)
    const json=await data.json();
    // console.log(json);
    const filterData=json.results.filter(video => video.type === 'Trailer');
    const trailer=filterData.length?filterData[1]:json.results[0];
    // console.log("Trailer:", trailer);
    dispatch(addTrailerVideo(trailer));    
}   
useEffect(() => {
    getMovieVideo();
}
, []);
}

export default useMovieTrailer;