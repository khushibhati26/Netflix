
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addPopular } from '../utils/movieSlice'
import { API_OPTIONS1 } from '../utils/constant'

const usePopular= ()=>{
    const dispatch =useDispatch();
  const getPopular = async ()=>{
    const data= await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",API_OPTIONS1);
    const json = await data.json();
    console.log(json);
    dispatch(addPopular(json.results))
  }

  useEffect(()=>{
    getPopular();
    },[])

}

export default usePopular

