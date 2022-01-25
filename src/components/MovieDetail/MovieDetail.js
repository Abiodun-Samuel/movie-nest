import React from "react";
import "./moviedetail.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import loading from "../../images/loading.svg";
import {
  fetchAsyncShowsorMovieDetails,
  getSelected,
  removeSelectedShowsorMovie,
} from "../../features/movies/movieSlice";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelected);
  console.log(data);

  React.useEffect(() => {
    dispatch(fetchAsyncShowsorMovieDetails(imdbID));
    return () => {
      dispatch(removeSelectedShowsorMovie());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div className="">
          <img src={loading} alt="loading movie details" />
        </div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>IMDB Rating: {data.imdbRating}</span>
              <span>IMDB Votes: {data.imdbVotes}</span>
              <span>Runtime: {data.Runtime}</span>
              <span>Year: {data.Year}</span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actor}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
              {/* <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div> */}
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
