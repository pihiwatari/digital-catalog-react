import React from "react";
import { Render3DModel } from "../../components/Render3DModel";
import { GalleryModelCard } from "../../layouts/GalleryModelCard";

function GalleryPage({ models }) {
  const baseURL = "http://localhost:3003/files/";

  return (
    <main className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
      {models?.map((model) => {
        const url = baseURL + model.modelURL;

        return (
          <GalleryModelCard id={model.id} key={model.id}>
            <Render3DModel url={url} />
            {model.name}
          </GalleryModelCard>
        );
      })}
    </main>
  );
}

export { GalleryPage };
