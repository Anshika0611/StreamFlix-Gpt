import {createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieNames:null,
        movieResults:null
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch=!state.showGptSearch;
        },
            addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieResults = movieResults;
      state.movieNames = movieNames;
    },

    },
    
})

export const{toggleGptSearchView,addGptMovieResult}=gptSlice.actions; //export the actions to be used in components
export default gptSlice.reducer; //export the reducer to be used in store