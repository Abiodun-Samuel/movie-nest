import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import user from "../../images/movie.svg";
import { BiUserCircle } from "react-icons/bi";
import { BiCameraMovie } from "react-icons/bi";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="logo">
            <BiCameraMovie />
            <p className="ml-2">Movie Nest</p>
          </div>
        </Link>

        <BiUserCircle style={{ color: "white", size: "25px" }} />
      </div>
    </div>
  );
};

export default Header;
