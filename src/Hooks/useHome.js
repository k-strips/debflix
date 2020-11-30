import { useState, useEffect } from "react";

//local import
import { axios, POPULAR_BASE_URL } from "../config";

export const useHome = () => {
  const [moviesData, setMoviesData] = useState({
    movies: [],
    page: 0,
    totalPages: 0,
  });
  const [endpoint, setEndpoint] = useState(POPULAR_BASE_URL);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchDataFromServer = async () => {
      setIsError(false);
      setIsLoading(true);
      const fetchServerData = await axios.get(endpoint);
      let result = await fetchServerData.data;

      setMoviesData((prev) => {
        const { results, page, total_pages } = result;

        const isLoadMore = endpoint.search("page");

        return {
          ...prev,
          movies:
            isLoadMore !== -1 ? [...prev.movies, ...results] : [...results],
          page,
          totalPages: total_pages,
        };
      });
      setIsLoading(false);
    };

    fetchDataFromServer().catch((error) => setIsError(true));
  }, [endpoint]);

  return [{ moviesData, endpoint, isLoading, isError }, setEndpoint];
};
