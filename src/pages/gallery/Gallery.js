import React from "react";
import ModelCard from "../../layouts/modelCard/ModelCard";
import apiData from "../../utils/mockupData";
import "./Gallery.css";

export default function Gallery() {
  return (
    <main className="gallery-grid">
      {apiData.map((item) => {
        return (
          <ModelCard
            id={item.id}
            name={item.name}
            price={item.price}
            key={item.id}
            modelImage={"" /*Component image here */}
            avatar=""
          />
        );
      })}
    </main>
  );
}
