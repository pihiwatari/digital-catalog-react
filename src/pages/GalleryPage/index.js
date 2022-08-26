import React from "react";

function GalleryPage({ models }) {
  const modelItem = models.map((model) => {
    return <li key={model.id}>{model.name}</li>;
  });

  return <ul>{modelItem}</ul>;
}

export { GalleryPage };
