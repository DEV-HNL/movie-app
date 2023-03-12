import React from "react";
import { useNavigate } from "react-router-dom";

const MovieNextPage = ({ nextPageArr, page, setPage }) => {
  const goPage = useNavigate();
  const handlePrePage = () => {
    window.scrollTo(0, 0);
    setPage(page - 1);
    goPage(`/movie/page-${page - 1}`);
  };
  const handleNextPage = () => {
    window.scrollTo(0, 0);

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
                  window.scrollTo(0, 0);

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

export default MovieNextPage;
