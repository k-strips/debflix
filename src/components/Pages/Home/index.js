import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//constants
import { POPULAR_BASE_URL, SEARCH_BASE_URL } from "../../../config";
import { randomInt } from "../../../util/helpers";

//import components
import { useHome } from "../../../Hooks/useHome";
import LoadButton from "../../Buttons";
import Header from "../../Header";
import MovieList from "../../MovieList";

const Home = () => {
  const [searchParam, setSearchParam] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [{ moviesData, isLoading, isError }, setEndpoint] = useHome();

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
    <>
      <Header
        {...moviesData.movies[randomInt()]}
        onChange={handleChange}
        onSubmit={handleSubmit}
        value={searchParam}
      />
      {isError && <div>Sorry...Something terrible happened:(</div>}
      {isLoading ? (
        <div>
          <FontAwesomeIcon icon={["fas", "spinner"]} size="4x" spin />
        </div>
      ) : (
        <MovieList
          moviesData={moviesData}
          onClick={loadMore}
          searchKey={searchKey}
        />
      )}
    </>
  );
};

export default Home;
