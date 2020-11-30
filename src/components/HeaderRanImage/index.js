import React from "react";
import "./style.css";

//imports from local imports
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

const HeaderRanImage = ({ backdrop_path, title, overview }) => {
  return (
    <div
      className="hero-image"
      style={{
        background: `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path}) no-repeat`,
      }}
    >
      <section className="hero-image-txt">
        <h3>{title}</h3>
        <p>{overview}</p>
      </section>
    </div>
  );
};

export default HeaderRanImage;
