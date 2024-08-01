import  { useEffect } from "react";
import { VEDIO_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVedio } from "../utils/movieSlice";

const useMovieTrailer =(movieId)=>{
    const dispatch = useDispatch();
   
  
    const getMovieVedio = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
        VEDIO_OPTIONS
      );
      const data = await response.json();
      console.log(data);
      const filteredData = data.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filteredData.length ? filteredData[0] : data.results[0];
  
      console.log(trailer);
      dispatch(addTrailerVedio(trailer));
    };
  
    useEffect(() => {
      getMovieVedio();
    }, []);
}
export default useMovieTrailer;