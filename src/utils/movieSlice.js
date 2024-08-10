import { createSlice } from "@reduxjs/toolkit";

const moviesSlice  = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
    },
    reducers: {
        addNowPlaingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
    },
});

export const { addNowPlaingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;