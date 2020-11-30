import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

//local imports
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

const MovieThumbnail = ({ id, title, poster_path, clickable, className }) => {
  return (
    <>
      {clickable ? (
        <Link to={`/movie/${id}`}>
          <div className={className} key={id}>
            <img
              src={`${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`}
              alt={`${title} cover `}
            />
          </div>
        </Link>
      ) : (
        <div className={className} key={id}>
          <img
            src={`${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`}
            alt={`${title} cover `}
          />
        </div>
      )}
    </>
  );
};

export default MovieThumbnail;
