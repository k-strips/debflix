import React, { useState } from "react";

//constants
import { POPULAR_BASE_URL, SEARCH_BASE_URL } from "../../config";

//import components
import { useHome } from "../Hooks";
import LoadButton from "../Buttons";
import SearchBar from "../Searchbar";
import MovieList from "../MovieList";

const Home = () => {
  const [searchParam, setSearchParam] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [{ moviesData, endpoint, isLoading, isError }, setEndpoint] = useHome();

  const handleChange = (event) => {
    setSearchParam(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEndpoint(`${SEARCH_BASE_URL}${searchParam}`);
    setSearchKey(searchParam);
    setSearchParam("");
  };

  const loadMore = (searchKey, page = 0) => {
    const searchEndpoint = `${SEARCH_BASE_URL}${searchKey}&page=${page + 1}`;
    const popularEndpoint = `${POPULAR_BASE_URL}&page=${page + 1}`;

    const endpoint = searchKey ? searchEndpoint : popularEndpoint;

    setEndpoint(endpoint);
  };

  return (
    <div>
      <SearchBar
        onChange={handleChange}
        onSubmit={handleSubmit}
        value={searchParam}
      />
      {isError && <div>Sorry...Something terrible happened:(</div>}
      {isLoading ? (
        <div>...Loading</div>
      ) : (
        <MovieList moviesData={moviesData} />
      )}
      {isLoading ? (
        <div>...fetching more movies</div>
      ) : (
        <LoadButton onClick={() => loadMore(searchKey, moviesData.page)}>
          Load more
        </LoadButton>
      )}
    </div>
  );
};

export default Home;
