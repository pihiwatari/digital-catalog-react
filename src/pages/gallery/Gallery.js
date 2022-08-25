import React from "react";
import { ErrorBoundary } from "../../components/ErrorBoundary";
import ModelCard from "../../layouts/modelCard/ModelCard";
import "./Gallery.css";

export default function Gallery({ models }) {
  return (
    <ErrorBoundary>
      <main className="gallery-grid">
        {!!models?.length &&
          models.map((item) => {
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
      </main>
    </ErrorBoundary>
  );
}
