import React from "react";
import SearchForm from "./SearchForm.js";
import "../styles/SearchNav.css";

function SearchNav({ handleSearchChange }) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="navbar-collapse row" id="navbarNav">
        <SearchForm handleSearchChange={handleSearchChange} />
      </div>
    </nav>
  );
}
export default SearchNav;