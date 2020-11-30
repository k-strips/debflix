import React from "react";
import "./style.css";

import MovieThumbnail from "../MovieThumbnail";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

const MovieDetails = ({ title, overview, poster_path, backdrop_path }) => {
  return (
    <div
      className="details-container"
      style={{
        background: `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path}) no-repeat`,
      }}
    >
      <div className="info-thumb-container">
        <MovieThumbnail
          className="movie-detail-thumb"
          poster_path={poster_path}
        />
        <div className="movie-info">
          <hgroup>
            <h2>{title}</h2>
            <h4>plot</h4>
          </hgroup>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
