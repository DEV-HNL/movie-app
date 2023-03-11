import React, { useEffect, useState } from "react";
import "./style.scss";
import useSWR from "swr";
import { useNavigate, useParams } from "react-router-dom";
import { fetcher, keyApi } from "../config";
import MovieCard from "../components/moveList/MovieCard";

const Movies = () => {
  const { pageNext } = useParams();
  const nextPageArr = Array(200).fill();
  const [page, setPage] = useState(1);
  const [dataMovie, setDataMovie] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=${keyApi}&language=en-US&page=${page}`,
    fetcher
  );
  useEffect(() => {
    if (data && data.results) setDataMovie(data.results);
  }, [data]);
  useEffect(() => {
    pageNext ? setPage(parseInt(pageNext.slice(5))) : setPage(1);
  }, [pageNext]);
  return (
    <div className="movie">
      <MovieSearch></MovieSearch>
      <div className="movie__list">
        {dataMovie &&
          dataMovie.map((items) => {
            return <MovieCard key={items.id} items={items}></MovieCard>;
          })}
      </div>
      <MovieNextPage
        nextPageArr={nextPageArr}
        page={page}
        setPage={setPage}
      ></MovieNextPage>
    </div>
  );
};
const MovieNextPage = ({ nextPageArr, page, setPage }) => {
  const goPage = useNavigate();
  const handlePrePage = () => {
    setPage(page - 1);
    goPage(`/movie/page-${page - 1}`);
  };
  const handleNextPage = () => {
    setPage(page + 1);
    goPage(`/movie/page-${page + 1}`);
  };
  return (
    <div className="next-page">
      <ul>
        {page > 1 ? (
          <li onClick={handlePrePage} className="arrow">
            {" "}
            ←{" "}
          </li>
        ) : (
          ""
        )}
        {nextPageArr.map((items, index) => {
          if (
            (page < 5 && index >= page - (page - 1) && index <= 5) ||
            (page > 5 && index >= page - 3 && index <= page + 1) ||
            (page === 5 && index >= page - 3 && index <= page + 1)
          ) {
            return (
              <li
                key={index}
                className={`${page === index ? "active" : ""}`}
                onClick={() => {
                  goPage(`/movie/page-${index}`);
                }}
              >
                {index}
              </li>
            );
          }
          return null;
        })}
        <li onClick={handleNextPage} className="arrow">
          →
        </li>
      </ul>
    </div>
  );
};
const MovieSearch = () => {
  return (
    <div className="movie__search">
      <input type="text" placeholder="Enter Your Name The Movie..." />
      <button className="movie__search--btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          {" "}
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />{" "}
        </svg>
      </button>
    </div>
  );
};
export default Movies;
