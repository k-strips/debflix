import React, { useEffect, useState } from "react";
import { API_KEY, axios } from "../../../config";

//import components
import MovieThumbnail from "../../MovieThumbnail";
import MovieExtra from "../../MovieExtra";
import { MovieNav } from "../../Navbar";
import MovieDetails from "../../MovieDetails";
import Cast from "../../Cast";
//import MovieInfo from "../../MovieInfo";

const Movie = ({ match }) => {
  const { id } = match.params;

  const [movie, setMovie] = useState({
    title: "",
    poster_path: "",
    backdrop_path: "",
    overview: "",
    budget: 0,
    runtime: 0,
    revenue: 0,
    actors: [],
    directors: [],
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(false);
    setLoading(true);
    const fetchDataFromServer = async () => {
      const fetchMoviesData = await axios.get(`movie/${id}?api_key=${API_KEY}`);
      const movieData = await fetchMoviesData.data;

      const CREDITS_URL = `movie/${id}/credits?api_key=${API_KEY}`;
      const creditResults = await axios.get(CREDITS_URL);
      const creditsData = await creditResults.data;

      setMovie((prev) => {
        const {
          original_title,
          poster_path,
          backdrop_path,
          overview,
          budget,
          runtime,
          revenue,
        } = movieData;
        const { cast, crew } = creditsData;
        return {
          ...prev,
          title: original_title,
          poster_path,
          backdrop_path,
          overview,
          budget,
          runtime,
          revenue,
          actors: cast,
          directors: crew.filter((member) => member.job === "Director"),
        };
      });
      console.log(movieData);
      setLoading(false);
    };

    fetchDataFromServer().catch((error) => setError(true));
  }, [id]);

  return (
    <div>
      <MovieInfo {...movie} />
      <Cast {...movie} />
    </div>
  );
};

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
        title={title}
        overview={overview}
        poster_path={poster_path}
        backdrop_path={backdrop_path}
      />
      <MovieExtra runtime={runtime} budget={budget} revenue={revenue} />
    </div>
  );
};

export default Movie;
