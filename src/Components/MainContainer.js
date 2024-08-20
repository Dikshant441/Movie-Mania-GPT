import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTittle from "./VideoTittle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies); // get all Movies from nowPlayingMovies
  if (!movies) return;
  const mainMovie = movies[0]; // take 1st movie from all the movies

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTittle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
