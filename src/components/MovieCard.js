import React from 'react'
import { IMG_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-60 h-70 p-1 mr-3 '>
      <img className='w-full h-full object-cover' alt="img"
      src={IMG_URL + posterPath}></img>
    </div>
  )
}

export default MovieCard
