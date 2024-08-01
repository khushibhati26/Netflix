import { createSlice } from "@reduxjs/toolkit"


const movieSlice=createSlice({
name:"movie",
initialState:{
    NowPlayingMovies: null,
    Popular:null,
    TopRated:null,
    Upcoming:null,
    TrailerVedio:null
},
reducers:{
    addNowPlayingMovies: (state,action)=>{
        state.NowPlayingMovies=action.payload;

    },
    addPopular: (state,action)=>{
        state.Popular=action.payload;

    },
    addTopRated: (state,action)=>{
        state.TopRated=action.payload;

    },
    addUpcoming: (state,action)=>{
        state.Upcoming=action.payload;

    },
    addTrailerVedio: (state,action)=>{
        state.TrailerVedio=action.payload;
        }



}



})
export const {addNowPlayingMovies,addTrailerVedio,addPopular,addTopRated,addUpcoming} =movieSlice.actions
export default movieSlice.reducer