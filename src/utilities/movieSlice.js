import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topRated:null,
        upcomingMovies:null,
    },
    reducers:{
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRated=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addnowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
    },
})

export const { addnowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies} = movieSlice.actions; 
export default movieSlice.reducer; 