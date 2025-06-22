import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utilities/constants';
import { addMovieImage } from '../utilities/movieSlice';

const useMovieImage = (movieId) => {
  const dispatch = useDispatch();

  const getMovieImage = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/images`,
        API_OPTIONS
      );
      const data = await res.json();
      
      const poster = data?.backdrops?.[0] || data?.posters?.[0];
      
      if (poster?.file_path) {
        dispatch(addMovieImage(poster));
      } else {
        console.warn("No valid image found.");
      }

    } catch (err) {
      console.error("Failed to fetch movie image:", err);
    }
  };

  useEffect(() => {
    if (movieId) getMovieImage();
  }, [movieId]);
};

export default useMovieImage;
