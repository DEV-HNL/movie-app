import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import "swiper/scss";
import { fetcher, keyApi } from "../../config";
import MovieCard from "./MovieCard";
import { Navigate } from "react-router-dom";
const MovieList = ({ type }) => {
  const [dataMovie, setDataMovie] = useState([]);
  const { data, error, isloading } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=${keyApi}`,
    fetcher
  );
  useEffect(() => {
    if (data && data.results) setDataMovie(data.results);
  }, [data]);
  return (
    <div>
      <Swiper grabCursor={"true"} slidesPerView={"auto"} spaceBetween={20}>
        {dataMovie.length > 0 &&
          dataMovie.map((items) => {
            return (
              <SwiperSlide key={items.id}>
                <MovieCard items={items}></MovieCard>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default MovieList;
