import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addNowPlaingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", // noePlayingMovie API from TMDB
      API_OPTION
    );
    const json = await data?.json();  // get all now playing movie data 
    dispatch(addNowPlaingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
