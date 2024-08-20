import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  // get movie trailer key from store with the help of selector
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);

  useMovieTrailer(movieId); // useMovierailer just for pass movieId , no other needs

  return (
    <div>
      {" "}
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/GCyVFRMVlPo?si" + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
