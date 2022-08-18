import React from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import Render3dModel from "../../components/render3dModel/Render3dModel";
// import ModelSpec from "../../components/modelSpec/ModelSpec";
import "./ModelDetailDisplay.css";

export default function ModelDetailDisplay({ model }) {
  const { name, modelURL, uploadedOn } = model;

  // width management to show and hide elements
  const showText = useWindowWidth();

  return (
    <article className="model__display">
      <div className="display__render">
        <Render3dModel url={"http://localhost:3003/files/" + modelURL} />
      </div>
      <div className="model__data-container">
        <div className="data__title-container">
          <h2>{name || "No name"}</h2>
          {showText && <span>| {Date(uploadedOn)} </span>}
        </div>
        <ul className="data__specs-list">
          {/* {modelSpecs.map((item, key) => {
            return (
              <ModelSpec
                spec={item.spec}
                value={item.value}
                unit={item.unit}
                key={key}
              />
            );
          })} */}
        </ul>
      </div>
    </article>
  );
}
