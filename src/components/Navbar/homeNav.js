import React from "react";
import { Link } from "react-router-dom";

export const LandingNavbar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">DebFlix</Link>
        <Link to="/movie">Movie</Link>
      </li>
    </ul>
  </nav>
);
