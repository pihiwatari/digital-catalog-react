import React from "react";
import { Link } from "react-router-dom";

function GalleryModelCard({ children, id }) {
  return (
    <Link to={"3DModels/" + id}>
      <article>{children}</article>
    </Link>
  );
}

export { GalleryModelCard };
