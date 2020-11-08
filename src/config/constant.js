const API_KEY = "5e01e5685cb2abfb0819391ed909e8b5";

const SEARCH_BASE_URL = `search/movie?api_key=${API_KEY}&query=`;
const POPULAR_BASE_URL = `movie/popular?api_key=${API_KEY}`;

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = "w1280";
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = "w500";

export {
  API_KEY,
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
};
