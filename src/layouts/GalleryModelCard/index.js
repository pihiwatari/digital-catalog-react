import React from "react";
import { Link } from "react-router-dom";

function GalleryModelCard({ children, id }) {
  return (
    <Link to={"/3d-models/" + id}>
      <article className="flex flex-col h-72 max-w-sm aspect-square rounded-md bg-gray-300">
        {children}
      </article>
    </Link>
  );
}

export { GalleryModelCard };
