import React from "react";
import "./style.scss";
import MovieList from "../components/moveList/MovieList";
import MoiveSideBar from "../components/moveList/MoiveSideBar";
const Home = () => {
  return (
    <div className="home">
      <MoiveSideBar></MoiveSideBar>
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
