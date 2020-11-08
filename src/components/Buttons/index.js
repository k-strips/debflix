import React from "react";

const LoadButton = ({ onClick, children }) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
);

export default LoadButton;
