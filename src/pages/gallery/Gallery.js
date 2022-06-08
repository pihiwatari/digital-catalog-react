import React from "react";
import ModelCard from "../../layouts/modelCard/ModelCard";
import "./Gallery.css";

export default function Gallery() {
  return (
    <main className="gallery-grid">
      <ModelCard
        modelImage={""}
        avatar={""}
        name={"Test model 1"}
        price={99.0}
      />
      <ModelCard
        modelImage={""}
        avatar={""}
        name={"Test model 2"}
        price={85.5}
      />
      <ModelCard
        modelImage={""}
        avatar={""}
        name={"Test model 3"}
        price={25.69}
      />
      <ModelCard
        modelImage={""}
        avatar={""}
        name={"Test model 4"}
        price={174.89}
      />
      <ModelCard
        modelImage={""}
        avatar={""}
        name={"Test model 5"}
        price={1.58}
      />
      <ModelCard
        modelImage={""}
        avatar={""}
        name={"Test model 6"}
        price={4.66}
      />
    </main>
  );
}
