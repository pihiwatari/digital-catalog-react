import React from "react";
import ModelCard from "../../layouts/modelCard/ModelCard";
import useFetchData from "../../hooks/useFetchData";
import "./Gallery.css";

export default function Gallery() {
  const { data, error, isError, isLoading } = useFetchData(
    "http://localhost:3003/3DModels"
  );

  return (
    <main className="gallery-grid">
      {isLoading && <h1>Loading...</h1>}
      {data.length > 0 &&
        data.map((item) => {
          return (
            <ModelCard
              // id={item.id}
              name={item.name}
              price={item.price}
              key={item.id}
              id={item.id}
              modelImage={"" /*Component image here */}
            />
          );
        })}
      {isError && <h1>{error}</h1>}
    </main>
  );
}
