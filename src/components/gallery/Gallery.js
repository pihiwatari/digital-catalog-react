import React from "react";
import ModelCard from "../modelCard/ModelCard";
import "./Gallery.css";

export default function Gallery() {
  return (
    <main className="gallery-grid">
      <ModelCard />
      <ModelCard />
      <ModelCard />
      <ModelCard />
      <ModelCard />
    </main>
  );
}
