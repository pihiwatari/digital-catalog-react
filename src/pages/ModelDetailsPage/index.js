import React from "react";
import { useParams } from "react-router-dom";
import { Render3DModel } from "../../components/Render3DModel";

function ModelDetailsPage({ models }) {
  const { id } = useParams();

  const model = models[id];

  return (
    <main>
      <section>
        <Render3DModel url={model.url} />
        <div>
          <h2>{model.name}</h2>
          <div>End of project</div>
        </div>
      </section>
      <section>Side bar block</section>
    </main>
  );
}

export { ModelDetailsPage };
