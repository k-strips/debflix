import React from "react";
import "./style.css";

//local import
import MovieThumbnail from "../MovieThumbnail";
import LoadButton from "../Buttons";

const MovieList = ({ moviesData, onClick }) => {
  return (
    <>
      <div className="movies-listing">
        {moviesData.movies.map((movie) => {
          return (
            <MovieThumbnail
              key={movie.id}
              {...movie}
              clickable
              className="home-thumbnail"
            />
          );
        })}
      </div>
      <div className="movies-listing" style={{ marginBottom: "10px" }}>
        <LoadButton onClick={onClick}>LoadMore</LoadButton>
      </div>
    </>
  );
};

export default MovieList;
