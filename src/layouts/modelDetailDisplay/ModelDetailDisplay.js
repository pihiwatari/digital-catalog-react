import React, { useEffect, useState } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import Render3dModel from "../../components/render3dModel/Render3dModel";
import ModelSpec from "../../components/modelSpec/ModelSpec";
import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import "./ModelDetailDisplay.css";

export default function ModelDetailDisplay({ model }) {
  // width management to show and hide elements
  const showText = useWindowWidth();

  // get model URL
  const url = "http://localhost:3003/files/" + model.modelURL;
  // convert URL to geoemtry using loaders.
  const geometry = useLoader(STLLoader, url);

  return (
    <article className="model__display">
      <div className="display__render">
        <Render3dModel modelData={geometry} />
      </div>
      <div className="model__data-container">
        <div className="data__title-container">
          <h2>{model.name || "No name"}</h2>
          {showText && <span>| {Date(model.uploadedOn)} </span>}
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
