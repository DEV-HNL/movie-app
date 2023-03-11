import React, { useEffect, useState } from "react";
import "./style.scss";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import { fetcher, keyApi } from "../config";
import MovieCard, { MovieCardSkeleton } from "../components/moveList/MovieCard";
import MovieNextPage from "../components/nextPage/MovieNextPage";
import MovieSearch from "../components/movieSearch/MovieSearch";
const Movies = () => {
  const { pageNext } = useParams();
  const nextPageArr = Array(200).fill();
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState(null);
  const [dataMovie, setDataMovie] = useState([]);
  const handleGetData = (data) => {
    setSearchValue(data);
  };
  const { data, isLoading } = useSWR(
    `https://api.themoviedb.org/3/${searchValue ? "search/" : ""}movie${
      searchValue ? "" : "/popular"
    }?api_key=${keyApi}${
      searchValue ? `&query=${searchValue}` : ""
    }&language=en-US&page=${page}`,
    fetcher
  );
  useEffect(() => {
    if (data && data.results) {
      setDataMovie(data.results);
    } else console.log("aa");
  }, [data, searchValue]);

  useEffect(() => {
    pageNext ? setPage(parseInt(pageNext.slice(5))) : setPage(1);
  }, [pageNext]);

  return (
    <div className="movie">
      <MovieSearch onClick={handleGetData}></MovieSearch>
      <div className="movie__list">
        {isLoading && (
          <>
            <MovieCardSkeleton></MovieCardSkeleton>
            <MovieCardSkeleton></MovieCardSkeleton>
            <MovieCardSkeleton></MovieCardSkeleton>
            <MovieCardSkeleton></MovieCardSkeleton>
            <MovieCardSkeleton></MovieCardSkeleton>
          </>
        )}
        {!isLoading &&
          dataMovie &&
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

export default Movies;
