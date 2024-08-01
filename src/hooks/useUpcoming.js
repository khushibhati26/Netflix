
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addUpcoming } from '../utils/movieSlice'
import { API_OPTIONS3 } from '../utils/constant'

const useUpcoming= ()=>{
    const dispatch =useDispatch();
  const getUpcoming= async ()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTIONS3);
    const json = await data.json();
    console.log(json);
    dispatch(addUpcoming(json.results))
  }

  useEffect(()=>{
    getUpcoming();
    },[])

}

export default useUpcoming

