import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const MovieNav = ({ title }) => {
  return (
    <nav className="movie-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>{title}</li>
      </ul>
    </nav>
  );
};
