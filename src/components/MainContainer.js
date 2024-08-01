import React from 'react';
import { useSelector } from 'react-redux';
import VedioTitle from './VedioTitle';
import VedioBackground from './VedioBackground';

const MainContainer = () => {
  const movies = useSelector((store) => store?.movie?.NowPlayingMovies);
  if (!movies) return null;
  const mainMovie = movies[3];
  const { original_title, overview, id } = mainMovie;
  
  return (
    <div className=" -z-10 w-screen h-screen">
      <VedioBackground movieId={id} />
      <VedioTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
