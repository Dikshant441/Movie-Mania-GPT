import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";

// we can write this function in videoBackgroung comp... but we creste a useCustomHook to make code readable, and reusable
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  // fetch video API to get trailer for movieId and get update into store to make access any componants
  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTION
    );
    const json = await data.json(); // get all the videos with the help of id(movieId) which we got to 1st movie from 20 movies

    const FilterTrailer = json?.results?.filter(
      // filter only trailer video from all the diff diff videos
      (video) => video.type === "Trailer"
    );
    const trailer = FilterTrailer.length ? FilterTrailer[0] : json.results[0]; // can have multiple trailer video but we just need one
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
