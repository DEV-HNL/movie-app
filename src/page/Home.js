import React from "react";
import "./style.scss";
import MovieList from "../components/moveList/MovieList";
const Home = () => {
  return (
    <div className="home">
      <div className="sidebar">
        <img
          src="https://genk.mediacdn.vn/139269124445442048/2020/4/29/1-15881472577741166483048.jpeg"
          alt=""
        />
        <div className="sidebar__content">
          <h2 className="sidebar__name">Avencher</h2>
          <span className="sidebar__type">Adventure, Action...</span>
          <button className="sidebar-watch watch-now">Watch now!</button>
        </div>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
      <div className="movie">
        <h2 className="movie__title">Now Playing</h2>
        <MovieList type={"now_playing"} />
      </div>
      <section className="movie">
        <h2 className="movie__title">Popular</h2>
        <MovieList type={"popular"} />
      </section>
      <div className="movie">
        <h2 className="movie__title">Top Rated</h2>
        <MovieList type={"top_rated"} />
      </div>
      <div className="movie">
        <h2 className="movie__title">Up Coming</h2>
        <MovieList type={"upcoming"} />
      </div>
    </div>
  );
};

export default Home;
