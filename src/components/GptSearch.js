import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'
import { LOGOURL } from '../utils/constant'


const GptSearch = () => {
  return (
    <div className='h-screen'>
        <div className='absolute -z-10'> <img
          style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
          src={LOGOURL}
          alt="background"
        /></div>
        
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
