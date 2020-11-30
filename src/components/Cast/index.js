import React from "react";
import "./style.css";

//local component import
import Actor from "../Actor";

const Cast = ({ actors }) => {
  return (
    <div className="cast-container">
      <h2>cast</h2>
      <section className="actors-container">
        {actors.map((actor) => {
          return <Actor actor={actor} />;
        })}
      </section>
    </div>
  );
};

export default Cast;
