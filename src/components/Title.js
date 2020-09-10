import React from "react";
import "../styles/Title.css";

function Title(props) {
  return (
    <div className="container">
      <div className="titleBackground">
        <h1 className="title">Employee Directory</h1>
        <p className="instructions">Click on controls to filter by heading or use the search box to narrow your results</p>
      </div>
    </div>
  );
}

export default Title;
