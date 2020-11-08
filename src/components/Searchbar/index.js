import React from "react";

const SearchBar = ({ onSubmit, value, onChange }) => {
  return (
    <div className="search-border">
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
  );
};

export default SearchBar;
