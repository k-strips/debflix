import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.css";

const SearchBar = ({ onSubmit, value, onChange }) => {
  return (
    <div className="search-container">
      <div className="search-border">
        <FontAwesomeIcon icon={["fas", "search"]} />
        <form onSubmit={onSubmit}>
          <input
            type="search"
            name="search-field"
            value={value}
            placeholder="Search Movie"
            onChange={onChange}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
