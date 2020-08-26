import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="container">
      <h1 className="title">Employee Directory</h1>
      <p className="instructions">Click on controls to filter by heading or use the search box to narrow your results</p>
    </div>
  );
}

export default Title;
