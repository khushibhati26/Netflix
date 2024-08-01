import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';


const SecondaryContainer = () => {
  const movie = useSelector((store) => store.movie);
  
  console.log("Full Movie State:", movie);

 
  const nowPlayingMovies = movie?.NowPlayingMovies || [];
  const popular=movie?.Popular || [];
  const topRated=movie?.TopRated || [];
  const upcoming=movie?.Upcoming || [];

  return (
     (
    <div className='bg-black '>
      <div >
      <MovieList title={"Now Playing Movies"} movie={nowPlayingMovies} />
    <MovieList title={"Upcoming Movies"} movie={upcoming} />
    
      <MovieList title={"Top Rated Movies"} movie={topRated} />
      <MovieList title={"Popular Movies"} movie={popular} />
     
      <MovieList title={"Now Playing Movies"} movie={nowPlayingMovies} />
      </div>
    


    
   


   
     
 
      
    </div>
    )
  );
};

export default SecondaryContainer;
