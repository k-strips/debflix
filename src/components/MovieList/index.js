import React from "react";

//local import
import MovieThumbnail from "../MovieThumbnail";

const MovieList = ({ moviesData }) => {
  return (
    <div className="movies-listing">
      {moviesData.movies.map((movie) => {
        return <MovieThumbnail key={movie.id} {...movie} />;
      })}
    </div>
  );
};

export default MovieList;
