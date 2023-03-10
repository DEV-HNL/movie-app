import React from "react";

import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/movie"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Movies
      </NavLink>
    </div>
  );
};

export default Header;
