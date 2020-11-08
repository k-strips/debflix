import React from "react";

const MovieThumbnail = ({ id, title }) => {
  return (
    <div key={id}>
      <p>{title}</p>
    </div>
  );
};

export default MovieThumbnail;
