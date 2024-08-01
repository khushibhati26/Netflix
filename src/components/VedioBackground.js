import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import useMovieTrailer from "../hooks/useMovieTrailer.js";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const TrailerVedio = useSelector((store) => store.movie?.TrailerVedio);

  useEffect(() => {
    console.log("TrailerVideo:", TrailerVedio);
  }, [TrailerVedio]);

  return (
    <div className=" absolute -z-10 w-full">
      {TrailerVedio?.key ? (
        <iframe
          className="aspect-video w-full  "
          src={`https://www.youtube.com/embed/${TrailerVedio.key}?autoplay=1&mute=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          title="Movie Trailer"
          frameBorder="0"
        ></iframe>
      ) : (
        <p className="text-white text-center mt-4">Loading trailer...</p>
      )}
    </div>
  );
};

export default VideoBackground;
