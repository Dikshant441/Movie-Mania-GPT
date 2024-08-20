import { createSlice } from "@reduxjs/toolkit";

const moviesSlice  = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlaingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo : (state , action ) =>{
            state.trailerVideo = action.payload;
        }
    },
});

export const { addNowPlaingMovies , addTrailerVideo} = moviesSlice.actions;

export default moviesSlice.reducer;