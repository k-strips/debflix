import React from "react";
import "./style.css";

//importing helper functions
import { calcTime, dollarFormater } from "../../util/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieExtra = ({ budget, runtime, revenue }) => {
  return (
    <div className="movie-extra">
      <p>running time: {calcTime(runtime)}</p>
      <p>budget: {dollarFormater(budget)}</p>
      <p>revenue: {dollarFormater(revenue)}</p>
    </div>
  );
};

export default MovieExtra;
