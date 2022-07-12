import React from "react";
import ModelCard from "../../layouts/modelCard/ModelCard";
import useFetchData from "../../hooks/useFetchData";
import "./Gallery.css";

export default function Gallery() {
  const { data, error, isError } = useFetchData(
    "http://localhost:3003/3DModels"
  );

  return (
    <main className="gallery-grid">
      {data.length > 0 &&
        data.map((item, key) => {
          return (
            <ModelCard
              // id={item.id}
              name={item.name}
              price={item.price}
              key={key}
              modelImage={"" /*Component image here */}
              avatar=""
            />
          );
        })}
      {isError && <p>{error}</p>}
    </main>
  );
}
