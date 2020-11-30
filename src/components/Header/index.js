import React from "react";
import SearchBar from "../Searchbar";
import "./style.css";

//imports from local imports
import HeaderRanImage from "../HeaderRanImage";

const Header = ({
  onChange,
  onSubmit,
  value,
  backdrop_path,
  title,
  overview,
}) => {
  return (
    <>
      <HeaderRanImage
        backdrop_path={backdrop_path}
        title={title}
        overview={overview}
      />
      <SearchBar onChange={onChange} onSubmit={onSubmit} value={value} />
    </>
  );
};

export default Header;
