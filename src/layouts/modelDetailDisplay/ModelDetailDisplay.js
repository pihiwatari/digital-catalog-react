import React from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import Render3dModel from "../../components/render3dModel/Render3dModel";
import ModelSpec from "../../components/modelSpec/ModelSpec";
import "./ModelDetailDisplay.css";

export default function ModelDetailDisplay({ name, date, url }) {
  const showText = useWindowWidth();

  const uploadDate = new Date(date).toUTCString("MM-DD-YY");

  // -----3d model specs state management-----
  // const [modelSpecs, setModelSpecs ] = useState([])
  // const getModelSpecs = () => {};
  const modelSpecs = [
    { spec: "x", value: 50, unit: "mm" },
    { spec: "y", value: 30, unit: "mm" },
    { spec: "z", value: 15, unit: "mm" },
    { spec: "volume", value: 5263.0, unit: "mm³" },
  ];
  // -----3d model specs state management-----
  return (
    <article className="model__display">
      <div className="display__render">
        <Render3dModel url={url} />
      </div>
      <div className="model__data-container">
        <div className="data__title-container">
          <h2>{name || "No name"}</h2>
          {showText && <span>| {uploadDate}</span>}
        </div>
        <ul className="data__specs-list">
          {modelSpecs.map((item, key) => {
            return (
              <ModelSpec
                spec={item.spec}
                value={item.value}
                unit={item.unit}
                key={key}
              />
            );
          })}
        </ul>
      </div>
    </article>
  );
}
