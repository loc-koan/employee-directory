import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <div className="container row">
      <form>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search"
            id="search"
          />
          <button onClick={props.handleFormSubmit} className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </div>
      
  );
}

export default SearchForm;