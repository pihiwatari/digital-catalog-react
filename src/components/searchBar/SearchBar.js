import React from "react";
import icon from "./search-icon.svg";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <form>
      <img src={icon} alt="search icon" />
      <input placeholder="Search 3D models"></input>
    </form>
  );
};

export default SearchBar;
