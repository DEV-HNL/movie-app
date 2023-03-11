import React from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "../loader/Skeleton";

const MovieCard = ({ items }) => {
  const navigate = useNavigate();
  const { backdrop_path, title, vote_average, release_date, id } = items || {};
  return (
    <div className="movie__card">
      <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt="" />
      <h2 className="movie__card--name">{title}</h2>
      <div className="movie__card--info">
        <span>{new Date().getFullYear(release_date)}</span>
        <span>{vote_average}</span>
      </div>
      <button
        className="watch-now"
        onClick={() => {
          navigate(`/movie/info/${id}`);
        }}
      >
        Watch now!
      </button>
    </div>
  );
};

export default MovieCard;
export const MovieCardSkeleton = () => {
  return (
    <>
      <div className="movie__card">
        <Skeleton
          width="100%"
          height="250px"
          radius="8px"
          className="mb-5"
        ></Skeleton>
        <h2>
          <Skeleton width="100%" height="20px"></Skeleton>
        </h2>

        <div className="movie__card--info">
          <span>
            <Skeleton width="50px" height="10px"></Skeleton>
          </span>
          <span>
            <Skeleton width="30px" height="10px"></Skeleton>
          </span>
        </div>
        <button>
          <Skeleton width="100%" height="45px" radius="6px"></Skeleton>
        </button>
      </div>
    </>
  );
};
