import React from 'react'
import Header from './Header'
import useNowPlayingMovies  from '../hooks/useNowPlayingMovies';
import usePopular from '../hooks/usePopular';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTopRated from '../hooks/useTopRated';
import useUpcoming from '../hooks/useUpcoming';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import Footer from './Footer';

 
const Browse = () => {
 
  useNowPlayingMovies();
usePopular();
useTopRated();
useUpcoming();

const showGptSearch= useSelector((store)=> store?.gpt?.showGptSearch)
console.log(showGptSearch);
  return (
    <div>
  <Header></Header>
  {
    showGptSearch?(
   
     <GptSearch/>
    
   
    ):(
      <><MainContainer/>

      <SecondaryContainer/> 
    </>
      
     
    

    )
  }
  <Footer/>
  
  
      
    </div>
  )
}

export default Browse
