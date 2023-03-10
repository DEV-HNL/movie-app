import React from "react";
import { useParams } from "react-router-dom";
import { fetcher, keyApi } from "../config";
import useSWR from "swr";
const MovieInfo = () => {
  const { slug } = useParams();
  const { data, error, isloading } = useSWR(
    `https://api.themoviedb.org/3/movie/${slug}?api_key=${keyApi}`,
    fetcher
  );
  console.log(data);
  console.log(slug);
  return <div></div>;
};

export default MovieInfo;
