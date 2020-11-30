import React from "react";

//local component imports
import MovieNav from "../Navbar";
import MovieDetails from "../MovieDetails";
import MovieExtra from "../MovieExtra";

const MovieInfo = ({
  title,
  overview,
  runtime,
  budget,
  revenue,
  poster_path,
  backdrop_path,
}) => {
  return (
    <div>
      <MovieNav title={title} />
      <MovieDetails
        original_title={title}
        overview={overview}
        poster_path={poster_path}
        backdrop_path={backdrop_path}
      />
      <MovieExtra runtime={runtime} budget={budget} revenue={revenue} />
      <section></section>
    </div>
  );
};

export default MovieInfo;
