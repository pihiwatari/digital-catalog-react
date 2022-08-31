import React from "react";
import { Link } from "react-router-dom";

function GalleryModelCard({ children, id }) {
  return (
    <Link to={"3DModels/" + id}>
      <article className="flex flex-col h-72 aspect-square bg-gray-300">
        {children}
      </article>
    </Link>
  );
}

export { GalleryModelCard };
