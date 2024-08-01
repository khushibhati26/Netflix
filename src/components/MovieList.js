import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movie }) => {
  const styles = {
    scrollbarHidden: {
      '-webkit-scrollbar': 'none',
      'scrollbar-width': 'none',
    },
  };
  return (
    <div className='bg-transparent'
 
>
      <h1 className="text-2xl font-bold text-white ml-7 pt-2">{title}</h1>
      <div style = {styles.scrollbarHidden} className="flex overflow-x-scroll   ">
        <div   className="flex">
          {movie.map((mov) => (
            <MovieCard key={mov?.key} posterPath={mov?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
