import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import { fetcher, keyApi } from "../../config";
import Skeleton from "../loader/Skeleton";
import { useNavigate } from "react-router-dom";
const MoiveSideBar = () => {
  const navigate = useNavigate();
  const [dataMovie, setDataMovie] = useState([]);
  const { data, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=${keyApi}`,
    fetcher
  );
  useEffect(() => {
    if (data && data.results) setDataMovie(data.results);
  }, [data]);
  return (
    <div className="sidebar">
      <Swiper grabCursor={"true"} slidesPerView={"auto"}>
        {isLoading && (
          <SwiperSlide>
            {" "}
            <MovieSidebarSkeleton></MovieSidebarSkeleton>
          </SwiperSlide>
        )}
        {!isLoading &&
          dataMovie.length > 0 &&
          dataMovie.map((items, index) => {
            return (
              <SwiperSlide key={items.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${items.backdrop_path}`}
                  alt=""
                />
                <div className="sidebar__content">
                  <h2 className="sidebar__name">{items.title}</h2>
                  <span className="sidebar__type">Adventure, Action...</span>
                  <button
                    className="sidebar-watch watch-now"
                    onClick={() => {
                      navigate(`/movie/info/${items.id}`);
                    }}
                  >
                    Watch now!
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        <i className="fa-solid fa-arrow-right"></i>
      </Swiper>
    </div>
  );
};

export default MoiveSideBar;
const MovieSidebarSkeleton = () => {
  return (
    <div className="sidebar-skeleton">
      <Skeleton
        width="calc(100% + 40px)"
        height="100%"
        radius="22px"
      ></Skeleton>
      <div className="sidebar__content">
        <h2 className="sidebar__name">
          <Skeleton width="200px" height="35px"></Skeleton>
        </h2>
        <span className="sidebar__type">
          <Skeleton width="150px" height="20px"></Skeleton>
        </span>
        <button className="sidebar-watch watch-now">
          <Skeleton width="250px" height="45px" radius="6px"></Skeleton>
        </button>
      </div>
    </div>
  );
};
