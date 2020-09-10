import React from "react";
import "../styles/SearchForm.css";

function SearchForm({ handleSearchChange }) {
  return (
    <div className="container row">
      <form>
        <div className="form-group col-xl-12">
          <input
            onChange={e => handleSearchChange(e)}
            // value={props.value}
            // name="search"
            type="search"
            className="form-control"
            placeholder="Name Search"
            id="search"
            size="50"
          />
        </div>
      </form>
      {/* <button onClick={props.handleFormSubmit} 
        className="submitButton btn btn-primary col-md-1">
          Search
      </button> */}
    </div>
      
  );
}

export default SearchForm;