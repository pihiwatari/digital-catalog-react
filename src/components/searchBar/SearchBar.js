import React from "react";
import icon from "./search-icon.svg";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <form className="search-bar-form">
      <img src={icon} alt="search icon" />
      <input className="search-bar-input" placeholder="Search 3D models" />
    </form>
  );
};

export default SearchBar;
