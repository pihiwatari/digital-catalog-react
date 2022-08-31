import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchModel() {
  return (
    <div className="flex gap-4 items-center h-12 m-4 p-2 rounded-sm bg-gray-300">
      <FaSearch className="w-6 h-6 text-primary" />
      <input placeholder="Search 3D models" className="bg-transparent" />
    </div>
  );
}

export { SearchModel };
