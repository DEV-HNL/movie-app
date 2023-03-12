import Home from "./page/Home";
import "./app.scss";
import { Route, Routes } from "react-router-dom";
import Movies from "./page/Movies";
import Main from "./components/layout/Main";
import MovieInfo from "./page/MovieInfo";
import "./page/styleRespon.scss";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie" element={<Movies />}></Route>
          <Route path="/movie/:pageNext" element={<Movies />}></Route>
          <Route path="/movie/info/:slug" element={<MovieInfo />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
