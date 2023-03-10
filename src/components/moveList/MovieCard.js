import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ items }) => {
  const navigate = useNavigate();
  const { backdrop_path, title, vote_average, release_date, id } = items || {};
  return (
    <div className="movie__card">
      <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt="" />
      <h2 className="movie__card--name">{title}</h2>
      <div className="movie__card--info">
        <span>2014</span>
        <span>{vote_average}</span>
      </div>
      <button
        className="watch-now"
        onClick={() => {
          navigate(`/movie/${id}`);
        }}
      >
        Watch now!
      </button>
    </div>
  );
};

export default MovieCard;
