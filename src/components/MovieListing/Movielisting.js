import React from "react";
import "./movielisting.css";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";

const Movielisting = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movie-error">
        <h3>{movies.Error}</h3>{" "}
      </div>
    );
  let renderShows = "";
  renderShows =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movie-error">
        <h3>{movies.Error}</h3>{" "}
      </div>
    );
  console.log(movies);
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="shows-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default Movielisting;
