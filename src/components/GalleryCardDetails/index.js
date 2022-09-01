import React from "react";

function GalleryCardDetails({ name, price }) {
  return (
    <div className="flex justify-between items-center p-4 rounded-b-md bg-white">
      <div className="w-8 h-8 bg-gray-500"></div>
      <p>{name}</p>
      <p>${price}</p>
    </div>
  );
}

export { GalleryCardDetails };
