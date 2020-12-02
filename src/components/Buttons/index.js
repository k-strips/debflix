import React from "react";
import "./style.css";

const LoadButton = ({ onClick, children }) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
);

export default LoadButton;
