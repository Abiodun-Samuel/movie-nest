import React, { useEffect } from "react";
import Movielisting from "../MovieListing/Movielisting";
// import movieApi from "../../common/movieApi";
import "./home.css";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
    // const fetchMovies = async () => {
    //   try {
    //     const response = await movieApi.get(
    //       `?apiKey=${process.env.REACT_APP_MOVIE_API}&s=Harry&type=movie`
    //     );
    //     dispatch(addMovies(response.data));
    //     // console.log(response);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchMovies();
  }, [dispatch]);

  return (
    <>
      <div className="banner-img">
        <Movielisting />
      </div>
    </>
  );
};

export default Home;
