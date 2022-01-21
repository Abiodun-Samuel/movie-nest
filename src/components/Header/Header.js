import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import user from "../../images/movie.svg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <p className="logo">Movie Nest</p>
      </Link>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
