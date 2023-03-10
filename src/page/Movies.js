import React, { useEffect, useState } from "react";
import "./style.scss";
import useSWR from "swr";
import { fetcher, keyApi } from "../config";
import MovieCard from "../components/moveList/MovieCard";
const Movies = () => {
  const [dataMovie, setDataMovie] = useState([]);
  const { data, error, isloading } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=${keyApi}`,
    fetcher
  );
  useEffect(() => {
    if (data && data.results) setDataMovie(data.results);
  }, [data]);
  return (
    <div className="movie">
      <div className="movie__search">
        <input type="text" placeholder="Enter Your Name The Movie..." />
        <button className="movie__search--btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            {" "}
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />{" "}
          </svg>
        </button>
      </div>
      <div className="movie__list">
        {dataMovie &&
          dataMovie.map((items) => {
            return <MovieCard key={items.id} items={items}></MovieCard>;
          })}
      </div>
    </div>
  );
};

export default Movies;
