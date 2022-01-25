import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/movieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const response = await movieApi
      .get(`?apiKey=${process.env.REACT_APP_MOVIE_API}&s=Harry&type=movie`)
      .catch((err) => {
        console.log("err :", err);
      });
    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const response = await movieApi
      .get(`?apiKey=${process.env.REACT_APP_MOVIE_API}&s=Friends&type=series`)
      .catch((err) => {
        console.log("err :", err);
      });
    return response.data;
  }
);
export const fetchAsyncShowsorMovieDetails = createAsyncThunk(
  "movies/fetchAsyncShowsorMovieDetails",
  async (id) => {
    const response = await movieApi
      .get(`?apiKey=${process.env.REACT_APP_MOVIE_API}&i=${id}&Plot=full`)
      .catch((err) => {
        console.log("err :", err);
      });
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieorShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  removeSelectedShowsorMovie: (state) => {
    state.selectedMovieorShow = {};
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      return { ...state, shows: payload };
    },
    [fetchAsyncShowsorMovieDetails.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      return { ...state, selectedMovieorShow: payload };
    },
  },
});

export const { addMovies, removeSelectedShowsorMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelected = (state) => state.movies.selectedMovieorShow;
export default movieSlice.reducer;
