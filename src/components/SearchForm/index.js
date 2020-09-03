import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <div className="container row">
      <form>
        <div className="form-group col-md-10">
          <input
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="Name Search"
            id="search"
            size="50"
          />
          {/* <button onClick={props.handleFormSubmit} className="btn btn-primary">
            Search
          </button> */}
        </div>
      </form>
      <button onClick={props.handleFormSubmit} 
        className="submitButton btn btn-primary col-md-1">
          Search
      </button>
    </div>
      
  );
}

export default SearchForm;