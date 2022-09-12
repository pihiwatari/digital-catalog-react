import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchModel({ searchValue, setSearchValue }) {
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="flex gap-4 items-center h-12 m-4 p-2 rounded-sm bg-gray-300 hover:bg-primary-light">
      <button onClick={(e) => handleInputChange(e)}>
        <FaSearch className="w-6 h-6 text-primary" />
      </button>
      <input
        placeholder="Search 3D models"
        className="w-full h-full focus-visible:outline-none bg-transparent"
        onChange={(e) => handleInputChange(e)}
        value={searchValue}
      />
    </div>
  );
}

export { SearchModel };
