import React from "react";
import { useParams } from "react-router-dom";
import { fetcher, keyApi } from "../config";
import useSWR from "swr";
import "./style.scss";
const MovieInfo = () => {
  const { slug } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${slug}?api_key=${keyApi}`,
    fetcher
  );
  const {
    title,
    backdrop_path,
    overview,
    release_date,
    vote_average,
    vote_count,
    popularity,
  } = data || {};
  return (
    <>
      <div className="movieinfo">
        <div className="movieinfo__bg">
          <img
            src={`https://image.tmdb.org/t/p/original${
              backdrop_path || "/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg"
            }`}
            alt=""
          />
        </div>
        <div className="movieinfo__content">
          <div className="movieinfo__poster">
            <img
              src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
              alt=""
            />
            <div className="movieinfo__poster--rated">
              <span className="rated">{vote_average}</span>
              <span>{vote_count} ratings</span>
            </div>
          </div>
          <div className="movieinfo__info">
            <div className="movieinfo__info--header">
              <h2>{title}</h2>
              <div className="movieinfo__info--date">
                <span>{release_date}</span>
                <span>{popularity} view</span>
              </div>
              <div className="movieinfo__info--watch">
                <button className="watch-now">Watch now!</button>
                <button className="share">
                  <i className="fa-solid fa-share"></i>
                </button>
                <button className="bookmark">
                  <i className="fa-solid fa-bookmark"></i>
                </button>
              </div>
            </div>
            <p className="movies__desc">{overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
